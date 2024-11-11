import {parseClickHouseQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DELETE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FROM'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SETTINGS'},
        {value: 'WHERE'},
        {value: 'ON'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE FROM test_table WHERE |');

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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after where clause', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'DELETE FROM test_table WHERE test_column = 1 |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
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
        {value: 'SETTINGS'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
