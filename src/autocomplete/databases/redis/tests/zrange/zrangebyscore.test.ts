import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZRANGEBYSCORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGEBYSCORE test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGEBYSCORE command with WITHSCORES', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGEBYSCORE test 1 2 WITHSCORES');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGEBYSCORE command with limit offset clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZRANGEBYSCORE test 1 2 WITHSCORES LIMIT 1 1',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZRANGEBYSCORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGEBYSCORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZRANGEBYSCORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGEBYSCORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZRANGEBYSCORE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGEBYSCORE test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZRANGEBYSCORE test 1 2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGEBYSCORE test 1 2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}, {value: 'WITHSCORES'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZRANGEBYSCORE test 1 2 WITHSCORES', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGEBYSCORE test 1 2 WITHSCORES |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZRANGEBYSCORE test 1 2 WITHSCORES LIMIT', () => {
    const autocompleteResult = parseRedisQueryWithCursor(
        'ZRANGEBYSCORE test 1 2 WITHSCORES LIMIT |',
    );

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
