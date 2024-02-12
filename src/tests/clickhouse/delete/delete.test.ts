import {parseClickHouseQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after DELETE', () => {
    const parseResults = parseClickHouseQueryWithCursor('DELETE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FROM'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const parseResults = parseClickHouseQueryWithCursor('DELETE FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResults = parseClickHouseQueryWithCursor('DELETE FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WHERE'},
        {value: 'ON'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const parseResults = parseClickHouseQueryWithCursor('DELETE FROM test_table WHERE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
