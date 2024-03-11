import {parseYqlQueryWithoutCursor} from '../../../../../autocomplete';
import {KeywordSuggestion} from '../../../../../autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';

test('should suggest keywords after TOPIC ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TOPIC |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['topic']);
});

test('should suggest keywords after topic name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TOPIC test |');
    const keywords: KeywordSuggestion[] = [
        {value: 'ADD'},
        {value: 'ALTER'},
        {value: 'DROP'},
        {value: 'SET'},
        {value: 'RESET'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after ADD', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TOPIC test ADD |');
    const keywords: KeywordSuggestion[] = [{value: 'CONSUMER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TOPIC test ALTER |');
    const keywords: KeywordSuggestion[] = [{value: 'CONSUMER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TOPIC test DROP |');
    const keywords: KeywordSuggestion[] = [{value: 'CONSUMER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after CONSUMER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TOPIC test DROP CONSUMER |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should not report errors on full statement', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor('ALTER TOPIC test SET (some=NULL)');
    expect(autocompleteResult.errors).toHaveLength(0);
});
