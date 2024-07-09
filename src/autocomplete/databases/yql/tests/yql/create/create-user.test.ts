import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after USER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after user name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE USER test_user |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ENCRYPTED'}, {value: 'PASSWORD'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after PASSWORD', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE USER test_user PASSWORD |');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NULL'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'EMPTY_ACTION'},
        {value: 'CAST'},
        {value: 'EXISTS'},
        {value: 'CASE'},
        {value: 'VARIANT'},
        {value: 'ENUM'},
        {value: 'CALLABLE'},
        {value: 'BITCAST'},
        {value: 'JSON_VALUE'},
        {value: 'JSON_EXISTS'},
        {value: 'JSON_QUERY'},
        {value: 'NOT'},
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toBeFalsy();
    expect(autocompleteResult.suggestSimpleTypes).toBeFalsy();
    expect(autocompleteResult.suggestUdfs).toBeFalsy();
});
