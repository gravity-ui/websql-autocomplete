import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../types';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FUNCTION'},
        {value: 'AGGREGATE'},
        {value: 'USER'},
        {value: 'ROLE'},
        {value: 'VIEW'},
        {value: 'SQL'},
        {value: 'DEFINER'},
        {value: 'ALGORITHM'},
        {value: 'OR'},
        {value: 'TRIGGER'},
        {value: 'TABLESPACE'},
        {value: 'TABLE'},
        {value: 'TEMPORARY'},
        {value: 'SERVER'},
        {value: 'PROCEDURE'},
        {value: 'LOGFILE'},
        {value: 'INDEX'},
        {value: 'FULLTEXT'},
        {value: 'SPATIAL'},
        {value: 'UNIQUE'},
        {value: 'OFFLINE'},
        {value: 'ONLINE'},
        {value: 'EVENT'},
        {value: 'DATABASE'},
        {value: 'SCHEMA'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
