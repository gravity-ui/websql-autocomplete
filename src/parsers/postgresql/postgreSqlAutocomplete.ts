import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {TableSymbol} from '../../lib/symbolTable.js';
import {
    AutocompleteParseResult,
    ISymbolTableVisitor,
    AutocompleteData,
    TableSuggestion
} from '../../types.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';
import {
    PostgreSqlParser,
    Relation_exprContext,
    Table_refContext,
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
    const lastFunctionIndex = PostgreSqlParser.TO_NUMBER;
    for (let i = firstFunctionIndex; i <= lastFunctionIndex; i++) {
        tokens.push(i);
    }

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const preferredRules = new Set([
    PostgreSqlParser.RULE_relation_expr,
    PostgreSqlParser.RULE_insert_target,
    PostgreSqlParser.RULE_builtin_function_name,
    PostgreSqlParser.RULE_colid,
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
}

function generateSuggestionsFromRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): Partial<AutocompleteParseResult> & {suggestColumns?: boolean} {
    let suggestTables: AutocompleteParseResult['suggestTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestColumns = false;

    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case PostgreSqlParser.RULE_relation_expr:
            case PostgreSqlParser.RULE_insert_target: {
                if (
                    cursorTokenIndex === ruleData.startTokenIndex &&
                    !ruleData.ruleList.includes(PostgreSqlParser.RULE_createstmt)
                ) {
                    if (hasPreviousToken(tokenStream, cursorTokenIndex, PostgreSqlParser.TABLE)) {
                        suggestTables = TableSuggestion.TABLES;
                    } else {
                        suggestTables = TableSuggestion.ALL;
                    }
                }
                break;
            }
            case PostgreSqlParser.RULE_builtin_function_name: {
                suggestFunctions = true;
                // TODO Not sure yet how to specifically find aggregate functions
                suggestAggregateFunctions = true;
                break;
            }
            case PostgreSqlParser.RULE_colid: {
                // Don't need to check cursorTokenIndex here, because colid is too specific already
                if (
                    hasPreviousToken(tokenStream, cursorTokenIndex, PostgreSqlParser.VIEW) &&
                    // Table name is the first identifier, so if we found one before,
                    // then this is not a table name
                    !hasPreviousToken(tokenStream, cursorTokenIndex, PostgreSqlParser.Identifier) &&
                    (ruleData.ruleList.includes(PostgreSqlParser.RULE_altertablestmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_refreshmatviewstmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_renamestmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_alterobjectdependsstmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_alterobjectschemastmt) ||
                        ruleData.ruleList.includes(PostgreSqlParser.RULE_dropstmt))
                ) {
                    suggestTables = TableSuggestion.VIEWS;
                } else if (
                    hasPreviousToken(tokenStream, cursorTokenIndex, PostgreSqlParser.TABLE) &&
                    ruleData.ruleList.includes(PostgreSqlParser.RULE_dropstmt)
                ) {
                    suggestTables = TableSuggestion.TABLES;
                } else {
                    suggestColumns = true;
                }
                break;
            }
        }
    }

    return {suggestTables, suggestAggregateFunctions, suggestFunctions, suggestColumns};
}

function getParseTree(parser: PostgreSqlParser, type?: TableQueryPosition['type']): ParseTree {
    if (!type) {
        return parser.root();
    }

    switch (type) {
        case 'from':
            return parser.non_ansi_join();
        case 'alter':
            return parser.altertablestmt();
        // INSERT doesn't work for now, for some reason any INSERT statement throws error
        case 'insert':
            return parser.insert_target();
        // UPDATE does work with suggestions but throws error for some reason
        case 'update':
            return parser.updatestmt();
    }
}

export const postgreSqlAutocompleteData: AutocompleteData<PostgreSqlLexer, PostgreSqlParser, PostgreSqlSymbolTableVisitor> = {
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
