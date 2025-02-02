import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after EXTERNAL', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE EXTERNAL |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'DATA'}, {value: 'TABLE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after DATA', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE EXTERNAL DATA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SOURCE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after SOURCE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE EXTERNAL DATA SOURCE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});
test('should suggest properly after source name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE EXTERNAL DATA SOURCE test |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE EXTERNAL DATA SOURCE test WITH (|');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntitySettings).toEqual('externalDataSource');
});
