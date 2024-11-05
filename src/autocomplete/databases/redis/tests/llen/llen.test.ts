import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LLEN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LLEN test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LLEN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LLEN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LLEN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LLEN |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
