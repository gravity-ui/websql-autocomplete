import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after DROP', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP DATABASE |');

    const keywords: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('DROP DATABASE test_database;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
