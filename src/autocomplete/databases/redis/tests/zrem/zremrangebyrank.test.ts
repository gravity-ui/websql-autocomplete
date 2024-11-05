import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREMRANGEBYRANK command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREMRANGEBYRANK test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREMRANGEBYRANK command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREMRANGEBYRANK');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREMRANGEBYRANK', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREMRANGEBYRANK |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREMRANGEBYRANK test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREMRANGEBYRANK test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
