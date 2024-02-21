import {parseMySqlQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../..';

test('should suggest properly after UPDATE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('UPDATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IGNORE'}, {value: 'LOW_PRIORITY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after UPDATE between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('UPDATE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SET'}, {value: 'AS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SET', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('UPDATE test_table SET |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column after SET between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('UPDATE test_table SET test_column |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column equals', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('UPDATE test_table SET test_column = |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DEFAULT'},
        {value: 'NOT'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'NULL'},
        {value: 'BINARY'},
        {value: 'ROW'},
        {value: 'EXISTS'},
        {value: 'INTERVAL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the first column', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'COLLATE'},
        {value: '*'}, // TODO: remove
        {value: 'MEMBER'},
        {value: 'LIKE'},
        {value: 'NOT'},
        {value: 'IS'},
        {value: 'IN'},
        {value: 'REGEXP'},
        {value: 'RLIKE'},
        {value: 'SOUNDS'},
        {value: 'BETWEEN'},
        {value: 'AND'},
        {value: 'XOR'},
        {value: 'OR'},
        {value: 'WHERE'},
        {value: 'LIMIT'},
        {value: 'ORDER'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest table name for second column after SET', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('UPDATE test_table SET id = 1, |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for second column after SET between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET id = 1, | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" WHERE |',
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
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column after WHERE between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET id = 1 WHERE | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after LIMIT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" LIMIT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: fix expression rule, it should only suggest columns
test.skip('should suggest properly after ORDER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" ORDER BY |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'UPDATE test_table SET id = 1 WHERE id = 1;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
