import {expect, test} from '@jest/globals';

import {
    CommonTableExpression,
    CommonTableExpressionsSuggestion,
    DatabasesSuggestion,
    KeywordSuggestion,
    TablesSuggestion,
    parseGenericSql,
} from '../../../../index';

test('should suggest alias', () => {
    const parseResult = parseGenericSql('WITH test_table ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'AS', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT', () => {
    const parseResult = parseGenericSql('WITH test_table AS ( ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT', () => {
    const parseResult = parseGenericSql('WITH test_table_1 AS (SELECT * FROM test_table_2) ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'WITH test_table_1 AS (SELECT * FROM test_table_2) SELECT ',
        '',
    );

    console.log(parseResult);

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
        prependQuestionMark: true,
        prependFrom: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const commonTableExpressionSuggestion: CommonTableExpressionsSuggestion = {
        name: 'test_table_1',
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestCommonTableExpressions).toContainEqual(
        commonTableExpressionSuggestion,
    );

    const commonTableExpressions: CommonTableExpression[] = [
        {
            alias: 'test_table_1',
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    name: 'test_table_2',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    expect(parseResult.commonTableExpressions).toEqual(commonTableExpressions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'with s as (select * from foo join bar) select * from ',
        ';',
    );

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const commonTableExpressions: CommonTableExpression[] = [
        {
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    name: 'foo',
                                },
                            ],
                        },
                        {
                            identifierChain: [
                                {
                                    name: 'bar',
                                },
                            ],
                        },
                    ],
                },
            ],
            alias: 's',
        },
    ];
    expect(parseResult.commonTableExpressions).toEqual(commonTableExpressions);

    const commonTableExpressionsSuggestion: CommonTableExpressionsSuggestion[] = [
        {
            name: 's',
        },
    ];
    expect(parseResult.suggestCommonTableExpressions).toEqual(commonTableExpressionsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'with s as (select * from foo join bar) select * from ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const commonTableExpressions: CommonTableExpression[] = [
        {
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    name: 'foo',
                                },
                            ],
                        },
                        {
                            identifierChain: [
                                {
                                    name: 'bar',
                                },
                            ],
                        },
                    ],
                },
            ],
            alias: 's',
        },
    ];
    expect(parseResult.commonTableExpressions).toEqual(commonTableExpressions);

    const commonTableExpressionsSuggestion: CommonTableExpressionsSuggestion[] = [
        {
            name: 's',
        },
    ];
    expect(parseResult.suggestCommonTableExpressions).toEqual(commonTableExpressionsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('WITH t1 AS (SELECT * FROM FOO) SELECT * FROM ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const commonTableExpressions: CommonTableExpression[] = [
        {
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    name: 'FOO',
                                },
                            ],
                        },
                    ],
                },
            ],
            alias: 't1',
        },
    ];
    expect(parseResult.commonTableExpressions).toEqual(commonTableExpressions);

    const commonTableExpressionsSuggestion: CommonTableExpressionsSuggestion[] = [
        {
            name: 't1',
        },
    ];
    expect(parseResult.suggestCommonTableExpressions).toEqual(commonTableExpressionsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('WITH t1 AS (SELECT * FROM FOO), t2 AS (SELECT ', '');

    // TODO: fix unexpected error
    // expect(parseResult.errors).toBeUndefined();

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordsSuggestion));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const commonTableExpressions: CommonTableExpression[] = [
        {
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    name: 'FOO',
                                },
                            ],
                        },
                    ],
                },
            ],
            alias: 't1',
        },
    ];
    expect(parseResult.commonTableExpressions).toEqual(commonTableExpressions);

    const commonTableExpressionsSuggestion: CommonTableExpressionsSuggestion[] = [
        {
            name: 't1',
            prependFrom: true,
            prependQuestionMark: true,
        },
    ];
    expect(parseResult.suggestCommonTableExpressions).toEqual(commonTableExpressionsSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseGenericSql(
        'WITH q1 AS ( SELECT key FROM src WHERE something) SELECT * FROM q1;',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});
