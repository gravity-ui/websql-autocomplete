import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {ColumnAliasSuggestion, ColumnSuggestion, KeywordSuggestion} from '../../../types';

test('should suggest properly after ORDER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER with alias', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table as t ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER BY', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY |',
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
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ' +
            'SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY | ; ' +
            'ALTER TABLE after_table DROP COLUMN id;',
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
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY in nested statement', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY |',
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
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY between statements in nested statement', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ' +
            'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY | ; ' +
            'ALTER TABLE after_table DROP COLUMN id;',
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
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});
