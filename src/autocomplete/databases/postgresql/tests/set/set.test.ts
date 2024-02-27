import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest properly after SET SCHEMA', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SET SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FROM'}, {value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('SET SCHEMA test_schema;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
