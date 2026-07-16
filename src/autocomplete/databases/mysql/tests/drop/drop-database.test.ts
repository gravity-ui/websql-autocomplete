import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest table name after DROP', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP DATABASE |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('DROP DATABASE test_database;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
