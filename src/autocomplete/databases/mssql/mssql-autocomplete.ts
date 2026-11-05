import {
    CommonTokenStream,
    ParseTree,
    ParserRuleContext,
    RuleTransition,
    Token,
    TokenStream,
    Vocabulary,
} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {ColumnAliasSymbol, TableSymbol} from '../../shared/symbol-table.js';
import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    ISymbolTableVisitor,
    ProcessVisitedRulesResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {TSqlLexer} from './generated/TSqlLexer.js';
import {
    Ddl_objectContext,
    Expression_elemContext,
    TSqlParser,
    Table_nameContext,
    Table_source_itemContext,
} from './generated/TSqlParser.js';
import {TSqlParserVisitor} from './generated/TSqlParserVisitor.js';
import {
    TableQueryPosition,
    TokenDictionary,
    getContextSuggestions,
    getPreviousToken,
} from '../../shared/tables.js';
import {isStartingToWriteRule} from '../../shared/cursor.js';
import {createLexer, shouldSuggestTemplates} from '../../shared/query.js';
import {getTokenName} from '../../shared/autocomplete.js';
import {MsSqlAutocompleteResult} from './index.js';
import {getMsSqlCurrentStatementQuery} from './mssql-current-statement.js';

const tokenDictionary: TokenDictionary = {
    SPACE: TSqlParser.SPACE,
    FROM: TSqlParser.FROM,
    OPENING_BRACKET: TSqlParser.LR_BRACKET,
    CLOSING_BRACKET: TSqlParser.RR_BRACKET,
    ALTER: TSqlParser.ALTER,
    INSERT: TSqlParser.INSERT,
    UPDATE: TSqlParser.UPDATE,
    JOIN: TSqlParser.JOIN,
    SEMICOLON: TSqlParser.SEMI,
    SELECT: TSqlParser.SELECT,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    // Datepart abbreviations, e.g. DATEADD(yy, 1, ...)
    const firstDatepartAbbreviationIndex = TSqlParser.YEAR_ABBR;
    const lastDatepartAbbreviationIndex = TSqlParser.WEEKDAY_ABBR;
    for (let i = firstDatepartAbbreviationIndex; i <= lastDatepartAbbreviationIndex; i++) {
        tokens.push(i);
    }

    const firstOperatorIndex = TSqlParser.DISK_DRIVE;
    const lastOperatorIndex = TSqlParser.PLACEHOLDER;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        // We actually want Star to appear in autocomplete
        if (i !== TSqlParser.STAR) {
            tokens.push(i);
        }
    }

    tokens.push(TSqlParser.EOF);
    // EVENTDATA() is a function that is only available in DDL triggers
    tokens.push(TSqlParser.EVENTDATA);

    return tokens;
}

// Built-in function names are spread across the lexer, and some of them are keywords too (e.g. LEFT JOIN),
// so we can't ignore them like in other dialects. Instead we remove them from keywords where function can be called
function getBuiltInFunctionNames(): Set<string> {
    const atn = TSqlParser._ATN;
    const ruleStartState = atn.ruleToStartState[TSqlParser.RULE_built_in_functions];
    const alternativesState = ruleStartState?.transitions[0]?.target;
    const vocabulary = new Vocabulary(TSqlParser.literalNames, TSqlParser.symbolicNames);
    const names = new Set<string>();

    for (const transition of alternativesState?.transitions ?? []) {
        const alternativeState = transition.target;
        // XML methods are built-in functions too, but they start with column name or subquery
        if (alternativeState.transitions[0] instanceof RuleTransition) {
            continue;
        }

        for (const token of atn.nextTokens(alternativeState).toArray()) {
            names.add(getTokenName(vocabulary, token));
        }
    }

    return names;
}

const builtInFunctionNames = getBuiltInFunctionNames();

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([
    // We don't need to go inside of those objects, we already know we need to suggest them
    TSqlParser.RULE_full_table_name,
    TSqlParser.RULE_table_name,
    TSqlParser.RULE_simple_name,
    TSqlParser.RULE_full_column_name,
    // We don't need to go inside of next rule, we already know that this is identifier of sorts.
    // Non-reserved keywords are identifiers too, so lots of tokens are getting suggested otherwise
    TSqlParser.RULE_id_,
    // We don't need to go inside of those rules, we already know that this is a function call
    TSqlParser.RULE_aggregate_windowed_function,
    TSqlParser.RULE_scalar_function_name,
    // These functions are very specific, we don't want to suggest them.
    // Built-in functions are not here, because they include XML methods of subqueries: (SELECT ...).value(...).
    // C3 would stop at them in every subquery, so we remove their names from keywords instead
    TSqlParser.RULE_ranking_windowed_function,
    TSqlParser.RULE_analytic_windowed_function,
    TSqlParser.RULE_freetext_function,
    TSqlParser.RULE_partition_function,
    TSqlParser.RULE_hierarchyid_static_method,
    // XML and hierarchyid methods are called on columns, we don't want to suggest them after every dot
    TSqlParser.RULE_value_call,
    TSqlParser.RULE_query_call,
    TSqlParser.RULE_exist_call,
    TSqlParser.RULE_modify_call,
    TSqlParser.RULE_hierarchyid_call,
    TSqlParser.RULE_nodes_method,
    // A batch may start with a procedure name without EXEC, it's not a statement we want to suggest
    TSqlParser.RULE_execute_body_batch,
]);

