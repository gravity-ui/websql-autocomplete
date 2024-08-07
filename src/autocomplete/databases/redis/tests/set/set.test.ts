import {parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on multiple SET commands', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test\nSET 123 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on SET command with NX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test NX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with XX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test XX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with GET argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test GET');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with EX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test EX 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with PX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test PX 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with EXAT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test EXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with PXAT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test PXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with KEEPTTL argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test KEEPTTL');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with all argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test XX GET PXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});
