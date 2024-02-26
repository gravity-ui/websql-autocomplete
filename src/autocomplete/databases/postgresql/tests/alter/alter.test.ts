import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'TYPE'},
        {value: 'TEXT'},
        {value: 'STATISTICS'},
        {value: 'TABLESPACE'},
        {value: 'USER'},
        {value: 'ROLE'},
        {value: 'EVENT'},
        {value: 'TRIGGER'},
        {value: 'RULE'},
        {value: 'FOREIGN'},
        {value: 'TABLE'},
        {value: 'MATERIALIZED'},
        {value: 'VIEW'},
        {value: 'INDEX'},
        {value: 'SEQUENCE'},
        {value: 'SUBSCRIPTION'},
        {value: 'SERVER'},
        {value: 'SCHEMA'},
        {value: 'ROUTINE'},
        {value: 'PUBLICATION'},
        {value: 'PROCEDURE'},
        {value: 'POLICY'},
        {value: 'OPERATOR'},
        {value: 'PROCEDURAL'},
        {value: 'LANGUAGE'},
        {value: 'GROUP'},
        {value: 'FUNCTION'},
        {value: 'DOMAIN'},
        {value: 'DATABASE'},
        {value: 'CONVERSION'},
        {value: 'COLLATION'},
        {value: 'AGGREGATE'},
        {value: 'SYSTEM'},
        {value: 'LARGE'},
        {value: 'EXTENSION'},
        {value: 'DEFAULT'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest VIEW after ALTER MATERIALIZED', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER MATERIALIZED |');
    const keywords: KeywordSuggestion[] = [{value: 'VIEW'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest views after ALTER MATERIALIZED VIEW', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER MATERIALIZED VIEW |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest keywords after TABLE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER TABLE |');

    const keywords: KeywordSuggestion[] = [{value: 'ONLY'}, {value: 'IF'}, {value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest tables after ALTER TABLE between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'DROP VIEW before_view; ALTER TABLE | ; DROP VIEW after_view;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest keywords after TABLE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table |');

    const keywords: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'RENAME'},
        {value: 'ATTACH'},
        {value: 'DETACH'},
        {value: 'ADD'},
        {value: 'ALTER'},
        {value: 'DROP'},
        {value: 'VALIDATE'},
        {value: 'SET'},
        {value: 'CLUSTER'},
        {value: 'ENABLE'},
        {value: 'DISABLE'},
        {value: 'INHERIT'},
        {value: 'NO'},
        {value: 'OF'},
        {value: 'NOT'},
        {value: 'OWNER'},
        {value: 'RESET'},
        {value: 'REPLICA'},
        {value: 'FORCE'},
        {value: 'OPTIONS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after ALTER VIEW', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER VIEW |');

    const keywords: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after ALTER VIEW between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER VIEW | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});
