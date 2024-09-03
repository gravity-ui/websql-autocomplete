import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on APPEND command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('APPEND test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on APPEND command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('APPEND');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after APPEND', () => {
    const autocompleteResult = parseRedisQueryWithCursor('APPEND |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
