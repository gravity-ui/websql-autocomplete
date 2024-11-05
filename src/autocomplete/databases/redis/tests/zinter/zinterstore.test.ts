import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZINTERSTORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINTERSTORE dest 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZINTERSTORE command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINTERSTORE dest 2 test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZINTERSTORE command with weights clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZINTERSTORE dest 2 test1 test2 WEIGHTS 1 2',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZINTERSTORE command with aggregate clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZINTERSTORE dest 3 test1 test2 test3 WEIGHTS 1 2 3 AGGREGATE SUM',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZINTERSTORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINTERSTORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after ZINTERSTORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERSTORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZINTERSTORE dest', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERSTORE dest |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZINTERSTORE dest 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERSTORE dest 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZINTERSTORE dest 1 test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERSTORE dest 1 test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AGGREGATE'}, {value: 'WEIGHTS'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZINTERSTORE dest 1 test WEIGHTS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERSTORE dest 1 test WEIGHTS |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZINTERSTORE dest 1 test WEIGHTS 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERSTORE dest 1 test WEIGHTS 1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AGGREGATE'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZINTERSTORE dest 1 test WEIGHTS 1 AGGREGATE', () => {
    const autocompleteResult = parseRedisQueryWithCursor(
        'ZINTERSTORE dest 1 test WEIGHTS 1 AGGREGATE |',
    );
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'MIN'},
        {value: 'MAX'},
        {value: 'SUM'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
