import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREMRANGEBYLEX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREMRANGEBYLEX test lex1 lex2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREMRANGEBYLEX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREMRANGEBYLEX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREMRANGEBYLEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREMRANGEBYLEX |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREMRANGEBYLEX test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREMRANGEBYLEX test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
