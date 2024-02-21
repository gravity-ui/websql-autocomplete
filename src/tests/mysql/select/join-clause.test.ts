import {parseMySqlQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../..';

test('should suggest keywords after INNER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table INNER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table LEFT |');
    const keywords: KeywordSuggestion[] = [
        {value: 'FORCE'},
        {value: 'IGNORE'},
        {value: 'USE'},
        {value: 'CROSS'},
        {value: 'INNER'},
        {value: 'JOIN'},
        {value: 'STRAIGHT_JOIN'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'NATURAL'},
        {value: 'OUTER'},
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table RIGHT |');
    const keywords: KeywordSuggestion[] = [
        {value: 'FORCE'},
        {value: 'IGNORE'},
        {value: 'USE'},
        {value: 'CROSS'},
        {value: 'INNER'},
        {value: 'JOIN'},
        {value: 'STRAIGHT_JOIN'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'NATURAL'},
        {value: 'OUTER'},
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT OUTER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table LEFT OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT OUTER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table RIGHT OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after JOIN', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SELECT * FROM test_table JOIN |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after JOIN between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table JOIN | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest keywords after JOIN table', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 |',
    );
    const keywords: KeywordSuggestion[] = [
        {value: 'FORCE'},
        {value: 'IGNORE'},
        {value: 'USE'},
        {value: 'AS'},
        {value: 'PARTITION'},
        {value: 'ON'},
        {value: 'USING'},
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table names for ON clause', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases (with AS) for ON clause', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause for second column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause for second condition', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = id AND |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for WHERE clause', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = id WHERE |',
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
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
