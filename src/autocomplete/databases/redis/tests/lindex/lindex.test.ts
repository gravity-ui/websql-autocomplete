import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LINDEX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LINDEX test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on LINDEX command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LINDEX test -1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LINDEX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LINDEX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LINDEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LINDEX |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LINDEX test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LINDEX test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
