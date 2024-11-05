import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BRPOPLPUSH command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BRPOPLPUSH test1 test2 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BRPOPLPUSH command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BRPOPLPUSH');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after BRPOPLPUSH', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BRPOPLPUSH |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BRPOPLPUSH test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BRPOPLPUSH test1 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after BRPOPLPUSH test1 test2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BRPOPLPUSH test1 test2 |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
