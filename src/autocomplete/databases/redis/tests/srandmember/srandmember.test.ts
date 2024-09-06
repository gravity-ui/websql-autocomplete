import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SRANDMEMBER command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SRANDMEMBER test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full SRANDMEMBER command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SRANDMEMBER test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full SRANDMEMBER command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SRANDMEMBER test -1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SRANDMEMBER command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SRANDMEMBER');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SRANDMEMBER', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SRANDMEMBER |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SRANDMEMBER test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SRANDMEMBER test |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
