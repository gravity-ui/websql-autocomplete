import {parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on INCR command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('INCR test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on INCR command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('INCR');

    expect(autocompleteResult.errors).toHaveLength(1);
});
