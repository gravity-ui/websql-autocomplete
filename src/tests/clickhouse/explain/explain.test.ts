import {KeywordSuggestion} from '../../..';
import {parseClickHouseQueryWithCursor} from '../../shared/lib';

// TODO This doesn't work because ClickHouse grammar doesn't have PLAN and PIPELAN
// TODO Also current ClickHouse suggestTemplates with EXPLAIN autocomplete is broken
test.skip('should suggest keywords after EXPLAIN', () => {
    const parseResults = parseClickHouseQueryWithCursor('EXPLAIN |');
    const keywords: KeywordSuggestion[] = [
        {value: 'SYNTAX'},
        {value: 'AST'},
        {value: 'PLAN'},
        {value: 'PIPELINE'},
    ];

    expect(parseResults.suggestKeywords).toEqual(keywords);
    expect(parseResults.suggestTemplates).toEqual(false);
});

// TODO This doesn't work because current ClickHouse suggestTemplates with EXPLAIN autocomplete is broken
test.skip('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const parseResults = parseClickHouseQueryWithCursor('EXPLAIN AST |');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    expect(parseResults.suggestKeywords).toContainEqual(selectKeyword);
    expect(parseResults.suggestTemplates).toEqual(true);
});
