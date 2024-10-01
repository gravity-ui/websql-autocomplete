/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[DETACH] should pass without errors: 1', () => {
    const query = `DETACH TABLE t_index_lazy_load;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 2', () => {
    const query = `detach table t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 3', () => {
    const query = `detach table data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 4', () => {
    const query = `DETACH TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 5', () => {
    const query = `detach table b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 6', () => {
    const query = `detach table shard_1.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 7', () => {
    const query = `DETACH TABLE dict SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 8', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc01;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 9', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc02;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 10', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc03;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 11', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc04;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 12', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc05;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 13', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc06;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 14', () => {
    const query = `detach table dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 15', () => {
    const query = `DETACH TABLE t_sparse_reload;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 16', () => {
    const query = `DETACH TABLE mview;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 17', () => {
    const query = `detach table 02681_undrop_detach sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 18', () => {
    const query = `DETACH TABLE t_source_part_is_intact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 19', () => {
    const query = `detach table rmt sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 20', () => {
    const query = `detach table rmt1 sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 21', () => {
    const query = `detach table rmt3 sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 22', () => {
    const query = `detach table rmt1;      -- make replica inactive system start replicated sends rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 23', () => {
    const query = `detach table rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 24', () => {
    const query = `detach table mut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 25', () => {
    const query = `DETACH TABLE mutate_and_zero_copy_replication2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 26', () => {
    const query = `DETACH TABLE t_nested_modify;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 27', () => {
    const query = `DETACH TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 28', () => {
    const query = `DETACH TABLE tab SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 29', () => {
    const query = `DETACH TABLE merge_table_standard_delete;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 30', () => {
    const query = `DETACH TABLE t_light;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 31', () => {
    const query = `DETACH TABLE t_large;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 32', () => {
    const query = `DETACH TABLE ipv4_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 33', () => {
    const query = `DETACH TABLE ipv6_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 34', () => {
    const query = `DETACH TABLE t_nested_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 35', () => {
    const query = `detach table ttl_02265;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 36', () => {
    const query = `DETACH TABLE alter_enum_array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 37', () => {
    const query = `DETACH TABLE mergeTree_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 38', () => {
    const query = `DETACH TABLE 02181_test_dictionary; --{serverError CANNOT_DETACH_DICTIONARY_AS_TABLE} ATTACH TABLE 02181_test_dictionary; --{serverError INCORRECT_QUERY}
DETACH DICTIONARY 02181_test_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 39', () => {
    const query = `DETACH DICTIONARY 02181_test_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 40', () => {
    const query = `DETACH TABLE t_sparse_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 41', () => {
    const query = `DETACH TABLE t_remove_sample_by;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 42', () => {
    const query = `DETACH TABLE alter_index_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 43', () => {
    const query = `DETACH TABLE t_create_as_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 44', () => {
    const query = `DETACH TABLE table3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 45', () => {
    const query = `detach database db_01870;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 46', () => {
    const query = `DETACH TABLE view_no_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 47', () => {
    const query = `DETACH TABLE view_no_nulls_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 48', () => {
    const query = `DETACH TABLE view_nulls_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 49', () => {
    const query = `DETACH TABLE view_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 50', () => {
    const query = `DETACH TABLE t_json_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 51', () => {
    const query = `DETACH TABLE merge_tree_deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 52', () => {
    const query = `DETACH TABLE merge_tree_no_deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 53', () => {
    const query = `DETACH TABLE sparse_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 54', () => {
    const query = `DETACH TABLE t_sparse_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 55', () => {
    const query = `DETACH TABLE test_alter_decimal;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 56', () => {
    const query = `DETACH TABLE report;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 57', () => {
    const query = `DETACH TABLE replicated_report;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 58', () => {
    const query = `DETACH TABLE i20203_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 59', () => {
    const query = `DETACH TABLE i20203_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 60', () => {
    const query = `detach table foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 61', () => {
    const query = `DETACH TABLE sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 62', () => {
    const query = `DETACH DATABASE test_01676;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 63', () => {
    const query = `DETACH TABLE mutations_and_escaping_1648;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 64', () => {
    const query = `DETACH TABLE adaptive_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 65', () => {
    const query = `DETACH TABLE table_with_lc_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 66', () => {
    const query = `DETACH TABLE table_with_string_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 67', () => {
    const query = `detach table test_1603_rename_bug_ordinary.foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 68', () => {
    const query = `detach table test_1603_rename_bug_atomic.foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 69', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 70', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH table test1601_detach_permanently_atomic.test_name_reuse; -- { serverError UNKNOWN_TABLE }
