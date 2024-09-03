import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on EXPIREAT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIREAT test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on EXPIREAT command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIREAT');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on EXPIREAT command with NX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIREAT test 1 NX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on EXPIREAT command with XX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIREAT test 1 XX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on EXPIREAT command with GT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIREAT test 1 GT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on EXPIREAT command with LT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIREAT test 1 LT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keys after EXPIREAT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXPIREAT |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after EXPIREAT test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXPIREAT test |');

    expect(autocompleteResult.suggestKeys).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after EXPIREAT test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXPIREAT test 1 |');

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
