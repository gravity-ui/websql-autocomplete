import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types';
import {parseClickHouseQueryWithCursor} from '../../index';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'SETTINGS'},
        {value: 'NAMED'},
        {value: 'ROLE'},
        {value: 'POLICY'},
        {value: 'ROW'},
        {value: 'QUOTA'},
        {value: 'USER'},
        {value: 'TABLE'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER TABLE |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest keywords after MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER TABLE test_table MODIFY |');

    const keywords: KeywordSuggestion[] = [
        {value: 'TTL'},
        {value: 'ORDER'},
        {value: 'SETTING'},
        {value: 'STATISTICS'},
        {value: 'COLUMN'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after RESET', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER TABLE test_table RESET |');

    const keywords: KeywordSuggestion[] = [{value: 'SETTING'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
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
        {value: 'DETACH'},
        {value: 'DROP'},
        {value: 'FREEZE'},
        {value: 'UNFREEZE'},
        {value: 'MATERIALIZE'},
        {value: 'MODIFY'},
        {value: 'MOVE'},
        {value: 'REMOVE'},
        {value: 'RENAME'},
        {value: 'REPLACE'},
        {value: 'UPDATE'},
        {value: 'RESET'},
        {value: 'FORGET'},
        {value: 'FETCH'},
        {value: 'DELETE'},
        {value: 'ON'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
