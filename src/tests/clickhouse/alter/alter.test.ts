import {KeywordSuggestion} from '../../..';
import {parseClickHouseQueryWithCursor} from '../../shared/lib';

test('should suggest keywords after ALTER', () => {
    const parseResult = parseClickHouseQueryWithCursor('ALTER |');
    const keywords: KeywordSuggestion[] = [{value: 'TABLE'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after TABLE', () => {
    const parseResult = parseClickHouseQueryWithCursor('ALTER TABLE |');

    const keywords: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after table name', () => {
    const parseResult = parseClickHouseQueryWithCursor('ALTER TABLE test_table |');

    const keywords: KeywordSuggestion[] = [
        {value: 'ADD'},
        {value: 'ATTACH'},
        {value: 'CLEAR'},
        {value: 'COMMENT'},
        {value: 'DELETE'},
        {value: 'DETACH'},
        {value: 'DROP'},
        {value: 'FREEZE'},
        {value: 'MATERIALIZE'},
        {value: 'MODIFY'},
        {value: 'MOVE'},
        {value: 'REMOVE'},
        {value: 'RENAME'},
        {value: 'REPLACE'},
        {value: 'UPDATE'},
        {value: 'ON'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywords);
});
