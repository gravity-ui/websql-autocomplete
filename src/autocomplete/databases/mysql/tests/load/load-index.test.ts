import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest table name after LOAD INDEX INTO CACHE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('LOAD INDEX INTO CACHE test_table (|');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'LOAD INDEX INTO CACHE test_table (test_index);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
