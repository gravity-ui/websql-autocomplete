import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../..';

test('should suggest keywords after INNER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table INNER |');
    // TODO Should not suggest OUTER
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table LEFT |');
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table RIGHT |');
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table FULL |');
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT OUTER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table LEFT OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT OUTER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table RIGHT OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL OUTER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table FULL OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after JOIN', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table JOIN |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after JOIN between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table JOIN | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest keywords after JOIN table', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 |',
    );
    const keywords: KeywordSuggestion[] = [
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
        {value: 'USING'},
        {value: 'ON'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table names for ON clause', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
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
    const parseResult = parsePostgreSqlQueryWithCursor(
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
    const parseResult = parsePostgreSqlQueryWithCursor(
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
    const parseResult = parsePostgreSqlQueryWithCursor(
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
    const parseResult = parsePostgreSqlQueryWithCursor(
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
    const parseResult = parsePostgreSqlQueryWithCursor(
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
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;',
    );

    expect(parseResult.errors).toHaveLength(0);
});
