import {parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on GET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on GET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET');

    expect(autocompleteResult.errors).toHaveLength(1);
});
