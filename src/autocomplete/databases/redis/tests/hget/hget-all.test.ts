import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HGETALL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HGETALL test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HGETALL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HGETALL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HGETALL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HGETALL |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
