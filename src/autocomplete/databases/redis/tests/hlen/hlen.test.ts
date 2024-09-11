import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HLEN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HLEN test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HLEN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HLEN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HLEN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HLEN |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
