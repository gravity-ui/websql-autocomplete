import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors on detach clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        ALTER TABLE test_table DETACH PARTITION 'test_partition';
        ALTER TABLE test_table DETACH PART 1;
        ALTER TABLE test_table DETACH PART tuple();
        ALTER TABLE test_table DETACH PART tuple(toYYYYMM(toDate('test_date_string')));
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended detach clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        ALTER TABLE test_table ON CLUSTER test_cluster
          DETACH PARTITION 'test_partition'
          SETTINGS test_setting = 1;
        ALTER TABLE test_table ON CLUSTER test_cluster
          DETACH PART 1
          SETTINGS test_setting = 1;
        ALTER TABLE test_table ON CLUSTER test_cluster
          DETACH PART tuple()
          SETTINGS test_setting = 1;
        ALTER TABLE test_table ON CLUSTER test_cluster
          DETACH PART tuple(toYYYYMM(toDate('test_date_string')))
          SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after DETACH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster DETACH |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'PARTITION'}, {value: 'PART'}]);
});

test('should not report errors on drop clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table DROP PARTITION 'test_partition';
      ALTER TABLE test_table DROP PART 1;
      ALTER TABLE test_table DROP PART tuple();
      ALTER TABLE test_table DROP PART tuple(toYYYYMM(toDate('test_date_string')));
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after DROP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster DROP |
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

test('should not report errors on extended drop clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster
        DROP PARTITION 'test_partition'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table ON CLUSTER test_cluster
        DROP PART 1
        SETTINGS test_setting = 1;
      ALTER TABLE test_table ON CLUSTER test_cluster
        DROP PART tuple()
        SETTINGS test_setting = 1;
      ALTER TABLE test_table ON CLUSTER test_cluster
        DROP PART tuple(toYYYYMM(toDate('test_date_string')))
        SETTINGS test_setting = 1;
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on drop detached clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table DROP DETACHED PARTITION 'test_partition';
      ALTER TABLE test_table DROP DETACHED PARTITION ALL;
      ALTER TABLE test_table DROP DETACHED PART 'test_partition';
      ALTER TABLE test_table DROP DETACHED PART ALL;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended drop detached clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table
        DROP DETACHED PARTITION 'test_partition'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        DROP DETACHED PARTITION ALL
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        DROP DETACHED PART 'test_partition'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        DROP DETACHED PART ALL
        SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after DROP DETACHED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster DROP DETACHED |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'PARTITION'}, {value: 'PART'}]);
});

test('should not report errors on forget clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table FORGET PARTITION 'test_partition';
      ALTER TABLE test_table FORGET PARTITION 1;
      ALTER TABLE test_table FORGET PARTITION ID 'test_id';
      ALTER TABLE test_table FORGET PARTITION tuple();
      ALTER TABLE test_table FORGET PARTITION tuple(toYYYYMM(toDate('test_date_string')));
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended forget clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table
        FORGET PARTITION 'test_partition'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FORGET PARTITION 1
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FORGET PARTITION ID 'test_id'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FORGET PARTITION tuple()
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FORGET PARTITION tuple(toYYYYMM(toDate('test_date_string')))
        SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after FORGET', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster FORGET |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'PARTITION'}]);
});

test('should not report errors on freeze clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table FREEZE;
      ALTER TABLE test_table FREEZE PARTITION 1;
      ALTER TABLE test_table FREEZE PARTITION 'test_id';
      ALTER TABLE test_table FREEZE PARTITION ID 'test_id';
      ALTER TABLE test_table FREEZE PARTITION tuple();
      ALTER TABLE test_table FREEZE PARTITION tuple(toYYYYMM(toDate('test_date_string')));
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after FREEZE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster FREEZE |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'WITH'},
        {value: 'PARTITION'},
        {value: 'SETTINGS'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ]);
});

