import {KeywordSuggestion} from '../../..';
import {parseClickHouseQueryWithCursor} from '../../lib';

test('should suggest keywords after EXPLAIN', () => {
    const parseResults = parseClickHouseQueryWithCursor('EXPLAIN |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ESTIMATE'},
        {value: 'QUERY'},
        {value: 'PLAN'},
        {value: 'PIPELINE'},
        {value: 'SYNTAX'},
        {value: 'AST'},
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
    ];

    expect(parseResults.suggestKeywords).toEqual(keywords);
    expect(parseResults.suggestTemplates).toEqual(true);
});

// TODO This doesn't work because current ClickHouse suggestTemplates with EXPLAIN autocomplete is broken
test.skip('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const parseResults = parseClickHouseQueryWithCursor('EXPLAIN AST |');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    expect(parseResults.suggestKeywords).toContainEqual(selectKeyword);
    expect(parseResults.suggestTemplates).toEqual(true);
});
