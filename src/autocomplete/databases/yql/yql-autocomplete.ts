import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {YQLLexer} from './generated/YQLLexer.js';
import {
    Named_columnContext,
    Named_exprContext,
    Named_single_sourceContext,
    Object_refContext,
    Result_columnContext,
    Simple_table_ref_coreContext,
    YQLParser,
} from './generated/YQLParser.js';
import {YQLVisitor} from './generated/YQLVisitor.js';

import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    ISymbolTableVisitor,
    ProcessVisitedRulesResult,
    YQLAutocompleteResult,
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
    YQLParser.RULE_object_ref,
    YQLParser.RULE_table_ref,
    YQLParser.RULE_topic_ref,
    YQLParser.RULE_identifier,
    YQLParser.RULE_an_id,
    YQLParser.RULE_an_id_without,
    YQLParser.RULE_role_name,
]);

class YQLSymbolTableVisitor extends YQLVisitor<{}> implements ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitSimple_table_ref_core = (context: Simple_table_ref_coreContext): {} => {
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
    visitObject_ref = (context: Object_refContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.getText());
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
): ProcessVisitedRulesResult<YQLAutocompleteResult> {
    let suggestEntity: YQLAutocompleteResult['suggestEntity'];
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

        switch (ruleId) {
            case YQLParser.RULE_type_name_simple: {
                suggestSimpleTypes = true;
                break;
            }
            case YQLParser.RULE_an_id:
            case YQLParser.RULE_an_id_without: {
                if (
                    rule.ruleList.includes(YQLParser.RULE_pure_column_list) ||
                    rule.ruleList.includes(YQLParser.RULE_column_name) ||
                    rule.ruleList.includes(YQLParser.RULE_pure_column_or_named) ||
                    rule.ruleList.includes(YQLParser.RULE_without_column_name) ||
                    rule.ruleList.includes(YQLParser.RULE_alter_table_drop_column) ||
                    rule.ruleList.includes(YQLParser.RULE_alter_table_alter_column)
                ) {
                    shouldSuggestColumns = true;
                }
                if (rule.ruleList.includes(YQLParser.RULE_pragma_stmt)) {
                    suggestPragmas = true;
                }
                break;
            }
            case YQLParser.RULE_identifier: {
                const isCommonFunctionExpression =
                    rule.ruleList.includes(YQLParser.RULE_atom_expr) ||
                    rule.ruleList.includes(YQLParser.RULE_in_atom_expr) ||
                    rule.ruleList.includes(YQLParser.RULE_using_call_expr);
                const isGroupByOrWhere =
                    rule.ruleList.includes(YQLParser.RULE_where_expr) ||
                    rule.ruleList.includes(YQLParser.RULE_group_by_clause);
                const shouldSuggestAggregateFunction =
                    isCommonFunctionExpression && !isGroupByOrWhere;
                const shouldSuggestWindowFunctions =
                    isCommonFunctionExpression &&
                    !isGroupByOrWhere &&
                    !rule.ruleList.includes(YQLParser.RULE_window_specification_details);
                const shouldSuggestFunctions =
                    isCommonFunctionExpression || rule.ruleList.includes(YQLParser.RULE_id_expr);

                const isSourceExpression =
                    rule.ruleList.includes(YQLParser.RULE_object_ref) ||
                    rule.ruleList.includes(YQLParser.RULE_table_ref) ||
                    rule.ruleList.includes(YQLParser.RULE_topic_ref);

                const withoutColumnsSuggestion =
                    rule.ruleList.includes(YQLParser.RULE_values_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_limit_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_offset_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_lambda_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_alter_table_add_column);
                if (!isSourceExpression) {
                    if (!withoutColumnsSuggestion) {
                        shouldSuggestColumns = true;
                    }
                    if (isCommonFunctionExpression) {
                        suggestUdfs = true;
                    }
                    if (shouldSuggestWindowFunctions) {
                        suggestWindowFunctions = true;
                    }
                    if (shouldSuggestFunctions) {
                        suggestFunctions = true;
                        suggestTableFunctions = true;
                    }
                    if (shouldSuggestAggregateFunction) {
                        suggestAggregateFunctions = true;
                    }
                }
                break;
            }
            case YQLParser.RULE_object_ref: {
                if (rule.ruleList.includes(YQLParser.RULE_replication_target)) {
                    suggestEntity = ['table'];
                }

                if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.CREATE,
                    )
                ) {
                    break;
                }
                if (rule.ruleList.includes(YQLParser.RULE_drop_replication_stmt)) {
                    suggestEntity = ['replication'];
                }
                if (rule.ruleList.includes(YQLParser.RULE_simple_table_ref_core)) {
                    suggestEntity = ['table'];
                }
                if (rule.ruleList.includes(YQLParser.RULE_drop_external_data_source_stmt)) {
                    suggestEntity = ['externalDataSource'];
                }
                if (
                    rule.ruleList.includes(YQLParser.RULE_upsert_object_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_drop_object_stmt) ||
                    rule.ruleList.includes(YQLParser.RULE_alter_object_stmt)
                ) {
                    suggestEntity = ['object'];
                }
                if (rule.ruleList.includes(YQLParser.RULE_drop_view_stmt)) {
                    suggestEntity = ['view'];
                }
                if (rule.ruleList.includes(YQLParser.RULE_alter_table_store_stmt)) {
                    suggestEntity = ['tableStore'];
                }

                break;
            }
            case YQLParser.RULE_table_ref: {
                if (isCreateEntity) {
                    break;
                }
                suggestEntity = ['table'];
                break;
            }
            case YQLParser.RULE_topic_ref: {
                if (isCreateEntity) {
                    break;
                }
                suggestEntity = ['topic'];
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

function enrichAutocompleteResult(
    baseResult: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    tokenStream: TokenStream,
    cursorTokenIndex: number,
    cursor: CursorPosition,
    query: string,
): YQLAutocompleteResult {
    const {shouldSuggestColumns, shouldSuggestColumnAliases, ...suggestionsFromRules} =
        processVisitedRules(rules, cursorTokenIndex, tokenStream);
    const suggestTemplates = shouldSuggestTemplates(query, cursor);
    const result: YQLAutocompleteResult = {
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
            getParseTree,
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
}

export const yqlAutocompleteData: AutocompleteData<YQLAutocompleteResult, YQLLexer, YQLParser> = {
    Lexer: YQLLexer,
    Parser: YQLParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
