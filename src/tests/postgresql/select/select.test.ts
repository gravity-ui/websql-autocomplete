import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../..';

test('should suggest properly after SELECT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
        {value: 'ALL'},
        {value: 'DISTINCT'},
        {value: 'INTO'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestTemplates).toEqual(false);
});

test('should suggest properly after *', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INTO'},
        {value: 'FROM'},
        {value: 'WHERE'},
        {value: 'GROUP'},
        {value: 'HAVING'},
        {value: 'WINDOW'},
        {value: 'INTERSECT'},
        {value: 'EXCEPT'},
        {value: 'UNION'},
        {value: 'ORDER'},
        {value: 'LIMIT'},
        {value: 'FETCH'},
        {value: 'OFFSET'},
        {value: 'FOR'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ONLY'},
        {value: 'ROWS'},
        {value: 'XMLTABLE'},
        {value: 'LATERAL'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest ALL tables between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables with inline comment', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM | --SELECT * FROM test_table',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables with multiline comment', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM | /*SELECT * FROM test_table*/',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'AS'},
        {value: 'JOIN'},
        {value: 'FULL'},
        {value: 'INNER'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'NATURAL'},
        {value: 'CROSS'},
        {value: 'TABLESAMPLE'},
        {value: 'WHERE'},
        {value: 'GROUP'},
        {value: 'HAVING'},
        {value: 'WINDOW'},
        {value: 'INTERSECT'},
        {value: 'EXCEPT'},
        {value: 'UNION'},
        {value: 'ORDER'},
        {value: 'LIMIT'},
        {value: 'FETCH'},
        {value: 'OFFSET'},
        {value: 'FOR'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestViewsOrTables).toEqual(undefined);
});

test('should suggest table name for column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT | FROM test_table');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT | FROM test_table t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT id, | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT | FROM test_table_1, test_table_2');
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table_1, test_table_2 ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM test_table_1 t1, test_table_2 t2',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases (with AS) for column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT | FROM test_table_1 AS t1, test_table_2 AS t2',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest properly after HAVING', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table as t HAVING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after LIMIT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table as t LIMIT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
        {value: 'ALL'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestColumns).toBeUndefined();
});

test('should suggest properly after OFFSET', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table as t OFFSET |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
        {value: 'NOT'},
        {value: 'OPERATOR'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestColumns).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor('SELECT c1, c2 FROM test_table;');

    expect(parseResult.errors).toHaveLength(0);
});
