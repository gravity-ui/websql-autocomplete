import {
    KeywordSuggestion,
    parseGenericSql, parseGenericSqlWithoutCursor,
} from '../../../../index';
import {expect, test} from '@jest/globals';

// TODO: add separate DatabaseOrSchema tests:
//  - 'something [IF NOT EXITS]'
//  - 'something IF [NOT EXISTS]'
//  - 'something IF NOT [exists]'
//  - 'something [IF NOT EXISTS] something2'

test('should suggest creating DATABASE and SCHEMA', () => {
    const parseResult = parseGenericSql('CREATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'DATABASE', weight: -1 },
        { value: 'SCHEMA', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should suggest IF NOT EXISTS for database creation', () => {
    const parseResult = parseGenericSql('CREATE DATABASE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'IF NOT EXISTS', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should suggest IF NOT EXISTS for schema creation', () => {
    const parseResult = parseGenericSql('CREATE SCHEMA ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'IF NOT EXISTS', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should not report errors on full CREATE DATABASE statement', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE DATABASE test_database;');
    expect(parseResult.errors).toBeUndefined();
})

test('should not report errors on full CREATE SCHEMA statement', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE SCHEMA test_schema;');
    expect(parseResult.errors).toBeUndefined();
})