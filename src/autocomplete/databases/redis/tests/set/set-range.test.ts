import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SETRANGE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETRANGE test 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SETRANGE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETRANGE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should report errors on SETRANGE command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETRANGE test -1 test');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SETRANGE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SETRANGE |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
