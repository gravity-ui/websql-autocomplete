import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HMSET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HMSET test key1 val1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HMSET command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HMSET test key1 val1 key2 val2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HMSET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HMSET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HMSET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HMSET |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HMSET test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HMSET test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
