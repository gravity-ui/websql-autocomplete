import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query.js';
import {CollectionNameContext, QuotedCollectionNameContext} from './generated/MongoParser.js';
import {mongoAutocompleteData} from './mongo-autocomplete.js';

export type ExtractMongoCollectionsFromQueryResult = {
    collectionName: string;
}[];

export function extractMongoCollectionsFromQuery(
    query: string,
): ExtractMongoCollectionsFromQueryResult {
    const ruleContexts = extractRuleContextFromQuery(
        query,
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.getParseTree,
        [CollectionNameContext, QuotedCollectionNameContext],
    );

    const uniqueCollectionNames = new Set();
    return ruleContexts.reduce<ExtractMongoCollectionsFromQueryResult>((acc, ruleContext) => {
        let collectionName: string;
        if (ruleContext instanceof CollectionNameContext) {
            collectionName = ruleContext.getText();
        } else {
            const quotedCollectonName = ruleContext.getText();
            collectionName = quotedCollectonName.slice(1, quotedCollectonName.length - 1);
        }

        if (!uniqueCollectionNames.has(collectionName)) {
            acc.push({collectionName});
            uniqueCollectionNames.add(collectionName);
        }

        return acc;
    }, []);
}
