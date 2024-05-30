import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest properly after TABLE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TABLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TABLE test_table |');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly table entry start', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TABLE test_table (|');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'PRIMARY'},
        {value: 'PARTITION'},
        {value: 'ORDER'},
        {value: 'INDEX'},
        {value: 'FAMILY'},
        {value: 'CHANGEFEED'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly column schema', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TABLE test_table (test_schema |');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'VARIANT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'ENUM'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
        {value: 'CALLABLE'},
        {value: 'DECIMAL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
});
test('should suggest properly after composite type', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TABLE test_table (test_schema OPTIONAL<|',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'VARIANT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'ENUM'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
        {value: 'CALLABLE'},
        {value: 'DECIMAL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
});
test('should suggest properly after column schema', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TABLE test_table (test_schema OPTIONAL<String>) |',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'TABLESTORE'},
        {value: 'WITH'},
        {value: 'PARTITION'},
        {value: 'INHERITS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TABLE test_table WITH |');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'COLUMNS'}, {value: 'SCHEMA'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestTableHints).toEqual('create_table_stmt');
});
