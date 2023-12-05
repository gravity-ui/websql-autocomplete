import {expect, test} from '@jest/globals';

import {
    ColumnSuggestion,
    DatabasesSuggestion,
    FiltersSuggestion,
    GroupBysSuggestion,
    IdentifierSuggestion,
    JoinConditionsSuggestion,
    JoinsSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
    TablesSuggestion,
    parseGenericSql,
} from '../../../../index';

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT t1.testTableColumn1, t2.testTableColumn3 FROM testTable1 t1 JOIN testTable2 t2 ON t1.',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable1',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT t1.testTableColumn1, t2.testTableColumn3 FROM database_two.testTable1 t1 JOIN testTable2 t2 ON t1.',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'database_two',
                    },
                    {
                        name: 'testTable1',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest joins', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table JOIN ', '');

    expect(parseResult.errors).toBeUndefined();

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: false,
        joinType: 'JOIN',
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
    expect(parseResult.suggestJoins).toEqual(joinsSuggestion);

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest joins', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 JOIN testTable2 JOIN ', '');

    expect(parseResult.errors).toBeUndefined();

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: false,
        joinType: 'JOIN',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable1',
                    },
                ],
            },
            {
                identifierChain: [
                    {
                        name: 'testTable2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestJoins).toEqual(joinsSuggestion);

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table INNER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {
            value: 'JOIN',
            weight: -1,
        },
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table FULL ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'JOIN', weight: -1},
        {value: 'OUTER JOIN', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 FULL OUTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'JOIN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 LEFT ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'JOIN', weight: -1},
        {value: 'OUTER JOIN', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 LEFT OUTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'JOIN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 RIGHT ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'JOIN', weight: -1},
        {value: 'OUTER JOIN', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 RIGHT OUTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'JOIN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 JOIN db1.', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        identifierChain: [
            {
                name: 'db1',
            },
        ],
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 JOIN db1.', ' JOIN foo');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        identifierChain: [
            {
                name: 'db1',
            },
        ],
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);
});

test('should suggest join conditions', () => {
    const parseResult = parseGenericSql('SELECT testTable1.* FROM testTable1 JOIN testTable2 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ON', weight: 3}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tables = [
        {
            identifierChain: [
                {
                    name: 'testTable1',
                },
            ],
        },
        {
            identifierChain: [
                {
                    name: 'testTable2',
                },
            ],
        },
    ];

    const joinConditionsSuggestion: JoinConditionsSuggestion = {
        prependOn: true,
        tables,
    };
    expect(parseResult.suggestJoinConditions).toEqual(joinConditionsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        prefix: 'WHERE',
        tables,
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);

    const groupBysSuggestions: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables,
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);

    const orderBysSuggestions: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables,
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestions);
});

test('should suggest join conditions', () => {
    const parseResult = parseGenericSql(
        'SELECT testTable1.* FROM testTable1 JOIN testTable2 ON ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const tables = [
        {
            identifierChain: [
                {
                    name: 'testTable1',
                },
            ],
        },
        {
            identifierChain: [
                {
                    name: 'testTable2',
                },
            ],
        },
    ];

    const columnsSuggestion: ColumnSuggestion = {
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const joinConditionsSuggestion: JoinConditionsSuggestion = {
        prependOn: false,
        tables,
    };
    expect(parseResult.suggestJoinConditions).toEqual(joinConditionsSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 'testTable1.',
            type: 'table',
        },
        {
            name: 'testTable2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT testTable1.* FROM testTable1 JOIN testTable2 ON (',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable1',
                    },
                ],
            },
            {
                identifierChain: [
                    {
                        name: 'testTable2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 'testTable1.',
            type: 'table',
        },
        {
            name: 'testTable2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT testTable1.* FROM testTable1 JOIN testTable2 ON (testTable1.testColumn1 = testTable2.testColumn3 AND ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable1',
                    },
                ],
            },
            {
                identifierChain: [
                    {
                        name: 'testTable2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 'testTable1.',
            type: 'table',
        },
        {
            name: 'testTable2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT testTable1.* FROM testTable1 JOIN testTable2 ON (',
        ' AND testTable1.testColumn1 = testTable2.testColumn3',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable1',
                    },
                ],
            },
            {
                identifierChain: [
                    {
                        name: 'testTable2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 'testTable1.',
            type: 'table',
        },
        {
            name: 'testTable2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT testTable1.* FROM testTable1 JOIN testTable2 ON (testTable1.testColumn1 = testTable2.testColumn3 AND testTable1.',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'testTable1',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT t1.* FROM table1 t1 ', ' JOIN');

    expect(parseResult.errors).toBeUndefined();

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: true,
        tables: [
            {
                alias: 't1',
                identifierChain: [
                    {
                        name: 'table1',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestJoins).toEqual(joinsSuggestion);

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'FULL', weight: -1},
        {value: 'FULL OUTER', weight: -1},
        {value: 'INNER', weight: -1},
        {value: 'LEFT', weight: -1},
        {value: 'LEFT OUTER', weight: -1},
        {value: 'RIGHT', weight: -1},
        {value: 'RIGHT OUTER', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT t1.* FROM table1 t1 JOIN table2 t2 ',
        ' JOIN table3',
    );

    expect(parseResult.errors).toBeUndefined();

    const joinConditionsSuggestion: JoinConditionsSuggestion = {
        prependOn: true,
        tables: [
            {
                alias: 't1',
                identifierChain: [
                    {
                        name: 'table1',
                    },
                ],
            },
            {
                alias: 't2',
                identifierChain: [
                    {
                        name: 'table2',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestJoinConditions).toEqual(joinConditionsSuggestion);

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'ON', weight: 3},
        {value: 'FULL', weight: -1},
        {value: 'FULL OUTER', weight: -1},
        {value: 'INNER', weight: -1},
        {value: 'LEFT', weight: -1},
        {value: 'LEFT OUTER', weight: -1},
        {value: 'RIGHT', weight: -1},
        {value: 'RIGHT OUTER', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT t1.* FROM table1 t1 FULL ', ' JOIN');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OUTER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT t1.* FROM table1 t1 RIGHT ', ' JOIN');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OUTER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest joins', () => {
    const parseResult = parseGenericSql('SELECT * FROM testTable1 ', '');

    expect(parseResult.errors).toBeUndefined();

    const tables = [
        {
            identifierChain: [
                {
                    name: 'testTable1',
                },
            ],
        },
    ];

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: true,
        tables,
    };
    expect(parseResult.suggestJoins).toEqual(joinsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        prefix: 'WHERE',
        tables,
    };
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);

    const groupBysSuggestions: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables,
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);

    const orderBysSuggestions: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables,
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestions);
});
