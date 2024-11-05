import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BRPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BRPOP test1 test2 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BRPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BRPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after BRPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BRPOP |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BRPOP test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BRPOP test1 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
