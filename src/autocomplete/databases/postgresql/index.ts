import {
    ConstraintSuggestion,
    CreateTokenSource,
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {postgreSqlAutocompleteData} from './postgresql-autocomplete';
import {getExpectedTokens, parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer';
import {PostgreSqlStatementsVisitor} from './postgresql-extract-statements';

export {extractPostgreSqlTablesFromQuery} from './postgresql-extract-tables';

export interface PostgreSqlAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestSequences?: boolean;
    suggestSchemas?: boolean;
    suggestRoles?: boolean;
}

export interface PostgreSqlParseOptions {
    // Wraps the base lexer to intercept or rewrite tokens before they reach the
    // parser — e.g. collapsing `{{ ... }}` template placeholders into a single
    // token that masquerades as a native value token. When omitted, the query is
    // parsed with the unmodified token stream.
    createTokenSource?: CreateTokenSource;
}

export function parsePostgreSqlQueryWithoutCursor(
    query: string,
    options?: PostgreSqlParseOptions,
): Pick<PostgreSqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.tokenDictionary.SPACE,
        postgreSqlAutocompleteData.getParseTree,
        query,
        options?.createTokenSource,
    );
}

export function parsePostgreSqlQuery(
    query: string,
    cursor: CursorPosition,
    options?: PostgreSqlParseOptions,
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
        undefined,
        options?.createTokenSource,
    );
}

export function parsePostgreSqlQueryWithCursor(
    queryWithCursor: string,
    options?: PostgreSqlParseOptions,
): PostgreSqlAutocompleteResult {
    return parsePostgreSqlQuery(...separateQueryAndCursor(queryWithCursor), options);
}

// Returns the raw token types the PostgreSQL grammar expects at `cursor`. Parsed
// with the plain lexer (no `createTokenSource`), so it is safe to call from within
// a token source without recursing back into itself.
//
// Unlike autocomplete, no `ignoredTokens` are applied: autocomplete hides literals
// and identifiers (they make no sense as suggestions), but those are exactly the
// tokens we need here to tell, say, a string-literal position from a numeric one.
export function getPostgreSqlParserExpectedTokens(
    query: string,
    cursor: CursorPosition,
): number[] {
    return getExpectedTokens(
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.tokenDictionary.SPACE,
        new Set(),
        postgreSqlAutocompleteData.rulesToVisit,
        postgreSqlAutocompleteData.getParseTree,
        query,
        cursor,
    );
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
