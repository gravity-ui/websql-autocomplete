import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on EXPIRE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRE test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on EXPIRE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on EXPIRE command with NX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRE test 1 NX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on EXPIRE command with XX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRE test 1 XX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on EXPIRE command with GT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRE test 1 GT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on EXPIRE command with LT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('EXPIRE test 1 LT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keys after EXPIRE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXPIRE |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after EXPIRE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXPIRE test |');

    expect(autocompleteResult.suggestKeys).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after EXPIRE test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('EXPIRE test 1 |');

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
