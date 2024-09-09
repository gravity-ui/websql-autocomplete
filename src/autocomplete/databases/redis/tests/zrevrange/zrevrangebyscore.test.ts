import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREVRANGEBYSCORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGEBYSCORE test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZREVRANGEBYSCORE command with WITHSCORES', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGEBYSCORE test 1 2 WITHSCORES');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZREVRANGEBYSCORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZREVRANGEBYSCORE test 1 2 WITHSCORES LIMIT 1 2',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREVRANGEBYSCORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGEBYSCORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREVRANGEBYSCORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYSCORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREVRANGEBYSCORE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYSCORE test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZREVRANGEBYSCORE test 1 2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYSCORE test 1 2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}, {value: 'WITHSCORES'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZREVRANGEBYSCORE test 1 2 WITHSCORES ', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYSCORE test 1 2 WITHSCORES |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
