import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZUNION command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZUNION 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZUNION command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZUNION 2 test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZUNION command with weights clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZUNION 2 test1 test2 WEIGHTS 1 2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZUNION command with aggregate clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZUNION 3 test1 test2 test3 WEIGHTS 1 2 3 AGGREGATE SUM',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZUNION command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZUNION 3 test1 test2 test3 WEIGHTS 1 2 3 AGGREGATE SUM WITHSCORES',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZUNION command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZUNION');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after ZUNION', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZUNION |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZUNION 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZUNION 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZUNION 1 test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZUNION 1 test |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WITHSCORES'},
        {value: 'AGGREGATE'},
        {value: 'WEIGHTS'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZUNION 1 test WEIGHTS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZUNION 1 test WEIGHTS |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZUNION 1 test WEIGHTS 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZUNION 1 test WEIGHTS 1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORES'}, {value: 'AGGREGATE'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZUNION 1 test WEIGHTS 1 AGGREGATE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZUNION 1 test WEIGHTS 1 AGGREGATE |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'MIN'},
        {value: 'MAX'},
        {value: 'SUM'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZUNION 1 test WEIGHTS 1 AGGREGATE MIN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZUNION 1 test WEIGHTS 1 AGGREGATE MIN |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORES'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
