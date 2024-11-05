import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BLPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BLPOP test1 test2 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BLPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BLPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after BLPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLPOP |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BLPOP test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLPOP test1 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
