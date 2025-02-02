/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[ATTACH] should pass without errors: 1', () => {
    const query = `ATTACH TABLE t_index_lazy_load;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 2', () => {
    const query = `attach table t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 3', () => {
    const query = `attach table data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 4', () => {
    const query = `ATTACH TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 5', () => {
    const query = `attach table b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 6', () => {
    const query = `ATTACH TABLE x UUID 'aaaaaaaa-1111-2222-3333-aaaaaaaaaaaa' (key Int) ENGINE = ReplicatedMergeTree('/tables/{database}/{uuid}', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 7', () => {
    const query = `attach table shard_1.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 8', () => {
    const query = `ATTACH TABLE dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 9', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc01;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 10', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc02;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 11', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc03;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 12', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc04;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 13', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc05;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 14', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.tablefunc06;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 15', () => {
    const query = `attach table dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 16', () => {
    const query = `ATTACH TABLE t_sparse_reload;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 17', () => {
    const query = `ATTACH TABLE test_dist_02536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 18', () => {
    const query = `ATTACH TABLE t_source_part_is_intact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 19', () => {
    const query = `attach table rmt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 20', () => {
    const query = `attach table rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 21', () => {
    const query = `attach table rmt3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 22', () => {
    const query = `attach table rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 23', () => {
    const query = `attach table mut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 24', () => {
    const query = `ATTACH TABLE mutate_and_zero_copy_replication2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 25', () => {
    const query = `ATTACH TABLE t_nested_modify;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 26', () => {
    const query = `ATTACH TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 27', () => {
    const query = `ATTACH TABLE merge_table_standard_delete;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 28', () => {
    const query = `ATTACH TABLE t_light;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 29', () => {
    const query = `ATTACH TABLE t_large;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 30', () => {
    const query = `ATTACH TABLE ipv4_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 31', () => {
    const query = `ATTACH TABLE ipv6_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 32', () => {
    const query = `ATTACH TABLE t_nested_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 33', () => {
    const query = `attach table ttl_02265;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 34', () => {
    const query = `ATTACH TABLE alter_enum_array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 35', () => {
    const query = `ATTACH TABLE mergeTree_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 36', () => {
    const query = `ATTACH TABLE distributed_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 37', () => {
    const query = `ATTACH TABLE buffer_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 38', () => {
    const query = `ATTACH TABLE merge_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 39', () => {
    const query = `ATTACH TABLE null_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 40', () => {
    const query = `ATTACH TABLE file_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 41', () => {
    const query = `ATTACH TABLE memory_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 42', () => {
    const query = `ATTACH TABLE log_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 43', () => {
    const query = `ATTACH TABLE ting_log_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 44', () => {
    const query = `ATTACH TABLE stripe_log_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 45', () => {
    const query = `ATTACH DICTIONARY 02181_test_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 46', () => {
    const query = `ATTACH TABLE t_sparse_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 47', () => {
    const query = `ATTACH TABLE t_remove_sample_by;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 48', () => {
    const query = `ATTACH TABLE alter_index_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 49', () => {
    const query = `ATTACH TABLE t_create_as_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 50', () => {
    const query = `ATTACH TABLE table3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 51', () => {
    const query = `attach database db_01870;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 52', () => {
    const query = `ATTACH TABLE view_no_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 53', () => {
    const query = `ATTACH TABLE view_no_nulls_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 54', () => {
    const query = `ATTACH TABLE view_nulls_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 55', () => {
    const query = `ATTACH TABLE view_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 56', () => {
    const query = `ATTACH TABLE t_json_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 57', () => {
    const query = `ATTACH TABLE merge_tree_deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 58', () => {
    const query = `ATTACH TABLE merge_tree_no_deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 59', () => {
    const query = `ATTACH TABLE sparse_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 60', () => {
    const query = `ATTACH TABLE t_sparse_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 61', () => {
    const query = `ATTACH TABLE test_alter_decimal;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 62', () => {
    const query = `ATTACH TABLE report;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 63', () => {
    const query = `ATTACH TABLE replicated_report;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 64', () => {
    const query = `ATTACH TABLE test FROM '01721_file/test' (id UInt8) ENGINE=File(TSV);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 65', () => {
    const query = `ATTACH TABLE i20203_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 66', () => {
    const query = `ATTACH TABLE i20203_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 67', () => {
    const query = `ATTACH TABLE alter_drop_version;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 68', () => {
    const query = `attach table foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 69', () => {
    const query = `ATTACH TABLE sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 70', () => {
    const query = `ATTACH TABLE 01686_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 71', () => {
    const query = `ATTACH DATABASE test_01676;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 72', () => {
    const query = `ATTACH TABLE mutations_and_escaping_1648;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 73', () => {
    const query = `ATTACH TABLE adaptive_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 74', () => {
    const query = `ATTACH TABLE table_with_lc_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 75', () => {
    const query = `ATTACH TABLE table_with_string_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 76', () => {
    const query = `ATTACH TABLE test1601_detach_permanently_atomic.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 77', () => {
    const query = `ATTACH DATABASE test1601_detach_permanently_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 78', () => {
    const query = `ATTACH TABLE test1601_detach_permanently_ordinary.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 79', () => {
    const query = `ATTACH DATABASE test1601_detach_permanently_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 80', () => {
    const query = `ATTACH TABLE test1601_detach_permanently_lazy.test_name_reuse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 81', () => {
    const query = `ATTACH DATABASE test1601_detach_permanently_lazy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 82', () => {
    const query = `ATTACH TABLE database_for_dict.dict1; -- { serverError INCORRECT_QUERY } ATTACH DICTIONARY database_for_dict.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 83', () => {
    const query = `ATTACH table empty1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 84', () => {
    const query = `ATTACH table empty2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 85', () => {
    const query = `ATTACH TABLE merge_tree_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 86', () => {
    const query = `ATTACH TABLE merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 87', () => {
    const query = `ATTACH TABLE replicated_merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 88', () => {
    const query = `ATTACH TABLE table_for_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 89', () => {
    const query = `ATTACH TABLE primary_key_test(v Int32, PRIMARY KEY(v)) ENGINE=ReplacingMergeTree ORDER BY v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 90', () => {
    const query = `ATTACH TABLE primary_key_test(v Int32) ENGINE=ReplacingMergeTree ORDER BY v PRIMARY KEY(v);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 91', () => {
    const query = `ATTACH TABLE primary_key_test(v1 Int32, v2 Int32, PRIMARY KEY(v1, v2)) ENGINE=ReplacingMergeTree ORDER BY (v1, v2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 92', () => {
    const query = `ATTACH TABLE primary_key_test(v1 Int32, v2 Int32) ENGINE=ReplacingMergeTree ORDER BY (v1, v2) PRIMARY KEY(v1, v2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 93', () => {
    const query = `ATTACH TABLE table_with_version_replicated_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 94', () => {
    const query = `ATTACH TABLE table_with_version_replicated_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 95', () => {
    const query = `ATTACH TABLE r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 96', () => {
    const query = `ATTACH TABLE columns_with_multiple_streams;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 97', () => {
    const query = `ATTACH TABLE columns_with_multiple_streams_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 98', () => {
    const query = `ATTACH TABLE join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 99', () => {
    const query = `ATTACH TABLE set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 100', () => {
    const query = `ATTACH TABLE r_prop_table1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 101', () => {
    const query = `ATTACH TABLE r_prop_table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 102', () => {
    const query = `ATTACH TABLE null_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 103', () => {
    const query = `ATTACH TABLE map_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 104', () => {
    const query = `ATTACH DATABASE test_01457;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 105', () => {
    const query = `ATTACH TABLE modify_sample_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 106', () => {
    const query = `ATTACH table codecs;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 107', () => {
    const query = `ATTACH TABLE versioned_collapsing_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 108', () => {
    const query = `ATTACH TABLE alter_01355;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 109', () => {
    const query = `ATTACH TABLE codecs1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 110', () => {
    const query = `ATTACH TABLE codecs2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 111', () => {
    const query = `ATTACH TABLE codecs3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 112', () => {
    const query = `ATTACH TABLE codecs4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 113', () => {
    const query = `ATTACH TABLE codecs5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 114', () => {
    const query = `ATTACH TABLE codecs6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 115', () => {
    const query = `ATTACH TABLE codecs7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 116', () => {
    const query = `ATTACH TABLE codecs8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 117', () => {
    const query = `ATTACH TABLE codecs9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 118', () => {
    const query = `ATTACH TABLE codecs10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 119', () => {
    const query = `ATTACH TABLE codecs11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 120', () => {
    const query = `ATTACH TABLE set_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 121', () => {
    const query = `ATTACH TABLE cannot_be_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 122', () => {
    const query = `ATTACH DATABASE {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 123', () => {
    const query = `ATTACH TABLE bloom_filter_idx_good(\`u64\` UInt64, \`i32\` Int32, \`f64\` Float64, \`d\` Decimal(10, 2), \`s\` String, \`e\` Enum8('a' = 1, 'b' = 2, 'c' = 3), \`dt\` Date, INDEX bloom_filter_a i32 TYPE bloom_filter(0., 1.) GRANULARITY 1) ENGINE = MergeTree() ORDER BY u64 SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 124', () => {
    const query = `ATTACH TABLE bloom_filter_idx_good(\`u64\` UInt64, \`i32\` Int32, \`f64\` Float64, \`d\` Decimal(10, 2), \`s\` String, \`e\` Enum8('a' = 1, 'b' = 2, 'c' = 3), \`dt\` Date, INDEX bloom_filter_a i32 TYPE bloom_filter(-0.1) GRANULARITY 1) ENGINE = MergeTree() ORDER BY u64 SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 125', () => {
    const query = `ATTACH TABLE bloom_filter_idx_good(\`u64\` UInt64, \`i32\` Int32, \`f64\` Float64, \`d\` Decimal(10, 2), \`s\` String, \`e\` Enum8('a' = 1, 'b' = 2, 'c' = 3), \`dt\` Date, INDEX bloom_filter_a i32 TYPE bloom_filter(1.01) GRANULARITY 1) ENGINE = MergeTree() ORDER BY u64 SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 126', () => {
    const query = `attach table test from 'some/path' (n UInt8) engine=Memory; -- { serverError NOT_IMPLEMENTED } attach table test from '/etc/passwd' (s String) engine=File(TSVRaw); -- { serverError PATH_ACCESS_DENIED }
attach table test from '../../../../../../../../../etc/passwd' (s String) engine=File(TSVRaw); -- { serverError PATH_ACCESS_DENIED }
attach table test from 42 (s String) engine=File(TSVRaw); -- { clientError SYNTAX_ERROR }
insert into table function file('01188_attach/file/data.TSV', 'TSV', 's String, n UInt8') values ('file', 42);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 127', () => {
    const query = `attach table file from '01188_attach/file' (s String, n UInt8) engine=File(TSV);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 128', () => {
    const query = `attach table file;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 129', () => {
    const query = `attach table mt from '01188_attach/file' (n UInt8, s String) engine=MergeTree order by n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 130', () => {
    const query = `attach table mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 131', () => {
    const query = `ATTACH TABLE test_repl ON CLUSTER test_shard_localhost;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 132', () => {
    const query = `attach table txn_counters;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 133', () => {
    const query = `ATTACH TABLE mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 134', () => {
    const query = `ATTACH MATERIALIZED VIEW mv UUID 'e15f3ab5-6cae-4df3-b879-f40deafd82c2' (n Int32, n2 Int64) ENGINE = MergeTree PARTITION BY n % 10 ORDER BY n AS SELECT n, n * n AS n2 FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 135', () => {
    const query = `ATTACH MATERIALIZED VIEW mv UUID 'e15f3ab5-6cae-4df3-b879-f40deafd82c2' TO INNER UUID '3bd68e3c-2693-4352-ad66-a66eba9e345e' (n Int32, n2 Int64) ENGINE = MergeTree PARTITION BY n % 10 ORDER BY n AS SELECT n, n * n AS n2 FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 136', () => {
    const query = `ATTACH MATERIALIZED VIEW mv UUID '3bd68e3c-2693-4352-ad66-a66eba9e345e' TO INNER UUID '3bd68e3c-2693-4352-ad66-a66eba9e345e' (n Int32, n2 Int64) ENGINE = MergeTree PARTITION BY n % 10 ORDER BY n AS SELECT n, n * n AS n2 FROM src; -- { serverError BAD_ARGUMENTS } DROP TABLE src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 137', () => {
    const query = `ATTACH TABLE default_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 138', () => {
    const query = `ATTACH DICTIONARY db_for_dict.dict_with_hashed_layout;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 139', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.wv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 140', () => {
    const query = `ATTACH TABLE aine; -- { serverError TABLE_ALREADY_EXISTS } ATTACH TABLE IF NOT EXISTS aine;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 141', () => {
    const query = `ATTACH TABLE IF NOT EXISTS aine;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 142', () => {
    const query = `ATTACH TABLE new_syntax_01071_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 143', () => {
    const query = `ATTACH DICTIONARY db_01018.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 144', () => {
    const query = `ATTACH TABLE replicated_table_for_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 145', () => {
    const query = `ATTACH TABLE replicated_table_for_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 146', () => {
    const query = `ATTACH TABLE replicated_table_for_reset_setting2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 147', () => {
    const query = `ATTACH TABLE replicated_table_for_reset_setting1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 148', () => {
    const query = `ATTACH TABLE table_for_reset_setting;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 149', () => {
    const query = `ATTACH TABLE reserved_word_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 150', () => {
    const query = `ATTACH TABLE four_rows_per_granule2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 151', () => {
    const query = `ATTACH TABLE adaptive_granularity_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 152', () => {
    const query = `ATTACH TABLE adaptive_granularity_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 153', () => {
    const query = `ATTACH TABLE four_rows_per_granule;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 154', () => {
    const query = `ATTACH TABLE huge_granularity_small_blocks;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 155', () => {
    const query = `ATTACH TABLE adaptive_granularity_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 156', () => {
    const query = `ATTACH TABLE large_alter_table_00926;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 157', () => {
    const query = `ATTACH TABLE compression_codec_replicated1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 158', () => {
    const query = `ATTACH TABLE index_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 159', () => {
    const query = `ATTACH TABLE compression_codec;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 160', () => {
    const query = `ATTACH TABLE compression_codec_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 161', () => {
    const query = `ATTACH TABLE compression_codec_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 162', () => {
    const query = `ATTACH TABLE large_alter_table_00804;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 163', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.t_mv_00751;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 164', () => {
    const query = `attach table lc_small_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 165', () => {
    const query = `attach table lc_big_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 166', () => {
    const query = `ATTACH TABLE dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 167', () => {
    const query = `ATTACH TABLE nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 168', () => {
    const query = `ATTACH TABLE union;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 169', () => {
    const query = `ATTACH TABLE test_view_00599;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 170', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.test_materialized_00571;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 171', () => {
    const query = `ATTACH TABLE {CLICKHOUSE_DATABASE:Identifier}.mv_00508;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 172', () => {
    const query = `ATTACH TABLE log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 173', () => {
    const query = `ATTACH TABLE array_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 174', () => {
    const query = `ATTACH TABLE deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 175', () => {
    const query = `ATTACH TABLE mv_00180;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ATTACH] should pass without errors: 176', () => {
    const query = `ATTACH TABLE set2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
