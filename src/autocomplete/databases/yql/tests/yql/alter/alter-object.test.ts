import {KeywordSuggestion} from '../../../../../autocomplete-types';
import {parseYQLQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';

test('should suggest keywords after OBJECT ', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER OBJECT |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});

test('should suggest keywords after object name', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER OBJECT test (|');
    const keywords: KeywordSuggestion[] = [{value: 'TYPE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
