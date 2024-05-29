import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {YQLLexer} from './generated/YQLLexer';
import {
    Alter_table_store_stmtContext,
    Named_columnContext,
    Named_exprContext,
    Named_single_sourceContext,
    Result_columnContext,
    Simple_table_ref_coreContext,
    Sql_queryContext,
    Sql_query_yqContext,
    YQLParser,
} from './generated/YQLParser';
import {YQLVisitor} from './generated/YQLVisitor';

import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    GetParseTree,
    ISymbolTableVisitor,
    ProcessVisitedRulesResult,
    YQLEntity,
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
    tokens.push(YQLParser.REAL);
    tokens.push(YQLParser.EOF);
    tokens.push(YQLParser.DIGITS);
    tokens.push(YQLParser.BLOB);
    tokens.push(YQLParser.CURRENT_TIME);
    tokens.push(YQLParser.CURRENT_DATE);
    tokens.push(YQLParser.CURRENT_TIMESTAMP);

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([
    YQLParser.RULE_id_or_type,
    YQLParser.RULE_cluster_expr,
    YQLParser.RULE_identifier,
    YQLParser.RULE_id,
    YQLParser.RULE_integer,
    YQLParser.RULE_type_id,

    YQLParser.RULE_keyword,
    YQLParser.RULE_keyword_compat,
    YQLParser.RULE_keyword_expr_uncompat,
    YQLParser.RULE_keyword_table_uncompat,
    YQLParser.RULE_keyword_select_uncompat,
    YQLParser.RULE_keyword_alter_uncompat,
    YQLParser.RULE_keyword_in_uncompat,
    YQLParser.RULE_keyword_window_uncompat,
    YQLParser.RULE_keyword_hint_uncompat,

    YQLParser.RULE_id_schema,
    YQLParser.RULE_id_expr_in,
    YQLParser.RULE_id_window,
    YQLParser.RULE_id_table,
    YQLParser.RULE_id_without,
    YQLParser.RULE_id_hint,
    YQLParser.RULE_id_as_compat,
]);

class YQLSymbolTableVisitor extends YQLVisitor<{}> implements ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {allowDuplicateSymbols: true});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitSimple_table_ref_core = (context: Simple_table_ref_coreContext): {} => {
        try {
            const table = context.object_ref()?.id_or_at()?.an_id_or_type()?.getText();
            if (table) {
                this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, table);
            }
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };
    visitAlter_table_store_stmt = (context: Alter_table_store_stmtContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.object_ref()?.id_or_at()?.getText(),
            );
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

type EntitySuggestion =
    | 'suggestObject'
    | 'suggestTableStore'
    | 'suggestReplication'
    | 'suggestExternalTable'
    | 'suggestTopic'
    | 'suggestUser'
    | 'suggestGroup'
    | 'suggestView'
    | 'suggestExternalDatasource'
    | 'suggestTable';

type YqlAutocompleteResultPartialKeys = Pick<
    YqlAutocompleteResult,
    | 'suggestAggregateFunctions'
    | 'suggestFunctions'
    | 'suggestSimpleTypes'
    | 'suggestUdfs'
    | 'suggestWindowFunctions'
    | 'suggestTableFunctions'
    | 'suggestPragmas'
>;

type InternalSuggestions<T> = Record<
    | keyof YqlAutocompleteResultPartialKeys
    | EntitySuggestion
    | 'shouldSuggestTableIndexes'
    | 'shouldSuggestColumns'
    | 'shouldSuggestTableHints',
    T
>;

const EntitySuggestionToYqlEntity: Record<EntitySuggestion, YQLEntity> = {
    suggestObject: 'object',
    suggestTableStore: 'tableStore',
    suggestTable: 'table',
    suggestExternalTable: 'externalTable',
    suggestExternalDatasource: 'externalDataSource',
    suggestTopic: 'topic',
    suggestView: 'view',
    suggestReplication: 'replication',
    suggestGroup: 'group',
    suggestUser: 'user',
};

function isEntitySuggestion(suggestion: string): suggestion is EntitySuggestion {
    return suggestion in EntitySuggestionToYqlEntity;
}

