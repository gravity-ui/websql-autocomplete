import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';

test('should suggest properly after TOPIC', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE TOPIC |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});
test('should suggest properly after topic name', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE TOPIC test (|');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONSUMER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after CONSUMER', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE TOPIC test (CONSUMER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after consumer name', () => {
    const autocompleteResult = parseYQLQueryWithCursor(
        'CREATE TOPIC test (CONSUMER test_consumer |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
