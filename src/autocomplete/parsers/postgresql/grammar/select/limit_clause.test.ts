import {expect, test} from '@jest/globals';

import {KeywordSuggestion, ParserSyntaxError, parsePostgreSql} from '../../../../index';

test('should suggest values', () => {
    const parseResult = parsePostgreSql(
        'SELECT COUNT(*) AS test_count FROM test_table GROUP BY test_count LIMIT ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: '10', weight: 10000},
        {value: '100', weight: 10000},
        {value: '1000', weight: 10000},
        {value: '10000', weight: 10000},
        {value: '5000', weight: 10000},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should contain LIMIT in suggestions', () => {
    const parseResult = parsePostgreSql(
        'SELECT COUNT(*) AS test_count FROM test_table GROUP BY test_count OFFSET 10 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'LIMIT', weight: 2.2};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should not allow to include offset after comma', () => {
    const parseResult = parsePostgreSql(
        'SELECT COUNT(*) AS test_count FROM test_table GROUP BY test_count LIMIT 100, 100 ',
        '',
    );

    const error: Partial<ParserSyntaxError> = {
        text: ',',
        token: ',',
        line: 0,
        loc: {
            first_line: 1,
            last_line: 1,
            first_column: 75,
            last_column: 76,
        },
    };
    expect(parseResult.errors).toContainEqual(expect.objectContaining(error));
});
