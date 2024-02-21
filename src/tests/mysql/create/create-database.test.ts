import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after DATABASE', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DEFAULT'},
        {value: 'CHARACTER'},
        {value: 'CHAR'},
        {value: 'COLLATE'},
        {value: 'ENCRYPTION'},
        {value: 'READ'},
    ];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});
