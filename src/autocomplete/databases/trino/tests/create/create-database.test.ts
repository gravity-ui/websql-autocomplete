import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DATABASE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'CONNECTION'},
        {value: 'ENCODING'},
        {value: 'LOCATION'},
        {value: 'OWNER'},
        {value: 'TABLESPACE'},
        {value: 'TEMPLATE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
