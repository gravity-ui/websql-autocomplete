import {parseMySqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after INSERT', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INTO'},
        {value: 'IGNORE'},
        {value: 'DELAYED'},
        {value: 'HIGH_PRIORITY'},
        {value: 'LOW_PRIORITY'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SET'},
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'VALUE'},
        {value: 'PARTITION'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUE', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table VALUE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES ( |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
        {value: 'DEFAULT'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket after a content', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES ("test", |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
        {value: 'DEFAULT'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after values contents', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES ("test") | ');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'AS'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name with a bracket', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table( | ');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SELECT'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the first column', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table(test_column, | ');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table with columns', () => {
    const parseResults = parseMySqlQueryWithCursor('INSERT INTO test_table(test_column) | ');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'VALUE'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
