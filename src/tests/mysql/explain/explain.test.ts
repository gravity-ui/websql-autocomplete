import {KeywordSuggestion} from '../../..';
import {parseMySqlQueryWithCursor} from '../../lib';

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const parseResults = parseMySqlQueryWithCursor('EXPLAIN |');
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

    expect(parseResults.suggestKeywords).toEqual(keywordSuggestion);
    expect(parseResults.suggestTemplates).toEqual(true);
});
