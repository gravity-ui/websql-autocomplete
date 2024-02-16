import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after DROP INDEX', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP INDEX |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'OFFLINE'}, {value: 'ONLINE'}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestIndexes).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor('DROP INDEX test_index ON test_table;');
    expect(parseResult.errors).toHaveLength(0);
});
