import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest keywords after INNER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table INNER |');
    // TODO Should not suggest OUTER
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table LEFT |');
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table RIGHT |');
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table FULL |');
    const keywords: KeywordSuggestion[] = [{value: 'OUTER'}, {value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after LEFT OUTER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table LEFT OUTER |',
    );
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RIGHT OUTER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table RIGHT OUTER |',
    );
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after FULL OUTER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table FULL OUTER |',
    );
    const keywords: KeywordSuggestion[] = [{value: 'JOIN'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after JOIN', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table JOIN |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after JOIN between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table JOIN | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest keywords after JOIN table', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table names for ON clause', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table names and aliases for ON clause', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
