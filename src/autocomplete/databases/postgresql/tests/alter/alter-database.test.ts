import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index';

test('should suggest after ALTER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER DATABASE |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER DATABASE test_database RENAME TO test_database_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
