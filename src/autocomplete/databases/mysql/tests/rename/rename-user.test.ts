import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest table name after RENAME USER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('RENAME USER |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestUsers).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'RENAME USER test_user TO test_user_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
