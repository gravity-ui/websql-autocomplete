import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest table name after DROP TRIGGER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP TRIGGER |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('DROP TRIGGER test_trigger;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
