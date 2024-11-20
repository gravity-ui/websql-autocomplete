import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE |');

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
        {value: 'GROUP'},
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
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'MAPPING'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
