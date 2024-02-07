// TODO: check other fields, not only suggestKeywords

import {parseMySqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after UPDATE', () => {
    const parseResults = parseMySqlQueryWithCursor('UPDATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IGNORE'}, {value: 'LOW_PRIORITY'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResults = parseMySqlQueryWithCursor('UPDATE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SET'}, {value: 'AS'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SET', () => {
    const parseResults = parseMySqlQueryWithCursor('UPDATE test_table SET |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column', () => {
    const parseResults = parseMySqlQueryWithCursor('UPDATE test_table SET test_column |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column equals', () => {
    const parseResults = parseMySqlQueryWithCursor('UPDATE test_table SET test_column = |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DEFAULT'},
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

test('should suggest properly after the first column', () => {
    const parseResults = parseMySqlQueryWithCursor('UPDATE test_table SET test_column = "test" |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'COLLATE'},
        {value: '*'}, // TODO: remove
        {value: 'MEMBER'},
        {value: 'LIKE'},
        {value: 'NOT'},
        {value: 'IS'},
        {value: 'IN'},
        {value: 'REGEXP'},
        {value: 'RLIKE'},
        {value: 'SOUNDS'},
        {value: 'BETWEEN'},
        {value: 'AND'},
        {value: 'XOR'},
        {value: 'OR'},
        {value: 'WHERE'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" WHERE |',
    );

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
    const parseResults = parseMySqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" LIMIT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: fix expression rule, it should only suggest columns
test.skip('should suggest properly after ORDER', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" ORDER BY |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
