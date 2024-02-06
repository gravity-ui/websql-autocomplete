import {KeywordSuggestion} from '../../..';
import {parseMySqlQueryWithCursor} from '../../shared/lib';

test('should suggest keywords after ALTER', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'USER'},
        {value: 'VIEW'},
        {value: 'SQL'},
        {value: 'DEFINER'},
        {value: 'ALGORITHM'},
        {value: 'TABLESPACE'},
        {value: 'TABLE'},
        {value: 'IGNORE'},
        {value: 'OFFLINE'},
        {value: 'ONLINE'},
        {value: 'SERVER'},
        {value: 'PROCEDURE'},
        {value: 'LOGFILE'},
        {value: 'INSTANCE'},
        {value: 'FUNCTION'},
        {value: 'EVENT'},
        {value: 'DATABASE'},
        {value: 'SCHEMA'},
    ];

    expect(parseResult.suggestKeywords).toEqual(keywords);
});
