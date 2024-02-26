import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {
    ColumnAliasSuggestion,
    ColumnSuggestion,
    KeywordSuggestion,
} from '../../../../autocomplete-types';

test('should suggest properly after ORDER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER with alias', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'SELECT * FROM test_table as t ORDER |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER BY', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY in nested statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY between statements in nested statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});
