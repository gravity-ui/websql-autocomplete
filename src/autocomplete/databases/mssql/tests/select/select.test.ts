import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after SELECT', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'DELETED'},
        {value: 'INSERTED'},
        {value: 'DEFAULT'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'OVER'},
        {value: 'TOP'},
        {value: 'ALL'},
        {value: 'DISTINCT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
    expect(autocompleteResult.suggestTemplates).toEqual(false);
});

test('should suggest properly after *', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([
            {value: 'FROM'},
            {value: 'WHERE'},
            {value: 'GROUP'},
            {value: 'HAVING'},
            {value: 'ORDER'},
            {value: 'INTO'},
            {value: 'UNION'},
            {value: 'EXCEPT'},
            {value: 'INTERSECT'},
            {value: 'OPTION'},
            {value: 'FOR'},
        ]),
    );
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'OPENROWSET'},
        {value: 'CHANGETABLE'},
        {value: 'OPENXML'},
        {value: 'OPENJSON'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    expect(autocompleteResult.suggestFunctions).toEqual(false);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(false);
});

test.each(['SELECT * FROM test_schema.|', 'SELECT * FROM test_database.test_schema.|'])(
    'should suggest tables for qualified name in %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestKeywords).toEqual([]);
        expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
        expect(autocompleteResult.suggestColumns).toBeUndefined();
    },
);

test('should suggest properly after table', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([
            {value: 'AS'},
            {value: 'WITH'},
            {value: 'JOIN'},
            {value: 'INNER'},
            {value: 'LEFT'},
            {value: 'RIGHT'},
            {value: 'FULL'},
            {value: 'CROSS'},
            {value: 'OUTER'},
            {value: 'WHERE'},
            {value: 'GROUP'},
            {value: 'ORDER'},
        ]),
    );
    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should suggest table name for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT | FROM test_table');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between batches', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM before_table;\nGO\nSELECT | FROM test_table;\nGO\nSELECT * FROM after_table;',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT | FROM test_table t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT id, | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column after alias with dot', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT t.| FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest qualified and quoted table names for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT | FROM [test_database].[test_schema].[test_table] AS [t]',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: '[test_database].[test_schema].[test_table]', alias: '[t]'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT | FROM test_table_1, test_table_2',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT | FROM test_table_1 t1, test_table_2 AS t2',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest CTE name for column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'WITH test_cte AS (SELECT id FROM test_table) SELECT | FROM test_cte',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_cte'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should not suggest tables for new table in SELECT INTO', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * INTO | FROM test_table');

    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'SELECT DISTINCT TOP (10) t.id, COUNT(*) AS cnt FROM [test_database].[dbo].[test_table] t WITH (NOLOCK) GROUP BY t.id HAVING COUNT(*) > 1 ORDER BY cnt DESC OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on statement with CTE', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'WITH test_cte AS (SELECT id FROM test_table) SELECT * FROM test_cte;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
