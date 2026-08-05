import {
    CursorPosition,
    LexerOptions,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {trinoAutocompleteData} from './trino-autocomplete.js';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete.js';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor.js';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query.js';
import {TrinoStatementsVisitor} from './trino-extract-statements.js';

export {extractTrinoTablesFromQuery} from './trino-extract-tables.js';

export {extractTrinoDoubleCurlyPlaceholdersFromQuery} from './trino-extract-double-curly-placeholders.js';

export interface TrinoAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestSchemas?: true;
    suggestCatalogs?: true;

    // TODO-TRINO: enrich autocomplete
    suggestAggregateFunctions?: undefined;
    suggestFunctions?: undefined;
    suggestDatabases?: undefined;
}

export function parseTrinoQueryWithoutCursor(
    query: string,
    lexerOptions?: LexerOptions,
): Pick<TrinoAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        trinoAutocompleteData.getParseTree,
        query,
        lexerOptions,
    );
}

export function parseTrinoQuery(
    query: string,
    cursor: CursorPosition,
    lexerOptions?: LexerOptions,
): TrinoAutocompleteResult {
    return parseQuery(
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        trinoAutocompleteData.ignoredTokens,
        trinoAutocompleteData.rulesToVisit,
        trinoAutocompleteData.getParseTree,
        trinoAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
        trinoAutocompleteData.context,
        lexerOptions,
    );
}

export function parseTrinoQueryWithCursor(
    queryWithCursor: string,
    lexerOptions?: LexerOptions,
): TrinoAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parseTrinoQuery(query, cursor, lexerOptions);
}

export function extractTrinoStatementPositionsFromQuery(
    query: string,
    lexerOptions?: LexerOptions,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        [trinoAutocompleteData.tokenDictionary.SPACE],
        trinoAutocompleteData.tokenDictionary.SEMICOLON,
        new TrinoStatementsVisitor(),
        trinoAutocompleteData.getParseTree,
        lexerOptions,
    );
}
