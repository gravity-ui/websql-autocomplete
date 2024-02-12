import {parseClickHouseQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after INSERT', () => {
    const parseResults = parseClickHouseQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'INTO'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const parseResults = parseClickHouseQueryWithCursor('INSERT INTO |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FUNCTION'}, {value: 'TABLE'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: support columns suggestion
test('should suggest properly after table name', () => {
    const parseResults = parseClickHouseQueryWithCursor('INSERT INTO test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORMAT'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'SELECT'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResults = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORMAT'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'SELECT'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const parseResults = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (|',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after values', () => {
    const parseResults = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (123, 321) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SELECT', () => {
    const parseResults = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) SELECT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: 'TOP'},
        {value: 'DISTINCT'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
