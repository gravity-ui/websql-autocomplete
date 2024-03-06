import {parseYQLQueryWithoutCursor} from '../../../autocomplete';

test('should not report errors on multiple statements', () => {
    const autocompleteResult = parseYQLQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
