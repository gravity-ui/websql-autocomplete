import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseMySqlQuery} from '../../../../index';

test('should suggest ALTER', () => {
    const parseResult = parseMySqlQuery('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'ALTER', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest ALTER objects', () => {
    const parseResult = parseMySqlQuery('ALTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'TABLE', weight: -1},
        {value: 'VIEW', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
