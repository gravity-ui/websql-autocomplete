import {
    ConstraintSuggestion,
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {postgreSqlAutocompleteData} from './postgresql-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer';
import {PostgreSqlStatementsVisitor} from './postgresql-extract-statements';

export {extractPostgreSqlTableNamesFromQuery} from './postgresql-extract-tables';

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

export function extractPostgreSqlStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.tokenDictionary.SPACE,
        [PostgreSqlLexer.Newline, postgreSqlAutocompleteData.tokenDictionary.SPACE],
        postgreSqlAutocompleteData.tokenDictionary.SEMICOLON,
        new PostgreSqlStatementsVisitor(),
        postgreSqlAutocompleteData.getParseTree,
    );
}
