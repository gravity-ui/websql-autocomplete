import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on RPUSH command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPUSH test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on RPUSH command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPUSH test key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on RPUSH command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPUSH');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after RPUSH', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPUSH |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after RPUSH test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPUSH test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
