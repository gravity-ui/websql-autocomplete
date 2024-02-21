import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after USER', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CURRENT_USER'}, {value: 'IF'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USER', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE USER test_user |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'IDENTIFIED'},
        {value: 'ATTRIBUTE'},
        {value: 'COMMENT'},
        {value: 'ACCOUNT'},
        {value: 'PASSWORD'},
        {value: 'FAILED_LOGIN_ATTEMPTS'},
        {value: 'PASSWORD_LOCK_TIME'},
        {value: 'WITH'},
        {value: 'REQUIRE'},
        {value: 'DEFAULT'},
    ];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});
