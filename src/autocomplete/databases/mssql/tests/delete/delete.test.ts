import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after DELETE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('DELETE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'OPENQUERY'},
        {value: 'OPENDATASOURCE'},
        {value: 'FROM'},
        {value: 'TOP'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('DELETE FROM |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('DELETE FROM test_table |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([{value: 'WHERE'}, {value: 'FROM'}, {value: 'OUTPUT'}]),
    );
});

test('should suggest table name for column in WHERE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('DELETE FROM test_table WHERE |');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'DELETE FROM test_table WHERE id IN (SELECT id FROM test_table_2);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
