import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'SECRET'});
});

test('should suggest keywords after ALTER SECRET', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER SECRET test_secret |');
    const keywords: KeywordSuggestion[] = [{value: 'WITH'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after ALTER SECRET WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER SECRET test_secret WITH |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
