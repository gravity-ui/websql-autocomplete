import {parseMySqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

// TODO: check other fields, not only suggestKeywords

test('should suggest properly after SELECT', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
        {value: 'ALL'},
        {value: 'DISTINCT'},
        {value: 'DISTINCTROW'},
        {value: 'HIGH_PRIORITY'},
        {value: 'STRAIGHT_JOIN'},
        {value: 'SQL_SMALL_RESULT'},
        {value: 'SQL_BIG_RESULT'},
        {value: 'SQL_BUFFER_RESULT'},
        {value: 'SQL_CACHE'},
        {value: 'SQL_NO_CACHE'},
        {value: 'SQL_CALC_FOUND_ROWS'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after *', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FROM'},
        {value: 'WHERE'},
        {value: 'UNION'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'GROUP'},
        {value: 'INTO'},
        {value: 'FOR'},
        {value: 'LOCK'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'JSON_TABLE'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORCE'},
        {value: 'IGNORE'},
        {value: 'USE'},
        {value: 'AS'},
        {value: 'PARTITION'},
        {value: 'CROSS'},
        {value: 'INNER'},
        {value: 'JOIN'},
        {value: 'STRAIGHT_JOIN'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'NATURAL'},
        {value: 'WHERE'},
        {value: 'UNION'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'GROUP'},
        {value: 'INTO'},
        {value: 'FOR'},
        {value: 'LOCK'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table WHERE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: fix, grammar is written this way that ORDER might be an alias
test.skip('should suggest properly after ORDER', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table as t ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after GROUP', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table as t GROUP |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after HAVING', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table as t HAVING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after LIMIT', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table as t LIMIT |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
