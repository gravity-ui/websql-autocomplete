import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseMySqlQuery} from '../../../../index';

test('should suggest columns', () => {
    const parseResult = parseMySqlQuery(
        'SELECT * FROM testTable ORDER BY condition_1 condition_2 ',
        '',
    );

    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'LIMIT', weight: 2.3},
        {value: 'UNION', weight: 2.11},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestions);
});
