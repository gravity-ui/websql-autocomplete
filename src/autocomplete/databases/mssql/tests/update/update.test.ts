import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after UPDATE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('UPDATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'STATISTICS'},
        {value: 'OPENQUERY'},
        {value: 'OPENDATASOURCE'},
        {value: 'TOP'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('UPDATE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SET'}, {value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest table name for column after SET', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('UPDATE test_table SET |');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column in value expression', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('UPDATE test_table SET test_column = |');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
});

test('should suggest table name for column after previous statement without semicolon', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM before_table\nUPDATE test_table SET |',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for UPDATE FROM', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('UPDATE t SET | FROM test_table t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column in WHERE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'UPDATE test_table SET test_column = 1 WHERE |',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        "UPDATE t SET name = 'test' FROM test_table t JOIN test_table_2 t2 ON t.id = t2.id WHERE t2.id = 1;",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
