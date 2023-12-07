import {expect, test} from '@jest/globals';

import {
    DatabasesSuggestion,
    FunctionsSuggestion,
    KeywordSuggestion,
    TablesSuggestion,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
} from '../../../../index';

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery(
        'SELECT * FROM test_database.test_table ORDER BY test_column LIMIT 10 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'UNION', weight: 2.11}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_table UNION ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'ALL', weight: -1},
        {value: 'DISTINCT', weight: -1},
        {value: 'SELECT', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_table UNION ALL SELECT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionSuggestion);

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(databasesSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'SELECT test_column FROM (SELECT test_column FROM test_table ORDER BY test_column LIMIT 10)subq1 UNION SELECT test_column FROM (SELECT test_column FROM test_table_2 ORDER BY test_column LIMIT 10)subq2;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'SELECT * FROM test_table UNION DISTINCT SELECT * FROM t2;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'SELECT * FROM test_table UNION SELECT * FROM t2;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'WITH q1 AS (SELECT * FROM test_table WHERE conditions), q2 AS (SELECT * FROM test_table s2 WHERE conditions) SELECT * FROM q1 UNION ALL SELECT * FROM q2;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'WITH t1 AS (SELECT 1) (WITH t2 AS (SELECT 2) SELECT * FROM t2) UNION ALL SELECT * FROM t1;',
    );
    expect(parseResult.errors).toBeUndefined();
});