SELECT 'can not drop detached';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 71', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 72', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH DATABASE test1601_detach_permanently_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 73', () => {
    const query = `DETACH DATABASE test1601_detach_permanently_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 74', () => {
    const query = `DETACH table test1601_detach_permanently_atomic.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } SELECT 'But we can attach it back';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 75', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 76', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH table test1601_detach_permanently_ordinary.test_name_reuse; -- { serverError UNKNOWN_TABLE }
SELECT 'can not drop detached';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 77', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 78', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH DATABASE test1601_detach_permanently_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 79', () => {
    const query = `DETACH DATABASE test1601_detach_permanently_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 80', () => {
    const query = `DETACH table test1601_detach_permanently_ordinary.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } SELECT 'But we can attach it back';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 81', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 82', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH table test1601_detach_permanently_lazy.test_name_reuse; -- { serverError UNKNOWN_TABLE }
SELECT 'can not drop detached';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 83', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 84', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } DETACH DATABASE test1601_detach_permanently_lazy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 85', () => {
    const query = `DETACH DATABASE test1601_detach_permanently_lazy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 86', () => {
    const query = `DETACH table test1601_detach_permanently_lazy.test_name_reuse PERMANENTLY; -- { serverError UNKNOWN_TABLE } SELECT 'But we can attach it back';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 87', () => {
    const query = `DETACH TABLE database_for_dict.dict1; -- { serverError CANNOT_DETACH_DICTIONARY_AS_TABLE } DETACH DICTIONARY database_for_dict.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 88', () => {
    const query = `DETACH table empty1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 89', () => {
    const query = `DETACH table empty2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 90', () => {
    const query = `DETACH TABLE merge_tree_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 91', () => {
    const query = `DETACH TABLE merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 92', () => {
    const query = `DETACH TABLE replicated_merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 93', () => {
    const query = `DETACH TABLE table_for_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 94', () => {
    const query = `DETACH TABLE primary_key_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 95', () => {
    const query = `DETACH TABLE table_with_version_replicated_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 96', () => {
    const query = `DETACH TABLE table_with_version_replicated_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 97', () => {
    const query = `DETACH TABLE r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 98', () => {
    const query = `DETACH TABLE columns_with_multiple_streams;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 99', () => {
    const query = `DETACH TABLE columns_with_multiple_streams_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 100', () => {
    const query = `DETACH TABLE join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 101', () => {
    const query = `DETACH TABLE set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 102', () => {
    const query = `DETACH TABLE r_prop_table1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 103', () => {
    const query = `DETACH TABLE r_prop_table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 104', () => {
    const query = `DETACH TABLE null_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 105', () => {
    const query = `DETACH TABLE map_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 106', () => {
    const query = `DETACH DATABASE test_01457;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 107', () => {
    const query = `DETACH TABLE modify_sample_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 108', () => {
    const query = `DETACH TABLE codecs;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 109', () => {
    const query = `DETACH TABLE versioned_collapsing_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 110', () => {
    const query = `DETACH TABLE alter_01355;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 111', () => {
    const query = `DETACH TABLE codecs1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 112', () => {
    const query = `DETACH TABLE codecs2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 113', () => {
    const query = `DETACH TABLE codecs3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 114', () => {
    const query = `DETACH TABLE codecs4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 115', () => {
    const query = `DETACH TABLE codecs5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 116', () => {
    const query = `DETACH TABLE codecs6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 117', () => {
    const query = `DETACH TABLE codecs7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 118', () => {
    const query = `DETACH TABLE codecs8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 119', () => {
    const query = `DETACH TABLE codecs9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 120', () => {
    const query = `DETACH TABLE codecs10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 121', () => {
    const query = `DETACH TABLE codecs11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 122', () => {
    const query = `DETACH TABLE set_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 123', () => {
    const query = `DETACH TABLE cannot_be_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 124', () => {
    const query = `DETACH DATABASE {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 125', () => {
    const query = `detach table file;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 126', () => {
    const query = `detach table mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 127', () => {
    const query = `DETACH TABLE test_repl ON CLUSTER test_shard_localhost NO DELAY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 128', () => {
    const query = `detach table txn_counters;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 129', () => {
    const query = `DETACH TABLE mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 130', () => {
    const query = `DETACH TABLE default_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 131', () => {
    const query = `DETACH DICTIONARY db_for_dict.dict_with_hashed_layout;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 132', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.wv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 133', () => {
    const query = `DETACH TABLE buffer;        -- trigger flushing ATTACH TABLE buffer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 134', () => {
    const query = `DETACH TABLE aine;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 135', () => {
    const query = `DETACH TABLE new_syntax_01071_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 136', () => {
    const query = `DETACH DICTIONARY {CLICKHOUSE_DATABASE:Identifier}.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 137', () => {
    const query = `DETACH DICTIONARY db_01018.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 138', () => {
    const query = `DETACH TABLE replicated_table_for_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 139', () => {
    const query = `DETACH TABLE replicated_table_for_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 140', () => {
    const query = `DETACH TABLE replicated_table_for_reset_setting2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 141', () => {
    const query = `DETACH TABLE replicated_table_for_reset_setting1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 142', () => {
    const query = `DETACH TABLE table_for_reset_setting;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 143', () => {
    const query = `DETACH TABLE reserved_word_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 144', () => {
    const query = `DETACH TABLE four_rows_per_granule2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 145', () => {
    const query = `DETACH TABLE adaptive_granularity_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 146', () => {
    const query = `DETACH TABLE adaptive_granularity_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 147', () => {
    const query = `DETACH TABLE four_rows_per_granule;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 148', () => {
    const query = `DETACH TABLE huge_granularity_small_blocks;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 149', () => {
    const query = `DETACH TABLE adaptive_granularity_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 150', () => {
    const query = `DETACH TABLE large_alter_table_00926;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 151', () => {
    const query = `DETACH TABLE compression_codec_replicated1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 152', () => {
    const query = `DETACH TABLE index_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 153', () => {
    const query = `DETACH TABLE compression_codec;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 154', () => {
    const query = `DETACH TABLE compression_codec_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 155', () => {
    const query = `DETACH TABLE compression_codec_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 156', () => {
    const query = `DETACH TABLE large_alter_table_00804;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 157', () => {
    const query = `DETACH TABLE summing_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 158', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.t_mv_00751;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 159', () => {
    const query = `detach table lc_small_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 160', () => {
    const query = `detach table lc_big_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 161', () => {
    const query = `DETACH TABLE dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 162', () => {
    const query = `DETACH TABLE nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 163', () => {
    const query = `DETACH TABLE union;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 164', () => {
    const query = `DETACH TABLE test_view_00599;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 165', () => {
    const query = `DETACH TABLE {CLICKHOUSE_DATABASE:Identifier}.test_materialized_00571;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 166', () => {
    const query = `DETACH TABLE mv_00508;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 167', () => {
    const query = `DETACH TABLE log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 168', () => {
    const query = `DETACH TABLE array_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 169', () => {
    const query = `DETACH TABLE deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 170', () => {
    const query = `DETACH TABLE mv_00180;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DETACH] should pass without errors: 171', () => {
    const query = `DETACH TABLE set2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
