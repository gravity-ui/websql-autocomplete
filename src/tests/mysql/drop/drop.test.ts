import {KeywordSuggestion, TableOrViewSuggestion, parseMySqlQueryWithoutCursor} from '../../..';
import {parseMySqlQueryWithCursor} from '../../lib';

test('should suggest keywords after DROP', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP |');
    const keywords: KeywordSuggestion[] = [
        {value: 'USER'},
        {value: 'PREPARE'},
        {value: 'ROLE'},
        {value: 'VIEW'},
        {value: 'TRIGGER'},
        {value: 'TABLESPACE'},
        {value: 'TABLE'},
        {value: 'TEMPORARY'},
        {value: 'SERVER'},
        {value: 'FUNCTION'},
        {value: 'PROCEDURE'},
        {value: 'LOGFILE'},
        {value: 'INDEX'},
        {value: 'EVENT'},
        {value: 'DATABASE'},
        {value: 'SCHEMA'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after DROP TABLE', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP TABLE |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after DROP VIEW', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP VIEW |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after multiple drop statements', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP VIEW test_view; DROP TABLE |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after multiple drop statements', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP TABLE test_table; DROP VIEW |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should not report error on DROP TABLE', () => {
    const parseResult = parseMySqlQueryWithoutCursor('DROP TABLE test_table;');

    expect(parseResult.errors).toHaveLength(0);
});

test('should not report error on DROP VIEW', () => {
    const parseResult = parseMySqlQueryWithoutCursor('DROP VIEW test_view;');

    expect(parseResult.errors).toHaveLength(0);
});
