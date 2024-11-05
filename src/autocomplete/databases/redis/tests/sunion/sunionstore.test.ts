import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SUNIONSTORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUNIONSTORE value test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SUNIONSTORE command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUNIONSTORE value test1 test2 test3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SUNIONSTORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SUNIONSTORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after SUNIONSTORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SUNIONSTORE |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SUNIONSTORE key', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SUNIONSTORE key |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SUNIONSTORE key test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SUNIONSTORE key test |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
