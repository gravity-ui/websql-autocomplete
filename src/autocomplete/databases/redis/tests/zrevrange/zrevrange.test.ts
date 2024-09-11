import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREVRANGE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGE test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZREVRANGE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGE test 1 2 WITHSCORES');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREVRANGE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREVRANGE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREVRANGE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGE test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZREVRANGE test 1 2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGE test 1 2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORES'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
