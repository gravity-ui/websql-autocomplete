import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on EXISTS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXISTS test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on EXISTS command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXISTS test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on EXISTS command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXISTS');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after EXISTS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXISTS |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after EXISTS test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXISTS test1 |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
