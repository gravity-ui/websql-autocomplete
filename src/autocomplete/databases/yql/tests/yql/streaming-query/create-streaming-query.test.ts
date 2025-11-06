import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after CREATE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'STREAMING'});
});

test('should suggest keywords after CREATE STREAMING', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE STREAMING |');
    const keywords: KeywordSuggestion[] = [{value: 'QUERY'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after CREATE STREAMING QUERY', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE STREAMING QUERY |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['streamingQuery']);
});

test('should suggest object name after CREATE STREAMING QUERY', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE STREAMING QUERY test_query |');
    const keywords: KeywordSuggestion[] = [{value: 'AS'}, {value: 'WITH'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after CREATE STREAMING QUERY WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE STREAMING QUERY test_query WITH |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after CREATE STREAMING QUERY AS', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE STREAMING QUERY test_query AS |');
    const keywords: KeywordSuggestion[] = [{value: 'DO'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after CREATE OR', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE OR |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'REPLACE'});
});

test('should suggest keywords after CREATE OR REPLACE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE OR REPLACE |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'STREAMING'});
});

test('should suggest keywords after CREATE OR REPLACE STREAMING', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE OR REPLACE STREAMING |');
    const keywords: KeywordSuggestion[] = [{value: 'QUERY'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after IF NOT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE STREAMING QUERY IF NOT |');
    const keywords: KeywordSuggestion[] = [{value: 'EXISTS'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest streaming query settings after WITH (', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE STREAMING QUERY test_query WITH (|');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestEntitySettings).toEqual('streamingQuery');
});

test('should suggest streaming query settings after first setting', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE STREAMING QUERY test_query WITH (setting1 = "value1", |',
    );

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestEntitySettings).toEqual('streamingQuery');
});

test('should not suggest settings when typing setting value', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE STREAMING QUERY test_query WITH (setting1 = |',
    );

    expect(autocompleteResult.suggestEntitySettings).toBeFalsy();
});
