import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SCARD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCARD test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SCARD command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCARD');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SCARD', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SCARD |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
