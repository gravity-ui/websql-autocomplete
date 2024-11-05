import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HMGET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HMGET test key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HMGET command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HMGET test key1 key2 key3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HMGET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HMGET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HMGET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HMGET |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HMGET test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HMGET test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
