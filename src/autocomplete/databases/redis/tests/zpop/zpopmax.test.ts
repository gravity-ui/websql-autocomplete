import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZPOPMAX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZPOPMAX test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZPOPMAX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZPOPMAX test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZPOPMAX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZPOPMAX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZPOPMAX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZPOPMAX |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZPOPMAX test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZPOPMAX test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
