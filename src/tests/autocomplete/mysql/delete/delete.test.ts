import {parseMySqlQueryWithCursor} from '../../../lib';
import {KeywordSuggestion} from '../../../../types';

test('should suggest properly after DELETE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DELETE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FROM'},
        {value: 'IGNORE'},
        {value: 'QUICK'},
        {value: 'LOW_PRIORITY'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DELETE FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DELETE FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'USING'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WHERE'},
        {value: 'PARTITION'},
        {value: 'AS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DELETE FROM test_table WHERE |');

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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after LIMIT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DELETE FROM test_table LIMIT |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: fix
// grammar treats ORDER as the alias
test.skip('should suggest properly after ORDER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DELETE FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'BY'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
        {value: 'WHERE'},
        {value: 'PARTITION'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DELETE FROM test_table t ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
