import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../autocomplete/autocomplete-types';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest triggers after SHOW CREATE TABLE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SHOW CREATE TABLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('SHOW CREATE TABLE test_table;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
