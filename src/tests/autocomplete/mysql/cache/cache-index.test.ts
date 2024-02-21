import {parseMySqlQueryWithCursor} from '../../../lib';
import {KeywordSuggestion} from '../../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../../index';

test('should suggest table name after CACHE INDEX', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CACHE INDEX test_table ( |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'CACHE INDEX test_table (test_index) IN test_table;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
