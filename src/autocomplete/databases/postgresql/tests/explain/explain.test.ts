import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('EXPLAIN |');
    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'VERBOSE'},
        {value: 'ANALYSE'},
        {value: 'ANALYZE'},
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'TABLE'},
        {value: 'WITH'},
        {value: 'INSERT'},
        {value: 'UPDATE'},
        {value: 'DELETE'},
        {value: 'DECLARE'},
        {value: 'CREATE'},
        {value: 'REFRESH'},
        {value: 'EXECUTE'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
