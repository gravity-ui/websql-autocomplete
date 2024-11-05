import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SREM command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SREM test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SREM command with multiple numbers', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SREM test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SREM command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SREM');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SREM', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SREM |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SREM test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SREM test |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
