import {expect, test} from '@jest/globals';

import {
    ColumnsSuggestion,
    DatabasesSuggestion,
    FiltersSuggestion,
    GroupBysSuggestion,
    IdentifierSuggestion,
    JoinConditionsSuggestion,
    JoinsSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
    Table,
    TablesSuggestion,
    parseGenericSql,
} from '../../../../index';

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT t1.test_column_1, t2.test_column_3 FROM test_table_1 t1 JOIN test_table_2 t2 ON t1.',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table_1',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT t1.test_column_1, t2.test_column_3 FROM test_database.test_table_1 t1 JOIN test_table_2 t2 ON t1.',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnsSuggestion = {
        tables: [
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
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 JOIN test_table_2 JOIN ', '');

    expect(parseResult.errors).toBeUndefined();

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: false,
        joinType: 'JOIN',
        tables: [
            {
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

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'JOIN', weight: -1},
        {value: 'OUTER JOIN', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 FULL OUTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'JOIN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 LEFT ', '');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'JOIN', weight: -1},
        {value: 'OUTER JOIN', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 LEFT OUTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'JOIN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 RIGHT ', '');

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'JOIN', weight: -1},
        {value: 'OUTER JOIN', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 RIGHT OUTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'JOIN', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 JOIN test_database.', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        identifierChain: [
            {
                name: 'test_database',
            },
        ],
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM test_table_1 JOIN test_database.',
        ' JOIN foo',
    );

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        identifierChain: [
            {
                name: 'test_database',
            },
        ],
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);
});

test('should suggest join conditions', () => {
    const parseResult = parseGenericSql(
        'SELECT test_table_1.* FROM test_table_1 JOIN test_table_2 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'ON', weight: 3}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));

    const tables: Table[] = [
        {
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
        'SELECT test_table_1.* FROM test_table_1 JOIN test_table_2 ON ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const tables: Table[] = [
        {
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

    const columnsSuggestion: ColumnsSuggestion = {
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
            name: 'test_table_1.',
            type: 'table',
        },
        {
            name: 'test_table_2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT test_table_1.* FROM test_table_1 JOIN test_table_2 ON (',
        '',
    );

    const columnsSuggestion: ColumnsSuggestion = {
        tables: [
            {
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
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 'test_table_1.',
            type: 'table',
        },
        {
            name: 'test_table_2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT test_table_1.* FROM test_table_1 JOIN test_table_2 ON (test_table_1.test_column_1 = test_table_2.test_column_3 AND ',
        '',
    );

    const columnsSuggestion: ColumnsSuggestion = {
        tables: [
            {
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
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 'test_table_1.',
            type: 'table',
        },
        {
            name: 'test_table_2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT test_table_1.* FROM test_table_1 JOIN test_table_2 ON (',
        ' AND test_table_1.test_column_1 = test_table_2.test_column_3',
    );

    const columnsSuggestion: ColumnsSuggestion = {
        tables: [
            {
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
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

    const identifierSuggestion: IdentifierSuggestion[] = [
        {
            name: 'test_table_1.',
            type: 'table',
        },
        {
            name: 'test_table_2.',
            type: 'table',
        },
    ];
    expect(parseResult.suggestIdentifiers).toEqual(identifierSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT test_table_1.* FROM test_table_1 JOIN test_table_2 ON (test_table_1.test_column_1 = test_table_2.test_column_3 AND test_table_1.',
        '',
    );

    const columnsSuggestion: ColumnsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table_1',
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
        'SELECT t1.* FROM test_table_1 t1 JOIN test_table_2 t2 ',
        ' JOIN test_table_3',
    );

    expect(parseResult.errors).toBeUndefined();

    const joinConditionsSuggestion: JoinConditionsSuggestion = {
        prependOn: true,
        tables: [
            {
                alias: 't1',
                identifierChain: [
                    {
                        name: 'test_table_1',
                    },
                ],
            },
            {
                alias: 't2',
                identifierChain: [
                    {
                        name: 'test_table_2',
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
    const parseResult = parseGenericSql('SELECT t1.* FROM test_table_1 t1 FULL ', ' JOIN');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OUTER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT t1.* FROM test_table_1 t1 RIGHT ', ' JOIN');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'OUTER', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest joins', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table_1 ', '');

    expect(parseResult.errors).toBeUndefined();

    const tables: Table[] = [
        {
            identifierChain: [
                {
                    name: 'test_table_1',
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
