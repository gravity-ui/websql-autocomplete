import {CursorPosition, SqlAutocompleteResult} from '../../shared/autocomplete-types';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {mongoAutocompleteData} from './mongo-autocomplete';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {MongoStatementsVisitor} from './mongo-extract-statements';
import {extractUniqueRuleTextByIndexesFromQuery} from '../../shared/extract-unique-rule-text-by-indexes-from-query';

export * from './mongo-extract-commands';

export interface MongoAutocompleteResult extends SqlAutocompleteResult {
    suggestQuotedCollections?: boolean;
    suggestCollections?: boolean;
    suggestQuotedUsers?: boolean;
}

export function parseMongoQueryWithoutCursor(
    query: string,
): Pick<MongoAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.Parser.DOT,
        mongoAutocompleteData.getParseTree,
        query,
    );
}

export function parseMongoQuery(query: string, cursor: CursorPosition): MongoAutocompleteResult {
    return parseQuery(
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.tokenDictionary.SPACE,
        mongoAutocompleteData.ignoredTokens,
        mongoAutocompleteData.rulesToVisit,
        mongoAutocompleteData.getParseTree,
        mongoAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseMongoQueryWithCursor(queryWithCursor: string): MongoAutocompleteResult {
    return parseMongoQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractMongoStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.tokenDictionary.SPACE,
        [mongoAutocompleteData.tokenDictionary.SPACE],
        mongoAutocompleteData.tokenDictionary.SEMICOLON,
        new MongoStatementsVisitor(),
        mongoAutocompleteData.getParseTree,
    );
}

export function extractMongoCollectionNamesFromQuery(query: string): string[] {
    return extractUniqueRuleTextByIndexesFromQuery(
        query,
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.getParseTree,
        [
            mongoAutocompleteData.Parser.RULE_collectionName,
            mongoAutocompleteData.Parser.RULE_quotedCollectionName,
        ],
    );
}
