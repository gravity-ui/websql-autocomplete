import {parseMySqlQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after ROLE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE ROLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after role name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE ROLE test_role |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
