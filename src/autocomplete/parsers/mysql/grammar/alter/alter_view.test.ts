import {expect, test} from '@jest/globals';

import {
    DatabasesSuggestion,
    IdentifierLocation,
    KeywordSuggestion,
    TablesSuggestion,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
} from '../../../../index';

test('should suggest views to alter', () => {
    const parseResult = parseMySqlQuery('ALTER VIEW ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        onlyViews: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest AS', () => {
    const parseResult = parseMySqlQuery('ALTER VIEW test_view ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion[] = [{value: 'AS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestion);
});

test('should suggest SELECT', () => {
    const parseResult = parseMySqlQuery('ALTER VIEW test_view AS ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestion);
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'ALTER VIEW test_view AS SELECT test_field, test_field_2 FROM test_table;',
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
            identifier: 'ALTER VIEW',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 6,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            identifierChain: [
                {
                    name: 'test_view',
                },
            ],
            location: {
                first_column: 12,
                first_line: 1,
                last_column: 21,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 25,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 32,
                first_line: 1,
                last_column: 56,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'test_field',
                },
            ],
            location: {
                first_column: 32,
                first_line: 1,
                last_column: 42,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'test_view',
                        },
                    ],
                },
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
                    name: 'test_field_2',
                },
            ],
            location: {
                first_column: 44,
                first_line: 1,
                last_column: 56,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'test_view',
                        },
                    ],
                },
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
                first_column: 62,
                first_line: 1,
                last_column: 72,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 72,
                first_line: 1,
                last_column: 72,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 72,
                first_line: 1,
                last_column: 72,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
