import {
    KeywordSuggestion,
    parseGenericSql, parseGenericSqlWithoutCursor,
} from '../../../../index';
import {expect, test} from '@jest/globals';

test('should suggest creating ROLE', () => {
    const parseResult = parseGenericSql('CREATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'ROLE', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})

test('should not report errors on full CREATE ROLE statement', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE ROLE test_role;');
    expect(parseResult.errors).toBeUndefined();
})