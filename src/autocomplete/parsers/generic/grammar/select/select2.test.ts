import {expect, test} from '@jest/globals';

import {
    // @ts-ignore
    UdfArgumentPosition,
    // @ts-ignore
    SubQuery,
    // @ts-ignore
    AggregateFunctionsSuggestion,
    // @ts-ignore
    ColumnSuggestion,
    // @ts-ignore
    DatabasesSuggestion,
    // @ts-ignore
    FiltersSuggestion,
    // @ts-ignore
    FunctionsSuggestion,
    // @ts-ignore
    GroupBysSuggestion,
    // @ts-ignore
    IdentifierLocation,
    // @ts-ignore
    IdentifierSuggestion,
    // @ts-ignore
    JoinsSuggestion,
    // @ts-ignore
    KeywordSuggestion,
    // @ts-ignore
    OrderBysSuggestion,
    // @ts-ignore
    ParsedTable,
    // @ts-ignore
    TablesSuggestion,
    // @ts-ignore
    parseGenericSql,
    // @ts-ignore
    ValuesSuggestion,
    // @ts-ignore
    DetailedColumnReference,
    // @ts-ignore
    parseGenericSqlWithoutCursor,
} from '../../../../index';

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT row_number() ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT row_number() ', ' FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT row_number() ', ', b, c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT count(DISTINCT a) ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT count(DISTINCT a) ', ' FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT count(DISTINCT a) ', ', b, c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT row_number() OVER ( ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'PARTITION BY', weight: 2}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT row_number() OVER (PARTITION ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a, b ORDER ',
        ' FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT row_number() OVER (ORDER BY ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT row_number() OVER (ORDER BY ', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (ORDER BY a ',
        ') FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2},
        {value: 'DESC', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY ',
        ' FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a, ',
        ' FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT row_number() OVER (PARTITION BY a ORDER BY b ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2},
        {value: 'ROWS BETWEEN', weight: 1},
        {value: 'RANGE BETWEEN', weight: 1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED PRECEDING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'PRECEDING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'PRECEDING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ROW', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 PRECEDING ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AND', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED PRECEDING ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AND', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ROW ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AND', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 PRECEDING AND ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED FOLLOWING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED PRECEDING AND ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED FOLLOWING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ROW AND ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED FOLLOWING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 PRECEDING AND CURRENT ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ROW', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FOLLOWING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ROW AND 1 ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FOLLOWING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT COUNT(*) ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: -1},
        {value: '+', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT COUNT(foo ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT COUNT(foo, ', ') FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT COUNT(foo, bl', ',bla) FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT COUNT(foo ', ', bar)');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns and values', () => {
    const parseResult = parseGenericSql('SELECT COUNT(foo, bl = ', ',bla) FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    // TODO: handle hasErrors

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bl',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns and values', () => {
    const parseResult = parseGenericSql("SELECT bl = '", ' FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    // TODO: handle hasErrors

    const valuesSuggestions: ValuesSuggestion = {
        partialQuote: "'",
        missingEndQuote: true,
    };
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bl',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 15,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'bl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'bar',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 20,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 23,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 23,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest columns and values', () => {
    const parseResult = parseGenericSql("SELECT bl = '", "' FROM bar;");

    expect(parseResult.errors).toBeUndefined();

    // TODO: handle hasErrors

    const valuesSuggestions: ValuesSuggestion = {
        partialQuote: "'",
        missingEndQuote: false,
    };
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bl',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'bl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'bar',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest columns and values', () => {
    const parseResult = parseGenericSql("SELECT bl = 'bl", " bl' FROM bar;");

    expect(parseResult.errors).toBeUndefined();

    // TODO: handle hasErrors

    const valuesSuggestions: ValuesSuggestion = {
        partialQuote: "'",
        missingEndQuote: false,
    };
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bl',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'bl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'bar',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 26,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 29,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 29,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest columns and values', () => {
    const parseResult = parseGenericSql('SELECT bl = "', ' FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    // TODO: handle hasErrors

    const valuesSuggestions: ValuesSuggestion = {
        partialQuote: '"',
        missingEndQuote: true,
    };
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bl',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns and values', () => {
    const parseResult = parseGenericSql('SELECT bl = "', '" FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    // TODO: handle hasErrors

    const valuesSuggestions: ValuesSuggestion = {
        partialQuote: '"',
        missingEndQuote: false,
    };
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bl',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'bl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'bar',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest columns and values', () => {
    const parseResult = parseGenericSql('SELECT bl = "bl', ' bl" FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    // TODO: handle hasErrors

    const valuesSuggestions: ValuesSuggestion = {
        partialQuote: '"',
        missingEndQuote: false,
    };
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bl',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'bl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'bar',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 26,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 29,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 29,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest functions', () => {
    const parseResult = parseGenericSql('SELECT CAST(', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CAST(', ' FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CAST(bla', ' FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CAST(', ' AS FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CAST(', ' AS INT FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CAST(', ' AS STRING) FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CAST(bla', ' AS STRING) FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CAST(bla ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: 2},
        {value: 'AND', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CAST(bla ', ' FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: 2},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bla',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('select cast(bla as ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CAST(bla AS ', ' FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CAST(bla AS ST', ') FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CAST(AS ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should not report errors for', () => {
    const parseResult = parseGenericSql('SELECT db.customUdf(col) FROM bar;', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 34,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 25,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            type: 'database',
        },
        {
            function: 'customudf',
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'customUdf',
                },
            ],
            location: {
                first_column: 11,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                columnReference: [
                    {
                        name: 'col',
                    },
                ],
                types: ['COLREF'],
            },
            function: 'customudf',
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'customUdf',
                },
            ],
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            identifierChain: [
                {
                    name: 'col',
                },
            ],
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 24,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'bar',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 34,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 34,
                first_line: 1,
                last_column: 34,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 34,
                first_line: 1,
                last_column: 34,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT db.customUdf(', ' FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'customudf',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT db.customUdf(1, ', ' FROM bar;');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'customudf',
        position: 2,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT AVG(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'avg',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT COUNT(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT STDDEV_POP(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'stddev_pop',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT STDDEV_SAMP(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'stddev_samp',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT SUM(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'sum',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT MAX(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'max',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT MIN(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'min',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT VAR_POP(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'var_pop',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT var_samp(', ') FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'DISTINCT', weight: -1},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'var_samp',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT id, SUM(a * ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN a = b AND ', ' THEN FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a = b AND ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CASE a = b ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WHEN', weight: -1},
        {value: 'AND', weight: -1},
        {value: '<>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN a = b OR ', ' THEN boo FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE WHEN a = b OR c THEN boo OR ',
        ' FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a =', ' WHEN c THEN d END FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a =',
        ' WHEN c THEN d ELSE e END FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a = c WHEN c THEN d ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'END', weight: 3},
        {value: '<>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a = c WHEN c THEN d=', ' ELSE FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a = c WHEN c THEN d=1 ',
        ' bla=foo FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: 'WHEN', weight: 1},
        {value: 'ELSE', weight: 2},
        {value: 'END', weight: 3},
        {value: '<', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a = c WHEN c THEN d=1 ',
        ' bla=foo FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: 'WHEN', weight: 1},
        {value: 'ELSE', weight: 2},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a = c WHEN c THEN d ELSE ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a = c WHEN c THEN d ELSE e AND ',
        ' FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE ELSE ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE ', ' ELSE a FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE ', ' ELSE FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a = c WHEN c THEN d ELSE e ',
        ' FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'END', weight: -1},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'e',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN THEN boo OR ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CASE ', ' a = b THEN FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CASE ', ' a = b THEN boo FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CASE ', ' THEN boo FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN ', ' boo FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'THEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE WHEN bla',
        ' boo WHEN b THEN c END FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'THEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a WHEN b THEN c WHEN ',
        ' boo ELSE c FROM testTable',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'THEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a WHEN b THEN c WHEN ',
        ' boo WHEN d THEN e END FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'THEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE a WHEN b THEN c ',
        ' WHEN d THEN e END FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WHEN', weight: -1},
        {value: '<', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'c',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT CASE a WHEN b THEN c ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WHEN', weight: 1},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'c',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN ', ' THEN FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest values', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN ', ' = a FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN ab', ' THEN bla ELSE foo FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT CASE bla WHEN ab',
        ' THEN bla ELSE foo END FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a WHEN ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN a = ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN a = b ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: 'THEN', weight: -1},
        {value: '<', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a = c WHEN c ', ' d FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'THEN', weight: -1},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'c',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a = c WHEN c THEN ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE a = c WHEN c THEN ', ' g FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN THEN ', ' g FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT CASE WHEN THEN ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest functions', () => {
    const parseResult = parseGenericSql('SELECT "boo \\" baa" = ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['STRING'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);
});

test('should suggest identifiers', () => {
    const parseResult = parseGenericSql(
        'SELECT 1 = ',
        ' OR false FROM tableOne boo, tableTwo baa;',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tableOne',
                    },
                ],
                alias: 'boo',
            },
            {
                identifierChain: [
                    {
                        name: 'tableTwo',
                    },
                ],
                alias: 'baa',
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'boo.',
            type: 'alias',
        },
        {
            name: 'baa.',
            type: 'alias',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM tbl1, tbl2 atbl2, tbl3 WHERE id = atbl2.',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['T'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tbl2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM tbl1, tbl2 atbl2, tbl3 WHERE id = atbl2.',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['T'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tbl2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest values', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE id =', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'id',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE -', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT -', ' FROM testTable WHERE id = 1;');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT 1 < ', ' FROM testTable WHERE id = 1;');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('select foo from tbl where ', ' % 2 = 0');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tbl',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest values', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE -id = ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'id',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT greatest(1, 2, a, 4, ', ' FROM testTable');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'greatest',
        position: 5,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT greatest(1, ', ', a, 4) FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'greatest',
        position: 2,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT ', ' > id FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'id',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE ', ' = id');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'id',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d >= ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d < ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d <= ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d <=> ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d <> ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d >= ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d > ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values and columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d != ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d + 1 != ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE bla', ' + 1 != 3');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d + ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d - ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d * ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d / ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d % ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d | ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d & ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE d ^ ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE ~', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a, b, c FROM testTable WHERE -', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['NUMBER'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT a, b, c FROM testTable WHERE d ',
        " RLIKE 'bla bla'",
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '<', weight: 2},
        {value: 'IN', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'd',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT bar FROM foo WHERE id = 1 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: 'GROUP BY',
            weight: 2.8,
        },
        {
            value: 'HAVING',
            weight: 2.7,
        },
        {
            value: 'ORDER BY',
            weight: 2.5,
        },
        {
            value: 'LIMIT',
            weight: 2.3,
        },
        {
            value: 'UNION',
            weight: 2.11,
        },
        {
            value: '<',
            weight: 2,
        },
        {
            value: '<=',
            weight: 2,
        },
        {
            value: '<=>',
            weight: 2,
        },
        {
            value: '<>',
            weight: 2,
        },
        {
            value: '=',
            weight: 2,
        },
        {
            value: '>',
            weight: 2,
        },
        {
            value: '>=',
            weight: 2,
        },
        {
            value: 'AND',
            weight: 2,
        },
        {
            value: 'BETWEEN',
            weight: 2,
        },
        {
            value: 'IN',
            weight: 2,
        },
        {
            value: 'IS FALSE',
            weight: 2,
        },
        {
            value: 'IS NOT FALSE',
            weight: 2,
        },
        {
            value: 'IS NOT NULL',
            weight: 2,
        },
        {
            value: 'IS NOT TRUE',
            weight: 2,
        },
        {
            value: 'IS NULL',
            weight: 2,
        },
        {
            value: 'IS TRUE',
            weight: 2,
        },
        {
            value: 'NOT BETWEEN',
            weight: 2,
        },
        {
            value: 'NOT IN',
            weight: 2,
        },
        {
            value: 'OR',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE id <=> 1 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: 'GROUP BY',
            weight: 2.8,
        },
        {
            value: 'HAVING',
            weight: 2.7,
        },
        {
            value: 'ORDER BY',
            weight: 2.5,
        },
        {
            value: 'LIMIT',
            weight: 2.3,
        },
        {
            value: 'UNION',
            weight: 2.11,
        },
        {
            value: '<',
            weight: 2,
        },
        {
            value: '<=',
            weight: 2,
        },
        {
            value: '<=>',
            weight: 2,
        },
        {
            value: '<>',
            weight: 2,
        },
        {
            value: '=',
            weight: 2,
        },
        {
            value: '>',
            weight: 2,
        },
        {
            value: '>=',
            weight: 2,
        },
        {
            value: 'AND',
            weight: 2,
        },
        {
            value: 'BETWEEN',
            weight: 2,
        },
        {
            value: 'IN',
            weight: 2,
        },
        {
            value: 'IS FALSE',
            weight: 2,
        },
        {
            value: 'IS NOT FALSE',
            weight: 2,
        },
        {
            value: 'IS NOT NULL',
            weight: 2,
        },
        {
            value: 'IS NOT TRUE',
            weight: 2,
        },
        {
            value: 'IS NULL',
            weight: 2,
        },
        {
            value: 'IS TRUE',
            weight: 2,
        },
        {
            value: 'NOT BETWEEN',
            weight: 2,
        },
        {
            value: 'NOT IN',
            weight: 2,
        },
        {
            value: 'OR',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE id IS ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'NOT NULL', weight: -1},
        {value: 'NULL', weight: -1},
        {value: 'NOT TRUE', weight: -1},
        {value: 'TRUE', weight: -1},
        {value: 'NOT FALSE', weight: -1},
        {value: 'FALSE', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE id IS NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'NULL', weight: -1},
        {value: 'FALSE', weight: -1},
        {value: 'TRUE', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE id IS ', ' NULL');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'NOT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE id IS ', ' FALSE');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'NOT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE id IS ', ' TRUE');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'NOT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE id LIKE ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['STRING'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['STRING'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql("SELECT * FROM foo WHERE id LIKE ('bla bla') ", '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AND', weight: 2}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});

test('should suggest identifiers', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo bla, bar WHERE id IS NULL AND ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'bla.',
            type: 'alias',
        },
        {
            name: 'bar.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo AS bla WHERE id IS NULL && ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'bla.',
            type: 'alias',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM foo AS bla WHERE id IS NULL OR ',
        ' AND 1 + 1 > 1',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'bla.',
            type: 'alias',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo AS bla WHERE id IS NULL || ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'bla.',
            type: 'alias',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bla',
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo bar WHERE NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bar',
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'bar.',
            type: 'alias',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo bar WHERE ! ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['BOOLEAN'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['BOOLEAN'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
                alias: 'bar',
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'bar.',
            type: 'alias',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'EXISTS', weight: -1},
        {value: 'NOT EXISTS', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE a', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'EXISTS', weight: -1},
        {value: 'NOT EXISTS', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE baa = 1 AND ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CASE', weight: 450},
        {value: 'EXISTS', weight: -1},
        {value: 'NOT', weight: -1},
        {value: 'NULL', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE ', ' AND baa = 1');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CASE', weight: 450},
        {value: 'EXISTS', weight: -1},
        {value: 'NOT', weight: -1},
        {value: 'NULL', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE baa = 1 OR ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CASE', weight: 450},
        {value: 'EXISTS', weight: -1},
        {value: 'NOT', weight: -1},
        {value: 'NULL', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE ', ' OR baa = 1');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CASE', weight: 450},
        {value: 'EXISTS', weight: -1},
        {value: 'NOT', weight: -1},
        {value: 'NULL', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql("SELECT * FROM testTable WHERE foo = 'bar' ", '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: 2},
        {value: '<', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT a, b, c, d, e FROM tableOne WHERE c >= 9998 an',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: 2},
        {value: '=', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tableOne',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tableOne',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql("SELECT * FROM testTable WHERE foo = 'bar' AND ", '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT a, b, \nc, \nd, ',
        "\ng,\nf\nFROM testTable WHERE a > 1 AND b = 'b' ORDER BY c;",
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'CASE', weight: 450},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT a,b, ', ' c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT ', ' a, b, c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT a ', ', b, c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: -1},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE ', " = 'bar' AND ");

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['STRING'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['STRING'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE a ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'BETWEEN', weight: 2},
        {value: 'NOT BETWEEN', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE a NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'BETWEEN', weight: -1},
        {value: 'EXISTS', weight: -1},
        {value: 'IN', weight: -1},
        {value: 'LIKE', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest values', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE a BETWEEN ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable WHERE a OR NOT EXISTS (', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT testTable.', ' FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT tt.', ' FROM testTable tt');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT tt.', ' FROM database_two.testTable tt');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'database_two',
                    },
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT tta.', ' FROM testTableA tta, testTableB ttb');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTableA',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT ttb.', ' FROM testTableA tta, testTableB ttb');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTableB',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable GROUP BY a ', ' LIMIT 10');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ORDER BY', weight: 2.5}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const notIncludedKeywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT', weight: -1}];
    expect(parseResult.suggestKeywords).not.toEqual(
        expect.arrayContaining(notIncludedKeywordSuggestions),
    );

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'testTable',
            },
            {
                name: 'a',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE bar ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'IN', weight: 2},
        {value: 'NOT IN', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    // TODO
    // expect(parseResult.suggestColRefKeywords).not.toHaveLength(0);

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'foo',
            },
            {
                name: 'bar',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE bar NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'IN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE bar IN (', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
        tables: [
            {
                identifierChain: [
                    {
                        name: 'foo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'foo',
            },
            {
                name: 'bar',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('select * from foo, bar where bar.bla in (', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
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
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'foo.',
            type: 'table',
        },
        {
            name: 'bar.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bla',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest values', () => {
    const parseResult = parseGenericSql("select * from foo, bar where bar.bla in ('a', ", '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['COLREF'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
        types: ['COLREF'],
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
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'foo.',
            type: 'table',
        },
        {
            name: 'bar.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const valuesSuggestions: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestions);

    const detailedColumnReference: DetailedColumnReference = {
        identifierChain: [
            {
                name: 'bar',
            },
            {
                name: 'bla',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(detailedColumnReference);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM foo WHERE bar IN (SELECT ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const tablesSuggestion: TablesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM bar WHERE foo NOT IN (SELECT ', ')');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const tablesSuggestion: TablesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM (', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('select * from (', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('select foo.* from (', ') foo');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM (SELECT ', '');

    // TODO: fix unhandled errors
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const tablesSuggestion: TablesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT "contains an even number" FROM t1, t2 AS ta2 WHERE EXISTS (SELECT t3.foo FROM t3 WHERE ',
        ' % 2 = 0',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        types: ['NUMBER'],
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 't1',
                    },
                ],
            },
            {
                identifierChain: [
                    {
                        name: 't2',
                    },
                ],
                alias: 'ta2',
            },
            {
                identifierChain: [
                    {
                        name: 't3',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 't1.',
            type: 'table',
        },
        {
            name: 'ta2.',
            type: 'alias',
        },
        {
            name: 't3.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 103,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 33,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 't1',
                },
            ],
            location: {
                first_column: 39,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 't2',
                },
            ],
            location: {
                first_column: 43,
                first_line: 1,
                last_column: 45,
                last_line: 1,
            },
            type: 'table',
        },
        {
            alias: 'ta2',
            identifierChain: [
                {
                    name: 't2',
                },
            ],
            location: {
                first_column: 49,
                first_line: 1,
                last_column: 52,
                last_line: 1,
            },
            source: 'table',
            type: 'alias',
        },
        {
            location: {
                first_column: 52,
                first_line: 1,
                last_column: 52,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 52,
                first_line: 1,
                last_column: 52,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 67,
                first_line: 1,
                last_column: 73,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 74,
                first_line: 1,
                last_column: 80,
                last_line: 1,
            },
            missing: false,
            subquery: true,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 't3',
                },
            ],
            location: {
                first_column: 74,
                first_line: 1,
                last_column: 76,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'foo',
                },
            ],
            location: {
                first_column: 77,
                first_line: 1,
                last_column: 80,
                last_line: 1,
            },
            qualified: true,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 't3',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 't3',
                },
            ],
            location: {
                first_column: 86,
                first_line: 1,
                last_column: 88,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 88,
                first_line: 1,
                last_column: 88,
                last_line: 1,
            },
            missing: true,
            subquery: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 88,
                first_line: 1,
                last_column: 88,
                last_line: 1,
            },
            missing: true,
            subquery: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest identifiers', () => {
    const parseResult = parseGenericSql(
        'SELECT ',
        ' FROM testTable tt, (SELECT bla FROM abc WHERE foo > 1) bar',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
                alias: 'tt',
            },
        ],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable',
                    },
                ],
                alias: 'tt',
            },
            {
                identifierChain: [
                    {
                        subQuery: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'tt.',
            type: 'alias',
        },
        {
            name: 'bar.',
            type: 'sub-query',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'bar',
            columns: [
                {
                    identifierChain: [
                        {
                            name: 'abc',
                        },
                        {
                            name: 'bla',
                        },
                    ],
                    type: 'COLREF',
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 67,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 7,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            missing: true,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'testTable',
                },
            ],
            location: {
                first_column: 14,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            type: 'table',
        },
        {
            alias: 'tt',
            identifierChain: [
                {
                    name: 'testTable',
                },
            ],
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 26,
                last_line: 1,
            },
            source: 'table',
            type: 'alias',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 29,
                first_line: 1,
                last_column: 35,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 36,
                first_line: 1,
                last_column: 39,
                last_line: 1,
            },
            missing: false,
            subquery: true,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'bla',
                },
            ],
            location: {
                first_column: 36,
                first_line: 1,
                last_column: 39,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'abc',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'abc',
                },
            ],
            location: {
                first_column: 45,
                first_line: 1,
                last_column: 48,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 49,
                first_line: 1,
                last_column: 62,
                last_line: 1,
            },
            missing: false,
            subquery: true,
            type: 'whereClause',
        },
        {
            identifierChain: [
                {
                    name: 'foo',
                },
            ],
            location: {
                first_column: 55,
                first_line: 1,
                last_column: 58,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'abc',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            location: {
                first_column: 62,
                first_line: 1,
                last_column: 62,
                last_line: 1,
            },
            missing: true,
            subquery: true,
            type: 'limitClause',
        },
        {
            alias: 'bar',
            location: {
                first_column: 64,
                first_line: 1,
                last_column: 67,
                last_line: 1,
            },
            source: 'subquery',
            type: 'alias',
        },
        {
            location: {
                first_column: 67,
                first_line: 1,
                last_column: 67,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 67,
                first_line: 1,
                last_column: 67,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'select ',
        ' from (select id i, name as n, bla from foo) bar',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'bar.',
            type: 'sub-query',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'bar',
            columns: [
                {
                    alias: 'i',
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'id',
                        },
                    ],
                    type: 'COLREF',
                },
                {
                    alias: 'n',
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'name',
                        },
                    ],
                    type: 'COLREF',
                },
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bla',
                        },
                    ],
                    type: 'COLREF',
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest sub-query columns', () => {
    const parseResult = parseGenericSql(
        'SELECT bar.',
        ' FROM (SELECT col1, col2, (col3 + 1) col3alias FROM foo) bar',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'bar',
            columns: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'col1',
                        },
                    ],
                    type: 'COLREF',
                },
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'col2',
                        },
                    ],
                    type: 'COLREF',
                },
                {
                    alias: 'col3alias',
                    type: 'NUMBER',
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest sub-query columns', () => {
    const parseResult = parseGenericSql(
        'SELECT bar.',
        ' FROM (SELECT b FROM foo) boo, (SELECT a FROM bla) bar',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'boo',
            columns: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'b',
                        },
                    ],
                    type: 'COLREF',
                },
            ],
        },
        {
            alias: 'bar',
            columns: [
                {
                    identifierChain: [
                        {
                            name: 'bla',
                        },
                        {
                            name: 'a',
                        },
                    ],
                    type: 'COLREF',
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest identifiers', () => {
    const parseResult = parseGenericSql(
        'SELECT cos(',
        ' FROM (SELECT b FROM foo) boo, (SELECT a FROM bla) bar',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'boo',
                    },
                ],
            },
            {
                identifierChain: [
                    {
                        subQuery: 'bar',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'boo.',
            type: 'sub-query',
        },
        {
            name: 'bar.',
            type: 'sub-query',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const udfArgumentPosition: UdfArgumentPosition = {
        name: 'cos',
        position: 1,
    };
    expect(parseResult.udfArgument).toEqual(udfArgumentPosition);

    const subQueries: SubQuery[] = [
        {
            alias: 'boo',
            columns: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'b',
                        },
                    ],
                    type: 'COLREF',
                },
            ],
        },
        {
            alias: 'bar',
            columns: [
                {
                    identifierChain: [
                        {
                            name: 'bla',
                        },
                        {
                            name: 'a',
                        },
                    ],
                    type: 'COLREF',
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM (SELECT ', ')');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const tablesSuggestion: TablesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependQuestionMark: true,
        prependFrom: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM (SELECT ',
        ' FROM tableOne) subQueryOne, someDb.tableTwo talias, (SELECT * FROM t3 JOIN t4 ON t3.id = t4.id) AS subQueryTwo;',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tableOne',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'tableOne',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT ',
        ' FROM (SELECT * FROM (SELECT * FROM tableOne) subQueryOne) subQueryTwo',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'subQueryTwo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'subQueryTwo.',
            type: 'sub-query',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'subQueryTwo',
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    subQuery: 'subQueryOne',
                                },
                            ],
                        },
                    ],
                },
            ],
            subQueries: [
                {
                    alias: 'subQueryOne',
                    columns: [
                        {
                            tables: [
                                {
                                    identifierChain: [
                                        {
                                            name: 'tableOne',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT ',
        ' FROM (SELECT * FROM (SELECT * FROM (SELECT * FROM tableOne) subQueryOne) subQueryTwo) subQueryThree',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'subQueryThree',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'subQueryThree.',
            type: 'sub-query',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'subQueryThree',
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    subQuery: 'subQueryTwo',
                                },
                            ],
                        },
                    ],
                },
            ],
            subQueries: [
                {
                    alias: 'subQueryTwo',
                    columns: [
                        {
                            tables: [
                                {
                                    identifierChain: [
                                        {
                                            subQuery: 'subQueryOne',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    subQueries: [
                        {
                            alias: 'subQueryOne',
                            columns: [
                                {
                                    tables: [
                                        {
                                            identifierChain: [
                                                {
                                                    name: 'tableOne',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM (SELECT ',
        ' FROM (SELECT * FROM (SELECT * FROM tableOne) subQueryOne) subQueryTwo) subQueryThree',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'subQueryTwo',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'subQueryTwo.',
            type: 'sub-query',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'subQueryTwo',
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    subQuery: 'subQueryOne',
                                },
                            ],
                        },
                    ],
                },
            ],
            subQueries: [
                {
                    alias: 'subQueryOne',
                    columns: [
                        {
                            tables: [
                                {
                                    identifierChain: [
                                        {
                                            name: 'tableOne',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM (SELECT * FROM (SELECT ',
        ' FROM (SELECT * FROM tableOne) subQueryOne) subQueryTwo) subQueryThree',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '*', weight: 10000},
        {value: 'ALL', weight: 2},
        {value: 'DISTINCT', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 'subQueryOne',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifiersSuggestion: IdentifierSuggestion[] = [
        {
            name: 'subQueryOne.',
            type: 'sub-query',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifiersSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 'subQueryOne',
            columns: [
                {
                    tables: [
                        {
                            identifierChain: [
                                {
                                    name: 'tableOne',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT s2.',
        ' FROM (SELECT a, bla FROM (SELECT a, b, abs(1) as bla FROM testTable) s1) s2;',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: '*', weight: 10000}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const columnsSuggestion: ColumnSuggestion = {
        source: 'select',
        tables: [
            {
                identifierChain: [
                    {
                        subQuery: 's2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const subQueries: SubQuery[] = [
        {
            alias: 's2',
            columns: [
                {
                    identifierChain: [
                        {
                            subQuery: 's1',
                        },
                        {
                            name: 'a',
                        },
                    ],
                    type: 'COLREF',
                },
                {
                    identifierChain: [
                        {
                            subQuery: 's1',
                        },
                        {
                            name: 'bla',
                        },
                    ],
                    type: 'COLREF',
                },
            ],
            subQueries: [
                {
                    alias: 's1',
                    columns: [
                        {
                            identifierChain: [
                                {
                                    name: 'testTable',
                                },
                                {
                                    name: 'a',
                                },
                            ],
                            type: 'COLREF',
                        },
                        {
                            identifierChain: [
                                {
                                    name: 'testTable',
                                },
                                {
                                    name: 'b',
                                },
                            ],
                            type: 'COLREF',
                        },
                        {
                            alias: 'bla',
                            type: 'UDFREF',
                            udfRef: 'abs',
                        },
                    ],
                },
            ],
        },
    ];
    expect(parseResult.subQueries).toEqual(subQueries);
});
