import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest properly after OBJECT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE OBJECT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});

test('should suggest properly after object name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE OBJECT test_object (|');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'TYPE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after TYPE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE OBJECT test_object (TYPE |');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SECRET'}, {value: 'TABLESTORE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after type expression', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE OBJECT test_object (TYPE SECRET) |');
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
