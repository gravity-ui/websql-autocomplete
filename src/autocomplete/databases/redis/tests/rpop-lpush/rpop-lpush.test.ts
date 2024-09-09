import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on RPOPLPUSH command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPOPLPUSH test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on RPOPLPUSH command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RPOPLPUSH');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after RPOPLPUSH', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPOPLPUSH |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after RPOPLPUSH test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RPOPLPUSH test1 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
