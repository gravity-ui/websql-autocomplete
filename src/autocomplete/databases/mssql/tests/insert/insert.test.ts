import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after INSERT', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'OPENQUERY'},
        {value: 'OPENDATASOURCE'},
        {value: 'INTO'},
        {value: 'TOP'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after INTO', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('INSERT INTO |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables for qualified name after INTO', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('INSERT INTO test_schema.|');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest table name for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('INSERT INTO test_table (|');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for second column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('INSERT INTO test_table (id, |');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest properly after column list', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('INSERT INTO test_table (id) |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'VALUES'},
        {value: 'SELECT'},
        {value: 'EXECUTE'},
        {value: 'DEFAULT'},
        {value: 'OUTPUT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        "INSERT INTO test_table (id, name) VALUES (1, N'test'), (2, N'test');",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on INSERT SELECT statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'INSERT INTO test_table (id) SELECT id FROM test_table_2;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
