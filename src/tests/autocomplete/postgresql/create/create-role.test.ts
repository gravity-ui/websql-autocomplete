import {parsePostgreSqlQueryWithCursor} from '../../../lib';
import {KeywordSuggestion} from '../../../../types';

test('should suggest properly after ROLE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE ROLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CURRENT_USER'},
        {value: 'SESSION_USER'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after role name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE ROLE test_role |');

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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WITH', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE ROLE test_role WITH |');

    const keywordsSuggestion: KeywordSuggestion[] = [
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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
