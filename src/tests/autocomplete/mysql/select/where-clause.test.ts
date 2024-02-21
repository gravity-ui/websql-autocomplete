import {parseMySqlQueryWithCursor} from '../../../lib';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../../index';

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table WHERE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
    ];
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table'}],
    };
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table WHERE | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table t1 WHERE |');
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table', alias: 't1'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table AS t1 WHERE |');
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table', alias: 't1'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table AS t1 WHERE id = 2 AND |',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't1'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1, test_table_2 WHERE |',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
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
    const autocompleteResult = parseMySqlQueryWithCursor(
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

test('should not report errors', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'SELECT * FROM test_table WHERE id = 1;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
