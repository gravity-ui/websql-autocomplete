import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on MSETNX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MSETNX test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on MSETNX command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MSETNX test test test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on MSETNX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MSETNX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after MSETNX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MSETNX |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest second key after MSETNX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MSETNX test test |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
