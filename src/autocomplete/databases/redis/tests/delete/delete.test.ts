import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on DEL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DEL test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on DEL command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DEL test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on DEL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DEL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after DEL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('DEL |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after DEL test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('DEL test1 |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
