import {CursorPosition, SqlAutocompleteResult} from '../../shared/autocomplete-types';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {mongoAutocompleteData} from './mongo-autocomplete';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {MongoStatementsVisitor} from './mongo-extract-statements';
import {extractRulesByIndexesFromQuery} from '../../shared/extract-rules-by-indexes-from-query';
import {parseQuotedCollectionName} from './mongo-extract-commands';

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
    const rules = extractRulesByIndexesFromQuery(
        query,
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.getParseTree,
        [
            mongoAutocompleteData.Parser.RULE_collectionName,
            mongoAutocompleteData.Parser.RULE_quotedCollectionName,
        ],
    );

    const collectionNames = rules.map((rule) => {
        if (rule.ruleIndex === mongoAutocompleteData.Parser.RULE_quotedCollectionName) {
            return parseQuotedCollectionName(rule.text);
        }

        return rule.text;
    });

    const ruleSet = new Set();
    return collectionNames.filter((rule) => {
        if (ruleSet.has(rule)) {
            return false;
        }

        ruleSet.add(rule);
        return true;
    });
}
