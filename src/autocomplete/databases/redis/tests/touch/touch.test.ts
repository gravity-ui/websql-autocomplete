import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on TOUCH command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('TOUCH test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on TOUCH command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('TOUCH test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on TOUCH command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('TOUCH');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after TOUCH', () => {
    const autocompleteResult = parseRedisQueryWithCursor('TOUCH |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after TOUCH test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('TOUCH test1 |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
