import {AutocompleteResultBase, CursorPosition} from '../../shared/autocomplete-types.js';
import {redisAutocompleteData} from './redis-autocomplete.js';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete.js';
import {separateQueryAndCursor} from '../../shared/index.js';
import {
    ExtractStatementPositionsResult,
    StatementExtractionStrategy,
} from '../../shared/extract-statement-positions-from-query.js';
import {
    RedisCommands,
    extractRedisCommandsFromQuery as extractRedisCommandsFromQueryRaw,
} from './redis-tokenize.js';

export {RedisCommands} from './redis-tokenize.js';

export {extractRedisKeysFromQuery} from './redis-extract-keys.js';

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
