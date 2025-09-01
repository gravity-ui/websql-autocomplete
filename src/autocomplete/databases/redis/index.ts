import {AutocompleteResultBase, CursorPosition} from '../../shared/autocomplete-types';
import {redisAutocompleteData} from './redis-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared';
import {
    ExtractStatementPositionsResult,
    StatementExtractionStrategy,
} from '../../shared/extract-statement-positions-from-query';
import {
    RedisCommands,
    extractRedisCommandsFromQuery as extractRedisCommandsFromQueryRaw,
} from './redis-tokenize';
import {extractRuleContextsFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {KeyNameContext} from './generated/RedisParser';

export {RedisCommands} from './redis-tokenize';

export interface RedisAutocompleteResult extends AutocompleteResultBase {
    suggestKeys?: boolean;
    suggestStrings?: boolean;
    suggestLists?: boolean;
    suggestSets?: boolean;
    suggestSortedSets?: boolean;
    suggestHashes?: boolean;
}

export type ExtractRedisKeysFromQueryResult = {
    keyName: string;
}[];

export function parseRedisQueryWithoutCursor(
    query: string,
): Pick<RedisAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        redisAutocompleteData.Lexer,
        redisAutocompleteData.Parser,
        redisAutocompleteData.tokenDictionary.SPACE,
        redisAutocompleteData.getParseTree,
        query,
    );
}

export function parseRedisQuery(query: string, cursor: CursorPosition): RedisAutocompleteResult {
    return parseQuery(
        redisAutocompleteData.Lexer,
        redisAutocompleteData.Parser,
        redisAutocompleteData.tokenDictionary.SPACE,
        redisAutocompleteData.ignoredTokens,
        redisAutocompleteData.rulesToVisit,
        redisAutocompleteData.getParseTree,
        redisAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseRedisQueryWithCursor(queryWithCursor: string): RedisAutocompleteResult {
    return parseRedisQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractRedisStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    // Redis logic differs from others, it's easier to split statements via tokenize
    return {
        statementPositions: extractRedisCommandsFromQueryRaw(query).statementPositions,
        strategy: StatementExtractionStrategy.Tokens,
    };
}

export function extractRedisCommandsFromQuery(query: string): RedisCommands {
    return extractRedisCommandsFromQueryRaw(query).commands;
}

export function extractRedisKeysFromQuery(query: string): ExtractRedisKeysFromQueryResult {
    const ruleContexts = extractRuleContextsFromQuery(
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
