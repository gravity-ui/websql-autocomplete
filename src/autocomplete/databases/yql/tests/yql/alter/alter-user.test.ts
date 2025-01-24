import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after USER ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER USER |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after user name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER USER test |');
    const keywords: KeywordSuggestion[] = [
        {value: 'RENAME'},
        {value: 'ENCRYPTED'},
        {value: 'PASSWORD'},
        {value: 'HASH'},
        {value: 'LOGIN'},
        {value: 'NOLOGIN'},
        {value: 'WITH'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
