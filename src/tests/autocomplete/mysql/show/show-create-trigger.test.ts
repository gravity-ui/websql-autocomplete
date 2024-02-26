import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../autocomplete/autocomplete-types';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest triggers after SHOW CREATE TRIGGER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SHOW CREATE TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('SHOW CREATE TRIGGER test_trigger;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
