import {AutocompleteParseResult} from './lib/autocomplete-parse-result';
import {clickhouseAutocompleteParser} from './parsers/clickhouse/clickhouseAutocompleteParser';
import {genericAutocompleteParser} from './parsers/generic/genericAutocompleteParser';
import {postgresqlAutocompleteParser} from './parsers/postgresql/postgresqlAutocompleteParser';

export * from './lib/autocomplete-parse-result';

export const cursorSymbol = '†';

export abstract class Parser {
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

export function parseClickHouse(
    queryBeforeCursor: string,
    queryAfterCursor: string,
): AutocompleteParseResult {
    const parser = clickhouseAutocompleteParser as Parser;
    return parser.parseSql(queryBeforeCursor, queryAfterCursor);
}

export function parseClickHouseWithoutCursor(query: string): AutocompleteParseResult {
    return parseClickHouse(getFinishedQuery(query), '');
}

function getFinishedQuery(query: string): string {
    // If our finished query is "SELECT * FROM|" and we try to parse it, parser thinks that we still haven't finished writing it and doesn't show some errors.
    // In order to truly complete a finished query, we need to add space to it like so "SELECT * FROM |".
    return query + ' ';
}
