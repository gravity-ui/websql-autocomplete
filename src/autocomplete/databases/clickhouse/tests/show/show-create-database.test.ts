import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest keywords after SHOW CREATE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SHOW CREATE DATABASE |');

    const keywords: KeywordSuggestion[] = [{value: 'FORMAT'}, {value: 'INTO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SHOW CREATE DATABASE test_database;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
