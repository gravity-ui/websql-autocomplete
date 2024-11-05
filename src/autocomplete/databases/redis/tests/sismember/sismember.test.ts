import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SISMEMBER command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SISMEMBER test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SISMEMBER command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SISMEMBER');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SISMEMBER', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SISMEMBER |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SISMEMBER test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SISMEMBER test |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
