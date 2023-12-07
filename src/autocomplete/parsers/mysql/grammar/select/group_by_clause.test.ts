import {expect, test} from '@jest/globals';

import {
    ColumnsSuggestion,
    GroupBysSuggestion,
    IdentifierSuggestion,
    KeywordSuggestion,
    Table,
    parseMySqlQuery,
} from '../../../../index';

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_table GROUP ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const groupBysSuggestions: GroupBysSuggestion = {
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);
});

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_table WHERE test_condition GROUP ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const groupBysSuggestions: GroupBysSuggestion = {
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);
});

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery("SELECT * FROM test_table WHERE id LIKE '' GROUP ", '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

    const groupBysSuggestions: GroupBysSuggestion = {
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);
});

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_table GROUP BY ', '');

    expect(parseResult.errors).toBeUndefined();

    const groupBysSuggestions: GroupBysSuggestion = {
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
        source: 'group by',
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

test('should suggest columns', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_database.test_table GROUP BY ', '');

    expect(parseResult.errors).toBeUndefined();

    const groupBysSuggestions: GroupBysSuggestion = {
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
        source: 'group by',
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

test('should suggest identifiers', () => {
    const parseResult = parseMySqlQuery(
        'SELECT * FROM test_table_1 t1, test_table_2 GROUP BY ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const tables: Table[] = [
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

    const groupBysSuggestions: GroupBysSuggestion = {
        tables,
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
        source: 'group by',
        tables,
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);

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

test('should suggest identifiers', () => {
    const parseResult = parseMySqlQuery(
        'SELECT * FROM test_table_1 t1, test_table_2 GROUP BY test_column_1, ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestGroupBys).toEqual(undefined);

    const columnsSuggestion: ColumnsSuggestion = {
        source: 'group by',
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

test('should suggest identifiers', () => {
    const parseResult = parseMySqlQuery(
        'SELECT * FROM test_table_1 t1, test_table_2 GROUP BY test_column_1+',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestGroupBys).toEqual(undefined);

    const columnsSuggestion: ColumnsSuggestion = {
        source: 'group by',
        types: ['NUMBER'],
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
