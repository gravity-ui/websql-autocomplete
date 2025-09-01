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

    return ruleContexts.reduce<ExtractRedisKeysFromQueryResult>((acc, ruleContext) => {
        const keyName = ruleContext.getText();
        if (acc.every((key) => key.keyName !== keyName)) {
            acc.push({
                keyName,
            });
        }

        return acc;
    }, []);
}
