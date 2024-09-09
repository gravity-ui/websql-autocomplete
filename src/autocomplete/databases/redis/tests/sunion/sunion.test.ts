import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SUNION command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUNION test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SUNION command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUNION test1 test2 test3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SUNION command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUNION');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SUNION', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SUNION |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SUNION test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SUNION test |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
