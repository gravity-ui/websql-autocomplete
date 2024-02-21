import {parseClickHouseQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after DELETE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FROM'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FROM', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE FROM |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE FROM test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WHERE'},
        {value: 'ON'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('DELETE FROM test_table WHERE |');

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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
