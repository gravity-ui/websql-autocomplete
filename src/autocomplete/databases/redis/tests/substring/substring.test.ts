import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SUBSTR command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUBSTR test 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SUBSTR command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUBSTR test -1 -3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SUBSTR command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUBSTR');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SUBSTR', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SUBSTR |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
