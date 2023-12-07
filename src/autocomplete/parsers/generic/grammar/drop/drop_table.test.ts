import {expect, test} from '@jest/globals';

import {
    DatabasesSuggestion,
    IdentifierLocation,
    KeywordSuggestion,
    TablesSuggestion,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';

test('should suggest tables, databases and IF EXISTS', () => {
    const parseResult = parseGenericSql('DROP TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        onlyTables: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const suggestions: KeywordSuggestion[] = [{value: 'IF EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

// TODO: test SchemaQualifiedTableIdentifier separatelly
test('should suggest tables', () => {
    const parseResult = parseGenericSql('DROP TABLE test_database.', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        onlyTables: true,
        identifierChain: [
            {
                name: 'test_database',
            },
        ],
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'DROP TABLE IF EXISTS test_database.test_table;',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 46,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'DROP TABLE',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 5,
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
                first_column: 22,
                first_line: 1,
                last_column: 35,
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
                first_column: 36,
                first_line: 1,
                last_column: 46,
                last_line: 1,
            },
            type: 'table',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
