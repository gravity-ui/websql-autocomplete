import {genericAutocompleteParser} from './parsers/generic/genericAutocompleteParser';
import {postgresqlAutocompleteParser} from './parsers/postgresql/postgresqlAutocompleteParser';

export const cursorSymbol = '†';

export abstract class Parser {
    abstract parseSql(beforeCursor: string, afterCursor: string): ParseResult;
}

export interface ParseResult {
    locations: StatementPart[];
    errors?: SyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTables?: {
        prependFrom?: boolean;
        prependQuestionMark?: boolean;
        onlyTables?: boolean;
    };
    suggestColumns?: {
        source: string;
        tables: Table[];
    };
    suggestAggregateFunctions?: {
        tables: Table[],
    };
    suggestAnalyticFunctions?: unknown;
    suggestColRefKeywords?: unknown;
    suggestColumnAliases?: ColumnAliasSuggestion[];
    suggestCommonTableExpressions?: unknown;
    suggestDatabases?: unknown;
    suggestFilters?: unknown;
    suggestFunctions?: unknown;
    suggestGroupBys?: unknown;
    suggestIdentifiers?: IdentifierSuggestion[];
    suggestTemplates?: boolean;
}

export type StatementPart =
    {
        type: 'statement'
        location: Location
    }
    | {
        type: 'statementType'
        location: Location
        identifier: string
    }
    | {
        type: 'selectList'
        location: Location
        missing?: boolean
        subquery?: true
    }
    | {
        type: 'asterisk'
        location: Location
        tables: Table[];
    }
    | {
        type: 'table'
        location: Location
        identifierChain: IdentifierChainEntry[]
    }
    | {
        type: 'whereClause'
        location: Location
        missing: boolean
        subquery?: true
    }
    | {
        type: 'limitClause'
        location: Location
        missing: boolean
        subquery?: true
    };

export interface KeywordSuggestion {
    value: string;
    weight: number;
}

export interface SyntaxError {
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

export function parseGenericSql(queryBeforeCursor: string, queryAfterCursor: string): ParseResult {
    let parser = genericAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parseGenericSqlWithoutCursor(query: string): ParseResult {
    return parseGenericSql(query + ' ', '');
}

export function parsePostgreSql(queryBeforeCursor: string, queryAfterCursor: string): ParseResult {
    let parser = postgresqlAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parsePostgreSqlWithoutCursor(query: string): ParseResult {
    return parsePostgreSql(query + ' ', '');
}
