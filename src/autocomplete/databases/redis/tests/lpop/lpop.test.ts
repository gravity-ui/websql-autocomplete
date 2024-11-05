import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPOP test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPOP |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LPOP test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPOP test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
