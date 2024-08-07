import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest table name after DROP INDEX', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP INDEX |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'OFFLINE'}, {value: 'ONLINE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('DROP INDEX test_index ON test_table;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
