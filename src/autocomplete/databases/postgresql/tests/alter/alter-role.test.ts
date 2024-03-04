import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest properly after ALTER ROLE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER ROLE |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should suggest properly after role name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER ROLE test_role |');

    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'RENAME'},
        {value: 'WITH'},
        {value: 'PASSWORD'},
        {value: 'ENCRYPTED'},
        {value: 'UNENCRYPTED'},
        {value: 'INHERIT'},
        {value: 'CONNECTION'},
        {value: 'VALID'},
        {value: 'GROUP'},
        {value: 'USER'},
        {value: 'ROLE'},
        {value: 'IN'},
        {value: 'SET'},
        {value: 'RESET'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);
});

test('should not report an error of a full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        "ALTER ROLE test_role PASSWORD 'test';",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
