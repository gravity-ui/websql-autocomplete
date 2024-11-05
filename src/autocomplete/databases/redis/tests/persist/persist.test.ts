import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on PERSIST command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PERSIST test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on PERSIST command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PERSIST');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after PERSIST', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PERSIST |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
