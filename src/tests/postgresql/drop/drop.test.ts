import {KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';

test('should suggest keywords after DROP', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP |');
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
        {value: 'RULE'},
        {value: 'TRIGGER'},
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
        {value: 'TABLE'},
        {value: 'SEQUENCE'},
        {value: 'VIEW'},
        {value: 'MATERIALIZED'},
        {value: 'COLLATION'},
        {value: 'CONVERSION'},
        {value: 'STATISTICS'},
        {value: 'TEXT'},
        {value: 'OWNED'},
        {value: 'CAST'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest VIEW after DROP MATERIALIZED', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP MATERIALIZED |');
    const keywords: KeywordSuggestion[] = [{value: 'VIEW'}];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest views after DROP MATERIALIZED VIEW', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP MATERIALIZED VIEW |');

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
});
