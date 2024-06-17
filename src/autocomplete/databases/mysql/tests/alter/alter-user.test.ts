import {parseMySqlQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly name after ALTER USER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('ALTER USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}, {value: 'CURRENT_USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestUsers).toEqual(true);
});
