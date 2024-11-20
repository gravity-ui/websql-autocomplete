import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DROP SEQUENCE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DROP SEQUENCE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    // expect(autocompleteResult.suggestSequences).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('DROP SEQUENCE test_sequence;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
