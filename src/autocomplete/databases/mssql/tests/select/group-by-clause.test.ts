import {parseMsSqlQueryWithCursor} from '../../index.js';
import {
    ColumnAliasSuggestion,
    ColumnSuggestion,
    KeywordSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after GROUP', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table GROUP |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after GROUP BY', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT test_column AS test_alias FROM test_table GROUP BY |',
    );

    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'test_alias'}];
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
    expect(autocompleteResult.suggestFunctions).toEqual(true);
});

test('should suggest properly after GROUP BY between statements', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table GROUP BY | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest columns after GROUP BY in HAVING', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT test_column FROM test_table GROUP BY test_column HAVING |',
    );

    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
    expect(autocompleteResult.suggestAggregateFunctions).toEqual(true);
});
