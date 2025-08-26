import {parseTrinoQueryWithoutCursor} from '../index';

test('should not report errors on semicolons at the end', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(`
        SELECT * FROM test_catalog.test_schema.test_table;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should allow queries without semicolon at the end', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(`
        SELECT * FROM test_catalog.test_schema.test_table
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
