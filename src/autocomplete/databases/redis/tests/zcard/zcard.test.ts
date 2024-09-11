import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZCARD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZCARD test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZCARD command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZCARD');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZCARD', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZCARD |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
