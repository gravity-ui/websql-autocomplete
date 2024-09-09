import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZDIFFSTORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZDIFFSTORE dest 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZDIFFSTORE command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZDIFFSTORE dest 1 test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZDIFFSTORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZDIFFSTORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after ZDIFFSTORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZDIFFSTORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZDIFFSTORE dest', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZDIFFSTORE dest |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZDIFFSTORE dest 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZDIFFSTORE dest 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZDIFFSTORE dest 1 test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZDIFFSTORE dest  1 test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
