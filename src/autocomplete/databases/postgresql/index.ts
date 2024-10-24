import {
    ConstraintSuggestion,
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {postgreSqlAutocompleteData} from './postgresql-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';

export interface PostgreSqlAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestSequences?: boolean;
    suggestSchemas?: boolean;
    suggestRoles?: boolean;
}

export function parsePostgreSqlQueryWithoutCursor(
    query: string,
): Pick<PostgreSqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.tokenDictionary.SPACE,
        postgreSqlAutocompleteData.getParseTree,
        query,
    );
}

export function parsePostgreSqlQuery(
    query: string,
    cursor: CursorPosition,
): PostgreSqlAutocompleteResult {
    return parseQuery(
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.tokenDictionary.SPACE,
        postgreSqlAutocompleteData.ignoredTokens,
        postgreSqlAutocompleteData.rulesToVisit,
        postgreSqlAutocompleteData.getParseTree,
        postgreSqlAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parsePostgreSqlQueryWithCursor(
    queryWithCursor: string,
): PostgreSqlAutocompleteResult {
    return parsePostgreSqlQuery(...separateQueryAndCursor(queryWithCursor));
}
