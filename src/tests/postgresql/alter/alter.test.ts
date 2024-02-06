import {KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';

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
