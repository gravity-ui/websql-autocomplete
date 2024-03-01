import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest table name after ALTER USER ROLE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('ALTER USER test_user DEFAULT ROLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DEFAULT'},
        {value: 'NONE'},
        {value: 'ALL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should not report errors', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'ALTER USER test_user DEFAULT ROLE test_role;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
