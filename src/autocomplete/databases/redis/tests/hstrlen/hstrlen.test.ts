import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HSTRLEN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSTRLEN test key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HSTRLEN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSTRLEN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HSTRLEN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSTRLEN |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HSTRLEN test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSTRLEN test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
