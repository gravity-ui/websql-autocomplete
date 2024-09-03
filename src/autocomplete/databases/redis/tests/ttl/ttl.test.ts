import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on TTL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('TTL test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on TTL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('TTL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after TTL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('TTL |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
