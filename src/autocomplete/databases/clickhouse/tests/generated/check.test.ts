/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[CHECK] should pass without errors: 1', () => {
    const query = `CHECK TABLE t_source_part_is_intact SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 2', () => {
    const query = `CHECK TABLE eligible_test SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 3', () => {
    const query = `CHECK TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 4', () => {
    const query = `CHECK TABLE merge_table_standard_delete;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 5', () => {
    const query = `CHECK TABLE t_light;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 6', () => {
    const query = `CHECK TABLE t_large;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 7', () => {
    const query = `CHECK TABLE t_sparse_02235 SETTINGS check_query_single_value_result = 0, max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 8', () => {
    const query = `check table tp settings check_query_single_value_result=0, max_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 9', () => {
    const query = `CHECK TABLE sqllt.table FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 10', () => {
    const query = `CHECK TABLE check_codec SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 11', () => {
    const query = `CHECK TABLE check_table_with_indices SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 12', () => {
    const query = `CHECK TABLE check_query_test SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 13', () => {
    const query = `CHECK TABLE check_query_test_non_adaptive SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 14', () => {
    const query = `CHECK TABLE mt_without_pk SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 15', () => {
    const query = `CHECK TABLE replicated_mt_without_pk SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 16', () => {
    const query = `CHECK TABLE mt_table SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 17', () => {
    const query = `CHECK TABLE mt_table PARTITION 201902 SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 18', () => {
    const query = `CHECK TABLE mt_table PART '201801_1_1_2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 19', () => {
    const query = `CHECK TABLE check_query_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 20', () => {
    const query = `CHECK TABLE check_query_tiny_log PARTITION tuple(); -- { serverError NOT_IMPLEMENTED } CHECK TABLE check_query_tiny_log PART 'all_0_0_0'; -- { serverError NOT_IMPLEMENTED }
CHECK TABLE check_query_tiny_log SETTINGS max_threads = 16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 21', () => {
    const query = `CHECK TABLE check_query_tiny_log FORMAT Null SETTINGS max_threads = 8, check_query_single_value_result = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[CHECK] should pass without errors: 22', () => {
    const query = `CHECK TABLE check_query_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
