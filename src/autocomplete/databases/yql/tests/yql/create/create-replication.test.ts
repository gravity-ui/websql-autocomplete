import {parseYQLQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest properly after ASYNC', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE ASYNC |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'REPLICATION'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after REPLICATION', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE ASYNC REPLICATION |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});

test('should suggest properly after replication name', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE ASYNC REPLICATION test |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FOR'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});
test('should suggest properly after FOR', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE ASYNC REPLICATION test FOR |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});
