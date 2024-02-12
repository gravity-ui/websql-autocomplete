import {KeywordSuggestion} from '../../../types';
import {parseClickHouseQueryWithCursor} from '../../shared/lib';

test('should suggest properly after DATABASE', () => {
    const parseResults = parseClickHouseQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const parseResults = parseClickHouseQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ENGINE'}, {value: 'ON'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ENGINE', () => {
    const parseResults = parseClickHouseQueryWithCursor('CREATE DATABASE test_database ENGINE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
