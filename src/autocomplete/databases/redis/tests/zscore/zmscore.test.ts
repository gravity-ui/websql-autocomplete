import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZMSCORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZMSCORE test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZMSCORE command with multiple members', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZMSCORE test key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZMSCORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZMSCORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZMSCORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZMSCORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZMSCORE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZMSCORE test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
