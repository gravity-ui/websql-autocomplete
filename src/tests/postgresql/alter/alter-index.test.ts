import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after ALTER INDEX', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}, {value: 'ALL'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestIndexes).toBeTruthy();
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER INDEX test_index RENAME to test_index_2;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