function getIdentifierContext(
    ruleList: c3.RuleList,
    tokenStream: TokenStream,
    cursorTokenIndex: number,
): Partial<InternalSuggestions<boolean>> {
    // -Infinity is a starting point. When we enter a rule, where such kind of suggestion is possible, we mark it as "1", it's kind of initialisation. -Infinity is set to avoid cases when we reach ceiling ("2" for now) without initialising the rule.
    const suggestions: InternalSuggestions<number> = {
        suggestObject: -Infinity,
        suggestTableStore: -Infinity,
        suggestTable: -Infinity,
        suggestUser: -Infinity,
        suggestGroup: -Infinity,
        suggestTopic: -Infinity,
        suggestView: -Infinity,
        suggestReplication: -Infinity,
        suggestExternalTable: -Infinity,
        suggestExternalDatasource: -Infinity,
        shouldSuggestTableIndexes: -Infinity,
        shouldSuggestColumns: -Infinity,
        suggestSimpleTypes: -Infinity,
        suggestPragmas: -Infinity,
        suggestUdfs: -Infinity,
        suggestWindowFunctions: -Infinity,
        suggestTableFunctions: -Infinity,
        suggestFunctions: -Infinity,
        suggestAggregateFunctions: -Infinity,
        shouldSuggestTableHints: -Infinity,
    };
    const resetSuggestionParams = (params: (keyof InternalSuggestions<number>)[]): void => {
        params.forEach((param) => {
            suggestions[param] = -Infinity;
        });
    };
    for (const rule of ruleList) {
        switch (rule) {
            case YQLParser.RULE_an_id_hint:
                suggestions.shouldSuggestTableHints += 1;
                break;
            case YQLParser.RULE_an_id:
                suggestions.suggestPragmas += 1;
                suggestions.shouldSuggestTableIndexes += 1;
                suggestions.shouldSuggestColumns += 1;
                suggestions.suggestTopic += 1;
                break;
            case YQLParser.RULE_id_or_at:
                suggestions.suggestObject += 1;
                suggestions.suggestTableStore += 1;
                suggestions.suggestTable += 1;
                suggestions.suggestExternalTable += 1;
                suggestions.suggestExternalDatasource += 1;
                suggestions.suggestView += 1;
                suggestions.suggestReplication += 1;
                break;
            case YQLParser.RULE_an_id_table:
                suggestions.suggestTable += 1;
                break;
            case YQLParser.RULE_topic_ref:
                suggestions.suggestTopic += 1;
                break;
            case YQLParser.RULE_role_name:
                suggestions.suggestUser += 1;
                suggestions.suggestGroup += 1;
                break;
            case YQLParser.RULE_alter_object_stmt:
                suggestions.suggestObject = 1;
                break;
            case YQLParser.RULE_drop_object_stmt:
                suggestions.suggestObject = 1;
                break;
            case YQLParser.RULE_alter_table_store_stmt:
                suggestions.suggestTableStore = 1;
                break;
            case YQLParser.RULE_alter_table_drop_index:
                suggestions.shouldSuggestTableIndexes = 1;
                break;
            case YQLParser.RULE_alter_table_rename_index_to:
                suggestions.shouldSuggestTableIndexes = 1;
                break;
            case YQLParser.RULE_pragma_stmt:
                suggestions.suggestPragmas = 1;
                break;
            case YQLParser.RULE_simple_table_ref:
                if (
                    !getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.CREATE,
                    ) &&
                    !getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.EXTERNAL,
                    )
                ) {
                    suggestions.suggestTable = 1;
                }

                break;
            case YQLParser.RULE_table_ref:
                resetSuggestionParams([
                    'suggestWindowFunctions',
                    'suggestFunctions',
                    'suggestAggregateFunctions',
                    'shouldSuggestColumns',
                    'suggestUdfs',
                ]);
                suggestions.suggestTableFunctions = 1;
                suggestions.suggestTable = 1;
                break;
            case YQLParser.RULE_table_inherits:
                suggestions.suggestTable = 1;
                break;
            case YQLParser.RULE_replication_target: {
                if (
                    !getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.AS)
                ) {
                    suggestions.suggestTable = 1;
                }
                break;
            }
            case YQLParser.RULE_drop_external_data_source_stmt:
                suggestions.suggestExternalDatasource = 1;
                break;
            case YQLParser.RULE_alter_external_data_source_stmt:
                suggestions.suggestExternalDatasource = 1;
                break;
            case YQLParser.RULE_drop_topic_stmt:
                suggestions.suggestTopic = 1;
                break;
            case YQLParser.RULE_alter_topic_stmt:
                suggestions.suggestTopic = 1;
                break;
            case YQLParser.RULE_drop_view_stmt:
                suggestions.suggestView = 1;
                break;
            case YQLParser.RULE_alter_replication_stmt:
                suggestions.suggestReplication = 1;
                break;
            case YQLParser.RULE_drop_replication_stmt:
                suggestions.suggestReplication = 1;
                break;
            case YQLParser.RULE_drop_role_stmt:
                if (
                    getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.USER)
                ) {
                    suggestions.suggestUser = 1;
                } else if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.GROUP,
                    )
                ) {
                    suggestions.suggestGroup = 1;
                }
                break;
            case YQLParser.RULE_alter_user_stmt:
                if (
                    !getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.RENAME,
                    )
                ) {
                    suggestions.suggestUser = 1;
                }
                break;
            case YQLParser.RULE_create_group_stmt:
                if (
                    getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.USER)
                ) {
                    suggestions.suggestUser = 1;
                }
                break;
            case YQLParser.RULE_alter_group_stmt:
                if (
                    !getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.RENAME,
                    )
                ) {
                    if (
                        getPreviousToken(
                            tokenStream,
                            tokenDictionary,
                            cursorTokenIndex,
                            YQLParser.USER,
                        )
                    ) {
                        suggestions.suggestUser = 1;
                    } else {
                        suggestions.suggestGroup = 1;
                    }
                }
                break;
            case YQLParser.RULE_grant_permissions_stmt:
            case YQLParser.RULE_revoke_permissions_stmt:
                suggestions.suggestUser = 1;
                suggestions.suggestGroup = 1;
                break;
            case YQLParser.RULE_drop_table_stmt:
                if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.EXTERNAL,
                    )
                ) {
                    suggestions.suggestExternalTable = 1;
                } else if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.TABLESTORE,
                    )
                ) {
                    suggestions.suggestTableStore = 1;
                }
                break;
            case YQLParser.RULE_pure_column_list:
            case YQLParser.RULE_pure_column_or_named:
            case YQLParser.RULE_column_name:
            case YQLParser.RULE_without_column_name:
            case YQLParser.RULE_alter_table_drop_column:
            case YQLParser.RULE_delete_stmt:
                suggestions.shouldSuggestColumns = 1;
                break;
            case YQLParser.RULE_alter_table_alter_column:
                if (
                    !getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.FAMILY,
                    )
                ) {
                    suggestions.shouldSuggestColumns = 1;
                }

                break;
            case YQLParser.RULE_type_name_simple:
                suggestions.suggestSimpleTypes = 2;
                break;
            case YQLParser.RULE_atom_expr:
            case YQLParser.RULE_in_atom_expr:
                suggestions.suggestUdfs += 1;
                break;
            case YQLParser.RULE_id_expr:
                suggestions.suggestWindowFunctions += 1;
                suggestions.suggestTableFunctions += 1;
                suggestions.suggestFunctions += 1;
                suggestions.suggestAggregateFunctions += 1;
                suggestions.shouldSuggestColumns += 1;
                break;
            case YQLParser.RULE_select_stmt:
                suggestions.suggestWindowFunctions = 1;
                suggestions.suggestFunctions = 1;
                suggestions.suggestAggregateFunctions = 1;
                suggestions.shouldSuggestColumns = 1;
                suggestions.suggestUdfs = 1;
                break;
            case YQLParser.RULE_select_kind:
                suggestions.shouldSuggestColumns = 1;
                break;
            case YQLParser.RULE_values_stmt:
            case YQLParser.RULE_alter_table_add_column:
            case YQLParser.RULE_lambda_stmt:
            case YQLParser.RULE_select_kind_partial:
                resetSuggestionParams(['shouldSuggestColumns']);
                break;
            case YQLParser.RULE_group_by_clause:
                resetSuggestionParams(['suggestWindowFunctions', 'suggestAggregateFunctions']);
                break;
            case YQLParser.RULE_window_specification_details:
                resetSuggestionParams(['suggestWindowFunctions']);
                break;
            case YQLParser.RULE_expr: {
                if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        YQLParser.WHERE,
                    )
                ) {
                    resetSuggestionParams(['suggestWindowFunctions', 'suggestAggregateFunctions']);
                }
                break;
            }
            case YQLParser.RULE_table_hint:
                suggestions.shouldSuggestTableHints = 1;
        }
    }

    let maximum = 2;
    return Object.entries(suggestions).reduce(
        (acc, [key, value]) => {
            const typedKey = key as keyof InternalSuggestions<boolean>;
            if (value > maximum) {
                maximum = value;
                acc = {[typedKey]: true};
            } else if (value === maximum) {
                acc[typedKey] = true;
            }
            return acc;
        },
        {} as Partial<InternalSuggestions<boolean>>,
    );
}

