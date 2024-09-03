import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on EXPIRETIME command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRETIME test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on EXPIRETIME command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRETIME');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after EXPIRETIME', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXPIRETIME |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
