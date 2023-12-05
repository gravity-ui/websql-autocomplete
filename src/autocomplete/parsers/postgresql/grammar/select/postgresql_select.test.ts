import {expect, test} from '@jest/globals';

import {
    FiltersSuggestion,
    GroupBysSuggestion,
    JoinsSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
    ParserSyntaxError,
    parsePostgreSql,
} from '../../../../index';

test('should suggest keywords, joins, filters, groupBys, orderBys', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table_1 tt1, test_table_2 ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS', weight: 3},
        {value: 'WHERE', weight: 2.7},
        {value: 'GROUP BY', weight: 2.6},
        {value: 'HAVING', weight: 2.5},
        {value: 'ORDER BY', weight: 2.4},
        {value: 'LIMIT', weight: 2.3},
        {value: 'OFFSET', weight: 2.2},
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
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table_1',
                    },
                ],
                alias: 'tt1',
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
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table_1',
                    },
                ],
                alias: 'tt1',
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        prefix: 'WHERE',
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table_1',
                    },
                ],
                alias: 'tt1',
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
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);

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

test('should report VARIABLE_REFERENCE error', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table limit ${limit=20}; ', '');

    const error: Partial<ParserSyntaxError> = {
        text: '${limit=20}',
        token: 'VARIABLE_REFERENCE',
        line: 0,
        loc: {
            first_line: 1,
            last_line: 1,
            first_column: 31,
            last_column: 42,
        },
    };

    expect(parseResult.errors).toContainEqual(expect.objectContaining(error));
});

test('should suggest keywords, groupBys, orderBys after WHERE', () => {
    const parseResult = parsePostgreSql(
        'SELECT test_column FROM test_table WHERE test_column = 1 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'GROUP BY', weight: 2.8},
        {value: 'HAVING', weight: 2.7},
        {value: 'ORDER BY', weight: 2.5},
        {value: 'LIMIT', weight: 2.3},
        {value: 'OFFSET', weight: 2.2},
        {value: 'UNION', weight: 2.11},
        {value: '<', weight: 2},
        {value: '<=', weight: 2},
        {value: '<=>', weight: 2},
        {value: '<>', weight: 2},
        {value: '=', weight: 2},
        {value: '>', weight: 2},
        {value: '>=', weight: 2},
        {value: 'AND', weight: 2},
        {value: 'BETWEEN', weight: 2},
        {value: 'IN', weight: 2},
        {value: 'IS FALSE', weight: 2},
        {value: 'IS NOT FALSE', weight: 2},
        {value: 'IS NOT NULL', weight: 2},
        {value: 'IS NOT TRUE', weight: 2},
        {value: 'IS NULL', weight: 2},
        {value: 'IS TRUE', weight: 2},
        {value: 'NOT BETWEEN', weight: 2},
        {value: 'NOT IN', weight: 2},
        {value: 'OR', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

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

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);
});

test('should suggest keywords, groupBys, orderBys after null safe WHERE', () => {
    const parseResult = parsePostgreSql(
        'SELECT test_column FROM test_table WHERE test_column <=> 1 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'GROUP BY', weight: 2.8},
        {value: 'HAVING', weight: 2.7},
        {value: 'ORDER BY', weight: 2.5},
        {value: 'LIMIT', weight: 2.3},
        {value: 'OFFSET', weight: 2.2},
        {value: 'UNION', weight: 2.11},
        {value: '<', weight: 2},
        {value: '<=', weight: 2},
        {value: '<=>', weight: 2},
        {value: '<>', weight: 2},
        {value: '=', weight: 2},
        {value: '>', weight: 2},
        {value: '>=', weight: 2},
        {value: 'AND', weight: 2},
        {value: 'BETWEEN', weight: 2},
        {value: 'IN', weight: 2},
        {value: 'IS FALSE', weight: 2},
        {value: 'IS NOT FALSE', weight: 2},
        {value: 'IS NOT NULL', weight: 2},
        {value: 'IS NOT TRUE', weight: 2},
        {value: 'IS NULL', weight: 2},
        {value: 'IS TRUE', weight: 2},
        {value: 'NOT BETWEEN', weight: 2},
        {value: 'NOT IN', weight: 2},
        {value: 'OR', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

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

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);
});

test('should suggest LIMIT, OFFSET, joins, filters, groupBys, orderBys', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table ', '');

    expect(parseResult.errors).toBeUndefined();

    const limitSuggestion: KeywordSuggestion = {value: 'LIMIT', weight: 2.3};
    expect(parseResult.suggestKeywords).toContainEqual(limitSuggestion);

    const offsetSuggestion: KeywordSuggestion = {value: 'OFFSET', weight: 2.2};
    expect(parseResult.suggestKeywords).toContainEqual(offsetSuggestion);

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

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
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
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const filtersSuggestion: FiltersSuggestion = {
        prefix: 'WHERE',
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
    expect(parseResult.suggestFilters).toEqual(filtersSuggestion);

    const joinsSuggestion: JoinsSuggestion = {
        prependJoin: true,
        tables: [{identifierChain: [{name: 'test_table'}]}],
    };
    expect(parseResult.suggestJoins).toEqual(joinsSuggestion);
});
