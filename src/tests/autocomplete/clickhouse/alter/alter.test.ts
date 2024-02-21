import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../index';
import {parseClickHouseQueryWithCursor} from '../../../lib';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER |');
    const keywords: KeywordSuggestion[] = [{value: 'TABLE'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER TABLE |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest tables after ALTER TABLE between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'DROP VIEW before_view; ALTER TABLE | ; DROP VIEW after_view;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest keywords after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER TABLE test_table |');

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
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
