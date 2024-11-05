import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZINCRBY command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINCRBY test 1 key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZINCRBY command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINCRBY');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZINCRBY', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINCRBY |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZINCRBY test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINCRBY test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
