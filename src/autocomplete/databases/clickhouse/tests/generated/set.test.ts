/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[SET] should pass without errors: 1', () => {
    const query = `SET max_rows_to_read = '501G';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 2', () => {
    const query = `SET max_memory_usage = '1G';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 3', () => {
    const query = `set date_time_input_format='best_effort';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 4', () => {
    const query = `SET joined_subquery_requires_alias = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 5', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=1, max_parallel_replicas=3, cluster_for_parallel_replicas='test_cluster_one_shard_three_replicas_localhost';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 6', () => {
    const query = `SET allow_experimental_dynamic_type = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 7', () => {
    const query = `set input_format_csv_try_infer_numbers_from_strings = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 8', () => {
    const query = `SET optimize_functions_to_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 9', () => {
    const query = `set allow_experimental_object_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 10', () => {
    const query = `set allow_experimental_json_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 11', () => {
    const query = `set use_json_alias_for_old_object_type=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 12', () => {
    const query = `set use_json_alias_for_old_object_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 13', () => {
    const query = `SET wait_for_async_insert = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 14', () => {
    const query = `SET async_insert_busy_timeout_max_ms = 300000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 15', () => {
    const query = `SET async_insert_busy_timeout_min_ms = 300000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 16', () => {
    const query = `SET async_insert_use_adaptive_busy_timeout = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 17', () => {
    const query = `SET enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 18', () => {
    const query = `SET allow_experimental_json_type = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 19', () => {
    const query = `SET allow_experimental_full_text_index=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 20', () => {
    const query = `set allow_experimental_dynamic_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 21', () => {
    const query = `set allow_experimental_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 22', () => {
    const query = `set cast_keep_nullable=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 23', () => {
    const query = `SET param_p1 = 'Hello';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 24', () => {
    const query = `SET async_insert = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 25', () => {
    const query = `SET wait_for_async_insert = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 26', () => {
    const query = `set allow_experimental_variant_type = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 27', () => {
    const query = `set use_variant_as_common_type = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 28', () => {
    const query = `set max_block_size = 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 29', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 2, parallel_replicas_for_non_replicated_merge_tree = 1, max_parallel_replicas = 3, cluster_for_parallel_replicas='test_cluster_one_shard_three_replicas_localhost', merge_tree_min_rows_for_concurrent_read = 9223372036854775806, merge_tree_min_rows_for_concurrent_read_for_remote_filesystem = 9223372036854775806;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 30', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 2, max_parallel_replicas = 3, parallel_replicas_for_non_replicated_merge_tree=1, cluster_for_parallel_replicas='test_cluster_one_shard_three_replicas_localhost';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 31', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 2, max_parallel_replicas = 3, cluster_for_parallel_replicas='test_cluster_one_shard_three_replicas_localhost';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 32', () => {
    const query = `set max_block_size = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 33', () => {
    const query = `SET input_format_json_empty_as_default = 1, allow_experimental_variant_type = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 34', () => {
    const query = `SET input_format_defaults_for_omitted_fields = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 35', () => {
    const query = `SET input_format_defaults_for_omitted_fields = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 36', () => {
    const query = `set session_timezone = 'UTC'; -- don't randomize the session timezone SET allow_experimental_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 37', () => {
    const query = `set input_format_try_infer_datetimes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 38', () => {
    const query = `set input_format_try_infer_dates = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 39', () => {
    const query = `set schema_inference_make_columns_nullable = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 40', () => {
    const query = `set input_format_json_try_infer_numbers_from_strings = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 41', () => {
    const query = `set session_timezone = 'UTC';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 42', () => {
    const query = `SET allow_experimental_time_series_table = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 43', () => {
    const query = `set allow_experimental_refreshable_materialized_view=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 44', () => {
    const query = `SET output_format_write_statistics = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 45', () => {
    const query = `SET create_if_not_exists=0;  -- Default DROP TABLE IF EXISTS example_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 46', () => {
    const query = `SET allow_experimental_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 47', () => {
    const query = `set allow_experimental_variant_type = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 48', () => {
    const query = `set allow_experimental_dynamic_type = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 49', () => {
    const query = `set allow_suspicious_low_cardinality_types = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 50', () => {
    const query = `set allow_suspicious_fixed_string_types = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 51', () => {
    const query = `SET s3_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 52', () => {
    const query = `set allow_suspicious_low_cardinality_types = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 53', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=1, max_parallel_replicas=3, cluster_for_parallel_replicas='parallel_replicas';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 54', () => {
    const query = `SET allow_experimental_analyzer=1; -- fix has been done only for the analyzer SET enable_order_by_all = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 55', () => {
    const query = `SET max_parallel_replicas = 2, cluster_for_parallel_replicas='parallel_replicas';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 56', () => {
    const query = `set use_variant_as_common_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 57', () => {
    const query = `SET distributed_ddl_task_timeout = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 58', () => {
    const query = `set allow_experimental_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 59', () => {
    const query = `SET alter_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 60', () => {
    const query = `SET max_parallel_replicas = 3, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', parallel_replicas_for_non_replicated_merge_tree = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 61', () => {
    const query = `SET join_algorithm='hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 62', () => {
    const query = `SET allow_experimental_join_condition=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 63', () => {
    const query = `set allow_experimental_variant_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 64', () => {
    const query = `SET optimize_min_equality_disjunction_chain_length = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 65', () => {
    const query = `SET enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 66', () => {
    const query = `set input_format_json_try_infer_numbers_from_strings=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 67', () => {
    const query = `set allow_suspicious_low_cardinality_types=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 68', () => {
    const query = `SET max_threads=1, max_insert_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 69', () => {
    const query = `SET dictionary_validate_primary_key_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 70', () => {
    const query = `SET enable_analyzer=1, join_algorithm = 'full_sorting_merge';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 71', () => {
    const query = `set rows_before_aggregation = 1, exact_rows_before_limit = 1, output_format_write_statistics = 0, max_block_size = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 72', () => {
    const query = `set prefer_localhost_replica = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 73', () => {
    const query = `set prefer_localhost_replica = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 74', () => {
    const query = `set optimize_aggregation_in_order=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 75', () => {
    const query = `SET max_rows_to_read = 8192, force_primary_key = 1, analyze_index_with_space_filling_curves = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 76', () => {
    const query = `SET max_rows_to_read = 8192, force_primary_key = 1, analyze_index_with_space_filling_curves = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 77', () => {
    const query = `SET max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 78', () => {
    const query = `SET max_rows_to_read = 200, force_primary_key = 1, analyze_index_with_space_filling_curves = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 79', () => {
    const query = `SET join_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 80', () => {
    const query = `SET short_circuit_function_evaluation='enable';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 81', () => {
    const query = `set enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 82', () => {
    const query = `SET optimize_read_in_order = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 83', () => {
    const query = `SET max_threads = 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 84', () => {
    const query = `SET read_in_order_use_buffering = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 85', () => {
    const query = `SET max_memory_usage = '100M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 86', () => {
    const query = `SET max_threads = 8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 87', () => {
    const query = `SET read_in_order_use_buffering = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 88', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 2, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'parallel_replicas', max_parallel_replicas = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 89', () => {
    const query = `SET implicit_transaction=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 90', () => {
    const query = `set throw_on_unsupported_query_inside_transaction=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 91', () => {
    const query = `SET allow_experimental_inverted_index=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 92', () => {
    const query = `SET query_plan_enable_multithreading_after_window_functions=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 93', () => {
    const query = `SET max_threads=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 94', () => {
    const query = `SET allow_prefetched_read_pool_for_remote_filesystem=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 95', () => {
    const query = `SET allow_prefetched_read_pool_for_local_filesystem=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 96', () => {
    const query = `SET max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 97', () => {
    const query = `SET remote_read_min_bytes_for_seek = 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 98', () => {
    const query = `SET s3_check_objects_after_upload=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 99', () => {
    const query = `set input_format_orc_filter_push_down = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 100', () => {
    const query = `set engine_file_truncate_on_insert = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 101', () => {
    const query = `SET materialize_skip_indexes_on_insert = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 102', () => {
    const query = `SET mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 103', () => {
    const query = `set max_insert_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 104', () => {
    const query = `SET lightweight_deletes_sync = 2, alter_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 105', () => {
    const query = `SET output_format_pretty_display_footer_column_names=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 106', () => {
    const query = `SET max_insert_threads = 1, max_threads = 1, min_insert_block_size_rows = 0, min_insert_block_size_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 107', () => {
    const query = `SET join_algorithm = 'partial_merge';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 108', () => {
    const query = `SET max_joined_block_size_rows = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 109', () => {
    const query = `SET max_rows_in_join = 111;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 110', () => {
    const query = `set min_compress_block_size = 585572, max_compress_block_size = 373374, max_block_size = 60768, max_joined_block_size_rows = 18966, max_insert_threads = 5, max_threads = 50, max_read_buffer_size = 708232, connect_timeout_with_failover_ms = 2000, connect_timeout_with_failover_secure_ms = 3000, idle_connection_timeout = 36000, use_uncompressed_cache = true, stream_like_engine_allow_direct_select = true, replication_wait_for_inactive_replica_timeout = 30, compile_aggregate_expressions = false, min_count_to_compile_aggregate_expression = 0, compile_sort_description = false, group_by_two_level_threshold = 1000000, group_by_two_level_threshold_bytes = 12610083, enable_memory_bound_merging_of_aggregation_results = false, min_chunk_bytes_for_parallel_parsing = 18769830, merge_tree_coarse_index_granularity = 12, min_bytes_to_use_direct_io = 10737418240, min_bytes_to_use_mmap_io = 10737418240, log_queries = true, insert_quorum_timeout = 60000, merge_tree_read_split_ranges_into_intersecting_and_non_intersecting_injection_probability = 0.05000000074505806, http_response_buffer_size = 294986, fsync_metadata = true, http_send_timeout = 60., http_receive_timeout = 60., opentelemetry_start_trace_probability = 0.10000000149011612, max_bytes_before_external_group_by = 1, max_bytes_before_external_sort = 10737418240, max_bytes_before_remerge_sort = 1326536545, max_untracked_memory = 1048576, memory_profiler_step = 1048576, log_comment = '03151_dynamic_type_scale_max_types.sql', send_logs_level = 'fatal', prefer_localhost_replica = false, optimize_read_in_order = false, optimize_aggregation_in_order = true, aggregation_in_order_max_block_bytes = 27069500, read_in_order_two_level_merge_threshold = 75, allow_introspection_functions = true, database_atomic_wait_for_drop_and_detach_synchronously = true, remote_filesystem_read_method = 'read', local_filesystem_read_prefetch = true, remote_filesystem_read_prefetch = false, merge_tree_compact_parts_min_granules_to_multibuffer_read = 119, async_insert_busy_timeout_max_ms = 5000, read_from_filesystem_cache_if_exists_otherwise_bypass_cache = true, filesystem_cache_segments_batch_size = 10, use_page_cache_for_disks_without_file_cache = true, page_cache_inject_eviction = true, allow_prefetched_read_pool_for_remote_filesystem = false, filesystem_prefetch_step_marks = 50, filesystem_prefetch_min_bytes_for_single_read_task = 16777216, filesystem_prefetch_max_memory_usage = 134217728, filesystem_prefetches_limit = 10, optimize_sorting_by_input_stream_properties = false, allow_experimental_dynamic_type = true, session_timezone = 'Africa/Khartoum', prefer_warmed_unmerged_parts_seconds = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 111', () => {
    const query = `SET log_queries = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 112', () => {
    const query = `SET log_query_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 113', () => {
    const query = `SET query_profiler_real_time_period_ns = 100000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 114', () => {
    const query = `SET input_format_try_infer_variants=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 115', () => {
    const query = `SET group_by_use_nulls = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 116', () => {
    const query = `SET join_algorithm = 'full_sorting_merge';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 117', () => {
    const query = `SET insert_keeper_fault_injection_probability = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 118', () => {
    const query = `SET max_rows_to_read = 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 119', () => {
    const query = `SET max_rows_to_read = 100_000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 120', () => {
    const query = `SET allow_create_index_without_type = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 121', () => {
    const query = `set alter_sync = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 122', () => {
    const query = `SET cluster_for_parallel_replicas='parallel_replicas', max_parallel_replicas=4, allow_experimental_parallel_reading_from_replicas=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 123', () => {
    const query = `SET allow_deprecated_syntax_for_merge_tree = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 124', () => {
    const query = `SET compile_sort_description = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 125', () => {
    const query = `SET min_count_to_compile_sort_description = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 126', () => {
    const query = `SET join_algorithm = 'hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 127', () => {
    const query = `SET asterisk_include_materialized_columns = 1 ;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 128', () => {
    const query = `SET prefer_localhost_replica=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 129', () => {
    const query = `SET param_test_a=30;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 130', () => {
    const query = `SET distributed_foreground_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 131', () => {
    const query = `SET distributed_product_mode='local';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 132', () => {
    const query = `SET distributed_product_mode='global';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 133', () => {
    const query = `set optimize_if_transform_strings_to_enum=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 134', () => {
    const query = `set enable_analyzer = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 135', () => {
    const query = `SET join_algorithm = 'default'; -- for 'full_sorting_merge' the query is 10x slower SET enable_analyzer = 1; -- old analyzer returns TOO_DEEP_SUBQUERIES
SELECT * FROM (SELECT 1 AS x) t1 JOIN (SELECT 1 AS x) t2 ON t1.x = t2.x JOIN (SELECT 1 AS x) t3 ON t1.x = t3.x JOIN (SELECT 1 AS x) t4 ON t1.x = t4.x JOIN (SELECT 1 AS x) t5 ON t1.x = t5.x JOIN (SELECT 1 AS x) t6 ON t1.x = t6.x JOIN (SELECT 1 AS x) t7 ON t1.x = t7.x JOIN (SELECT 1 AS x) t8 ON t1.x = t8.x JOIN (SELECT 1 AS x) t9 ON t1.x = t9.x JOIN (SELECT 1 AS x) t10 ON t1.x = t10.x JOIN (SELECT 1 AS x) t11 ON t1.x = t11.x JOIN (SELECT 1 AS x) t12 ON t1.x = t12.x JOIN (SELECT 1 AS x) t13 ON t1.x = t13.x JOIN (SELECT 1 AS x) t14 ON t1.x = t14.x JOIN (SELECT 1 AS x) t15 ON t1.x = t15.x JOIN (SELECT 1 AS x) t16 ON t1.x = t16.x JOIN (SELECT 1 AS x) t17 ON t1.x = t17.x JOIN (SELECT 1 AS x) t18 ON t1.x = t18.x JOIN (SELECT 1 AS x) t19 ON t1.x = t19.x JOIN (SELECT 1 AS x) t20 ON t1.x = t20.x JOIN (SELECT 1 AS x) t21 ON t1.x = t21.x JOIN (SELECT 1 AS x) t22 ON t1.x = t22.x JOIN (SELECT 1 AS x) t23 ON t1.x = t23.x JOIN (SELECT 1 AS x) t24 ON t1.x = t24.x JOIN (SELECT 1 AS x) t25 ON t1.x = t25.x JOIN (SELECT 1 AS x) t26 ON t1.x = t26.x JOIN (SELECT 1 AS x) t27 ON t1.x = t27.x JOIN (SELECT 1 AS x) t28 ON t1.x = t28.x JOIN (SELECT 1 AS x) t29 ON t1.x = t29.x JOIN (SELECT 1 AS x) t30 ON t1.x = t30.x JOIN (SELECT 1 AS x) t31 ON t1.x = t31.x JOIN (SELECT 1 AS x) t32 ON t1.x = t32.x JOIN (SELECT 1 AS x) t33 ON t1.x = t33.x JOIN (SELECT 1 AS x) t34 ON t1.x = t34.x JOIN (SELECT 1 AS x) t35 ON t1.x = t35.x JOIN (SELECT 1 AS x) t36 ON t1.x = t36.x JOIN (SELECT 1 AS x) t37 ON t1.x = t37.x JOIN (SELECT 1 AS x) t38 ON t1.x = t38.x JOIN (SELECT 1 AS x) t39 ON t1.x = t39.x JOIN (SELECT 1 AS x) t40 ON t1.x = t40.x JOIN (SELECT 1 AS x) t41 ON t1.x = t41.x JOIN (SELECT 1 AS x) t42 ON t1.x = t42.x JOIN (SELECT 1 AS x) t43 ON t1.x = t43.x JOIN (SELECT 1 AS x) t44 ON t1.x = t44.x JOIN (SELECT 1 AS x) t45 ON t1.x = t45.x JOIN (SELECT 1 AS x) t46 ON t1.x = t46.x JOIN (SELECT 1 AS x) t47 ON t1.x = t47.x JOIN (SELECT 1 AS x) t48 ON t1.x = t48.x JOIN (SELECT 1 AS x) t49 ON t1.x = t49.x JOIN (SELECT 1 AS x) t50 ON t1.x = t50.x JOIN (SELECT 1 AS x) t51 ON t1.x = t51.x JOIN (SELECT 1 AS x) t52 ON t1.x = t52.x JOIN (SELECT 1 AS x) t53 ON t1.x = t53.x JOIN (SELECT 1 AS x) t54 ON t1.x = t54.x JOIN (SELECT 1 AS x) t55 ON t1.x = t55.x JOIN (SELECT 1 AS x) t56 ON t1.x = t56.x JOIN (SELECT 1 AS x) t57 ON t1.x = t57.x JOIN (SELECT 1 AS x) t58 ON t1.x = t58.x JOIN (SELECT 1 AS x) t59 ON t1.x = t59.x JOIN (SELECT 1 AS x) t60 ON t1.x = t60.x JOIN (SELECT 1 AS x) t61 ON t1.x = t61.x JOIN (SELECT 1 AS x) t62 ON t1.x = t62.x JOIN (SELECT 1 AS x) t63 ON t1.x = t63.x JOIN (SELECT 1 AS x) t64 ON t1.x = t64.x JOIN (SELECT 1 AS x) t65 ON t1.x = t65.x JOIN (SELECT 1 AS x) t66 ON t1.x = t66.x JOIN (SELECT 1 AS x) t67 ON t1.x = t67.x JOIN (SELECT 1 AS x) t68 ON t1.x = t68.x JOIN (SELECT 1 AS x) t69 ON t1.x = t69.x JOIN (SELECT 1 AS x) t70 ON t1.x = t70.x JOIN (SELECT 1 AS x) t71 ON t1.x = t71.x JOIN (SELECT 1 AS x) t72 ON t1.x = t72.x JOIN (SELECT 1 AS x) t73 ON t1.x = t73.x JOIN (SELECT 1 AS x) t74 ON t1.x = t74.x JOIN (SELECT 1 AS x) t75 ON t1.x = t75.x JOIN (SELECT 1 AS x) t76 ON t1.x = t76.x JOIN (SELECT 1 AS x) t77 ON t1.x = t77.x JOIN (SELECT 1 AS x) t78 ON t1.x = t78.x JOIN (SELECT 1 AS x) t79 ON t1.x = t79.x JOIN (SELECT 1 AS x) t80 ON t1.x = t80.x JOIN (SELECT 1 AS x) t81 ON t1.x = t81.x JOIN (SELECT 1 AS x) t82 ON t1.x = t82.x JOIN (SELECT 1 AS x) t83 ON t1.x = t83.x JOIN (SELECT 1 AS x) t84 ON t1.x = t84.x JOIN (SELECT 1 AS x) t85 ON t1.x = t85.x JOIN (SELECT 1 AS x) t86 ON t1.x = t86.x JOIN (SELECT 1 AS x) t87 ON t1.x = t87.x JOIN (SELECT 1 AS x) t88 ON t1.x = t88.x JOIN (SELECT 1 AS x) t89 ON t1.x = t89.x JOIN (SELECT 1 AS x) t90 ON t1.x = t90.x JOIN (SELECT 1 AS x) t91 ON t1.x = t91.x JOIN (SELECT 1 AS x) t92 ON t1.x = t92.x JOIN (SELECT 1 AS x) t93 ON t1.x = t93.x JOIN (SELECT 1 AS x) t94 ON t1.x = t94.x JOIN (SELECT 1 AS x) t95 ON t1.x = t95.x JOIN (SELECT 1 AS x) t96 ON t1.x = t96.x JOIN (SELECT 1 AS x) t97 ON t1.x = t97.x JOIN (SELECT 1 AS x) t98 ON t1.x = t98.x JOIN (SELECT 1 AS x) t99 ON t1.x = t99.x JOIN (SELECT 1 AS x) t100 ON t1.x = t100.x JOIN (SELECT 1 AS x) t101 ON t1.x = t101.x JOIN (SELECT 1 AS x) t102 ON t1.x = t102.x JOIN (SELECT 1 AS x) t103 ON t1.x = t103.x JOIN (SELECT 1 AS x) t104 ON t1.x = t104.x JOIN (SELECT 1 AS x) t105 ON t1.x = t105.x JOIN (SELECT 1 AS x) t106 ON t1.x = t106.x JOIN (SELECT 1 AS x) t107 ON t1.x = t107.x JOIN (SELECT 1 AS x) t108 ON t1.x = t108.x JOIN (SELECT 1 AS x) t109 ON t1.x = t109.x JOIN (SELECT 1 AS x) t110 ON t1.x = t110.x JOIN (SELECT 1 AS x) t111 ON t1.x = t111.x JOIN (SELECT 1 AS x) t112 ON t1.x = t112.x JOIN (SELECT 1 AS x) t113 ON t1.x = t113.x JOIN (SELECT 1 AS x) t114 ON t1.x = t114.x JOIN (SELECT 1 AS x) t115 ON t1.x = t115.x JOIN (SELECT 1 AS x) t116 ON t1.x = t116.x JOIN (SELECT 1 AS x) t117 ON t1.x = t117.x JOIN (SELECT 1 AS x) t118 ON t1.x = t118.x JOIN (SELECT 1 AS x) t119 ON t1.x = t119.x JOIN (SELECT 1 AS x) t120 ON t1.x = t120.x JOIN (SELECT 1 AS x) t121 ON t1.x = t121.x JOIN (SELECT 1 AS x) t122 ON t1.x = t122.x JOIN (SELECT 1 AS x) t123 ON t1.x = t123.x JOIN (SELECT 1 AS x) t124 ON t1.x = t124.x JOIN (SELECT 1 AS x) t125 ON t1.x = t125.x JOIN (SELECT 1 AS x) t126 ON t1.x = t126.x JOIN (SELECT 1 AS x) t127 ON t1.x = t127.x JOIN (SELECT 1 AS x) t128 ON t1.x = t128.x JOIN (SELECT 1 AS x) t129 ON t1.x = t129.x JOIN (SELECT 1 AS x) t130 ON t1.x = t130.x JOIN (SELECT 1 AS x) t131 ON t1.x = t131.x JOIN (SELECT 1 AS x) t132 ON t1.x = t132.x JOIN (SELECT 1 AS x) t133 ON t1.x = t133.x JOIN (SELECT 1 AS x) t134 ON t1.x = t134.x JOIN (SELECT 1 AS x) t135 ON t1.x = t135.x JOIN (SELECT 1 AS x) t136 ON t1.x = t136.x JOIN (SELECT 1 AS x) t137 ON t1.x = t137.x JOIN (SELECT 1 AS x) t138 ON t1.x = t138.x JOIN (SELECT 1 AS x) t139 ON t1.x = t139.x JOIN (SELECT 1 AS x) t140 ON t1.x = t140.x JOIN (SELECT 1 AS x) t141 ON t1.x = t141.x JOIN (SELECT 1 AS x) t142 ON t1.x = t142.x JOIN (SELECT 1 AS x) t143 ON t1.x = t143.x JOIN (SELECT 1 AS x) t144 ON t1.x = t144.x JOIN (SELECT 1 AS x) t145 ON t1.x = t145.x JOIN (SELECT 1 AS x) t146 ON t1.x = t146.x JOIN (SELECT 1 AS x) t147 ON t1.x = t147.x JOIN (SELECT 1 AS x) t148 ON t1.x = t148.x JOIN (SELECT 1 AS x) t149 ON t1.x = t149.x JOIN (SELECT 1 AS x) t150 ON t1.x = t150.x JOIN (SELECT 1 AS x) t151 ON t1.x = t151.x JOIN (SELECT 1 AS x) t152 ON t1.x = t152.x JOIN (SELECT 1 AS x) t153 ON t1.x = t153.x JOIN (SELECT 1 AS x) t154 ON t1.x = t154.x JOIN (SELECT 1 AS x) t155 ON t1.x = t155.x JOIN (SELECT 1 AS x) t156 ON t1.x = t156.x JOIN (SELECT 1 AS x) t157 ON t1.x = t157.x JOIN (SELECT 1 AS x) t158 ON t1.x = t158.x JOIN (SELECT 1 AS x) t159 ON t1.x = t159.x JOIN (SELECT 1 AS x) t160 ON t1.x = t160.x JOIN (SELECT 1 AS x) t161 ON t1.x = t161.x JOIN (SELECT 1 AS x) t162 ON t1.x = t162.x JOIN (SELECT 1 AS x) t163 ON t1.x = t163.x JOIN (SELECT 1 AS x) t164 ON t1.x = t164.x JOIN (SELECT 1 AS x) t165 ON t1.x = t165.x JOIN (SELECT 1 AS x) t166 ON t1.x = t166.x JOIN (SELECT 1 AS x) t167 ON t1.x = t167.x JOIN (SELECT 1 AS x) t168 ON t1.x = t168.x JOIN (SELECT 1 AS x) t169 ON t1.x = t169.x JOIN (SELECT 1 AS x) t170 ON t1.x = t170.x JOIN (SELECT 1 AS x) t171 ON t1.x = t171.x JOIN (SELECT 1 AS x) t172 ON t1.x = t172.x JOIN (SELECT 1 AS x) t173 ON t1.x = t173.x JOIN (SELECT 1 AS x) t174 ON t1.x = t174.x JOIN (SELECT 1 AS x) t175 ON t1.x = t175.x JOIN (SELECT 1 AS x) t176 ON t1.x = t176.x JOIN (SELECT 1 AS x) t177 ON t1.x = t177.x JOIN (SELECT 1 AS x) t178 ON t1.x = t178.x JOIN (SELECT 1 AS x) t179 ON t1.x = t179.x JOIN (SELECT 1 AS x) t180 ON t1.x = t180.x JOIN (SELECT 1 AS x) t181 ON t1.x = t181.x JOIN (SELECT 1 AS x) t182 ON t1.x = t182.x JOIN (SELECT 1 AS x) t183 ON t1.x = t183.x JOIN (SELECT 1 AS x) t184 ON t1.x = t184.x JOIN (SELECT 1 AS x) t185 ON t1.x = t185.x JOIN (SELECT 1 AS x) t186 ON t1.x = t186.x JOIN (SELECT 1 AS x) t187 ON t1.x = t187.x JOIN (SELECT 1 AS x) t188 ON t1.x = t188.x JOIN (SELECT 1 AS x) t189 ON t1.x = t189.x JOIN (SELECT 1 AS x) t190 ON t1.x = t190.x JOIN (SELECT 1 AS x) t191 ON t1.x = t191.x JOIN (SELECT 1 AS x) t192 ON t1.x = t192.x JOIN (SELECT 1 AS x) t193 ON t1.x = t193.x JOIN (SELECT 1 AS x) t194 ON t1.x = t194.x JOIN (SELECT 1 AS x) t195 ON t1.x = t195.x JOIN (SELECT 1 AS x) t196 ON t1.x = t196.x JOIN (SELECT 1 AS x) t197 ON t1.x = t197.x JOIN (SELECT 1 AS x) t198 ON t1.x = t198.x JOIN (SELECT 1 AS x) t199 ON t1.x = t199.x JOIN (SELECT 1 AS x) t200 ON t1.x = t200.x JOIN (SELECT 1 AS x) t201 ON t1.x = t201.x JOIN (SELECT 1 AS x) t202 ON t1.x = t202.x JOIN (SELECT 1 AS x) t203 ON t1.x = t203.x JOIN (SELECT 1 AS x) t204 ON t1.x = t204.x JOIN (SELECT 1 AS x) t205 ON t1.x = t205.x JOIN (SELECT 1 AS x) t206 ON t1.x = t206.x JOIN (SELECT 1 AS x) t207 ON t1.x = t207.x JOIN (SELECT 1 AS x) t208 ON t1.x = t208.x JOIN (SELECT 1 AS x) t209 ON t1.x = t209.x JOIN (SELECT 1 AS x) t210 ON t1.x = t210.x JOIN (SELECT 1 AS x) t211 ON t1.x = t211.x JOIN (SELECT 1 AS x) t212 ON t1.x = t212.x JOIN (SELECT 1 AS x) t213 ON t1.x = t213.x JOIN (SELECT 1 AS x) t214 ON t1.x = t214.x JOIN (SELECT 1 AS x) t215 ON t1.x = t215.x JOIN (SELECT 1 AS x) t216 ON t1.x = t216.x JOIN (SELECT 1 AS x) t217 ON t1.x = t217.x JOIN (SELECT 1 AS x) t218 ON t1.x = t218.x JOIN (SELECT 1 AS x) t219 ON t1.x = t219.x JOIN (SELECT 1 AS x) t220 ON t1.x = t220.x JOIN (SELECT 1 AS x) t221 ON t1.x = t221.x JOIN (SELECT 1 AS x) t222 ON t1.x = t222.x JOIN (SELECT 1 AS x) t223 ON t1.x = t223.x JOIN (SELECT 1 AS x) t224 ON t1.x = t224.x JOIN (SELECT 1 AS x) t225 ON t1.x = t225.x JOIN (SELECT 1 AS x) t226 ON t1.x = t226.x JOIN (SELECT 1 AS x) t227 ON t1.x = t227.x JOIN (SELECT 1 AS x) t228 ON t1.x = t228.x JOIN (SELECT 1 AS x) t229 ON t1.x = t229.x JOIN (SELECT 1 AS x) t230 ON t1.x = t230.x JOIN (SELECT 1 AS x) t231 ON t1.x = t231.x JOIN (SELECT 1 AS x) t232 ON t1.x = t232.x JOIN (SELECT 1 AS x) t233 ON t1.x = t233.x JOIN (SELECT 1 AS x) t234 ON t1.x = t234.x JOIN (SELECT 1 AS x) t235 ON t1.x = t235.x JOIN (SELECT 1 AS x) t236 ON t1.x = t236.x JOIN (SELECT 1 AS x) t237 ON t1.x = t237.x JOIN (SELECT 1 AS x) t238 ON t1.x = t238.x JOIN (SELECT 1 AS x) t239 ON t1.x = t239.x JOIN (SELECT 1 AS x) t240 ON t1.x = t240.x JOIN (SELECT 1 AS x) t241 ON t1.x = t241.x JOIN (SELECT 1 AS x) t242 ON t1.x = t242.x JOIN (SELECT 1 AS x) t243 ON t1.x = t243.x JOIN (SELECT 1 AS x) t244 ON t1.x = t244.x JOIN (SELECT 1 AS x) t245 ON t1.x = t245.x JOIN (SELECT 1 AS x) t246 ON t1.x = t246.x JOIN (SELECT 1 AS x) t247 ON t1.x = t247.x JOIN (SELECT 1 AS x) t248 ON t1.x = t248.x JOIN (SELECT 1 AS x) t249 ON t1.x = t249.x JOIN (SELECT 1 AS x) t250 ON t1.x = t250.x JOIN (SELECT 1 AS x) t251 ON t1.x = t251.x JOIN (SELECT 1 AS x) t252 ON t1.x = t252.x JOIN (SELECT 1 AS x) t253 ON t1.x = t253.x JOIN (SELECT 1 AS x) t254 ON t1.x = t254.x JOIN (SELECT 1 AS x) t255 ON t1.x = t255.x JOIN (SELECT 1 AS x) t256 ON t1.x = t256.x JOIN (SELECT 1 AS x) t257 ON t1.x = t257.x JOIN (SELECT 1 AS x) t258 ON t1.x = t258.x JOIN (SELECT 1 AS x) t259 ON t1.x = t259.x JOIN (SELECT 1 AS x) t260 ON t1.x = t260.x JOIN (SELECT 1 AS x) t261 ON t1.x = t261.x JOIN (SELECT 1 AS x) t262 ON t1.x = t262.x JOIN (SELECT 1 AS x) t263 ON t1.x = t263.x JOIN (SELECT 1 AS x) t264 ON t1.x = t264.x JOIN (SELECT 1 AS x) t265 ON t1.x = t265.x JOIN (SELECT 1 AS x) t266 ON t1.x = t266.x JOIN (SELECT 1 AS x) t267 ON t1.x = t267.x JOIN (SELECT 1 AS x) t268 ON t1.x = t268.x JOIN (SELECT 1 AS x) t269 ON t1.x = t269.x JOIN (SELECT 1 AS x) t270 ON t1.x = t270.x JOIN (SELECT 1 AS x) t271 ON t1.x = t271.x JOIN (SELECT 1 AS x) t272 ON t1.x = t272.x JOIN (SELECT 1 AS x) t273 ON t1.x = t273.x JOIN (SELECT 1 AS x) t274 ON t1.x = t274.x JOIN (SELECT 1 AS x) t275 ON t1.x = t275.x JOIN (SELECT 1 AS x) t276 ON t1.x = t276.x JOIN (SELECT 1 AS x) t277 ON t1.x = t277.x JOIN (SELECT 1 AS x) t278 ON t1.x = t278.x JOIN (SELECT 1 AS x) t279 ON t1.x = t279.x JOIN (SELECT 1 AS x) t280 ON t1.x = t280.x JOIN (SELECT 1 AS x) t281 ON t1.x = t281.x JOIN (SELECT 1 AS x) t282 ON t1.x = t282.x JOIN (SELECT 1 AS x) t283 ON t1.x = t283.x JOIN (SELECT 1 AS x) t284 ON t1.x = t284.x JOIN (SELECT 1 AS x) t285 ON t1.x = t285.x JOIN (SELECT 1 AS x) t286 ON t1.x = t286.x JOIN (SELECT 1 AS x) t287 ON t1.x = t287.x JOIN (SELECT 1 AS x) t288 ON t1.x = t288.x JOIN (SELECT 1 AS x) t289 ON t1.x = t289.x JOIN (SELECT 1 AS x) t290 ON t1.x = t290.x JOIN (SELECT 1 AS x) t291 ON t1.x = t291.x JOIN (SELECT 1 AS x) t292 ON t1.x = t292.x JOIN (SELECT 1 AS x) t293 ON t1.x = t293.x JOIN (SELECT 1 AS x) t294 ON t1.x = t294.x JOIN (SELECT 1 AS x) t295 ON t1.x = t295.x JOIN (SELECT 1 AS x) t296 ON t1.x = t296.x JOIN (SELECT 1 AS x) t297 ON t1.x = t297.x JOIN (SELECT 1 AS x) t298 ON t1.x = t298.x JOIN (SELECT 1 AS x) t299 ON t1.x = t299.x JOIN (SELECT 1 AS x) t300 ON t1.x = t300.x JOIN (SELECT 1 AS x) t301 ON t1.x = t301.x JOIN (SELECT 1 AS x) t302 ON t1.x = t302.x JOIN (SELECT 1 AS x) t303 ON t1.x = t303.x JOIN (SELECT 1 AS x) t304 ON t1.x = t304.x JOIN (SELECT 1 AS x) t305 ON t1.x = t305.x JOIN (SELECT 1 AS x) t306 ON t1.x = t306.x JOIN (SELECT 1 AS x) t307 ON t1.x = t307.x JOIN (SELECT 1 AS x) t308 ON t1.x = t308.x JOIN (SELECT 1 AS x) t309 ON t1.x = t309.x JOIN (SELECT 1 AS x) t310 ON t1.x = t310.x JOIN (SELECT 1 AS x) t311 ON t1.x = t311.x JOIN (SELECT 1 AS x) t312 ON t1.x = t312.x JOIN (SELECT 1 AS x) t313 ON t1.x = t313.x JOIN (SELECT 1 AS x) t314 ON t1.x = t314.x JOIN (SELECT 1 AS x) t315 ON t1.x = t315.x JOIN (SELECT 1 AS x) t316 ON t1.x = t316.x JOIN (SELECT 1 AS x) t317 ON t1.x = t317.x JOIN (SELECT 1 AS x) t318 ON t1.x = t318.x JOIN (SELECT 1 AS x) t319 ON t1.x = t319.x JOIN (SELECT 1 AS x) t320 ON t1.x = t320.x JOIN (SELECT 1 AS x) t321 ON t1.x = t321.x JOIN (SELECT 1 AS x) t322 ON t1.x = t322.x JOIN (SELECT 1 AS x) t323 ON t1.x = t323.x JOIN (SELECT 1 AS x) t324 ON t1.x = t324.x JOIN (SELECT 1 AS x) t325 ON t1.x = t325.x JOIN (SELECT 1 AS x) t326 ON t1.x = t326.x JOIN (SELECT 1 AS x) t327 ON t1.x = t327.x JOIN (SELECT 1 AS x) t328 ON t1.x = t328.x JOIN (SELECT 1 AS x) t329 ON t1.x = t329.x JOIN (SELECT 1 AS x) t330 ON t1.x = t330.x JOIN (SELECT 1 AS x) t331 ON t1.x = t331.x JOIN (SELECT 1 AS x) t332 ON t1.x = t332.x JOIN (SELECT 1 AS x) t333 ON t1.x = t333.x JOIN (SELECT 1 AS x) t334 ON t1.x = t334.x JOIN (SELECT 1 AS x) t335 ON t1.x = t335.x JOIN (SELECT 1 AS x) t336 ON t1.x = t336.x JOIN (SELECT 1 AS x) t337 ON t1.x = t337.x JOIN (SELECT 1 AS x) t338 ON t1.x = t338.x JOIN (SELECT 1 AS x) t339 ON t1.x = t339.x JOIN (SELECT 1 AS x) t340 ON t1.x = t340.x JOIN (SELECT 1 AS x) t341 ON t1.x = t341.x JOIN (SELECT 1 AS x) t342 ON t1.x = t342.x JOIN (SELECT 1 AS x) t343 ON t1.x = t343.x JOIN (SELECT 1 AS x) t344 ON t1.x = t344.x JOIN (SELECT 1 AS x) t345 ON t1.x = t345.x JOIN (SELECT 1 AS x) t346 ON t1.x = t346.x JOIN (SELECT 1 AS x) t347 ON t1.x = t347.x JOIN (SELECT 1 AS x) t348 ON t1.x = t348.x JOIN (SELECT 1 AS x) t349 ON t1.x = t349.x JOIN (SELECT 1 AS x) t350 ON t1.x = t350.x JOIN (SELECT 1 AS x) t351 ON t1.x = t351.x JOIN (SELECT 1 AS x) t352 ON t1.x = t352.x JOIN (SELECT 1 AS x) t353 ON t1.x = t353.x JOIN (SELECT 1 AS x) t354 ON t1.x = t354.x JOIN (SELECT 1 AS x) t355 ON t1.x = t355.x JOIN (SELECT 1 AS x) t356 ON t1.x = t356.x JOIN (SELECT 1 AS x) t357 ON t1.x = t357.x JOIN (SELECT 1 AS x) t358 ON t1.x = t358.x JOIN (SELECT 1 AS x) t359 ON t1.x = t359.x JOIN (SELECT 1 AS x) t360 ON t1.x = t360.x JOIN (SELECT 1 AS x) t361 ON t1.x = t361.x JOIN (SELECT 1 AS x) t362 ON t1.x = t362.x JOIN (SELECT 1 AS x) t363 ON t1.x = t363.x JOIN (SELECT 1 AS x) t364 ON t1.x = t364.x JOIN (SELECT 1 AS x) t365 ON t1.x = t365.x JOIN (SELECT 1 AS x) t366 ON t1.x = t366.x JOIN (SELECT 1 AS x) t367 ON t1.x = t367.x JOIN (SELECT 1 AS x) t368 ON t1.x = t368.x JOIN (SELECT 1 AS x) t369 ON t1.x = t369.x JOIN (SELECT 1 AS x) t370 ON t1.x = t370.x JOIN (SELECT 1 AS x) t371 ON t1.x = t371.x JOIN (SELECT 1 AS x) t372 ON t1.x = t372.x JOIN (SELECT 1 AS x) t373 ON t1.x = t373.x JOIN (SELECT 1 AS x) t374 ON t1.x = t374.x JOIN (SELECT 1 AS x) t375 ON t1.x = t375.x JOIN (SELECT 1 AS x) t376 ON t1.x = t376.x JOIN (SELECT 1 AS x) t377 ON t1.x = t377.x JOIN (SELECT 1 AS x) t378 ON t1.x = t378.x JOIN (SELECT 1 AS x) t379 ON t1.x = t379.x JOIN (SELECT 1 AS x) t380 ON t1.x = t380.x JOIN (SELECT 1 AS x) t381 ON t1.x = t381.x JOIN (SELECT 1 AS x) t382 ON t1.x = t382.x JOIN (SELECT 1 AS x) t383 ON t1.x = t383.x JOIN (SELECT 1 AS x) t384 ON t1.x = t384.x JOIN (SELECT 1 AS x) t385 ON t1.x = t385.x JOIN (SELECT 1 AS x) t386 ON t1.x = t386.x JOIN (SELECT 1 AS x) t387 ON t1.x = t387.x JOIN (SELECT 1 AS x) t388 ON t1.x = t388.x JOIN (SELECT 1 AS x) t389 ON t1.x = t389.x JOIN (SELECT 1 AS x) t390 ON t1.x = t390.x JOIN (SELECT 1 AS x) t391 ON t1.x = t391.x JOIN (SELECT 1 AS x) t392 ON t1.x = t392.x JOIN (SELECT 1 AS x) t393 ON t1.x = t393.x JOIN (SELECT 1 AS x) t394 ON t1.x = t394.x JOIN (SELECT 1 AS x) t395 ON t1.x = t395.x JOIN (SELECT 1 AS x) t396 ON t1.x = t396.x JOIN (SELECT 1 AS x) t397 ON t1.x = t397.x JOIN (SELECT 1 AS x) t398 ON t1.x = t398.x JOIN (SELECT 1 AS x) t399 ON t1.x = t399.x JOIN (SELECT 1 AS x) t400 ON t1.x = t400.x JOIN (SELECT 1 AS x) t401 ON t1.x = t401.x JOIN (SELECT 1 AS x) t402 ON t1.x = t402.x JOIN (SELECT 1 AS x) t403 ON t1.x = t403.x JOIN (SELECT 1 AS x) t404 ON t1.x = t404.x JOIN (SELECT 1 AS x) t405 ON t1.x = t405.x JOIN (SELECT 1 AS x) t406 ON t1.x = t406.x JOIN (SELECT 1 AS x) t407 ON t1.x = t407.x JOIN (SELECT 1 AS x) t408 ON t1.x = t408.x JOIN (SELECT 1 AS x) t409 ON t1.x = t409.x JOIN (SELECT 1 AS x) t410 ON t1.x = t410.x JOIN (SELECT 1 AS x) t411 ON t1.x = t411.x JOIN (SELECT 1 AS x) t412 ON t1.x = t412.x JOIN (SELECT 1 AS x) t413 ON t1.x = t413.x JOIN (SELECT 1 AS x) t414 ON t1.x = t414.x JOIN (SELECT 1 AS x) t415 ON t1.x = t415.x JOIN (SELECT 1 AS x) t416 ON t1.x = t416.x JOIN (SELECT 1 AS x) t417 ON t1.x = t417.x JOIN (SELECT 1 AS x) t418 ON t1.x = t418.x JOIN (SELECT 1 AS x) t419 ON t1.x = t419.x JOIN (SELECT 1 AS x) t420 ON t1.x = t420.x JOIN (SELECT 1 AS x) t421 ON t1.x = t421.x JOIN (SELECT 1 AS x) t422 ON t1.x = t422.x JOIN (SELECT 1 AS x) t423 ON t1.x = t423.x JOIN (SELECT 1 AS x) t424 ON t1.x = t424.x JOIN (SELECT 1 AS x) t425 ON t1.x = t425.x JOIN (SELECT 1 AS x) t426 ON t1.x = t426.x JOIN (SELECT 1 AS x) t427 ON t1.x = t427.x JOIN (SELECT 1 AS x) t428 ON t1.x = t428.x JOIN (SELECT 1 AS x) t429 ON t1.x = t429.x JOIN (SELECT 1 AS x) t430 ON t1.x = t430.x JOIN (SELECT 1 AS x) t431 ON t1.x = t431.x JOIN (SELECT 1 AS x) t432 ON t1.x = t432.x JOIN (SELECT 1 AS x) t433 ON t1.x = t433.x JOIN (SELECT 1 AS x) t434 ON t1.x = t434.x JOIN (SELECT 1 AS x) t435 ON t1.x = t435.x JOIN (SELECT 1 AS x) t436 ON t1.x = t436.x JOIN (SELECT 1 AS x) t437 ON t1.x = t437.x JOIN (SELECT 1 AS x) t438 ON t1.x = t438.x JOIN (SELECT 1 AS x) t439 ON t1.x = t439.x JOIN (SELECT 1 AS x) t440 ON t1.x = t440.x JOIN (SELECT 1 AS x) t441 ON t1.x = t441.x JOIN (SELECT 1 AS x) t442 ON t1.x = t442.x JOIN (SELECT 1 AS x) t443 ON t1.x = t443.x JOIN (SELECT 1 AS x) t444 ON t1.x = t444.x JOIN (SELECT 1 AS x) t445 ON t1.x = t445.x JOIN (SELECT 1 AS x) t446 ON t1.x = t446.x JOIN (SELECT 1 AS x) t447 ON t1.x = t447.x JOIN (SELECT 1 AS x) t448 ON t1.x = t448.x JOIN (SELECT 1 AS x) t449 ON t1.x = t449.x JOIN (SELECT 1 AS x) t450 ON t1.x = t450.x JOIN (SELECT 1 AS x) t451 ON t1.x = t451.x JOIN (SELECT 1 AS x) t452 ON t1.x = t452.x JOIN (SELECT 1 AS x) t453 ON t1.x = t453.x JOIN (SELECT 1 AS x) t454 ON t1.x = t454.x JOIN (SELECT 1 AS x) t455 ON t1.x = t455.x JOIN (SELECT 1 AS x) t456 ON t1.x = t456.x JOIN (SELECT 1 AS x) t457 ON t1.x = t457.x JOIN (SELECT 1 AS x) t458 ON t1.x = t458.x JOIN (SELECT 1 AS x) t459 ON t1.x = t459.x JOIN (SELECT 1 AS x) t460 ON t1.x = t460.x JOIN (SELECT 1 AS x) t461 ON t1.x = t461.x JOIN (SELECT 1 AS x) t462 ON t1.x = t462.x JOIN (SELECT 1 AS x) t463 ON t1.x = t463.x JOIN (SELECT 1 AS x) t464 ON t1.x = t464.x JOIN (SELECT 1 AS x) t465 ON t1.x = t465.x JOIN (SELECT 1 AS x) t466 ON t1.x = t466.x JOIN (SELECT 1 AS x) t467 ON t1.x = t467.x JOIN (SELECT 1 AS x) t468 ON t1.x = t468.x JOIN (SELECT 1 AS x) t469 ON t1.x = t469.x JOIN (SELECT 1 AS x) t470 ON t1.x = t470.x JOIN (SELECT 1 AS x) t471 ON t1.x = t471.x JOIN (SELECT 1 AS x) t472 ON t1.x = t472.x JOIN (SELECT 1 AS x) t473 ON t1.x = t473.x JOIN (SELECT 1 AS x) t474 ON t1.x = t474.x JOIN (SELECT 1 AS x) t475 ON t1.x = t475.x JOIN (SELECT 1 AS x) t476 ON t1.x = t476.x JOIN (SELECT 1 AS x) t477 ON t1.x = t477.x JOIN (SELECT 1 AS x) t478 ON t1.x = t478.x JOIN (SELECT 1 AS x) t479 ON t1.x = t479.x JOIN (SELECT 1 AS x) t480 ON t1.x = t480.x JOIN (SELECT 1 AS x) t481 ON t1.x = t481.x JOIN (SELECT 1 AS x) t482 ON t1.x = t482.x JOIN (SELECT 1 AS x) t483 ON t1.x = t483.x JOIN (SELECT 1 AS x) t484 ON t1.x = t484.x JOIN (SELECT 1 AS x) t485 ON t1.x = t485.x JOIN (SELECT 1 AS x) t486 ON t1.x = t486.x JOIN (SELECT 1 AS x) t487 ON t1.x = t487.x JOIN (SELECT 1 AS x) t488 ON t1.x = t488.x JOIN (SELECT 1 AS x) t489 ON t1.x = t489.x JOIN (SELECT 1 AS x) t490 ON t1.x = t490.x JOIN (SELECT 1 AS x) t491 ON t1.x = t491.x JOIN (SELECT 1 AS x) t492 ON t1.x = t492.x JOIN (SELECT 1 AS x) t493 ON t1.x = t493.x JOIN (SELECT 1 AS x) t494 ON t1.x = t494.x JOIN (SELECT 1 AS x) t495 ON t1.x = t495.x JOIN (SELECT 1 AS x) t496 ON t1.x = t496.x JOIN (SELECT 1 AS x) t497 ON t1.x = t497.x JOIN (SELECT 1 AS x) t498 ON t1.x = t498.x JOIN (SELECT 1 AS x) t499 ON t1.x = t499.x JOIN (SELECT 1 AS x) t500 ON t1.x = t500.x JOIN (SELECT 1 AS x) t501 ON t1.x = t501.x JOIN (SELECT 1 AS x) t502 ON t1.x = t502.x JOIN (SELECT 1 AS x) t503 ON t1.x = t503.x JOIN (SELECT 1 AS x) t504 ON t1.x = t504.x JOIN (SELECT 1 AS x) t505 ON t1.x = t505.x JOIN (SELECT 1 AS x) t506 ON t1.x = t506.x JOIN (SELECT 1 AS x) t507 ON t1.x = t507.x JOIN (SELECT 1 AS x) t508 ON t1.x = t508.x JOIN (SELECT 1 AS x) t509 ON t1.x = t509.x JOIN (SELECT 1 AS x) t510 ON t1.x = t510.x JOIN (SELECT 1 AS x) t511 ON t1.x = t511.x JOIN (SELECT 1 AS x) t512 ON t1.x = t512.x JOIN (SELECT 1 AS x) t513 ON t1.x = t513.x JOIN (SELECT 1 AS x) t514 ON t1.x = t514.x JOIN (SELECT 1 AS x) t515 ON t1.x = t515.x JOIN (SELECT 1 AS x) t516 ON t1.x = t516.x JOIN (SELECT 1 AS x) t517 ON t1.x = t517.x JOIN (SELECT 1 AS x) t518 ON t1.x = t518.x JOIN (SELECT 1 AS x) t519 ON t1.x = t519.x JOIN (SELECT 1 AS x) t520 ON t1.x = t520.x JOIN (SELECT 1 AS x) t521 ON t1.x = t521.x JOIN (SELECT 1 AS x) t522 ON t1.x = t522.x JOIN (SELECT 1 AS x) t523 ON t1.x = t523.x JOIN (SELECT 1 AS x) t524 ON t1.x = t524.x JOIN (SELECT 1 AS x) t525 ON t1.x = t525.x JOIN (SELECT 1 AS x) t526 ON t1.x = t526.x JOIN (SELECT 1 AS x) t527 ON t1.x = t527.x JOIN (SELECT 1 AS x) t528 ON t1.x = t528.x JOIN (SELECT 1 AS x) t529 ON t1.x = t529.x JOIN (SELECT 1 AS x) t530 ON t1.x = t530.x JOIN (SELECT 1 AS x) t531 ON t1.x = t531.x JOIN (SELECT 1 AS x) t532 ON t1.x = t532.x JOIN (SELECT 1 AS x) t533 ON t1.x = t533.x JOIN (SELECT 1 AS x) t534 ON t1.x = t534.x JOIN (SELECT 1 AS x) t535 ON t1.x = t535.x JOIN (SELECT 1 AS x) t536 ON t1.x = t536.x JOIN (SELECT 1 AS x) t537 ON t1.x = t537.x JOIN (SELECT 1 AS x) t538 ON t1.x = t538.x JOIN (SELECT 1 AS x) t539 ON t1.x = t539.x JOIN (SELECT 1 AS x) t540 ON t1.x = t540.x JOIN (SELECT 1 AS x) t541 ON t1.x = t541.x JOIN (SELECT 1 AS x) t542 ON t1.x = t542.x JOIN (SELECT 1 AS x) t543 ON t1.x = t543.x JOIN (SELECT 1 AS x) t544 ON t1.x = t544.x JOIN (SELECT 1 AS x) t545 ON t1.x = t545.x JOIN (SELECT 1 AS x) t546 ON t1.x = t546.x JOIN (SELECT 1 AS x) t547 ON t1.x = t547.x JOIN (SELECT 1 AS x) t548 ON t1.x = t548.x JOIN (SELECT 1 AS x) t549 ON t1.x = t549.x JOIN (SELECT 1 AS x) t550 ON t1.x = t550.x JOIN (SELECT 1 AS x) t551 ON t1.x = t551.x JOIN (SELECT 1 AS x) t552 ON t1.x = t552.x JOIN (SELECT 1 AS x) t553 ON t1.x = t553.x JOIN (SELECT 1 AS x) t554 ON t1.x = t554.x JOIN (SELECT 1 AS x) t555 ON t1.x = t555.x JOIN (SELECT 1 AS x) t556 ON t1.x = t556.x JOIN (SELECT 1 AS x) t557 ON t1.x = t557.x JOIN (SELECT 1 AS x) t558 ON t1.x = t558.x JOIN (SELECT 1 AS x) t559 ON t1.x = t559.x JOIN (SELECT 1 AS x) t560 ON t1.x = t560.x JOIN (SELECT 1 AS x) t561 ON t1.x = t561.x JOIN (SELECT 1 AS x) t562 ON t1.x = t562.x JOIN (SELECT 1 AS x) t563 ON t1.x = t563.x JOIN (SELECT 1 AS x) t564 ON t1.x = t564.x JOIN (SELECT 1 AS x) t565 ON t1.x = t565.x JOIN (SELECT 1 AS x) t566 ON t1.x = t566.x JOIN (SELECT 1 AS x) t567 ON t1.x = t567.x JOIN (SELECT 1 AS x) t568 ON t1.x = t568.x JOIN (SELECT 1 AS x) t569 ON t1.x = t569.x JOIN (SELECT 1 AS x) t570 ON t1.x = t570.x JOIN (SELECT 1 AS x) t571 ON t1.x = t571.x JOIN (SELECT 1 AS x) t572 ON t1.x = t572.x JOIN (SELECT 1 AS x) t573 ON t1.x = t573.x JOIN (SELECT 1 AS x) t574 ON t1.x = t574.x JOIN (SELECT 1 AS x) t575 ON t1.x = t575.x JOIN (SELECT 1 AS x) t576 ON t1.x = t576.x JOIN (SELECT 1 AS x) t577 ON t1.x = t577.x JOIN (SELECT 1 AS x) t578 ON t1.x = t578.x JOIN (SELECT 1 AS x) t579 ON t1.x = t579.x JOIN (SELECT 1 AS x) t580 ON t1.x = t580.x JOIN (SELECT 1 AS x) t581 ON t1.x = t581.x JOIN (SELECT 1 AS x) t582 ON t1.x = t582.x JOIN (SELECT 1 AS x) t583 ON t1.x = t583.x JOIN (SELECT 1 AS x) t584 ON t1.x = t584.x JOIN (SELECT 1 AS x) t585 ON t1.x = t585.x JOIN (SELECT 1 AS x) t586 ON t1.x = t586.x JOIN (SELECT 1 AS x) t587 ON t1.x = t587.x JOIN (SELECT 1 AS x) t588 ON t1.x = t588.x JOIN (SELECT 1 AS x) t589 ON t1.x = t589.x JOIN (SELECT 1 AS x) t590 ON t1.x = t590.x JOIN (SELECT 1 AS x) t591 ON t1.x = t591.x JOIN (SELECT 1 AS x) t592 ON t1.x = t592.x JOIN (SELECT 1 AS x) t593 ON t1.x = t593.x JOIN (SELECT 1 AS x) t594 ON t1.x = t594.x JOIN (SELECT 1 AS x) t595 ON t1.x = t595.x JOIN (SELECT 1 AS x) t596 ON t1.x = t596.x JOIN (SELECT 1 AS x) t597 ON t1.x = t597.x JOIN (SELECT 1 AS x) t598 ON t1.x = t598.x JOIN (SELECT 1 AS x) t599 ON t1.x = t599.x JOIN (SELECT 1 AS x) t600 ON t1.x = t600.x JOIN (SELECT 1 AS x) t601 ON t1.x = t601.x JOIN (SELECT 1 AS x) t602 ON t1.x = t602.x JOIN (SELECT 1 AS x) t603 ON t1.x = t603.x JOIN (SELECT 1 AS x) t604 ON t1.x = t604.x JOIN (SELECT 1 AS x) t605 ON t1.x = t605.x JOIN (SELECT 1 AS x) t606 ON t1.x = t606.x JOIN (SELECT 1 AS x) t607 ON t1.x = t607.x JOIN (SELECT 1 AS x) t608 ON t1.x = t608.x JOIN (SELECT 1 AS x) t609 ON t1.x = t609.x JOIN (SELECT 1 AS x) t610 ON t1.x = t610.x JOIN (SELECT 1 AS x) t611 ON t1.x = t611.x JOIN (SELECT 1 AS x) t612 ON t1.x = t612.x JOIN (SELECT 1 AS x) t613 ON t1.x = t613.x JOIN (SELECT 1 AS x) t614 ON t1.x = t614.x JOIN (SELECT 1 AS x) t615 ON t1.x = t615.x JOIN (SELECT 1 AS x) t616 ON t1.x = t616.x JOIN (SELECT 1 AS x) t617 ON t1.x = t617.x JOIN (SELECT 1 AS x) t618 ON t1.x = t618.x JOIN (SELECT 1 AS x) t619 ON t1.x = t619.x JOIN (SELECT 1 AS x) t620 ON t1.x = t620.x JOIN (SELECT 1 AS x) t621 ON t1.x = t621.x JOIN (SELECT 1 AS x) t622 ON t1.x = t622.x JOIN (SELECT 1 AS x) t623 ON t1.x = t623.x JOIN (SELECT 1 AS x) t624 ON t1.x = t624.x JOIN (SELECT 1 AS x) t625 ON t1.x = t625.x JOIN (SELECT 1 AS x) t626 ON t1.x = t626.x JOIN (SELECT 1 AS x) t627 ON t1.x = t627.x JOIN (SELECT 1 AS x) t628 ON t1.x = t628.x JOIN (SELECT 1 AS x) t629 ON t1.x = t629.x JOIN (SELECT 1 AS x) t630 ON t1.x = t630.x JOIN (SELECT 1 AS x) t631 ON t1.x = t631.x JOIN (SELECT 1 AS x) t632 ON t1.x = t632.x JOIN (SELECT 1 AS x) t633 ON t1.x = t633.x JOIN (SELECT 1 AS x) t634 ON t1.x = t634.x JOIN (SELECT 1 AS x) t635 ON t1.x = t635.x JOIN (SELECT 1 AS x) t636 ON t1.x = t636.x JOIN (SELECT 1 AS x) t637 ON t1.x = t637.x JOIN (SELECT 1 AS x) t638 ON t1.x = t638.x JOIN (SELECT 1 AS x) t639 ON t1.x = t639.x JOIN (SELECT 1 AS x) t640 ON t1.x = t640.x JOIN (SELECT 1 AS x) t641 ON t1.x = t641.x JOIN (SELECT 1 AS x) t642 ON t1.x = t642.x JOIN (SELECT 1 AS x) t643 ON t1.x = t643.x JOIN (SELECT 1 AS x) t644 ON t1.x = t644.x JOIN (SELECT 1 AS x) t645 ON t1.x = t645.x JOIN (SELECT 1 AS x) t646 ON t1.x = t646.x JOIN (SELECT 1 AS x) t647 ON t1.x = t647.x JOIN (SELECT 1 AS x) t648 ON t1.x = t648.x JOIN (SELECT 1 AS x) t649 ON t1.x = t649.x JOIN (SELECT 1 AS x) t650 ON t1.x = t650.x JOIN (SELECT 1 AS x) t651 ON t1.x = t651.x JOIN (SELECT 1 AS x) t652 ON t1.x = t652.x JOIN (SELECT 1 AS x) t653 ON t1.x = t653.x JOIN (SELECT 1 AS x) t654 ON t1.x = t654.x JOIN (SELECT 1 AS x) t655 ON t1.x = t655.x JOIN (SELECT 1 AS x) t656 ON t1.x = t656.x JOIN (SELECT 1 AS x) t657 ON t1.x = t657.x JOIN (SELECT 1 AS x) t658 ON t1.x = t658.x JOIN (SELECT 1 AS x) t659 ON t1.x = t659.x JOIN (SELECT 1 AS x) t660 ON t1.x = t660.x JOIN (SELECT 1 AS x) t661 ON t1.x = t661.x JOIN (SELECT 1 AS x) t662 ON t1.x = t662.x JOIN (SELECT 1 AS x) t663 ON t1.x = t663.x JOIN (SELECT 1 AS x) t664 ON t1.x = t664.x JOIN (SELECT 1 AS x) t665 ON t1.x = t665.x JOIN (SELECT 1 AS x) t666 ON t1.x = t666.x
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 136', () => {
    const query = `set max_threads = 16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 137', () => {
    const query = `set use_hedged_requests = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 138', () => {
    const query = `set max_parallel_replicas = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 139', () => {
    const query = `set cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 140', () => {
    const query = `set allow_experimental_parallel_reading_from_replicas = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 141', () => {
    const query = `set parallel_replicas_for_non_replicated_merge_tree = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 142', () => {
    const query = `set allow_aggregate_partitions_independently = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 143', () => {
    const query = `SET joined_subquery_requires_alias=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 144', () => {
    const query = `SET joined_subquery_requires_alias=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 145', () => {
    const query = `set prefer_column_name_to_alias = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 146', () => {
    const query = `set enable_named_columns_in_function_tuple = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 147', () => {
    const query = `SET optimize_trivial_insert_select = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 148', () => {
    const query = `SET schema_inference_mode = 'union';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 149', () => {
    const query = `SET optimize_move_to_prewhere = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 150', () => {
    const query = `SET query_plan_convert_outer_join_to_inner_join = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 151', () => {
    const query = `set min_bytes_to_use_direct_io = 0; -- min_bytes_to_use_direct_io > 0 is broken drop table if exists test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 152', () => {
    const query = `SET enable_global_with_statement=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 153', () => {
    const query = `SET session_timezone = 'Etc/UTC';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 154', () => {
    const query = `set max_insert_threads=4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 155', () => {
    const query = `set merge_tree_min_bytes_for_concurrent_read=1, merge_tree_min_rows_for_concurrent_read=1, merge_tree_read_split_ranges_into_intersecting_and_non_intersecting_injection_probability=1.0, max_threads=4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 156', () => {
    const query = `set cast_string_to_dynamic_use_inference=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 157', () => {
    const query = `set allow_suspicious_variant_types=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 158', () => {
    const query = `SET max_block_size = 65409; -- Default value SELECT 'TESTING MODIFY SMALLER BYTES';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 159', () => {
    const query = `set input_format_json_throw_on_bad_escape_sequence=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 160', () => {
    const query = `SET allow_suspicious_low_cardinality_types = true, enable_analyzer = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 161', () => {
    const query = `SET custom_f1 = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 162', () => {
    const query = `SET custom_f2 = False;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 163', () => {
    const query = `SET custom_f3 = FALSE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 164', () => {
    const query = `SET custom_n0 = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 165', () => {
    const query = `SET custom_n1 = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 166', () => {
    const query = `SET custom_t1 = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 167', () => {
    const query = `SET custom_t2 = True;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 168', () => {
    const query = `SET custom_t3 = TRUE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 169', () => {
    const query = `SET async_insert = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 170', () => {
    const query = `SET async_insert = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 171', () => {
    const query = `SET async_insert = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 172', () => {
    const query = `SET max_rows_to_read = 1e11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 173', () => {
    const query = `set enable_analyzer = 1, group_by_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 174', () => {
    const query = `set group_by_use_nulls=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 175', () => {
    const query = `set optimize_group_by_function_keys=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 176', () => {
    const query = `SET output_format_pretty_row_numbers = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 177', () => {
    const query = `SET allow_experimental_alter_materialized_view_structure = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 178', () => {
    const query = `set allow_suspicious_primary_key = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 179', () => {
    const query = `SET allow_experimental_window_view = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 180', () => {
    const query = `set enable_analyzer=1, group_by_use_nulls=1, optimize_injective_functions_in_group_by=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 181', () => {
    const query = `SET async_insert_deduplicate = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 182', () => {
    const query = `set group_by_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 183', () => {
    const query = `set optimize_group_by_function_keys = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 184', () => {
    const query = `set optimize_injective_functions_in_group_by = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 185', () => {
    const query = `SET session_timezone = 'Europe/Amsterdam';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 186', () => {
    const query = `SET cast_keep_nullable = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 187', () => {
    const query = `SET cast_keep_nullable = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 188', () => {
    const query = `SET optimize_rewrite_sum_if_to_count_if = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 189', () => {
    const query = `SET enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 190', () => {
    const query = `SET max_block_size = 65409; -- Default value DROP TABLE IF EXISTS memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 191', () => {
    const query = `SET group_by_two_level_threshold_bytes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 192', () => {
    const query = `SET group_by_two_level_threshold = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 193', () => {
    const query = `SET max_bytes_before_external_group_by = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 194', () => {
    const query = `SET optimize_aggregation_in_order = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 195', () => {
    const query = `SET max_block_size = 1024;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 196', () => {
    const query = `SET optimize_use_projections = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 197', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 198', () => {
    const query = `SET max_parallel_replicas=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 199', () => {
    const query = `SET parallel_replicas_for_non_replicated_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 200', () => {
    const query = `SET cluster_for_parallel_replicas='parallel_replicas';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 201', () => {
    const query = `SET deduplicate_blocks_in_dependent_materialized_views = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 202', () => {
    const query = `SET deduplicate_blocks_in_dependent_materialized_views=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 203', () => {
    const query = `SET max_block_size=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 204', () => {
    const query = `SET min_insert_block_size_rows=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 205', () => {
    const query = `SET min_insert_block_size_bytes=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 206', () => {
    const query = `SET max_block_size = 1048576, max_threads = 1, allow_experimental_parallel_reading_from_replicas = 1, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3, parallel_replicas_min_number_of_rows_per_replica=10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 207', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 1, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3, parallel_replicas_min_number_of_rows_per_replica=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 208', () => {
    const query = `set input_format_json_use_string_type_for_ambiguous_paths_in_named_tuples_inference_from_objects=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 209', () => {
    const query = `SET optimize_on_insert = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 210', () => {
    const query = `SET max_threads = 16, receive_timeout = 10., receive_data_timeout_ms = 10000, allow_suspicious_low_cardinality_types = true, enable_positional_arguments = false, log_queries = true, table_function_remote_max_addresses = 200, any_join_distinct_right_table_keys = true, joined_subquery_requires_alias = false, enable_analyzer = true, max_execution_time = 10., max_memory_usage = 10000000000, log_comment = '/workspace/ch/tests/queries/0_stateless/01710_projection_in_index.sql', send_logs_level = 'fatal', enable_optimize_predicate_expression = false, prefer_localhost_replica = true, allow_introspection_functions = true, optimize_functions_to_subcolumns = false, transform_null_in = true, optimize_use_projections = true, allow_deprecated_syntax_for_merge_tree = true, parallelize_output_from_storages = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 211', () => {
    const query = `SET optimize_throw_if_noop = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 212', () => {
    const query = `SET session_timezone='Europe/Madrid'; -- disable time zone randomization in CI SELECT if(length(x) = 26, ULIDStringToDateTime(x, 'Europe/Madrid'), toDateTime('2024-02-21 12:00:00', 'Europe/Madrid')) AS datetime
FROM values('x String', '01HQ3KJJKHRWP357YVYBX32WHY', '01HQ3KJJKH')
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 213', () => {
    const query = `set max_execution_time=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 214', () => {
    const query = `SET optimize_time_filter_with_preimage=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 215', () => {
    const query = `SET output_format_pretty_single_large_number_tip_threshold=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 216', () => {
    const query = `SET format_display_secrets_in_show_and_select = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 217', () => {
    const query = `SET max_block_size = 1, min_insert_block_size_rows = 0, min_insert_block_size_bytes = 0, max_threads=100, max_insert_threads=100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 218', () => {
    const query = `SET send_logs_level = 'error';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 219', () => {
    const query = `SET max_block_size = 9223372036854775806;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 220', () => {
    const query = `set output_format_values_escape_quote_with_quote=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 221', () => {
    const query = `SET max_memory_usage = '50M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 222', () => {
    const query = `SET max_memory_usage = '200M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 223', () => {
    const query = `SET max_threads = -1; -- { serverError CANNOT_CONVERT_TYPE } `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 224', () => {
    const query = `SET send_logs_level='fatal';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 225', () => {
    const query = `SET analyzer_compatibility_join_using_top_level_identifier = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 226', () => {
    const query = `SET send_logs_level = 'fatal';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 227', () => {
    const query = `SET allow_deprecated_database_ordinary = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 228', () => {
    const query = `SET merge_tree_read_split_ranges_into_intersecting_and_non_intersecting_injection_probability = 0.0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 229', () => {
    const query = `SET force_data_skipping_indices = 'idx_v';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 230', () => {
    const query = `SET use_skip_indexes_if_final = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 231', () => {
    const query = `SET dialect = 'kusto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 232', () => {
    const query = `SET dialect = 'prql';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 233', () => {
    const query = `SET dialect = 'clickhouse';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 234', () => {
    const query = `SET max_block_size=10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 235', () => {
    const query = `SET distributed_foreground_insert=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 236', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=2, max_parallel_replicas=2, cluster_for_parallel_replicas='test_cluster_two_shards', parallel_replicas_for_non_replicated_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 237', () => {
    const query = `set allow_suspicious_low_cardinality_types=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 238', () => {
    const query = `set allow_suspicious_fixed_string_types=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 239', () => {
    const query = `set allow_experimental_variant_type=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 240', () => {
    const query = `SET output_format_csv_serialize_tuple_into_separate_columns = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 241', () => {
    const query = `SET input_format_csv_deserialize_separate_columns_into_tuple = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 242', () => {
    const query = `SET input_format_csv_try_infer_strings_from_quoted_tuples = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 243', () => {
    const query = `SET allow_unrestricted_reads_from_keeper = 'false';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 244', () => {
    const query = `SET allow_unrestricted_reads_from_keeper = 'true';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 245', () => {
    const query = `SET insert_keeper_fault_injection_probability=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 246', () => {
    const query = `SET session_timezone='Europe/Amsterdam';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 247', () => {
    const query = `SET insert_deduplicate = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 248', () => {
    const query = `SET update_insert_deduplication_token_in_dependent_materialized_views = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 249', () => {
    const query = `SET insert_deduplication_token = 'test';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 250', () => {
    const query = `SET max_bytes_in_join = 0, join_algorithm = 'full_sorting_merge', max_block_size = 10240;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 251', () => {
    const query = `SET async_insert_use_adaptive_busy_timeout = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 252', () => {
    const query = `SET allow_suspicious_low_cardinality_types = 1, join_algorithm = 'partial_merge', join_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 253', () => {
    const query = `SET join_algorithm = 'parallel_hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 254', () => {
    const query = `set count_distinct_optimization = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 255', () => {
    const query = `set input_format_json_read_bools_as_strings=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 256', () => {
    const query = `set allow_suspicious_low_cardinality_types = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 257', () => {
    const query = `set param_part='all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 258', () => {
    const query = `set param_part='all_2_2_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 259', () => {
    const query = `set param_part='all_3_3_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 260', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 1, max_parallel_replicas = 2, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', prefer_localhost_replica = 0, parallel_replicas_for_non_replicated_merge_tree = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 261', () => {
    const query = `SET max_parallel_replicas=3, cluster_for_parallel_replicas='test_cluster_one_shard_three_replicas_localhost', parallel_replicas_for_non_replicated_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 262', () => {
    const query = `SET print_pretty_type_names = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 263', () => {
    const query = `SET describe_compact_output = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 264', () => {
    const query = `set allow_suspicious_variant_types = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 265', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=2, max_parallel_replicas=3, parallel_replicas_for_non_replicated_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 266', () => {
    const query = `SET cluster_for_parallel_replicas='';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 267', () => {
    const query = `SET use_hedged_requests=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 268', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 269', () => {
    const query = `SET allow_experimental_object_type = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 270', () => {
    const query = `SET max_threads = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 271', () => {
    const query = `set ignore_materialized_views_with_dropped_target_table = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 272', () => {
    const query = `SET enable_positional_arguments=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 273', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=1,
max_parallel_replicas=2,
use_hedged_requests=0,
cluster_for_parallel_replicas='test_cluster_one_shard_three_replicas_localhost',
parallel_replicas_for_non_replicated_merge_tree=1
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 274', () => {
    const query = `SET alter_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 275', () => {
    const query = `SET send_logs_level='error';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 276', () => {
    const query = `SET use_hedged_requests=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 277', () => {
    const query = `SET send_logs_level='warning';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 278', () => {
    const query = `SET joined_subquery_requires_alias = 0, join_algorithm = 'partial_merge';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 279', () => {
    const query = `SET enable_analyzer = 0, join_use_nulls = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 280', () => {
    const query = `SET enable_analyzer = 0, join_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 281', () => {
    const query = `SET enable_analyzer = 1, join_use_nulls = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 282', () => {
    const query = `SET enable_analyzer = 1, join_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 283', () => {
    const query = `set max_execution_time = 0.5, timeout_overflow_mode = 'break', max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 284', () => {
    const query = `set input_format_csv_try_infer_numbers_from_strings=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 285', () => {
    const query = `SET flatten_nested = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 286', () => {
    const query = `SET flatten_nested = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 287', () => {
    const query = `SET max_rows_to_group_by = 3000, group_by_overflow_mode = 'any';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 288', () => {
    const query = `SET aggregate_functions_null_for_empty = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 289', () => {
    const query = `SET deduplicate_blocks_in_dependent_materialized_views = 0, max_insert_delayed_streams_for_parallel_write = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 290', () => {
    const query = `SET max_columns_to_read = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 291', () => {
    const query = `SET optimize_read_in_order = 1, query_plan_read_in_order = 1, enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 292', () => {
    const query = `SET local_filesystem_read_prefetch=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 293', () => {
    const query = `SET allow_prefetched_read_pool_for_remote_filesystem=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 294', () => {
    const query = `SET allow_prefetched_read_pool_for_local_filesystem=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 295', () => {
    const query = `SET session_timezone = 'Europe/Amsterdam'; -- disable time zone randomization in CI SELECT '-- negative tests';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 296', () => {
    const query = `SET max_rows_in_set_to_optimize_join = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 297', () => {
    const query = `set log_query_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 298', () => {
    const query = `set log_queries_min_type='QUERY_FINISH';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 299', () => {
    const query = `set log_queries=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 300', () => {
    const query = `set log_queries=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 301', () => {
    const query = `set log_query_threads=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 302', () => {
    const query = `SET allow_deprecated_error_prone_window_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 303', () => {
    const query = `set precise_float_parsing = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 304', () => {
    const query = `SET date_time_overflow_behavior = 'ignore';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 305', () => {
    const query = `SET date_time_overflow_behavior = 'throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 306', () => {
    const query = `SET date_time_overflow_behavior = 'saturate';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 307', () => {
    const query = `SET param_partition='2023-10-09';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 308', () => {
    const query = `SET param_first='2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 309', () => {
    const query = `SET param_second='4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 310', () => {
    const query = `SET param_simple='1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 311', () => {
    const query = `SET param_f='1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 312', () => {
    const query = `SET param_s='2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 313', () => {
    const query = `SET param_tuple=(1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 314', () => {
    const query = `SET max_rows_to_read = 0, max_execution_time = 0, max_estimated_execution_time = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 315', () => {
    const query = `SET input_format_values_interpret_expressions = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 316', () => {
    const query = `SET max_ast_depth = 10_000_000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 317', () => {
    const query = `SET optimize_trivial_approximate_count_query = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 318', () => {
    const query = `set output_format_orc_string_as_string = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 319', () => {
    const query = `set output_format_orc_row_index_stride = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 320', () => {
    const query = `set input_format_orc_row_batch_size = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 321', () => {
    const query = `set input_format_null_as_default = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 322', () => {
    const query = `set optimize_or_like_chain = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 323', () => {
    const query = `set max_block_size = 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 324', () => {
    const query = `set max_insert_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 325', () => {
    const query = `set enable_named_columns_in_function_tuple = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 326', () => {
    const query = `SET describe_compact_output = 0, describe_include_virtual_columns = 0, describe_include_subcolumns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 327', () => {
    const query = `SET describe_compact_output = 0, describe_include_virtual_columns = 0, describe_include_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 328', () => {
    const query = `SET describe_compact_output = 0, describe_include_virtual_columns = 1, describe_include_subcolumns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 329', () => {
    const query = `SET describe_compact_output = 0, describe_include_virtual_columns = 1, describe_include_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 330', () => {
    const query = `SET describe_compact_output = 1, describe_include_virtual_columns = 0, describe_include_subcolumns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 331', () => {
    const query = `SET describe_compact_output = 1, describe_include_virtual_columns = 0, describe_include_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 332', () => {
    const query = `SET describe_compact_output = 1, describe_include_virtual_columns = 1, describe_include_subcolumns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 333', () => {
    const query = `SET describe_compact_output = 1, describe_include_virtual_columns = 1, describe_include_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 334', () => {
    const query = `set print_pretty_type_names=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 335', () => {
    const query = `SET insert_keeper_max_retries = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 336', () => {
    const query = `SET insert_quorum = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 337', () => {
    const query = `SET max_rows_to_read = 40000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 338', () => {
    const query = `SET async_insert_use_adaptive_busy_timeout=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 339', () => {
    const query = `SET async_insert_busy_timeout_max_ms = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 340', () => {
    const query = `SET insert_deduplication_token = '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 341', () => {
    const query = `SET log_comment = 'async_insert_skip_settings_1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 342', () => {
    const query = `SET insert_deduplication_token = '2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 343', () => {
    const query = `SET log_comment = 'async_insert_skip_settings_2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 344', () => {
    const query = `SET log_comment = 'async_insert_skip_settings_3';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 345', () => {
    const query = `SET insert_deduplication_token = '3';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 346', () => {
    const query = `SET log_comment = 'async_insert_skip_settings_4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 347', () => {
    const query = `SET session_timezone = 'UTC'; -- no time zone randomization, please SELECT '--- YYYYMMDDToDateTime';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 348', () => {
    const query = `set input_format_json_infer_incomplete_types_as_strings=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 349', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=1, max_parallel_replicas=3, parallel_replicas_for_non_replicated_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 350', () => {
    const query = `set input_format_json_read_arrays_as_strings = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 351', () => {
    const query = `SET session_timezone = 'Europe/Amsterdam'; -- disable time zone randomization in CI SELECT 'Invalid parameters';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 352', () => {
    const query = `set input_format_json_try_infer_named_tuples_from_objects = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 353', () => {
    const query = `set optimize_uniq_to_count=true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 354', () => {
    const query = `SET optimize_move_to_prewhere = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 355', () => {
    const query = `SET convert_query_to_cnf = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 356', () => {
    const query = `SET enable_analyzer = 1; -- slightly different operator names than w/o DROP TABLE IF EXISTS test_skip_idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 357', () => {
    const query = `set max_block_size = 10, enable_unaligned_array_join = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 358', () => {
    const query = `set max_block_size = 1000, enable_unaligned_array_join = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 359', () => {
    const query = `set max_block_size = 100000, enable_unaligned_array_join = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 360', () => {
    const query = `SET allow_experimental_statistics = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 361', () => {
    const query = `SET allow_statistics_optimize = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 362', () => {
    const query = `SET mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 363', () => {
    const query = `SET materialize_statistics_on_insert = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 364', () => {
    const query = `SET allow_experimental_statistics = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 365', () => {
    const query = `set mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 366', () => {
    const query = `set optimize_distinct_in_order=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 367', () => {
    const query = `set max_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 368', () => {
    const query = `SET join_algorithm = 'grace_hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 369', () => {
    const query = `SET move_all_conditions_to_prewhere = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 370', () => {
    const query = `set engine_file_allow_create_multiple_files = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 371', () => {
    const query = `SET timeout_overflow_mode='break';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 372', () => {
    const query = `SET max_execution_time=0.1, max_rows_to_read=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 373', () => {
    const query = `SET mutations_execute_subqueries_on_initiator = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 374', () => {
    const query = `SET mutations_execute_nondeterministic_on_initiator = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 375', () => {
    const query = `SET enable_multiple_prewhere_read_steps = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 376', () => {
    const query = `set output_format_parquet_row_group_size = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 377', () => {
    const query = `set max_threads=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 378', () => {
    const query = `SET join_algorithm = 'full_sorting_merge', max_rows_in_set_to_optimize_join = 100_000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 379', () => {
    const query = `set join_algorithm='grace_hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 380', () => {
    const query = `set format_custom_escaping_rule='CSV', format_custom_field_delimiter='<field_delimiter>', format_custom_row_before_delimiter='<row_before_delimiter>', format_custom_row_after_delimiter='<row_after_delimiter>', format_custom_row_between_delimiter='<row_between_delimiter>', format_custom_result_before_delimiter='<result_before_delimiter>', format_custom_result_after_delimiter='<result_after_delimiter>';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 381', () => {
    const query = `SET optimize_trivial_insert_select=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 382', () => {
    const query = `SET input_format_values_interpret_expressions=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 383', () => {
    const query = `SET join_algorithm = 'direct, hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 384', () => {
    const query = `SET join_algorithm = 'hash, direct';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 385', () => {
    const query = `SET join_algorithm = 'grace_hash,hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 386', () => {
    const query = `SET join_algorithm = 'grace_hash, hash, auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 387', () => {
    const query = `SET join_algorithm = 'default';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 388', () => {
    const query = `SET join_algorithm = 'direct,hash';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 389', () => {
    const query = `SET join_algorithm = 'hash,direct';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 390', () => {
    const query = `set optimize_move_functions_out_of_any = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 391', () => {
    const query = `set optimize_aggregators_of_group_by_keys = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 392', () => {
    const query = `set optimize_aggregators_of_group_by_keys = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 393', () => {
    const query = `SET allow_create_index_without_type=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 394', () => {
    const query = `SET create_index_ignore_unique=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 395', () => {
    const query = `SET allow_create_index_without_type=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 396', () => {
    const query = `SET max_block_size = 10, max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 397', () => {
    const query = `SET default_table_engine='MergeTree';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 398', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=1,
max_parallel_replicas=3,
cluster_for_parallel_replicas='parallel_replicas',
parallel_replicas_for_non_replicated_merge_tree=1,
parallel_replicas_min_number_of_rows_per_replica=1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 399', () => {
    const query = `set query_plan_remove_redundant_distinct=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 400', () => {
    const query = `SET transform_null_in = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 401', () => {
    const query = `SET optimize_move_to_prewhere=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 402', () => {
    const query = `SET output_format_pretty_color=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 403', () => {
    const query = `SET read_in_order_two_level_merge_threshold=1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 404', () => {
    const query = `set max_block_size=4294967296;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 405', () => {
    const query = `set max_memory_usage = '420Mi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 406', () => {
    const query = `SET calculate_text_stack_trace = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 407', () => {
    const query = `SET do_not_merge_across_partitions_select_final=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 408', () => {
    const query = `SET max_threads = 1, parallelize_output_from_storages = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 409', () => {
    const query = `SET optimize_sorting_by_input_stream_properties = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 410', () => {
    const query = `set max_columns_to_read=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 411', () => {
    const query = `set read_in_order_two_level_merge_threshold=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 412', () => {
    const query = `SET move_all_conditions_to_prewhere=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 413', () => {
    const query = `set input_format_max_rows_to_read_for_schema_inference=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 414', () => {
    const query = `set input_format_json_infer_incomplete_types_as_strings=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 415', () => {
    const query = `SET compile_expressions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 416', () => {
    const query = `SET min_count_to_compile_expression = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 417', () => {
    const query = `SET parallel_replicas_local_plan = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 418', () => {
    const query = `SET compile_aggregate_expressions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 419', () => {
    const query = `SET min_count_to_compile_aggregate_expression = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 420', () => {
    const query = `SET group_by_use_nulls = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 421', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=2, max_parallel_replicas=11, cluster_for_parallel_replicas='parallel_replicas', parallel_replicas_for_non_replicated_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 422', () => {
    const query = `SET max_parallel_replicas=3, allow_experimental_parallel_reading_from_replicas=1, cluster_for_parallel_replicas='parallel_replicas';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 423', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 424', () => {
    const query = `SET parallel_replicas_for_non_replicated_merge_tree = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 425', () => {
    const query = `SET max_parallel_replicas = 3, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', allow_experimental_parallel_reading_from_replicas = 1, parallel_replicas_for_non_replicated_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 426', () => {
    const query = `SET SQL_AUTO_IS_NULL = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 427', () => {
    const query = `SET session_timezone = 'Asia/Novosibirsk';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 428', () => {
    const query = `set output_format_parquet_use_custom_encoder = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 429', () => {
    const query = `set output_format_parquet_row_group_size = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 430', () => {
    const query = `set output_format_parquet_data_page_size = 800;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 431', () => {
    const query = `set output_format_parquet_batch_size = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 432', () => {
    const query = `set output_format_parquet_row_group_size_bytes = 1000000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 433', () => {
    const query = `set engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 434', () => {
    const query = `SET short_circuit_function_evaluation = 'force_enable';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 435', () => {
    const query = `set use_with_fill_by_sorting_prefix=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 436', () => {
    const query = `SET async_insert_busy_timeout_max_ms = 10000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 437', () => {
    const query = `set parallelize_output_from_storages=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 438', () => {
    const query = `set parallelize_output_from_storages=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 439', () => {
    const query = `set compile_aggregate_expressions=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 440', () => {
    const query = `set min_count_to_compile_aggregate_expression=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 441', () => {
    const query = `SET min_bytes_to_use_direct_io='1Gi'; -- It does not work (fixme) SET local_filesystem_read_method='pread'; -- ui_uring local_fs_method does not work here (fixme)
DROP TABLE IF EXISTS test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 442', () => {
    const query = `SET keeper_map_strict_mode = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 443', () => {
    const query = `SET keeper_map_strict_mode = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 444', () => {
    const query = `SET keeper_map_strict_mode = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 445', () => {
    const query = `SET mysql_max_rows_to_insert = 123123;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 446', () => {
    const query = `set mysql_max_rows_to_insert = 65536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 447', () => {
    const query = `set insert_quorum = 123123;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 448', () => {
    const query = `set insert_quorum = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 449', () => {
    const query = `set max_alter_threads = 123123;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 450', () => {
    const query = `set max_alter_threads = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 451', () => {
    const query = `set drain_timeout = 123123;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 452', () => {
    const query = `set drain_timeout = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 453', () => {
    const query = `set format_csv_delimiter = ',';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 454', () => {
    const query = `set format_avro_schema_registry_url = 'https://github.com/ClickHouse/ClickHouse/tree/master/src/Core';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 455', () => {
    const query = `set format_avro_schema_registry_url = '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 456', () => {
    const query = `set output_format_orc_compression_method = 'none';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 457', () => {
    const query = `set output_format_orc_compression_method = 'lz4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 458', () => {
    const query = `set join_algorithm = 'auto,direct';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 459', () => {
    const query = `SET database_atomic_wait_for_drop_and_detach_synchronously = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 460', () => {
    const query = `SET param_param = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 461', () => {
    const query = `SET optimize_move_to_prewhere = 1; -- works only for PREWHERE CREATE TABLE t1 (a UInt64, b UInt64, c UInt64, d UInt64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 462', () => {
    const query = `set allow_aggregate_partitions_independently=1, force_aggregate_partitions_independently=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 463', () => {
    const query = `SET param_o = 'a';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 464', () => {
    const query = `SET limit = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 465', () => {
    const query = `SET offset = 195;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 466', () => {
    const query = `SET single_join_prefer_left_table = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 467', () => {
    const query = `set optimize_trivial_count_query=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 468', () => {
    const query = `set session_timezone = 'UTC'; -- don't randomize the session timezone select parseDateTime('2021-01-04 23:12:34') = toDateTime('2021-01-04 23:12:34');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 469', () => {
    const query = `SET optimize_min_equality_disjunction_chain_length = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 470', () => {
    const query = `SET optimize_min_inequality_conjunction_chain_length = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 471', () => {
    const query = `set mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 472', () => {
    const query = `set mutations_sync=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 473', () => {
    const query = `set input_format_parallel_parsing=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 474', () => {
    const query = `set max_threads=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 475', () => {
    const query = `set allow_asynchronous_read_from_io_pool_for_merge_tree = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 476', () => {
    const query = `set max_streams_for_merge_tree_reading = 64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 477', () => {
    const query = `set max_block_size = 65409;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 478', () => {
    const query = `set read_in_order_two_level_merge_threshold = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 479', () => {
    const query = `SET enable_positional_arguments = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 480', () => {
    const query = `SET param_old_db_name = 02661_db;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 481', () => {
    const query = `SET param_new_db_name = 02661_db1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 482', () => {
    const query = `SET param_old_tbl_name = 02661_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 483', () => {
    const query = `SET param_new_tbl_name = 02661_t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 484', () => {
    const query = `SET param_old_dict_name = 02661_d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 485', () => {
    const query = `SET param_new_dict_name = 02661_d1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 486', () => {
    const query = `set optimize_rewrite_array_exists_to_has = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 487', () => {
    const query = `set optimize_rewrite_array_exists_to_has = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 488', () => {
    const query = `set enable_analyzer = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 489', () => {
    const query = `SET optimize_syntax_fuse_functions=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 490', () => {
    const query = `set input_format_json_try_infer_named_tuples_from_objects=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 491', () => {
    const query = `set input_format_json_read_objects_as_strings=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 492', () => {
    const query = `set prefer_localhost_replica=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 493', () => {
    const query = `SET limit = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 494', () => {
    const query = `SET limit = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 495', () => {
    const query = `SET limit = 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 496', () => {
    const query = `SET offset = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 497', () => {
    const query = `SET cross_to_inner_join_rewrite = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 498', () => {
    const query = `set insert_null_as_default=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 499', () => {
    const query = `SET enable_multiple_prewhere_read_steps=1, move_all_conditions_to_prewhere=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 500', () => {
    const query = `SET enable_multiple_prewhere_read_steps=true, move_all_conditions_to_prewhere=true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 501', () => {
    const query = `SET rewrite_count_distinct_if_with_count_distinct_implementation = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 502', () => {
    const query = `SET output_format_json_named_tuples_as_objects = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 503', () => {
    const query = `SET check_referential_table_dependencies = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 504', () => {
    const query = `SET check_referential_table_dependencies = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 505', () => {
    const query = `SET distributed_ddl_output_mode='throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 506', () => {
    const query = `set allow_suspicious_codecs=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 507', () => {
    const query = `set optimize_group_by_function_keys = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 508', () => {
    const query = `set distributed_aggregation_memory_efficient = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 509', () => {
    const query = `set force_aggregate_partitions_independently = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 510', () => {
    const query = `set allow_prefetched_read_pool_for_remote_filesystem = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 511', () => {
    const query = `set allow_prefetched_read_pool_for_local_filesystem = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 512', () => {
    const query = `set optimize_aggregation_in_order = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 513', () => {
    const query = `set optimize_rewrite_aggregate_function_with_if = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 514', () => {
    const query = `set optimize_rewrite_aggregate_function_with_if = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 515', () => {
    const query = `set allow_deprecated_syntax_for_merge_tree=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 516', () => {
    const query = `SET group_by_overflow_mode = 'any', max_rows_to_group_by = 1000, totals_mode = 'after_having_auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 517', () => {
    const query = `set allow_experimental_object_type=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 518', () => {
    const query = `set compatibility='a.a'; -- { serverError BAD_ARGUMENTS } select value, changed from system.settings where name = 'compatibility'
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 519', () => {
    const query = `set input_format_json_read_objects_as_strings=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 520', () => {
    const query = `SET extract_key_value_pairs_max_pairs_per_row = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 521', () => {
    const query = `SET optimize_functions_to_subcolumns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 522', () => {
    const query = `SET optimize_arithmetic_operations_in_aggregate_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 523', () => {
    const query = `SET check_query_single_value_result = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 524', () => {
    const query = `set schema_inference_make_columns_nullable=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 525', () => {
    const query = `set input_format_json_read_numbers_as_strings=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 526', () => {
    const query = `set schema_inference_make_columns_nullable='auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 527', () => {
    const query = `set allow_suspicious_fixed_string_types=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 528', () => {
    const query = `SET optimize_if_transform_strings_to_enum = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 529', () => {
    const query = `SET max_rows_to_read = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 530', () => {
    const query = `SET function_sleep_max_microseconds_per_block = 5000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 531', () => {
    const query = `SET query_cache_max_entries = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 532', () => {
    const query = `SET query_cache_max_size_in_bytes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 533', () => {
    const query = `SET query_cache_max_size_in_bytes = DEFAULT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 534', () => {
    const query = `SET query_cache_max_entries = DEFAULT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 535', () => {
    const query = `SET query_cache_tag = 'abc';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 536', () => {
    const query = `SET query_cache_tag = 'def';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 537', () => {
    const query = `SET use_query_cache = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 538', () => {
    const query = `SET limit = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 539', () => {
    const query = `SET limit = default;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 540', () => {
    const query = `SET use_skip_indexes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 541', () => {
    const query = `SET use_skip_indexes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 542', () => {
    const query = `SET use_skip_indexes = default;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 543', () => {
    const query = `SET max_block_size = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 544', () => {
    const query = `SET max_block_size = default;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 545', () => {
    const query = `SET use_query_cache = default;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 546', () => {
    const query = `SET query_cache_system_table_handling = 'save';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 547', () => {
    const query = `SET use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 548', () => {
    const query = `set query_plan_remove_redundant_sorting=0; -- to keep reading in order select sum(x) from (select x from t order by x) settings max_threads=4, max_streams_for_merge_tree_reading=16, allow_asynchronous_read_from_io_pool_for_merge_tree=1, optimize_read_in_order=1, query_plan_read_in_order=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 549', () => {
    const query = `SET enable_analyzer = 1, optimize_injective_functions_inside_uniq = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 550', () => {
    const query = `set allow_deprecated_syntax_for_merge_tree=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 551', () => {
    const query = `set use_structure_from_insertion_table_in_table_functions=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 552', () => {
    const query = `set short_circuit_function_evaluation='force_enable';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 553', () => {
    const query = `set optimize_syntax_fuse_functions = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 554', () => {
    const query = `SET send_logs_level = 'fatal'; -- failed connection tries are ok, if it succeeded after retry. DROP TABLE IF EXISTS foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 555', () => {
    const query = `set optimize_min_equality_disjunction_chain_length=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 556', () => {
    const query = `SET optimize_syntax_fuse_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 557', () => {
    const query = `SET param_num=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 558', () => {
    const query = `SET param_str='hello';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 559', () => {
    const query = `SET param_date='2022-08-04 18:30:53';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 560', () => {
    const query = `SET param_map={'2b95a497-3a5d-49af-bf85-15763318cde7': [1.2, 3.4]};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 561', () => {
    const query = `SET param_id=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 562', () => {
    const query = `SET param_arr=[1, 2, 3];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 563', () => {
    const query = `SET param_map_2={'abc': 22, 'def': 33};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 564', () => {
    const query = `SET param_mul_arr=[[4, 5, 6], [7], [8, 9]];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 565', () => {
    const query = `SET param_map_arr={10: [11, 12], 13: [14, 15]};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 566', () => {
    const query = `SET param_map_map_arr={'ghj': {'klm': [16, 17]}, 'nop': {'rst': [18]}};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 567', () => {
    const query = `SET param_tbl=numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 568', () => {
    const query = `SET param_db=system;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 569', () => {
    const query = `SET param_col=number;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 570', () => {
    const query = `SET param_arr_arr_arr=[[['a', 'b', 'c'], ['d', 'e', 'f']], [['g', 'h', 'i'], ['j', 'k', 'l']]];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 571', () => {
    const query = `SET param_tuple_tuple_tuple=(((1, 'a', '2b95a497-3a5d-49af-bf85-15763318cde7', 3.14)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 572', () => {
    const query = `SET param_arr_map_tuple=[{1:(2, '2022-08-04 18:30:53', 's'), 3:(4, '2020-08-04 18:30:53', 't')}];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 573', () => {
    const query = `SET param_map_arr_tuple_map={'a':[(1,{10:1, 20:2}),(2, {30:3, 40:4})], 'b':[(3, {50:5, 60:6}),(4, {70:7, 80:8})]};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 574', () => {
    const query = `SET param_x = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 575', () => {
    const query = `SET max_block_size = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 576', () => {
    const query = `SET max_rows_to_read = 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 577', () => {
    const query = `SET read_overflow_mode = 'throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 578', () => {
    const query = `SET force_primary_key = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 579', () => {
    const query = `set max_rows_to_read = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 580', () => {
    const query = `set max_rows_to_read = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 581', () => {
    const query = `SET max_block_size = 1, min_insert_block_size_rows = 1, min_insert_block_size_bytes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 582', () => {
    const query = `SET max_block_size = 65000, min_insert_block_size_rows = 65000, min_insert_block_size_bytes = '1M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 583', () => {
    const query = `SET max_insert_block_size=100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 584', () => {
    const query = `SET max_insert_block_size=DEFAULT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 585', () => {
    const query = `set date_time_input_format = 'basic';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 586', () => {
    const query = `set date_time_input_format = 'best_effort';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 587', () => {
    const query = `set date_time_input_format = 'best_effort_us';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 588', () => {
    const query = `set format_json_object_each_row_column_for_object_name='name';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 589', () => {
    const query = `SET output_format_json_validate_utf8 = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 590', () => {
    const query = `SET output_format_json_validate_utf8 = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 591', () => {
    const query = `SET insert_keeper_fault_injection_probability=0; -- disable fault injection; part ids are non-deterministic in case of insert retries drop table if exists rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 592', () => {
    const query = `set receive_timeout=5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 593', () => {
    const query = `set optimize_throw_if_noop=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 594', () => {
    const query = `set allow_unrestricted_reads_from_keeper=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 595', () => {
    const query = `set receive_timeout=30;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 596', () => {
    const query = `set allow_nondeterministic_mutations=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 597', () => {
    const query = `set replication_alter_partitions_sync=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 598', () => {
    const query = `SET enable_optimize_predicate_expression = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 599', () => {
    const query = `set input_format_json_read_numbers_as_strings=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 600', () => {
    const query = `set final = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 601', () => {
    const query = `set final = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 602', () => {
    const query = `set final=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 603', () => {
    const query = `set allow_experimental_object_type=0, input_format_json_read_objects_as_strings=0, input_format_json_try_infer_named_tuples_from_objects=0, input_format_json_read_numbers_as_strings=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 604', () => {
    const query = `SET allow_experimental_nlp_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 605', () => {
    const query = `SET compile_aggregate_expressions=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 606', () => {
    const query = `SET max_block_size=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 607', () => {
    const query = `SET max_joined_block_size_rows = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 608', () => {
    const query = `SET join_algorithm='partial_merge';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 609', () => {
    const query = `set enable_memory_bound_merging_of_aggregation_results = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 610', () => {
    const query = `set aggregation_in_order_max_block_bytes = '1Mi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 611', () => {
    const query = `set max_block_size = 500;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 612', () => {
    const query = `set distributed_aggregation_memory_efficient=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 613', () => {
    const query = `SET mutations_sync = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 614', () => {
    const query = `SET max_bytes_before_external_sort = 33554432;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 615', () => {
    const query = `set max_block_size = 1048576;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 616', () => {
    const query = `SET max_bytes_before_external_group_by = '100M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 617', () => {
    const query = `SET max_memory_usage = '410M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 618', () => {
    const query = `SET group_by_two_level_threshold = '100K';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 619', () => {
    const query = `SET group_by_two_level_threshold_bytes = '50M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 620', () => {
    const query = `SET default_max_bytes_in_join = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 621', () => {
    const query = `SET max_bytes_in_join = 10000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 622', () => {
    const query = `set enable_optimize_predicate_expression=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 623', () => {
    const query = `SET system_events_show_zero_values = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 624', () => {
    const query = `SET system_events_show_zero_values = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 625', () => {
    const query = `SET max_rows_in_set_to_optimize_join = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 626', () => {
    const query = `SET insert_quorum = 'auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 627', () => {
    const query = `SET insert_quorum = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 628', () => {
    const query = `SET max_block_size = 64, max_insert_block_size = 64, min_insert_block_size_rows = 64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 629', () => {
    const query = `set optimize_sorting_by_input_stream_properties=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 630', () => {
    const query = `SET insert_quorum_parallel = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 631', () => {
    const query = `SET select_sequential_consistency = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 632', () => {
    const query = `SET insert_quorum_timeout = 5000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 633', () => {
    const query = `SET insert_quorum_timeout = 600000; -- set default value back INSERT INTO quorum1 VALUES (3, '2018-11-15');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 634', () => {
    const query = `set enable_analyzer = true, optimize_rewrite_sum_if_to_count_if=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 635', () => {
    const query = `SET max_rows_to_read = 0, max_bytes_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 636', () => {
    const query = `set dialect='kusto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 637', () => {
    const query = `SET max_query_size = 28;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 638', () => {
    const query = `SET enable_optimize_predicate_expression = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 639', () => {
    const query = `SET cross_to_inner_join_rewrite = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 640', () => {
    const query = `set optimize_trivial_count_query=1, empty_result_for_aggregation_by_empty_set=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 641', () => {
    const query = `SET max_block_size = 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 642', () => {
    const query = `SET max_block_size = 4213;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 643', () => {
    const query = `SET allow_experimental_vector_similarity_index = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 644', () => {
    const query = `SET allow_experimental_vector_similarity_index = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 645', () => {
    const query = `SET enable_analyzer = 1; -- 0 vs. 1 produce slightly different error codes, make it future-proof DROP TABLE IF EXISTS tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 646', () => {
    const query = `SET max_rows_to_read = '101M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 647', () => {
    const query = `set max_bytes_before_external_group_by = '2G', max_threads = 16,
aggregation_memory_efficient_merge_threads = 16,
distributed_aggregation_memory_efficient = 1,
prefer_localhost_replica = 1,
group_by_two_level_threshold = 100000,
group_by_two_level_threshold_bytes = 1000000,
max_block_size = 65505;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 648', () => {
    const query = `SET max_execution_time = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 649', () => {
    const query = `SET timeout_overflow_mode = 'break';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 650', () => {
    const query = `SET allow_experimental_full_text_index = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 651', () => {
    const query = `SET allow_experimental_full_text_index = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 652', () => {
    const query = `SET allow_experimental_inverted_index = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 653', () => {
    const query = `SET allow_experimental_full_text_index = 1; -- the new setting ALTER TABLE tab ADD INDEX idx(s) TYPE full_text(2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 654', () => {
    const query = `SET allow_experimental_full_text_index = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 655', () => {
    const query = `set max_rows_to_read = 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 656', () => {
    const query = `set max_rows_to_read=4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 657', () => {
    const query = `SET implicit_transaction=True;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 658', () => {
    const query = `SET implicit_transaction=False;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 659', () => {
    const query = `SET throw_on_unsupported_query_inside_transaction=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 660', () => {
    const query = `set max_threads = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 661', () => {
    const query = `set optimize_group_by_function_keys=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 662', () => {
    const query = `set enable_memory_bound_merging_of_aggregation_results = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 663', () => {
    const query = `set max_block_size = 65505;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 664', () => {
    const query = `SET prefer_column_name_to_alias = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 665', () => {
    const query = `SET max_analyze_depth = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 666', () => {
    const query = `set input_format_try_infer_integers=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 667', () => {
    const query = `set input_format_try_infer_exponent_floats=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 668', () => {
    const query = `set input_format_try_infer_dates=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 669', () => {
    const query = `set input_format_try_infer_datetimes=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 670', () => {
    const query = `set compatibility = '22.3';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 671', () => {
    const query = `set compatibility = '22.4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 672', () => {
    const query = `set allow_settings_after_format_in_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 673', () => {
    const query = `set schema_inference_use_cache_for_file=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 674', () => {
    const query = `SET allow_experimental_lightweight_delete = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 675', () => {
    const query = `SET cast_ipv4_ipv6_default_on_conversion_error = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 676', () => {
    const query = `SET cast_ipv4_ipv6_default_on_conversion_error = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 677', () => {
    const query = `SET log_comment = '02306_part_types_profile_events';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 678', () => {
    const query = `set max_rows_to_read = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 679', () => {
    const query = `set max_rows_to_read = 999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 680', () => {
    const query = `SET max_bytes_in_join = '100', join_algorithm = 'auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 681', () => {
    const query = `set compatibility_ignore_auto_increment_in_create_table=false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 682', () => {
    const query = `set compatibility_ignore_auto_increment_in_create_table=true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 683', () => {
    const query = `SET legacy_column_name_of_tuple_literal=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 684', () => {
    const query = `set allow_deprecated_database_ordinary=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 685', () => {
    const query = `set use_structure_from_insertion_table_in_table_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 686', () => {
    const query = `SET date_time_output_format='iso';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 687', () => {
    const query = `set input_format_parquet_import_nested = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 688', () => {
    const query = `set input_format_arrow_import_nested=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 689', () => {
    const query = `set input_format_orc_import_nested=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 690', () => {
    const query = `SET input_format_ipv4_default_on_conversion_error = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 691', () => {
    const query = `SET input_format_ipv6_default_on_conversion_error = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 692', () => {
    const query = `SET join_algorithm = 'direct';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 693', () => {
    const query = `SET enable_filesystem_cache_on_write_operations=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 694', () => {
    const query = `SET skip_download_if_exceeds_query_cache=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 695', () => {
    const query = `SET filesystem_cache_max_download_size=128;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 696', () => {
    const query = `SET insert_keeper_fault_injection_probability=0; -- to succeed this test can require too many retries due to 100 partitions, so disable fault injections drop table if exists data_02228;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 697', () => {
    const query = `SET allow_hyperscan = 1, max_hyperscan_regexp_length = 0, max_hyperscan_regexp_total_length = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 698', () => {
    const query = `SET enable_global_with_statement = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 699', () => {
    const query = `SET enable_global_with_statement = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 700', () => {
    const query = `set max_block_size=5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 701', () => {
    const query = `SET default_table_engine = 'None';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 702', () => {
    const query = `SET default_table_engine = 'MergeTree';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 703', () => {
    const query = `SET default_table_engine = 'Memory';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 704', () => {
    const query = `SET default_table_engine = 'Log';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 705', () => {
    const query = `SET default_temporary_table_engine = 'Log';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 706', () => {
    const query = `SET distributed_ddl_output_mode='none';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 707', () => {
    const query = `SET max_bytes_before_external_sort = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 708', () => {
    const query = `SET max_rows_to_read = '50M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 709', () => {
    const query = `SET allow_introspection_functions = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 710', () => {
    const query = `SET query_profiler_real_time_period_ns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 711', () => {
    const query = `SET query_profiler_cpu_time_period_ns = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 712', () => {
    const query = `SET log_queries = 1, max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 713', () => {
    const query = `SET log_queries = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 714', () => {
    const query = `SET query_profiler_cpu_time_period_ns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 715', () => {
    const query = `SET prefer_localhost_replica = 1; -- Make sure plan is reliable DROP TABLE IF EXISTS t_02156_mt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 716', () => {
    const query = `set count_distinct_optimization=true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 717', () => {
    const query = `set count_distinct_optimization=false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 718', () => {
    const query = `SET bool_true_representation = 'Custom true';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 719', () => {
    const query = `SET bool_false_representation = 'Custom false';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 720', () => {
    const query = `SET max_rows_to_read = '21M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 721', () => {
    const query = `SET optimize_read_in_order=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 722', () => {
    const query = `SET read_in_order_two_level_merge_threshold=100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 723', () => {
    const query = `set empty_result_for_aggregation_by_empty_set=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 724', () => {
    const query = `set max_bytes_before_external_group_by = 1000000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 725', () => {
    const query = `set group_by_two_level_threshold = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 726', () => {
    const query = `set min_insert_block_size_rows = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 727', () => {
    const query = `SET optimize_arithmetic_operations_in_aggregate_functions=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 728', () => {
    const query = `SET optimize_aggregators_of_group_by_keys=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 729', () => {
    const query = `set insert_deduplication_token = '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 730', () => {
    const query = `set deduplicate_blocks_in_dependent_materialized_views=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 731', () => {
    const query = `SET max_partitions_per_insert_block = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 732', () => {
    const query = `set insert_deduplication_token = '\\x61\\x00\\x62';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 733', () => {
    const query = `set insert_deduplication_token = '\\x61\\x00\\x63';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 734', () => {
    const query = `set distributed_product_mode = 'local';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 735', () => {
    const query = `set distributed_product_mode = 'global';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 736', () => {
    const query = `set bool_true_representation='True';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 737', () => {
    const query = `set bool_false_representation='False';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 738', () => {
    const query = `set bool_true_representation='Yes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 739', () => {
    const query = `set bool_false_representation='No';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 740', () => {
    const query = `set bool_true_representation='On';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 741', () => {
    const query = `set bool_false_representation='Off';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 742', () => {
    const query = `set output_format_write_statistics=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 743', () => {
    const query = `SET join_algorithm = 'auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 744', () => {
    const query = `SET max_rows_in_join = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 745', () => {
    const query = `SET force_index_by_date = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 746', () => {
    const query = `SET force_primary_key = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 747', () => {
    const query = `SET force_index_by_date = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 748', () => {
    const query = `SET format_csv_null_representation = '\\\\N';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 749', () => {
    const query = `set aggregate_functions_null_for_empty=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 750', () => {
    const query = `set receive_timeout = '10', receive_data_timeout_ms = '10000', extremes = '1', allow_suspicious_low_cardinality_types = '1', force_primary_key = '1', join_use_nulls = '1', max_rows_to_read = '2', join_algorithm = 'partial_merge';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 751', () => {
    const query = `SET extremes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 752', () => {
    const query = `SET output_format_decimal_trailing_zeros = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 753', () => {
    const query = `set group_by_two_level_threshold = 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 754', () => {
    const query = `set enable_positional_arguments = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 755', () => {
    const query = `set log_formatted_queries = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 756', () => {
    const query = `set max_hyperscan_regexp_length = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 757', () => {
    const query = `set max_hyperscan_regexp_total_length = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 758', () => {
    const query = `set limit=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 759', () => {
    const query = `set intersect_default_mode = 'DISTINCT';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 760', () => {
    const query = `set except_default_mode = 'DISTINCT';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 761', () => {
    const query = `SET max_memory_usage = '100M', max_rows_to_read = '1G';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 762', () => {
    const query = `set optimize_skip_unused_shards=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 763', () => {
    const query = `set optimize_distributed_group_by_sharding_key=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 764', () => {
    const query = `SET log_profile_events=true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 765', () => {
    const query = `SET use_index_for_in_with_subqueries = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 766', () => {
    const query = `SET use_index_for_in_with_subqueries = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 767', () => {
    const query = `SET function_range_max_elements_in_block = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 768', () => {
    const query = `SET allow_deprecated_snowflake_conversion_functions = 1; -- Force-enable deprecated snowflake conversion functions (in case this is randomized in CI) SELECT snowflakeToDateTime();  -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
SELECT snowflakeToDateTime64();  -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
SELECT snowflakeToDateTime('abc');  -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
SELECT snowflakeToDateTime64('abc');  -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
SELECT snowflakeToDateTime('abc', 123);  -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
SELECT snowflakeToDateTime64('abc', 123);  -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
SELECT snowflakeToDateTime(123::Int64) SETTINGS allow_deprecated_snowflake_conversion_functions = 0; -- { serverError DEPRECATED_FUNCTION }
SELECT snowflakeToDateTime64(123::Int64) SETTINGS allow_deprecated_snowflake_conversion_functions = 0; -- { serverError DEPRECATED_FUNCTION }
SELECT 'const column';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 769', () => {
    const query = `SET session_timezone = 'UTC'; -- disable timezone randomization SET enable_analyzer = 1; -- The old path formats the result with different whitespaces
SELECT '-- Negative tests';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 770', () => {
    const query = `SET allow_deprecated_snowflake_conversion_functions = 1; -- Force-enable deprecated snowflake conversion functions (in case this is randomized in CI) SET session_timezone = 'Africa/Juba';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 771', () => {
    const query = `SET validate_polygons = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 772', () => {
    const query = `set aggregate_functions_null_for_empty=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 773', () => {
    const query = `set force_optimize_skip_unused_shards=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 774', () => {
    const query = `SET parallel_view_processing=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 775', () => {
    const query = `SET log_query_views=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 776', () => {
    const query = `SET enable_filesystem_cache=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 777', () => {
    const query = `set query_plan_filter_push_down = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 778', () => {
    const query = `set exact_rows_before_limit = 1, output_format_write_statistics = 0, max_block_size = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 779', () => {
    const query = `set force_optimize_skip_unused_shards=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 780', () => {
    const query = `set force_primary_key=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 781', () => {
    const query = `set force_index_by_date=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 782', () => {
    const query = `set force_index_by_date=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 783', () => {
    const query = `SET min_insert_block_size_rows = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 784', () => {
    const query = `SET connections_with_failover_max_tries=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 785', () => {
    const query = `SET compile_expressions=true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 786', () => {
    const query = `SET insert_keeper_max_retries=100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 787', () => {
    const query = `SET insert_keeper_retry_max_backoff_ms=10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 788', () => {
    const query = `SET max_block_size = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 789', () => {
    const query = `SET join_use_nulls = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 790', () => {
    const query = `set max_threads =1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 791', () => {
    const query = `set max_threads =2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 792', () => {
    const query = `set optimize_use_implicit_projections = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 793', () => {
    const query = `SET allow_experimental_object_type = 1, max_insert_threads = 20, max_threads = 20, min_insert_block_size_rows = 65536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 794', () => {
    const query = `SET allow_experimental_json_type = 1, max_insert_threads = 20, max_threads = 20, min_insert_block_size_rows = 65536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 795', () => {
    const query = `SET prefer_global_in_and_join = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 796', () => {
    const query = `SET move_all_conditions_to_prewhere = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 797', () => {
    const query = `set short_circuit_function_evaluation = 'enable';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 798', () => {
    const query = `SET allow_experimental_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 799', () => {
    const query = `SET allow_experimental_bigint_types = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 800', () => {
    const query = `SET count_distinct_implementation = 'uniqTheta';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 801', () => {
    const query = `set optimize_injective_functions_inside_uniq = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 802', () => {
    const query = `set optimize_injective_functions_inside_uniq = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 803', () => {
    const query = `SET max_bytes_in_join = '100';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 804', () => {
    const query = `SET force_primary_key = 1, force_index_by_date=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 805', () => {
    const query = `SET max_memory_usage = '500M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 806', () => {
    const query = `SET max_block_size = 10, min_insert_block_size_rows = 0, min_insert_block_size_bytes = 0, max_threads = 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 807', () => {
    const query = `set optimize_skip_unused_shards_rewrite_in=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 808', () => {
    const query = `set optimize_skip_unused_shards_rewrite_in=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 809', () => {
    const query = `set max_rows_to_read = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 810', () => {
    const query = `set max_rows_to_read = 5; -- one row for subquery + subquery select * from x where _partition_id in (select partitionID(number + 1) from numbers(1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 811', () => {
    const query = `set max_rows_to_read = 2; -- one row for subquery + subquery itself set max_rows_to_read = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 812', () => {
    const query = `set max_rows_to_read = 200;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 813', () => {
    const query = `set optimize_move_to_prewhere=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 814', () => {
    const query = `SET optimize_move_to_prewhere_if_final = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 815', () => {
    const query = `SET optimize_move_to_prewhere_if_final = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 816', () => {
    const query = `SET max_rows_to_read = 0, max_result_rows = 0, max_bytes_before_external_group_by = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 817', () => {
    const query = `SET engine_file_truncate_on_insert=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 818', () => {
    const query = `set allow_experimental_bigint_types=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 819', () => {
    const query = `SET engine_file_empty_if_not_exists=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 820', () => {
    const query = `SET decimal_check_overflow = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 821', () => {
    const query = `SET input_format_null_as_default = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 822', () => {
    const query = `SET function_sleep_max_microseconds_per_block = 10000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 823', () => {
    const query = `set optimize_use_implicit_projections=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 824', () => {
    const query = `set enable_memory_bound_merging_of_aggregation_results=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 825', () => {
    const query = `set optimize_use_projections = 1, force_optimize_projection = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 826', () => {
    const query = `SET enable_positional_arguments = 0, force_optimize_projection = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 827', () => {
    const query = `set force_optimize_projection = 1, optimize_use_projections = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 828', () => {
    const query = `set optimize_use_projections = 1, max_rows_to_read = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 829', () => {
    const query = `set optimize_use_projections = 1, use_index_for_in_with_subqueries = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 830', () => {
    const query = `SET max_bytes_before_external_group_by=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 831', () => {
    const query = `set optimize_use_projections = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 832', () => {
    const query = `SET optimize_use_projections=1, optimize_aggregation_in_order=1, force_optimize_projection=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 833', () => {
    const query = `SET optimize_use_projections=1, optimize_aggregation_in_order=1, force_optimize_projection = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 834', () => {
    const query = `set max_rows_to_read = 2, optimize_use_projections = 1, optimize_use_implicit_projections = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 835', () => {
    const query = `set max_rows_to_read = 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 836', () => {
    const query = `set max_rows_to_read = 5001; -- one normal part 5000 + one minmax_count_projection part 1 select min(j), max(j) from mixed_final_mark;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 837', () => {
    const query = `set optimize_normalize_count_variants = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 838', () => {
    const query = `SET log_comment='system.query_log logging test';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 839', () => {
    const query = `SET log_profile_events=false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 840', () => {
    const query = `SET DEFAULT ROLE sqllt_role TO sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 841', () => {
    const query = `SET log_comment='';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 842', () => {
    const query = `SET geo_distance_returns_float64_on_float64_arguments = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 843', () => {
    const query = `SET geo_distance_returns_float64_on_float64_arguments = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 844', () => {
    const query = `SET group_by_two_level_threshold = 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 845', () => {
    const query = `SET log_comment = 'log_comment test', log_queries = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 846', () => {
    const query = `SET max_insert_threads = 0, output_format_pretty_row_numbers = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 847', () => {
    const query = `SET any_join_distinct_right_table_keys = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 848', () => {
    const query = `SET any_join_distinct_right_table_keys = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 849', () => {
    const query = `SET database_atomic_wait_for_drop_and_detach_synchronously=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 850', () => {
    const query = `SET allow_experimental_funnel_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 851', () => {
    const query = `SET allow_experimental_funnel_functions = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 852', () => {
    const query = `set query_plan_merge_filters=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 853', () => {
    const query = `set allow_suspicious_low_cardinality_types = 1, max_rows_to_read = '31M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 854', () => {
    const query = `set allow_introspection_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 855', () => {
    const query = `set joined_subquery_requires_alias=0, enable_analyzer=0; -- the query is invalid with a new analyzer SELECT number, number / 2 AS n, j1, j2 FROM remote('127.0.0.{2,3}', system.numbers) GLOBAL ANY LEFT JOIN (SELECT number / 3 AS n, number AS j1, 'Hello' AS j2 FROM system.numbers LIMIT 1048577) USING (n) LIMIT 10 format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 856', () => {
    const query = `SET optimize_rewrite_sum_if_to_count_if = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 857', () => {
    const query = `set remote_filesystem_read_method = 'read';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 858', () => {
    const query = `set local_filesystem_read_method = 'pread';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 859', () => {
    const query = `SET max_block_size = 1000, min_insert_block_size_rows = 0, min_insert_block_size_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 860', () => {
    const query = `set max_memory_usage='10Mi', max_untracked_memory=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 861', () => {
    const query = `SET distributed_foreground_insert = 0, network_compression_method = 'zstd';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 862', () => {
    const query = `SET distributed_foreground_insert = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 863', () => {
    const query = `SET convert_query_to_cnf = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 864', () => {
    const query = `SET optimize_using_constraints = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 865', () => {
    const query = `SET optimize_substitute_columns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 866', () => {
    const query = `SET optimize_append_index = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 867', () => {
    const query = `SET optimize_append_index = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 868', () => {
    const query = `set insert_distributed_one_random_shard = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 869', () => {
    const query = `set max_insert_block_size = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 870', () => {
    const query = `SET use_uncompressed_cache = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 871', () => {
    const query = `SET max_block_size=900;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 872', () => {
    const query = `SET enable_filesystem_cache = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 873', () => {
    const query = `SET max_memory_usage='30M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 874', () => {
    const query = `set max_rows_to_read = '30M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 875', () => {
    const query = `SET max_block_size = 1, min_insert_block_size_rows = 0, min_insert_block_size_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 876', () => {
    const query = `SET optimize_arithmetic_operations_in_aggregate_functions = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 877', () => {
    const query = `set max_memory_usage='200Mi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 878', () => {
    const query = `set max_bytes_before_remerge_sort='10Mi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 879', () => {
    const query = `set max_block_size=40960;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 880', () => {
    const query = `SET max_memory_usage = 1, max_untracked_memory = 1000000, max_threads=40;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 881', () => {
    const query = `SET limit = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 882', () => {
    const query = `set max_insert_threads = 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 883', () => {
    const query = `SET max_memory_usage = 10000000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 884', () => {
    const query = `set max_rows_to_read = 4; -- 2 in the subquery, 2 in the query itself select * from xp where i in (select * from numbers(2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 885', () => {
    const query = `set max_rows_to_read = 6; -- 2 subquery, 2 from global temp table (GLOBAL IN), 2 from local xp table select * from xp_d where i global in (select * from numbers(2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 886', () => {
    const query = `set transform_null_in = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 887', () => {
    const query = `set max_rows_to_read = 0; -- No rows should be read select * from xp where i in (null);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 888', () => {
    const query = `set max_rows_to_read = 4; -- 2 from numbers, 2 from tables select * from xp where i in (select * from numbers(2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 889', () => {
    const query = `set max_rows_to_read = 6; -- 2 from numbers, 2 from GLOBAL temp table (pushed from numbers), 2 from local xp select * from xp_d where i global in (select * from numbers(2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 890', () => {
    const query = `SET max_rows_to_read = 12; -- 10 from numbers + 2 from table select * from insub where i in (select toInt32(3) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 891', () => {
    const query = `SET replication_alter_partitions_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 892', () => {
    const query = `SET max_bytes_before_external_group_by = 200000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 893', () => {
    const query = `SET max_memory_usage = 1500000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 894', () => {
    const query = `SET max_threads = 12;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 895', () => {
    const query = `set optimize_respect_aliases = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 896', () => {
    const query = `set max_rows_to_read = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 897', () => {
    const query = `SET max_parallel_replicas = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 898', () => {
    const query = `SET max_parallel_replicas = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 899', () => {
    const query = `SET max_threads = nan; -- { serverError CANNOT_CONVERT_TYPE } `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 900', () => {
    const query = `SET union_default_mode = 'DISTINCT';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 901', () => {
    const query = `SET union_default_mode='ALL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 902', () => {
    const query = `set use_compact_format_in_distributed_parts_names=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 903', () => {
    const query = `SET merge_tree_min_rows_for_concurrent_read=10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 904', () => {
    const query = `set extremes = '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 905', () => {
    const query = `set log_queries_min_query_duration_ms=300000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 906', () => {
    const query = `set log_queries_min_query_duration_ms=300;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 907', () => {
    const query = `SET optimize_skip_merged_partitions=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 908', () => {
    const query = `SET local_filesystem_read_method='pread';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 909', () => {
    const query = `SET max_threads = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 910', () => {
    const query = `set enable_global_with_statement=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 911', () => {
    const query = `set database_atomic_wait_for_drop_and_detach_synchronously=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 912', () => {
    const query = `SET union_default_mode='DISTINCT';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 913', () => {
    const query = `set allow_nondeterministic_optimize_skip_unused_shards=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 914', () => {
    const query = `set check_table_dependencies=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 915', () => {
    const query = `SET allow_asynchronous_read_from_io_pool_for_merge_tree = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 916', () => {
    const query = `SET do_not_merge_across_partitions_select_final = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 917', () => {
    const query = `set load_marks_asynchronously = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 918', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 919', () => {
    const query = `SET date_time_output_format = 'simple';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 920', () => {
    const query = `SET date_time_output_format = 'iso';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 921', () => {
    const query = `SET date_time_output_format = 'unix_timestamp';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 922', () => {
    const query = `set output_format_parallel_formatting=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 923', () => {
    const query = `set max_read_buffer_size=1048576;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 924', () => {
    const query = `set max_block_size=65505;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 925', () => {
    const query = `SET input_format_tsv_enum_as_number = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 926', () => {
    const query = `SET input_format_tsv_enum_as_number = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 927', () => {
    const query = `SET input_format_csv_enum_as_number = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 928', () => {
    const query = `SET input_format_csv_enum_as_number = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 929', () => {
    const query = `set max_memory_usage='500M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 930', () => {
    const query = `set max_block_size=500;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 931', () => {
    const query = `set max_bytes_before_external_group_by=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 932', () => {
    const query = `SET select_sequential_consistency=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 933', () => {
    const query = `SET insert_quorum=2, insert_quorum_parallel=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 934', () => {
    const query = `SET insert_quorum_parallel=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 935', () => {
    const query = `SET insert_quorum=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 936', () => {
    const query = `SET insert_quorum=2, insert_quorum_parallel=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 937', () => {
    const query = `SET insert_quorum=1, insert_quorum_parallel=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 938', () => {
    const query = `SET insert_quorum=3, insert_quorum_parallel=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 939', () => {
    const query = `SET insert_quorum_timeout=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 940', () => {
    const query = `SET insert_quorum_timeout=6000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 941', () => {
    const query = `SET output_format_pretty_row_numbers=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 942', () => {
    const query = `SET output_format_pretty_row_numbers=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 943', () => {
    const query = `set empty_result_for_aggregation_by_empty_set = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 944', () => {
    const query = `set output_format_json_array_of_rows = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 945', () => {
    const query = `SET max_rows_to_read = '100M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 946', () => {
    const query = `SET max_bytes_in_join = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 947', () => {
    const query = `SET system_events_show_zero_values = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 948', () => {
    const query = `SET query_profiler_real_time_period_ns = 1000000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 949', () => {
    const query = `SET max_insert_threads = 1, max_threads = 100, min_insert_block_size_rows = 1048576, max_block_size = 65536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 950', () => {
    const query = `SET insert_quorum = 2, insert_quorum_parallel = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 951', () => {
    const query = `SET min_insert_block_size_rows = 0, min_insert_block_size_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 952', () => {
    const query = `SET custom_a = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 953', () => {
    const query = `SET custom_b = -177;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 954', () => {
    const query = `SET custom_c = 98.11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 955', () => {
    const query = `SET custom_d = 'abc def';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 956', () => {
    const query = `SET custom_a = 'changed';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 957', () => {
    const query = `SET custom_b = NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 958', () => {
    const query = `SET custom_c = 50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 959', () => {
    const query = `SET custom_d = 1.11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 960', () => {
    const query = `SET invalid_custom = 8; -- { serverError UNKNOWN_SETTING } -- Setting is neither a builtin nor started with one of the registered prefixes for user-defined settings. SELECT '--- using query context ---';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 961', () => {
    const query = `SET custom_compound.identifier.v1 = 'test';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 962', () => {
    const query = `SET custom_null = NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 963', () => {
    const query = `SET max_rows_to_read=8, read_overflow_mode='throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 964', () => {
    const query = `SET allow_non_metadata_alters = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 965', () => {
    const query = `set force_primary_key=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 966', () => {
    const query = `SET optimize_read_in_order=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 967', () => {
    const query = `SET max_rows_to_read = 4; -- one additional left mark needs to be read SELECT * FROM nullable_key WHERE k IS NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 968', () => {
    const query = `SET max_rows_to_read = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 969', () => {
    const query = `SET max_rows_to_read = 8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 970', () => {
    const query = `SET optimize_if_chain_to_multiif = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 971', () => {
    const query = `SET optimize_if_chain_to_multiif = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 972', () => {
    const query = `SET materialize_ttl_after_modify = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 973', () => {
    const query = `SET optimize_multiif_to_if = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 974', () => {
    const query = `SET insert_keeper_fault_injection_probability=0; -- disable fault injection; part ids are non-deterministic in case of insert retries SET replication_alter_partitions_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 975', () => {
    const query = `SET local_filesystem_read_method = 'mmap', min_bytes_to_use_mmap_io = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 976', () => {
    const query = `set optimize_if_transform_strings_to_enum = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 977', () => {
    const query = `set max_partitions_per_insert_block = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 978', () => {
    const query = `set optimize_redundant_functions_in_order_by = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 979', () => {
    const query = `set optimize_redundant_functions_in_order_by = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 980', () => {
    const query = `set force_optimize_skip_unused_shards_nesting=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 981', () => {
    const query = `set optimize_skip_unused_shards_nesting=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 982', () => {
    const query = `set optimize_skip_unused_shards_nesting=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 983', () => {
    const query = `SET max_rows_to_read = 2000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 984', () => {
    const query = `SET max_rows_to_read = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 985', () => {
    const query = `SET max_rows_to_read = 101000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 986', () => {
    const query = `SET max_rows_to_read = 900000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 987', () => {
    const query = `SET max_rows_to_read = 901000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 988', () => {
    const query = `set max_insert_threads=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 989', () => {
    const query = `SET output_format_pretty_color = 1, output_format_pretty_max_value_width_apply_for_single_value = 1, output_format_pretty_row_numbers = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 990', () => {
    const query = `SET output_format_pretty_max_value_width = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 991', () => {
    const query = `SET output_format_pretty_max_value_width = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 992', () => {
    const query = `SET output_format_pretty_max_value_width = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 993', () => {
    const query = `SET output_format_pretty_max_value_width = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 994', () => {
    const query = `SET output_format_pretty_color = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 995', () => {
    const query = `SET DEFAULT ROLE r2_01292 TO u3_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 996', () => {
    const query = `SET DEFAULT ROLE ALL TO u4_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 997', () => {
    const query = `SET DEFAULT ROLE ALL EXCEPT r1_01292 TO u5_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 998', () => {
    const query = `SET DEFAULT ROLE NONE TO u6_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 999', () => {
    const query = `SET DEFAULT ROLE r1_01292, r2_01292 TO u2_01292, u3_01292, u4_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1000', () => {
    const query = `SET max_execution_speed = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1001', () => {
    const query = `SET timeout_before_checking_execution_speed = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1002', () => {
    const query = `SET max_block_size = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1003', () => {
    const query = `SET max_execution_time = 100, timeout_before_checking_execution_speed = 100,
max_execution_speed = 1000000,
max_threads = 1,
max_block_size = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1004', () => {
    const query = `SET max_network_bandwidth = 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1005', () => {
    const query = `SET min_execution_speed = 100000000000, timeout_before_checking_execution_speed = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1006', () => {
    const query = `SET min_execution_speed_bytes = 800000000000, timeout_before_checking_execution_speed = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1007', () => {
    const query = `SET max_execution_speed = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1008', () => {
    const query = `SET max_execution_speed_bytes = 8000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1009', () => {
    const query = `SET max_execution_speed_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1010', () => {
    const query = `set max_rows_to_group_by=10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1011', () => {
    const query = `set group_by_overflow_mode='any';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1012', () => {
    const query = `set group_by_two_level_threshold=100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1013', () => {
    const query = `SET allow_suspicious_codecs = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1014', () => {
    const query = `SET allow_suspicious_codecs = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1015', () => {
    const query = `SET data_type_default_nullable='false';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1016', () => {
    const query = `SET distributed_aggregation_memory_efficient = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1017', () => {
    const query = `set max_distributed_connections=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1018', () => {
    const query = `SET distributed_group_by_no_merge = 0, extremes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1019', () => {
    const query = `SET distributed_group_by_no_merge = 1, extremes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1020', () => {
    const query = `SET distributed_group_by_no_merge = 0, extremes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1021', () => {
    const query = `SET distributed_group_by_no_merge = 1, extremes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1022', () => {
    const query = `SET output_format_markdown_escape_special_characters = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1023', () => {
    const query = `SET output_format_markdown_escape_special_characters = false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1024', () => {
    const query = `set log_queries_min_type='EXCEPTION_BEFORE_START';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1025', () => {
    const query = `set max_rows_to_read='100K';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1026', () => {
    const query = `set log_queries_min_type='EXCEPTION_WHILE_PROCESSING';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1027', () => {
    const query = `set max_rows_to_read=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1028', () => {
    const query = `set group_by_two_level_threshold = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1029', () => {
    const query = `set max_bytes_before_external_group_by = 16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1030', () => {
    const query = `SET min_insert_block_size_rows = 0, min_insert_block_size_bytes = 0, max_insert_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1031', () => {
    const query = `SET max_threads = 1, max_block_size = 12345;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1032', () => {
    const query = `set transaction snapshot 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1033', () => {
    const query = `set transaction snapshot 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1034', () => {
    const query = `set transaction snapshot 1000000000000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1035', () => {
    const query = `set transaction snapshot 5; -- { serverError INVALID_TRANSACTION } rollback;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1036', () => {
    const query = `set default_table_engine='ReplicatedMergeTree';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1037', () => {
    const query = `SET insert_keeper_fault_injection_probability=0; -- disable fault injection; part ids are non-deterministic in case of insert retries drop table if exists rmt sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1038', () => {
    const query = `SET check_table_dependencies=0; -- Otherwise we'll get error "test_01155_ordinary.dict depends on test_01155_ordinary.dist" in the next line. RENAME TABLE test_01155_ordinary.dist TO test_01155_atomic.dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1039', () => {
    const query = `SET check_table_dependencies=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1040', () => {
    const query = `SET check_table_dependencies=0; -- Otherwise we'll get error "test_01155_ordinary.dict depends on test_01155_ordinary.dist" in the next line. RENAME DATABASE test_01155_ordinary TO test_01155_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1041', () => {
    const query = `SET database_replicated_allow_explicit_uuid=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1042', () => {
    const query = `SET show_table_uuid_in_table_create_query_if_not_nil=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1043', () => {
    const query = `SET insert_keeper_fault_injection_probability=0; -- disable fault injection; part ids are non-deterministic in case of insert retries set send_logs_level='error';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1044', () => {
    const query = `set replication_alter_partitions_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1045', () => {
    const query = `SET database_replicated_allow_replicated_engine_arguments=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1046', () => {
    const query = `SET max_rows_in_set = 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1047', () => {
    const query = `SET set_overflow_mode = 'throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1048', () => {
    const query = `SET max_rows_to_group_by = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1049', () => {
    const query = `SET group_by_overflow_mode = 'throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1050', () => {
    const query = `SET max_rows_to_read = 500;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1051', () => {
    const query = `SET group_by_overflow_mode = 'any';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1052', () => {
    const query = `SET max_block_size = 11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1053', () => {
    const query = `SET max_block_size = 9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1054', () => {
    const query = `SET max_rows_to_sort = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1055', () => {
    const query = `set query_plan_remove_redundant_sorting=0; -- to keep sorting in the query below SELECT count() >= 100 AND count() <= 1000 FROM (SELECT * FROM system.numbers ORDER BY number);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1056', () => {
    const query = `SET max_bytes_before_external_group_by = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1057', () => {
    const query = `SET check_query_single_value_result = 'false';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1058', () => {
    const query = `SET max_memory_usage = 16000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1059', () => {
    const query = `SET max_joined_block_size_rows = 10000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1060', () => {
    const query = `SET allow_experimental_parallel_reading_from_replicas = 0; -- see https://github.com/ClickHouse/ClickHouse/issues/34525 SET prefer_localhost_replica = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1061', () => {
    const query = `SET parallel_distributed_insert_select=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1062', () => {
    const query = `SET prefer_localhost_replica=0; -- to require distributed send for local replica too INSERT INTO local_01099_a SELECT number from system.numbers limit 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1063', () => {
    const query = `SET prefer_localhost_replica=0; -- to require distributed send for local replica too SET send_logs_level='error';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1064', () => {
    const query = `SET parallel_distributed_insert_select=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1065', () => {
    const query = `SET memory_profiler_step = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1066', () => {
    const query = `SET memory_profiler_sample_probability = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1067', () => {
    const query = `SET query_profiler_cpu_time_period_ns = 1, max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1068', () => {
    const query = `SET insert_quorum=2, insert_quorum_parallel=0, insert_quorum_timeout=300e3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1069', () => {
    const query = `set distributed_aggregation_memory_efficient = 1, group_by_two_level_threshold = 1, group_by_two_level_threshold_bytes=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1070', () => {
    const query = `set force_optimize_skip_unused_shards=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1071', () => {
    const query = `set distributed_group_by_no_merge=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1072', () => {
    const query = `SET allow_suspicious_ttl_expressions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1073', () => {
    const query = `set session_timezone = '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1074', () => {
    const query = `SET max_parser_depth = 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1075', () => {
    const query = `set max_rows_to_read = 7120;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1076', () => {
    const query = `set max_rows_to_read = 897;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1077', () => {
    const query = `SET max_memory_usage = 50000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1078', () => {
    const query = `SET max_joined_block_size_rows = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1079', () => {
    const query = `SET max_joined_block_size_rows = 2000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1080', () => {
    const query = `SET max_parser_depth = 4000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1081', () => {
    const query = `SET max_memory_usage = '3Gi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1082', () => {
    const query = `SET max_memory_usage = '1567k';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1083', () => {
    const query = `SET max_memory_usage = '1234ki';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1084', () => {
    const query = `SET max_memory_usage = '12M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1085', () => {
    const query = `SET max_memory_usage = '31Mi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1086', () => {
    const query = `SET max_memory_usage = '1T';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1087', () => {
    const query = `SET max_memory_usage = '1Ti';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1088', () => {
    const query = `SET insert_keeper_fault_injection_probability=0; -- disable fault injection; part ids are non-deterministic in case of insert retries SET check_query_single_value_result = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1089', () => {
    const query = `set max_parallel_replicas=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1090', () => {
    const query = `SET join_algorithm = 'prefer_partial_merge';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1091', () => {
    const query = `SET max_memory_usage=10e6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1092', () => {
    const query = `SET max_block_size=100e3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1093', () => {
    const query = `SET min_insert_block_size_bytes=9e6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1094', () => {
    const query = `SET min_insert_block_size_rows=100e3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1095', () => {
    const query = `SET memory_profiler_step = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1096', () => {
    const query = `SET max_memory_usage = 4000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1097', () => {
    const query = `SET max_memory_usage = 2000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1098', () => {
    const query = `SET max_memory_usage = 8000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1099', () => {
    const query = `set max_memory_usage = 300000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1100', () => {
    const query = `SET partial_merge_join_optimizations = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1101', () => {
    const query = `SET max_bytes_in_join = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1102', () => {
    const query = `SET max_rows_in_join = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1103', () => {
    const query = `SET max_memory_usage = 32000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1104', () => {
    const query = `SET join_on_disk_max_files_to_merge = 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1105', () => {
    const query = `SET default_max_bytes_in_join = 10000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1106', () => {
    const query = `SET partial_merge_join_rows_in_right_blocks = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1107', () => {
    const query = `SET max_rows_in_join = '10';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1108', () => {
    const query = `SET joined_subquery_requires_alias = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1109', () => {
    const query = `SET max_rows_to_read = 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1110', () => {
    const query = `SET max_block_size = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1111', () => {
    const query = `SET max_block_size = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1112', () => {
    const query = `set max_rows_to_read = 16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1113', () => {
    const query = `SET max_block_size = 65536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1114', () => {
    const query = `SET optimize_skip_unused_shards = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1115', () => {
    const query = `SET max_query_size = 1073741824;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1116', () => {
    const query = `SET max_execution_speed = 1, max_execution_time = 3, max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1117', () => {
    const query = `SET trace_profile_events = 0; -- This can inhibit profiler from working, because it prevents sending samples from different profilers concurrently. SET query_profiler_cpu_time_period_ns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1118', () => {
    const query = `SET max_rows_to_read = 1100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1119', () => {
    const query = `SET allow_simdjson=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1120', () => {
    const query = `SET allow_simdjson=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1121', () => {
    const query = `SET connections_with_failover_max_tries=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1122', () => {
    const query = `SET connect_timeout_with_failover_ms=2000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1123', () => {
    const query = `SET connect_timeout_with_failover_secure_ms=2000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1124', () => {
    const query = `SET os_thread_priority = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1125', () => {
    const query = `SET insert_allow_materialized_columns=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1126', () => {
    const query = `SET insert_allow_materialized_columns=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1127', () => {
    const query = `SET input_format_values_accurate_types_of_literals = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1128', () => {
    const query = `SET input_format_values_interpret_expressions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1129', () => {
    const query = `SET optimize_read_in_order = 1, query_plan_read_in_order = 1, enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1130', () => {
    const query = `SET allow_hyperscan = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1131', () => {
    const query = `SET allow_hyperscan = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1132', () => {
    const query = `SET max_rows_to_read = 9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1133', () => {
    const query = `SET max_threads = 1500;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1134', () => {
    const query = `SET network_compression_method = 'lz4hc';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1135', () => {
    const query = `SET network_compression_method = 'zstd';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1136', () => {
    const query = `SET network_zstd_compression_level = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1137', () => {
    const query = `SET min_count_to_compile_expression = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1138', () => {
    const query = `SET max_memory_usage = 39000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1139', () => {
    const query = `SET max_memory_usage = 1000000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1140', () => {
    const query = `SET output_format_pretty_color = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1141', () => {
    const query = `SET force_primary_key = 1, enable_optimize_predicate_expression = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1142', () => {
    const query = `SET enable_zstd_qat_codec = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1143', () => {
    const query = `SET enable_deflate_qpl_codec = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1144', () => {
    const query = `SET network_zstd_compression_level = 7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1145', () => {
    const query = `SET max_block_size = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1146', () => {
    const query = `SET input_format_defaults_for_omitted_fields=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1147', () => {
    const query = `SET max_memory_usage = 100000000, max_threads = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1148', () => {
    const query = `SET send_logs_level = 'warning';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1149', () => {
    const query = `set input_format_null_as_default=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1150', () => {
    const query = `SET join_default_strictness = '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1151', () => {
    const query = `SET select_sequential_consistency=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1152', () => {
    const query = `SET insert_quorum_timeout=100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1153', () => {
    const query = `SET parallel_view_processing = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1154', () => {
    const query = `SET parallel_view_processing = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1155', () => {
    const query = `SET max_bytes_before_remerge_sort = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1156', () => {
    const query = `SET join_default_strictness = 'ALL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1157', () => {
    const query = `SET replication_alter_partitions_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1158', () => {
    const query = `SET allow_ddl = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1159', () => {
    const query = `SET output_format_pretty_max_column_pad_width = 250;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1160', () => {
    const query = `SET output_format_json_escape_forward_slashes = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1161', () => {
    const query = `SET output_format_json_escape_forward_slashes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1162', () => {
    const query = `SET max_threads = 32, max_memory_usage = '10G';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1163', () => {
    const query = `SET optimize_min_equality_disjunction_chain_length = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1164', () => {
    const query = `SET max_execution_time = 1, timeout_overflow_mode = 'break';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1165', () => {
    const query = `SET max_query_size=29;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1166', () => {
    const query = `SET max_query_size=262144;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1167', () => {
    const query = `SET max_result_rows = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1168', () => {
    const query = `SET optimize_aggregation_in_order = 0; -- FIXME : in order may happen before filter push down SET max_rows_to_read = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1169', () => {
    const query = `SET max_threads = 'auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1170', () => {
    const query = `SET empty_result_for_aggregation_by_empty_set = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1171', () => {
    const query = `SET insert_deduplicate=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1172', () => {
    const query = `SET group_by_two_level_threshold = 1, max_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1173', () => {
    const query = `SET insert_allow_materialized_columns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1174', () => {
    const query = `SET readonly = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1175', () => {
    const query = `SET allow_deprecated_snowflake_conversion_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1176', () => {
    const query = `SET allow_nonconst_timezone_arguments = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1177', () => {
    const query = `SET allow_nonconst_timezone_arguments = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1178', () => {
    const query = `SET database_replicated_allow_replicated_engine_arguments=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1179', () => {
    const query = `SET preferred_block_size_bytes = 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1180', () => {
    const query = `set preferred_block_size_bytes = 2000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1181', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1182', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 128;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1183', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 256;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1184', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 2097152;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1185', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 4194304;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1186', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 1152;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1187', () => {
    const query = `set preferred_block_size_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1188', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 96;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1189', () => {
    const query = `set preferred_max_column_in_block_size_bytes = 112;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1190', () => {
    const query = `SET preferred_max_column_in_block_size_bytes = 32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1191', () => {
    const query = `SET output_format_pretty_color=1, output_format_pretty_highlight_digit_groups=0, output_format_pretty_display_footer_column_names=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1192', () => {
    const query = `SET output_format_pretty_max_rows = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1193', () => {
    const query = `SET output_format_pretty_max_rows = 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1194', () => {
    const query = `SET output_format_pretty_max_rows = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1195', () => {
    const query = `SET output_format_pretty_grid_charset = 'ASCII';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1196', () => {
    const query = `SET output_format_pretty_color = 'auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1197', () => {
    const query = `SET max_threads = 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1198', () => {
    const query = `SET output_format_json_quote_64bit_integers = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1199', () => {
    const query = `SET output_format_json_quote_64bit_integers = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1200', () => {
    const query = `SET max_rows_to_read = '55M';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1201', () => {
    const query = `SET count_distinct_implementation = 'uniq';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1202', () => {
    const query = `SET count_distinct_implementation = 'uniqCombined';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1203', () => {
    const query = `SET count_distinct_implementation = 'uniqExact';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1204', () => {
    const query = `SET min_insert_block_size_bytes = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1205', () => {
    const query = `SET min_insert_block_size_rows = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1206', () => {
    const query = `SET optimize_trivial_insert_select = 'false';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1207', () => {
    const query = `SET min_insert_block_size_rows = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1208', () => {
    const query = `SET min_insert_block_size_bytes = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1209', () => {
    const query = `SET max_rows_to_read = 15;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1210', () => {
    const query = `SET merge_tree_min_rows_for_seek = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1211', () => {
    const query = `SET max_subquery_depth = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1212', () => {
    const query = `SET distributed_aggregation_memory_efficient = 1, group_by_two_level_threshold = 5000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1213', () => {
    const query = `SET group_by_two_level_threshold_bytes = 50000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1214', () => {
    const query = `SET max_memory_usage = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1215', () => {
    const query = `SET max_bytes_before_external_group_by = '1Mi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1216', () => {
    const query = `SET max_bytes_before_external_group_by = 100000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1217', () => {
    const query = `SET max_memory_usage = 410000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1218', () => {
    const query = `SET max_block_size = 8200;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1219', () => {
    const query = `SET max_temporary_non_const_columns = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1220', () => {
    const query = `SET distributed_aggregation_memory_efficient = 1, group_by_two_level_threshold = 1000,
group_by_overflow_mode = 'any',
max_rows_to_group_by = 1000,
totals_mode = 'after_having_auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1221', () => {
    const query = `SET group_by_two_level_threshold = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1222', () => {
    const query = `SET group_by_two_level_threshold = 7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1223', () => {
    const query = `SET parallel_replicas_count = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1224', () => {
    const query = `SET parallel_replica_offset = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1225', () => {
    const query = `SET parallel_replica_offset = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1226', () => {
    const query = `SET parallel_replica_offset = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1227', () => {
    const query = `SET parallel_replicas_count = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1228', () => {
    const query = `SET max_block_size = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1229', () => {
    const query = `SET send_logs_level = 'fatal'; -- Supress "Destination table test2.mt doesn't exist. Block of data is discarded." INSERT INTO {CLICKHOUSE_DATABASE:Identifier}.mt_buffer_00158 (x) SELECT number AS x FROM system.numbers LIMIT 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1230', () => {
    const query = `SET read_overflow_mode = 'break';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1231', () => {
    const query = `SET max_distributed_connections = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1232', () => {
    const query = `SET totals_mode = 'after_having_auto';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1233', () => {
    const query = `SET max_rows_to_group_by = 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1234', () => {
    const query = `SET max_memory_usage = 150000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1235', () => {
    const query = `SET max_bytes_before_external_sort = 10000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1236', () => {
    const query = `SET max_bytes_before_external_sort = 20000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1237', () => {
    const query = `SET max_block_size = 100001;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1238', () => {
    const query = `SET totals_mode = 'after_having_inclusive';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1239', () => {
    const query = `SET totals_mode = 'after_having_exclusive';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1240', () => {
    const query = `SET totals_mode = 'before_having';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1241', () => {
    const query = `SET group_by_two_level_threshold_bytes = 100000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1242', () => {
    const query = `SET group_by_two_level_threshold = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1243', () => {
    const query = `SET max_bytes_before_external_group_by = 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1244', () => {
    const query = `SET max_rows_to_group_by = 65535;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1245', () => {
    const query = `SET totals_auto_threshold = 0.5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SET] should pass without errors: 1246', () => {
    const query = `SET check_query_single_value_result = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
