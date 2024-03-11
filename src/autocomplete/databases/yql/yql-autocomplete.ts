import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {YQLLexer} from './generated/YQLLexer.js';
import {
    Existing_table_idContext,
    Existing_table_store_idContext,
    Named_columnContext,
    Named_exprContext,
    Named_single_sourceContext,
    Result_columnContext,
    Sql_query_yqContext,
    YQLParser,
} from './generated/YQLParser.js';
import {YQLVisitor} from './generated/YQLVisitor.js';

import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    GetParseTree,
    ISymbolTableVisitor,
    ProcessVisitedRulesResult,
    YqlAutocompleteResult,
} from '../../autocomplete-types.js';
import {ColumnAliasSymbol, TableSymbol} from '../../shared/symbol-table.js';
import {
    TableQueryPosition,
    TokenDictionary,
    getContextSuggestions,
    getPreviousToken,
} from '../../shared/tables.js';
import {isStartingToWriteRule} from '../../shared/cursor.js';
import {shouldSuggestTemplates} from '../../shared/query.js';

const tokenDictionary: TokenDictionary = {
    SPACE: YQLParser.WS,
    FROM: YQLParser.FROM,
    OPENING_BRACKET: YQLParser.LPAREN,
    CLOSING_BRACKET: YQLParser.RPAREN,
    ALTER: YQLParser.ALTER,
    INSERT: YQLParser.INSERT,
    UPDATE: YQLParser.UPDATE,
    JOIN: YQLParser.JOIN,
    SEMICOLON: YQLParser.SEMICOLON,
    SELECT: YQLParser.SELECT,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    const firstOperatorIndex = YQLParser.EQUALS;
    const lastOperatorIndex = YQLParser.LBRACE_SQUARE;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        // We actually want Star to appear in autocomplete
        if (i !== YQLParser.ASTERISK) {
            tokens.push(i);
        }
    }

    tokens.push(YQLParser.STREAM);
    tokens.push(YQLParser.STRING_VALUE);
    tokens.push(YQLParser.EOF);

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([
    YQLParser.RULE_type_name_simple,
    YQLParser.RULE_cluster_expr_with_dot,
    YQLParser.RULE_identifier,
    YQLParser.RULE_role_name,

    YQLParser.RULE_pragma_id,
    YQLParser.RULE_existing_external_data_source_id,
    YQLParser.RULE_existing_table_store_id,
    YQLParser.RULE_existing_topic_id,
    YQLParser.RULE_existing_view_id,
    YQLParser.RULE_existing_object_id,
    YQLParser.RULE_existing_table_id,
    YQLParser.RULE_existing_replication_id,
    YQLParser.RULE_udf_expr,
    YQLParser.RULE_simple_function_id,
    YQLParser.RULE_window_function_id,
    YQLParser.RULE_table_function_id,
    YQLParser.RULE_aggregate_function_id,
    YQLParser.RULE_existing_column_id,

    YQLParser.RULE_keyword,
    YQLParser.RULE_keyword_compat,
    YQLParser.RULE_keyword_expr_uncompat,
    YQLParser.RULE_keyword_table_uncompat,
    YQLParser.RULE_keyword_select_uncompat,
    YQLParser.RULE_keyword_alter_uncompat,
    YQLParser.RULE_keyword_in_uncompat,
    YQLParser.RULE_keyword_window_uncompat,
    YQLParser.RULE_keyword_hint_uncompat,
]);

