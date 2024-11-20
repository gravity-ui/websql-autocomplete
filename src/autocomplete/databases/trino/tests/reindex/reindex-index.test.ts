import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after REINDEX INDEX', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('REINDEX INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    // expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('REINDEX INDEX test_index;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
