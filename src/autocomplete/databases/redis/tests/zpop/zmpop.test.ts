import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZMPOP command with MIN', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZMPOP 1 test MIN');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZMPOP command with MAX', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZMPOP 1 test MAX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZMPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZMPOP 1 test1 test2 MAX COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZMPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZMPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after ZMPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZMPOP |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZMPOP 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZMPOP 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZMPOP 1 test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZMPOP 1 test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'MIN'}, {value: 'MAX'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZMPOP 1 test MIN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZMPOP 1 test MIN |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'COUNT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZMPOP 1 test MIN COUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZMPOP 1 test MIN COUNT |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
