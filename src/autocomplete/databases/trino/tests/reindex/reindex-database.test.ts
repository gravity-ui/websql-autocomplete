import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after REINDEX DATABASE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('REINDEX DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('REINDEX DATABASE test_database;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
