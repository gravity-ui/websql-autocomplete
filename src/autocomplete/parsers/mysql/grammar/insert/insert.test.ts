import {expect, test} from '@jest/globals';

import {
    ColumnsSuggestion,
    DatabasesSuggestion,
    IdentifierLocation,
    KeywordSuggestion,
    TablesSuggestion,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
} from '../../../../index';

// TODO: test separately OptionalParenthesizedColumnListOrError
// TODO: test separately InsertValuesListOrError

test('should suggest INSERT', () => {
    const parseResult = parseMySqlQuery('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'INSERT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest INTO', () => {
    const parseResult = parseMySqlQuery('INSERT ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion[] = [{value: 'INTO', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestion);
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('INSERT INTO ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const suggestion: KeywordSuggestion[] = [{value: 'TABLE', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestion);
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('INSERT INTO TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    expect(parseResult.suggestKeywords).toBeUndefined();
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('INSERT INTO TABLE test_table ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'VALUES', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('INSERT INTO test_table (test_column) ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'VALUES', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest columns', () => {
    const parseResult = parseMySqlQuery('INSERT INTO test_table (', ')');

    const columnSuggestion: ColumnsSuggestion = {
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
    const parseResult = parseMySqlQuery(
        'INSERT INTO test_table (',
        ') VALUES (test_value_1, test_value_2)',
    );

    const columnSuggestion: ColumnsSuggestion = {
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

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('INSERT INTO  ', ' ()');

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const suggestion: KeywordSuggestion[] = [{value: 'TABLE', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestion);
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('INSERT INTO ', ' () VALUES ()');

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const suggestion: KeywordSuggestion[] = [{value: 'TABLE', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestion);
});

test('should suggest columns', () => {
    const parseResult = parseMySqlQuery('INSERT INTO test_table (', ') VALUES ()');

    const columnSuggestion: ColumnsSuggestion = {
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

test('should not report errors and fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'INSERT INTO test_table (test_column_1, test_column_2) VALUES (123, 324);',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 72,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 13,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            type: 'table',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should not report errors and fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor('INSERT INTO test_table VALUES (123, 324);');

    expect(parseResult.errors).toBeUndefined();

    const identifierLocations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 13,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            type: 'table',
        },
    ];
    expect(parseResult.locations).toEqual(identifierLocations);
});