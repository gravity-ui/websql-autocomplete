import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should suggest keywords after USE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('USE |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('USE test_database;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
