import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LPUSHX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPUSHX test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on LPUSHX command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPUSHX test key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LPUSHX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPUSHX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LPUSHX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPUSHX |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LPUSHX test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPUSHX test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
