import {
    CursorPosition,
    EngineSuggestion,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {clickHouseAutocompleteData} from './clickhouse-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {ClickHouseStatementsVisitor} from './clickhouse-extract-statements';

export interface ClickHouseAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestEngines?: EngineSuggestion;
}

export function parseClickHouseQueryWithoutCursor(
    query: string,
): Pick<ClickHouseAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        clickHouseAutocompleteData.getParseTree,
        query,
    );
}

export function parseClickHouseQuery(
    query: string,
    cursor: CursorPosition,
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
    );
}

export function parseClickHouseQueryWithCursor(
    queryWithCursor: string,
): ClickHouseAutocompleteResult {
    return parseClickHouseQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractClickHouseStatementPositionsFromQuery(
    query: string,
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
    );
}
