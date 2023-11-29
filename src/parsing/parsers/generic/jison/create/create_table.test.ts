import {
    KeywordSuggestion,
    parseGenericSql, parseGenericSqlWithoutCursor, StatementPart,
} from '../../../../index';
import {expect, test} from '@jest/globals';

test('should suggest creating TABLE', () => {
    const parseResult = parseGenericSql('CREATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'TABLE', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should suggest IF NOT EXISTS', () => {
    const parseResult = parseGenericSql('CREATE TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'IF NOT EXISTS', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions)
})

test('should suggest data types', () => {
    const parseResult = parseGenericSql('CREATE TABLE food (id ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'BIGINT', weight: -1 },
        { value: 'BOOLEAN', weight: -1 },
        { value: 'CHAR', weight: -1 },
        { value: 'DECIMAL', weight: -1 },
        { value: 'DOUBLE', weight: -1 },
        { value: 'FLOAT', weight: -1 },
        { value: 'INT', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should suggest data types when some types are already written', () => {
    const parseResult = parseGenericSql('CREATE TABLE food (id INT, age FLOAT, bar ', '');

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'BIGINT', weight: -1 },
        { value: 'BOOLEAN', weight: -1 },
        { value: 'CHAR', weight: -1 },
        { value: 'DECIMAL', weight: -1 },
        { value: 'DOUBLE', weight: -1 },
        { value: 'FLOAT', weight: -1 },
        { value: 'INT', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should not report errors on full CREATE TABLE statement', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE TABLE test_table (id INT, age FLOAT);');

    expect(parseResult.errors).toBeUndefined();

    const statementParts: StatementPart[] = [
        {
            type: 'statement',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 44,
                last_line: 1
            },
        }
    ];
    expect(parseResult.locations).toEqual(statementParts);
})