import {expect, test} from '@jest/globals';

import {
    ColumnsSuggestion,
    FunctionsSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
    parseGenericSql,
} from '../../../../index';

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table ORDER ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

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

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM test_table WHERE condition_1 condition_2 condition_3 ORDER ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'BY', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);

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

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table ORDER BY ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
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
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table ORDER BY test_column ', '');

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2.4},
        {value: 'DESC', weight: 2.4},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table ORDER BY test_column + ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {
        types: ['NUMBER'],
    };
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
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
        types: ['NUMBER'],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table ORDER BY test_column, ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
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

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM test_table ORDER BY test_column_2 + test_column_2 ASC, ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
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

test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table ORDER BY test_column ASC, ', '');

    expect(parseResult.errors).toBeUndefined();

    const functionsSuggestions: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestions);

    const columnsSuggestion: ColumnsSuggestion = {
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

test('should suggest keywords', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM test_table ORDER by test_column_1 DESC, test_column_2 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2.4},
        {value: 'DESC', weight: 2.4},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});
