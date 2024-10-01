/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[TRUNCATE] should pass without errors: 1', () => {
    const query = `truncate table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 2', () => {
    const query = `TRUNCATE TABLE t_skip_index_insert;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 3', () => {
    const query = `TRUNCATE TABLE dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 4', () => {
    const query = `TRUNCATE TABLE tab2, tab3; -- { clientError SYNTAX_ERROR } DROP TABLE IF EXISTS tab1, tab2, tab3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 5', () => {
    const query = `TRUNCATE test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 6', () => {
    const query = `truncate table data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 7', () => {
    const query = `TRUNCATE DATABASE test_truncate_database;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 8', () => {
    const query = `TRUNCATE TABLE test_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 9', () => {
    const query = `truncate table regexp_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 10', () => {
    const query = `TRUNCATE TABLE eligible_test SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 11', () => {
    const query = `truncate table data_02491;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 12', () => {
    const query = `truncate table rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 13', () => {
    const query = `truncate table rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 14', () => {
    const query = `TRUNCATE TABLE id_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 15', () => {
    const query = `TRUNCATE TABLE 02416_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 16', () => {
    const query = `TRUNCATE TABLE t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 17', () => {
    const query = `TRUNCATE TABLE landing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 18', () => {
    const query = `TRUNCATE TABLE target;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 19', () => {
    const query = `truncate table test_02302;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 20', () => {
    const query = `truncate table dst_02224;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 21', () => {
    const query = `TRUNCATE TABLE 02005_test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 22', () => {
    const query = `TRUNCATE TABLE t_ephemeral_02205_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 23', () => {
    const query = `TRUNCATE TABLE t_sparse_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 24', () => {
    const query = `truncate table t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 25', () => {
    const query = `truncate table t3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 26', () => {
    const query = `truncate table t4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 27', () => {
    const query = `truncate table DATE_INFO_DICT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 28', () => {
    const query = `TRUNCATE TABLE t_json_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 29', () => {
    const query = `TRUNCATE TABLE type_json_src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 30', () => {
    const query = `TRUNCATE TABLE type_json_dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 31', () => {
    const query = `TRUNCATE TABLE t_json_array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 32', () => {
    const query = `TRUNCATE TABLE t_json_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 33', () => {
    const query = `TRUNCATE TABLE t_json_17;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 34', () => {
    const query = `TRUNCATE TABLE t_json;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 35', () => {
    const query = `TRUNCATE TABLE sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 36', () => {
    const query = `TRUNCATE data_01660;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 37', () => {
    const query = `TRUNCATE TABLE trend;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 38', () => {
    const query = `TRUNCATE TABLE local;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 39', () => {
    const query = `truncate table json;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 40', () => {
    const query = `TRUNCATE full_duplicates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 41', () => {
    const query = `TRUNCATE partial_duplicates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 42', () => {
    const query = `truncate table order_by_const;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 43', () => {
    const query = `truncate table file_delim;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 44', () => {
    const query = `TRUNCATE TABLE bug_14144;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 45', () => {
    const query = `TRUNCATE TABLE select_final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 46', () => {
    const query = `TRUNCATE defaults;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 47', () => {
    const query = `TRUNCATE TABLE tmp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 48', () => {
    const query = `TRUNCATE truncate_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 49', () => {
    const query = `TRUNCATE TABLE times;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 50', () => {
    const query = `truncate table left_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 51', () => {
    const query = `TRUNCATE TABLE join_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 52', () => {
    const query = `truncate trunc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 53', () => {
    const query = `TRUNCATE TABLE test_01040;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 54', () => {
    const query = `TRUNCATE TABLE defaults;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 55', () => {
    const query = `TRUNCATE TABLE compression_codec_multiple_replicated1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 56', () => {
    const query = `TRUNCATE TABLE arrays_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 57', () => {
    const query = `truncate table arr_tests_visits;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 58', () => {
    const query = `TRUNCATE TABLE compression_codec_multiple_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 59', () => {
    const query = `TRUNCATE TABLE compression_codec_multiple_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 60', () => {
    const query = `TRUNCATE TABLE compression_codec_multiple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 61', () => {
    const query = `truncate temporary table test_00670;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 62', () => {
    const query = `TRUNCATE TABLE truncate_test_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 63', () => {
    const query = `TRUNCATE TABLE truncate_test_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 64', () => {
    const query = `TRUNCATE TABLE truncate_test_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 65', () => {
    const query = `TRUNCATE TABLE truncate_test_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 66', () => {
    const query = `TRUNCATE TABLE truncate_test_stripe_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 67', () => {
    const query = `TRUNCATE TABLE truncate_test_merge_tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 68', () => {
    const query = `TRUNCATE TABLE truncate_test_materialized_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 69', () => {
    const query = `TRUNCATE ALL TABLES FROM IF EXISTS {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[TRUNCATE] should pass without errors: 70', () => {
    const query = `TRUNCATE TABLE replicated_truncate1 SETTINGS replication_alter_partitions_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
