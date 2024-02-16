import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest triggers after SHOW CREATE VIEW', () => {
    const parseResult = parseMySqlQueryWithCursor('SHOW CREATE VIEW |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor('SHOW CREATE VIEW test_view;');
    expect(parseResult.errors).toHaveLength(0);
});
