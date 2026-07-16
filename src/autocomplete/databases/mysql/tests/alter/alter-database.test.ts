import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest table name after ALTER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('ALTER DATABASE |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'ALTER DATABASE test_database READ ONLY DEFAULT;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
