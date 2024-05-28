import {parseYqQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest properly after PRAGMA', () => {
    const autocompleteResult = parseYqQueryWithCursor('PRAGMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ANSI'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestPragmas).toBeTruthy();
});

test('should suggest properly after PRAGMA ANSI', () => {
    const autocompleteResult = parseYqQueryWithCursor('PRAGMA ANSI |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestPragmas).toBeFalsy();
});
