import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../../index';

test('should suggest triggers after SHOW CREATE VIEW', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('SHOW CREATE VIEW |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('SHOW CREATE VIEW test_view;');
    expect(autocompleteResult.errors).toHaveLength(0);
});