const ruleNames = YQLParser.ruleNames;

function getParticularStatement(ruleList: c3.RuleList): string | undefined {
    const coreStatementIndex = ruleList.findIndex(
        (el) => el === YQLParser.RULE_sql_stmt_core || el === YQLParser.RULE_sql_stmt_core_yq,
    );
    if (coreStatementIndex === -1) {
        return undefined;
    }
    const particularStatementIndex = coreStatementIndex + 1;
    const particularStatement = ruleList[particularStatementIndex];
    if (!particularStatement) {
        return undefined;
    }
    return ruleNames[particularStatement];
}

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): ProcessVisitedRulesResult<YqlAutocompleteResult> {
    const suggestEntity: YqlAutocompleteResult['suggestEntity'] = [];

    let suggestionsResult: Partial<InternalSuggestions<boolean>> = {};
    let coreStmt;
    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            break;
        }
        switch (ruleId) {
            case YQLParser.RULE_id_table:
            case YQLParser.RULE_id_hint:
            case YQLParser.RULE_identifier:
            case YQLParser.RULE_id_or_type:
            case YQLParser.RULE_id: {
                const suggestions = getIdentifierContext(
                    rule.ruleList,
                    tokenStream,
                    cursorTokenIndex,
                );
                if (suggestions.shouldSuggestTableHints) {
                    coreStmt = getParticularStatement(rule.ruleList);
                }
                suggestionsResult = {...suggestionsResult, ...suggestions};
                break;
            }
        }
    }

    Object.keys(suggestionsResult).forEach((suggestion) => {
        if (suggestEntity && isEntitySuggestion(suggestion)) {
            suggestEntity.push(EntitySuggestionToYqlEntity[suggestion]);
        }
    });

    return {
        suggestEntity: suggestEntity.length ? suggestEntity : undefined,
        shouldSuggestColumnAliases: suggestionsResult.shouldSuggestColumns,
        suggestTableHints: coreStmt,
        ...suggestionsResult,
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
            return parser.alter_table_for_autocomplete();
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
        const {
            shouldSuggestColumns,
            shouldSuggestColumnAliases,
            shouldSuggestTableIndexes,
            ...suggestionsFromRules
        } = processVisitedRules(rules, cursorTokenIndex, tokenStream);
        const suggestTemplates = shouldSuggestTemplates(query, cursor);
        const result: YqlAutocompleteResult = {
            ...baseResult,
            ...suggestionsFromRules,
            suggestTemplates,
        };
        const contextSuggestionsNeeded =
            shouldSuggestColumns || shouldSuggestColumnAliases || shouldSuggestTableIndexes;

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
                result.suggestColumns = {tables: tableContextSuggestion.tables};
            }
            if (shouldSuggestTableIndexes && tableContextSuggestion) {
                result.suggestTableIndexes = {tables: tableContextSuggestion.tables};
            }
            if (shouldSuggestColumnAliases && suggestColumnAliases) {
                result.suggestColumnAliases = suggestColumnAliases;
            }
        }

        return result;
    };
}

const yqlContext = new Sql_queryContext(null, -1);

export const yqlAutocompleteData: AutocompleteData<YqlAutocompleteResult, YQLLexer, YQLParser> = {
    Lexer: YQLLexer,
    Parser: YQLParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult: getEnrichAutocompleteResult(getParseTree),
    context: yqlContext,
};

const yqContext = new Sql_query_yqContext(null, -1);

export const yqlAutocompleteDataYQ: AutocompleteData<YqlAutocompleteResult, YQLLexer, YQLParser> = {
    Lexer: YQLLexer,
    Parser: YQLParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree: getParseTreeYQ,
    enrichAutocompleteResult: getEnrichAutocompleteResult(getParseTreeYQ),
    context: yqContext,
};
