import {CursorPosition, SqlAutocompleteResult} from '../../shared/autocomplete-types';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {mongoAutocompleteData} from './mongo-autocomplete';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {MongoStatementsVisitor} from './mongo-extract-statements';
import {extractRuleContextsFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {CollectionNameContext, QuotedCollectionNameContext} from './generated/MongoParser';

export * from './mongo-extract-commands';

export interface MongoAutocompleteResult extends SqlAutocompleteResult {
    suggestQuotedCollections?: boolean;
    suggestCollections?: boolean;
    suggestQuotedUsers?: boolean;
}

export type ExtractMongoCollectionsFromQueryResult = {
    collectionName: string;
}[];

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

export function extractMongoCollectionsFromQuery(
    query: string,
): ExtractMongoCollectionsFromQueryResult {
    const ruleContexts = extractRuleContextsFromQuery(
        query,
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.getParseTree,
        [CollectionNameContext, QuotedCollectionNameContext],
    );

    return ruleContexts.reduce<ExtractMongoCollectionsFromQueryResult>((acc, ruleContext) => {
        let collectionName: string;
        if (ruleContext instanceof CollectionNameContext) {
            collectionName = ruleContext.getText();
        } else {
            const quotedCollectonName = ruleContext.getText();
            collectionName = quotedCollectonName.slice(1, quotedCollectonName.length - 1);
        }

        if (acc.every((collection) => collection.collectionName !== collectionName)) {
            acc.push({collectionName});
        }

        return acc;
    }, []);
}
