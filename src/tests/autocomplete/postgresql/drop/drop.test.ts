import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../index';
import {parsePostgreSqlQueryWithCursor} from '../../../test-lib';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP |');
    const keywords: KeywordSuggestion[] = [
        {value: 'OPERATOR'},
        {value: 'ROUTINE'},
        {value: 'PROCEDURE'},
        {value: 'FUNCTION'},
        {value: 'AGGREGATE'},
        {value: 'DATABASE'},
        {value: 'USER'},
        {value: 'GROUP'},
        {value: 'ROLE'},
        {value: 'TRANSFORM'},
        {value: 'TABLESPACE'},
        {value: 'SUBSCRIPTION'},
        {value: 'INDEX'},
        {value: 'DOMAIN'},
        {value: 'TYPE'},
        {value: 'TRIGGER'},
        {value: 'RULE'},
        {value: 'POLICY'},
        {value: 'ACCESS'},
        {value: 'EVENT'},
        {value: 'EXTENSION'},
        {value: 'FOREIGN'},
        {value: 'PROCEDURAL'},
        {value: 'LANGUAGE'},
        {value: 'PUBLICATION'},
        {value: 'SCHEMA'},
        {value: 'SERVER'},
        {value: 'SEQUENCE'},
        {value: 'TABLE'},
        {value: 'VIEW'},
        {value: 'MATERIALIZED'},
        {value: 'COLLATION'},
        {value: 'CONVERSION'},
        {value: 'STATISTICS'},
        {value: 'TEXT'},
        {value: 'OWNED'},
        {value: 'CAST'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest VIEW after DROP MATERIALIZED', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP MATERIALIZED |');
    const keywords: KeywordSuggestion[] = [{value: 'VIEW'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest views after DROP MATERIALIZED VIEW', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP MATERIALIZED VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after DROP TABLE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after DROP VIEW', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after multiple drop statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP VIEW test_view; DROP TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest views after multiple drop statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP TABLE test_table; DROP VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should not report error on DROP TABLE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('DROP TABLE test_table;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report error on DROP VIEW', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('DROP VIEW test_view;');

    expect(autocompleteResult.errors).toHaveLength(0);
});
