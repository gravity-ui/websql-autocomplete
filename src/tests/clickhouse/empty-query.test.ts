import {KeywordSuggestion} from '../../types';
import {parseClickHouseQueryWithCursor} from '../lib';

test('should suggest properly for an empty query', () => {
    const parseResult = parseClickHouseQueryWithCursor('|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ALTER'},
        {value: 'ATTACH'},
        {value: 'CHECK'},
        {value: 'CREATE'},
        {value: 'REPLACE'},
        {value: 'DESC'},
        {value: 'DESCRIBE'},
        {value: 'DELETE'},
        {value: 'DETACH'},
        {value: 'DROP'},
        {value: 'EXISTS'},
        {value: 'EXPLAIN'},
        {value: 'KILL'},
        {value: 'OPTIMIZE'},
        {value: 'RENAME'},
        {value: 'WITH'},
        {value: 'SELECT'},
        {value: 'SET'},
        {value: 'SHOW'},
        {value: 'SYSTEM'},
        {value: 'TRUNCATE'},
        {value: 'USE'},
        {value: 'WATCH'},
        {value: 'INSERT'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestTemplates).toEqual(true);
});
