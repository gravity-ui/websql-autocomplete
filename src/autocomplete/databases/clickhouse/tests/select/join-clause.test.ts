import {parseClickHouseQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../autocomplete-types';
import {parseClickHouseQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest keywords after INNER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table INNER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'JOIN'},
        {value: 'ARRAY'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table LEFT |');
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table RIGHT |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANTI'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'SEMI'},
        {value: 'OUTER'},
        {value: 'JOIN'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table FULL |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANY'},
        {value: 'OUTER'},
        {value: 'JOIN'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT OUTER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table LEFT OUTER |',
    );
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANTI'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'SEMI'},
        {value: 'JOIN'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT OUTER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table RIGHT OUTER |',
    );
    const keywords: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'ANTI'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'SEMI'},
        {value: 'JOIN'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL OUTER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table FULL OUTER |',
    );
    const keywords: KeywordSuggestion[] = [{value: 'ALL'}, {value: 'ANY'}, {value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after JOIN', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table JOIN |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after JOIN between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table JOIN | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest keywords after JOIN table', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table names for ON clause', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
