import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after RENAME INDEX', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table RENAME INDEX |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestIndexes).toBeTruthy();
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table RENAME INDEX test_index TO test_index_2;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
