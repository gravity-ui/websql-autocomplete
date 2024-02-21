import {KeywordSuggestion} from '../../../types';
import {parseClickHouseQueryWithCursor} from '../../lib';

test('should suggest properly after DATABASE', () => {
    const autocompleteResults = parseClickHouseQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const autocompleteResults = parseClickHouseQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ENGINE'}, {value: 'ON'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ENGINE', () => {
    const autocompleteResults = parseClickHouseQueryWithCursor(
        'CREATE DATABASE test_database ENGINE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});
