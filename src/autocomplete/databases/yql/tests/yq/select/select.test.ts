import {parseYqQueryWithCursor, parseYqQueryWithoutCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {YQLColumnsSuggestion} from '../../../types';

test('should suggest properly after SELECT', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'DISTINCT'},
        {value: '*'},
        {value: 'NULL'},
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
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
});
test('should suggest properly after FROM', () => {
    const autocompleteResult = parseYqQueryWithCursor('FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ANY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
});

test('should suggest properly after *', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * |');

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
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ANY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
    expect(autocompleteResult.suggestTableFunctions).toBeTruthy();
});

test('should suggest properly after FROM when typing table name', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM te|');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ANY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
    expect(autocompleteResult.suggestColumns).toBeFalsy();
});

test('should suggest tables between statements', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM before_table; SELECT * FROM | ; SELECT * FROM after_table;',
    );

    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table |');

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

test('should suggest table hints after WITH', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table WITH |');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'COLUMNS'}, {value: 'SCHEMA'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestTableHints).toEqual('select_stmt');
});

test('should suggest table name for column', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT | FROM test_table');
    const columnSuggestions: YQLColumnsSuggestion = {tables: [{name: 'test_table'}], all: true};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM before_table; SELECT | FROM test_table ; SELECT * FROM after_table;',
    );
    const columnSuggestions: YQLColumnsSuggestion = {tables: [{name: 'test_table'}], all: true};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for column', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT | FROM test_table t');
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: 'test_table', alias: 't'}],
        all: true,
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias (with AS) for column', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT | FROM test_table AS t');
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: 'test_table', alias: 't'}],
        all: true,
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT id, | FROM test_table AS t');
    const columnSuggestions: YQLColumnsSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name and alias for second column if first equals to keyword', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT key, | FROM test_table AS t');
    const columnSuggestions: YQLColumnsSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT | FROM test_table_1, test_table_2');
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
        all: true,
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names for column between statements', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM before_table; SELECT | FROM test_table_1, test_table_2 ; SELECT * FROM after_table;',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
        all: true,
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases for column', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT | FROM test_table_1 t1, test_table_2 t2',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
        all: true,
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest multiple table names and aliases (with AS) for column', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT | FROM test_table_1 AS t1, test_table_2 AS t2',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
        all: true,
    };

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest properly after HAVING', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table as t HAVING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NULL'},
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
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
    expect(autocompleteResult.suggestColumns).toBeTruthy();
});

test('should suggest properly after LIMIT', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table as t LIMIT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NULL'},
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
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
});

test('should suggest tables with inline comment', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM | --SELECT * FROM test_table');
    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
});

test('should suggest tables with multiline comment', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM | /*SELECT * FROM test_table*/',
    );

    expect(autocompleteResult.suggestEntity).toEqual(['table', 'view', 'externalTable']);
});

test('should not report errors', () => {
    const autocompleteResult = parseYqQueryWithoutCursor('SELECT c1, c2 FROM test_table;');

    expect(autocompleteResult.errors).toHaveLength(0);
});
