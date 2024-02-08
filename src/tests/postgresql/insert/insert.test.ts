import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after INSERT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'INTO'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'TABLE'},
        {value: 'WITH'},
        {value: 'OVERRIDING'},
        {value: 'DEFAULT'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table VALUES |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table VALUES ( |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket after a value', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table VALUES ("test", |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES contents', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table VALUES ("test") | ');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INTERSECT'},
        {value: 'EXCEPT'},
        {value: 'UNION'},
        {value: 'ORDER'},
        {value: 'LIMIT'},
        {value: 'FETCH'},
        {value: 'OFFSET'},
        {value: 'FOR'},
        {value: 'ON'},
        {value: 'RETURNING'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name with a bracket', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table( | ');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'TABLE'},
        {value: 'WITH'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the first column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table(test_column, | ');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table with columns', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('INSERT INTO test_table(test_column) | ');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'TABLE'},
        {value: 'WITH'},
        {value: 'OVERRIDING'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
