import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on GETRANGE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETRANGE test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on GETRANGE command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETRANGE test -1 -3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on GETRANGE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETRANGE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after GETRANGE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETRANGE |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
