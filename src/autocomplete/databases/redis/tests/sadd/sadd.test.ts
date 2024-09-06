import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SADD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SADD test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SADD command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SADD test key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SADD command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SADD');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SADD', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SADD |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SADD test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SADD test |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
