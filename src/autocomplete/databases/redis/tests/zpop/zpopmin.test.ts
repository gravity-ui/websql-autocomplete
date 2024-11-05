import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZPOPMIN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZPOPMIN test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZPOPMIN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZPOPMIN test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZPOPMIN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZPOPMIN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZPOPMIN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZPOPMIN |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZPOPMIN test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZPOPMIN test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
