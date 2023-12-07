import {clickhouseAutocompleteParser} from './parsers/clickhouse/clickhouseAutocompleteParser';
import {genericAutocompleteParser} from './parsers/generic/genericAutocompleteParser';
import {postgresqlAutocompleteParser} from './parsers/postgresql/postgresqlAutocompleteParser';

export * from './lib/parser-context';

// This symbol might be used by the external code
// noinspection JSUnusedGlobalSymbols
export const cursorSymbol = '†';

export interface AutocompleteParseResult {
    // Meta
    locations?: IdentifierLocation[];
    errors?: AutocompleteError[];

    // Suggestions
    suggestAggregateFunctions?: AggregateFunctionsSuggestion;
    suggestAnalyticFunctions?: boolean;
    suggestColRefKeywords?: ColRefKeywordsSuggestion;
    suggestColumnAliases?: ColumnAliasDetails[];
    suggestColumns?: ColumnsSuggestion;
    suggestCommonTableExpressions?: IdentifierSuggestion[];
    suggestDatabases?: DatabasesSuggestion;
    suggestFilters?: FiltersSuggestion;
    suggestFunctions?: FunctionsSuggestion;
    suggestGroupBys?: GroupBysSuggestion;
    suggestHdfs?: HadoopDistributedFileSystemsSuggestion;
    suggestJoins?: JoinsSuggestion;
    suggestJoinConditions?: JoinConditionsSuggestion;
    suggestIdentifiers?: IdentifierSuggestion[];
    suggestKeyValues?: KeyValuesSuggestion;
    suggestKeywords?: WeightedKeywordSuggestion[];
    suggestOrderBys?: OrderBysSuggestion;
    suggestSetOptions?: boolean;
    suggestTables?: TablesSuggestion;
    suggestValues?: ValuesSuggestion;
    suggestTemplates?: boolean;
    suggestEngines?: EnginesSuggestion;

    // Other
    subQueries?: SubQuery[];
    commonTableExpressions?: IdentifierLocation[];
    useDatabase?: string;
    udfArgument?: UserDefinedFunctionArgumentPosition;
    error?: AutocompleteError;
    definitions?: IdentifierLocation[];
    colRef?: DetailedColumnReference;
    lowerCase?: boolean;
}

export type ColRefKeywordsSuggestion = Record<string, string[]>;

export interface ColumnAliasDetails {
    name: string;
    udfRef?: string;
    types: string[];
}

export interface WeightedKeywordSuggestion {
    value: string;
    weight: number;
}

export type KeywordSuggestion = WeightedKeywordSuggestion | string;

export interface DetailedColumnReference {
    identifierChain: IdentifierChainEntry[];
    tables?: Table[];
    linked?: boolean;
    owner?: string;
}

export interface UserDefinedFunctionArgumentPosition {
    name: string;
    position: number;
}

export interface IdentifierLocation {
    identifier?: string;
    type: IdentifierLocationType;
    alias?: string;
    source?: string;
    location: Location;
    function?: string;
    missing?: boolean;
    value?: string;
    active?: boolean;
    tables?: Table[];
    colRef?: DetailedColumnReference;
    argumentPosition?: number;
    identifierChain?: IdentifierChainEntry[];
    expression?: AwaitedTokenExpression;
    parentLocation?: Location;
    path?: string;
    qualified?: boolean;
    columns?: ColumnDetails[];
    subquery?: boolean;
    suffix?: string;
    linked?: boolean;
    firstInChain?: boolean;
    target?: string;
}

export type OrderBysSuggestion = {
    tables?: Table[];
    tablePrimaries?: Table[];
    prefix?: string;
    linked?: boolean;
};

export type GroupBysSuggestion = OrderBysSuggestion;

export interface HadoopDistributedFileSystemsSuggestion {
    path: string;
}

export interface EnginesSuggestion {
    engines: string[];
    functionalEngines: string[];
}

export interface ValuesSuggestion {
    missingEndQuote?: boolean;
    partialQuote?: string;
}

export interface AggregateFunctionsSuggestion {
    tables?: Table[];
    tablePrimaries?: Table[];
    linked?: boolean;
}

export interface FunctionsSuggestion {
    types?: string[];
    udfRef?: string;
}

export interface DatabasesSuggestion {
    appendBacktick?: boolean;
    appendDot?: boolean;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
}

