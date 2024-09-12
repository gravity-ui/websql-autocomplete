import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HGET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HGET test key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HGET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HGET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HGET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HGET |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HGET test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HGET test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
