import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SINTERSTORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTERSTORE value test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SINTERSTORE command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTERSTORE value test1 test2 test3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SINTERSTORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTERSTORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after SINTERSTORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTERSTORE |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SINTERSTORE key', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTERSTORE key |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SINTERSTORE key test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTERSTORE key test |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
