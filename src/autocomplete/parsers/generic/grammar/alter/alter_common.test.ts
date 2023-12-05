import {expect, test} from '@jest/globals';

import {parseGenericSql} from '../../../../index';
import {KeywordSuggestion} from '../../../../lib/autocomplete-parse-result';

test('should suggest ALTER', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'ALTER', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest ALTER objects', () => {
    const parseResult = parseGenericSql('ALTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'TABLE', weight: -1},
        {value: 'VIEW', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
