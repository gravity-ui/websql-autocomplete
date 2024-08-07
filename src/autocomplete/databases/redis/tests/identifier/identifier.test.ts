import {parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on string identifier', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on number identifier', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on identifier with special symbols', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test123;:,.$#!@%-=+-~()[]{}');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on identifier with double quote', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test"');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should report errors on identifier with single quote', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor("GET test'");

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should report errors on identifier with space', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test  test');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on double quoted identifier', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET "test123;:,.$#!@%-=+-~()[]{}"');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on single quoted identifier', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor("GET 'test123;:,.$#!@%-=+-~()[]{}'");

    expect(autocompleteResult.errors).toHaveLength(0);
});
