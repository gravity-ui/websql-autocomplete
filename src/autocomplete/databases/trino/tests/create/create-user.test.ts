import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after USER', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'MAPPING'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after user name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE USER test_user |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'PASSWORD'},
        {value: 'ENCRYPTED'},
        {value: 'UNENCRYPTED'},
        {value: 'INHERIT'},
        {value: 'CONNECTION'},
        {value: 'VALID'},
        {value: 'GROUP'},
        {value: 'USER'},
        {value: 'ROLE'},
        {value: 'SYSID'},
        {value: 'ADMIN'},
        {value: 'IN'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
