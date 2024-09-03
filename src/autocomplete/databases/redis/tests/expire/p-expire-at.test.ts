import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on PEXPIREAT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIREAT test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on PEXPIREAT command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIREAT');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on PEXPIREAT command with NX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIREAT test 1 NX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on PEXPIREAT command with XX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIREAT test 1 XX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on PEXPIREAT command with GT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIREAT test 1 GT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on PEXPIREAT command with LT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIREAT test 1 LT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keys after PEXPIREAT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PEXPIREAT |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after PEXPIREAT test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PEXPIREAT test |');

    expect(autocompleteResult.suggestKeys).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after PEXPIREAT test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PEXPIREAT test 1 |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {
            value: 'GT',
        },
        {
            value: 'LT',
        },
        {
            value: 'NX',
        },
        {
            value: 'XX',
        },
    ];
    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
