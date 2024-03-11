import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../../autocomplete-types';
import {parseYqlQueryWithoutCursor} from '../../../../../autocomplete';

test('should suggest properly after SELECT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'DISTINCT'},
        {value: '*'},
        {value: 'DIGITS'},
        {value: 'INTEGER_VALUE'},
        {value: 'REAL'},
        {value: 'BLOB'},
        {value: 'NULL'},
        {value: 'CURRENT_TIME'},
        {value: 'CURRENT_DATE'},
        {value: 'CURRENT_TIMESTAMP'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'EMPTY_ACTION'},
        {value: 'CAST'},
        {value: 'EXISTS'},
        {value: 'CASE'},
        {value: 'VARIANT'},
        {value: 'ENUM'},
        {value: 'CALLABLE'},
        {value: 'BITCAST'},
        {value: 'JSON_VALUE'},
        {value: 'JSON_EXISTS'},
        {value: 'JSON_QUERY'},
        {value: 'NOT'},
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestUdfs).toEqual(true);
});
test('should suggest properly after FROM', () => {
    const autocompleteResult = parseYqlQueryWithCursor('FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ANY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest properly after *', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ASSUME'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'GROUP'},
        {value: 'WHERE'},
        {value: 'FROM'},
        {value: 'WITHOUT'},
        {value: 'INTO'},
        {value: 'LIMIT'},
        {value: 'UNION'},
        {value: 'INTERSECT'},
        {value: 'EXCEPT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ANY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest tables between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest table name for column', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT | FROM test_table');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT | FROM test_table t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT id, | FROM test_table AS t');
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT | FROM test_table_1, test_table_2');
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table_1, test_table_2 ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
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
    const autocompleteResult = parseYqlQueryWithCursor(
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
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table as t HAVING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DIGITS'},
        {value: 'INTEGER_VALUE'},
        {value: 'REAL'},
        {value: 'BLOB'},
        {value: 'NULL'},
        {value: 'CURRENT_TIME'},
        {value: 'CURRENT_DATE'},
        {value: 'CURRENT_TIMESTAMP'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'EMPTY_ACTION'},
        {value: 'CAST'},
        {value: 'EXISTS'},
        {value: 'CASE'},
        {value: 'VARIANT'},
        {value: 'ENUM'},
        {value: 'CALLABLE'},
        {value: 'BITCAST'},
        {value: 'JSON_VALUE'},
        {value: 'JSON_EXISTS'},
        {value: 'JSON_QUERY'},
        {value: 'NOT'},
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
    expect(autocompleteResult.suggestColumns).toBeTruthy();
});

test('should suggest properly after LIMIT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT * FROM test_table as t LIMIT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DIGITS'},
        {value: 'INTEGER_VALUE'},
        {value: 'REAL'},
        {value: 'BLOB'},
        {value: 'NULL'},
        {value: 'CURRENT_TIME'},
        {value: 'CURRENT_DATE'},
        {value: 'CURRENT_TIMESTAMP'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'EMPTY_ACTION'},
        {value: 'CAST'},
        {value: 'EXISTS'},
        {value: 'CASE'},
        {value: 'VARIANT'},
        {value: 'ENUM'},
        {value: 'CALLABLE'},
        {value: 'BITCAST'},
        {value: 'JSON_VALUE'},
        {value: 'JSON_EXISTS'},
        {value: 'JSON_QUERY'},
        {value: 'NOT'},
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
});

test('should suggest tables with inline comment', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT * FROM | --SELECT * FROM test_table',
    );
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest tables with multiline comment', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT * FROM | /*SELECT * FROM test_table*/',
    );

    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should not report errors', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor('SELECT c1, c2 FROM test_table;');

    expect(autocompleteResult.errors).toHaveLength(0);
});
