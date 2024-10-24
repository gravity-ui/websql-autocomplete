import {parseMySqlQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after SCHEMA', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after schema name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE SCHEMA test_schema |');

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
