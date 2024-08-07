import {parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on DECR command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DECR test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on DECR command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('DECR');

    expect(autocompleteResult.errors).toHaveLength(1);
});
