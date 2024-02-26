import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('EXPLAIN |');
    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'DELETE'},
        {value: 'INSERT'},
        {value: 'REPLACE'},
        {value: 'UPDATE'},
        {value: 'FOR'},
        {value: 'EXTENDED'},
        {value: 'PARTITIONS'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
