import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BZPOPMAX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZPOPMAX test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on BZPOPMAX command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZPOPMAX test1 test2 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BZPOPMAX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZPOPMAX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after BZPOPMAX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZPOPMAX |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BZPOPMAX test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZPOPMAX test1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
