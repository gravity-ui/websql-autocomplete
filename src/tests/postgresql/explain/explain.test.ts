import {KeywordSuggestion} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../lib';

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const parseResults = parsePostgreSqlQueryWithCursor('EXPLAIN |');
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

    expect(parseResults.suggestKeywords).toEqual(keywordSuggestion);
    expect(parseResults.suggestTemplates).toEqual(true);
});
