import {KeywordSuggestion} from '../../..';
import {parseMySqlQueryWithCursor} from '../../lib';

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('EXPLAIN |');
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

    expect(autocompleteResults.suggestKeywords).toEqual(keywordSuggestion);
    expect(autocompleteResults.suggestTemplates).toEqual(true);
});
