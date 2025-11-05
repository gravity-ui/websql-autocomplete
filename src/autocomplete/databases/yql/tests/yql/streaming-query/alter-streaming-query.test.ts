import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'STREAMING'});
});

test('should suggest keywords after ALTER STREAMING', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER STREAMING |');
    const keywords: KeywordSuggestion[] = [{value: 'QUERY'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after ALTER STREAMING QUERY', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER STREAMING QUERY |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['streamingQuery']);
});

test('should suggest keywords after ALTER STREAMING QUERY object', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER STREAMING QUERY test_query |');
    const keywords: KeywordSuggestion[] = [{value: 'SET'}, {value: 'AS'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after ALTER STREAMING QUERY SET', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER STREAMING QUERY test_query SET |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ALTER STREAMING QUERY AS', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER STREAMING QUERY test_query AS |');
    const keywords: KeywordSuggestion[] = [{value: 'DO'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after IF', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER STREAMING QUERY IF |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'EXISTS'});
});
