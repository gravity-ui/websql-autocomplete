import {parseTrinoQueryWithCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after CATALOG', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE CATALOG |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after CATALOG name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE CATALOG test_catalog |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'USING'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
