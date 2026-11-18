import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test('should not suggest anything for new index name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE INDEX |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestIndexes).toEqual(false);
});

test('should suggest properly after index name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE INDEX test_index |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// Indexes can be created on tables and indexed views
test('should suggest tables and views after ON', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE INDEX test_index ON |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'CREATE UNIQUE NONCLUSTERED INDEX test_index ON dbo.test_table (id DESC, name) INCLUDE (other_id) WHERE id > 0;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
