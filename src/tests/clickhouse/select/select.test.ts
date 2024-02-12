import {parseClickHouseQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../types';

// TODO: check other fields, not only suggestKeywords

test('should suggest properly after SELECT', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: 'TOP'},
        {value: 'DISTINCT'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after *', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'DATE'},
        {value: 'FIRST'},
        {value: 'ID'},
        {value: 'KEY'},
        {value: 'IS'},
        {value: 'BETWEEN'},
        {value: 'NOT'},
        {value: 'OR'},
        {value: 'AND'},
        {value: 'ILIKE'},
        {value: 'LIKE'},
        {value: 'IN'},
        {value: 'GLOBAL'},
        {value: '*'},
        {value: 'SETTINGS'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'HAVING'},
        {value: 'WITH'},
        {value: 'GROUP'},
        {value: 'WHERE'},
        {value: 'PREWHERE'},
        {value: 'WINDOW'},
        {value: 'INNER'},
        {value: 'LEFT'},
        {value: 'ARRAY'},
        {value: 'FROM'},
        {value: 'UNION'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'DATE'},
        {value: 'FIRST'},
        {value: 'ID'},
        {value: 'KEY'},
        {value: 'JOIN'},
        {value: 'ALL'},
        {value: 'ANY'},
        {value: 'ASOF'},
        {value: 'INNER'},
        {value: 'ANTI'},
        {value: 'SEMI'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'FULL'},
        {value: 'GLOBAL'},
        {value: 'LOCAL'},
        {value: 'CROSS'},
        {value: 'SAMPLE'},
        {value: 'FINAL'},
        {value: 'SETTINGS'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'HAVING'},
        {value: 'WITH'},
        {value: 'GROUP'},
        {value: 'WHERE'},
        {value: 'PREWHERE'},
        {value: 'WINDOW'},
        {value: 'ARRAY'},
        {value: 'UNION'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table WHERE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table as t ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER BY', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table as t ORDER BY |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after GROUP', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table as t GROUP |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after GROUP BY', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table as t GROUP BY |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: 'CUBE'},
        {value: 'ROLLUP'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after HAVING', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table as t HAVING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after LIMIT', () => {
    const parseResults = parseClickHouseQueryWithCursor('SELECT * FROM test_table as t LIMIT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest tables with inline comment', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM | --SELECT * FROM test_table',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables with multiline comment', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM | /*SELECT * FROM test_table*/',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});
