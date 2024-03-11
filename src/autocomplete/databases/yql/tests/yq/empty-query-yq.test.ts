import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseYQQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest properly for an empty query', () => {
    const autocompleteResult = parseYQQueryWithCursor('|');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXPLAIN'},
        {value: 'PRAGMA'},
        {value: 'DISCARD'},
        {value: 'PROCESS'},
        {value: 'REDUCE'},
        {value: 'FROM'},
        {value: 'SELECT'},
        {value: 'USE'},
        {value: 'INSERT'},
        {value: 'REPLACE'},
        {value: 'DECLARE'},
        {value: 'IMPORT'},
        {value: 'EXPORT'},
        {value: 'DO'},
        {value: 'DEFINE'},
        {value: 'EVALUATE'},
        {value: 'IF'},
        {value: 'FOR'},
        {value: 'VALUES'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
