import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SETNX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETNX test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SETNX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETNX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SETNX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SETNX |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
