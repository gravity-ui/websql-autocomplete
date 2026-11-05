import {parseMsSqlQueryWithCursor} from '../../index.js';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after JOIN', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table JOIN |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables for qualified name after JOIN', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table JOIN dbo.|');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after LEFT', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table LEFT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'JOIN'},
        {value: 'HASH'},
        {value: 'LOOP'},
        {value: 'MERGE'},
        {value: 'REMOTE'},
        {value: 'OUTER'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest table names for ON clause', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table names and aliases for ON clause', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table_1 t1 LEFT JOIN test_table_2 t2 ON |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table names and aliases for ON clause after alias with dot', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON t1.|',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table names and aliases for ON clause if table name not unique', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table t1 JOIN test_table t2 ON |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table', alias: 't1'},
            {name: 'test_table', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table names and aliases for ON clause between statements', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table names and aliases for ON clause for second condition', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON t1.id = t2.id AND |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table names and aliases after CROSS APPLY', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table_1 t1 CROSS APPLY test_table_2 t2 WHERE |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});
