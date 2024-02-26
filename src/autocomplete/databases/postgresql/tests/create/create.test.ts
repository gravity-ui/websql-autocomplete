import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE |');

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
        {value: 'INDEX'},
        {value: 'UNIQUE'},
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
        {value: 'PROCEDURAL'},
        {value: 'LANGUAGE'},
        {value: 'TRUSTED'},
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
        {value: 'CONVERSION'},
        {value: 'DEFAULT'},
        {value: 'CAST'},
        {value: 'ASSERTION'},
        {value: 'ACCESS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'MAPPING'},
        {value: 'CURRENT_USER'},
        {value: 'SESSION_USER'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
