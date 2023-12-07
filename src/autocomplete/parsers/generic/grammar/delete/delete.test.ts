import {expect, test} from '@jest/globals';

import {
    ColumnsSuggestion,
    TablesSuggestion,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';
import {IdentifierLocation, KeywordSuggestion} from '../../../../lib/autocomplete-parse-result';

test('should suggest DELETE', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'DELETE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest FROM', () => {
    const parseResult = parseGenericSql('DELETE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'FROM', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest tables', () => {
    const parseResult = parseGenericSql('DELETE FROM ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);
});

test('should suggest WHERE', () => {
    const parseResult = parseGenericSql('DELETE FROM test_table ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'WHERE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest WHERE columns', () => {
    const parseResult = parseGenericSql('DELETE FROM test_table WHERE ', '');

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnsSuggestion = {
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

test('should suggest WHERE columns when some column conditions already exist', () => {
    const parseResult = parseGenericSql('DELETE FROM test_table WHERE test_column = 1 AND ', '');

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnsSuggestion = {
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

test('should properly fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'DELETE FROM test_table WHERE test_column = 1;',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 45,
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
        {
            type: 'column',
            identifierChain: [
                {
                    name: 'test_column',
                },
            ],
            location: {
                first_column: 30,
                first_line: 1,
                last_column: 41,
                last_line: 1,
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
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
