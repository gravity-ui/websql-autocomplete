import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HDEL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HDEL test key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HDEL command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HDEL test key1 key2 key3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HDEL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HDEL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HDEL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HDEL |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HDEL test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HDEL test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
