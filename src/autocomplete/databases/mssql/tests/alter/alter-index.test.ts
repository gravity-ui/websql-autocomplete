import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest indexes after ALTER INDEX', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

// Indexes can be created on tables and indexed views
test('should suggest tables and views after ON', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER INDEX test_index ON |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER INDEX test_index ON test_table |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([{value: 'REBUILD'}, {value: 'REORGANIZE'}, {value: 'DISABLE'}]),
    );
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'ALTER INDEX test_index ON test_table REBUILD;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
