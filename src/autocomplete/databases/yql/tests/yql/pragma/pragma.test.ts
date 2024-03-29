import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest properly after PRAGMA', () => {
    const autocompleteResult = parseYqlQueryWithCursor('PRAGMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestPragmas).toBeTruthy();
});
