import {parseMsSqlQueryWithCursor} from '../../index.js';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table WHERE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'EXISTS'},
        {value: 'CONTAINS'},
        {value: 'FREETEXT'},
        {value: 'DEFAULT'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'OVER'},
    ];
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table WHERE | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table names and aliases for WHERE clause', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table_1 t1 RIGHT JOIN test_table_2 t2 ON t1.id = t2.id WHERE |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for second condition', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table WHERE id = 1 AND |',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest properly after condition', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table WHERE id = 1 |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([{value: 'AND'}, {value: 'OR'}, {value: 'GROUP'}, {value: 'ORDER'}]),
    );
    expect(autocompleteResult.suggestColumns).toBeUndefined();
});
