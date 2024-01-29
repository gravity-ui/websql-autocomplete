import {ParseTree, Token} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {TableSymbol} from '../../lib/symbolTable.js';
import {AutocompleteParseResult, ISymbolTableVisitor, TableSuggestion} from '../../types.js';
import {MySqlLexer} from './generated/MySqlLexer.js';
import {AtomTableItemContext, MySqlParser, TableNameContext} from './generated/MySqlParser.js';
import {MySqlParserVisitor} from './generated/MySqlParserVisitor.js';
import {TableQueryPosition, TokenDictionary} from '../../lib/tables.js';

const tokenDictionary: TokenDictionary = {
    SPACE: MySqlParser.SPACE,
    FROM: MySqlParser.FROM,
    OPENING_BRACKET: MySqlParser.LR_BRACKET,
    CLOSING_BRACKET: MySqlParser.RR_BRACKET,
    ALTER: MySqlParser.ALTER,
    INSERT: MySqlParser.INSERT,
    UPDATE: MySqlParser.UPDATE,
    JOIN: MySqlParser.JOIN,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    const firstOperatorIndex = MySqlParser.VAR_ASSIGN;
    const lastOperatorIndex = MySqlParser.GLOBAL_ID;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        // We actually want Star to appear in autocomplete
        if (i !== MySqlParser.STAR) {
            tokens.push(i);
        }
    }

    const firstCharsetIndex = MySqlParser.ARMSCII8;
    const lastCharsetIndex = MySqlParser.UTF8MB4;
    for (let i = firstCharsetIndex; i <= lastCharsetIndex; i++) {
        tokens.push(i);
    }

    // Ignoring functions for now, need custom logic for them later
    const firstFunctionIndex = MySqlParser.AVG;
    const lastFunctionIndex = MySqlParser.UTC_TIMESTAMP;
    for (let i = firstFunctionIndex; i <= lastFunctionIndex; i++) {
        tokens.push(i);
    }

    const firstCommonFunctionIndex = MySqlParser.ABS;
    const lastCommonFunctionIndex = MySqlParser.X_FUNCTION;
    for (let i = firstCommonFunctionIndex; i <= lastCommonFunctionIndex; i++) {
        tokens.push(i);
    }

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const preferredRules = new Set([
    MySqlParser.RULE_tableName,
    MySqlParser.RULE_alterTable,
    MySqlParser.RULE_dropTable,
    MySqlParser.RULE_alterView,
    MySqlParser.RULE_dropView,
    MySqlParser.RULE_aggregateWindowedFunction,
    // Maybe also add nonAggregateWindowedFunction?
    MySqlParser.RULE_scalarFunctionName,
    MySqlParser.RULE_fullColumnName,
    MySqlParser.RULE_indexColumnName,
]);

class MySqlSymbolTableVisitor extends MySqlParserVisitor<{}> implements ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitTableName = (context: TableNameContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.getText());
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitAtomTableItem = (context: AtomTableItemContext): {} => {
        try {
            const rawAlias = context.uid()?.getText();
            // For some reason LEFT | RIGHT keyword gets confused with alias
            const isAliasPartOfJoinStatement =
                rawAlias?.toLowerCase() === 'left' || rawAlias?.toLowerCase() === 'right';

            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.tableName().getText(),
                isAliasPartOfJoinStatement ? undefined : rawAlias,
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
    previousToken?: Token,
): Partial<AutocompleteParseResult> & {suggestColumns?: boolean} {
    let suggestTables: AutocompleteParseResult['suggestTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestColumns = false;

    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case MySqlParser.RULE_tableName: {
                if (
                    cursorTokenIndex === ruleData.startTokenIndex &&
                    !ruleData.ruleList.includes(MySqlParser.RULE_createTable)
                ) {
                    suggestTables = TableSuggestion.ALL;
                }
                break;
            }
            case MySqlParser.RULE_alterTable:
            case MySqlParser.RULE_dropTable: {
                const isPreviousTokenTable = previousToken?.text?.toLowerCase() === 'table';
                if (isPreviousTokenTable) {
                    suggestTables = TableSuggestion.TABLES;
                }
                break;
            }
            case MySqlParser.RULE_alterView:
            case MySqlParser.RULE_dropView: {
                const isPreviousTokenView = previousToken?.text?.toLowerCase() === 'view';
                if (isPreviousTokenView) {
                    suggestTables = TableSuggestion.VIEWS;
                }
                break;
            }
            case MySqlParser.RULE_aggregateWindowedFunction: {
                suggestAggregateFunctions = true;
                break;
            }
            case MySqlParser.RULE_scalarFunctionName: {
                suggestFunctions = true;
                break;
            }
            case MySqlParser.RULE_fullColumnName:
            case MySqlParser.RULE_indexColumnName: {
                if (cursorTokenIndex === ruleData.startTokenIndex) {
                    suggestColumns = true;
                }
                break;
            }
        }
    }

    return {suggestTables, suggestAggregateFunctions, suggestFunctions, suggestColumns};
}

function getParseTree(parser: MySqlParser, type?: TableQueryPosition['type']): ParseTree {
    if (!type) {
        return parser.root();
    }

    switch (type) {
        case 'from':
            return parser.fromClause();
        case 'alter':
            return parser.alterTable();
        case 'insert':
            return parser.insertStatement();
        case 'update':
            return parser.multipleUpdateStatement();
    }
}

export const mySqlParserData = {
    Lexer: MySqlLexer,
    Parser: MySqlParser,
    SymbolTableVisitor: MySqlSymbolTableVisitor,
    tokenDictionary,
    ignoredTokens,
    preferredRules,
    explicitlyParseJoin: false,
    getParseTree,
    generateSuggestionsFromRules,
};
