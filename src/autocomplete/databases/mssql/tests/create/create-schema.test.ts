import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after CREATE SCHEMA', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AUTHORIZATION'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'CREATE SCHEMA test_schema AUTHORIZATION dbo;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
