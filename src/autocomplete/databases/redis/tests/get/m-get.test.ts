import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on MGET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MGET test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on MGET command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MGET test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on MGET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MGET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after MGET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MGET |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after MGET key', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MGET test |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
