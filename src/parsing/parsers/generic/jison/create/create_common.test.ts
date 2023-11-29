import {
    KeywordSuggestion,
    parseGenericSql,
} from '../../../../index';
import {expect, test} from '@jest/globals';

test('should suggest CREATE', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = { value: 'CREATE', weight: -1 };
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
})

// TODO: remove, because it's being tested in other tests
test('should suggest CREATE objects', () => {
    const parseResult = parseGenericSql('CREATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        { value: 'TABLE', weight: -1 },
        { value: 'VIEW', weight: -1 },
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions))
})