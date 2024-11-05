import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZSCORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZSCORE test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZSCORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZSCORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZSCORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZSCORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZSCORE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZSCORE test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
