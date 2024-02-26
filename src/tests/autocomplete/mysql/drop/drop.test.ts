import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../index';
import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP |');
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after DROP TABLE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after DROP VIEW', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after multiple drop statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP VIEW test_view; DROP TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after multiple drop statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP TABLE test_table; DROP VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should not report error on DROP TABLE', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('DROP TABLE test_table;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report error on DROP VIEW', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('DROP VIEW test_view;');

    expect(autocompleteResult.errors).toHaveLength(0);
});
