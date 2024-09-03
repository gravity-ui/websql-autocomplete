import {parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on WAIT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('WAIT 0 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on WAIT command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('WAIT');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should report errors on WAIT command with negative number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('WAIT -1');

    expect(autocompleteResult.errors).toHaveLength(1);
});
