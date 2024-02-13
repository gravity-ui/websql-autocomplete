import {
    KeywordSuggestion,
    TableOrViewSuggestion,
    parseClickHouseQueryWithoutCursor,
} from '../../..';
import {parseClickHouseQueryWithCursor} from '../../lib';

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

test('should suggest tables after DROP TABLE', () => {
    const parseResult = parseClickHouseQueryWithCursor('DROP TABLE |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after DROP VIEW', () => {
    const parseResult = parseClickHouseQueryWithCursor('DROP VIEW |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after multiple drop statements', () => {
    const parseResult = parseClickHouseQueryWithCursor('DROP VIEW test_view; DROP TABLE |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after multiple drop statements', () => {
    const parseResult = parseClickHouseQueryWithCursor('DROP TABLE test_table; DROP VIEW |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should not report error on DROP TABLE', () => {
    const parseResult = parseClickHouseQueryWithoutCursor('DROP TABLE test_table;');

    expect(parseResult.errors).toHaveLength(0);
});

test('should not report error on DROP VIEW', () => {
    const parseResult = parseClickHouseQueryWithoutCursor('DROP VIEW test_view;');

    expect(parseResult.errors).toHaveLength(0);
});
