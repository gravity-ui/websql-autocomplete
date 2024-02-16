import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest triggers after SHOW CREATE TABLE', () => {
    const parseResult = parseMySqlQueryWithCursor('SHOW CREATE TABLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor('SHOW CREATE TABLE test_table;');
    expect(parseResult.errors).toHaveLength(0);
});
