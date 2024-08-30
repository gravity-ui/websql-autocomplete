import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on MSET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MSET test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on MSET command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MSET test test test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on MSET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('MSET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after MSET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MSET |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest second key after MSET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('MSET test test |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
