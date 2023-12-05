import {expect, test} from '@jest/globals';

import {parseClickHouse} from '../../../../index';
import {KeywordSuggestion} from '../../../../lib/autocomplete-parse-result';

// Only Clickhouse specific tests

test('should suggest type keywords after CAST ... AS', () => {
    const parseResult = parseClickHouse('SELECT CAST(test AS ', '');

    const stringSuggestion: KeywordSuggestion = {value: 'String', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(stringSuggestion);

    const textSuggestion: KeywordSuggestion = {value: 'TEXT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(textSuggestion);
});

test('should suggest type keywords after CAST ... AS ST', () => {
    const parseResult = parseClickHouse('SELECT CAST(test AS ST', '');

    const stringSuggestion: KeywordSuggestion = {value: 'String', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(stringSuggestion);

    const textSuggestion: KeywordSuggestion = {value: 'TEXT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(textSuggestion);
});

test('should suggest type keywords after CAST(AS', () => {
    const parseResult = parseClickHouse('SELECT CAST(AS ', '');

    const stringSuggestion: KeywordSuggestion = {value: 'String', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(stringSuggestion);

    const textSuggestion: KeywordSuggestion = {value: 'TEXT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(textSuggestion);
});
