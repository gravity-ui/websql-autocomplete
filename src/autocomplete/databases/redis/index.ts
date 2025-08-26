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
import {extractUniqueRuleTextByIndexesFromQuery} from '../../shared/extract-unique-rule-text-by-indexes-from-query';

export {RedisCommands} from './redis-tokenize';

export interface RedisAutocompleteResult extends AutocompleteResultBase {
    suggestKeys?: boolean;
    suggestStrings?: boolean;
    suggestLists?: boolean;
    suggestSets?: boolean;
    suggestSortedSets?: boolean;
    suggestHashes?: boolean;
}

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

export function extractRedisKeyNamesFromQuery(query: string): string[] {
    return extractUniqueRuleTextByIndexesFromQuery(
        query,
        redisAutocompleteData.Lexer,
        redisAutocompleteData.Parser,
        redisAutocompleteData.getParseTree,
        [redisAutocompleteData.Parser.RULE_keyName],
    );
}
