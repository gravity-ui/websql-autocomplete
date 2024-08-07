import {
    AutocompleteResultBase,
    ConstraintSuggestion,
    CursorPosition,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {mySqlAutocompleteData} from './mysql-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';

export interface MySqlAutocompleteResult extends AutocompleteResultBase {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestRoles?: boolean;
    suggestUsers?: boolean;
}

export function parseMySqlQueryWithoutCursor(
    query: string,
): Pick<MySqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        mySqlAutocompleteData.getParseTree,
        query,
    );
}

export function parseMySqlQuery(query: string, cursor: CursorPosition): MySqlAutocompleteResult {
    return parseQuery(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        mySqlAutocompleteData.ignoredTokens,
        mySqlAutocompleteData.rulesToVisit,
        mySqlAutocompleteData.getParseTree,
        mySqlAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseMySqlQueryWithCursor(queryWithCursor: string): MySqlAutocompleteResult {
    return parseMySqlQuery(...separateQueryAndCursor(queryWithCursor));
}
