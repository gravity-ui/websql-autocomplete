import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on GETDEL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETDEL test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on GETDEL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETDEL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after GETDEL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETDEL |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
