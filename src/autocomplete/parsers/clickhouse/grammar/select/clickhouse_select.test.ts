import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseClickHouseSql} from '../../../../index';

// Only Clickhouse specific tests

test('should suggest type keywords after CAST ... AS', () => {
    const parseResult = parseClickHouseSql('SELECT CAST(test AS ', '');

    const stringSuggestion: KeywordSuggestion = {value: 'String', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(stringSuggestion);

    const textSuggestion: KeywordSuggestion = {value: 'TEXT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(textSuggestion);
});

test('should suggest type keywords after CAST ... AS ST', () => {
    const parseResult = parseClickHouseSql('SELECT CAST(test AS ST', '');

    const stringSuggestion: KeywordSuggestion = {value: 'String', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(stringSuggestion);

    const textSuggestion: KeywordSuggestion = {value: 'TEXT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(textSuggestion);
});

test('should suggest type keywords after CAST(AS', () => {
    const parseResult = parseClickHouseSql('SELECT CAST(AS ', '');

    const stringSuggestion: KeywordSuggestion = {value: 'String', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(stringSuggestion);

    const textSuggestion: KeywordSuggestion = {value: 'TEXT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(textSuggestion);
});
