import {parseYqQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    YqlAutocompleteResult,
} from '../../../../../autocomplete-types';

const afterGroupByKeywords: KeywordSuggestion[] = [
    {value: 'ALL'},
    {value: 'DISTINCT'},
    {value: 'NULL'},
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

function getAfterGroupByCommonExpections(autocompleteResult: YqlAutocompleteResult): void {
    expect(autocompleteResult.suggestAggregateFunctions).toBeFalsy();
    expect(autocompleteResult.suggestWindowFunctions).toBeFalsy();
    expect(autocompleteResult.suggestFunctions).toBeTruthy();
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
    expect(autocompleteResult.suggestTableFunctions).toBeFalsy();
}

test('should suggest properly after GROUP', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table as t GROUP |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}, {value: 'COMPACT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after GROUP BY', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT count(*) as count, test_column t1 FROM test_table as t GROUP BY |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestKeywords).toEqual(afterGroupByKeywords);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    getAfterGroupByCommonExpections(autocompleteResult);
});

test('should suggest properly after GROUP BY in nested statement', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t GROUP BY |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestKeywords).toEqual(afterGroupByKeywords);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    getAfterGroupByCommonExpections(autocompleteResult);
});

test('should suggest properly after GROUP BY between statements in nested statement', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM before_table; ' +
            'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t GROUP BY | ; ' +
            'SELECT * FROM after_table;',
    );

    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestKeywords).toEqual(afterGroupByKeywords);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    getAfterGroupByCommonExpections(autocompleteResult);
});