class YQLSymbolTableVisitor extends YQLVisitor<{}> implements ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitExisting_table_id = (context: Existing_table_idContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.getText());
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };
    visitExisting_table_store_id = (context: Existing_table_store_idContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.getText());
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };
    visitNamed_single_source = (context: Named_single_sourceContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.single_source().table_ref()?.getText() ?? '',
                context.an_id()?.getText() ?? context.an_id_as_compat()?.getText(),
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };
    visitNamed_column = (context: Named_columnContext): {} => {
        try {
            const alias = context.an_id()?.getText();

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
    visitNamed_expr = (context: Named_exprContext): {} => {
        try {
            const alias = context.an_id_or_type()?.getText();

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
    visitResult_column = (context: Result_columnContext): {} => {
        try {
            const alias =
                context.an_id_or_type()?.getText() ?? context.an_id_as_compat()?.getText();

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

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): ProcessVisitedRulesResult<YqlAutocompleteResult> {
    let suggestEntity: YqlAutocompleteResult['suggestEntity'];
    let suggestUdfs = false;
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestWindowFunctions = false;
    let suggestTableFunctions = false;
    let suggestPragmas = false;
    let shouldSuggestColumns = false;
    let suggestSimpleTypes = false;

    const isCreateEntity = getPreviousToken(
        tokenStream,
        tokenDictionary,
        cursorTokenIndex,
        YQLParser.CREATE,
    );

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            break;
        }

        const isGroupByOrWhere =
            rule.ruleList.includes(YQLParser.RULE_where_expr) ||
            rule.ruleList.includes(YQLParser.RULE_group_by_clause);

        switch (ruleId) {
            case YQLParser.RULE_type_name_simple: {
                suggestSimpleTypes = true;
                break;
            }
            case YQLParser.RULE_pragma_id: {
                suggestPragmas = true;
                break;
            }
            case YQLParser.RULE_existing_external_data_source_id: {
                suggestEntity = ['externalDataSource'];
                break;
            }
            case YQLParser.RULE_existing_table_store_id: {
                suggestEntity = ['tableStore'];
                break;
            }
            case YQLParser.RULE_existing_topic_id: {
                suggestEntity = ['topic'];
                break;
            }
            case YQLParser.RULE_existing_view_id: {
                suggestEntity = ['view'];
                break;
            }
            case YQLParser.RULE_existing_object_id: {
                suggestEntity = ['object'];
                break;
            }
            case YQLParser.RULE_existing_table_id: {
                suggestEntity = ['table'];
                break;
            }
            case YQLParser.RULE_existing_replication_id: {
                suggestEntity = ['replication'];
                break;
            }
            case YQLParser.RULE_existing_column_id: {
                const withoutColumnsSuggestion =
                    rule.ruleList.includes(YQLParser.RULE_values_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_limit_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_offset_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_lambda_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_alter_table_add_column);
                if (!withoutColumnsSuggestion) {
                    shouldSuggestColumns = true;
                }
                break;
            }
            case YQLParser.RULE_udf_expr: {
                suggestUdfs = true;
                break;
            }
            case YQLParser.RULE_simple_function_id: {
                suggestFunctions = true;
                break;
            }
            case YQLParser.RULE_window_function_id: {
                if (
                    !isGroupByOrWhere &&
                    !rule.ruleList.includes(YQLParser.RULE_window_specification_details)
                ) {
                    suggestWindowFunctions = true;
                }
                break;
            }
            case YQLParser.RULE_table_function_id: {
                suggestTableFunctions = true;
                break;
            }
            case YQLParser.RULE_aggregate_function_id: {
                if (!isGroupByOrWhere) {
                    suggestAggregateFunctions = true;
                }
                break;
            }
            case YQLParser.RULE_identifier: {
                if (rule.ruleList.includes(YQLParser.RULE_replication_target)) {
                    suggestEntity = ['table'];
                }
                break;
            }
            case YQLParser.RULE_role_name: {
                if (isCreateEntity) {
                    break;
                }
                if (
                    getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.USER)
                ) {
                    suggestEntity = ['user'];
                } else if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.GROUP,
                    )
                ) {
                    suggestEntity = ['group'];
                } else {
                    suggestEntity = ['user', 'group'];
                }

                break;
            }
        }
    }
    return {
        suggestEntity,
        suggestUdfs,
        suggestPragmas,
        suggestFunctions,
        shouldSuggestColumns,
        suggestSimpleTypes,
        suggestWindowFunctions,
        suggestTableFunctions,
        suggestAggregateFunctions,
    };
}

function getParseTree(parser: YQLParser, type?: TableQueryPosition['type'] | 'select'): ParseTree {
    if (!type) {
        return parser.sql_query();
    }

    return getCommonParseTree(parser, type);
}

function getParseTreeYQ(
    parser: YQLParser,
    type?: TableQueryPosition['type'] | 'select',
): ParseTree {
    if (!type) {
        return parser.sql_query_yq();
    }

    return getCommonParseTree(parser, type);
}

function getCommonParseTree(
    parser: YQLParser,
    type: TableQueryPosition['type'] | 'select',
): ParseTree {
    switch (type) {
        case 'from':
            return parser.from_stmt();
        case 'alter':
            return parser.alter_table_or_table_store();
        case 'insert':
            return parser.into_table_stmt();
        case 'update':
            return parser.update_stmt();
        case 'select':
            return parser.select_core();
    }
}

function getEnrichAutocompleteResult(parseTreeGetter: GetParseTree<YQLParser>) {
    return (
        baseResult: AutocompleteResultBase,
        rules: c3.CandidatesCollection['rules'],
        tokenStream: TokenStream,
        cursorTokenIndex: number,
        cursor: CursorPosition,
        query: string,
    ): YqlAutocompleteResult => {
        const {shouldSuggestColumns, shouldSuggestColumnAliases, ...suggestionsFromRules} =
            processVisitedRules(rules, cursorTokenIndex, tokenStream);
        const suggestTemplates = shouldSuggestTemplates(query, cursor);
        const result: YqlAutocompleteResult = {
            ...baseResult,
            ...suggestionsFromRules,
            suggestTemplates,
        };
        const contextSuggestionsNeeded = shouldSuggestColumns || shouldSuggestColumnAliases;

        if (contextSuggestionsNeeded) {
            const visitor = new YQLSymbolTableVisitor();
            const {tableContextSuggestion, suggestColumnAliases} = getContextSuggestions(
                YQLLexer,
                YQLParser,
                visitor,
                tokenDictionary,
                parseTreeGetter,
                tokenStream,
                cursor,
                query,
                true,
            );

            if (shouldSuggestColumns && tableContextSuggestion) {
                result.suggestColumns = tableContextSuggestion;
            }
            if (shouldSuggestColumnAliases && suggestColumnAliases) {
                result.suggestColumnAliases = suggestColumnAliases;
            }
        }

        return result;
    };
}

export const yqlAutocompleteData: AutocompleteData<YqlAutocompleteResult, YQLLexer, YQLParser> = {
    Lexer: YQLLexer,
    Parser: YQLParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult: getEnrichAutocompleteResult(getParseTree),
};

const context = new Sql_query_yqContext(null, -1);

export const yqlAutocompleteDataYQ: AutocompleteData<YqlAutocompleteResult, YQLLexer, YQLParser> = {
    Lexer: YQLLexer,
    Parser: YQLParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree: getParseTreeYQ,
    enrichAutocompleteResult: getEnrichAutocompleteResult(getParseTreeYQ),
    context,
};
