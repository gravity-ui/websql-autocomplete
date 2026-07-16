import {parseTrinoQueryWithoutCursor} from '../index.js';

test('should not report errors on multiple statements', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
