import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest table name after DROP', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP USER |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestUsers).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('DROP USER test_user;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
