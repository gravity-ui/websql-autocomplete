import {expect, test} from '@jest/globals';

import {
    AggregateFunctionsSuggestion,
    ColumnSuggestion,
    DatabasesSuggestion,
    DetailedColumnReference,
    FiltersSuggestion,
    FunctionsSuggestion,
    GroupBysSuggestion,
    IdentifierLocation,
    IdentifierSuggestion,
    JoinsSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
    ParsedTable,
    SubQuery,
    TablesSuggestion,
    UdfArgumentPosition,
    ValuesSuggestion,
    parsePostgreSql,
    parsePostgreSqlWithoutCursor,
} from '../../../../index';

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT test_column_1, test_column, ', ' FROM test_table');

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
    const parseResult = parsePostgreSql(
        'SELECT test_column_1, test_column, SELECT, ',
        ' FROM test_table',
    );

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
});

test('should suggest tables and databases', () => {
    const parseResult = parsePostgreSql('SELECT * ', '');

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
    const parseResult = parsePostgreSql('SELECT * \r\n', '');

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
    const parseResult = parsePostgreSql('SELECT u.', '');

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestKeywords).toEqual(undefined);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT test_column_1, test_column_2 ', '');

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
    const parseResult = parsePostgreSql('SELECT test_column_1 as tc1, test_column_2 ', '');

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
    const parseResult = parsePostgreSql('SELECT * from test_table_1 as t1, test_table_2 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: 'AS',
            weight: 3,
        },
        {
            value: 'WHERE',
            weight: 2.7,
        },
        {
            value: 'GROUP BY',
            weight: 2.6,
        },
        {
            value: 'HAVING',
            weight: 2.5,
        },
        {
            value: 'ORDER BY',
            weight: 2.4,
        },
        {
            value: 'LIMIT',
            weight: 2.3,
        },
        {
            value: 'OFFSET',
            weight: 2.2,
        },
        {
            value: 'UNION',
            weight: 2.11,
        },
        {
            value: 'FULL JOIN',
            weight: 1,
        },
        {
            value: 'FULL OUTER JOIN',
            weight: 1,
        },
        {
            value: 'INNER JOIN',
            weight: 1,
        },
        {
            value: 'JOIN',
            weight: 1,
        },
        {
            value: 'LEFT JOIN',
            weight: 1,
        },
        {
            value: 'LEFT OUTER JOIN',
            weight: 1,
        },
        {
            value: 'RIGHT JOIN',
            weight: 1,
        },
        {
            value: 'RIGHT OUTER JOIN',
            weight: 1,
        },
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
    const parseResult = parsePostgreSql('SELECT * FR', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FROM', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlWithoutCursor('SELECT 4 / 2; ');
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlWithoutCursor('SELECT 4 DIV 2; ');
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlWithoutCursor(
        "SELECT test_column_2 NOT RLIKE 'test', test_column_2 NOT REGEXP 'test_2' FROM test_table; ",
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSqlWithoutCursor(
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
    const parseResult = parsePostgreSqlWithoutCursor(
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
    const parseResult = parsePostgreSql('SELECT ', '');

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
    const parseResult = parsePostgreSql('SELECT ', ';\n\nSELECT * FROM test_table;');

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
    const parseResult = parsePostgreSql('SELECT * FROM test_table;\n\nSELECT ', ';');

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
    const parseResult = parsePostgreSql('SELECT ', ';\n\nSELECT * FROM test_table t;');

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
    const parseResult = parsePostgreSql('SELECT * FROM test_table t;\n\nSELECT ', ';');

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
    const parseResult = parsePostgreSql('select ', ';');

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
    const parseResult = parsePostgreSql('SELECT ALL ', '');

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
    const parseResult = parsePostgreSql('SELECT DISTINCT ', '');

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
    const parseResult = parsePostgreSql('SELECT ', ' FROM test_table');

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
    const parseResult = parsePostgreSql('SELECT ', ' FROM test_table;');

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
    const parseResult = parsePostgreSql('SELECT ', ' AS t FROM test_table;');

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
    const parseResult = parsePostgreSql('SELECT ', ' test_column FROM test_table;');

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
    const parseResult = parsePostgreSql('SELECT test_column_1', ' AS c FROM test_table;');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT ', ' FROM test_table_1 t1, test_table_2;');

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
    const parseResult = parsePostgreSql('SELECT T1.', ' FROM test_table t1;');

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
    const parseResult = parsePostgreSql('SELECT t1.', ' FROM test_table T1;');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT test_column, ', ' FROM test_table');

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
    const parseResult = parsePostgreSql('SELECT test_column,', ' FROM test_table');

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
    const parseResult = parsePostgreSql('SELECT *, ', ' FROM test_table');

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
    const parseResult = parsePostgreSql('SELECT *,', ' FROM test_table');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT ', ' FROM ${test_variable};');

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
    const parseResult = parsePostgreSql('SELECT * FROM test_table WHERE ${some_variable} ', '');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSqlWithoutCursor(
        'SELECT row_number() OVER (PARTITION BY test_column) FROM test_table;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlWithoutCursor(
        'SELECT COUNT(DISTINCT test_column_1) OVER (PARTITION by test_column_2) FROM test_table;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should suggest analytical fun report errors', () => {
    const parseResult = parsePostgreSqlWithoutCursor(
        'SELECT COUNT(DISTINCT test_column_1) OVER (PARTITION by test_column_2) FROM test_table;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should suggest tables and databases', () => {
    const parseResult = parsePostgreSql('SELECT ', '');

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

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT row_number() ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT row_number() ', ' FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT row_number() ', ', b, c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT count(DISTINCT a) ', '');

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
    const parseResult = parsePostgreSql('SELECT count(DISTINCT a) ', ' FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT count(DISTINCT a) ', ', b, c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OVER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT row_number() OVER ( ', ' FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'PARTITION BY', weight: 2}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT row_number() OVER (PARTITION ', ' FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a, b ORDER ',
        ' FROM testTable',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT row_number() OVER (ORDER BY ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT row_number() OVER (ORDER BY ', ') FROM testTable');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY ',
        ' FROM testTable',
    );

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
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a, ',
        ' FROM testTable',
    );

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
    const parseResult = parsePostgreSql('SELECT row_number() OVER (PARTITION BY a ORDER BY b ', '');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2},
        {value: 'ROWS BETWEEN', weight: 1},
        {value: 'RANGE BETWEEN', weight: 1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED PRECEDING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'PRECEDING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'PRECEDING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ROW', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 PRECEDING ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AND', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED PRECEDING ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AND', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ROW ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'AND', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 PRECEDING AND ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED FOLLOWING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED PRECEDING AND ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED FOLLOWING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ROW AND ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'CURRENT ROW', weight: -1},
        {value: 'UNBOUNDED FOLLOWING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN 1 PRECEDING AND CURRENT ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ROW', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FOLLOWING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT row_number() OVER (PARTITION BY a ORDER BY b ROWS BETWEEN CURRENT ROW AND 1 ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FOLLOWING', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest tables', () => {
    const parseResult = parsePostgreSql('SELECT COUNT(*) ', '');

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
    const parseResult = parsePostgreSql('SELECT COUNT(foo ', '');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT COUNT(foo, ', ') FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT COUNT(foo, bl', ',bla) FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT COUNT(foo ', ', bar)');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns and values', () => {
    const parseResult = parsePostgreSql('SELECT COUNT(foo, bl = ', ',bla) FROM bar;');

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
    const parseResult = parsePostgreSql("SELECT bl = '", ' FROM bar;');

    expect(parseResult.errors).toBeUndefined();

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
    const parseResult = parsePostgreSql("SELECT bl = '", "' FROM bar;");

    expect(parseResult.errors).toBeUndefined();

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
    const parseResult = parsePostgreSql("SELECT bl = 'bl", " bl' FROM bar;");

    expect(parseResult.errors).toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT bl = "', ' FROM bar;');

    expect(parseResult.errors).toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT bl = "', '" FROM bar;');

    expect(parseResult.errors).toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT bl = "bl', ' bl" FROM bar;');

    expect(parseResult.errors).toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT CAST(', '');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT CAST(', ' FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT CAST(bla', ' FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT CAST(', ' AS FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT CAST(', ' AS INT FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT CAST(', ' AS STRING) FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT CAST(bla', ' AS STRING) FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT CAST(bla ', '');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: 2},
        {value: 'AND', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT CAST(bla ', ' FROM bar;');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: 2},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('select cast(bla as ', '');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT CAST(bla AS ', ' FROM bar;');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT CAST(bla AS ST', ') FROM bar;');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT CAST(AS ', '');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INT', weight: -1},
        {value: 'STRING', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should not report errors for', () => {
    const parseResult = parsePostgreSql('SELECT db.customUdf(col) FROM bar;', '');

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
    const parseResult = parsePostgreSql('SELECT db.customUdf(', ' FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT db.customUdf(1, ', ' FROM bar;');

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
    const parseResult = parsePostgreSql('SELECT AVG(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT COUNT(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT STDDEV_POP(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT STDDEV_SAMP(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT SUM(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT MAX(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT MIN(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT VAR_POP(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT var_samp(', ') FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT id, SUM(a * ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN a = b AND ', ' THEN FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE a = b AND ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE a = b ', ' FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WHEN', weight: -1},
        {value: 'AND', weight: -1},
        {value: '<>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT CASE WHEN a = b OR ', ' THEN boo FROM testTable');

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
    const parseResult = parsePostgreSql(
        'SELECT CASE WHEN a = b OR c THEN boo OR ',
        ' FROM testTable',
    );

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
    const parseResult = parsePostgreSql('SELECT CASE a =', ' WHEN c THEN d END FROM testTable');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT CASE a = c WHEN c THEN d ', ' FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'END', weight: 3},
        {value: '<>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT CASE a = c WHEN c THEN d=', ' ELSE FROM testTable');

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
    const parseResult = parsePostgreSql(
        'SELECT CASE a = c WHEN c THEN d=1 ',
        ' bla=foo FROM testTable',
    );

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
    const parseResult = parsePostgreSql(
        'SELECT CASE a = c WHEN c THEN d=1 ',
        ' bla=foo FROM testTable',
    );

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: 'WHEN', weight: 1},
        {value: 'ELSE', weight: 2},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT CASE a = c WHEN c THEN d ELSE ', ' FROM testTable');

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
    const parseResult = parsePostgreSql(
        'SELECT CASE a = c WHEN c THEN d ELSE e AND ',
        ' FROM testTable',
    );

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
    const parseResult = parsePostgreSql('SELECT CASE ELSE ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE ', ' ELSE a FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE ', ' ELSE FROM testTable');

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
    const parseResult = parsePostgreSql(
        'SELECT CASE a = c WHEN c THEN d ELSE e ',
        ' FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'END', weight: -1},
        {value: '=', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN THEN boo OR ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE ', ' a = b THEN FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT CASE ', ' a = b THEN boo FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WHEN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT CASE ', ' THEN boo FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN ', ' boo FROM testTable');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
        'SELECT CASE a WHEN b THEN c WHEN ',
        ' boo ELSE c FROM testTable',
    );

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
        'SELECT CASE a WHEN b THEN c ',
        ' WHEN d THEN e END FROM testTable',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WHEN', weight: -1},
        {value: '<', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT CASE a WHEN b THEN c ', ' FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WHEN', weight: 1},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN ', ' THEN FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN ', ' = a FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN ab', ' THEN bla ELSE foo FROM testTable');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT CASE WHEN ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE a WHEN ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN a = ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN a = b ', ' FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: -1},
        {value: 'THEN', weight: -1},
        {value: '<', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT CASE a = c WHEN c ', ' d FROM testTable');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'THEN', weight: -1},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT CASE a = c WHEN c THEN ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE a = c WHEN c THEN ', ' g FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN THEN ', ' g FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT CASE WHEN THEN ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT "boo \\" baa" = ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'CASE', weight: 450}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const functionsSuggestion: FunctionsSuggestion = {
        types: ['STRING'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);
});

test('should suggest identifiers', () => {
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE id =', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE -', '');

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
    const parseResult = parsePostgreSql('SELECT -', ' FROM testTable WHERE id = 1;');

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
    const parseResult = parsePostgreSql('SELECT 1 < ', ' FROM testTable WHERE id = 1;');

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
    const parseResult = parsePostgreSql('select foo from tbl where ', ' % 2 = 0');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE -id = ', '');

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
    const parseResult = parsePostgreSql('SELECT greatest(1, 2, a, 4, ', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT greatest(1, ', ', a, 4) FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT ', ' > id FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE ', ' = id');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d >= ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d < ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d <= ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d <=> ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d <> ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d >= ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d > ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d != ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d + 1 != ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE bla', ' + 1 != 3');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d + ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d - ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d * ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d / ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d % ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d | ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d & ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE d ^ ', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE ~', '');

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
    const parseResult = parsePostgreSql('SELECT a, b, c FROM testTable WHERE -', '');

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
    const parseResult = parsePostgreSql(
        'SELECT a, b, c FROM testTable WHERE d ',
        " RLIKE 'bla bla'",
    );

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '<', weight: 2},
        {value: 'IN', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT bar FROM foo WHERE id = 1 ', '');

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
            value: 'OFFSET',
            weight: 2.2,
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
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE id <=> 1 ', '');

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
            value: 'OFFSET',
            weight: 2.2,
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
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE id IS ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE id IS NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'NULL', weight: -1},
        {value: 'FALSE', weight: -1},
        {value: 'TRUE', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE id IS ', ' NULL');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'NOT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE id IS ', ' FALSE');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'NOT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE id IS ', ' TRUE');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'NOT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE id LIKE ', '');

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
    const parseResult = parsePostgreSql("SELECT * FROM foo WHERE id LIKE ('bla bla') ", '');

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
    const parseResult = parsePostgreSql('SELECT * FROM foo bla, bar WHERE id IS NULL AND ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM foo AS bla WHERE id IS NULL && ', '');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT * FROM foo AS bla WHERE id IS NULL || ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM foo bar WHERE NOT ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM foo bar WHERE ! ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE a', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE baa = 1 AND ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE ', ' AND baa = 1');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE baa = 1 OR ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE ', ' OR baa = 1');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE NOT ', '');

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
    const parseResult = parsePostgreSql("SELECT * FROM testTable WHERE foo = 'bar' ", '');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql("SELECT * FROM testTable WHERE foo = 'bar' AND ", '');

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql('SELECT a,b, ', ' c FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT ', ' a, b, c FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT a ', ', b, c FROM testTable');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'AS', weight: -1},
        {value: '>', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE ', " = 'bar' AND ");

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE a ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'BETWEEN', weight: 2},
        {value: 'NOT BETWEEN', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE a NOT ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE a BETWEEN ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable WHERE a OR NOT EXISTS (', '');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest columns', () => {
    const parseResult = parsePostgreSql('SELECT testTable.', ' FROM testTable');

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
    const parseResult = parsePostgreSql('SELECT tt.', ' FROM testTable tt');

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
    const parseResult = parsePostgreSql('SELECT tt.', ' FROM database_two.testTable tt');

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
    const parseResult = parsePostgreSql('SELECT tta.', ' FROM testTableA tta, testTableB ttb');

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
    const parseResult = parsePostgreSql('SELECT ttb.', ' FROM testTableA tta, testTableB ttb');

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
    const parseResult = parsePostgreSql('SELECT * FROM testTable GROUP BY a ', ' LIMIT 10');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ORDER BY', weight: 2.5}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const notIncludedKeywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT', weight: -1}];
    expect(parseResult.suggestKeywords).not.toEqual(
        expect.arrayContaining(notIncludedKeywordSuggestions),
    );

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE bar ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'IN', weight: 2},
        {value: 'NOT IN', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    expect(parseResult.suggestColRefKeywords).not.toBeUndefined();

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
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE bar NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'IN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE bar IN (', '');

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
    const parseResult = parsePostgreSql('select * from foo, bar where bar.bla in (', '');

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
    const parseResult = parsePostgreSql("select * from foo, bar where bar.bla in ('a', ", '');

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
    const parseResult = parsePostgreSql('SELECT * FROM foo WHERE bar IN (SELECT ', '');

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
    const parseResult = parsePostgreSql('SELECT * FROM bar WHERE foo NOT IN (SELECT ', ')');

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
    const parseResult = parsePostgreSql('SELECT * FROM (', '');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('select * from (', '');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql('select foo.* from (', ') foo');

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest tables', () => {
    const parseResult = parsePostgreSql('SELECT * FROM (SELECT ', '');

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
    const parseResult = parsePostgreSql(
        'SELECT "contains an even number" FROM t1, t2 AS ta2 WHERE EXISTS (SELECT t3.foo FROM t3 WHERE ',
        ' % 2 = 0',
    );

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
        'SELECT cos(',
        ' FROM (SELECT b FROM foo) boo, (SELECT a FROM bla) bar',
    );

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
    const parseResult = parsePostgreSql('SELECT * FROM (SELECT ', ')');

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
    const parseResult = parsePostgreSql(
        'SELECT * FROM (SELECT ',
        ' FROM tableOne) subQueryOne, someDb.tableTwo talias, (SELECT * FROM t3 JOIN t4 ON t3.id = t4.id) AS subQueryTwo;',
    );

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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
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
    const parseResult = parsePostgreSql(
        'SELECT s2.',
        ' FROM (SELECT a, bla FROM (SELECT a, b, abs(1) as bla FROM testTable) s1) s2;',
    );

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
