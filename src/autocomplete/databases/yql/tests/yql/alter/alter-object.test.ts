import {KeywordSuggestion} from '../../../../../autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';

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
