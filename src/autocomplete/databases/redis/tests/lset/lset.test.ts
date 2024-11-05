import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LSET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LSET test -1 key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LSET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LSET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LSET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LSET |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LSET test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LSET test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
