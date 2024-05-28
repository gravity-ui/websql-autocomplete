import {parseYqQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    YqlAutocompleteResult,
} from '../../../../../autocomplete-types';
import {parseYqQueryWithoutCursor} from '../../../../../autocomplete';

const AfterWhereKeywords: KeywordSuggestion[] = [
    {value: 'NULL'},
    {value: 'FALSE'},
    {value: 'TRUE'},
    {value: 'EMPTY_ACTION'},
    {value: 'CAST'},
    {value: 'EXISTS'},
    {value: 'CASE'},
    {value: 'VARIANT'},
    {value: 'ENUM'},
    {value: 'CALLABLE'},
    {value: 'BITCAST'},
    {value: 'JSON_VALUE'},
    {value: 'JSON_EXISTS'},
    {value: 'JSON_QUERY'},
    {value: 'NOT'},
    {value: 'OPTIONAL'},
    {value: 'TUPLE'},
    {value: 'STRUCT'},
    {value: 'LIST'},
    {value: 'FLOW'},
    {value: 'DICT'},
    {value: 'SET'},
    {value: 'RESOURCE'},
    {value: 'TAGGED'},
];

function getAfterWhereCommonExpections(autocompleteResult: YqlAutocompleteResult): void {
    expect(autocompleteResult.suggestAggregateFunctions).toBeFalsy();
    expect(autocompleteResult.suggestWindowFunctions).toBeFalsy();
    expect(autocompleteResult.suggestFunctions).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
    expect(autocompleteResult.suggestTableFunctions).toBeFalsy();
    expect(autocompleteResult.suggestKeywords).toEqual(AfterWhereKeywords);
}

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table WHERE |');

    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
    getAfterWhereCommonExpections(autocompleteResult);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM before_table; SELECT * FROM test_table WHERE | ; SELECT * FROM after_table;',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
    getAfterWhereCommonExpections(autocompleteResult);
});

test('should suggest table name and alias for column', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table t1 WHERE |');
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table', alias: 't1'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table AS t1 WHERE |');
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table', alias: 't1'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM test_table AS t1 WHERE id = 2 AND |',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't1'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM test_table_1, test_table_2 WHERE |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM test_table_1 t1, test_table_2 t2 WHERE |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases (with AS) for column', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1, test_table_2 AS t2 WHERE |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest aliases for column', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT key as k, value v FROM test_table_1 WHERE |',
    );
    const columnAliasSuggestions = [{name: 'k'}, {name: 'v'}];
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestions);
});

test('should not report errors', () => {
    const autocompleteResult = parseYqQueryWithoutCursor('SELECT * FROM test_table WHERE id = 1;');

    expect(autocompleteResult.errors).toHaveLength(0);
});
