import {parseYqlQueryWithCursor} from '../../../index';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after DELETE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DELETE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FROM'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DELETE FROM |');
    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DELETE FROM test_table |');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'RETURNING'},
        {value: 'ON'},
        {value: 'WHERE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DELETE FROM test_table WHERE |');
    const columnsSuggestions: ColumnSuggestion = {
        tables: [
            {
                name: 'test_table',
                alias: undefined,
            },
        ],
    };
    expect(autocompleteResult.suggestColumns).toEqual(columnsSuggestions);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DELETE FROM test_table ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'VALUES'},
        {value: 'DISCARD'},
        {value: 'PROCESS'},
        {value: 'REDUCE'},
        {value: 'FROM'},
        {value: 'SELECT'},
        {value: 'DEFAULT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
