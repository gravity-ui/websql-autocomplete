import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SMOVE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SMOVE test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SMOVE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SMOVE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SMOVE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SMOVE |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SMOVE test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SMOVE test1 |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
