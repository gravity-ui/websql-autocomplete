import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseGenericSql} from '../../../../index';

test('should suggest values', () => {
    const parseResult = parseGenericSql(
        'SELECT COUNT(*) AS c FROM test_table GROUP BY test_column LIMIT ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: '10', weight: 10000},
        {value: '100', weight: 10000},
        {value: '1000', weight: 10000},
        {value: '10000', weight: 10000},
        {value: '5000', weight: 10000},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should allow to write offset with comma', () => {
    const parseResult = parseGenericSql(
        'SELECT COUNT(*) AS c FROM test_table GROUP BY test_column LIMIT 100, 100 ',
        '',
    );
    expect(parseResult.errors).toBeUndefined();
});
