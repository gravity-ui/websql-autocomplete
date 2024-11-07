import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'ALTER TABLE test_table RESET SETTING test_setting1;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        ALTER TABLE test_table
            RESET SETTING test_setting1, test_setting2
            SETTINGS test_setting = 1;    
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
