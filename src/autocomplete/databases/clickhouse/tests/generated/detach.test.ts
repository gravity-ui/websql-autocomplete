/* eslint no-useless-escape: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors detach: 1', () => {
    const query = `DETACH TABLE t_index_lazy_load;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 2', () => {
    const query = `detach table t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 3', () => {
    const query = `detach table data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 4', () => {
    const query = `DETACH TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 5', () => {
    const query = `detach table b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 6', () => {
    const query = `detach table shard_1.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 7', () => {
    const query = `DETACH TABLE dict SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 8', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc01;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 9', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc02;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 10', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc03;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 11', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc04;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 12', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc05;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 13', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc06;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 14', () => {
    const query = `detach table dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 15', () => {
    const query = `DETACH TABLE t_sparse_reload;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 16', () => {
    const query = `DETACH TABLE mview;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 17', () => {
    const query = `detach table 02681_undrop_detach sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 18', () => {
    const query = `DETACH TABLE t_source_part_is_intact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 19', () => {
    const query = `detach table rmt sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 20', () => {
    const query = `detach table rmt1 sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 21', () => {
    const query = `detach table rmt3 sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 22', () => {
    const query = `detach table rmt1;      -- make replica inactive system start replicated sends rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 23', () => {
    const query = `detach table rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 24', () => {
    const query = `detach table mut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 25', () => {
    const query = `DETACH TABLE mutate_and_zero_copy_replication2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 26', () => {
    const query = `DETACH TABLE t_nested_modify;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 27', () => {
    const query = `DETACH TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 28', () => {
    const query = `DETACH TABLE tab SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 29', () => {
    const query = `DETACH TABLE merge_table_standard_delete;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 30', () => {
    const query = `DETACH TABLE t_light;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 31', () => {
    const query = `DETACH TABLE t_large;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 32', () => {
    const query = `DETACH TABLE ipv4_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 33', () => {
    const query = `DETACH TABLE ipv6_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 34', () => {
    const query = `DETACH TABLE t_nested_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 35', () => {
    const query = `detach table ttl_02265;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 36', () => {
    const query = `DETACH TABLE alter_enum_array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 37', () => {
    const query = `DETACH TABLE mergeTree_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 38', () => {
    const query = `DETACH TABLE 02181_test_dictionary; --{serverError CANNOT_DETACH_DICTIONARY_AS_TABLE} ATTACH TABLE 02181_test_dictionary; --{serverError INCORRECT_QUERY}
DETACH DICTIONARY 02181_test_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 39', () => {
    const query = `DETACH DICTIONARY 02181_test_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 40', () => {
    const query = `DETACH TABLE t_sparse_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 41', () => {
    const query = `DETACH TABLE t_remove_sample_by;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 42', () => {
    const query = `DETACH TABLE alter_index_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 43', () => {
    const query = `DETACH TABLE t_create_as_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 44', () => {
    const query = `DETACH TABLE table3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 45', () => {
    const query = `detach database db_01870;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 46', () => {
    const query = `DETACH TABLE view_no_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 47', () => {
    const query = `DETACH TABLE view_no_nulls_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 48', () => {
    const query = `DETACH TABLE view_nulls_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 49', () => {
    const query = `DETACH TABLE view_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 50', () => {
    const query = `DETACH TABLE t_json_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 51', () => {
    const query = `DETACH TABLE merge_tree_deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 52', () => {
    const query = `DETACH TABLE merge_tree_no_deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 53', () => {
    const query = `DETACH TABLE sparse_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 54', () => {
    const query = `DETACH TABLE t_sparse_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 55', () => {
    const query = `DETACH TABLE test_alter_decimal;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 56', () => {
    const query = `DETACH TABLE report;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 57', () => {
    const query = `DETACH TABLE replicated_report;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 58', () => {
    const query = `DETACH TABLE i20203_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 59', () => {
    const query = `DETACH TABLE i20203_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 60', () => {
    const query = `detach table foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 61', () => {
    const query = `DETACH TABLE sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 62', () => {
    const query = `DETACH DATABASE test_01676;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 63', () => {
    const query = `DETACH TABLE mutations_and_escaping_1648;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 64', () => {
    const query = `DETACH TABLE adaptive_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 65', () => {
    const query = `DETACH TABLE table_with_lc_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 66', () => {
    const query = `DETACH TABLE table_with_string_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 67', () => {
    const query = `detach table test_1603_rename_bug_ordinary.foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 68', () => {
    const query = `detach table test_1603_rename_bug_atomic.foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 69', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 70', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH table test1601_detach_permanently_atomic.test_name_reuse; -- { serverError UNKNOWN_TABLE }
SELECT 'can not drop detached';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 71', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 72', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH DATABASE test1601_detach_permanently_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 73', () => {
    const query = `DETACH DATABASE test1601_detach_permanently_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 74', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } SELECT 'But we can attach it back';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 75', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 76', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH table test1601_detach_permanently_ordinary.test_name_reuse; -- { serverError UNKNOWN_TABLE }
SELECT 'can not drop detached';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 77', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 78', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH DATABASE test1601_detach_permanently_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 79', () => {
    const query = `DETACH DATABASE test1601_detach_permanently_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 80', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } SELECT 'But we can attach it back';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 81', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 82', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH table test1601_detach_permanently_lazy.test_name_reuse; -- { serverError UNKNOWN_TABLE }
SELECT 'can not drop detached';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 83', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 84', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH DATABASE test1601_detach_permanently_lazy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 85', () => {
    const query = `DETACH DATABASE test1601_detach_permanently_lazy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 86', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } SELECT 'But we can attach it back';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 87', () => {
    const query = `DETACH TABLE database_for_dict.dict1; -- { serverError CANNOT_DETACH_DICTIONARY_AS_TABLE } DETACH DICTIONARY database_for_dict.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 88', () => {
    const query = `DETACH table empty1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 89', () => {
    const query = `DETACH table empty2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 90', () => {
    const query = `DETACH TABLE merge_tree_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 91', () => {
    const query = `DETACH TABLE merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 92', () => {
    const query = `DETACH TABLE replicated_merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 93', () => {
    const query = `DETACH TABLE table_for_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 94', () => {
    const query = `DETACH TABLE primary_key_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 95', () => {
    const query = `DETACH TABLE table_with_version_replicated_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 96', () => {
    const query = `DETACH TABLE table_with_version_replicated_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 97', () => {
    const query = `DETACH TABLE r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 98', () => {
    const query = `DETACH TABLE columns_with_multiple_streams;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 99', () => {
    const query = `DETACH TABLE columns_with_multiple_streams_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 100', () => {
    const query = `DETACH TABLE join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 101', () => {
    const query = `DETACH TABLE set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 102', () => {
    const query = `DETACH TABLE r_prop_table1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 103', () => {
    const query = `DETACH TABLE r_prop_table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 104', () => {
    const query = `DETACH TABLE null_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 105', () => {
    const query = `DETACH TABLE map_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 106', () => {
    const query = `DETACH DATABASE test_01457;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 107', () => {
    const query = `DETACH TABLE modify_sample_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 108', () => {
    const query = `DETACH TABLE codecs;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 109', () => {
    const query = `DETACH TABLE versioned_collapsing_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 110', () => {
    const query = `DETACH TABLE alter_01355;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 111', () => {
    const query = `DETACH TABLE codecs1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 112', () => {
    const query = `DETACH TABLE codecs2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 113', () => {
    const query = `DETACH TABLE codecs3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 114', () => {
    const query = `DETACH TABLE codecs4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 115', () => {
    const query = `DETACH TABLE codecs5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 116', () => {
    const query = `DETACH TABLE codecs6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 117', () => {
    const query = `DETACH TABLE codecs7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 118', () => {
    const query = `DETACH TABLE codecs8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 119', () => {
    const query = `DETACH TABLE codecs9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 120', () => {
    const query = `DETACH TABLE codecs10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 121', () => {
    const query = `DETACH TABLE codecs11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 122', () => {
    const query = `DETACH TABLE set_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 123', () => {
    const query = `DETACH TABLE cannot_be_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 124', () => {
    const query = `DETACH DATABASE {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 125', () => {
    const query = `detach table file;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 126', () => {
    const query = `detach table mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 127', () => {
    const query = `DETACH TABLE test_repl ON CLUSTER test_shard_localhost NO DELAY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 128', () => {
    const query = `detach table txn_counters;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 129', () => {
    const query = `DETACH TABLE mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 130', () => {
    const query = `DETACH TABLE default_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 131', () => {
    const query = `DETACH DICTIONARY db_for_dict.dict_with_hashed_layout;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 132', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.wv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 133', () => {
    const query = `DETACH TABLE buffer;        -- trigger flushing ATTACH TABLE buffer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 134', () => {
    const query = `DETACH TABLE aine;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 135', () => {
    const query = `DETACH TABLE new_syntax_01071_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 136', () => {
    const query = `DETACH DICTIONARY {CLICKHOUSE_DATABASE:Identifier}.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 137', () => {
    const query = `DETACH DICTIONARY db_01018.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 138', () => {
    const query = `DETACH TABLE replicated_table_for_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 139', () => {
    const query = `DETACH TABLE replicated_table_for_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 140', () => {
    const query = `DETACH TABLE replicated_table_for_reset_setting2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 141', () => {
    const query = `DETACH TABLE replicated_table_for_reset_setting1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 142', () => {
    const query = `DETACH TABLE table_for_reset_setting;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 143', () => {
    const query = `DETACH TABLE reserved_word_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 144', () => {
    const query = `DETACH TABLE four_rows_per_granule2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 145', () => {
    const query = `DETACH TABLE adaptive_granularity_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 146', () => {
    const query = `DETACH TABLE adaptive_granularity_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 147', () => {
    const query = `DETACH TABLE four_rows_per_granule;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 148', () => {
    const query = `DETACH TABLE huge_granularity_small_blocks;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 149', () => {
    const query = `DETACH TABLE adaptive_granularity_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 150', () => {
    const query = `DETACH TABLE large_alter_table_00926;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 151', () => {
    const query = `DETACH TABLE compression_codec_replicated1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 152', () => {
    const query = `DETACH TABLE index_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 153', () => {
    const query = `DETACH TABLE compression_codec;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 154', () => {
    const query = `DETACH TABLE compression_codec_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 155', () => {
    const query = `DETACH TABLE compression_codec_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 156', () => {
    const query = `DETACH TABLE large_alter_table_00804;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 157', () => {
    const query = `DETACH TABLE summing_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 158', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.t_mv_00751;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 159', () => {
    const query = `detach table lc_small_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 160', () => {
    const query = `detach table lc_big_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 161', () => {
    const query = `DETACH TABLE dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 162', () => {
    const query = `DETACH TABLE nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 163', () => {
    const query = `DETACH TABLE union;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 164', () => {
    const query = `DETACH TABLE test_view_00599;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 165', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.test_materialized_00571;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 166', () => {
    const query = `DETACH TABLE mv_00508;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 167', () => {
    const query = `DETACH TABLE log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 168', () => {
    const query = `DETACH TABLE array_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 169', () => {
    const query = `DETACH TABLE deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 170', () => {
    const query = `DETACH TABLE mv_00180;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors detach: 171', () => {
    const query = `DETACH TABLE set2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
