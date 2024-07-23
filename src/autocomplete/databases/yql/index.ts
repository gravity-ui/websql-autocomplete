import {CursorPosition} from '../../shared/autocomplete-types';
import {yqlAutocompleteData, yqlAutocompleteDataYQ} from './yql-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {YqlAutocompleteResult, YqlTokenizeResult} from './types';
import {tokenize} from '../../shared/tokenize';
import {YQLLexer} from './generated/YQLLexer';

export type {YqlAutocompleteResult};

export function parseYqlQueryWithoutCursor(query: string): Pick<YqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        yqlAutocompleteData.Lexer,
        yqlAutocompleteData.Parser,
        yqlAutocompleteData.tokenDictionary,
        yqlAutocompleteData.getParseTree,
        query,
    );
}

export function parseYqlQuery(query: string, cursor: CursorPosition): YqlAutocompleteResult {
    return parseQuery(
        yqlAutocompleteData.Lexer,
        yqlAutocompleteData.Parser,
        yqlAutocompleteData.tokenDictionary,
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
        yqlAutocompleteDataYQ.tokenDictionary,
        yqlAutocompleteDataYQ.getParseTree,
        query,
    );
}

export function parseYqQuery(query: string, cursor: CursorPosition): YqlAutocompleteResult {
    return parseQuery(
        yqlAutocompleteDataYQ.Lexer,
        yqlAutocompleteDataYQ.Parser,
        yqlAutocompleteDataYQ.tokenDictionary,
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
    return tokenize(YQLLexer, YQLLexer.symbolicNames, query);
}
