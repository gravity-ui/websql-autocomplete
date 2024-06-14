import {parseYqQueryWithCursor} from '../../../index';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after INSERT', () => {
    const autocompleteResult = parseYqQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OR'}, {value: 'INTO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after OR', () => {
    const autocompleteResult = parseYqQueryWithCursor('INSERT OR |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'IGNORE'},
        {value: 'REVERT'},
        {value: 'ABORT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const autocompleteResult = parseYqQueryWithCursor('INSERT INTO |');
    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqQueryWithCursor('INSERT INTO test_table |');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'ERASE'},
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

test('should suggest properly after table name with a bracket', () => {
    const autocompleteResult = parseYqQueryWithCursor('INSERT INTO test_table(|');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DISCARD'},
        {value: 'PROCESS'},
        {value: 'REDUCE'},
        {value: 'FROM'},
        {value: 'SELECT'},
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) |',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'VALUES'},
        {value: 'DISCARD'},
        {value: 'PROCESS'},
        {value: 'REDUCE'},
        {value: 'FROM'},
        {value: 'SELECT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (|',
    );

    expect(autocompleteResult.suggestColumns).toBeFalsy();
});

test('should suggest properly after values', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (123, 321) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
