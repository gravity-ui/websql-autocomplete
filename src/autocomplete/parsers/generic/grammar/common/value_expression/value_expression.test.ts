import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseGenericSql} from '../../../../../index';

// TODO: remove <=, IN, ... suggestions, only suggest AND, OR. Or checkout how suggestColRefKeywords works
test('should suggest other keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table WHERE test_field = 1 ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'AND', weight: 2},
        {value: 'OR', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions));
});

// TODO: remove AND, OR suggestions. Or checkout how suggestColRefKeywords works
test('should suggest other keywords', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table WHERE test_field ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'IN', weight: 2},
        {value: 'NOT IN', weight: 2},
        {value: 'IS FALSE', weight: 2},
        {value: 'IS NOT FALSE', weight: 2},
        {value: 'IS NOT NULL', weight: 2},
        {value: 'IS NOT TRUE', weight: 2},
        {value: 'IS NULL', weight: 2},
        {value: 'IS TRUE', weight: 2},
        {value: '<', weight: 2},
        {value: '<=', weight: 2},
        {value: '<=>', weight: 2},
        {value: '<>', weight: 2},
        {value: '=', weight: 2},
        {value: '>', weight: 2},
        {value: '>=', weight: 2},
        {value: 'BETWEEN', weight: 2},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions));
});
