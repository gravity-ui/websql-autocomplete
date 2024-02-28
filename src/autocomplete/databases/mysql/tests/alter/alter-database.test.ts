import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';

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
