import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';

test('should suggest after ALTER', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('ALTER DATABASE |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'ALTER DATABASE test_database RENAME TO test_database_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
