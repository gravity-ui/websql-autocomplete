import {parseMySqlQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../..';

test('should suggest properly after SELECT', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
        {value: 'ALL'},
        {value: 'DISTINCT'},
        {value: 'DISTINCTROW'},
        {value: 'HIGH_PRIORITY'},
        {value: 'STRAIGHT_JOIN'},
        {value: 'SQL_SMALL_RESULT'},
        {value: 'SQL_BIG_RESULT'},
        {value: 'SQL_BUFFER_RESULT'},
        {value: 'SQL_CACHE'},
        {value: 'SQL_NO_CACHE'},
        {value: 'SQL_CALC_FOUND_ROWS'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestTemplates).toEqual(false);
});

test('should suggest properly after *', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FROM'},
        {value: 'WHERE'},
        {value: 'UNION'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'GROUP'},
        {value: 'INTO'},
        {value: 'FOR'},
        {value: 'LOCK'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'JSON_TABLE'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest ALL tables between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables with inline comment', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM | --SELECT * FROM test_table');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables with multiline comment', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM | /*SELECT * FROM test_table*/');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORCE'},
        {value: 'IGNORE'},
        {value: 'USE'},
        {value: 'AS'},
        {value: 'PARTITION'},
        {value: 'CROSS'},
        {value: 'INNER'},
        {value: 'JOIN'},
        {value: 'STRAIGHT_JOIN'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'NATURAL'},
        {value: 'WHERE'},
        {value: 'UNION'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'GROUP'},
        {value: 'INTO'},
        {value: 'FOR'},
        {value: 'LOCK'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestViewsOrTables).toEqual(undefined);
});

test('should suggest table name for column', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT | FROM test_table');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT | FROM test_table t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT id, | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT | FROM test_table_1, test_table_2');
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table_1, test_table_2 ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT | FROM test_table_1 t1, test_table_2 t2');
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases (with AS) for column', () => {
    const parseResult = parseMySqlQueryWithCursor(
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

// TODO: fix, grammar is written this way that ORDER might be an alias
test.skip('should suggest properly after ORDER', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table as t ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: fix expression rule, should only suggest columns
test.skip('should suggest properly after ORDER BY', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table as t ORDER BY |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after GROUP', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table as t GROUP |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: fix expression rule, should only suggest columns
test.skip('should suggest properly after GROUP BY', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table as t GROUP BY |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after HAVING', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table as t HAVING |');

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
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after LIMIT', () => {
    const parseResult = parseMySqlQueryWithCursor('SELECT * FROM test_table as t LIMIT |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor('SELECT c1, c2 FROM test_table;');

    expect(parseResult.errors).toHaveLength(0);
});
