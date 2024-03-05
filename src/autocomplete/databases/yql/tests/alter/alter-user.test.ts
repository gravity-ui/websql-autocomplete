import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest keywords after USER ', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER USER |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after user name', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER USER test |');
    const keywords: KeywordSuggestion[] = [
        {value: 'RENAME'},
        {value: 'ENCRYPTED'},
        {value: 'PASSWORD'},
        {value: 'WITH'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
