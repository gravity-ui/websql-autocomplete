import {KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {parseClickHouseQueryWithCursor} from '../../shared/lib';

test('should suggest keywords after DROP', () => {
    const parseResult = parseClickHouseQueryWithCursor('DROP |');
    const keywords: KeywordSuggestion[] = [
        {value: 'VIEW'},
        {value: 'TABLE'},
        {value: 'TEMPORARY'},
        {value: 'DICTIONARY'},
        {value: 'DATABASE'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest TABLE after DROP TEMPORARY', () => {
    const parseResult = parseClickHouseQueryWithCursor('DROP TEMPORARY |');
    const keywords: KeywordSuggestion[] = [{value: 'TABLE'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after DROP TEMPORARY TABLE', () => {
    const parseResult = parseClickHouseQueryWithCursor('DROP TEMPORARY TABLE |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});
