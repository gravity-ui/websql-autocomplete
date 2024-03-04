import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {ColumnAliasSymbol, TableSymbol} from '../../shared/symbol-table.js';
import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    ISymbolTableVisitor,
    PostgreSqlAutocompleteResult,
    ProcessVisitedRulesResult,
    TableOrViewSuggestion,
} from '../../autocomplete-types.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';
import {
    InsertTargetContext,
    PostgreSqlParser,
    RelationExpressionContext,
    TableReferenceContext,
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
import {isStartingToWriteRule} from '../../shared/cursor';
import {shouldSuggestTemplates} from '../../shared/query.js';

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
    PostgreSqlParser.RULE_roleId,

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

class PostgreSqlSymbolTableVisitor
    extends PostgreSqlParserVisitor<{}>
    implements ISymbolTableVisitor
{
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitRelationExpression = (context: RelationExpressionContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.qualifiedName()?.getText() || '',
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
                context.relationExpression()?.qualifiedName()?.getText() || '',
                context.optionalAliasClause()?.tableAliasClause()?.tableAlias()?.getText(),
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
                context.qualifiedName()?.getText() || '',
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
                const isInsideQualifiedName =
                    rule.ruleList.includes(PostgreSqlParser.RULE_qualifiedName) &&
                    (rule.ruleList.includes(PostgreSqlParser.RULE_insertTarget) ||
                        rule.ruleList.includes(PostgreSqlParser.RULE_relationExpression));
                const canSuggestTables =
                    !rule.ruleList.includes(PostgreSqlParser.RULE_createStatement) &&
                    (isInsideQualifiedName ||
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
                suggestSchemas = true;
                break;
            }
            case PostgreSqlParser.RULE_databaseName: {
                suggestDatabases = true;
                break;
            }
            case PostgreSqlParser.RULE_roleId: {
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
