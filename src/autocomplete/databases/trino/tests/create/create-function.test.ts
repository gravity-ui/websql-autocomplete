import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after FUNCTION', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE FUNCTION |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after function name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE FUNCTION test_function |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after argument', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ARRAY'},
        {value: 'ROW'},
        {value: 'INTERVAL'},
        {value: 'TIMESTAMP'},
        {value: 'TIME'},
        {value: 'DOUBLE'},
        {value: 'MAP'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after arguments', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'RETURNS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNS', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) RETURNS |',
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

test('should suggest properly after RETURNS and a type', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) RETURNS TEXT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ARRAY'},
        {value: 'RETURN'},
        {value: 'SET'},
        {value: 'CASE'},
        {value: 'IF'},
        {value: 'ITERATE'},
        {value: 'LEAVE'},
        {value: 'BEGIN'},
        {value: 'LOOP'},
        {value: 'WHILE'},
        {value: 'REPEAT'},
        {value: 'LANGUAGE'},
        {value: 'NOT'},
        {value: 'DETERMINISTIC'},
        {value: 'RETURNS'},
        {value: 'CALLED'},
        {value: 'SECURITY'},
        {value: 'COMMENT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'CREATE FUNCTION example.default.meaning_of_life() RETURNS bigint BEGIN RETURN 42; END',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
