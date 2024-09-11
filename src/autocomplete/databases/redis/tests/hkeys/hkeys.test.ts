import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HKEYS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HKEYS test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HKEYS command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HKEYS');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HKEYS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HKEYS |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
