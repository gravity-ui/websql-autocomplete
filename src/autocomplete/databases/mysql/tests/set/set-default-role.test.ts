import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest triggers after SET DEFAULT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SET DEFAULT ROLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ALL'}, {value: 'NONE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should suggest triggers after TO', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SET DEFAULT ROLE test_role TO |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestUsers).toEqual(true);
});

test('full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'SET DEFAULT ROLE test_role_1, test_role_2 TO test_user_1, test_user_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
