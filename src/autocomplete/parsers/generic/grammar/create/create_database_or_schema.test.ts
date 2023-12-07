import {expect, test} from '@jest/globals';

import {
    IdentifierLocation,
    KeywordSuggestion,
    parseGenericSql,
    parseGenericSqlWithoutCursor,
} from '../../../../index';

// TODO: add separate DatabaseOrSchema tests:
//  - 'something [IF NOT EXITS]'
//  - 'something IF [NOT EXISTS]'
//  - 'something IF NOT [exists]'
//  - 'something [IF NOT EXISTS] something2'

// TODO: remove duplicates, because databaseOrSchema should be tested separately
test('should suggest IF NOT EXISTS for database creation', () => {
    const parseResult = parseGenericSql('CREATE DATABASE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'IF NOT EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should suggest IF NOT EXISTS for schema creation', () => {
    const parseResult = parseGenericSql('CREATE SCHEMA ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'IF NOT EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

// TODO: remove duplicates, because databaseOrSchema should be tested separately
test('should not report errors on full statement', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE DATABASE test_database;');
    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE SCHEMA test_schema;');

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            type: 'statement',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 26,
                last_line: 1,
            },
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
