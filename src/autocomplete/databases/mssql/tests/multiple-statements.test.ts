import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../index.js';
import {ColumnSuggestion} from '../../../shared/autocomplete-types.js';

test('should not report errors on multiple statements', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on multiple statements without semicolons', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(`
        SELECT * FROM test_table
        SELECT * FROM test_table
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on multiple batches', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(`
        USE test_database;
        GO
        SELECT * FROM test_table;
        GO
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest table name for column after GO', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(`
        SELECT * FROM before_table;
        GO
        SELECT | FROM test_table;
    `);
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});
