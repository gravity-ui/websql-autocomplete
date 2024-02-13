import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../..';

test('should suggest properly after UPDATE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ONLY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after UPDATE between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: '*'}, {value: 'AS'}, {value: 'SET'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SET', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table SET |');

    // TODO SET is perceived as alias here
    // const keywordsSuggestion: KeywordSuggestion[] = [];
    // expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column after SET between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table SET test_column |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column equals', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table SET test_column = |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the first column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'COLLATE'},
        {value: 'AT'},
        {value: '*'},
        {value: 'OPERATOR'},
        {value: 'SIMILAR'},
        {value: 'ILIKE'},
        {value: 'LIKE'},
        {value: 'NOT'},
        {value: 'IS'},
        {value: 'ISNULL'},
        {value: 'NOTNULL'},
        {value: 'IN'},
        {value: 'BETWEEN'},
        {value: 'AND'},
        {value: 'OR'},
        {value: 'FROM'},
        {value: 'WHERE'},
        {value: 'RETURNING'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest table name for second column after SET', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table SET id = 1, |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for second column after SET between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET id = 1, | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after WHERE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" WHERE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
        {value: 'CURRENT'},
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column after WHERE between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET id = 1 WHERE | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after RETURNING', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" RETURNING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'UPDATE test_table SET id = 1 WHERE id = 1;',
    );

    expect(parseResult.errors).toHaveLength(0);
});
