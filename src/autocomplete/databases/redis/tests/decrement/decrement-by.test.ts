import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on DECRBY command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DECRBY test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on DECRBY command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DECRBY test -1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on DECRBY command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DECRBY');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after DECRBY', () => {
    const autocompleteResult = parseRedisQueryWithCursor('DECRBY |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
