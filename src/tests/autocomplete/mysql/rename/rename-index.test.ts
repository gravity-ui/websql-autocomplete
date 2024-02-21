import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../../index';

test('should suggest table name after RENAME INDEX', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('ALTER TABLE test_table RENAME INDEX |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table RENAME INDEX test_index TO test_index_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
