import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after SET SCHEMA', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('SET SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FROM'}, {value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor('SET SCHEMA test_schema;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
