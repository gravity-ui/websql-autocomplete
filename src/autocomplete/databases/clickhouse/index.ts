import {
    CreateTokenSource,
    CursorPosition,
    EngineSuggestion,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {clickHouseAutocompleteData} from './clickhouse-autocomplete';
import {getExpectedTokens, parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {ClickHouseStatementsVisitor} from './clickhouse-extract-statements';

export {extractClickHouseTablesFromQuery} from './clickhouse-extract-tables';

export interface ClickHouseAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestEngines?: EngineSuggestion;
}

export interface ClickHouseParseOptions {
    // Wraps the base lexer to intercept or rewrite tokens before they reach the
    // parser — e.g. collapsing `{{ ... }}` template placeholders into a single
    // token that masquerades as a native value token. When omitted, the query is
    // parsed with the unmodified token stream.
    createTokenSource?: CreateTokenSource;
}

export function parseClickHouseQueryWithoutCursor(
    query: string,
    options?: ClickHouseParseOptions,
): Pick<ClickHouseAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        clickHouseAutocompleteData.getParseTree,
        query,
        options?.createTokenSource,
    );
}

export function parseClickHouseQuery(
    query: string,
    cursor: CursorPosition,
    options?: ClickHouseParseOptions,
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
        undefined,
        options?.createTokenSource,
    );
}

export function parseClickHouseQueryWithCursor(
    queryWithCursor: string,
    options?: ClickHouseParseOptions,
): ClickHouseAutocompleteResult {
    return parseClickHouseQuery(...separateQueryAndCursor(queryWithCursor), options);
}

// Returns the raw token types the ClickHouse grammar expects at `cursor`. Parsed
// with the plain lexer (no `createTokenSource`), so it is safe to call from within
// a token source without recursing back into itself.
//
// Unlike autocomplete, neither `ignoredTokens` nor `preferredRules` are applied:
// - Autocomplete hides literals and identifiers (they make no sense as
//   suggestions), but those are exactly the tokens we need here to tell, say, a
//   string-literal position from a numeric one.
// - ClickHouse wraps value literals in the preferred `literal`/`anyValue` rules,
//   so with `preferredRules` set c3 would stop at those rules and never surface the
//   underlying `STRING_LITERAL`/`DECIMAL_LITERAL` tokens. Passing an empty set lets
//   it descend into them, which is what the placeholder needs to pick a masquerade.
export function getClickHouseParserExpectedTokens(query: string, cursor: CursorPosition): number[] {
    return getExpectedTokens(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        new Set(),
        new Set(),
        clickHouseAutocompleteData.getParseTree,
        query,
        cursor,
    );
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
