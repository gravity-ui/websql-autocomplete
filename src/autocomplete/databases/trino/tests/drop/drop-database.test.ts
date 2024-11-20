import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DROP', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DROP DATABASE |');

    const keywords: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('DROP DATABASE test_database;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
