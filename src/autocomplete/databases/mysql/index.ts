import {
    ConstraintSuggestion,
    CreateTokenSource,
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {mySqlAutocompleteData} from './mysql-autocomplete';
import {getExpectedTokens, parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
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
    // Wraps the base lexer to intercept or rewrite tokens before they reach the
    // parser — e.g. collapsing `{{ ... }}` template placeholders into a single
    // token that masquerades as a native value token. When omitted, the query is
    // parsed with the unmodified token stream.
    createTokenSource?: CreateTokenSource;
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
        options?.createTokenSource,
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
        options?.createTokenSource,
    );
}

export function parseMySqlQueryWithCursor(
    queryWithCursor: string,
    options?: MySqlParseOptions,
): MySqlAutocompleteResult {
    return parseMySqlQuery(...separateQueryAndCursor(queryWithCursor), options);
}

// Returns the raw token types the MySQL grammar expects at `cursor`. Parsed with
// the plain lexer (no `createTokenSource`), so it is safe to call from within a
// token source without recursing back into itself.
//
// Unlike autocomplete, no `ignoredTokens` are applied: autocomplete hides literals
// and identifiers (the `VAR_ASSIGN..ERROR_RECONGNIGION` range) because they make no
// sense as suggestions, but those are exactly the tokens we need here to tell, say,
// a string-literal position from a numeric one.
export function getMySqlParserExpectedTokens(query: string, cursor: CursorPosition): number[] {
    return getExpectedTokens(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        new Set(),
        mySqlAutocompleteData.rulesToVisit,
        mySqlAutocompleteData.getParseTree,
        query,
        cursor,
    );
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