export interface ColumnsSuggestion {
    appendBacktick?: boolean;
    identifierChain?: IdentifierChainEntry[];
    source?: string;
    tables?: Table[];
    types?: string[];
    udfRef?: string;
    linked?: boolean;
    owner?: string;
}

export interface CommonTableExpressionsSuggestion {
    name: string;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
}

export interface CommonTableExpression {
    alias: string;
    columns: ColumnsSuggestion[];
}

export interface AutocompleteError {
    expected: string[];
    line: number;
    loc: Location;
    recoverable: boolean;
    ruleId: string;
    text: string;
    token: string;
}

export interface JoinConditionsSuggestion {
    prependOn?: boolean;
    tables?: Table[];
    tablePrimaries?: Table[];
    linked?: boolean;
}

export interface JoinsSuggestion {
    prependJoin: boolean;
    joinType?: unknown;
    tables: Table[];
}

export interface IdentifierSuggestion {
    name?: string;
    type?: string;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
    appendBacktick?: boolean;
}

export interface FiltersSuggestion {
    tables?: Table[];
    tablePrimaries?: Table[];
    prefix?: string;
    linked?: boolean;
}

export interface KeyValuesSuggestion {
    linked?: boolean;
}

export interface TablesSuggestion {
    appendBacktick?: boolean;
    identifierChain?: IdentifierChainEntry[];
    onlyTables?: boolean;
    onlyViews?: boolean;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
}

export interface IdentifierChainEntry {
    name?: string;
    asterisk?: boolean;
    cte?: string;
    subQuery?: string;
}

export interface SubQuery {
    alias: string;
    columns: ColumnDetails[];
    subQueries?: SubQuery[];
}

export interface Table {
    alias?: string;
    identifierChain?: IdentifierChainEntry[];
    owner?: string;
    subQuery?: string;
    subQueryAlias?: string;
}

export interface Location {
    first_line: number;
    first_column: number;
    last_line: number;
    last_column: number;
}

export type IdentifierLocationType =
    | 'alias'
    | 'asterisk'
    | 'column'
    | 'database'
    | 'file'
    | 'function'
    | 'functionArgument'
    | 'statement'
    | 'statementType'
    | 'table'
    | 'unknown'
    | 'variable'
    | 'subQuery'
    | 'complex'
    | 'selectList'
    | 'whereClause'
    | 'limitClause';

export interface ColumnDetails {
    type?: string | string[];
    identifierChain?: IdentifierChainEntry[];
    location?: Location;
    alias?: string;
    subQuery?: string;
    udfRef?: string;
    tables?: Table[];
}

export interface ColumnSpecification {
    identifier: IdentifierChainEntry;
    location: Location;
    type: string;
}

interface ColumnTokenExpression {
    types: string[];
    columnReference: ColumnReference[];
}

export interface TokenExpression {
    text: string;
}

export type AwaitedTokenExpression = number | string | ColumnTokenExpression | TokenExpression;

export interface ColumnReference {
    name: string;
}

abstract class Parser {
    abstract parseSql(beforeCursor: string, afterCursor: string): AutocompleteParseResult;
}

export function parseGenericSql(
    queryBeforeCursor: string,
    queryAfterCursor: string,
): AutocompleteParseResult {
    const parser = genericAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parseGenericSqlWithoutCursor(query: string): AutocompleteParseResult {
    return parseGenericSql(getFinishedQuery(query), '');
}

export function parsePostgreSql(
    queryBeforeCursor: string,
    queryAfterCursor: string,
): AutocompleteParseResult {
    const parser = postgresqlAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parsePostgreSqlWithoutCursor(query: string): AutocompleteParseResult {
    return parsePostgreSql(getFinishedQuery(query), '');
}

export function parseClickHouseSql(
    queryBeforeCursor: string,
    queryAfterCursor: string,
): AutocompleteParseResult {
    const parser = clickhouseAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parseClickHouseSqlWithoutCursor(query: string): AutocompleteParseResult {
    return parseClickHouseSql(getFinishedQuery(query), '');
}

function getFinishedQuery(query: string): string {
    // If our finished query is "SELECT * FROM|" and we try to parse it, parser thinks that we still haven't finished writing it and doesn't show some errors.
    // In order to truly complete a finished query, we need to add space to it like so "SELECT * FROM |".
    return query + ' ';
}
