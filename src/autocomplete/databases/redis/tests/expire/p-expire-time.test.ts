import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on PEXPIRETIME command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRETIME test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on PEXPIRETIME command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRETIME');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after PEXPIRETIME', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PEXPIRETIME |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
