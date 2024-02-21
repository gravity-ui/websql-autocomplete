import {parseMySqlQueryWithCursor} from '../../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../../index';

test('should suggest properly after INSERT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INTO'},
        {value: 'IGNORE'},
        {value: 'DELAYED'},
        {value: 'HIGH_PRIORITY'},
        {value: 'LOW_PRIORITY'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after INSERT INTO between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SET'},
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'VALUE'},
        {value: 'PARTITION'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES ( |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
        {value: 'DEFAULT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket after a content', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'INSERT INTO test_table VALUES ("test", |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
        {value: 'DEFAULT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after values contents', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'INSERT INTO test_table VALUES ("test") | ',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'AS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name with a bracket', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO test_table( | ');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SELECT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO test_table(| ; ALTER TABLE after_table DROP COLUMN id',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after the first column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO test_table(test_column, | ');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table with columns', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('INSERT INTO test_table(test_column) | ');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'VALUE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'INSERT INTO test_table(id) VALUES(1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
