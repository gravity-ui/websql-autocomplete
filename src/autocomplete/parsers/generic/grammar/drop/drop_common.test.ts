import {expect, test} from '@jest/globals';

import {parseGenericSql} from '../../../../index';
import {KeywordSuggestion} from '../../../../lib/autocomplete-parse-result';

test('should suggest DROP on empty query', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'DROP', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions));
});

test('should suggest DROP objects', () => {
    const parseResult = parseGenericSql('DROP ', '');

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
