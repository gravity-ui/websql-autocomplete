import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on PTTL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PTTL test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on PTTL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PTTL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after PTTL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PTTL |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
