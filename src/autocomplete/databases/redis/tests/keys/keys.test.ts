import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on KEYS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('KEYS test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on KEYS command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('KEYS');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after KEYS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('KEYS |');

    expect(autocompleteResult.suggestKeys).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
