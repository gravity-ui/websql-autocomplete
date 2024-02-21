import {parseMySqlQueryWithoutCursor} from '../..';

test('should not report errors on multiple statements', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
