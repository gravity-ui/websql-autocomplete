import {clickhouseAutocompleteParser} from './parsers/clickhouse/clickhouseAutocompleteParser';
import {genericAutocompleteParser} from './parsers/generic/genericAutocompleteParser';
import {postgresqlAutocompleteParser} from './parsers/postgresql/postgresqlAutocompleteParser';

export const cursorSymbol = '†';

export abstract class Parser {
    abstract parseSql(beforeCursor: string, afterCursor: string): ParseResult;
}

export interface ParseResult {
    locations: StatementPart[]; // TODO: figure our if it's optional
    errors?: ParserSyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTables?: TablesSuggestion;
    suggestColumns?: ColumnSuggestion;
    suggestAggregateFunctions?: AggregateFunctionsSuggestion;
    suggestAnalyticFunctions?: boolean;
    suggestColRefKeywords?: {
        [type: string]: string[];
    };
    suggestColumnAliases?: ColumnAliasSuggestion[];
    suggestCommonTableExpressions?: unknown;
    suggestDatabases?: DatabasesSuggestion;
    suggestFilters?: CommonSuggestion;
    suggestFunctions?: FunctionsSuggestion;
    suggestValues?: ValuesSuggestion;
    suggestGroupBys?: CommonSuggestion;
    suggestOrderBys?: CommonSuggestion;
    suggestJoins?: JoinsSuggestion;
    suggestIdentifiers?: IdentifierSuggestion[];
    suggestTemplates?: boolean;
    suggestEngines?: EnginesSuggestion;
    colRef?: ColumnReference;
    useDatabase?: string;

    // Reasons for those fields are unknown
    definitions?: []; // TODO: figure our if it's optional
    lowerCase: boolean;
}

export type StatementPart =
    | {
          type: 'statement';
          location: Location;
      }
    | {
          type: 'statementType';
          location: Location;
          identifier: string;
      }
    | {
          type: 'selectList';
          location: Location;
          missing?: boolean;
          subquery?: true;
      }
    | {
          type: 'asterisk';
          location: Location;
          tables: Table[];
      }
    | {
          type: 'table';
          location: Location;
          identifierChain: IdentifierChainEntry[];
      }
    | {
          type: 'whereClause';
          location: Location;
          missing: boolean;
          subquery?: true;
      }
    | {
          type: 'column';
          location: Location;
          identifierChain: IdentifierChainEntry[];
          tables: Table[];
          qualified: boolean;
      }
    | {
          type: 'database';
          location: Location;
          identifierChain: IdentifierChainEntry[];
      }
    | {
          type: 'limitClause';
          location: Location;
          missing: boolean;
          subquery?: true;
      };

export interface TablesSuggestion {
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
    onlyTables?: boolean;
    onlyViews?: boolean;
    identifierChain?: IdentifierChainEntry[];
}

export interface DatabasesSuggestion {
    appendDot?: boolean; // TODO: figure our if it's optional
    prependQuestionMark?: boolean;
    prependFrom?: boolean;
}

export interface AggregateFunctionsSuggestion {
    tables: Table[];
}

export interface ColumnSuggestion {
    source?: string; // TODO: figure our if it's optional
    types?: string[];
    tables: Table[];
}

export interface FunctionsSuggestion {
    types?: string[];
}

export interface CommonSuggestion {
    prefix?: string;
    tables: Table[];
}

export interface JoinsSuggestion {
    prependJoin?: boolean;
    tables: Table[];
}

export interface ValuesSuggestion {
    missingEndQuote?: boolean;
    partialQuote?: boolean;
}

export interface ColumnReference {
    identifierChain: IdentifierChainEntry[];
}

export interface KeywordSuggestion {
    value: string;
    weight: number;
}

export interface ParserSyntaxError {
    expected: string[];
    line: number;
    loc: Location;
    recoverable: boolean;
    ruleId: string;
    text: string;
    token: string;
}

export interface Location {
    first_line: number;
    first_column: number;
    last_line: number;
    last_column: number;
}

export interface Table {
    alias?: string;
    identifierChain: IdentifierChainEntry[];
}

export interface IdentifierChainEntry {
    name: string;
}

export interface IdentifierSuggestion {
    name: string;
    type: string;
}

export interface ColumnAliasSuggestion {
    name: string;
    types: string[];
}

type Engines = string[];

export type EnginesSuggestion = {
    engines: Engines;
    functionalEngines: Engines;
};

export function parseGenericSql(queryBeforeCursor: string, queryAfterCursor: string): ParseResult {
    const parser = genericAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parseGenericSqlWithoutCursor(query: string): ParseResult {
    return parseGenericSql(getFinishedQuery(query), '');
}

export function parsePostgreSql(queryBeforeCursor: string, queryAfterCursor: string): ParseResult {
    const parser = postgresqlAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parsePostgreSqlWithoutCursor(query: string): ParseResult {
    return parsePostgreSql(getFinishedQuery(query), '');
}

export function parseClickHouse(queryBeforeCursor: string, queryAfterCursor: string): ParseResult {
    const parser = clickhouseAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parseClickHouseWithoutCursor(query: string): ParseResult {
    return parseClickHouse(getFinishedQuery(query), '');
}

function getFinishedQuery(query: string): string {
    // If our finished query is "SELECT * FROM|" and we try to parse it, parser thinks that we still haven't finished writing it and doesn't show some errors.
    // In order to truly complete a finished query, we need to add space to it like so "SELECT * FROM |".
    return query + ' ';
}
