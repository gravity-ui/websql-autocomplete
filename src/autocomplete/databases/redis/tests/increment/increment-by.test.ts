import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on INCRBY command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('INCRBY test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on INCRBY command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('INCRBY test -1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on INCRBY command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('INCRBY');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after INCRBY', () => {
    const autocompleteResult = parseRedisQueryWithCursor('INCRBY |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
