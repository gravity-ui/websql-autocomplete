import {ParseTree, ParserRuleContext, TerminalNode, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {ColumnAliasSymbol, TableSymbol} from '../../shared/symbol-table.js';
import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    ISymbolTableVisitor,
    ProcessVisitedRulesResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';
import {
    C_expr_caseContext,
    C_expr_exprContext,
    ColumnReferenceContext,
    Expression1CollateContext,
    Expression1TypecastContext,
    FunctionExpressionContext,
    FunctionNameContext,
    IndirectionContext,
    InsertTargetContext,
    PostgreSqlParser,
    RelationExpressionContext,
    SelectWithParenthesisContext,
    TableReferenceContext,
    TargetListContext,
    Target_labelContext,
    ViewNameContext,
} from './generated/PostgreSqlParser.js';
import {PostgreSqlParserVisitor} from './generated/PostgreSqlParserVisitor.js';
import {
    TableQueryPosition,
    TokenDictionary,
    getContextSuggestions,
    getPreviousToken,
} from '../../shared/tables.js';
import {isStartingToWriteRule} from '../../shared/cursor.js';
import {shouldSuggestTemplates} from '../../shared/query.js';
import {PostgreSqlAutocompleteResult} from './index.js';

const tokenDictionary: TokenDictionary = {
    SPACE: PostgreSqlParser.Whitespace,
    FROM: PostgreSqlParser.FROM,
    OPENING_BRACKET: PostgreSqlParser.OPEN_PAREN,
    CLOSING_BRACKET: PostgreSqlParser.CLOSE_PAREN,
    ALTER: PostgreSqlParser.ALTER,
    INSERT: PostgreSqlParser.INSERT,
    UPDATE: PostgreSqlParser.UPDATE,
    JOIN: PostgreSqlParser.JOIN,
    SEMICOLON: PostgreSqlParser.SEMI,
    SELECT: PostgreSqlParser.SELECT,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    const firstOperatorIndex = PostgreSqlParser.Dollar;
    const lastOperatorIndex = PostgreSqlParser.Operator;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        // We actually want Star to appear in autocomplete
        if (i !== PostgreSqlParser.STAR) {
            tokens.push(i);
        }
    }

    // Ignoring functions for now, need custom logic for them later
    const firstFunctionIndex = PostgreSqlParser.ABS;
    const lastFunctionIndex = PostgreSqlParser.AfterEscapeStringConstantWithNewlineMode_Continued;
    for (let i = firstFunctionIndex; i <= lastFunctionIndex; i++) {
        tokens.push(i);
    }

    tokens.push(PostgreSqlParser.EOF);
    tokens.push(PostgreSqlParser.DOUBLE_CURLY_PLACEHOLDER);

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([
    PostgreSqlParser.RULE_columnId,
    PostgreSqlParser.RULE_functionName,
    PostgreSqlParser.RULE_functionExpressionCommonSubexpr,
    PostgreSqlParser.RULE_indexName,
    PostgreSqlParser.RULE_triggerName,
    PostgreSqlParser.RULE_constraintName,
    PostgreSqlParser.RULE_sequenceName,
    PostgreSqlParser.RULE_schemaName,
    PostgreSqlParser.RULE_databaseName,
    PostgreSqlParser.RULE_roleName,

    // All of these are identifier names, we don't want to suggest them
    PostgreSqlParser.RULE_identifier,
    PostgreSqlParser.RULE_plsqlVariableName,
    PostgreSqlParser.RULE_constTypeName,
    PostgreSqlParser.RULE_columnNameKeyword,
    PostgreSqlParser.RULE_unreservedKeyword,
    PostgreSqlParser.RULE_plsqlUnreservedKeyword,
    PostgreSqlParser.RULE_typeFunctionNameKeyword,
    PostgreSqlParser.RULE_reservedKeyword,
]);

function getSubqueryTargetList(context: SelectWithParenthesisContext): TargetListContext | null {
    const parenthesizedSelect = context.selectWithParenthesis();
    if (parenthesizedSelect) {
        return getSubqueryTargetList(parenthesizedSelect);
    }

    // In case of UNION, INTERSECT, etc. the first SELECT determines column names
    const simpleSelect = context
        .selectWithoutParenthesis()
        ?.selectClause()
        .simpleSelectIntersect(0)
        ?.simpleSelectPramary(0);
    const nestedSelect = simpleSelect?.selectWithParenthesis();
    if (nestedSelect) {
        return getSubqueryTargetList(nestedSelect);
    }

    const selectStart = simpleSelect?.simpleSelectStart();
    return selectStart?.targetList() ?? selectStart?.optionalTargetList()?.targetList() ?? null;
}

// Unquoted identifiers are folded to lower case
function normalizeName(name: string): string {
    return name.startsWith('"') ? name : name.toLowerCase();
}

// Last name of a qualified name, e.g. "column" for schema.table.column
function getLastName(name: ParserRuleContext, indirection: IndirectionContext | null): string {
    const attributeNames =
        indirection
            ?.indirectionElement()
            .map((element) => element.attributeName())
            .filter((attributeName) => attributeName !== null) ?? [];

    return normalizeName((attributeNames[attributeNames.length - 1] ?? name).getText());
}

// Output column name PostgreSQL assigns to an expression without alias,
// undefined if it's a generic "?column?" name that can't be suggested
function getOutputColumnName(tree: ParseTree): string | undefined {
    let node: ParseTree | null = tree;

    while (node) {
        if (node instanceof ColumnReferenceContext) {
            return getLastName(node.columnId(), node.indirection());
        }

        if (node instanceof FunctionExpressionContext) {
            const functionName: FunctionNameContext | undefined = node
                .functionApplication()
                ?.functionName();
            if (functionName) {
                return getLastName(
                    functionName.columnId() ?? functionName,
                    functionName.indirection(),
                );
            }

            // Function-like keywords, e.g. COALESCE(...), CURRENT_DATE
            const commonFunction = node.functionExpressionCommonSubexpr();
            if (!commonFunction) {
                return undefined;
            }

            const keywordType = commonFunction.start?.type;
            // CAST(expression AS type) is named after the expression
            if (keywordType === PostgreSqlParser.CAST) {
                const expression = commonFunction.expression1(0);
                return expression ? getOutputColumnName(expression) : undefined;
            }
            // Some keywords map to differently named functions
            if (keywordType === PostgreSqlParser.TRIM) {
                // TRIM ( [BOTH | LEADING | TRAILING] ...
                const sideToken = commonFunction.getChild(2);
                const sideType = sideToken instanceof TerminalNode ? sideToken.symbol.type : null;
                if (sideType === PostgreSqlParser.LEADING) {
                    return 'ltrim';
                }
                return sideType === PostgreSqlParser.TRAILING ? 'rtrim' : 'btrim';
            }
            if (keywordType === PostgreSqlParser.COLLATION) {
                return 'pg_collation_for';
            }

            return commonFunction.start?.text?.toLowerCase();
        }

        // (expression) is named after the expression, (row).field after the field
        if (node instanceof C_expr_exprContext && node._a_expr_in_parens) {
            const indirection = node.optionalIndirection();
            const hasAttributes = indirection
                ?.indirectionElement()
                .some((element) => element.attributeName() !== null);
            if (hasAttributes && indirection) {
                return getLastName(node, indirection);
            }
            return getOutputColumnName(node._a_expr_in_parens);
        }

        // expression COLLATE collation is named after the expression
        if (node instanceof Expression1CollateContext && node.getChildCount() > 1) {
            return getOutputColumnName(node.expression1Typecast());
        }

        if (node instanceof C_expr_caseContext) {
            return 'case';
        }

        // expression::type is named after the expression
        if (node instanceof Expression1TypecastContext && node.typeName().length) {
            return getOutputColumnName(node.expression3());
        }

        if (node.getChildCount() !== 1) {
            return undefined;
        }
        node = node.getChild(0);
    }

    return undefined;
}

// Output column names of the subquery by position, or undefined if they can't be determined
// without schema
function getSubqueryOutputColumnNames(
    subquery: SelectWithParenthesisContext,
): (string | undefined)[] | undefined {
    const names: (string | undefined)[] = [];

    for (const targetElement of getSubqueryTargetList(subquery)?.targetElement() ?? []) {
        // SELECT *
        if (!(targetElement instanceof Target_labelContext)) {
            return undefined;
        }

        const alias = (targetElement.columnLabel() ?? targetElement.identifier())?.getText();
        if (alias) {
            names.push(normalizeName(alias));
            continue;
        }

        // SELECT t.*
        if (targetElement.expression1().getText().endsWith('*')) {
            return undefined;
        }

        names.push(getOutputColumnName(targetElement.expression1()));
    }

    return names;
}

// Result column names of the subquery, or undefined if they can't be determined without schema
function getSubqueryColumns(context: TableReferenceContext): string[] | undefined {
    const subquery = context.selectWithParenthesis();
    if (!subquery) {
        return undefined;
    }

    // Column aliases, e.g. (SELECT ...) AS t (a, b)
    const columnAliases =
        context
            .optionalAliasClause()
            ?.tableAliasClause()
            ?.nameList()
            ?.name()
            .map((name) => normalizeName(name.getText())) ?? [];
    const outputColumnNames = getSubqueryOutputColumnNames(subquery);

    if (!outputColumnNames) {
        return columnAliases.length ? columnAliases : undefined;
    }

    // Column aliases rename columns by position, the rest keep their names,
    // e.g. (SELECT a, b ...) AS t (u) has columns u and b
    const columns = Array.from(
        {length: Math.max(columnAliases.length, outputColumnNames.length)},
        (_, index) => columnAliases[index] ?? outputColumnNames[index],
    ).filter((name): name is string => Boolean(name));

    return columns.length ? columns : undefined;
}

class PostgreSqlSymbolTableVisitor
    extends PostgreSqlParserVisitor<{}>
    implements ISymbolTableVisitor
{
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {allowDuplicateSymbols: true});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitChildren(node: ParserRuleContext): {} {
        // Tables and column aliases of nested subqueries are not visible outside of them
        if (node instanceof SelectWithParenthesisContext) {
            return {};
        }

        return super.visitChildren(node) as {};
    }

    visitRelationExpression = (context: RelationExpressionContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.tableIdentifier()?.getText() || '',
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitTableReference = (context: TableReferenceContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.relationExpression()?.tableIdentifier()?.getText() || '',
                context.optionalAliasClause()?.tableAliasClause()?.tableAlias()?.getText(),
                getSubqueryColumns(context),
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitInsertTarget = (context: InsertTargetContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.tableIdentifier()?.getText() || '',
                context.columnId()?.getText(),
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitTarget_label = (context: Target_labelContext): {} => {
        try {
            const alias = context.columnLabel()?.getText() || context.identifier()?.getText();

            if (alias) {
                this.symbolTable.addNewSymbolOfType(ColumnAliasSymbol, this.scope, alias);
            }
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitViewName = (context: ViewNameContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.getText());
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };
}

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): ProcessVisitedRulesResult<PostgreSqlAutocompleteResult> {
    let suggestViewsOrTables: PostgreSqlAutocompleteResult['suggestViewsOrTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestIndexes = false;
    let suggestTriggers = false;
    let suggestSequences = false;
    let suggestSchemas = false;
    let suggestDatabases = false;
    let suggestRoles = false;
    let shouldSuggestConstraints = false;
    let shouldSuggestColumns = false;
    let shouldSuggestColumnAliases = false;

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            continue;
        }

        switch (ruleId) {
            case PostgreSqlParser.RULE_functionExpressionCommonSubexpr:
            case PostgreSqlParser.RULE_functionName: {
                suggestFunctions = true;
                // TODO Not sure yet how to specifically find aggregate functions
                suggestAggregateFunctions = true;
                break;
            }
            case PostgreSqlParser.RULE_columnId: {
                const isInsideTableIdentifier =
                    rule.ruleList.includes(PostgreSqlParser.RULE_tableIdentifier) &&
                    (rule.ruleList.includes(PostgreSqlParser.RULE_insertTarget) ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_relationExpression));
                const canSuggestTables =
                    !rule.ruleList.includes(PostgreSqlParser.RULE_createStatement) &&
                    (isInsideTableIdentifier ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_functionTable));

                if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        PostgreSqlParser.VIEW,
                    ) &&
                    // Table name is the first identifier, so if we found one before,
                    // then this is not a table name
                    !getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        PostgreSqlParser.Identifier,
                    ) &&
                    (rule.ruleList.includes(PostgreSqlParser.RULE_alterTableStatement) ||
                        rule.ruleList.includes(
                            PostgreSqlParser.RULE_refreshMaterializedViewStatement,
                        ) ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_renameStatement) ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_alterObjectDependsStatement) ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_alterObjectSchemaStatement) ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_dropStatement))
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.VIEWS;
                } else if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        PostgreSqlParser.TABLE,
                    ) &&
                    (rule.ruleList.includes(PostgreSqlParser.RULE_dropStatement) ||
                        canSuggestTables)
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.TABLES;
                } else if (canSuggestTables) {
                    suggestViewsOrTables = TableOrViewSuggestion.ALL;
                } else if (
                    !rule.ruleList.includes(PostgreSqlParser.RULE_selectLimitValue) &&
                    !rule.ruleList.includes(PostgreSqlParser.RULE_selectOffsetValue)
                ) {
                    shouldSuggestColumns = true;
                    if (
                        rule.ruleList.includes(PostgreSqlParser.RULE_groupByItem) ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_sortBy)
                    ) {
                        shouldSuggestColumnAliases = true;
                    }
                }
                break;
            }
            case PostgreSqlParser.RULE_indexName: {
                suggestIndexes = true;
                break;
            }
            case PostgreSqlParser.RULE_triggerName: {
                suggestTriggers = true;
                break;
            }
            case PostgreSqlParser.RULE_constraintName: {
                shouldSuggestConstraints = true;
                break;
            }
            case PostgreSqlParser.RULE_sequenceName: {
                suggestSequences = true;
                break;
            }
            case PostgreSqlParser.RULE_schemaName: {
                if (!rule.ruleList.includes(PostgreSqlParser.RULE_tableIdentifier)) {
                    suggestSchemas = true;
                }

                break;
            }
            case PostgreSqlParser.RULE_databaseName: {
                if (!rule.ruleList.includes(PostgreSqlParser.RULE_tableIdentifier)) {
                    suggestDatabases = true;
                }

                break;
            }
            case PostgreSqlParser.RULE_roleName: {
                suggestRoles = true;
            }
        }
    }

    return {
        suggestViewsOrTables,
        suggestAggregateFunctions,
        suggestFunctions,
        suggestIndexes,
        suggestTriggers,
        shouldSuggestConstraints,
        suggestSequences,
        suggestSchemas,
        suggestDatabases,
        suggestRoles,
        shouldSuggestColumns,
        shouldSuggestColumnAliases,
    };
}

