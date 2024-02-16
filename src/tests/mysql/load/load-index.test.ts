import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after LOAD INDEX INTO CACHE', () => {
    const parseResult = parseMySqlQueryWithCursor('LOAD INDEX INTO CACHE test_table (|');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestIndexes).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'LOAD INDEX INTO CACHE test_table (test_index);',
    );
    expect(parseResult.errors).toHaveLength(0);
});
