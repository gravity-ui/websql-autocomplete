import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after USER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'MAPPING'},
        {value: 'CURRENT_USER'},
        {value: 'SESSION_USER'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after user name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE USER test_user |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'PASSWORD'},
        {value: 'ENCRYPTED'},
        {value: 'UNENCRYPTED'},
        {value: 'INHERIT'},
        {value: 'CONNECTION'},
        {value: 'VALID'},
        {value: 'USER'},
        {value: 'SYSID'},
        {value: 'ADMIN'},
        {value: 'ROLE'},
        {value: 'IN'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
