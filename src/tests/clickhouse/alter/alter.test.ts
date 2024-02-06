import {KeywordSuggestion} from '../../..';
import {parseClickHouseQueryWithCursor} from '../../shared/lib';

test('should suggest keywords after ALTER', () => {
    const parseResult = parseClickHouseQueryWithCursor('ALTER |');
    const keywords: KeywordSuggestion[] = [{value: 'TABLE'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});
