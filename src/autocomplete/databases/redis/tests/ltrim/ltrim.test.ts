import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LTRIM command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LTRIM test -1 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LTRIM command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LTRIM');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LTRIM', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LTRIM |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LTRIM test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LTRIM test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
