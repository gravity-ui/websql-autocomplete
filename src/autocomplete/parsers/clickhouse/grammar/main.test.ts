import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseClickHouse} from '../../../index';

test('should suggest SELECT despite errors before cursor', () => {
    const parseResult = parseClickHouse('[;;', '');

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT despite errors before and after cursor', () => {
    const parseResult = parseClickHouse(';', ';');

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT despite errors after cursor', () => {
    const parseResult = parseClickHouse('', ';;;;');

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT with non-empty editor', () => {
    const parseResult = parseClickHouse('test_database', 'test_table');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest SELECT and contain suggestTemplates', () => {
    const parseResult = parseClickHouse('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);

    expect(parseResult.suggestTemplates).toEqual(true);
});

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const parseResult = parseClickHouse('EXPLAIN', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SELECT', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);

    expect(parseResult.suggestTemplates).toEqual(true);
});

test('should not contain suggestTemplates with SELECT prefix', () => {
    const parseResult = parseClickHouse('SELECT * FROM ', '');

    expect(parseResult.errors).toBeUndefined();

    expect(parseResult.suggestTemplates).toBeUndefined();
});
