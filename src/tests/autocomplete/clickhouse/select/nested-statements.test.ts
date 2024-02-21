import {parseClickHouseQueryWithCursor} from '../../../lib';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../types';
import {parseClickHouseQueryWithoutCursor} from '../../../../index';

test('should suggest nested SELECT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM (|');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    expect(autocompleteResult.suggestKeywords).toContainEqual(selectKeyword);
});

test('should suggest table name for nested SELECT column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM (SELECT | FROM test_table',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for nested SELECT column between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM (SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for nested WHERE condition', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM (SELECT * FROM test_table WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for nested JOIN condition', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM (SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest double nested SELECT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM (SELECT * FROM (|');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    expect(autocompleteResult.suggestKeywords).toContainEqual(selectKeyword);
});

test('should suggest table name for double nested SELECT column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT | FROM test_table',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for double nested SELECT column between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM (SELECT * FROM (SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for double nested WHERE condition', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT * FROM test_table WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for double nested JOIN condition', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM (SELECT * FROM test_table) t1;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report error on missing alias', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM (SELECT * FROM test_table);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
