import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on TYPE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('TYPE test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on TYPE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('TYPE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after TYPE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('TYPE |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
