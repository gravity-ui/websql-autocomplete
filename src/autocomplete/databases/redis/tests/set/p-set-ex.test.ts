import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on PSETEX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PSETEX test 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on PSETEX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PSETEX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should report errors on PSETEX command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PSETEX test -1 test');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after PSETEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PSETEX |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
