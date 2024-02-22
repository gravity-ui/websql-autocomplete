import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../index';

test('should suggest properly after DATABASE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DEFAULT'},
        {value: 'CHARACTER'},
        {value: 'CHAR'},
        {value: 'COLLATE'},
        {value: 'ENCRYPTION'},
        {value: 'READ'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
