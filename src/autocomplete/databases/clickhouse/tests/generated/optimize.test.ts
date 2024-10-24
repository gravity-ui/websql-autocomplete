/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[OPTIMIZE] should pass without errors: 1', () => {
    const query = `optimize table test final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 2', () => {
    const query = `OPTIMIZE TABLE t_merge_profile_events_1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 3', () => {
    const query = `OPTIMIZE TABLE t_merge_profile_events_2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 4', () => {
    const query = `OPTIMIZE TABLE t_merge_profile_events_3 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 5', () => {
    const query = `optimize table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 6', () => {
    const query = `optimize table t final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 7', () => {
    const query = `OPTIMIZE TABLE tp DEDUPLICATE;  -- { serverError SUPPORT_IS_DISABLED } DROP TABLE tp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 8', () => {
    const query = `OPTIMIZE TABLE tp DEDUPLICATE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 9', () => {
    const query = `OPTIMIZE TABLE tp FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 10', () => {
    const query = `OPTIMIZE TABLE dict_03204;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 11', () => {
    const query = `optimize table t1 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 12', () => {
    const query = `OPTIMIZE TABLE t_bloom_filter FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 13', () => {
    const query = `optimize table tab final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 14', () => {
    const query = `OPTIMIZE TABLE test_projection_deduplicate DEDUPLICATE; -- { serverError SUPPORT_IS_DISABLED } SELECT * FROM test_projection_deduplicate;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 15', () => {
    const query = `OPTIMIZE TABLE test_projection_deduplicate DEDUPLICATE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 16', () => {
    const query = `OPTIMIZE TABLE 03173_single_function FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 17', () => {
    const query = `OPTIMIZE TABLE 03173_nested_function FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 18', () => {
    const query = `OPTIMIZE TABLE 03173_nested_function_lc FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 19', () => {
    const query = `OPTIMIZE TABLE 03173_nested_function_null FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 20', () => {
    const query = `OPTIMIZE TABLE 03173_nested_function_lc_null FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 21', () => {
    const query = `OPTIMIZE TABLE 03173_nonsafe_cast FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 22', () => {
    const query = `OPTIMIZE TABLE 03173_multiple_partition_cols FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 23', () => {
    const query = `OPTIMIZE TABLE 03173_base_data_source FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 24', () => {
    const query = `OPTIMIZE TABLE 03173_empty_transform FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 25', () => {
    const query = `OPTIMIZE TABLE t_read_in_order_2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 26', () => {
    const query = `OPTIMIZE TABLE t_ind_merge_2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 27', () => {
    const query = `OPTIMIZE TABLE t_ind_merge_1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 28', () => {
    const query = `OPTIMIZE TABLE t_compact_bytes_s3 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 29', () => {
    const query = `OPTIMIZE TABLE 03164_users FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 30', () => {
    const query = `OPTIMIZE TABLE 03164_multi_key FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 31', () => {
    const query = `OPTIMIZE TABLE t_skip_index_insert FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 32', () => {
    const query = `OPTIMIZE TABLE b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 33', () => {
    const query = `OPTIMIZE TABLE mt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 34', () => {
    const query = `OPTIMIZE TABLE mt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 35', () => {
    const query = `OPTIMIZE TABLE test_gcd FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 36', () => {
    const query = `OPTIMIZE TABLE test_gcd2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 37', () => {
    const query = `OPTIMIZE TABLE t_uniq_exact FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 38', () => {
    const query = `OPTIMIZE TABLE lwd_merge; -- { serverError CANNOT_ASSIGN_OPTIMIZE } SELECT count() FROM system.parts WHERE database = currentDatabase() AND table = 'lwd_merge' AND active = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 39', () => {
    const query = `OPTIMIZE TABLE lwd_merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 40', () => {
    const query = `OPTIMIZE TABLE t_block_offset FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 41', () => {
    const query = `OPTIMIZE TABLE t_index_agg_func FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 42', () => {
    const query = `OPTIMIZE TABLE t_vertical_merge_memory FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 43', () => {
    const query = `OPTIMIZE TABLE table_with_some_columns FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 44', () => {
    const query = `OPTIMIZE TABLE tp FINAL DEDUPLICATE BY type;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 45', () => {
    const query = `OPTIMIZE TABLE dict_with_ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 46', () => {
    const query = `OPTIMIZE TABLE part_log_bytes_uncompressed FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 47', () => {
    const query = `OPTIMIZE TABLE ttl_group_by_bug FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 48', () => {
    const query = `OPTIMIZE TABLE test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 49', () => {
    const query = `optimize table t_temp final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 50', () => {
    const query = `OPTIMIZE TABLE shard_0.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 51', () => {
    const query = `OPTIMIZE TABLE shard_0.from_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 52', () => {
    const query = `OPTIMIZE TABLE shard_1.from_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 53', () => {
    const query = `OPTIMIZE TABLE shard_0.from_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 54', () => {
    const query = `OPTIMIZE TABLE shard_1.from_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 55', () => {
    const query = `OPTIMIZE TABLE dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 56', () => {
    const query = `OPTIMIZE TABLE test_apply_deleted_mask FINAL SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 57', () => {
    const query = `optimize table nested_smt final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 58', () => {
    const query = `OPTIMIZE TABLE t_mutations_subcolumns FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 59', () => {
    const query = `OPTIMIZE TABLE t_missed_subcolumns FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 60', () => {
    const query = `OPTIMIZE TABLE test FINAL CLEANUP;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 61', () => {
    const query = `optimize table data final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 62', () => {
    const query = `OPTIMIZE TABLE null_table_buffer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 63', () => {
    const query = `optimize table test_block_mismatch final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 64', () => {
    const query = `optimize table test_block_mismatch_sk1 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 65', () => {
    const query = `optimize table test_block_mismatch_sk2 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 66', () => {
    const query = `OPTIMIZE TABLE t_sparse_mutation FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 67', () => {
    const query = `OPTIMIZE TABLE 02725_memory_for_merges FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 68', () => {
    const query = `OPTIMIZE TABLE summing_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 69', () => {
    const query = `OPTIMIZE TABLE t_sparse_columns_clear FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 70', () => {
    const query = `OPTIMIZE TABLE t_sparse_mutations_3 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 71', () => {
    const query = `OPTIMIZE TABLE t_sparse_mutations_2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 72', () => {
    const query = `OPTIMIZE TABLE t_sparse_mutations_1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 73', () => {
    const query = `optimize table tvm final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 74', () => {
    const query = `OPTIMIZE TABLE t_compact_vertical_merge FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 75', () => {
    const query = `OPTIMIZE TABLE table_merge_tree_02525 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 76', () => {
    const query = `OPTIMIZE TABLE lwd_test_02521 FINAL SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 77', () => {
    const query = `OPTIMIZE TABLE eligible_test FINAL SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 78', () => {
    const query = `optimize table data_02491 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 79', () => {
    const query = `OPTIMIZE TABLE test FINAL CLEANUP; -- { serverError SUPPORT_IS_DISABLED } select 'no cleanup 2', * from test order by uid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 80', () => {
    const query = `OPTIMIZE TABLE test FINAL CLEANUP; -- { serverError SUPPORT_IS_DISABLED } select 'no cleanup 4', * from test order by uid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 81', () => {
    const query = `OPTIMIZE TABLE testMT FINAL CLEANUP;  -- { serverError CANNOT_ASSIGN_OPTIMIZE } OPTIMIZE TABLE testMT FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 82', () => {
    const query = `OPTIMIZE TABLE testSummingMT FINAL CLEANUP;  -- { serverError CANNOT_ASSIGN_OPTIMIZE } OPTIMIZE TABLE testSummingMT FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 83', () => {
    const query = `OPTIMIZE TABLE testAggregatingMT FINAL CLEANUP;  -- { serverError CANNOT_ASSIGN_OPTIMIZE } OPTIMIZE TABLE testAggregatingMT FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 84', () => {
    const query = `OPTIMIZE TABLE testCollapsingMT FINAL CLEANUP;  -- { serverError CANNOT_ASSIGN_OPTIMIZE } OPTIMIZE TABLE testCollapsingMT FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 85', () => {
    const query = `OPTIMIZE TABLE testVersionedCMT FINAL CLEANUP;  -- { serverError CANNOT_ASSIGN_OPTIMIZE } OPTIMIZE TABLE testVersionedCMT FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 86', () => {
    const query = `optimize table rmt3 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 87', () => {
    const query = `OPTIMIZE TABLE github_events FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 88', () => {
    const query = `OPTIMIZE TABLE testing FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 89', () => {
    const query = `OPTIMIZE TABLE test FINAL SETTINGS optimize_throw_if_noop=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 90', () => {
    const query = `OPTIMIZE TABLE t_summing_lc FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 91', () => {
    const query = `optimize table rmt2 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 92', () => {
    const query = `optimize table rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 93', () => {
    const query = `optimize table rmt partition tuple(123);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 94', () => {
    const query = `optimize table rmt partition tuple(123); -- { serverError CANNOT_ASSIGN_OPTIMIZE } select sleepEachRow(3) as higher_probability_of_reproducing_the_issue format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 95', () => {
    const query = `optimize table rmt1 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 96', () => {
    const query = `optimize table partial_sort_opt_bug final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 97', () => {
    const query = `OPTIMIZE TABLE lwd_test FINAL SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 98', () => {
    const query = `OPTIMIZE TABLE ttl_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 99', () => {
    const query = `optimize table mt final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 100', () => {
    const query = `optimize table test_02381_compress final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 101', () => {
    const query = `optimize table test_02381 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 102', () => {
    const query = `optimize table test_02381_compact final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 103', () => {
    const query = `OPTIMIZE TABLE t_modify_from_lc_1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 104', () => {
    const query = `OPTIMIZE TABLE t_modify_from_lc_2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 105', () => {
    const query = `OPTIMIZE TABLE data_horizontal FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 106', () => {
    const query = `OPTIMIZE TABLE data_vertical FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 107', () => {
    const query = `OPTIMIZE TABLE t_light_r1 FINAL SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 108', () => {
    const query = `OPTIMIZE TABLE nnd;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 109', () => {
    const query = `OPTIMIZE TABLE proj_agg_02343 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 110', () => {
    const query = `OPTIMIZE TABLE t_sparse_s3 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 111', () => {
    const query = `optimize table t_light final SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 112', () => {
    const query = `OPTIMIZE TABLE t_parts_profile_events FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 113', () => {
    const query = `OPTIMIZE TABLE t_vertical_merges FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 114', () => {
    const query = `OPTIMIZE TABLE issue32107 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 115', () => {
    const query = `OPTIMIZE TABLE replace_partition_source FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 116', () => {
    const query = `OPTIMIZE TABLE replace_partition_dest1_2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 117', () => {
    const query = `OPTIMIZE TABLE replace_partition_dest2_2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 118', () => {
    const query = `OPTIMIZE TABLE t_02267 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 119', () => {
    const query = `optimize table ttl_02265 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 120', () => {
    const query = `OPTIMIZE TABLE alter_enum_array FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 121', () => {
    const query = `OPTIMIZE TABLE weird_partitions_02245;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 122', () => {
    const query = `OPTIMIZE TABLE t_1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 123', () => {
    const query = `OPTIMIZE TABLE bloom_filter_sizing_pk FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 124', () => {
    const query = `OPTIMIZE TABLE bloom_filter_sizing_sec FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 125', () => {
    const query = `OPTIMIZE TABLE t_sparse_detach FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 126', () => {
    const query = `optimize table tab_lc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 127', () => {
    const query = `optimize table ttl_test_02129 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 128', () => {
    const query = `OPTIMIZE TABLE summing_mt_aggregating_column FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 129', () => {
    const query = `OPTIMIZE TABLE order_by_desc FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 130', () => {
    const query = `optimize table smta;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 131', () => {
    const query = `OPTIMIZE TABLE limited_merge_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 132', () => {
    const query = `OPTIMIZE TABLE test_buffer_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 133', () => {
    const query = `OPTIMIZE TABLE replacing FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 134', () => {
    const query = `OPTIMIZE TABLE t_json_wide_parts FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 135', () => {
    const query = `OPTIMIZE TABLE t_json_sparse FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 136', () => {
    const query = `OPTIMIZE TABLE t_json FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 137', () => {
    const query = `OPTIMIZE TABLE replacing_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 138', () => {
    const query = `optimize table data_01809 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 139', () => {
    const query = `OPTIMIZE TABLE stored_aggregates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 140', () => {
    const query = `optimize table summing_merge_tree_aggregate_function;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 141', () => {
    const query = `OPTIMIZE TABLE  merge_tree_deduplication FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 142', () => {
    const query = `OPTIMIZE TABLE t_sparse_full FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 143', () => {
    const query = `OPTIMIZE TABLE collapsing_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 144', () => {
    const query = `OPTIMIZE TABLE collapsing_suspicious_granularity FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 145', () => {
    const query = `OPTIMIZE TABLE test_ttl_group_by01763 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 146', () => {
    const query = `OPTIMIZE TABLE test_alter_decimal FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 147', () => {
    const query = `OPTIMIZE TABLE old_school_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 148', () => {
    const query = `OPTIMIZE TABLE old_school_table FINAL; -- just to be sure SELECT * FROM old_school_table ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 149', () => {
    const query = `OPTIMIZE TABLE old_school_table FINAL; -- and horizontal merge SELECT * FROM old_school_table ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 150', () => {
    const query = `optimize table z final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 151', () => {
    const query = `optimize table data_01709 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 152', () => {
    const query = `optimize table tp_1 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 153', () => {
    const query = `OPTIMIZE TABLE data_01660 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 154', () => {
    const query = `optimize table rep_fsync_r1 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 155', () => {
    const query = `optimize table rep_fsync_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 156', () => {
    const query = `optimize table data_01643 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 157', () => {
    const query = `optimize table data_01643;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 158', () => {
    const query = `optimize table data_01641 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 159', () => {
    const query = `OPTIMIZE TABLE adaptive_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 160', () => {
    const query = `optimize table simple_agf_summing_mt final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 161', () => {
    const query = `OPTIMIZE TABLE simple_agf_aggregating_mt FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 162', () => {
    const query = `OPTIMIZE TABLE ttl_where FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 163', () => {
    const query = `OPTIMIZE TABLE ttl_group_by FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 164', () => {
    const query = `optimize table ay;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 165', () => {
    const query = `OPTIMIZE TABLE wide_to_comp FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 166', () => {
    const query = `OPTIMIZE TABLE skip_idx_comp_parts FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 167', () => {
    const query = `OPTIMIZE TABLE table_with_column_ttl FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 168', () => {
    const query = `optimize table xp final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 169', () => {
    const query = `OPTIMIZE TABLE realtimebuff;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 170', () => {
    const query = `OPTIMIZE TABLE replicated_deduplicate_by_columns_r1 FINAL DEDUPLICATE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 171', () => {
    const query = `OPTIMIZE TABLE replicated_deduplicate_by_columns_r1 FINAL DEDUPLICATE BY id, val;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 172', () => {
    const query = `OPTIMIZE TABLE replicated_deduplicate_by_columns_r1 FINAL DEDUPLICATE BY COLUMNS('[id, val]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 173', () => {
    const query = `OPTIMIZE TABLE replicated_deduplicate_by_columns_r1 FINAL DEDUPLICATE BY COLUMNS('[i]') EXCEPT(unique_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 174', () => {
    const query = `OPTIMIZE TABLE full_duplicates FINAL DEDUPLICATE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 175', () => {
    const query = `OPTIMIZE TABLE full_duplicates FINAL DEDUPLICATE BY *;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 176', () => {
    const query = `OPTIMIZE TABLE full_duplicates FINAL DEDUPLICATE BY * EXCEPT mat;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 177', () => {
    const query = `OPTIMIZE TABLE full_duplicates FINAL DEDUPLICATE BY pk,sk,val,mat,partition_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 178', () => {
    const query = `OPTIMIZE TABLE partial_duplicates FINAL DEDUPLICATE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 179', () => {
    const query = `OPTIMIZE TABLE partial_duplicates FINAL DEDUPLICATE BY pk,sk,val,mat;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 180', () => {
    const query = `OPTIMIZE TABLE partial_duplicates FINAL DEDUPLICATE BY *;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 181', () => {
    const query = `OPTIMIZE TABLE partial_duplicates FINAL DEDUPLICATE BY * EXCEPT mat;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 182', () => {
    const query = `OPTIMIZE TABLE partial_duplicates FINAL DEDUPLICATE BY COLUMNS('.*') EXCEPT mat;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 183', () => {
    const query = `OPTIMIZE TABLE partial_duplicates FINAL DEDUPLICATE BY pk,sk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 184', () => {
    const query = `OPTIMIZE TABLE partial_duplicates FINAL DEDUPLICATE BY COLUMNS('.*k');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 185', () => {
    const query = `OPTIMIZE TABLE optimize_final FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 186', () => {
    const query = `OPTIMIZE TABLE nested FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 187', () => {
    const query = `OPTIMIZE TABLE execute_on_single_replica_r1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 188', () => {
    const query = `OPTIMIZE TABLE select_final FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 189', () => {
    const query = `OPTIMIZE TABLE testNullableStatesAgg FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 190', () => {
    const query = `optimize table data_01513 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 191', () => {
    const query = `OPTIMIZE TABLE defaults_on_defaults FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 192', () => {
    const query = `OPTIMIZE TABLE derived_metrics_local FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 193', () => {
    const query = `OPTIMIZE TABLE buf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 194', () => {
    const query = `OPTIMIZE TABLE columns_with_multiple_streams FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 195', () => {
    const query = `OPTIMIZE TABLE columns_with_multiple_streams_bad_case FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 196', () => {
    const query = `OPTIMIZE TABLE r_prop_table2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 197', () => {
    const query = `OPTIMIZE TABLE prop_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 198', () => {
    const query = `OPTIMIZE TABLE table_for_ttl FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 199', () => {
    const query = `OPTIMIZE TABLE table_for_ttl FINAL; -- Just check in logs, that it doesn't run with force again DROP TABLE IF EXISTS table_for_ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 200', () => {
    const query = `OPTIMIZE TABLE recompression_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 201', () => {
    const query = `optimize table badFixedStringSort final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 202', () => {
    const query = `OPTIMIZE TABLE replica1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 203', () => {
    const query = `OPTIMIZE TABLE mt_01451 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 204', () => {
    const query = `OPTIMIZE TABLE index_compact FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 205', () => {
    const query = `OPTIMIZE TABLE tesd_dedupl DEDUPLICATE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 206', () => {
    const query = `OPTIMIZE TABLE nullable_key FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 207', () => {
    const query = `OPTIMIZE TABLE tt_01373 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 208', () => {
    const query = `OPTIMIZE TABLE test_01307 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 209', () => {
    const query = `optimize table data_01292 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 210', () => {
    const query = `OPTIMIZE TABLE data_01285 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 211', () => {
    const query = `OPTIMIZE TABLE ttl FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 212', () => {
    const query = `OPTIMIZE TABLE t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 213', () => {
    const query = `optimize table test_graphite final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 214', () => {
    const query = `OPTIMIZE TABLE summing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 215', () => {
    const query = `optimize table t50 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 216', () => {
    const query = `OPTIMIZE TABLE test_alter_on_mutation FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 217', () => {
    const query = `optimize table mt_compact final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 218', () => {
    const query = `OPTIMIZE TABLE column_size_bug;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 219', () => {
    const query = `OPTIMIZE TABLE check_query_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 220', () => {
    const query = `OPTIMIZE TABLE check_query_test_non_adaptive;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 221', () => {
    const query = `OPTIMIZE TABLE new_table_test FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 222', () => {
    const query = `OPTIMIZE TABLE ttl_with_default FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 223', () => {
    const query = `OPTIMIZE TABLE bad_skip_idx FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 224', () => {
    const query = `OPTIMIZE TABLE test_vertical_merge FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 225', () => {
    const query = `OPTIMIZE TABLE set_array FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 226', () => {
    const query = `optimize table ttl partition 10 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 227', () => {
    const query = `OPTIMIZE TABLE indexed_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 228', () => {
    const query = `OPTIMIZE TABLE another_indexed_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 229', () => {
    const query = `OPTIMIZE TABLE mt_table FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 230', () => {
    const query = `OPTIMIZE TABLE mt_with_pk FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 231', () => {
    const query = `OPTIMIZE TABLE mt_without_pk FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 232', () => {
    const query = `OPTIMIZE TABLE mt_with_small_granularity FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 233', () => {
    const query = `optimize table ttl_00933_2 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 234', () => {
    const query = `optimize table ttl_00933_1 final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 235', () => {
    const query = `optimize table ttl_00933_1 final; -- check ttl merge for part with both expired and unexpired values select a, b from ttl_00933_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 236', () => {
    const query = `optimize table array_intersect;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 237', () => {
    const query = `OPTIMIZE TABLE zero_rows_per_granule2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 238', () => {
    const query = `OPTIMIZE TABLE four_rows_per_granule2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 239', () => {
    const query = `OPTIMIZE TABLE adaptive_granularity_alter1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 240', () => {
    const query = `OPTIMIZE TABLE zero_rows_per_granule FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 241', () => {
    const query = `OPTIMIZE TABLE four_rows_per_granule FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 242', () => {
    const query = `OPTIMIZE TABLE six_rows_per_granule FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 243', () => {
    const query = `OPTIMIZE TABLE two_rows_per_granule FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 244', () => {
    const query = `OPTIMIZE TABLE huge_granularity_small_blocks FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 245', () => {
    const query = `OPTIMIZE TABLE adaptive_granularity_alter FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 246', () => {
    const query = `OPTIMIZE TABLE large_alter_table_00926;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 247', () => {
    const query = `optimize table simple final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 248', () => {
    const query = `optimize table with_overflow final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 249', () => {
    const query = `OPTIMIZE TABLE compression_codec_replicated1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 250', () => {
    const query = `OPTIMIZE TABLE t64 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 251', () => {
    const query = `OPTIMIZE TABLE compression_codec FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 252', () => {
    const query = `OPTIMIZE TABLE delta_codec_synthetic FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 253', () => {
    const query = `OPTIMIZE TABLE default_codec_synthetic FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 254', () => {
    const query = `OPTIMIZE TABLE delta_codec_float FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 255', () => {
    const query = `OPTIMIZE TABLE default_codec_float FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 256', () => {
    const query = `OPTIMIZE TABLE delta_codec_string FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 257', () => {
    const query = `OPTIMIZE TABLE default_codec_string FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 258', () => {
    const query = `OPTIMIZE TABLE alter_compression_codec FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 259', () => {
    const query = `OPTIMIZE TABLE large_alter_table_00804;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 260', () => {
    const query = `OPTIMIZE TABLE check_system_tables; -- flush SELECT lifetime_bytes, lifetime_rows FROM system.tables WHERE name = 'check_system_tables' AND database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 261', () => {
    const query = `OPTIMIZE TABLE buffer_00753;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 262', () => {
    const query = `OPTIMIZE TABLE sample_merge_tree FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 263', () => {
    const query = `OPTIMIZE TABLE sites FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 264', () => {
    const query = `OPTIMIZE TABLE quorum1 PARTITION '2018-11-15' FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 265', () => {
    const query = `OPTIMIZE TABLE decimal_sum;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 266', () => {
    const query = `OPTIMIZE TABLE byte_identical_r1 PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 267', () => {
    const query = `OPTIMIZE TABLE collapsing PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 268', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple_replica1_00661;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 269', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple_replica1_00661 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 270', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 271', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 272', () => {
    const query = `OPTIMIZE TABLE dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 273', () => {
    const query = `OPTIMIZE TABLE tab_00625;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 274', () => {
    const query = `OPTIMIZE TABLE nested PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 275', () => {
    const query = `OPTIMIZE TABLE rename1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 276', () => {
    const query = `OPTIMIZE TABLE rename2 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 277', () => {
    const query = `OPTIMIZE TABLE replacing_00616 PARTITION '201803' FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 278', () => {
    const query = `OPTIMIZE TABLE test_00615;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 279', () => {
    const query = `OPTIMIZE TABLE unsorted PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 280', () => {
    const query = `OPTIMIZE TABLE unsorted_replacing PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 281', () => {
    const query = `OPTIMIZE TABLE unsorted_collapsing PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 282', () => {
    const query = `OPTIMIZE TABLE tab_00577 FINAL CLEANUP;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 283', () => {
    const query = `optimize table mult_tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 284', () => {
    const query = `OPTIMIZE TABLE m3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 285', () => {
    const query = `OPTIMIZE TABLE multidimensional;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 286', () => {
    const query = `OPTIMIZE TABLE replacing PARTITION '2017-10-23' FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 287', () => {
    const query = `OPTIMIZE TABLE replicated_collapsing PARTITION 201710 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 288', () => {
    const query = `OPTIMIZE TABLE replicated_versioned_collapsing PARTITION 201710 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 289', () => {
    const query = `OPTIMIZE TABLE not_partitioned_replica1_00502 PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 290', () => {
    const query = `OPTIMIZE TABLE partitioned_by_week_replica1 PARTITION '2000-01-03' FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 291', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple_replica1_00502 PARTITION ('2000-01-01', 1) FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 292', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple_replica1_00502 PARTITION ('2000-01-02', 1) FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 293', () => {
    const query = `OPTIMIZE TABLE partitioned_by_string_replica2 PARTITION 'aaa' FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 294', () => {
    const query = `OPTIMIZE TABLE without_fixed_size_columns_replica2 PARTITION 1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 295', () => {
    const query = `OPTIMIZE TABLE not_partitioned PARTITION tuple() FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 296', () => {
    const query = `OPTIMIZE TABLE partitioned_by_week PARTITION '2000-01-03' FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 297', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple PARTITION ('2000-01-01', 1) FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 298', () => {
    const query = `OPTIMIZE TABLE partitioned_by_tuple PARTITION ('2000-01-02', 1) FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 299', () => {
    const query = `OPTIMIZE TABLE partitioned_by_string PARTITION 'aaa' FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 300', () => {
    const query = `OPTIMIZE TABLE clear_column1 PARTITION '200001';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 301', () => {
    const query = `OPTIMIZE TABLE clear_column1 PARTITION '200002';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 302', () => {
    const query = `OPTIMIZE TABLE agg_func_col;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 303', () => {
    const query = `OPTIMIZE TABLE alter_00394;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 304', () => {
    const query = `OPTIMIZE TABLE index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 305', () => {
    const query = `OPTIMIZE TABLE summing_composite_key PARTITION 200001 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 306', () => {
    const query = `OPTIMIZE TABLE merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 307', () => {
    const query = `OPTIMIZE TABLE aggregating_00191 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 308', () => {
    const query = `optimize table nested_map_multiple_values;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 309', () => {
    const query = `optimize table nested_not_a_map;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 310', () => {
    const query = `OPTIMIZE TABLE alter_00147;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 311', () => {
    const query = `optimize table nested_map;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 312', () => {
    const query = `optimize table nested_map_explicit;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 313', () => {
    const query = `OPTIMIZE TABLE summing_merge_tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 314', () => {
    const query = `OPTIMIZE TABLE summing PARTITION 197001;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 315', () => {
    const query = `OPTIMIZE TABLE alter_00061;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[OPTIMIZE] should pass without errors: 316', () => {
    const query = `OPTIMIZE TABLE empty_summing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
