import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'STREAMING'});
});

test('should suggest keywords after DROP STREAMING', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP STREAMING |');
    const keywords: KeywordSuggestion[] = [{value: 'QUERY'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after DROP STREAMING QUERY', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP STREAMING QUERY |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['streamingQuery']);
});

test('should suggest keywords after IF', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP STREAMING QUERY IF |');
    const keywords: KeywordSuggestion[] = [{value: 'EXISTS'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
