import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREMRANGEBYSCORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREMRANGEBYSCORE test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREMRANGEBYSCORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREMRANGEBYSCORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREMRANGEBYSCORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREMRANGEBYSCORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREMRANGEBYSCORE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREMRANGEBYSCORE test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
