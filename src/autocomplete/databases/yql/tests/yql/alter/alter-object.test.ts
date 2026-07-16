import {KeywordSuggestion} from '../../../../../shared/autocomplete-types.js';
import {parseYqlQueryWithCursor} from '../../../index.js';

test('should suggest keywords after OBJECT ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER OBJECT |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});

test('should suggest keywords after object name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER OBJECT test (|');
    const keywords: KeywordSuggestion[] = [{value: 'TYPE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
