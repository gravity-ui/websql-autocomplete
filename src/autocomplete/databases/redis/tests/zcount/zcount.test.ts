import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZCOUNT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZCOUNT test -1 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZCOUNT command with complex scores', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZCOUNT test (-1 (1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZCOUNT command with infinite scores', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZCOUNT test -inf +inf');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZCOUNT command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZCOUNT');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZCOUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZCOUNT |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZCOUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZCOUNT test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
