import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index.js';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

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

test('should suggest subquery alias', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column FROM test_table) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['test_column']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest subquery alias and table listed after subquery', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column FROM test_table) AS t1, test_table_2 AS t2',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: '', alias: 't1', columns: ['test_column']},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest subquery alias and joined table in WHERE condition', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM (SELECT test_column FROM test_table) AS t1 JOIN test_table_2 AS t2 ON t1.test_column = t2.test_column WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: '', alias: 't1', columns: ['test_column']},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name inside subquery joined with table', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM (SELECT | FROM test_table) AS t1 JOIN test_table_2 AS t2 ON t1.test_column = t2.test_column',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest outer table name after subquery in WHERE condition', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table WHERE test_column IN (SELECT test_column FROM test_table_2) AND |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest subquery columns by aliases and qualified names', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT t.test_column, test_column_2 AS test_alias, COUNT(*) FROM test_table t) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['test_column', 'test_alias', 'count']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not suggest subquery columns if subquery selects asterisk', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT * FROM test_table) AS t1, (SELECT t.* FROM test_table t) AS t2',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: '', alias: 't1'},
            {name: '', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns of each subquery separately', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column FROM test_table) AS t1 JOIN (SELECT test_column_2 FROM test_table_2) AS t2 ON t1.test_column = t2.test_column_2',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: '', alias: 't1', columns: ['test_column']},
            {name: '', alias: 't2', columns: ['test_column_2']},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns of the first SELECT in UNION subquery', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column FROM test_table UNION ALL SELECT test_column_2 FROM test_table_2) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['test_column']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest subquery column aliases from alias clause', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column, test_column_2 FROM test_table) AS t1 (test_alias, test_alias_2)',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['test_alias', 'test_alias_2']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name of the second SELECT in UNION after function call', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT test_column FROM test_table UNION ALL SELECT abs(test_column_2), | FROM test_table_2',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table_2'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name of the first SELECT in UNION after function call', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT abs(test_column), | FROM test_table UNION ALL SELECT test_column_2 FROM test_table_2',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should keep dots inside quoted subquery column name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT t."test.column" FROM test_table t) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['"test.column"']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns of each subquery without alias separately', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column FROM test_table), (SELECT test_column_2 FROM test_table_2)',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: '', columns: ['test_column']},
            {name: '', columns: ['test_column_2']},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest subquery columns renamed by partial column alias list', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column, test_column_2 FROM test_table) AS t1 (test_alias)',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['test_alias', 'test_column_2']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should name subquery column after cast expression', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column::TEXT, CAST(test_column_2 AS TEXT) FROM test_table) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['test_column', 'test_column_2']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should name subquery column after function', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        "SELECT | FROM (SELECT COALESCE(test_column, 'test_value'), test_schema.test_function(test_column), COUNT(*) FILTER (WHERE test_column > 1) FROM test_table) AS t1",
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['coalesce', 'test_function', 'count']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should name subquery column after TRIM and COLLATION FOR like PostgreSQL does', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT TRIM(test_column), TRIM(LEADING FROM test_column), TRIM(TRAILING FROM test_column), COLLATION FOR (test_column) FROM test_table) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['btrim', 'ltrim', 'rtrim', 'pg_collation_for']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should name subquery column case', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT CASE WHEN test_column = 1 THEN 1 END FROM test_table) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['case']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should name subquery column after parenthesized expression', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT (test_column), (test_table).test_column_2, test_column_3 COLLATE "C" FROM test_table) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: '', alias: 't1', columns: ['test_column', 'test_column_2', 'test_column_3']},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not suggest subquery column without name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM (SELECT test_column + 1, test_column_2 FROM test_table) AS t1',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: '', alias: 't1', columns: ['test_column_2']}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name of subquery if closing bracket is right after cursor', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table WHERE test_column IN (SELECT test_column FROM test_table_2 WHERE |)',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table_2'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name if semicolon is right after cursor', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table WHERE |; SELECT * FROM test_table_2',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});
