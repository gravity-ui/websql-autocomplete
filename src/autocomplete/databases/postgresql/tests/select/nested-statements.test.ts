import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest nested SELECT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM (|');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    expect(autocompleteResult.suggestKeywords).toContainEqual(selectKeyword);
});

test('should suggest table name for nested SELECT column', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM (SELECT | FROM test_table',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for nested SELECT column between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM (SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for nested WHERE condition', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM (SELECT * FROM test_table WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for nested JOIN condition', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM (SELECT * FROM (|');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    expect(autocompleteResult.suggestKeywords).toContainEqual(selectKeyword);
});

test('should suggest table name for double nested SELECT column', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT | FROM test_table',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for double nested SELECT column between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM (SELECT * FROM (SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for double nested WHERE condition', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT * FROM test_table WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for double nested JOIN condition', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'SELECT * FROM (SELECT * FROM test_table) t1;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

// TODO PostgreSQL grammar doesn't throw error here but it should
test.skip('should report errors on missing alias', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'SELECT * FROM (SELECT * FROM test_table);',
    );

    expect(autocompleteResult.errors).toHaveLength(1);
});
