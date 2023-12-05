import {expect, test} from '@jest/globals';

import {
    AggregateFunctionsSuggestion,
    ColumnSuggestion,
    DatabasesSuggestion,
    FiltersSuggestion,
    FunctionsSuggestion,
    GroupBysSuggestion,
    IdentifierLocation,
    IdentifierSuggestion,
    JoinsSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
    ParsedTable,
    TablesSuggestion,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';

// TODO: remove
test('should', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        prefix: 'WHERE',
        tables,
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
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

    const groupBysSuggestions: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables,
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: true,
        tables,
    };
    expect(parseResult.suggestJoins).toEqual(joinsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT test_column_1, test_column, ', ' FROM test_table');

    expect(parseResult.errors).toBeUndefined();

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

// TODO: fix
// test('should suggest columns', () => {
//     const parseResult = parseGenericSql('SELECT test_column_1, test_column, SELECT, ', ' FROM test_table');
//
//     expect(parseResult.errors).toBeUndefined();
//
//     const tables: Table[] = [
//         {
//             identifierChain: [
//                 {
//                     name: 'test_table',
//                 },
//             ],
//         },
//     ];
//
//     const functionsSuggestions: FunctionsSuggestion = {};
//     expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);
//
//     const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
//         tables: tables,
//     };
//     expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);
//
//     expect(parseResult.suggestAnalyticFunctions).toEqual(true);
//
//     const columnSuggestion: ColumnSuggestion = {
//         source: 'select',
//         tables: [
//             {
//                 identifierChain: [
//                     {
//                         name: 'test_table',
//                     },
//                 ],
//             },
//         ],
//     };
//     expect(parseResult.suggestColumns).toEqual(columnSuggestion);
// });

test('should suggest tables and databases', () => {
    const parseResult = parseGenericSql('SELECT * ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FROM', weight: -1}];
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

test('should suggest tables and databases', () => {
    const parseResult = parseGenericSql('SELECT * \r\n', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FROM', weight: -1}];
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

test('should not suggest anything', () => {
    const parseResult = parseGenericSql('SELECT u.', '');

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestKeywords).toEqual(undefined);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT test_column_1, test_column_2 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'FROM', weight: -1},
        {value: '+', weight: -1},
        {value: 'DIV', weight: -1},
        {value: 'AS', weight: -1},
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
    const parseResult = parseGenericSql('SELECT test_column_1 as tc1, test_column_2 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'FROM', weight: -1},
        {value: '+', weight: -1},
        {value: 'DIV', weight: -1},
        {value: 'AS', weight: -1},
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
    const parseResult = parseGenericSql('SELECT * from test_table_1 as t1, test_table_2 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: 3},
        {value: 'WHERE', weight: 2.7},
        {value: 'GROUP BY', weight: 2.6},
        {value: 'HAVING', weight: 2.5},
        {value: 'ORDER BY', weight: 2.4},
        {value: 'LIMIT', weight: 2.3},
        {value: 'UNION', weight: 2.11},
        {value: 'FULL JOIN', weight: 1},
        {value: 'FULL OUTER JOIN', weight: 1},
        {value: 'INNER JOIN', weight: 1},
        {value: 'JOIN', weight: 1},
        {value: 'LEFT JOIN', weight: 1},
        {value: 'LEFT OUTER JOIN', weight: 1},
        {value: 'RIGHT JOIN', weight: 1},
        {value: 'RIGHT OUTER JOIN', weight: 1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const tables: ParsedTable[] = [
        {
            alias: 't1',
            identifierChain: [
                {
                    name: 'test_table_1',
                },
            ],
        },
        {
            identifierChain: [
                {
                    name: 'test_table_2',
                },
            ],
        },
    ];

    const filtersSuggestion: FiltersSuggestion = {
        prefix: 'WHERE',
        tables,
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables,
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const groupBysSuggestions: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables,
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: true,
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table_2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestJoins).toEqual(joinsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FR', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FROM', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor('SELECT 4 / 2; ');
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor('SELECT 4 DIV 2; ');
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        "SELECT test_column_2 NOT RLIKE 'test', test_column_2 NOT REGEXP 'test_2' FROM test_table; ",
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT * FROM test_table limit ${limit=20}; ',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT IF(test_column_1, test_column_2, test_column_2) AS b, ',
        ' FROM test_table',
    );

    expect(parseResult.errors).toBeUndefined();

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT IF(test_column_1 > 1, test_column_2, test_column_2) AS b, ',
        ' FROM test_table',
    );

    expect(parseResult.errors).toBeUndefined();

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT test_function(not test_column), cos(-1), sin(1+test_column) FROM test_table;',
    );

    expect(parseResult.errors).toBeUndefined();

    const statementParts: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 83,
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
                last_column: 67,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            function: 'test_function',
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 20,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                text: 'not test_column',
                types: ['BOOLEAN'],
            },
            function: 'test_function',
            identifierChain: [
                {
                    name: 'test_function',
                },
            ],
            location: {
                first_column: 22,
                first_line: 1,
                last_column: 37,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            identifierChain: [
                {
                    name: 'test_column',
                },
            ],
            location: {
                first_column: 26,
                first_line: 1,
                last_column: 37,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'test_table',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            function: 'cos',
            location: {
                first_column: 40,
                first_line: 1,
                last_column: 42,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                text: '- 1',
                types: ['NUMBER'],
            },
            function: 'cos',
            identifierChain: [
                {
                    name: 'cos',
                },
            ],
            location: {
                first_column: 44,
                first_line: 1,
                last_column: 46,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            function: 'sin',
            location: {
                first_column: 49,
                first_line: 1,
                last_column: 51,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                text: '1 + test_column',
                types: ['NUMBER'],
            },
            function: 'sin',
            identifierChain: [
                {
                    name: 'sin',
                },
            ],
            location: {
                first_column: 53,
                first_line: 1,
                last_column: 66,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            identifierChain: [
                {
                    name: 'test_column',
                },
            ],
            location: {
                first_column: 55,
                first_line: 1,
                last_column: 66,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'test_table',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 73,
                first_line: 1,
                last_column: 83,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 83,
                first_line: 1,
                last_column: 83,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 83,
                first_line: 1,
                last_column: 83,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(statementParts);
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT count(*), t.count, avg(id), avg FROM test_table t;',
    );

    expect(parseResult.errors).toBeUndefined();

    const statementParts: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 57,
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
                last_column: 39,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            function: 'count',
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 12,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                text: '*',
            },
            function: 'count',
            identifierChain: [
                {
                    name: 'count',
                },
            ],
            location: {
                first_column: 14,
                first_line: 1,
                last_column: 15,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 18,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'count',
                },
            ],
            location: {
                first_column: 20,
                first_line: 1,
                last_column: 25,
                last_line: 1,
            },
            qualified: true,
            tables: [
                {
                    alias: 't',
                    identifierChain: [
                        {
                            name: 'test_table',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            function: 'avg',
            location: {
                first_column: 27,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                columnReference: [
                    {
                        name: 'id',
                    },
                ],
                types: ['COLREF'],
            },
            function: 'avg',
            identifierChain: [
                {
                    name: 'avg',
                },
            ],
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 33,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            identifierChain: [
                {
                    name: 'id',
                },
            ],
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 33,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    alias: 't',
                    identifierChain: [
                        {
                            name: 'test_table',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'avg',
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
                    alias: 't',
                    identifierChain: [
                        {
                            name: 'test_table',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 45,
                first_line: 1,
                last_column: 55,
                last_line: 1,
            },
            type: 'table',
        },
        {
            alias: 't',
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 56,
                first_line: 1,
                last_column: 57,
                last_line: 1,
            },
            source: 'table',
            type: 'alias',
        },
        {
            location: {
                first_column: 57,
                first_line: 1,
                last_column: 57,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 57,
                first_line: 1,
                last_column: 57,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(statementParts);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT ', ';\n\nSELECT * FROM test_table;');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table;\n\nSELECT ', ';');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT ', ';\n\nSELECT * FROM test_table t;');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table t;\n\nSELECT ', ';');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest even with lower case', () => {
    const parseResult = parseGenericSql('select ', ';');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT ALL ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const notIncludedKeywordSuggestions: KeywordSuggestion[] = [
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).not.toEqual(
        expect.arrayContaining(notIncludedKeywordSuggestions),
    );

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT DISTINCT ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    expect(parseResult.suggestColumns).toEqual(undefined);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const notIncludedKeywordSuggestions: KeywordSuggestion[] = [
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).not.toEqual(
        expect.arrayContaining(notIncludedKeywordSuggestions),
    );

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT ', ' FROM test_table');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const statementParts: IdentifierLocation[] = [
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
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 14,
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
    expect(parseResult.locations).toEqual(statementParts);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT ', ' FROM test_table;');

    expect(parseResult.errors).toBeUndefined();

    const tables = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT ', ' AS t FROM test_table;');

    expect(parseResult.errors).toBeUndefined();

    const tables = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT ', ' test_column FROM test_table;');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: '*',
            weight: 10000,
        },
        {
            value: 'ALL',
            weight: 2,
        },
        {
            value: 'DISTINCT',
            weight: 2,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT test_column_1', ' AS c FROM test_table;');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    expect(parseResult.suggestKeywords).toEqual(undefined);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT (test_column_1',
        ' AND test_column_2) FROM test_table;',
    );

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest aliases', () => {
    const parseResult = parseGenericSql('SELECT ', ' FROM test_table_1 t1, test_table_2;');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables = [
        {
            alias: 't1',
            identifierChain: [
                {
                    name: 'test_table_1',
                },
            ],
        },
        {
            identifierChain: [
                {
                    name: 'test_table_2',
                },
            ],
        },
    ];

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 't1.',
            type: 'alias',
        },
        {
            name: 'test_table_2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test("should suggest columns even if alias case doesn't match", () => {
    const parseResult = parseGenericSql('SELECT T1.', ' FROM test_table t1;');

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test("should suggest columns even if alias case doesn't match", () => {
    const parseResult = parseGenericSql('SELECT t1.', ' FROM test_table T1;');

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT ',
        ' FROM test_database.test_table_1, test_database.test_table_2',
    );

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_database',
                },
                {
                    name: 'test_table_1',
                },
            ],
        },
        {
            identifierChain: [
                {
                    name: 'test_database',
                },
                {
                    name: 'test_table_2',
                },
            ],
        },
    ];
    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT test_column, ', ' FROM test_table');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];
    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT test_column,', ' FROM test_table');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];
    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT *, ', ' FROM test_table');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];
    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT *,', ' FROM test_table');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];
    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT ',
        " test_column_1, cast(test_column_2 as int), test_column_3, test_column_4 FROM test_table WHERE test_column_1 = 'US' AND test_column_2 >= 998 ORDER BY test_column_3 DESC LIMIT 15",
    );

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];
    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT ', ' FROM ${test_variable};');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const tables: ParsedTable[] = [
        {
            identifierChain: [
                {
                    name: '${test_variable}',
                },
            ],
        },
    ];
    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables,
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const columnSuggestion: ColumnSuggestion = {
        source: 'select',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table WHERE ${some_variable} ', '');

    expect(parseResult.errors).toBeUndefined();

    const tables = [
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
        },
    ];

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables,
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const groupBysSuggestions: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables,
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM test_table WHERE ${some_variable} + 1 = ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
        source: 'where',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
        types: ['NUMBER'],
    };
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const functionsSuggestions: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT row_number() OVER (PARTITION BY test_column) FROM test_table;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT COUNT(DISTINCT test_column_1) OVER (PARTITION by test_column_2) FROM test_table;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should suggest analytical fun report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT COUNT(DISTINCT test_column_1) OVER (PARTITION by test_column_2) FROM test_table;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should suggest tables and databases', () => {
    const parseResult = parseGenericSql('SELECT ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        prependFrom: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        prependFrom: true,
        appendDot: true,
        prependQuestionMark: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const aggregateFunctionsSuggestions: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestions);

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);
});
