import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on RENAME command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RENAME test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on RENAME command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RENAME');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after RENAME', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RENAME |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
