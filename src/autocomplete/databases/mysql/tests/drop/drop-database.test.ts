import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';

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
