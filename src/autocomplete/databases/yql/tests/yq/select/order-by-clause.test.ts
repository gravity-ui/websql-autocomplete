import {parseYqQueryWithCursor} from '../../../index';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {YqlAutocompleteResult} from '../../../types';

const afterOrderByKeywords: KeywordSuggestion[] = [
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
    {value: 'LINEAR'},
    {value: 'DYNAMICLINEAR'},
];

function getAfterOrderByCommonExpections(autocompleteResult: YqlAutocompleteResult): void {
    expect(autocompleteResult.suggestAggregateFunctions).toBeTruthy();
    expect(autocompleteResult.suggestWindowFunctions).toBeTruthy();
    expect(autocompleteResult.suggestFunctions).toBeTruthy();
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
    expect(autocompleteResult.suggestTableFunctions).toBeFalsy();
    expect(autocompleteResult.suggestKeywords).toEqual(afterOrderByKeywords);
}

test('should suggest properly after ORDER', () => {
    const autocompleteResult = parseYqQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TABLESAMPLE'},
        {value: 'SAMPLE'},
        {value: 'FLATTEN'},
        {value: 'NATURAL'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'EXCLUSION'},
        {value: 'FULL'},
        {value: 'OUTER'},
        {value: 'JOIN'},
        {value: 'INNER'},
        {value: 'CROSS'},
        {value: 'ASSUME'},
        {value: 'ORDER'},
        {value: 'WINDOW'},
        {value: 'HAVING'},
        {value: 'GROUP'},
        {value: 'WHERE'},
        {value: 'BY'},
        {value: 'INTO'},
        {value: 'LIMIT'},
        {value: 'INTERSECT'},
        {value: 'EXCEPT'},
        {value: 'UNION'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER BY', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY |',
    );

    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    getAfterOrderByCommonExpections(autocompleteResult);
});

test('should suggest properly after ORDER BY between statements', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM before_table; ' +
            'SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY | ; ' +
            'SELECT * FROM after_table;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    getAfterOrderByCommonExpections(autocompleteResult);
});

test('should suggest properly after ORDER BY in nested statement', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    getAfterOrderByCommonExpections(autocompleteResult);
});

test('should suggest properly after ORDER BY between statements in nested statement', () => {
    const autocompleteResult = parseYqQueryWithCursor(
        'SELECT * FROM before_table; ' +
            'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY | ; ' +
            'SELECT * FROM after_table;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    getAfterOrderByCommonExpections(autocompleteResult);
});
