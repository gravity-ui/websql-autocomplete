import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on MOVE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MOVE test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on MOVE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MOVE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after MOVE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MOVE |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest databases after MOVE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MOVE test |');

    expect(autocompleteResult.suggestDatabases).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
