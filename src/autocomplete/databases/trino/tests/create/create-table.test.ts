import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after TABLE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE TABLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE TABLE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'WITH'},
        {value: 'COMMENT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the first column', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE TABLE test_table (test_column |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ROW'},
        {value: 'INTERVAL'},
        {value: 'TIMESTAMP'},
        {value: 'TIME'},
        {value: 'DOUBLE'},
        {value: 'ARRAY'},
        {value: 'MAP'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the second column', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'CREATE TABLE test_table (test_column TEXT, test_column_2 |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ROW'},
        {value: 'INTERVAL'},
        {value: 'TIMESTAMP'},
        {value: 'TIME'},
        {value: 'DOUBLE'},
        {value: 'ARRAY'},
        {value: 'MAP'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the columns', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'CREATE TABLE test_table (test_column TEXT, test_column_2 TEXT) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'COMMENT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
