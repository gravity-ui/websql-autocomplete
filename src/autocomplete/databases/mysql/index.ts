import {
    ConstraintSuggestion,
    CursorPosition,
    ParseOptions,
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
    parseOptions?: ParseOptions,
): Pick<MySqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        mySqlAutocompleteData.getParseTree,
        query,
        parseOptions,
    );
}

export function parseMySqlQuery(
    query: string,
    cursor: CursorPosition,
    parseOptions?: ParseOptions,
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
        parseOptions,
    );
}

export function parseMySqlQueryWithCursor(
    queryWithCursor: string,
    parseOptions?: ParseOptions,
): MySqlAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parseMySqlQuery(query, cursor, parseOptions);
}

export function extractMySqlStatementPositionsFromQuery(
    query: string,
    parseOptions?: ParseOptions,
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
        parseOptions,
    );
}
