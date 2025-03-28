import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after SCHEMA', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after schema name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE SCHEMA catalog.test_schema |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'AUTHORIZATION'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
