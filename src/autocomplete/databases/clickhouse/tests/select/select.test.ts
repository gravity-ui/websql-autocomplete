import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types';

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        SELECT
            DISTINCT ON (test_column1)
            test_column2::String, test_column3::UInt16, test_column4
        FROM
            test_database.test_table1 FINAL
        SAMPLE
            0.1 OFFSET 0.5
        GLOBAL ANY INNER JOIN test_table2 ON test_column1 = test_column2
        PREWHERE
            test_column1 = 1
            test_column2 = 'text'
        WHERE test_column1 = 1
        GROUP BY test_column2 WITH ROLLUP WITH TOTALS
        HAVING
            test_column1 = 1
            test_column2 = 'text'
        WINDOW
            test_column1 AS
            (ORDER BY test_column2 DESC)
        ORDER BY
            test_column1
            WITH FILL
        LIMIT 10 BY columns
        LIMIT 10 WITH TIES
        SETTINGS
            test_setting = 1
        INTO OUTFILE 'test_filename';
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on multiple except clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        SELECT
            test_column1, test_column2, test_column3
        FROM
            test_database.test_table1
            
        EXCEPT DISTINCT

        SELECT
            test_column4, test_column5, test_column6
        FROM
            test_database.test_table2

        EXCEPT ALL

        SELECT
            test_column7, test_column8, test_column9
        FROM
            test_database.test_table3

        EXCEPT

        SELECT
            test_column10, test_column11, test_column12
        FROM
            test_database.test_table4
        ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on multiple union clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        SELECT
            test_column1, test_column2, test_column3
        FROM
            test_database.test_table1
            
        UNION DISTINCT

        SELECT
            test_column4, test_column5, test_column6
        FROM
            test_database.test_table2
            
        UNION ALL

        SELECT
            test_column7, test_column8, test_column9
        FROM
            test_database.test_table3;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after UNION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        SELECT test_column1, test_column2, test_column3
        FROM test_database.test_table1

        UNION |
    `);

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ALL'}, {value: 'DISTINCT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors on multiple intersect clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        SELECT
            test_column1, test_column2, test_column3
        FROM
            test_database.test_table1
            
        INTERSECT ALL

        SELECT
            test_column4, test_column5, test_column6
        FROM
            test_database.test_table2

        INTERSECT DISTINCT

        SELECT
            test_column7, test_column8, test_column9
        FROM
            test_database.test_table3

        INTERSECT

        SELECT
            test_column10, test_column11, test_column12
        FROM
            test_database.test_table4
        ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on except and intersect clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        SELECT
            * EXCEPT test_column1, test_column2, test_column3
        FROM
            test_database.test_table1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on from values clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        SELECT * FROM VALUES (
            1, '2', [1, 2, 3],
            test_function1(test_function2(1, '2', [1,2,3])),
            test_function3(test_function4(1, '2', [1,2,3]))
        )
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after SELECT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: 'TOP'},
        {value: 'DISTINCT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
    expect(autocompleteResult.suggestTemplates).toEqual(false);
});

test('should suggest properly after *', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXCEPT'},
        {value: 'AS'},
        {value: 'DATE'},
        {value: 'FIRST'},
        {value: 'ID'},
        {value: 'KEY'},
        {value: 'IS'},
        {value: 'BETWEEN'},
        {value: 'NOT'},
        {value: 'OR'},
        {value: 'AND'},
        {value: 'ILIKE'},
        {value: 'LIKE'},
        {value: 'IN'},
        {value: 'GLOBAL'},
        {value: '*'},
        {value: 'SETTINGS'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'WITH'},
        {value: 'GROUP'},
        {value: 'WHERE'},
        {value: 'PREWHERE'},
        {value: 'INNER'},
        {value: 'LEFT'},
        {value: 'ARRAY'},
        {value: 'FROM'},
        {value: 'INTERSECT'},
        {value: 'UNION'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'VALUES'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest ALL tables between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'DATE'},
        {value: 'FIRST'},
        {value: 'ID'},
        {value: 'KEY'},
        {value: 'JOIN'},
        {value: 'ALL'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'INNER'},
        {value: 'ANTI'},
        {value: 'SEMI'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'FULL'},
        {value: 'GLOBAL'},
        {value: 'LOCAL'},
        {value: 'CROSS'},
        {value: 'SAMPLE'},
        {value: 'FINAL'},
        {value: 'SETTINGS'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'WITH'},
        {value: 'GROUP'},
        {value: 'WHERE'},
        {value: 'PREWHERE'},
        {value: 'ARRAY'},
        {value: 'EXCEPT'},
        {value: 'INTERSECT'},
        {value: 'UNION'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(undefined);
});

test('should suggest table name for column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT | FROM test_table');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT | FROM test_table t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT id, | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT | FROM test_table_1, test_table_2',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table_1, test_table_2 ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT | FROM test_table_1 t1, test_table_2 t2',
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT | FROM test_table_1 AS t1, test_table_2 AS t2',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest properly after HAVING', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table as t HAVING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after LIMIT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table as t LIMIT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest tables with inline comment', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM | --SELECT * FROM test_table',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables with multiline comment', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM | /*SELECT * FROM test_table*/',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('SELECT c1, c2 FROM test_table;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after EXCEPT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table EXCEPT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'SELECT'},
        {value: 'ALL'},
        {value: 'DISTINCT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTERSECT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table INTERSECT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'SELECT'},
        {value: 'ALL'},
        {value: 'DISTINCT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
