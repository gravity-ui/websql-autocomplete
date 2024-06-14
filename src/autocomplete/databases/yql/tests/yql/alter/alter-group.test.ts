import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after GROUP ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after group name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test |');
    const keywords: KeywordSuggestion[] = [{value: 'RENAME'}, {value: 'ADD'}, {value: 'DROP'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after ADD', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test ADD |');
    const keywords: KeywordSuggestion[] = [{value: 'USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after USER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test ADD USER |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['user']);
});
test('should suggest keywords after multiple users', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test ADD USER test, |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['user']);
});
test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test DROP |');
    const keywords: KeywordSuggestion[] = [{value: 'USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
