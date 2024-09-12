import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HVALS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HVALS test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HVALS command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HVALS');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HVALS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HVALS |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
