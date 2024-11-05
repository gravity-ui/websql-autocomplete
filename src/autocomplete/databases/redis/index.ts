import {AutocompleteResultBase, CursorPosition} from '../../shared/autocomplete-types';
import {redisAutocompleteData} from './redis-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared';
import {
    StatementPosition,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {RedisLexer} from './generated/RedisLexer';

export {extractRedisCommandsFromQuery, RedisCommands} from './redis-tokenize';

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

export function extractRedisStatementPositionsFromQuery(query: string): StatementPosition[] {
    return extractStatementPositionsFromQuery(
        query,
        redisAutocompleteData.Lexer,
        RedisLexer.symbolicNames,
        redisAutocompleteData.tokenDictionary.SPACE,
        [redisAutocompleteData.tokenDictionary.SPACE],
        RedisLexer.NEWLINE,
    );
}
