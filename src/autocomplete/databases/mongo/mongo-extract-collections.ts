import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {CollectionNameContext, QuotedCollectionNameContext} from './generated/MongoParser';
import {mongoAutocompleteData} from './mongo-autocomplete';

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
