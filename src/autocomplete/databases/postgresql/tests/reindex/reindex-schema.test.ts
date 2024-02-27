import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

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
