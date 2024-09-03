import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on DUMP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DUMP test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on DUMP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DUMP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after DUMP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('DUMP |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
