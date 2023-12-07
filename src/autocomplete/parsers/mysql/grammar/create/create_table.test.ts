import {expect, test} from '@jest/globals';

import {
    IdentifierLocation,
    KeywordSuggestion,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
} from '../../../../index';

test('should suggest IF NOT EXISTS', () => {
    const parseResult = parseMySqlQuery('CREATE TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'IF NOT EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should suggest data types', () => {
    const parseResult = parseMySqlQuery('CREATE TABLE food (id ', '');

    const suggestions: KeywordSuggestion[] = [
        {value: 'BIGINT', weight: -1},
        {value: 'BOOLEAN', weight: -1},
        {value: 'CHAR', weight: -1},
        {value: 'DECIMAL', weight: -1},
        {value: 'DOUBLE', weight: -1},
        {value: 'FLOAT', weight: -1},
        {value: 'INT', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions));
});

test('should suggest data types when some types are already written', () => {
    const parseResult = parseMySqlQuery('CREATE TABLE food (id INT, age FLOAT, bar ', '');

    const suggestions: KeywordSuggestion[] = [
        {value: 'BIGINT', weight: -1},
        {value: 'BOOLEAN', weight: -1},
        {value: 'CHAR', weight: -1},
        {value: 'DECIMAL', weight: -1},
        {value: 'DOUBLE', weight: -1},
        {value: 'FLOAT', weight: -1},
        {value: 'INT', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(suggestions));
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'CREATE TABLE test_table (id INT, age FLOAT);',
    );

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            type: 'statement',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 44,
                last_line: 1,
            },
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
