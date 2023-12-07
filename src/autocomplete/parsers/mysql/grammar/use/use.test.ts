import {expect, test} from '@jest/globals';

import {
    AggregateFunctionsSuggestion,
    DatabasesSuggestion,
    IdentifierLocation,
    KeywordSuggestion,
    TablesSuggestion,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
} from '../../../../index';

test('should suggest USE', () => {
    const parseResult = parseMySqlQuery('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'USE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest databases', () => {
    const parseResult = parseMySqlQuery('USE ', '');

    expect(parseResult.errors).toBeUndefined();

    const databasesSuggestion: DatabasesSuggestion = {};
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest databases midway', () => {
    const parseResult = parseMySqlQuery('USE test_database', '');

    expect(parseResult.errors).toBeUndefined();

    const databasesSuggestion: DatabasesSuggestion = {};
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should use a USE statement and suggest tables, databases, functions', () => {
    const parseResult = parseMySqlQuery('USE test_database; \nSELECT ', '');

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.useDatabase).toEqual('test_database');

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

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

test('should use the last USE statement and suggest tables, databases, functions', () => {
    const parseResult = parseMySqlQuery(
        'USE test_database_1; USE test_database_2; \n\tSELECT ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.useDatabase).toEqual('test_database_2');

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

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

test('should use the correct USE statement and suggest tables, databases, functions', () => {
    const parseResult = parseMySqlQuery(
        'USE test_database_1; USE test_database_2; \n\tSELECT ',
        '; USE test_database_3;',
    );

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.useDatabase).toEqual('test_database_2');

    expect(parseResult.suggestAnalyticFunctions).toEqual(true);

    const aggregateFunctionsSuggestion: AggregateFunctionsSuggestion = {
        tables: [],
    };
    expect(parseResult.suggestAggregateFunctions).toEqual(aggregateFunctionsSuggestion);

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

test('should properly fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'USE test_database_1; \n\tSELECT test_column from test_table;',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 20,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'USE',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 4,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 36,
                last_line: 2,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 2,
                first_line: 2,
                last_column: 8,
                last_line: 2,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 9,
                first_line: 2,
                last_column: 20,
                last_line: 2,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'test_column',
                },
            ],
            location: {
                first_column: 9,
                first_line: 2,
                last_column: 20,
                last_line: 2,
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
                first_column: 26,
                first_line: 2,
                last_column: 36,
                last_line: 2,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 36,
                first_line: 2,
                last_column: 36,
                last_line: 2,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 36,
                first_line: 2,
                last_column: 36,
                last_line: 2,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
