import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after VIEW', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE VIEW |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should suggest properly after view name', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE VIEW test_view |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'AS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AS', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE VIEW test_view AS |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'TABLE'},
        {value: 'WITH'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
