import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after ASYNC', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE ASYNC |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'REPLICATION'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after REPLICATION', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE ASYNC REPLICATION |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});

test('should suggest properly after replication name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE ASYNC REPLICATION test |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FOR'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});
test('should suggest properly after FOR', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE ASYNC REPLICATION test FOR |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});
test('should suggest properly after FOR', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE ASYNC REPLICATION test FOR target AS target |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE ASYNC REPLICATION test FOR target AS target WITH (|',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntitySettings).toEqual('replication');
});
