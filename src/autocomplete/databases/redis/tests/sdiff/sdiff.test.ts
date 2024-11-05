import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SDIFF command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SDIFF test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SDIFF command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SDIFF test1 test2 test3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SDIFF command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SDIFF');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SDIFF', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SDIFF |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SDIFF test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SDIFF test |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
