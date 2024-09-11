import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HSETNX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSETNX test key1 val1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HSETNX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSETNX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HSETNX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSETNX |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HSETNX test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSETNX test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
