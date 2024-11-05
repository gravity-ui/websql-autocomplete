import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on GETSET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETSET test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on GETSET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETSET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after GETSET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETSET |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
