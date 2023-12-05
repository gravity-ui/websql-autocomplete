import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseGenericSql} from '../../../../index';

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT * FROM testTable ORDER BY condition_1 condition_2 ',
        '',
    );

    // TODO: fix unhandled error
    // expect(parseResult.errors).toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'LIMIT', weight: 2.3},
        {value: 'UNION', weight: 2.11},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});
