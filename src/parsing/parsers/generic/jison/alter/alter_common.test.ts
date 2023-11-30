import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseGenericSql} from '../../../../index';

test('should suggest ALTER', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'ALTER', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});
