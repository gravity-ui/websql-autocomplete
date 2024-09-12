import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HSET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSET test key1 val1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HSET command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSET test key1 val1 key2 val2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HSET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HSET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSET |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HSET test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSET test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
