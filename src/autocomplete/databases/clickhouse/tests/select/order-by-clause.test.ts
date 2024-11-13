import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';
import {
    ColumnAliasSuggestion,
    ColumnSuggestion,
    KeywordSuggestion,
} from '../../../../shared/autocomplete-types';

test('should suggest properly after ORDER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table as t ORDER |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER BY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY |',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ' +
            'SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY | ; ' +
            'ALTER TABLE after_table DROP COLUMN id;',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY |',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
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
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ' +
            'SELECT id as id1 FROM (SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY | ; ' +
            'ALTER TABLE after_table DROP COLUMN id;',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: '*'},
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'count'}, {name: 't1'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after column identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT count(*) as count, test_column t1 FROM test_table as t ORDER BY test_column |',
    );
    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'DATE'},
        {value: 'FIRST'},
        {value: 'ID'},
        {value: 'KEY'},
        {value: 'IS'},
        {value: 'BETWEEN'},
        {value: 'NOT'},
        {value: 'OR'},
        {value: 'AND'},
        {value: 'ILIKE'},
        {value: 'LIKE'},
        {value: 'IN'},
        {value: 'GLOBAL'},
        {value: '*'},
        {value: 'INTERPOLATE'},
        {value: 'STEP'},
        {value: 'TO'},
        {value: 'FROM'},
        {value: 'WITH'},
        {value: 'COLLATE'},
        {value: 'NULLS'},
        {value: 'ASC'},
        {value: 'ASCENDING'},
        {value: 'DESC'},
        {value: 'DESCENDING'},
        {value: 'SETTINGS'},
        {value: 'LIMIT'},
        {value: 'EXCEPT'},
        {value: 'INTERSECT'},
        {value: 'UNION'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WITH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        SELECT * FROM
            test_table
        ORDER BY
            test_column1
                WITH |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'FILL'}]);
});

test('should suggest properly after from value', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        SELECT * FROM
            test_table
        ORDER BY
            test_column1
                FROM 0 |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'INTERPOLATE'},
        {value: 'STEP'},
        {value: 'TO'},
        {value: 'SETTINGS'},
        {value: 'LIMIT'},
        {value: 'EXCEPT'},
        {value: 'INTERSECT'},
        {value: 'UNION'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ]);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        SELECT * FROM
            test_table
        ORDER BY
            test_column1
                WITH FILL
                FROM 0 TO 1
                STEP 0.1
                INTERPOLATE (test_column AS test_column + 1),
            test_column2
                WITH FILL
                FROM 0 TO 1
                STEP 0.1
                INTERPOLATE (test_column AS test_column + 1);
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