class MsSqlSymbolTableVisitor extends TSqlParserVisitor<{}> implements ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {allowDuplicateSymbols: true});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    addTableSymbol(name: string, alias?: string): void {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, name, alias);
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }
    }

    // INSERT INTO, UPDATE and DELETE FROM targets
    visitDdl_object = (context: Ddl_objectContext): {} => {
        const tableName = context.full_table_name()?.getText();
        if (tableName) {
            this.addTableSymbol(tableName);
        }

        return this.visitChildren(context) as {};
    };

    // ALTER TABLE target
    visitTable_name = (context: Table_nameContext): {} => {
        if (context.parent?.ruleIndex === TSqlParser.RULE_alter_table) {
            this.addTableSymbol(context.getText());
        }

        return this.visitChildren(context) as {};
    };

    visitTable_source_item = (context: Table_source_itemContext): {} => {
        const tableName = context.full_table_name()?.getText();
        if (tableName) {
            this.addTableSymbol(tableName, context.as_table_alias()?.table_alias().getText());
        }

        return this.visitChildren(context) as {};
    };

    visitExpression_elem = (context: Expression_elemContext): {} => {
        const alias =
            context.column_alias()?.getText() ??
            context.as_column_alias()?.column_alias().getText();
        if (alias) {
            try {
                this.symbolTable.addNewSymbolOfType(ColumnAliasSymbol, this.scope, alias);
            } catch (error) {
                if (!(error instanceof c3.DuplicateSymbolError)) {
                    throw error;
                }
            }
        }

        return this.visitChildren(context) as {};
    };
}

// T-SQL names are often qualified: dbo.test_table, test_database.dbo.test_table, test_alias.test_column.
// When cursor is after the dot, rule has already started, but we still want to suggest the name
function isStartingToWriteName(
    cursorTokenIndex: number,
    rule: c3.ICandidateRule,
    tokenStream: TokenStream,
): boolean {
    if (isStartingToWriteRule(cursorTokenIndex, rule)) {
        return true;
    }

    const previousTokens = [];
    for (let i = rule.startTokenIndex; i < cursorTokenIndex; i++) {
        const token = tokenStream.get(i);
        if (token.type !== TSqlParser.SPACE) {
            previousTokens.push(token);
        }
    }

    // Name parts and dots should alternate, e.g. [name, dot, name, dot]
    return (
        previousTokens.length % 2 === 0 &&
        previousTokens.every(
            (token, index) => (token.type === TSqlParser.DOT) === (index % 2 === 1),
        )
    );
}

function getParentRule(rule: c3.ICandidateRule): number | undefined {
    return rule.ruleList[rule.ruleList.length - 1];
}

function getPreviousDefaultChannelToken(
    tokenStream: TokenStream,
    tokenIndex: number,
): Token | undefined {
    for (let i = tokenIndex - 1; i >= 0; i--) {
        const token = tokenStream.get(i);
        if (token.channel === Token.DEFAULT_CHANNEL) {
            return token;
        }
    }

    return undefined;
}

