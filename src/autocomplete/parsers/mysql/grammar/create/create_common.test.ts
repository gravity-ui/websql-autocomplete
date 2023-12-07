import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseMySqlQuery} from '../../../../index';

test('should suggest CREATE', () => {
    const parseResult = parseMySqlQuery('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'CREATE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest CREATE objects', () => {
    const parseResult = parseMySqlQuery('CREATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'DATABASE', weight: -1},
        {value: 'ROLE', weight: -1},
        {value: 'SCHEMA', weight: -1},
        {value: 'TABLE', weight: -1},
        {value: 'VIEW', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
