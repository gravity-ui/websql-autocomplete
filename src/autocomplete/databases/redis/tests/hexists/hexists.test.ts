import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HEXISTS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXISTS test key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HEXISTS command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXISTS');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HEXISTS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXISTS |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HEXISTS test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXISTS test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
