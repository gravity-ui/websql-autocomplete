import {expect, test} from '@jest/globals';

import {
    DatabasesSuggestion,
    TablesSuggestion,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';
import {IdentifierLocation, KeywordSuggestion} from '../../../../lib/autocomplete-parse-result';

test('should suggest views, databases and IF EXISTS', () => {
    const parseResult = parseGenericSql('DROP VIEW ', '');

    expect(parseResult.errors).toBeUndefined();

    const tableSuggestion: TablesSuggestion = {
        onlyViews: true,
    };
    expect(parseResult.suggestTables).toEqual(tableSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const suggestions: KeywordSuggestion[] = [{value: 'IF EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'DROP VIEW IF EXISTS test_database.test_view;',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 44,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'DROP VIEW',
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
                first_column: 21,
                first_line: 1,
                last_column: 34,
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
                    name: 'test_view',
                },
            ],
            location: {
                first_column: 35,
                first_line: 1,
                last_column: 44,
                last_line: 1,
            },
            type: 'table',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
