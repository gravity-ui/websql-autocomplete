import {parseTrinoQueryWithoutCursor} from '../index';

// TODO-TRINO: support multi-queries
test('should report errors on multiple statements', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(autocompleteResult.errors).toHaveLength(1);
});