// ALTER VIEW and ALTER TRIGGER are parsed by the same rules as CREATE VIEW and CREATE TRIGGER
function isAlteringObject(
    tokenStream: TokenStream,
    cursorTokenIndex: number,
    objectTokenType: number,
): boolean {
    const objectToken = getPreviousToken(
        tokenStream,
        tokenDictionary,
        cursorTokenIndex,
        objectTokenType,
    );
    const alterToken =
        objectToken && getPreviousDefaultChannelToken(tokenStream, objectToken.tokenIndex);
    if (alterToken?.type !== TSqlParser.ALTER) {
        return false;
    }

    // CREATE OR ALTER creates new object, so we don't want to suggest existing ones
    return (
        getPreviousDefaultChannelToken(tokenStream, alterToken.tokenIndex)?.type !== TSqlParser.OR
    );
}

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): ProcessVisitedRulesResult<MsSqlAutocompleteResult> {
    let suggestViewsOrTables: MsSqlAutocompleteResult['suggestViewsOrTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestIndexes = false;
    let suggestTriggers = false;
    let suggestDatabases = false;

    let shouldSuggestConstraints = false;
    let shouldSuggestColumns = false;
    let shouldSuggestColumnAliases = false;

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteName(cursorTokenIndex, rule, tokenStream)) {
            continue;
        }

        const parentRule = getParentRule(rule);

        switch (ruleId) {
            case TSqlParser.RULE_full_table_name:
            case TSqlParser.RULE_table_name: {
                if (
                    // These are names of new tables
                    parentRule === TSqlParser.RULE_create_table ||
                    parentRule === TSqlParser.RULE_query_specification ||
                    // This is a table qualifier of asterisk, columns are suggested instead
                    parentRule === TSqlParser.RULE_asterisk
                ) {
                    break;
                }

                // Indexes and triggers can be created on views too, so we only check TABLE keyword
                if (
                    getPreviousToken(
                        tokenStream,
                        tokenDictionary,
                        cursorTokenIndex,
                        TSqlParser.TABLE,
                    )
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.TABLES;
                } else {
                    suggestViewsOrTables = TableOrViewSuggestion.ALL;
                }
                break;
            }
            case TSqlParser.RULE_simple_name: {
                if (
                    parentRule === TSqlParser.RULE_drop_view ||
                    (parentRule === TSqlParser.RULE_create_view &&
                        isAlteringObject(tokenStream, cursorTokenIndex, TSqlParser.VIEW))
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.VIEWS;
                }
                if (
                    parentRule === TSqlParser.RULE_drop_dml_trigger ||
                    parentRule === TSqlParser.RULE_drop_ddl_trigger ||
                    ((parentRule === TSqlParser.RULE_create_or_alter_dml_trigger ||
                        parentRule === TSqlParser.RULE_create_or_alter_ddl_trigger) &&
                        isAlteringObject(tokenStream, cursorTokenIndex, TSqlParser.TRIGGER))
                ) {
                    suggestTriggers = true;
                }
                break;
            }
            case TSqlParser.RULE_aggregate_windowed_function: {
                // Table-valued functions are allowed in FROM, but we want to suggest only tables there
                if (rule.ruleList.includes(TSqlParser.RULE_expression)) {
                    suggestAggregateFunctions = true;
                }
                break;
            }
            case TSqlParser.RULE_scalar_function_name:
            case TSqlParser.RULE_partition_function: {
                if (rule.ruleList.includes(TSqlParser.RULE_expression)) {
                    // Partition functions are specific, we don't want to suggest them
                    if (ruleId !== TSqlParser.RULE_partition_function) {
                        suggestFunctions = true;
                    }
                    break;
                }

                // Qualified table name in FROM (dbo.|) is also a valid start of table-valued function call.
                // C3 caches visited rules by token index, so it reports only the function rule in this case
                if (
                    rule.ruleList[rule.ruleList.length - 2] === TSqlParser.RULE_table_source_item &&
                    !isStartingToWriteRule(cursorTokenIndex, rule)
                ) {
                    suggestViewsOrTables = TableOrViewSuggestion.ALL;
                }
                break;
            }
            case TSqlParser.RULE_full_column_name: {
                // This is XML method call in FROM, e.g. test_alias.test_column.nodes(...)
                if (
                    rule.ruleList.includes(TSqlParser.RULE_table_source_item) &&
                    !rule.ruleList.includes(TSqlParser.RULE_expression)
                ) {
                    break;
                }

                shouldSuggestColumns = true;

                if (
                    rule.ruleList.includes(TSqlParser.RULE_group_by_item) ||
                    rule.ruleList.includes(TSqlParser.RULE_order_by_expression)
                ) {
                    shouldSuggestColumnAliases = true;
                }
                break;
            }
            case TSqlParser.RULE_id_: {
                switch (parentRule) {
                    case TSqlParser.RULE_use_statement:
                    case TSqlParser.RULE_drop_database:
                    case TSqlParser.RULE_alter_database: {
                        suggestDatabases = true;
                        break;
                    }
                    case TSqlParser.RULE_drop_relational_or_xml_or_spatial_index:
                    case TSqlParser.RULE_alter_index: {
                        suggestIndexes = true;
                        break;
                    }
                    case TSqlParser.RULE_insert_column_id: {
                        shouldSuggestColumns = true;
                        break;
                    }
                    case TSqlParser.RULE_column_definition:
                    case TSqlParser.RULE_column_modifier: {
                        // ALTER COLUMN, column definitions of CREATE TABLE and ADD contain new names
                        if (
                            rule.ruleList.includes(TSqlParser.RULE_alter_table) &&
                            getPreviousToken(
                                tokenStream,
                                tokenDictionary,
                                cursorTokenIndex,
                                TSqlParser.COLUMN,
                            )
                        ) {
                            shouldSuggestColumns = true;
                        }
                        break;
                    }
                    case TSqlParser.RULE_column_name_list: {
                        // Column lists of CREATE VIEW, CTE, etc. contain new names
                        if (rule.ruleList.includes(TSqlParser.RULE_alter_table)) {
                            shouldSuggestColumns = true;
                        }
                        break;
                    }
                    case TSqlParser.RULE_alter_table: {
                        // DROP COLUMN or constraint name. New constraint is added with ADD keyword
                        if (
                            getPreviousToken(
                                tokenStream,
                                tokenDictionary,
                                cursorTokenIndex,
                                TSqlParser.COLUMN,
                            )
                        ) {
                            shouldSuggestColumns = true;
                        } else if (
                            !getPreviousToken(
                                tokenStream,
                                tokenDictionary,
                                cursorTokenIndex,
                                TSqlParser.ADD,
                            )
                        ) {
                            shouldSuggestConstraints = true;
                        }
                        break;
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
        suggestIndexes,
        suggestTriggers,
        suggestDatabases,
        shouldSuggestConstraints,
        shouldSuggestColumns,
        shouldSuggestColumnAliases,
    };
}

// T-SQL grammar doesn't have a rule for FROM clause, so we skip FROM and parse table sources one by one.
// We don't use table_sources rule, because it can't choose between its alternatives in unfinished query
// (e.g. ending with JOIN ... ON), and loses all tables
function getFromClauseParseTree(parser: TSqlParser): ParseTree {
    const {tokenStream} = parser;
    // Linter doesn't like uppercase function names, but this name is defined by ANTLR
    // eslint-disable-next-line new-cap
    if (tokenStream.LA(1) === TSqlParser.FROM) {
        tokenStream.consume();
    }

    const fromClause = new ParserRuleContext(null);
    fromClause.addChild(parser.table_source());
    // eslint-disable-next-line new-cap
    while (tokenStream.LA(1) === TSqlParser.COMMA) {
        tokenStream.consume();
        fromClause.addChild(parser.table_source());
    }

    return fromClause;
}

function getParseTree(parser: TSqlParser, type?: TableQueryPosition['type'] | 'select'): ParseTree {
    if (!type) {
        return parser.tsql_file();
    }

    switch (type) {
        case 'from':
            return getFromClauseParseTree(parser);
        case 'alter':
            return parser.alter_table();
        case 'insert':
            return parser.insert_statement();
        case 'update':
            return parser.update_statement();
        case 'select':
            return parser.select_statement();
    }
}

// Functions are suggested separately, so we don't want to suggest them as keywords too
function removeBuiltInFunctions(
    keywords: AutocompleteResultBase['suggestKeywords'],
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
): AutocompleteResultBase['suggestKeywords'] {
    const functionRule = rules.get(TSqlParser.RULE_scalar_function_name);
    if (!functionRule || !isStartingToWriteRule(cursorTokenIndex, functionRule)) {
        return keywords;
    }

    return keywords?.filter(({value}) => !builtInFunctionNames.has(value));
}

function enrichAutocompleteResult(
    baseResult: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    tokenStream: TokenStream,
    cursorTokenIndex: number,
    cursor: CursorPosition,
    query: string,
): MsSqlAutocompleteResult {
    const {
        shouldSuggestColumns,
        shouldSuggestColumnAliases,
        shouldSuggestConstraints,
        ...suggestionsFromRules
    } = processVisitedRules(rules, cursorTokenIndex, tokenStream);
    const suggestTemplates = shouldSuggestTemplates(query, cursor);
    const result: MsSqlAutocompleteResult = {
        ...baseResult,
        suggestKeywords: removeBuiltInFunctions(
            baseResult.suggestKeywords,
            rules,
            cursorTokenIndex,
        ),
        ...suggestionsFromRules,
        suggestTemplates,
    };
    const contextSuggestionsNeeded =
        shouldSuggestColumns || shouldSuggestConstraints || shouldSuggestColumnAliases;

    if (contextSuggestionsNeeded) {
        const visitor = new MsSqlSymbolTableVisitor();
        const currentStatementQuery = getMsSqlCurrentStatementQuery(query, tokenStream, cursor);
        const currentStatementLexer = createLexer(TSqlLexer, currentStatementQuery);
        currentStatementLexer.removeErrorListeners();
        const currentStatementTokenStream = new CommonTokenStream(currentStatementLexer);
        currentStatementTokenStream.fill();
        const {tableContextSuggestion, suggestColumnAliases} = getContextSuggestions(
            TSqlLexer,
            TSqlParser,
            visitor,
            tokenDictionary,
            getParseTree,
            currentStatementTokenStream,
            cursor,
            currentStatementQuery,
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

export const msSqlAutocompleteData: AutocompleteData<
    MsSqlAutocompleteResult,
    TSqlLexer,
    TSqlParser
> = {
    Lexer: TSqlLexer,
    Parser: TSqlParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
