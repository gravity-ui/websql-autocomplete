import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseClickHouseQuery} from '../../../index';

test('should suggest SELECT despite errors before cursor', () => {
    const parseResult = parseClickHouseQuery('[;;', '');

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT despite errors before and after cursor', () => {
    const parseResult = parseClickHouseQuery(';', ';');

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT despite errors after cursor', () => {
    const parseResult = parseClickHouseQuery('', ';;;;');

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT with non-empty editor', () => {
    const parseResult = parseClickHouseQuery('test_database', 'test_table');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT and contain suggestTemplates', () => {
    const parseResult = parseClickHouseQuery('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);

    expect(parseResult.suggestTemplates).toEqual(true);
});

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const parseResult = parseClickHouseQuery('EXPLAIN', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);

    expect(parseResult.suggestTemplates).toEqual(true);
});

test('should not contain suggestTemplates with SELECT prefix', () => {
    const parseResult = parseClickHouseQuery('SELECT * FROM ', '');

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestTemplates).toBeUndefined();
});
