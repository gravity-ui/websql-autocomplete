import {parseYqlQueryWithoutCursor} from '../../../../autocomplete';

test('should not report errors on multiple statements', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
