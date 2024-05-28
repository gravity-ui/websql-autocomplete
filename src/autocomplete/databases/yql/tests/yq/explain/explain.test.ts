import {parseYqQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest keywords after EXPLAIN', () => {
    const autocompleteResult = parseYqQueryWithCursor('EXPLAIN |');
    const keywords: KeywordSuggestion[] = [
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
        {value: 'PARALLEL'},
        {value: 'FOR'},
        {value: 'VALUES'},
        {value: 'QUERY'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
