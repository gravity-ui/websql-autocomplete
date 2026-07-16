import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';
import {parseYqQueryWithCursor} from '../../index.js';

test('should suggest properly for an empty query', () => {
    const autocompleteResult = parseYqQueryWithCursor('|');
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
        {value: 'PARALLEL'},
        {value: 'FOR'},
        {value: 'VALUES'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
