import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BZMPOP command with MIN', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZMPOP 1 1 test MIN');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on BZMPOP command with MAX', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZMPOP 1 1 test MAX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full BZMPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZMPOP 1 1 test1 test2 MAX COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BZMPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BZMPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after BZMPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZMPOP |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after BZMPOP 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZMPOP 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BZMPOP 1 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZMPOP 1 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after BZMPOP 1 test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZMPOP 1 1 test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'MIN'}, {value: 'MAX'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after BZMPOP 1 test MIN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZMPOP 1 1 test MIN |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'COUNT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after BZMPOP 1 test MIN COUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BZMPOP 1 1 test MIN COUNT |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
