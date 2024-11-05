import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SETEX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETEX test 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SETEX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETEX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should report errors on SETEX command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SETEX test -1 test');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SETEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SETEX |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
