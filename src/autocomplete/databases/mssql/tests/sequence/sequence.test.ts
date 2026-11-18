import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';

// DROP SEQUENCE | is not supported: sequence name is optional in grammar, so the statement is complete there
test.each([
    'DROP SEQUENCE dbo.|',
    'ALTER SEQUENCE |',
    'SELECT NEXT VALUE FOR | FROM test_table',
    'INSERT INTO test_table (test_column) VALUES (NEXT VALUE FOR |)',
])('should suggest sequences after %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithCursor(query);

    expect(autocompleteResult.suggestSequences).toEqual(true);
    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should not suggest sequences for new sequence name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE SEQUENCE |');

    expect(autocompleteResult.suggestSequences).toBeFalsy();
});

test.each([
    'DROP SEQUENCE IF EXISTS test_database.dbo.test_sequence',
    'ALTER SEQUENCE dbo.test_sequence RESTART WITH 1 INCREMENT BY 2',
    'SELECT NEXT VALUE FOR dbo.test_sequence',
])('should not report errors on %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(query);

    expect(autocompleteResult.errors).toHaveLength(0);
});
