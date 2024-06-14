import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {ColumnAliasSymbol, TableSymbol} from '../../shared/symbol-table.js';
import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    ISymbolTableVisitor,
    ProcessVisitedRulesResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {MySqlLexer} from './generated/MySqlLexer.js';
import {
    AtomTableItemContext,
    MySqlParser,
    SelectElementAliasContext,
    TableNameContext,
} from './generated/MySqlParser.js';
import {MySqlParserVisitor} from './generated/MySqlParserVisitor.js';
import {
    TableQueryPosition,
    TokenDictionary,
    getContextSuggestions,
    getPreviousToken,
} from '../../shared/tables.js';
import {isStartingToWriteRule} from '../../shared/cursor';
import {shouldSuggestTemplates} from '../../shared/query.js';
import {MySqlAutocompleteResult} from './index.js';

const tokenDictionary: TokenDictionary = {
    SPACE: MySqlParser.SPACE,
    FROM: MySqlParser.FROM,
    OPENING_BRACKET: MySqlParser.LR_BRACKET,
    CLOSING_BRACKET: MySqlParser.RR_BRACKET,
    ALTER: MySqlParser.ALTER,
    INSERT: MySqlParser.INSERT,
    UPDATE: MySqlParser.UPDATE,
    JOIN: MySqlParser.JOIN,
    SEMICOLON: MySqlParser.SEMI,
    SELECT: MySqlParser.SELECT,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    const firstOperatorIndex = MySqlParser.VAR_ASSIGN;
    const lastOperatorIndex = MySqlParser.ERROR_RECONGNIGION;
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

    tokens.push(MySqlParser.EOF);

    // KEY is an alias for INDEX, and we should not suggest it because it's legacy
    tokens.push(MySqlParser.KEY);

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([
    // We don't need to go inside of those objects, we already know we need to suggest them
    MySqlParser.RULE_userName,
    MySqlParser.RULE_roleName,
    MySqlParser.RULE_databaseName,
    MySqlParser.RULE_constraintName,
    MySqlParser.RULE_triggerName,
    MySqlParser.RULE_indexName,
    MySqlParser.RULE_fullColumnName,
    MySqlParser.RULE_tableName,
    MySqlParser.RULE_simpleUserName,
    // TODO: merge with uid???
    // We don't need to go inside of next rules, we already know that this is identifier of sorts.
    // There are multiple ids, because different rules use different ids, and we want to stop propagation at each of them, otherwise lots of tokens are getting suggested
    MySqlParser.RULE_fullId,
    MySqlParser.RULE_simpleId,
    MySqlParser.RULE_uid,
    // We don't need to go inside of those rules, we already know that this is a function call
    MySqlParser.RULE_aggregateWindowedFunction,
    MySqlParser.RULE_scalarFunctionName, // Maybe also add nonAggregateWindowedFunction?
    // These functions are very specific, we don't want to suggest them
    MySqlParser.RULE_specificFunction,
    MySqlParser.RULE_passwordFunctionClause,
]);

class MySqlSymbolTableVisitor extends MySqlParserVisitor<{}> implements ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {allowDuplicateSymbols: true});
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

    visitSelectElementAlias = (context: SelectElementAliasContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                ColumnAliasSymbol,
                this.scope,
                context.uid().getText(),
            );
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
): ProcessVisitedRulesResult<MySqlAutocompleteResult> {
    let suggestViewsOrTables: MySqlAutocompleteResult['suggestViewsOrTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestIndexes = false;
    let suggestTriggers = false;
    let suggestDatabases = false;
    let suggestRoles = false;
    let suggestUsers = false;

    let shouldSuggestConstraints = false;
    let shouldSuggestColumns = false;
    let shouldSuggestColumnAliases = false;

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            continue;
        }

        switch (ruleId) {
            case MySqlParser.RULE_tableName: {
                if (rule.ruleList.includes(MySqlParser.RULE_createTable)) {
                    break;
                }

                if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        MySqlParser.VIEW,
                    )
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.VIEWS;
                } else if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        MySqlParser.TABLE,
                    )
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.TABLES;
                } else {
                    suggestViewsOrTables = TableOrViewSuggestion.ALL;
                }
                break;
            }
            case MySqlParser.RULE_fullId: {
                if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        MySqlParser.VIEW,
                    ) &&
                    (rule.ruleList.includes(MySqlParser.RULE_alterView) ||
                        rule.ruleList.includes(MySqlParser.RULE_dropView))
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.VIEWS;
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
            case MySqlParser.RULE_triggerName: {
                suggestTriggers = true;
                break;
            }
            case MySqlParser.RULE_indexName: {
                suggestIndexes = true;
                break;
            }
            case MySqlParser.RULE_constraintName: {
                shouldSuggestConstraints = true;
                break;
            }
            case MySqlParser.RULE_databaseName: {
                suggestDatabases = true;
                break;
            }
            case MySqlParser.RULE_roleName: {
                suggestRoles = true;
                break;
            }
            case MySqlParser.RULE_userName: {
                suggestUsers = true;
                break;
            }
            case MySqlParser.RULE_fullColumnName:
            case MySqlParser.RULE_indexColumnName: {
                shouldSuggestColumns = true;

                if (
                    rule.ruleList.includes(MySqlParser.RULE_groupByItem) ||
                    rule.ruleList.includes(MySqlParser.RULE_orderByExpression)
                ) {
                    shouldSuggestColumnAliases = true;
                }
                break;
            }
            case MySqlParser.RULE_uid: {
                if (
                    (rule.ruleList.includes(MySqlParser.RULE_alterSpecification) &&
                        !getPreviousToken(
                            tokenStream,
                            tokenDictionary,
                            cursorTokenIndex,
                            MySqlParser.ADD,
                        )) ||
                    rule.ruleList.includes(MySqlParser.RULE_indexColumnName)
                ) {
                    shouldSuggestColumns = true;
                }
                break;
            }
        }
    }

    return {
        suggestViewsOrTables,
        suggestAggregateFunctions,
        suggestFunctions,
        suggestIndexes,
        suggestTriggers,
        suggestDatabases,
        suggestRoles,
        suggestUsers,
        shouldSuggestConstraints,
        shouldSuggestColumns,
        shouldSuggestColumnAliases,
    };
}

function getParseTree(
    parser: MySqlParser,
    type?: TableQueryPosition['type'] | 'select',
): ParseTree {
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
): MySqlAutocompleteResult {
    const {
        shouldSuggestColumns,
        shouldSuggestColumnAliases,
        shouldSuggestConstraints,
        ...suggestionsFromRules
    } = processVisitedRules(rules, cursorTokenIndex, tokenStream);
    const suggestTemplates = shouldSuggestTemplates(query, cursor);
    const result: MySqlAutocompleteResult = {
        ...baseResult,
        ...suggestionsFromRules,
        suggestTemplates,
    };
    const contextSuggestionsNeeded =
        shouldSuggestColumns || shouldSuggestConstraints || shouldSuggestColumnAliases;

    if (contextSuggestionsNeeded) {
        const visitor = new MySqlSymbolTableVisitor();
        const {tableContextSuggestion, suggestColumnAliases} = getContextSuggestions(
            MySqlLexer,
            MySqlParser,
            visitor,
            tokenDictionary,
            getParseTree,
            tokenStream,
            cursor,
            query,
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

export const mySqlAutocompleteData: AutocompleteData<
    MySqlAutocompleteResult,
    MySqlLexer,
    MySqlParser
> = {
    Lexer: MySqlLexer,
    Parser: MySqlParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
