import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HINCRBY command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HINCRBY test key1 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HINCRBY command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HINCRBY');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HINCRBY', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HINCRBY |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HINCRBY test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HINCRBY test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HINCRBY test key1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HINCRBY test key1 |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
