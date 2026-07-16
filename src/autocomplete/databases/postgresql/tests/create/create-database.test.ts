import {parsePostgreSqlQueryWithCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after DATABASE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE DATABASE test_database |');

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
