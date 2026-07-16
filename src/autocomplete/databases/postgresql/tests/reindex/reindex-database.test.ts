import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after REINDEX DATABASE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REINDEX DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('REINDEX DATABASE test_database;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
