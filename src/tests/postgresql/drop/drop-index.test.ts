import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after DROP INDEX', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP INDEX |');

    const keywords: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}, {value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywords);

    expect(parseResult.suggestIndexes).toBeTruthy();
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor('DROP INDEX test_index;');
    expect(parseResult.errors).toHaveLength(0);
});
