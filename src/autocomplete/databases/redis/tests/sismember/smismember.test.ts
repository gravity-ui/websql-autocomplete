import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SMISMEMBER command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SMISMEMBER test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SMISMEMBER command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SMISMEMBER test key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SMISMEMBER command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SMISMEMBER');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SMISMEMBER', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SMISMEMBER |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SMISMEMBER test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SMISMEMBER test |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
