import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on UNLINK command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('UNLINK test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on UNLINK command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('UNLINK test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on UNLINK command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('UNLINK');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after UNLINK', () => {
    const autocompleteResult = parseRedisQueryWithCursor('UNLINK |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after UNLINK test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('UNLINK test1 |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
