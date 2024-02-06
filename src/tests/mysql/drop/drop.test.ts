import {KeywordSuggestion} from '../../..';
import {parseMySqlQueryWithCursor} from '../../shared/lib';

test('should suggest keywords after DROP', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP |');
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

    expect(parseResult.suggestKeywords).toEqual(keywords);
});
