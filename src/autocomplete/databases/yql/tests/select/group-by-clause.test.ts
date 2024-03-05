import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {
    ColumnAliasSuggestion,
    ColumnSuggestion,
    KeywordSuggestion,
    YQLAutocompleteResult,
} from '../../../../autocomplete-types';

const afterGroupByKeywords: KeywordSuggestion[] = [
    {value: 'ALL'},
    {value: 'DISTINCT'},
    {value: 'DIGITS'},
    {value: 'INTEGER_VALUE'},
    {value: 'REAL'},
    {value: 'BLOB'},
    {value: 'NULL'},
    {value: 'CURRENT_TIME'},
    {value: 'CURRENT_DATE'},
    {value: 'CURRENT_TIMESTAMP'},
    {value: 'FALSE'},
    {value: 'TRUE'},
    {value: 'EMPTY_ACTION'},
    {value: 'CAST'},
    {value: 'EXISTS'},
    {value: 'CASE'},
    {value: 'VARIANT'},
    {value: 'ENUM'},
    {value: 'CALLABLE'},
    {value: 'BITCAST'},
    {value: 'JSON_VALUE'},
    {value: 'JSON_EXISTS'},
    {value: 'JSON_QUERY'},
    {value: 'NOT'},
    {value: 'OPTIONAL'},
    {value: 'TUPLE'},
    {value: 'STRUCT'},
    {value: 'LIST'},
    {value: 'FLOW'},
    {value: 'DICT'},
    {value: 'SET'},
    {value: 'RESOURCE'},
    {value: 'TAGGED'},
    {value: 'ROLLUP'},
    {value: 'CUBE'},
    {value: 'GROUPING'},
    {value: 'HOP'},
];

function getAfterGroupByCommonExpections(autocompleteResult: YQLAutocompleteResult): void {
    expect(autocompleteResult.suggestAggregateFunctions).toBeFalsy();
    expect(autocompleteResult.suggestWindowFunctions).toBeFalsy();
    expect(autocompleteResult.suggestFunctions).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
    expect(autocompleteResult.suggestTableFunctions).toBeTruthy();
}

test('should suggest properly after GROUP', () => {
    const autocompleteResult = parseYQLQueryWithCursor('SELECT * FROM test_table as t GROUP |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}, {value: 'COMPACT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after GROUP BY', () => {
    const autocompleteResult = parseYQLQueryWithCursor(
        'SELECT count(*) as count, test_column t1 FROM test_table as t GROUP BY |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(autocompleteResult.suggestKeywords).toEqual(afterGroupByKeywords);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
    getAfterGroupByCommonExpections(autocompleteResult);
});

test('should suggest properly after GROUP BY between statements', () => {
    const autocompleteResult = parseYQLQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ' +
            'SELECT count(*) as count, test_column t1 FROM test_table as t GROUP BY | ; ' +
            'ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(autocompleteResult.suggestKeywords).toEqual(afterGroupByKeywords);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
    getAfterGroupByCommonExpections(autocompleteResult);
});

test('should suggest properly after GROUP BY in nested statement', () => {
    const autocompleteResult = parseYQLQueryWithCursor(
        'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t GROUP BY |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(autocompleteResult.suggestKeywords).toEqual(afterGroupByKeywords);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
    getAfterGroupByCommonExpections(autocompleteResult);
});

test('should suggest properly after GROUP BY between statements in nested statement', () => {
    const autocompleteResult = parseYQLQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ' +
            'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t GROUP BY | ; ' +
            'ALTER TABLE after_table DROP COLUMN id;',
    );

    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(autocompleteResult.suggestKeywords).toEqual(afterGroupByKeywords);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
    getAfterGroupByCommonExpections(autocompleteResult);
});
