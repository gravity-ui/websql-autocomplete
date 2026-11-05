import {
    ConstraintSuggestion,
    CursorPosition,
    ParseOptions,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {msSqlAutocompleteData} from './mssql-autocomplete.js';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete.js';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor.js';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query.js';
import {MsSqlStatementsVisitor} from './mssql-extract-statements.js';
import {TSqlParser} from './generated/TSqlParser.js';

export {extractMsSqlTablesFromQuery} from './mssql-extract-tables.js';

export interface MsSqlAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
}

export function parseMsSqlQueryWithoutCursor(
    query: string,
    parseOptions?: ParseOptions,
): Pick<MsSqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        msSqlAutocompleteData.Lexer,
        msSqlAutocompleteData.Parser,
        msSqlAutocompleteData.tokenDictionary.SPACE,
        msSqlAutocompleteData.getParseTree,
        query,
        parseOptions,
    );
}

export function parseMsSqlQuery(
    query: string,
    cursor: CursorPosition,
    parseOptions?: ParseOptions,
): MsSqlAutocompleteResult {
    return parseQuery(
        msSqlAutocompleteData.Lexer,
        msSqlAutocompleteData.Parser,
        msSqlAutocompleteData.tokenDictionary.SPACE,
        msSqlAutocompleteData.ignoredTokens,
        msSqlAutocompleteData.rulesToVisit,
        msSqlAutocompleteData.getParseTree,
        msSqlAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
        msSqlAutocompleteData.context,
        parseOptions,
    );
}

export function parseMsSqlQueryWithCursor(
    queryWithCursor: string,
    parseOptions?: ParseOptions,
): MsSqlAutocompleteResult {
    const [query, cursor] = separateQueryAndCursor(queryWithCursor);

    return parseMsSqlQuery(query, cursor, parseOptions);
}

export function extractMsSqlStatementPositionsFromQuery(
    query: string,
    parseOptions?: ParseOptions,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        msSqlAutocompleteData.Lexer,
        msSqlAutocompleteData.Parser,
        msSqlAutocompleteData.tokenDictionary.SPACE,
        [TSqlParser.SPACE, TSqlParser.COMMENT, TSqlParser.LINE_COMMENT],
        msSqlAutocompleteData.tokenDictionary.SEMICOLON,
        new MsSqlStatementsVisitor(),
        msSqlAutocompleteData.getParseTree,
        parseOptions,
    );
}
