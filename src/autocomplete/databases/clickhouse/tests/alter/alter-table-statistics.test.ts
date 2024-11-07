import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

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

test('should not report errors on extended statistics clause', () => {
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

test('should suggest properly after ADD', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        ALTER TABLE test_table ADD |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'STATISTICS'},
        {value: 'PROJECTION'},
        {value: 'INDEX'},
        {value: 'COLUMN'},
    ]);
});

test('should suggest properly after MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        ALTER TABLE test_table MODIFY |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'TTL'},
        {value: 'ORDER'},
        {value: 'SETTING'},
        {value: 'STATISTICS'},
        {value: 'COLUMN'},
    ]);
});

test('should suggest properly after DROP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        ALTER TABLE test_table DROP |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'STATISTICS'},
        {value: 'DETACHED'},
        {value: 'PARTITION'},
        {value: 'PART'},
        {value: 'PROJECTION'},
        {value: 'INDEX'},
        {value: 'COLUMN'},
    ]);
});

test('should suggest properly after CLEAR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        ALTER TABLE test_table CLEAR |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'STATISTICS'},
        {value: 'PROJECTION'},
        {value: 'INDEX'},
        {value: 'COLUMN'},
    ]);
});

test('should suggest properly after MATERIALIZE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
        ALTER TABLE test_table MATERIALIZE |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'STATISTICS'},
        {value: 'PROJECTION'},
        {value: 'INDEX'},
    ]);
});
