import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after DROP INDEX', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP INDEX |');

    const keywords: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}, {value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywords);

    expect(parseResult.suggestIndexes).toBeTruthy();
});
