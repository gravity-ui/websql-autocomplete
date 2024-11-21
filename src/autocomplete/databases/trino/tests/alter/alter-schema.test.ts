import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';

test('should suggest after ALTER SCHEMA', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('ALTER SCHEMA |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should not report errors', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'ALTER SCHEMA test_catalog.test_schema RENAME TO test_schema_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
