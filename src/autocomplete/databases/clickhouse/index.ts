import {
    CursorPosition,
    EngineSuggestion,
    ParserOptions,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {clickHouseAutocompleteData} from './clickhouse-autocomplete.js';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete.js';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor.js';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query.js';
import {ClickHouseStatementsVisitor} from './clickhouse-extract-statements.js';

export {extractClickHouseTablesFromQuery} from './clickhouse-extract-tables.js';

export {extractClickHouseDoubleCurlyPlaceholdersFromQuery} from './clickhouse-extract-double-curly-placeholders.js';

export type {DoubleCurlyPlaceholder} from '../../shared/extract-double-curly-placeholders-from-query.js';

export interface ClickHouseAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestEngines?: EngineSuggestion;
}

export function parseClickHouseQueryWithoutCursor(
    query: string,
    parserOptions?: ParserOptions,
): Pick<ClickHouseAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        clickHouseAutocompleteData.getParseTree,
        query,
        parserOptions,
    );
}

export function parseClickHouseQuery(
    query: string,
    cursor: CursorPosition,
    parserOptions?: ParserOptions,
): ClickHouseAutocompleteResult {
    return parseQuery(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        clickHouseAutocompleteData.ignoredTokens,
        clickHouseAutocompleteData.rulesToVisit,
        clickHouseAutocompleteData.getParseTree,
        clickHouseAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
        clickHouseAutocompleteData.context,
        parserOptions,
    );
}

export function parseClickHouseQueryWithCursor(
    queryWithCursor: string,
    parserOptions?: ParserOptions,
): ClickHouseAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parseClickHouseQuery(query, cursor, parserOptions);
}

export function extractClickHouseStatementPositionsFromQuery(
    query: string,
    parserOptions?: ParserOptions,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        [clickHouseAutocompleteData.tokenDictionary.SPACE],
        clickHouseAutocompleteData.tokenDictionary.SEMICOLON,
        new ClickHouseStatementsVisitor(),
        clickHouseAutocompleteData.getParseTree,
        parserOptions,
    );
}
