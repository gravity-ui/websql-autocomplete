import {expect, test} from '@jest/globals';

import {
    KeywordSuggestion,
    StatementPart,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';

test('should suggest EXPLAIN', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'EXPLAIN', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest query beginnings', () => {
    const parseResult = parseGenericSql('EXPLAIN ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion[] = [
        {value: 'CREATE', weight: -1},
        {value: 'ALTER', weight: -1},
        {value: 'DELETE', weight: -1},
        {value: 'SELECT', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestion));
});

test('should report an error', () => {
    const parseResult = parseGenericSql('EXPLAIN EXPLAIN ', '');

    expect(parseResult.errors).not.toBeUndefined();

    // TODO: check errors more thoroughly
    // Currently, we are unable to check that the first element exists, and that it's token is explain properly
    // expect(errors[0].token).toEqual("EXPLAIN"); + we should check locations
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor('EXPLAIN SELECT * FROM test_database;');

    expect(parseResult.errors).toBeUndefined();

    const statementParts: StatementPart[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 9,
                first_line: 1,
                last_column: 15,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 17,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 17,
                last_line: 1,
            },
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'test_database',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            identifierChain: [
                {
                    name: 'test_database',
                },
            ],
            location: {
                first_column: 23,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 36,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 36,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(statementParts);
});
