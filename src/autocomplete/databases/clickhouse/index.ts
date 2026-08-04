import {
    CursorPosition,
    EngineSuggestion,
    LexerOptions,
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
    lexerOptions?: LexerOptions,
): Pick<ClickHouseAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        clickHouseAutocompleteData.getParseTree,
        query,
        lexerOptions,
    );
}

export function parseClickHouseQuery(
    query: string,
    cursor: CursorPosition,
    lexerOptions?: LexerOptions,
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
        lexerOptions,
    );
}

export function parseClickHouseQueryWithCursor(
    queryWithCursor: string,
    lexerOptions?: LexerOptions,
): ClickHouseAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parseClickHouseQuery(query, cursor, lexerOptions);
}

export function extractClickHouseStatementPositionsFromQuery(
    query: string,
    lexerOptions?: LexerOptions,
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
        lexerOptions,
    );
}
