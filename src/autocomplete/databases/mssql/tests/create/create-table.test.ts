import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test('should not suggest existing tables after CREATE TABLE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE TABLE |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should suggest properly after opening bracket', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE TABLE test_table (|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CONSTRAINT'},
        {value: 'PRIMARY'},
        {value: 'UNIQUE'},
        {value: 'FOREIGN'},
        {value: 'CONNECTION'},
        {value: 'DEFAULT'},
        {value: 'CHECK'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toBeUndefined();
});

test('should suggest tables after REFERENCES', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'CREATE TABLE test_table (id INT, other_id INT REFERENCES |',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'CREATE TABLE dbo.test_table (id INT IDENTITY(1,1) PRIMARY KEY, name NVARCHAR(100) NOT NULL, other_id INT REFERENCES dbo.test_table_2 (id));',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
