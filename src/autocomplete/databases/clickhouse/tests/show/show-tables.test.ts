import {parseClickHouseQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseClickHouseQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest keywords after SHOW TABLES', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SHOW TABLES FROM |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('SHOW TABLES FROM test_database;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
