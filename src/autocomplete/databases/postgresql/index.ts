import {
    ConstraintSuggestion,
    CursorPosition,
    ParserOptions,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {postgreSqlAutocompleteData} from './postgresql-autocomplete.js';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete.js';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor.js';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';
import {PostgreSqlStatementsVisitor} from './postgresql-extract-statements.js';

export {extractPostgreSqlTablesFromQuery} from './postgresql-extract-tables.js';

export {extractPostgreSqlDoubleCurlyPlaceholdersFromQuery} from './postgresql-extract-double-curly-placeholders.js';

export type {DoubleCurlyPlaceholder} from '../../shared/extract-double-curly-placeholders-from-query.js';

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
    parserOptions?: ParserOptions,
): Pick<PostgreSqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.tokenDictionary.SPACE,
        postgreSqlAutocompleteData.getParseTree,
        query,
        parserOptions,
    );
}

export function parsePostgreSqlQuery(
    query: string,
    cursor: CursorPosition,
    parserOptions?: ParserOptions,
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
        postgreSqlAutocompleteData.context,
        parserOptions,
    );
}

export function parsePostgreSqlQueryWithCursor(
    queryWithCursor: string,
    parserOptions?: ParserOptions,
): PostgreSqlAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parsePostgreSqlQuery(query, cursor, parserOptions);
}

export function extractPostgreSqlStatementPositionsFromQuery(
    query: string,
    parserOptions?: ParserOptions,
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
        parserOptions,
    );
}
