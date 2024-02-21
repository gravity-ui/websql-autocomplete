import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after SCHEMA', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after schema name', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE SCHEMA test_schema |');

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
