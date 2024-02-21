import {KeywordSuggestion} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../lib';

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const autocompleteResults = parsePostgreSqlQueryWithCursor('EXPLAIN |');
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

    expect(autocompleteResults.suggestKeywords).toEqual(keywordSuggestion);
    expect(autocompleteResults.suggestTemplates).toEqual(true);
});
