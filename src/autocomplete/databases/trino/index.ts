import {
    CursorPosition,
    ParseOptions,
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
    parseOptions?: ParseOptions,
): Pick<TrinoAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        trinoAutocompleteData.getParseTree,
        query,
        parseOptions,
    );
}

export function parseTrinoQuery(
    query: string,
    cursor: CursorPosition,
    parseOptions?: ParseOptions,
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
        parseOptions,
    );
}

export function parseTrinoQueryWithCursor(
    queryWithCursor: string,
    parseOptions?: ParseOptions,
): TrinoAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parseTrinoQuery(query, cursor, parseOptions);
}

export function extractTrinoStatementPositionsFromQuery(
    query: string,
    parseOptions?: ParseOptions,
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
        parseOptions,
    );
}