function getParseTree(
    parser: PostgreSqlParser,
    type?: TableQueryPosition['type'] | 'select',
): ParseTree {
    if (!type) {
        return parser.root();
    }

    switch (type) {
        case 'from':
            return parser.nonAnsiJoin();
        case 'alter':
            return parser.alterTableStatement();
        case 'insert':
            return parser.insertStatement();
        case 'update':
            return parser.updateStatement();
        case 'select':
            return parser.selectStatement();
    }
}

function enrichAutocompleteResult(
    baseResult: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    tokenStream: TokenStream,
    cursorTokenIndex: number,
    cursor: CursorPosition,
    query: string,
): PostgreSqlAutocompleteResult {
    const {
        shouldSuggestColumns,
        shouldSuggestColumnAliases,
        shouldSuggestConstraints,
        ...suggestionsFromRules
    } = processVisitedRules(rules, cursorTokenIndex, tokenStream);
    const suggestTemplates = shouldSuggestTemplates(query, cursor);
    const result: PostgreSqlAutocompleteResult = {
        ...baseResult,
        ...suggestionsFromRules,
        suggestTemplates,
    };
    const contextSuggestionsNeeded =
        shouldSuggestColumns || shouldSuggestConstraints || shouldSuggestColumnAliases;

    if (contextSuggestionsNeeded) {
        const visitor = new PostgreSqlSymbolTableVisitor();
        const {tableContextSuggestion, suggestColumnAliases} = getContextSuggestions(
            PostgreSqlLexer,
            PostgreSqlParser,
            visitor,
            tokenDictionary,
            getParseTree,
            tokenStream,
            cursor,
            query,
            true,
        );

        if (shouldSuggestColumns && tableContextSuggestion) {
            result.suggestColumns = tableContextSuggestion;
        }
        if (shouldSuggestConstraints && tableContextSuggestion) {
            result.suggestConstraints = tableContextSuggestion;
        }
        if (shouldSuggestColumnAliases && suggestColumnAliases) {
            result.suggestColumnAliases = suggestColumnAliases;
        }
    }

    return result;
}

export const postgreSqlAutocompleteData: AutocompleteData<
    PostgreSqlAutocompleteResult,
    PostgreSqlLexer,
    PostgreSqlParser
> = {
    Lexer: PostgreSqlLexer,
    Parser: PostgreSqlParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
