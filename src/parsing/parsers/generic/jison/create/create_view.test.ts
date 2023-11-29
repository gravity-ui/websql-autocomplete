import {
    KeywordSuggestion,
    parseGenericSql, parseGenericSqlWithoutCursor,
} from '../../../../index';
import {expect, test} from '@jest/globals';

test('should suggest creating VIEW', () => {
    const parseResult = parseGenericSql('CREATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'VIEW', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should suggest IF NOT EXISTS', () => {
    const parseResult = parseGenericSql('CREATE VIEW ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'IF NOT EXISTS', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should suggest AS and COMMENT', () => {
    const parseResult = parseGenericSql('CREATE VIEW test_view ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'AS', weight: 1 },
        { value: 'COMMENT', weight: 3 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should suggest SELECT', () => {
    const parseResult = parseGenericSql('CREATE VIEW test_view AS ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'SELECT', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should not report errors on full CREATE VIEW statement', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE VIEW test_view COMMENT "test" AS SELECT test_field, test_field_2 FROM test_table;');
    expect(parseResult.errors).toBeUndefined();
})

test('should not report errors on full CREATE VIEW statement without comment', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE VIEW test_view AS SELECT test_field, test_field_2 FROM test_table;');
    expect(parseResult.errors).toBeUndefined();
})