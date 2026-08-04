import {
    ConstraintSuggestion,
    CursorPosition,
    ParserOptions,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {mySqlAutocompleteData} from './mysql-autocomplete.js';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete.js';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor.js';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query.js';
import {MySqlStatementsVisitor} from './mysql-extract-statements.js';

export {extractMySqlTablesFromQuery} from './mysql-extract-tables.js';

export {extractMySqlDoubleCurlyPlaceholdersFromQuery} from './mysql-extract-double-curly-placeholders.js';

export type {DoubleCurlyPlaceholder} from '../../shared/extract-double-curly-placeholders-from-query.js';

export interface MySqlAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestRoles?: boolean;
    suggestUsers?: boolean;
}

export function parseMySqlQueryWithoutCursor(
    query: string,
    parserOptions?: ParserOptions,
): Pick<MySqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        mySqlAutocompleteData.getParseTree,
        query,
        parserOptions,
    );
}

export function parseMySqlQuery(
    query: string,
    cursor: CursorPosition,
    parserOptions?: ParserOptions,
): MySqlAutocompleteResult {
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
        mySqlAutocompleteData.context,
        parserOptions,
    );
}

export function parseMySqlQueryWithCursor(
    queryWithCursor: string,
    parserOptions?: ParserOptions,
): MySqlAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parseMySqlQuery(query, cursor, parserOptions);
}

export function extractMySqlStatementPositionsFromQuery(
    query: string,
    parserOptions?: ParserOptions,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        [mySqlAutocompleteData.tokenDictionary.SPACE],
        mySqlAutocompleteData.tokenDictionary.SEMICOLON,
        new MySqlStatementsVisitor(),
        mySqlAutocompleteData.getParseTree,
        parserOptions,
    );
}
