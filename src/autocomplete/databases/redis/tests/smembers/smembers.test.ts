import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SMEMBERS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SMEMBERS test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SMEMBERS command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SMEMBERS');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SMEMBERS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SMEMBERS |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
