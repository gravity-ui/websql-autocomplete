import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after CACHE INDEX', () => {
    const parseResult = parseMySqlQueryWithCursor('CACHE INDEX test_table ( |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestIndexes).toBeTruthy();
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'CACHE INDEX test_table (test_index) IN test_table;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
