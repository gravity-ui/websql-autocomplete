import {parseYqlQueryWithCursor, parseYqlQueryWithoutCursor} from '../../../index';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest keywords after INNER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table INNER |');

    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table LEFT |');
    const keywords: KeywordSuggestion[] = [
        {value: 'JOIN'},
        {value: 'OUTER'},
        {value: 'ONLY'},
        {value: 'SEMI'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table RIGHT |');

    const keywords: KeywordSuggestion[] = [
        {value: 'JOIN'},
        {value: 'OUTER'},
        {value: 'ONLY'},
        {value: 'SEMI'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table FULL |');

    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}, {value: 'OUTER'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT OUTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table LEFT OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT OUTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table RIGHT OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL OUTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table FULL OUTER |');
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after JOIN', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table JOIN |');

    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
    expect(autocompleteResult.suggestAggregateFunctions).toBeFalsy();
    expect(autocompleteResult.suggestWindowFunctions).toBeFalsy();
    expect(autocompleteResult.suggestFunctions).toBeFalsy();
    expect(autocompleteResult.suggestSimpleTypes).toBeFalsy();
    expect(autocompleteResult.suggestUdfs).toBeFalsy();
    expect(autocompleteResult.suggestTableFunctions).toBeTruthy();
});

test('should suggest tables after JOIN between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table JOIN | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
    expect(autocompleteResult.suggestAggregateFunctions).toBeFalsy();
    expect(autocompleteResult.suggestWindowFunctions).toBeFalsy();
    expect(autocompleteResult.suggestFunctions).toBeFalsy();
    expect(autocompleteResult.suggestSimpleTypes).toBeFalsy();
    expect(autocompleteResult.suggestUdfs).toBeFalsy();
    expect(autocompleteResult.suggestTableFunctions).toBeTruthy();
});

test('should suggest keywords after JOIN table', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 |',
    );
    const keywords: KeywordSuggestion[] = [
        {value: 'VIEW'},
        {value: 'WITH'},
        {value: 'TABLESAMPLE'},
        {value: 'SAMPLE'},
        {value: 'AS'},
        {value: 'MATCH_RECOGNIZE'},
        {value: 'FLATTEN'},
        {value: 'NATURAL'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'EXCLUSION'},
        {value: 'FULL'},
        {value: 'OUTER'},
        {value: 'JOIN'},
        {value: 'INNER'},
        {value: 'CROSS'},
        {value: 'ON'},
        {value: 'USING'},
        {value: 'ASSUME'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'GROUP'},
        {value: 'WHERE'},
        {value: 'INTO'},
        {value: 'LIMIT'},
        {value: 'UNION'},
        {value: 'INTERSECT'},
        {value: 'EXCEPT'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table names for ON clause', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
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
test('should suggest table names and aliases for ON clause if table name not unique', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT * FROM test_table_1 t1 JOIN test_table_1 t2 ON |',
    );

    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_1', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
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
    const autocompleteResult = parseYqlQueryWithCursor(
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
    const autocompleteResult = parseYqlQueryWithCursor(
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
    const autocompleteResult = parseYqlQueryWithCursor(
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
    const autocompleteResult = parseYqlQueryWithCursor(
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
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
