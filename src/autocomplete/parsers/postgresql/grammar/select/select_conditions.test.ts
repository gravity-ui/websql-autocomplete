import {expect, test} from '@jest/globals';

import {parsePostgreSql} from '../../../../index';
import {KeywordSuggestion} from '../../../../lib/types';

test('should suggest keywords', () => {
    const parseResult = parsePostgreSql(
        'SELECT * FROM test_table ORDER BY test_column_1, test_column_2, test_column_3, test_column_4 ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'ASC', weight: 2.4},
        {value: 'DESC', weight: 2.4},
        {value: 'LIMIT', weight: 2.3},
        {value: 'OFFSET', weight: 2.2},
        {value: 'UNION', weight: 2.11},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
