import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after USER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after user name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE USER test_user |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ENCRYPTED'},
        {value: 'PASSWORD'},
        {value: 'HASH'},
        {value: 'LOGIN'},
        {value: 'NOLOGIN'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after PASSWORD', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE USER test_user PASSWORD |');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'NULL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toBeFalsy();
    expect(autocompleteResult.suggestSimpleTypes).toBeFalsy();
    expect(autocompleteResult.suggestUdfs).toBeFalsy();
});
