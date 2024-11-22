import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DROP ROLE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DROP ROLE |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    // expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should not report an error of a full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('DROP ROLE test_role');
    expect(autocompleteResult.errors).toHaveLength(0);
});
