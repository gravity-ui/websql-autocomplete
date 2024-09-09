import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on RPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPOP test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on RPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after RPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPOP |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after RPOP test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPOP test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
