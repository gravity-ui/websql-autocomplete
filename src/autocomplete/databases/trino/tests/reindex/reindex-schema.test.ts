import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after REINDEX SCHEMA', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('REINDEX SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('REINDEX SCHEMA test_schema;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
