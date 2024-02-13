import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after CREATE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TEMPORARY'},
        {value: 'TEMP'},
        {value: 'LOCAL'},
        {value: 'GLOBAL'},
        {value: 'UNLOGGED'},
        {value: 'RECURSIVE'},
        {value: 'VIEW'},
        {value: 'OR'},
        {value: 'RULE'},
        {value: 'UNIQUE'},
        {value: 'INDEX'},
        {value: 'TABLE'},
        {value: 'COLLATION'},
        {value: 'TEXT'},
        {value: 'TYPE'},
        {value: 'OPERATOR'},
        {value: 'AGGREGATE'},
        {value: 'DATABASE'},
        {value: 'USER'},
        {value: 'ROLE'},
        {value: 'EVENT'},
        {value: 'CONSTRAINT'},
        {value: 'TRIGGER'},
        {value: 'TRANSFORM'},
        {value: 'TABLESPACE'},
        {value: 'STATISTICS'},
        {value: 'SUBSCRIPTION'},
        {value: 'SEQUENCE'},
        {value: 'SCHEMA'},
        {value: 'TRUSTED'},
        {value: 'PROCEDURAL'},
        {value: 'LANGUAGE'},
        {value: 'POLICY'},
        {value: 'PUBLICATION'},
        {value: 'MATERIALIZED'},
        {value: 'GROUP'},
        {value: 'FUNCTION'},
        {value: 'PROCEDURE'},
        {value: 'FOREIGN'},
        {value: 'SERVER'},
        {value: 'EXTENSION'},
        {value: 'DOMAIN'},
        {value: 'DEFAULT'},
        {value: 'CONVERSION'},
        {value: 'CAST'},
        {value: 'ASSERTION'},
        {value: 'ACCESS'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'MAPPING'},
        {value: 'CURRENT_USER'},
        {value: 'SESSION_USER'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
