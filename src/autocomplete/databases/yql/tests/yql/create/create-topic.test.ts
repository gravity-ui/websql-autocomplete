import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest properly after TOPIC', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TOPIC |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntity).toBeFalsy();
});
test('should suggest properly after topic name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TOPIC test (|');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONSUMER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after CONSUMER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TOPIC test (CONSUMER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after consumer name', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TOPIC test (CONSUMER test_consumer |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after consumer WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TOPIC test (CONSUMER test_consumer WITH (|',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntitySettings).toEqual('topicConsumer');
});
test('should suggest properly after consumer statement', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TOPIC test (CONSUMER test_consumer) |',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TOPIC test (CONSUMER test_consumer) WITH (|',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestEntitySettings).toEqual('topic');
});
