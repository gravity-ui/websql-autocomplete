import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest keywords after GRANT', () => {
    const autocompleteResult = parseYQLQueryWithCursor('GRANT |');
    const keywords: KeywordSuggestion[] = [
        {value: 'CONNECT'},
        {value: 'LIST'},
        {value: 'INSERT'},
        {value: 'MANAGE'},
        {value: 'DROP'},
        {value: 'GRANT'},
        {value: 'MODIFY'},
        {value: 'ERASE'},
        {value: 'UPDATE'},
        {value: 'ALTER'},
        {value: 'DESCRIBE'},
        {value: 'REMOVE'},
        {value: 'SELECT'},
        {value: 'FULL'},
        {value: 'USE'},
        {value: 'CREATE'},
        {value: 'ALL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
