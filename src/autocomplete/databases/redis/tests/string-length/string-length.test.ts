import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on STRLEN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('STRLEN test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on STRLEN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('STRLEN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after STRLEN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('STRLEN |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
