import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after ALTER SEQUENCE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('ALTER SEQUENCE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    // expect(autocompleteResult.suggestSequences).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'ALTER SEQUENCE test_sequence INCREMENT 2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
