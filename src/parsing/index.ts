// @ts-ignore
import {genericAutocompleteParser} from './parsers/generic/genericAutocompleteParser';

export const cursorSymbol = '†';

export abstract class Parser {
    abstract parseSql(beforeCursor: string, afterCursor: string, debug?: boolean): ParseResult;
}

export interface ParseResult {
    errors?: SyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTables?: {
        prependFrom?: boolean;
        prependQuestionMark?: boolean;
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

export function parseGenericSql(queryBeforeCursor: string, queryAfterCursor: string, debug?: boolean): ParseResult {
    let parser = genericAutocompleteParser as unknown as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor, debug) as ParseResult;
}
