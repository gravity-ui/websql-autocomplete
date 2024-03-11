import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest properly after GROUP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE GROUP |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after group name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE GROUP test_group |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WITH', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE GROUP test_group WITH |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
test('should suggest properly after user name', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE GROUP test_group (WITH USER test_user |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
