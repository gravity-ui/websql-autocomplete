import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREM command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREM test member');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZREM command with multiple members', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREM test member1 member2 member3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREM command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREM');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREM', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREM |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREM test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREM test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
