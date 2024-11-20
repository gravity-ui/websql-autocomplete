import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after ALTER ROLE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('ALTER ROLE |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    // expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should suggest properly after role name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('ALTER ROLE test_role |');

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
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        "ALTER ROLE test_role PASSWORD 'test';",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
