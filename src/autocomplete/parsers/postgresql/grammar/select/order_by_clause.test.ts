import {expect, test} from '@jest/globals';

import {
    ColumnSuggestion,
    FunctionsSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
    parsePostgreSql,
} from '../../../../index';

test('should suggest ORDER BY', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table ORDER ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'BY', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});

test('should suggest ORDER BY after WHERE', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_table WHERE test_column = "test" ORDER ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'BY', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});

test('should suggest orderBys, columns, functions', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table ORDER BY ', '');

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const orderBysSuggestion: OrderBysSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'order by',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest orderBys, columns, functions with database name', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_database.test_table ORDER BY ', '');

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const orderBysSuggestion: OrderBysSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_database',
                    },
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'order by',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_database',
                    },
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_database.test_table ORDER BY test_column ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2.4},
        {value: 'DESC', weight: 2.4},
        {value: 'LIMIT', weight: 2.3},
        {value: 'OFFSET', weight: 2.2},
        {value: 'UNION', weight: 2.11},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should suggest CASE, columns, functions after plus sign', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_database.test_table ORDER BY test_column + ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'order by',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_database',
                    },
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest CASE, columns, functions after comma', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_database.test_table ORDER BY test_column, ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'order by',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_database',
                    },
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest CASE, columns, functions after plus sign and ASC', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_database.test_table ORDER BY test_column_1 + test_column_2 ASC, ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'order by',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_database',
                    },
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest CASE, columns, functions after ASC', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_database.test_table ORDER BY test_column ASC, ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'order by',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_database',
                    },
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords after DESC', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_database.test_table ORDER BY test_column_1 DESC, test_column_2 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2.4},
        {value: 'DESC', weight: 2.4},
        {value: 'LIMIT', weight: 2.3},
        {value: 'OFFSET', weight: 2.2},
        {value: 'UNION', weight: 2.11},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should suggest keywords after DESC midway', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_database.test_table ORDER BY test_column_1 DESC, test_column_2 ',
        ', test_column_3',
    );

    const suggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2.4},
        {value: 'DESC', weight: 2.4},
        {value: 'LIMIT', weight: 2.3},
        {value: 'OFFSET', weight: 2.2},
        {value: 'UNION', weight: 2.11},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
