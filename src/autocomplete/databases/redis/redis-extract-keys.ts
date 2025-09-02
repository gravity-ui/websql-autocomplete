import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {KeyNameContext} from './generated/RedisParser';
import {redisAutocompleteData} from './redis-autocomplete';

export type ExtractRedisKeysFromQueryResult = {
    keyName: string;
}[];

export function extractRedisKeysFromQuery(query: string): ExtractRedisKeysFromQueryResult {
    const ruleContexts = extractRuleContextFromQuery(
        query,
        redisAutocompleteData.Lexer,
        redisAutocompleteData.Parser,
        redisAutocompleteData.getParseTree,
        [KeyNameContext],
    );

    const uniqueKeyNames = new Set();
    return ruleContexts.reduce<ExtractRedisKeysFromQueryResult>((acc, ruleContext) => {
        const keyName = ruleContext.getText();
        if (!uniqueKeyNames.has(keyName)) {
            acc.push({
                keyName,
            });
            uniqueKeyNames.add(keyName);
        }

        return acc;
    }, []);
}
