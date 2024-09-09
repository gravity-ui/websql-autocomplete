import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SINTER command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTER test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SINTER command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTER test1 test2 test3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SINTER command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTER');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SINTER', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTER |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SINTER test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTER test |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
