import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DROP INDEX', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DROP INDEX |');

    const keywords: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}, {value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    // expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('DROP INDEX test_index;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
