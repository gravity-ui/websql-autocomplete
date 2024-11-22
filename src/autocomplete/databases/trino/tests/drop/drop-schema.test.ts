import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DROP SCHEMA', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DROP SCHEMA |');

    const keywords: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('DROP SCHEMA catalog.test_schema');
    expect(autocompleteResult.errors).toHaveLength(0);
});
