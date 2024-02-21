import {parseClickHouseQueryWithCursor} from '../../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../../types';
import {parseClickHouseQueryWithoutCursor} from '../../../../index';

test('should suggest properly after INSERT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'INTO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT INTO |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FUNCTION'}, {value: 'TABLE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after INSERT INTO between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT INTO test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORMAT'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'SELECT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name with a bracket', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT INTO test_table( | ');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'SELECT'}];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO test_table(| ; ALTER TABLE after_table DROP COLUMN id',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORMAT'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'SELECT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (|',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after values', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (123, 321) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SELECT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table(id) VALUES(1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
