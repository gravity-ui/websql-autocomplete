import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on RPUSHX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPUSHX test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on RPUSHX command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPUSHX test key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on RPUSHX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPUSHX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after RPUSHX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPUSHX |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after RPUSHX test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPUSHX test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
