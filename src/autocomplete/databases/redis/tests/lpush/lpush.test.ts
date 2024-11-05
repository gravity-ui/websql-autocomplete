import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LPUSH command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPUSH test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on LPUSH command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPUSH test key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LPUSH command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPUSH');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LPUSH', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPUSH |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LPUSH test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPUSH test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
