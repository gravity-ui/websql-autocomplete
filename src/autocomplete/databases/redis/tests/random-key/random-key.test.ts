import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on RANDOMKEY', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('RANDOMKEY');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not suggest keys after RANDOMKEY', () => {
    const autocompleteResult = parseRedisQueryWithCursor('RANDOMKEY |');

    expect(autocompleteResult.suggestKeys).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
