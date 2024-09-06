import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SDIFFSTORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SDIFFSTORE value test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SDIFFSTORE command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SDIFFSTORE value test1 test2 test3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SDIFFSTORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SDIFFSTORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after SDIFFSTORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SDIFFSTORE |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SDIFFSTORE key', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SDIFFSTORE key |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SDIFFSTORE key test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SDIFFSTORE key test |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
