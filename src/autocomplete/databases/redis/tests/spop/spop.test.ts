import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SPOP test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full SPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SPOP test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SPOP |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SPOP test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SPOP test |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
