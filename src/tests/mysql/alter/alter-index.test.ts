import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after ALTER INDEX', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table ALTER INDEX |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestIndexes).toEqual(true);
});

test('should suggest table name after ALTER INDEX', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table ALTER INDEX test_index VISIBLE;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
