import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {TableSymbol} from '../../lib/symbolTable.js';
import {
    AutocompleteParseResult,
    ISymbolTableVisitor,
    ParserData,
    TableSuggestion
} from '../../types.js';
import {ClickHouseLexer} from './generated/ClickHouseLexer.js';
import {
    ClickHouseParser,
    TableExprAliasContext,
    TableIdentifierContext,
} from './generated/ClickHouseParser.js';
import {ClickHouseParserVisitor} from './generated/ClickHouseParserVisitor.js';
import {TableQueryPosition, TokenDictionary, hasPreviousToken} from '../../lib/tables.js';

const engines = ['Null', 'Set', 'Log', 'Memory', 'TinyLog', 'StripeLog'];

const functionalEngines = [
    'MergeTree()',
    'Merge()',
    'ReplacingMergeTree()',
    'CollapsingMergeTree()',
    'AggregatingMergeTree()',
    'Buffer()',
    'Dictionary()',
    'Distributed()',
    'File()',
    'GraphiteMergeTree()',
    'Join()',
    'Kafka()',
    'MySQL()',
    'URL()',
    'ReplicatedAggregatingMergeTree()',
    'ReplicatedCollapsingMergeTree()',
    'ReplicatedGraphiteMergeTree()',
    'ReplicatedMergeTree()',
    'ReplicatedReplacingMergeTree()',
    'ReplicatedSummingMergeTree()',
    'ReplicatedVersionedCollapsingMergeTree()',
    'SummingMergeTree()',
    'VersionedCollapsingMergeTree()',
    'PostgreSQL()',
];

const tokenDictionary: TokenDictionary = {
    SPACE: ClickHouseParser.WHITESPACE,
    FROM: ClickHouseParser.FROM,
    OPENING_BRACKET: ClickHouseParser.LPAREN,
    CLOSING_BRACKET: ClickHouseParser.RPAREN,
    ALTER: ClickHouseParser.ALTER,
    INSERT: ClickHouseParser.INSERT,
    UPDATE: ClickHouseParser.UPDATE,
    JOIN: ClickHouseParser.JOIN,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    const firstOperatorIndex = ClickHouseParser.ARROW;
    const lastOperatorIndex = ClickHouseParser.UNDERSCORE;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        // We actually want Star to appear in autocomplete
        if (i !== ClickHouseParser.ASTERISK) {
            tokens.push(i);
        }
    }

    const firstBooleanIndex = ClickHouseParser.JSON_FALSE;
    const lastBooleanIndex = ClickHouseParser.JSON_TRUE;
    for (let i = firstBooleanIndex; i <= lastBooleanIndex; i++) {
        tokens.push(i);
    }

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const preferredRules = new Set([
    ClickHouseParser.RULE_tableIdentifier,
    ClickHouseParser.RULE_identifier,
    ClickHouseParser.RULE_columnIdentifier,
    ClickHouseParser.RULE_identifierOrNull,
]);

class ClickHouseSymbolTableVisitor
    extends ClickHouseParserVisitor<{}>
    implements ISymbolTableVisitor
{
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitTableIdentifier = (context: TableIdentifierContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.getText());
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitTableExprAlias = (context: TableExprAliasContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.tableExpr()?.getText(),
                context.alias()?.getText() || context.identifier()?.getText() || undefined,
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
    let suggestEngines;

    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case ClickHouseParser.RULE_tableIdentifier: {
                if (
                    cursorTokenIndex === ruleData.startTokenIndex &&
                    !ruleData.ruleList.includes(ClickHouseParser.RULE_createStmt) &&
                    !ruleData.ruleList.includes(ClickHouseParser.RULE_columnsExpr)
                ) {
                    if (hasPreviousToken(tokenStream, cursorTokenIndex, ClickHouseParser.VIEW)) {
                        suggestTables = TableSuggestion.VIEWS;
                    } else if (
                        hasPreviousToken(tokenStream, cursorTokenIndex, ClickHouseParser.TABLE)
                    ) {
                        suggestTables = TableSuggestion.TABLES;
                    } else {
                        suggestTables = TableSuggestion.ALL;
                    }
                }
                break;
            }
            case ClickHouseParser.RULE_identifier: {
                if (ruleData.ruleList.includes(ClickHouseParser.RULE_columnExpr)) {
                    suggestFunctions = true;
                    // TODO Not sure yet how to specifically find aggregate functions
                    suggestAggregateFunctions = true;
                }
                if (ruleData.ruleList.includes(ClickHouseParser.RULE_alterTableClause)) {
                    suggestColumns = true;
                }
                break;
            }
            case ClickHouseParser.RULE_columnIdentifier: {
                if (cursorTokenIndex === ruleData.startTokenIndex) {
                    suggestColumns = true;
                }
                break;
            }
            case ClickHouseParser.RULE_identifierOrNull: {
                if (ruleData.ruleList.includes(ClickHouseParser.RULE_engineClause)) {
                    suggestEngines = {engines, functionalEngines};
                }
            }
        }
    }

    return {
        suggestTables,
        suggestAggregateFunctions,
        suggestFunctions,
        suggestColumns,
        suggestEngines,
    };
}

function getParseTree(parser: ClickHouseParser, type?: TableQueryPosition['type']): ParseTree {
    // ClickHouse does not have UPDATE statement
    if (!type || type === 'update') {
        return parser.root();
    }

    switch (type) {
        case 'from':
            return parser.fromClause();
        case 'alter':
            return parser.alterStmt();
        case 'insert':
            // INSERT doesn't work for now: for some reason any INSERT statement throws error
            return parser.insertStmt();
    }
}

export const clickHouseParserData: ParserData<ClickHouseLexer, ClickHouseParser, ClickHouseSymbolTableVisitor> = {
    Lexer: ClickHouseLexer,
    Parser: ClickHouseParser,
    SymbolTableVisitor: ClickHouseSymbolTableVisitor,
    tokenDictionary,
    ignoredTokens,
    preferredRules,
    explicitlyParseJoin: false,
    getParseTree,
    generateSuggestionsFromRules,
};
