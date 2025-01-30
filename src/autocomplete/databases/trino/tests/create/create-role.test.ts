import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after ROLE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE ROLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after role name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE ROLE test_role |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IN'}, {value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WITH', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE ROLE test_role WITH |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ADMIN'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
