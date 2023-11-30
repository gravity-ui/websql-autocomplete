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