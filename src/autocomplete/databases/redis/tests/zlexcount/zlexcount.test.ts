import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZLEXCOUNT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZLEXCOUNT test lex1 lex2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZLEXCOUNT command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZLEXCOUNT');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZLEXCOUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZLEXCOUNT |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZLEXCOUNT test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZLEXCOUNT test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
