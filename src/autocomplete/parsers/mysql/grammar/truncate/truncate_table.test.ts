import {expect, test} from '@jest/globals';

import {
    DatabasesSuggestion,
    IdentifierLocation,
    KeywordSuggestion,
    TablesSuggestion,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
} from '../../../../index';

test('should suggest TABLE', () => {
    const parseResult = parseMySqlQuery('TRUNCATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'TABLE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest databases or tables and IF EXISTS', () => {
    const parseResult = parseMySqlQuery('TRUNCATE TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const suggestions: KeywordSuggestion[] = [{value: 'IF EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should properly fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor('TRUNCATE TABLE test_database.test_table;');

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 40,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'TRUNCATE TABLE',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            identifierChain: [
                {
                    name: 'test_database',
                },
            ],
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'database',
        },
        {
            identifierChain: [
                {
                    name: 'test_database',
                },
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 30,
                first_line: 1,
                last_column: 40,
                last_line: 1,
            },
            type: 'table',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});