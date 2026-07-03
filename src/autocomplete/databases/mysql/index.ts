import {
    ConstraintSuggestion,
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {mySqlAutocompleteData} from './mysql-autocomplete';
import {MySqlLexer} from './generated/MySqlLexer';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {MySqlStatementsVisitor} from './mysql-extract-statements';

export {extractMySqlTablesFromQuery} from './mysql-extract-tables';

export interface MySqlAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestRoles?: boolean;
    suggestUsers?: boolean;
}

export interface MySqlParseOptions {
    // When true, `{{ ... }}` template placeholders are treated as opaque values
    // instead of raising syntax errors.
    supportPlaceholders?: boolean;
}

// `{{ ... }}` placeholders masquerade as a string literal — the broadest value
// position in the grammar (after `=`, `IN`, `VALUES`, `LIMIT`, etc.).
function getPlaceholderTokenType(options?: MySqlParseOptions): number | undefined {
    return options?.supportPlaceholders ? MySqlLexer.STRING_LITERAL : undefined;
}

export function parseMySqlQueryWithoutCursor(
    query: string,
    options?: MySqlParseOptions,
): Pick<MySqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        mySqlAutocompleteData.getParseTree,
        query,
        getPlaceholderTokenType(options),
    );
}

export function parseMySqlQuery(
    query: string,
    cursor: CursorPosition,
    options?: MySqlParseOptions,
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
        undefined,
        getPlaceholderTokenType(options),
    );
}

export function parseMySqlQueryWithCursor(
    queryWithCursor: string,
    options?: MySqlParseOptions,
): MySqlAutocompleteResult {
    return parseMySqlQuery(...separateQueryAndCursor(queryWithCursor), options);
}

export function extractMySqlStatementPositionsFromQuery(
    query: string,
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
    );
}
