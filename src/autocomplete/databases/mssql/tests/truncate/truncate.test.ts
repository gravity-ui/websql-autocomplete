import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after TRUNCATE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('TRUNCATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'TABLE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest tables after TRUNCATE TABLE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('TRUNCATE TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor('TRUNCATE TABLE test_table;');

    expect(autocompleteResult.errors).toHaveLength(0);
});
