import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DROP', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DROP CATALOG |');

    const keywords: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestCatalogs).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('DROP CATALOG test_catalog');
    expect(autocompleteResult.errors).toHaveLength(0);
});
