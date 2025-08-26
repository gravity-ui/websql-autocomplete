import {
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {trinoAutocompleteData} from './trino-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {TrinoStatementsVisitor} from './trino-extract-statements';
import {extractUniqueRuleTextByIndexesFromQuery} from '../../shared/extract-unique-rule-text-by-indexes-from-query';
import {TrinoParser} from './generated/TrinoParser';

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
): Pick<TrinoAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        trinoAutocompleteData.getParseTree,
        query,
    );
}

export function parseTrinoQuery(query: string, cursor: CursorPosition): TrinoAutocompleteResult {
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
    );
}

export function parseTrinoQueryWithCursor(queryWithCursor: string): TrinoAutocompleteResult {
    return parseTrinoQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractTrinoStatementPositionsFromQuery(
    query: string,
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
    );
}

export function extractTrinoTableNamesFromQuery(query: string): string[] {
    return extractUniqueRuleTextByIndexesFromQuery(
        query,
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.getParseTree,
        [TrinoParser.RULE_tableIdentifier, TrinoParser.RULE_newTableIdentifier],
    );
}
