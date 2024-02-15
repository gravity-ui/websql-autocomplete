import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {TableSymbol} from '../../lib/symbolTable.js';
import {
    AutocompleteData,
    AutocompleteParseResult,
    ISymbolTableVisitor,
    TableOrViewSuggestion,
} from '../../types.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';
import {
    InsertTargetContext,
    PostgreSqlParser,
    RelationExpressionContext,
    TableReferenceContext,
} from './generated/PostgreSqlParser.js';
import {PostgreSqlParserVisitor} from './generated/PostgreSqlParserVisitor.js';
import {TableQueryPosition, TokenDictionary, hasPreviousToken} from '../../lib/tables.js';

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

const preferredRules = new Set([
    PostgreSqlParser.RULE_columnId,
    PostgreSqlParser.RULE_functionName,
    PostgreSqlParser.RULE_functionExpressionCommonSubexpr,

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
}

function generateSuggestionsFromRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): Partial<AutocompleteParseResult> & {suggestColumns?: boolean} {
    let suggestViewsOrTables: AutocompleteParseResult['suggestViewsOrTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestColumns = false;

    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case PostgreSqlParser.RULE_functionExpressionCommonSubexpr:
            case PostgreSqlParser.RULE_functionName: {
                if (cursorTokenIndex === ruleData.startTokenIndex) {
                    suggestFunctions = true;
                    // TODO Not sure yet how to specifically find aggregate functions
                    suggestAggregateFunctions = true;
                }
                break;
            }
            case PostgreSqlParser.RULE_columnId: {
                const isInsideQualifiedName =
                    ruleData.ruleList.includes(PostgreSqlParser.RULE_qualifiedName) &&
                    (ruleData.ruleList.includes(PostgreSqlParser.RULE_insertTarget) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_relationExpression));
                const canSuggestTables =
                    !ruleData.ruleList.includes(PostgreSqlParser.RULE_createStatement) &&
                    (isInsideQualifiedName ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_functionTable));

                // We need to check cursorTokenIndex here, because colid -> identifier might have multiple tokens
                if (cursorTokenIndex !== ruleData.startTokenIndex) {
                    break;
                }

                if (
                    hasPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        PostgreSqlParser.VIEW,
                    ) &&
                    // Table name is the first identifier, so if we found one before,
                    // then this is not a table name
                    !hasPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        PostgreSqlParser.Identifier,
                    ) &&
                    (ruleData.ruleList.includes(PostgreSqlParser.RULE_alterTableStatement) ||
                        ruleData.ruleList.includes(
                            PostgreSqlParser.RULE_refreshMaterializedViewStatement,
                        ) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_renameStatement) ||
                        ruleData.ruleList.includes(
                            PostgreSqlParser.RULE_alterObjectDependsStatement,
                        ) ||
                        ruleData.ruleList.includes(
                            PostgreSqlParser.RULE_alterObjectSchemaStatement,
                        ) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_dropStatement))
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.VIEWS;
                } else if (
                    hasPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        PostgreSqlParser.TABLE,
                    ) &&
                    (ruleData.ruleList.includes(PostgreSqlParser.RULE_dropStatement) ||
                        canSuggestTables)
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.TABLES;
                } else if (canSuggestTables) {
                    suggestViewsOrTables = TableOrViewSuggestion.ALL;
                } else if (
                    !ruleData.ruleList.includes(PostgreSqlParser.RULE_selectLimitValue) &&
                    !ruleData.ruleList.includes(PostgreSqlParser.RULE_selectOffsetValue)
                ) {
                    suggestColumns = true;
                }
                break;
            }
        }
    }

    return {suggestViewsOrTables, suggestAggregateFunctions, suggestFunctions, suggestColumns};
}

function getParseTree(parser: PostgreSqlParser, type?: TableQueryPosition['type']): ParseTree {
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
    }
}

export const postgreSqlAutocompleteData: AutocompleteData<
    PostgreSqlLexer,
    PostgreSqlParser,
    PostgreSqlSymbolTableVisitor
> = {
    Lexer: PostgreSqlLexer,
    Parser: PostgreSqlParser,
    SymbolTableVisitor: PostgreSqlSymbolTableVisitor,
    tokenDictionary,
    ignoredTokens,
    preferredRules,
    explicitlyParseJoin: true,
    getParseTree,
    generateSuggestionsFromRules,
};
