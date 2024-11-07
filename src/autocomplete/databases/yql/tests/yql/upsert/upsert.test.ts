import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {YQLColumnsSuggestion} from '../../../types';

test('should suggest properly after UPSERT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('UPSERT |');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OBJECT'}, {value: 'INTO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const autocompleteResult = parseYqlQueryWithCursor('UPSERT INTO |');
    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('UPSERT INTO test_table |');
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
    const autocompleteResult = parseYqlQueryWithCursor('UPSERT INTO test_table( |');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DISCARD'},
        {value: 'PROCESS'},
        {value: 'REDUCE'},
        {value: 'FROM'},
        {value: 'SELECT'},
    ];
    const columnSuggestion: YQLColumnsSuggestion = {tables: [{name: 'test_table'}], all: true};
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});
test('should suggest properly after table name with a bracket and column', () => {
    const autocompleteResult = parseYqlQueryWithCursor('UPSERT INTO test_table( col1, |');
    const keywordsSuggestion: KeywordSuggestion[] = [];
    const columnSuggestion: YQLColumnsSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'UPSERT INTO test_table(test_column_1, test_column_2) |',
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
    const autocompleteResult = parseYqlQueryWithCursor(
        'UPSERT INTO test_table(test_column_1, test_column_2) VALUES (|',
    );

    expect(autocompleteResult.suggestColumns).toBeFalsy();
});

test('should suggest properly after values', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'UPSERT INTO test_table(test_column_1, test_column_2) VALUES (123, 321) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'RETURNING'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
