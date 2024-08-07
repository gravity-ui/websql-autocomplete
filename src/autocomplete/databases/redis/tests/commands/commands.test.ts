import {parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on multiple (2) commands', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test\nSET test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on multiple (3) commands', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test\nSET test test\nGET test');

    expect(autocompleteResult.errors).toHaveLength(0);
});
