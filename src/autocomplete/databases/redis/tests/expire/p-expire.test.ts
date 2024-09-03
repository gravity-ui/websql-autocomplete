import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on PEXPIRE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRE test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on PEXPIRE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on PEXPIRE command with NX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRE test 1 NX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on PEXPIRE command with XX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRE test 1 XX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on PEXPIRE command with GT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRE test 1 GT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on PEXPIRE command with LT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('PEXPIRE test 1 LT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keys after PEXPIRE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PEXPIRE |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after PEXPIRE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PEXPIRE test |');

    expect(autocompleteResult.suggestKeys).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after PEXPIRE test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('PEXPIRE test 1 |');

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
