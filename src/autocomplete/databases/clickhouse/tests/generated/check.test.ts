/* eslint no-useless-escape: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors check: 1', () => {
    const query = `CHECK TABLE t_source_part_is_intact SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 2', () => {
    const query = `CHECK TABLE eligible_test SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 3', () => {
    const query = `CHECK TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 4', () => {
    const query = `CHECK TABLE merge_table_standard_delete;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 5', () => {
    const query = `CHECK TABLE t_light;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 6', () => {
    const query = `CHECK TABLE t_large;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 7', () => {
    const query = `CHECK TABLE t_sparse_02235 SETTINGS check_query_single_value_result = 0, max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 8', () => {
    const query = `check table tp settings check_query_single_value_result=0, max_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 9', () => {
    const query = `CHECK TABLE sqllt.table FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 10', () => {
    const query = `CHECK TABLE check_codec SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 11', () => {
    const query = `CHECK TABLE check_table_with_indices SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 12', () => {
    const query = `CHECK TABLE check_query_test SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 13', () => {
    const query = `CHECK TABLE check_query_test_non_adaptive SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 14', () => {
    const query = `CHECK TABLE mt_without_pk SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 15', () => {
    const query = `CHECK TABLE replicated_mt_without_pk SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 16', () => {
    const query = `CHECK TABLE mt_table SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 17', () => {
    const query = `CHECK TABLE mt_table PARTITION 201902 SETTINGS max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 18', () => {
    const query = `CHECK TABLE mt_table PART '201801_1_1_2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 19', () => {
    const query = `CHECK TABLE check_query_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 20', () => {
    const query = `CHECK TABLE check_query_tiny_log PARTITION tuple(); -- { serverError NOT_IMPLEMENTED } CHECK TABLE check_query_tiny_log PART 'all_0_0_0'; -- { serverError NOT_IMPLEMENTED }
CHECK TABLE check_query_tiny_log SETTINGS max_threads = 16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 21', () => {
    const query = `CHECK TABLE check_query_tiny_log FORMAT Null SETTINGS max_threads = 8, check_query_single_value_result = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors check: 22', () => {
    const query = `CHECK TABLE check_query_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
