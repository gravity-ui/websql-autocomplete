import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseYql} from '../../../../index';

test('should suggest DROP on empty query', () => {
    const parseResult = parseYql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'DROP', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions));
});

test('should suggest DROP objects', () => {
    const parseResult = parseYql('DROP ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'EXTERNAL TABLE', weight: -1},
        {value: 'GROUP', weight: -1},
        {value: 'TABLE', weight: -1},
        {value: 'TABLESTORE', weight: -1},
        {value: 'USER', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
