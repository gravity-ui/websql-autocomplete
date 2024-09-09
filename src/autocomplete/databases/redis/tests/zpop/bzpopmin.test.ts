import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BZPOPMIN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZPOPMIN test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on BZPOPMIN command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZPOPMIN test1 test2 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BZPOPMIN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZPOPMIN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after BZPOPMIN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZPOPMIN |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BZPOPMIN test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZPOPMIN test1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
