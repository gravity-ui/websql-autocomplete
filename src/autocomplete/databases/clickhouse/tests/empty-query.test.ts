import {KeywordSuggestion} from '../../../autocomplete-types';
import {parseClickHouseQueryWithCursor} from '../../../shared/parse-query-with-cursor';

test('should suggest properly for an empty query', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('|');

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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
