import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DELETE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FROM'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ONLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'AS'},
        {value: 'USING'},
        {value: 'WHERE'},
        {value: 'RETURNING'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE FROM test_table WHERE |');

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
        {value: 'CURRENT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE with alias', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE FROM test_table t WHERE |');

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
        {value: 'CURRENT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE FROM test_table USING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ONLY'},
        {value: 'ROWS'},
        {value: 'XMLTABLE'},
        {value: 'LATERAL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING with alias', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE FROM test_table t USING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ONLY'},
        {value: 'ROWS'},
        {value: 'XMLTABLE'},
        {value: 'LATERAL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNING', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DELETE FROM test_table RETURNING |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNING with alias', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'DELETE FROM test_table t RETURNING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
