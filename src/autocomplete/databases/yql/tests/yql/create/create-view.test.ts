import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after VIEW', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE VIEW |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after view name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE VIEW test_view |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE VIEW test_view WITH (|');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after with statement', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE VIEW test_view WITH (a=b) |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after AS', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE VIEW test_view WITH (a=b) AS |');
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DISCARD'},
        {value: 'PROCESS'},
        {value: 'REDUCE'},
        {value: 'FROM'},
        {value: 'SELECT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
