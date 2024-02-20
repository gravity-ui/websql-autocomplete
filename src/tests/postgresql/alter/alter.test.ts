import {KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../lib';

test('should suggest keywords after ALTER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER |');
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

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest VIEW after ALTER MATERIALIZED', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER MATERIALIZED |');
    const keywords: KeywordSuggestion[] = [{value: 'VIEW'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest views after ALTER MATERIALIZED VIEW', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER MATERIALIZED VIEW |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest keywords after TABLE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE |');

    const keywords: KeywordSuggestion[] = [{value: 'ONLY'}, {value: 'IF'}, {value: 'ALL'}];
    expect(parseResult.suggestKeywords).toEqual(keywords);

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest tables after ALTER TABLE between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'DROP VIEW before_view; ALTER TABLE | ; DROP VIEW after_view;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest keywords after TABLE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table |');

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
    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest tables after ALTER VIEW', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER VIEW |');

    const keywords: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywords);
    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});

test('should suggest tables after ALTER VIEW between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER VIEW | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});
