import {parseYQLQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest properly after USER', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after user name', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE USER test_user |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ENCRYPTED'}, {value: 'PASSWORD'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after PASSWORD', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE USER test_user PASSWORD |');
    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toBeFalsy();
    expect(autocompleteResult.suggestUdfs).toBeFalsy();
});
