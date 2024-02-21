import {
    KeywordSuggestion,
    TableOrViewSuggestion,
    parseClickHouseQueryWithoutCursor,
} from '../../../../index';
import {parseClickHouseQueryWithCursor} from '../../../lib';

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DROP |');
    const keywords: KeywordSuggestion[] = [
        {value: 'VIEW'},
        {value: 'TABLE'},
        {value: 'TEMPORARY'},
        {value: 'DICTIONARY'},
        {value: 'DATABASE'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest TABLE after DROP TEMPORARY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DROP TEMPORARY |');
    const keywords: KeywordSuggestion[] = [{value: 'TABLE'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after DROP TEMPORARY TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DROP TEMPORARY TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest tables after DROP TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DROP TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after DROP VIEW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DROP VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after multiple drop statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DROP VIEW test_view; DROP TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after multiple drop statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DROP TABLE test_table; DROP VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should not report error on DROP TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('DROP TABLE test_table;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report error on DROP VIEW', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('DROP VIEW test_view;');

    expect(autocompleteResult.errors).toHaveLength(0);
});
