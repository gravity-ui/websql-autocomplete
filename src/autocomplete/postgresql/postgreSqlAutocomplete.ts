import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {ColumnAliasSymbol, TableSymbol} from '../../lib/symbolTable.js';
import {
    AutocompleteData,
    AutocompleteParseResult,
    GenerateSuggestionsFromRulesReturnType,
    ISymbolTableVisitor,
    TableOrViewSuggestion,
} from '../../types.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';
import {
    Insert_targetContext,
    PostgreSqlParser,
    Relation_exprContext,
    Table_refContext,
    Target_labelContext,
} from './generated/PostgreSqlParser.js';
import {PostgreSqlParserVisitor} from './generated/PostgreSqlParserVisitor.js';
import {TableQueryPosition, TokenDictionary, getPreviousToken} from '../../lib/tables.js';

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

const preferredRules = new Set([
    PostgreSqlParser.RULE_colid,
    PostgreSqlParser.RULE_func_name,
    PostgreSqlParser.RULE_func_expr_common_subexpr,

    // All of these are identifier names, we don't want to suggest them
    PostgreSqlParser.RULE_identifier,
    PostgreSqlParser.RULE_plsqlvariablename,
    PostgreSqlParser.RULE_consttypename,
    PostgreSqlParser.RULE_col_name_keyword,
    PostgreSqlParser.RULE_unreserved_keyword,
    PostgreSqlParser.RULE_plsql_unreserved_keyword,
    PostgreSqlParser.RULE_type_func_name_keyword,
    PostgreSqlParser.RULE_reserved_keyword,
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

    visitRelation_expr = (context: Relation_exprContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.qualified_name()?.getText() || '',
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitTable_ref = (context: Table_refContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.relation_expr()?.qualified_name()?.getText() || '',
                context.opt_alias_clause()?.table_alias_clause()?.table_alias()?.getText(),
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitInsert_target = (context: Insert_targetContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.qualified_name()?.getText() || '',
                context.colid()?.getText(),
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
            const alias = context.collabel()?.getText() || context.identifier()?.getText();

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
}

function generateSuggestionsFromRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): GenerateSuggestionsFromRulesReturnType {
    let suggestViewsOrTables: AutocompleteParseResult['suggestViewsOrTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let shouldSuggestColumns = false;
    let shouldSuggestColumnAliases = false;

    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case PostgreSqlParser.RULE_func_expr_common_subexpr:
            case PostgreSqlParser.RULE_func_name: {
                if (cursorTokenIndex === ruleData.startTokenIndex) {
                    suggestFunctions = true;
                    // TODO Not sure yet how to specifically find aggregate functions
                    suggestAggregateFunctions = true;
                }
                break;
            }
            case PostgreSqlParser.RULE_colid: {
                const isInsideQualifiedName =
                    ruleData.ruleList.includes(PostgreSqlParser.RULE_qualified_name) &&
                    (ruleData.ruleList.includes(PostgreSqlParser.RULE_insert_target) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_relation_expr));
                const canSuggestTables =
                    !ruleData.ruleList.includes(PostgreSqlParser.RULE_createstmt) &&
                    (isInsideQualifiedName ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_func_table));

                // We need to check cursorTokenIndex here, because colid -> identifier might have multiple tokens
                if (cursorTokenIndex !== ruleData.startTokenIndex) {
                    break;
                }

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
                    (ruleData.ruleList.includes(PostgreSqlParser.RULE_altertablestmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_refreshmatviewstmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_renamestmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_alterobjectdependsstmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_alterobjectschemastmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_dropstmt))
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.VIEWS;
                } else if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        PostgreSqlParser.TABLE,
                    ) &&
                    (ruleData.ruleList.includes(PostgreSqlParser.RULE_dropstmt) || canSuggestTables)
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.TABLES;
                } else if (canSuggestTables) {
                    suggestViewsOrTables = TableOrViewSuggestion.ALL;
                } else if (
                    !ruleData.ruleList.includes(PostgreSqlParser.RULE_select_limit_value) &&
                    !ruleData.ruleList.includes(PostgreSqlParser.RULE_select_offset_value)
                ) {
                    shouldSuggestColumns = true;
                    if (
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_group_by_item) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_sortby)
                    ) {
                        shouldSuggestColumnAliases = true;
                    }
                }
                break;
            }
        }
    }

    return {
        suggestViewsOrTables,
        suggestAggregateFunctions,
        suggestFunctions,
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
            return parser.non_ansi_join();
        case 'alter':
            return parser.altertablestmt();
        case 'insert':
            return parser.insertstmt();
        case 'update':
            return parser.updatestmt();
        case 'select':
            return parser.selectstmt();
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
