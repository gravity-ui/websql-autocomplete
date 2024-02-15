import {parseClickHouseQueryWithCursor} from '../../lib';
import {ColumnAliasSuggestion, ColumnSuggestion, KeywordSuggestion} from '../../../types';

test('should suggest properly after ORDER', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER', () => {
    const parseResult = parseClickHouseQueryWithCursor('SELECT * FROM test_table as t ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER BY', () => {
    const parseResult = parseClickHouseQueryWithCursor(
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

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY between statements', () => {
    const parseResult = parseClickHouseQueryWithCursor(
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

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY in nested statement', () => {
    const parseResult = parseClickHouseQueryWithCursor(
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

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY between statements in nested statement', () => {
    const parseResult = parseClickHouseQueryWithCursor(
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

    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestFunctions).toEqual(true);
    expect(parseResult.suggestAggregateFunctions).toEqual(true);
    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
    expect(parseResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});
