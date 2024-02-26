import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseClickHouseQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest properly after DATABASE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ENGINE'}, {value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ENGINE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE DATABASE test_database ENGINE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
