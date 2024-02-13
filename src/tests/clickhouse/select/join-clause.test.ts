import {parseClickHouseQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parseClickHouseQueryWithoutCursor} from '../../..';

test('should suggest keywords after INNER', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table INNER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'JOIN'},
        {value: 'ARRAY'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table LEFT |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANTI'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'SEMI'},
        {value: 'OUTER'},
        {value: 'JOIN'},
        {value: 'ARRAY'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table RIGHT |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANTI'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'SEMI'},
        {value: 'OUTER'},
        {value: 'JOIN'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table FULL |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANY'},
        {value: 'OUTER'},
        {value: 'JOIN'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT OUTER', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table LEFT OUTER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANTI'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'SEMI'},
        {value: 'JOIN'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT OUTER', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table RIGHT OUTER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANTI'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'SEMI'},
        {value: 'JOIN'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL OUTER', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table FULL OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'ALL'}, {value: 'ANY'}, {value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after JOIN', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table JOIN |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after JOIN between statements', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table JOIN | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest keywords after JOIN table', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 |',
    );
    const keywords: KeywordSuggestion[] = [
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
        {value: 'ON'},
        {value: 'USING'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table names for ON clause', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause between statements', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases (with AS) for ON clause', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause for second column', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause for second condition', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = id AND |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for WHERE clause', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = id WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;',
    );

    expect(parseResult.errors).toHaveLength(0);
});
