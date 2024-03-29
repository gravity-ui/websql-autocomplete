import {KeywordSuggestion} from '../../../../../autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';

test('should suggest keywords after GROUP ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after user name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test |');
    const keywords: KeywordSuggestion[] = [{value: 'RENAME'}, {value: 'ADD'}, {value: 'DROP'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after ADD', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test ADD |');
    const keywords: KeywordSuggestion[] = [{value: 'USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP test DROP |');
    const keywords: KeywordSuggestion[] = [{value: 'USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
