import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on RENAMENX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RENAMENX test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on RENAMENX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RENAMENX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after RENAMENX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RENAMENX |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
