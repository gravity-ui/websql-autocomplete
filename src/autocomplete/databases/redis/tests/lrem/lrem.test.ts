import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LREM command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LREM test -1 key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LREM command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LREM');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LREM', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LREM |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LREM test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LREM test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
