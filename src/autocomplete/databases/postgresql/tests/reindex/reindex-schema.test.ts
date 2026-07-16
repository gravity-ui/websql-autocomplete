import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after REINDEX SCHEMA', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REINDEX SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('REINDEX SCHEMA test_schema;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
