import {expect, test} from '@jest/globals';

import {
    IdentifierLocation,
    KeywordSuggestion,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';

test('should suggest IF NOT EXISTS', () => {
    const parseResult = parseGenericSql('CREATE VIEW ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'IF NOT EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should suggest AS and COMMENT', () => {
    const parseResult = parseGenericSql('CREATE VIEW test_view ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'COMMENT', weight: 3},
        {value: 'AS', weight: 1},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should suggest SELECT', () => {
    const parseResult = parseGenericSql('CREATE VIEW test_view AS ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should not report errors on full statement without comment', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'CREATE VIEW test_view AS SELECT test_field, test_field_2 FROM test_table;',
    );
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'CREATE VIEW test_view COMMENT "test" AS SELECT test_field, test_field_2 FROM test_table;',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 88,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 41,
                first_line: 1,
                last_column: 47,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 48,
                first_line: 1,
                last_column: 72,
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
                first_column: 48,
                first_line: 1,
                last_column: 58,
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
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'test_field_2',
                },
            ],
            location: {
                first_column: 60,
                first_line: 1,
                last_column: 72,
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
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'test_table',
                },
            ],
            location: {
                first_column: 78,
                first_line: 1,
                last_column: 88,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 88,
                first_line: 1,
                last_column: 88,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 88,
                first_line: 1,
                last_column: 88,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
