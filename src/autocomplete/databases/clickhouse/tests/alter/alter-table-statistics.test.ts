import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors on statistics clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        ALTER TABLE test_table ADD STATISTICS test_column TYPE test_type;
        ALTER TABLE test_table MODIFY STATISTICS test_column TYPE test_type;
        ALTER TABLE test_table DROP STATISTICS test_column;
        ALTER TABLE test_table CLEAR STATISTICS test_column;
        ALTER TABLE test_table MATERIALIZE STATISTICS test_column;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on statistics clause in extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        ALTER TABLE test_table
            ADD STATISTICS IF NOT EXISTS test_column1, test_column2 TYPE test_type
            SETTINGS test_setting = 1;
        ALTER TABLE test_table
            MODIFY STATISTICS test_column1, test_column2 TYPE test_type
            SETTINGS test_setting = 1;
        ALTER TABLE test_table
            DROP STATISTICS IF EXISTS test_column1, test_column2
            SETTINGS test_setting = 1;
        ALTER TABLE test_table
            CLEAR STATISTICS IF EXISTS test_column1, test_column2
            SETTINGS test_setting = 1;
        ALTER TABLE test_table
            MATERIALIZE STATISTICS IF EXISTS test_column1, test_column2
            SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
