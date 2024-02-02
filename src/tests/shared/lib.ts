import {
    AutocompleteParseResult,
    CursorPosition,
    parseClickHouseQuery,
    parseClickHouseQueryWithoutCursor,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
    parsePostgreSqlQuery,
    parsePostgreSqlQueryWithoutCursor,
} from '../..';
import {lineSeparatorRegex} from '../../lib/cursor';

export enum DatabaseType {
    MySql,
    PostgreSql,
    ClickHouse,
}

export function parseMySqlQueryWithCursor(queryWithCursor: string): AutocompleteParseResult {
    return parseMySqlQuery(...separateQueryAndCursor(queryWithCursor));
}

export function parsePostgreSqlQueryWithCursor(queryWithCursor: string): AutocompleteParseResult {
    return parsePostgreSqlQuery(...separateQueryAndCursor(queryWithCursor));
}

export function parseClickHouseQueryWithCursor(queryWithCursor: string): AutocompleteParseResult {
    return parseClickHouseQuery(...separateQueryAndCursor(queryWithCursor));
}

export function groupParseSql(
    query: string,
    cursor: CursorPosition,
    databases?: DatabaseType[],
): AutocompleteParseResult[] {
    const results: AutocompleteParseResult[] = [];

    if (!databases || databases.includes(DatabaseType.MySql)) {
        results.push(parseMySqlQuery(query, cursor));
    }
    if (!databases || databases.includes(DatabaseType.PostgreSql)) {
        results.push(parsePostgreSqlQuery(query, cursor));
    }
    if (!databases || databases.includes(DatabaseType.ClickHouse)) {
        results.push(parseClickHouseQuery(query, cursor));
    }

    return results;
}

export function groupParseSqlWithCursor(
    queryWithCursor: string,
    databases?: DatabaseType[],
): AutocompleteParseResult[] {
    return groupParseSql(...separateQueryAndCursor(queryWithCursor), databases);
}

export function groupParseSqlWithoutCursor(
    query: string,
    databases?: DatabaseType[],
): Pick<AutocompleteParseResult, 'errors'>[] {
    const results: Pick<AutocompleteParseResult, 'errors'>[] = [];

    if (!databases || databases.includes(DatabaseType.MySql)) {
        results.push(parseMySqlQueryWithoutCursor(query));
    }
    if (!databases || databases.includes(DatabaseType.PostgreSql)) {
        results.push(parsePostgreSqlQueryWithoutCursor(query));
    }
    if (!databases || databases.includes(DatabaseType.ClickHouse)) {
        results.push(parseClickHouseQueryWithoutCursor(query));
    }

    return results;
}

export function separateQueryAndCursor(query: string): [string, CursorPosition] {
    if (lineSeparatorRegex.test(query)) {
        throw new Error(`Newline characters not allowed, but present in query ${query}`);
    }

    const [queryBeforeCursor, queryAfterCursor, ...excessQueries] = query.split('|');

    if (excessQueries.length > 0) {
        throw new Error(`Multiple cursors not allowed, but present in query ${query}`);
    }

    if (queryBeforeCursor === undefined || queryAfterCursor === undefined) {
        throw new Error(`Cursor not provided for query ${query}`);
    }

    return [queryBeforeCursor + queryAfterCursor, {line: 1, column: queryBeforeCursor.length + 1}];
}
