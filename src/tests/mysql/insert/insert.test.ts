import {parseMySqlQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../..';

test('should suggest properly after INSERT', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INTO'},
        {value: 'IGNORE'},
        {value: 'DELAYED'},
        {value: 'HIGH_PRIORITY'},
        {value: 'LOW_PRIORITY'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after INSERT INTO between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SET'},
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'VALUE'},
        {value: 'PARTITION'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUE', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES ( |');

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
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES with a bracket after a content', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES ("test", |');

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
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after values contents', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table VALUES ("test") | ');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'AS'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name with a bracket', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table( | ');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SELECT'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO test_table(| ; ALTER TABLE after_table DROP COLUMN id',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after the first column', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table(test_column, | ');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table with columns', () => {
    const parseResult = parseMySqlQueryWithCursor('INSERT INTO test_table(test_column) | ');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'VALUE'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor('INSERT INTO test_table(id) VALUES(1);');

    expect(parseResult.errors).toHaveLength(0);
});
