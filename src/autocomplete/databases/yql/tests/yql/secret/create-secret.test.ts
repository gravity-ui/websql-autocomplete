import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after CREATE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'SECRET'});
});

test('should suggest keywords after CREATE SECRET', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE SECRET test_secret |');
    const keywords: KeywordSuggestion[] = [{value: 'WITH'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after CREATE SECRET WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE SECRET test_secret WITH |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