test('should not report errors on extended freeze clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table
        FREEZE WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FREEZE PARTITION 1 WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FREEZE PARTITION 'test_id' WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FREEZE PARTITION ID 'test_id' WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FREEZE PARTITION tuple() WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FREEZE PARTITION tuple(toYYYYMM(toDate('test_date_string'))) WITH NAME 'test_name'
        SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on unfreeze clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table UNFREEZE WITH NAME 'test_name';
      ALTER TABLE test_table UNFREEZE PARTITION 1 WITH NAME 'test_name';
      ALTER TABLE test_table UNFREEZE PARTITION 'test_id' WITH NAME 'test_name';
      ALTER TABLE test_table UNFREEZE PARTITION ID 'test_id' WITH NAME 'test_name';
      ALTER TABLE test_table UNFREEZE PARTITION tuple() WITH NAME 'test_name';
      ALTER TABLE test_table UNFREEZE PARTITION tuple(toYYYYMM(toDate('test_date_string'))) WITH NAME 'test_name';
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended unfreeze clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table
        UNFREEZE WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UNFREEZE PARTITION 1 WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UNFREEZE PARTITION 'test_id' WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UNFREEZE PARTITION ID 'test_id' WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UNFREEZE PARTITION tuple() WITH NAME 'test_name'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UNFREEZE PARTITION tuple(toYYYYMM(toDate('test_date_string'))) WITH NAME 'test_name'
        SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after UNFREEZE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster UNFREEZE |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'WITH'}, {value: 'PARTITION'}]);
});

test('should not report errors on fetch clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table FETCH PARTITION 1 FROM 'test_path_in_zookeeper';
      ALTER TABLE test_table FETCH PARTITION 'test_id' FROM 'test_path_in_zookeeper';
      ALTER TABLE test_table FETCH PARTITION ID 'test_id' FROM 'test_path_in_zookeeper';
      ALTER TABLE test_table FETCH PARTITION tuple() FROM 'test_path_in_zookeeper';
      ALTER TABLE test_table FETCH PARTITION tuple(toYYYYMM(toDate('test_date_string'))) FROM 'test_path_in_zookeeper';
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended fetch clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table
        FETCH PARTITION 1
        FROM 'test_path_in_zookeeper'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FETCH PARTITION 'test_id'
        FROM 'test_path_in_zookeeper'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FETCH PARTITION ID 'test_id'
        FROM 'test_path_in_zookeeper'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FETCH PARTITION tuple()
        FROM 'test_path_in_zookeeper'
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        FETCH PARTITION tuple(toYYYYMM(toDate('test_date_string')))
        FROM 'test_path_in_zookeeper'
        SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after FETCH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table ON CLUSTER test_cluster FETCH |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'PARTITION'}, {value: 'PART'}]);
});

test('should not report errors on update clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table UPDATE test_column = 1 WHERE test_field = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on update clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table
        UPDATE test_column1 = 1, test_column2 = 2
        IN PARTITION 1
        WHERE test_field1 = 1, test_field2 = 1
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UPDATE test_column1 = 1, test_column2 = 2
        IN PARTITION 'test_id'
        WHERE test_field1 = 1, test_field2 = 1
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UPDATE test_column1 = 1, test_column2 = 2
        IN PARTITION ID 'test_id'
        WHERE test_field1 = 1, test_field2 = 1
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UPDATE test_column1 = 1, test_column2 = 2
        IN PARTITION tuple()
        WHERE test_field1 = 1, test_field2 = 1
        SETTINGS test_setting = 1;
      ALTER TABLE test_table
        UPDATE test_column1 = 1, test_column2 = 2
        IN PARTITION tuple(toYYYYMM(toDate('test_date_string')))
        WHERE test_field1 = 1, test_field2 = 1
        SETTINGS test_setting = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on update clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER TABLE test_table DELETE WHERE test_field = 1;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after DELETE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      ALTER TABLE test_table DELETE |
    `);

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'WHERE'}, {value: 'IN'}]);
});

test('should not report errors on update clause', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
    ALTER TABLE test_table
      DELETE IN PARTITION 1
      WHERE test_field1 = 1, test_field2 = 1
      SETTINGS test_setting = 1;
    ALTER TABLE test_table
      DELETE IN PARTITION 'test_id'
      WHERE test_field1 = 1, test_field2 = 1
      SETTINGS test_setting = 1;
    ALTER TABLE test_table
      DELETE IN PARTITION ID 'test_id'
      WHERE test_field1 = 1, test_field2 = 1
      SETTINGS test_setting = 1;
    ALTER TABLE test_table
      DELETE IN PARTITION tuple()
      WHERE test_field1 = 1, test_field2 = 1
      SETTINGS test_setting = 1;
    ALTER TABLE test_table
      DELETE IN PARTITION tuple(toYYYYMM(toDate('test_date_string')))
      WHERE test_field1 = 1, test_field2 = 1
      SETTINGS test_setting = 1;
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
