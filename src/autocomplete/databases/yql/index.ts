import {CursorPosition} from '../../shared/autocomplete-types.js';
import {yqlAutocompleteData, yqlAutocompleteDataYQ} from './yql-autocomplete.js';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete.js';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor.js';
import {YQLEntity, YqlAutocompleteResult, YqlTokenizeResult} from './types.js';
import {tokenize} from '../../shared/tokenize.js';
import {YQLLexer} from './generated/YQLLexer.js';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query.js';
import {YqlStatementsVisitor} from './yql-extract-statements.js';

export function parseYqlQueryWithoutCursor(query: string): Pick<YqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        yqlAutocompleteData.Lexer,
        yqlAutocompleteData.Parser,
        yqlAutocompleteData.tokenDictionary.SPACE,
        yqlAutocompleteData.getParseTree,
        query,
    );
}

export function parseYqlQuery(query: string, cursor: CursorPosition): YqlAutocompleteResult {
    return parseQuery(
        yqlAutocompleteData.Lexer,
        yqlAutocompleteData.Parser,
        yqlAutocompleteData.tokenDictionary.SPACE,
        yqlAutocompleteData.ignoredTokens,
        yqlAutocompleteData.rulesToVisit,
        yqlAutocompleteData.getParseTree,
        yqlAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
        yqlAutocompleteData.context,
    );
}

export function parseYqQueryWithoutCursor(query: string): Pick<YqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        yqlAutocompleteDataYQ.Lexer,
        yqlAutocompleteDataYQ.Parser,
        yqlAutocompleteDataYQ.tokenDictionary.SPACE,
        yqlAutocompleteDataYQ.getParseTree,
        query,
    );
}

export function parseYqQuery(query: string, cursor: CursorPosition): YqlAutocompleteResult {
    return parseQuery(
        yqlAutocompleteDataYQ.Lexer,
        yqlAutocompleteDataYQ.Parser,
        yqlAutocompleteDataYQ.tokenDictionary.SPACE,
        yqlAutocompleteDataYQ.ignoredTokens,
        yqlAutocompleteDataYQ.rulesToVisit,
        yqlAutocompleteDataYQ.getParseTree,
        yqlAutocompleteDataYQ.enrichAutocompleteResult,
        query,
        cursor,
        yqlAutocompleteDataYQ.context,
    );
}

export function parseYqlQueryWithCursor(queryWithCursor: string): YqlAutocompleteResult {
    return parseYqlQuery(...separateQueryAndCursor(queryWithCursor));
}

export function parseYqQueryWithCursor(queryWithCursor: string): YqlAutocompleteResult {
    return parseYqQuery(...separateQueryAndCursor(queryWithCursor));
}

export function tokenizeYqlQuery(query: string): YqlTokenizeResult {
    return tokenize(
        YQLLexer,
        YQLLexer.symbolicNames,
        yqlAutocompleteData.tokenDictionary.SPACE,
        query,
    );
}

export function extractYqlStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        yqlAutocompleteData.Lexer,
        yqlAutocompleteData.Parser,
        yqlAutocompleteData.tokenDictionary.SPACE,
        [yqlAutocompleteData.tokenDictionary.SPACE],
        yqlAutocompleteData.tokenDictionary.SEMICOLON,
        new YqlStatementsVisitor(),
        yqlAutocompleteData.getParseTree,
    );
}

export type {YqlAutocompleteResult, YqlTokenizeResult, YQLEntity};
