import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LRANGE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LRANGE test -1 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LRANGE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LRANGE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LRANGE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LRANGE |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LRANGE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LRANGE test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
