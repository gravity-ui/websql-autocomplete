import {expect, test} from '@jest/globals';

import {
    ColRef,
    ColumnSuggestion,
    DatabasesSuggestion,
    FiltersSuggestion,
    FunctionsSuggestion,
    KeywordSuggestion,
    ParserSyntaxError,
    StatementPart,
    TablesSuggestion,
    ValuesSuggestion,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';

test('should suggest UPDATE', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'UPDATE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SET', () => {
    const parseResult = parseGenericSql('UPDATE test_table ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SET', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest WHERE', () => {
    const parseResult = parseGenericSql(
        'UPDATE test_table SET test_column_1=1, test_column_2=2 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'WHERE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest equal sign', () => {
    const parseResult = parseGenericSql('UPDATE test_table SET test_column ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: '=', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest databases or table', () => {
    const parseResult = parseGenericSql('UPDATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest databases or table midway', () => {
    const parseResult = parseGenericSql('UPDATE test_ta', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables after database', () => {
    const parseResult = parseGenericSql('UPDATE test_database.', '');

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

test('should suggest tables midway after database', () => {
    const parseResult = parseGenericSql('UPDATE test_database.test_ta', '');

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

test('should suggest columns', () => {
    const parseResult = parseGenericSql('UPDATE test_database.test_table SET ', '');

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns after comma', () => {
    const parseResult = parseGenericSql(
        'UPDATE test_database.test_table SET test_column_1=1, test_column_2=2, ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest columns, functions, filters, keywords after WHERE', () => {
    const parseResult = parseGenericSql(
        'UPDATE test_database.test_table SET test_column_1=1 WHERE ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
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
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXISTS', weight: -1},
        {value: 'NOT EXISTS', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest columns, functions, values, keywords, colRef after equal sign', () => {
    const parseResult = parseGenericSql(
        'UPDATE test_database.test_table SET test_column_1=1 WHERE test_column_2 = ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
        types: ['COLREF'],
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const functionsSuggestion: FunctionsSuggestion = {types: ['COLREF']};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const valuesSuggestion: ValuesSuggestion = {};
    expect(parseResult.suggestValues).toEqual(valuesSuggestion);

    const keywordSuggestion: KeywordSuggestion = {value: 'CASE', weight: 450};
    expect(parseResult.suggestKeywords).toContainEqual(keywordSuggestion);

    const colRef: ColRef = {
        identifierChain: [
            {
                name: 'test_database',
            },
            {
                name: 'test_table',
            },
            {
                name: 'test_column_2',
            },
        ],
    };
    expect(parseResult.colRef).toEqual(colRef);
});

test('should suggest columns, functions, filters after AND', () => {
    const parseResult = parseGenericSql(
        'UPDATE test_database.test_table SET test_column_1=1 WHERE test_column_2=2 AND ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnSuggestion: ColumnSuggestion = {
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
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
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
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);
});

test('should suggest databases or table with SET error', () => {
    const parseResult = parseGenericSql('UPDATE ', ' SET ');

    const error: Partial<ParserSyntaxError> = {
        text: '',
        token: 'EOF',
        line: 0,
        loc: {
            first_line: 1,
            last_line: 1,
            first_column: 15,
            last_column: 15,
        },
    };
    expect(parseResult.errors).toContainEqual(expect.objectContaining(error));

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest databases or table with SET error and empty WHERE', () => {
    const parseResult = parseGenericSql('UPDATE ', ' SET  WHERE ');

    const error: Partial<ParserSyntaxError> = {
        text: 'WHERE',
        token: 'WHERE',
        line: 0,
        loc: {
            first_line: 1,
            last_line: 1,
            first_column: 16,
            last_column: 21,
        },
    };
    expect(parseResult.errors).toContainEqual(expect.objectContaining(error));

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should properly fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'UPDATE test_database.test_table SET test_column_1=1 WHERE test_column_2=2 AND test_column_3=3;',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: StatementPart[] = [
        {
            type: 'statement',
            location: {
                first_line: 1,
                last_line: 1,
                first_column: 1,
                last_column: 94,
            },
        },
        {
            type: 'database',
            location: {
                first_line: 1,
                last_line: 1,
                first_column: 8,
                last_column: 21,
            },
            identifierChain: [
                {
                    name: 'test_database',
                },
            ],
        },
        {
            type: 'table',
            location: {
                first_line: 1,
                last_line: 1,
                first_column: 22,
                last_column: 32,
            },
            identifierChain: [
                {
                    name: 'test_database',
                },
                {
                    name: 'test_table',
                },
            ],
        },
        {
            type: 'statementType',
            identifier: 'SET',
            location: {
                first_column: 33,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
        },
        {
            type: 'column',
            location: {
                first_line: 1,
                last_line: 1,
                first_column: 37,
                last_column: 50,
            },
            identifierChain: [
                {
                    name: 'test_column_1',
                },
            ],
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
            qualified: false,
        },
        {
            type: 'column',
            location: {
                first_line: 1,
                last_line: 1,
                first_column: 59,
                last_column: 72,
            },
            identifierChain: [
                {
                    name: 'test_column_2',
                },
            ],
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
            qualified: false,
        },
        {
            type: 'column',
            location: {
                first_line: 1,
                last_line: 1,
                first_column: 79,
                last_column: 92,
            },
            identifierChain: [
                {
                    name: 'test_column_3',
                },
            ],
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
            qualified: false,
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
