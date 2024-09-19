/* eslint no-useless-escape: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors drop: 1', () => {
    const query = `DROP TABLE IF EXISTS id_values;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 2', () => {
    const query = `DROP TABLE IF EXISTS test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 3', () => {
    const query = `drop table if exists test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 4', () => {
    const query = `drop table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 5', () => {
    const query = `DROP TABLE IF EXISTS checks SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 6', () => {
    const query = `DROP TABLE checks SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 7', () => {
    const query = `DROP TABLE IF EXISTS ANIMAL SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 8', () => {
    const query = `DROP TABLE ANIMAL SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 9', () => {
    const query = `DROP TABLE IF EXISTS test_table SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 10', () => {
    const query = `DROP TABLE IF EXISTS test_table_for_in SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 11', () => {
    const query = `DROP TABLE test_table SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 12', () => {
    const query = `DROP TABLE test_table_for_in SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 13', () => {
    const query = `DROP TABLE IF EXISTS t0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 14', () => {
    const query = `DROP TABLE IF EXISTS t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 15', () => {
    const query = `DROP TABLE t0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 16', () => {
    const query = `DROP TABLE t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 17', () => {
    const query = `DROP TABLE IF EXISTS a SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 18', () => {
    const query = `DROP TABLE IF EXISTS projections;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 19', () => {
    const query = `DROP TABLE IF EXISTS projections_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 20', () => {
    const query = `DROP TABLE projections;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 21', () => {
    const query = `DROP TABLE projections_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 22', () => {
    const query = `DROP TABLE IF EXISTS rawtable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 23', () => {
    const query = `DROP TABLE IF EXISTS raw_to_attributes_mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 24', () => {
    const query = `DROP TABLE IF EXISTS attributes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 25', () => {
    const query = `DROP DICTIONARY IF EXISTS uk_mortgage_rates_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 26', () => {
    const query = `DROP TABLE IF EXISTS uk_mortgage_rates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 27', () => {
    const query = `DROP VIEW IF EXISTS uk_prices_aggs_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 28', () => {
    const query = `DROP TABLE IF EXISTS uk_prices_aggs_dest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 29', () => {
    const query = `DROP VIEW IF EXISTS prices_by_year_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 30', () => {
    const query = `DROP TABLE IF EXISTS prices_by_year_dest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 31', () => {
    const query = `DROP TABLE IF EXISTS uk_price_paid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 32', () => {
    const query = `DROP DICTIONARY uk_mortgage_rates_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 33', () => {
    const query = `DROP TABLE uk_mortgage_rates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 34', () => {
    const query = `DROP VIEW uk_prices_aggs_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 35', () => {
    const query = `DROP TABLE uk_prices_aggs_dest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 36', () => {
    const query = `DROP VIEW prices_by_year_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 37', () => {
    const query = `DROP TABLE prices_by_year_dest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 38', () => {
    const query = `DROP TABLE uk_price_paid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 39', () => {
    const query = `DROP TABLE IF EXISTS t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 40', () => {
    const query = `DROP TABLE IF EXISTS test_new_json_type;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 41', () => {
    const query = `DROP TABLE test_new_json_type;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 42', () => {
    const query = `DROP TABLE IF EXISTS t_async_insert_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 43', () => {
    const query = `DROP TABLE t_async_insert_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 44', () => {
    const query = `DROP TABLE IF EXISTS t_local_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 45', () => {
    const query = `DROP TABLE IF EXISTS t_local_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 46', () => {
    const query = `DROP TABLE IF EXISTS t_merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 47', () => {
    const query = `DROP TABLE IF EXISTS t_distr;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 48', () => {
    const query = `DROP TABLE IF EXISTS view1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 49', () => {
    const query = `DROP TABLE IF EXISTS table1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 50', () => {
    const query = `DROP TABLE view1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 51', () => {
    const query = `DROP TABLE table1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 52', () => {
    const query = `drop table if exists test_left;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 53', () => {
    const query = `drop table if exists test_right;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 54', () => {
    const query = `drop table test_left;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 55', () => {
    const query = `drop table test_right;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 56', () => {
    const query = `DROP TABLE IF EXISTS multi_col_ivt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 57', () => {
    const query = `DROP TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 58', () => {
    const query = `DROP TABLE IF EXISTS t_async_insert_params;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 59', () => {
    const query = `DROP TABLE t_async_insert_params;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 60', () => {
    const query = `DROP TABLE table_name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 61', () => {
    const query = `drop table if exists test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 62', () => {
    const query = `drop table if exists null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 63', () => {
    const query = `drop table if exists dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 64', () => {
    const query = `drop table if exists rocksdb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 65', () => {
    const query = `drop table if exists mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 66', () => {
    const query = `drop table if exists rep1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 67', () => {
    const query = `drop table if exists rep2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 68', () => {
    const query = `DROP TABLE IF EXISTS test__fuzz_22 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 69', () => {
    const query = `DROP TABLE IF EXISTS t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 70', () => {
    const query = `DROP TABLE t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 71', () => {
    const query = `DROP TABLE test__fuzz_22 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 72', () => {
    const query = `DROP TABLE IF EXISTS test_00808;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 73', () => {
    const query = `DROP TABLE IF EXISTS table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 74', () => {
    const query = `DROP TABLE table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 75', () => {
    const query = `drop table if exists shard_0.dt64_03222;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 76', () => {
    const query = `drop table if exists shard_1.dt64_03222;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 77', () => {
    const query = `drop table if exists distr_03222_dt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 78', () => {
    const query = `drop database shard_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 79', () => {
    const query = `drop database shard_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 80', () => {
    const query = `DROP TABLE 03221_rmv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 81', () => {
    const query = `DROP TABLE IF EXISTS t_merge_profile_events_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 82', () => {
    const query = `DROP TABLE IF EXISTS t_merge_profile_events_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 83', () => {
    const query = `DROP TABLE IF EXISTS t_merge_profile_events_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 84', () => {
    const query = `DROP TABLE report_metrics_v2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 85', () => {
    const query = `DROP TABLE IF EXISTS example_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 86', () => {
    const query = `DROP DATABASE IF EXISTS example_database;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 87', () => {
    const query = `DROP TABLE IF EXISTS t_primary_index_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 88', () => {
    const query = `DROP TABLE t_primary_index_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 89', () => {
    const query = `DROP FUNCTION IF EXISTS 03215_udf_with_union;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 90', () => {
    const query = `DROP FUNCTION 03215_udf_with_union;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 91', () => {
    const query = `DROP TABLE IF EXISTS test_parquet;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 92', () => {
    const query = `DROP TABLE IF EXISTS test__fuzz_21;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 93', () => {
    const query = `DROP TABLE IF EXISTS a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 94', () => {
    const query = `DROP TABLE IF EXISTS b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 95', () => {
    const query = `DROP TABLE IF EXISTS testnull;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 96', () => {
    const query = `drop table if exists product_groups;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 97', () => {
    const query = `drop table if exists products;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 98', () => {
    const query = `drop table product_groups;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 99', () => {
    const query = `drop table products;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 100', () => {
    const query = `drop table t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 101', () => {
    const query = `DROP TABLE IF EXISTS source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 102', () => {
    const query = `DROP TABLE IF EXISTS test_agg_variant;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 103', () => {
    const query = `DROP TABLE test_agg_variant;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 104', () => {
    const query = `DROP TABLE source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 105', () => {
    const query = `DROP TABLE IF EXISTS user_country;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 106', () => {
    const query = `DROP TABLE IF EXISTS user_transactions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 107', () => {
    const query = `DROP TABLE user_country;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 108', () => {
    const query = `DROP TABLE user_transactions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 109', () => {
    const query = `drop table if exists date_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 110', () => {
    const query = `drop view if exists date_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 111', () => {
    const query = `drop table if exists date32_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 112', () => {
    const query = `drop view if exists date32_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 113', () => {
    const query = `drop table if exists uuid_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 114', () => {
    const query = `drop view if exists uuid_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 115', () => {
    const query = `drop view if exists date_pv2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 116', () => {
    const query = `drop table if exists ipv4_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 117', () => {
    const query = `drop view if exists ipv4_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 118', () => {
    const query = `drop view date_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 119', () => {
    const query = `drop view date_pv2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 120', () => {
    const query = `drop view date32_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 121', () => {
    const query = `drop view uuid_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 122', () => {
    const query = `drop view ipv4_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 123', () => {
    const query = `drop table date_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 124', () => {
    const query = `drop table date32_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 125', () => {
    const query = `drop table uuid_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 126', () => {
    const query = `drop table ipv4_table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 127', () => {
    const query = `DROP TABLE IF EXISTS order_by_all SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 128', () => {
    const query = `DROP TABLE order_by_all SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 129', () => {
    const query = `DROP TABLE IF EXISTS t_03209 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 130', () => {
    const query = `DROP TABLE t_03209 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 131', () => {
    const query = `DROP TABLE IF EXISTS mem;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 132', () => {
    const query = `DROP TABLE IF EXISTS mem2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 133', () => {
    const query = `DROP TABLE IF EXISTS mem3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 134', () => {
    const query = `DROP TABLE IF EXISTS mem4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 135', () => {
    const query = `DROP TABLE IF EXISTS grouparray;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 136', () => {
    const query = `DROP TABLE IF EXISTS grouparray_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 137', () => {
    const query = `DROP TABLE IF EXISTS realtimedrep;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 138', () => {
    const query = `DROP TABLE IF EXISTS realtimedistributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 139', () => {
    const query = `DROP TABLE IF EXISTS realtimebuff__fuzz_19;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 140', () => {
    const query = `DROP TABLE IF EXISTS realtimebuff__fuzz_20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 141', () => {
    const query = `DROP DATABASE rdb1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 142', () => {
    const query = `DROP DATABASE rdb2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 143', () => {
    const query = `DROP TABLE IF EXISTS tp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 144', () => {
    const query = `DROP TABLE tp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 145', () => {
    const query = `DROP TABLE IF EXISTS t1__fuzz_26;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 146', () => {
    const query = `DROP TABLE t1__fuzz_26;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 147', () => {
    const query = `DROP TABLE dict_03204;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 148', () => {
    const query = `DROP TABLE IF EXISTS t_c3oollc8r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 149', () => {
    const query = `DROP TABLE t_c3oollc8r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 150', () => {
    const query = `DROP TABLE IF EXISTS bugcheck1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 151', () => {
    const query = `DROP TABLE bugcheck1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 152', () => {
    const query = `DROP TABLE IF EXISTS t_missed_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 153', () => {
    const query = `DROP TABLE t_missed_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 154', () => {
    const query = `DROP TABLE IF EXISTS t_03203;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 155', () => {
    const query = `DROP TABLE IF EXISTS t_subcolumns_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 156', () => {
    const query = `DROP TABLE t_subcolumns_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 157', () => {
    const query = `DROP TABLE IF EXISTS table_with_materialized;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 158', () => {
    const query = `DROP TABLE table_with_materialized;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 159', () => {
    const query = `DROP TABLE IF EXISTS 03199_fixedstring_array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 160', () => {
    const query = `DROP TABLE 03199_fixedstring_array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 161', () => {
    const query = `DROP TABLE IF EXISTS test_numbers__fuzz_29;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 162', () => {
    const query = `DROP TABLE test_numbers__fuzz_29;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 163', () => {
    const query = `DROP TABLE IF EXISTS test_dynamic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 164', () => {
    const query = `DROP TABLE test_dynamic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 165', () => {
    const query = `DROP TABLE IF EXISTS my_events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 166', () => {
    const query = `DROP TABLE IF EXISTS test_serialization;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 167', () => {
    const query = `DROP TABLE IF EXISTS t_bloom_filter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 168', () => {
    const query = `DROP TABLE IF EXISTS test_projection_deduplicate;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 169', () => {
    const query = `DROP TABLE test_projection_deduplicate;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 170', () => {
    const query = `DROP TABLE IF EXISTS 03173_single_function;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 171', () => {
    const query = `DROP TABLE IF EXISTS 03173_nested_function;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 172', () => {
    const query = `DROP TABLE IF EXISTS 03173_nested_function_lc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 173', () => {
    const query = `DROP TABLE IF EXISTS 03173_nested_function_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 174', () => {
    const query = `DROP TABLE IF EXISTS 03173_nested_function_lc_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 175', () => {
    const query = `DROP TABLE IF EXISTS 03173_nonsafe_cast;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 176', () => {
    const query = `DROP TABLE IF EXISTS 03173_multiple_partition_cols;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 177', () => {
    const query = `DROP TABLE IF EXISTS 03173_base_data_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 178', () => {
    const query = `DROP TABLE IF EXISTS 03173_low_cardinality_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 179', () => {
    const query = `DROP TABLE IF EXISTS 03173_nullable_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 180', () => {
    const query = `DROP TABLE IF EXISTS 03173_lc_nullable_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 181', () => {
    const query = `DROP TABLE IF EXISTS 03173_date_parsing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 182', () => {
    const query = `DROP TABLE IF EXISTS 03173_nested_date_parsing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 183', () => {
    const query = `DROP TABLE IF EXISTS 03173_empty_transform;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 184', () => {
    const query = `drop table if exists test_qualify;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 185', () => {
    const query = `DROP DICTIONARY IF EXISTS test_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 186', () => {
    const query = `DROP TABLE IF EXISTS view_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 187', () => {
    const query = `DROP VIEW IF EXISTS view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 188', () => {
    const query = `DROP VIEW view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 189', () => {
    const query = `DROP TABLE view_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 190', () => {
    const query = `DROP USER IF EXISTS 03172_user_invalid_bcrypt_hash;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 191', () => {
    const query = `DROP TABLE IF EXISTS test_hilbert_encode_hilbert_encode;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 192', () => {
    const query = `DROP TABLE test_hilbert_encode;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 193', () => {
    const query = `DROP TABLE IF EXISTS t_func_to_subcolumns_map_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 194', () => {
    const query = `DROP TABLE t_func_to_subcolumns_map_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 195', () => {
    const query = `DROP TABLE IF EXISTS t_func_to_subcolumns_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 196', () => {
    const query = `DROP TABLE t_func_to_subcolumns_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 197', () => {
    const query = `DROP TABLE IF EXISTS t_func_to_subcolumns_use_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 198', () => {
    const query = `DROP TABLE t_func_to_subcolumns_use_nulls;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 199', () => {
    const query = `DROP DICTIONARY IF EXISTS direct_dictionary_simple_key_simple_attributes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 200', () => {
    const query = `DROP TABLE IF EXISTS simple_key_simple_attributes_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 201', () => {
    const query = `DROP TABLE IF EXISTS column_modify_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 202', () => {
    const query = `DROP TABLE IF EXISTS complex_key_simple_attributes_source_short_circuit_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 203', () => {
    const query = `DROP DICTIONARY IF EXISTS cache_dictionary_complex_key_simple_attributes_short_circuit;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 204', () => {
    const query = `DROP TABLE IF EXISTS t_read_in_order_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 205', () => {
    const query = `DROP TABLE t_read_in_order_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 206', () => {
    const query = `DROP TABLE IF EXISTS t_read_in_order_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 207', () => {
    const query = `DROP TABLE t_read_in_order_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 208', () => {
    const query = `DROP DATABASE IF EXISTS 03147_db;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 209', () => {
    const query = `DROP TABLE IF EXISTS mv_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 210', () => {
    const query = `DROP TABLE IF EXISTS null_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 211', () => {
    const query = `DROP TABLE IF EXISTS t_ind_merge_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 212', () => {
    const query = `DROP TABLE t_ind_merge_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 213', () => {
    const query = `DROP TABLE IF EXISTS t_ind_merge_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 214', () => {
    const query = `DROP TABLE t_ind_merge_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 215', () => {
    const query = `DROP TABLE IF EXISTS tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 216', () => {
    const query = `DROP TABLE IF EXISTS 03165_token_bf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 217', () => {
    const query = `DROP TABLE IF EXISTS 03165_token_ft;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 218', () => {
    const query = `DROP TABLE IF EXISTS ids;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 219', () => {
    const query = `DROP TABLE IF EXISTS data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 220', () => {
    const query = `DROP TABLE IF EXISTS data2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 221', () => {
    const query = `DROP TABLE IF EXISTS atable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 222', () => {
    const query = `DROP TABLE atable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 223', () => {
    const query = `DROP TABLE IF EXISTS t_compact_bytes_s3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 224', () => {
    const query = `DROP TABLE IF EXISTS range_filter_custom_range_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 225', () => {
    const query = `DROP TABLE range_filter_custom_range_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 226', () => {
    const query = `DROP TABLE IF EXISTS range_filter_custom_range_test_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 227', () => {
    const query = `DROP TABLE range_filter_custom_range_test_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 228', () => {
    const query = `DROP TABLE IF EXISTS range_filter_custom_range_test_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 229', () => {
    const query = `DROP TABLE range_filter_custom_range_test_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 230', () => {
    const query = `DROP TABLE IF EXISTS 03164_users;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 231', () => {
    const query = `DROP TABLE IF EXISTS 03164_multi_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 232', () => {
    const query = `DROP TABLE IF EXISTS t_skip_index_insert;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 233', () => {
    const query = `DROP TABLE IF EXISTS src_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 234', () => {
    const query = `DROP TABLE IF EXISTS copied_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 235', () => {
    const query = `DROP TABLE src_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 236', () => {
    const query = `DROP TABLE copied_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 237', () => {
    const query = `DROP TABLE IF EXISTS users_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 238', () => {
    const query = `DROP TABLE users_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 239', () => {
    const query = `DROP TABLE users_wide;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 240', () => {
    const query = `DROP TABLE IF EXISTS base_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 241', () => {
    const query = `DROP TABLE IF EXISTS target_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 242', () => {
    const query = `DROP TABLE IF EXISTS mv_from_base_to_target;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 243', () => {
    const query = `DROP TABLE IF EXISTS mv_with_storage;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 244', () => {
    const query = `DROP TABLE IF EXISTS other_table_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 245', () => {
    const query = `DROP TABLE IF EXISTS other_table_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 246', () => {
    const query = `DROP TABLE IF EXISTS 03161_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 247', () => {
    const query = `DROP TABLE IF EXISTS 03161_reproducer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 248', () => {
    const query = `DROP TABLE IF EXISTS test_deep_nested_json;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 249', () => {
    const query = `DROP TABLE test_deep_nested_json;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 250', () => {
    const query = `DROP TABLE IF EXISTS t_map_lc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 251', () => {
    const query = `DROP TABLE t_map_lc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 252', () => {
    const query = `DROP TEMPORARY TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 253', () => {
    const query = `DROP TABLE IF EXISTS test_groupConcat;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 254', () => {
    const query = `DROP TABLE test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 255', () => {
    const query = `DROP TABLE IF EXISTS test_null_empty;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 256', () => {
    const query = `DROP TABLE test_null_empty;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 257', () => {
    const query = `DROP TABLE IF EXISTS users;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 258', () => {
    const query = `DROP TABLE IF EXISTS users2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 259', () => {
    const query = `DROP TABLE users;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 260', () => {
    const query = `DROP TABLE users2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 261', () => {
    const query = `DROP TABLE IF EXISTS test_max_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 262', () => {
    const query = `DROP TABLE IF EXISTS test_nested_dynamic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 263', () => {
    const query = `DROP TABLE IF EXISTS test_rapid_schema;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 264', () => {
    const query = `DROP TABLE test_max_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 265', () => {
    const query = `DROP TABLE test_nested_dynamic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 266', () => {
    const query = `DROP TABLE test_rapid_schema;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 267', () => {
    const query = `DROP TABLE IF EXISTS tab_v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 268', () => {
    const query = `drop table if exists to_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 269', () => {
    const query = `DROP VIEW IF EXISTS test_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 270', () => {
    const query = `DROP VIEW test_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 271', () => {
    const query = `DROP TABLE IF EXISTS test_grouping_sets_predicate;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 272', () => {
    const query = `DROP VIEW IF EXISTS dummy_rmv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 273', () => {
    const query = `DROP TABLE null_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 274', () => {
    const query = `DROP VIEW dummy_rmv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 275', () => {
    const query = `DROP TABLE to_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 276', () => {
    const query = `DROP TABLE IF EXISTS events0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 277', () => {
    const query = `DROP TABLE IF EXISTS probe0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 278', () => {
    const query = `DROP DICTIONARY IF EXISTS 03148_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 279', () => {
    const query = `DROP TABLE IF EXISTS t_mut_virtuals;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 280', () => {
    const query = `DROP TABLE t_mut_virtuals;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 281', () => {
    const query = `DROP TABLE IF EXISTS events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 282', () => {
    const query = `drop table if exists table_pv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 283', () => {
    const query = `DROP TABLE IF EXISTS t_index_3146;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 284', () => {
    const query = `DROP TABLE t_index_3146;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 285', () => {
    const query = `DROP TABLE IF EXISTS probes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 286', () => {
    const query = `DROP TABLE IF EXISTS test_03143;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 287', () => {
    const query = `DROP DICTIONARY IF EXISTS d2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 288', () => {
    const query = `DROP DICTIONARY d2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 289', () => {
    const query = `DROP TABLE IF EXISTS tmp_a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 290', () => {
    const query = `DROP TABLE IF EXISTS tmp_b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 291', () => {
    const query = `DROP TABLE IF EXISTS build;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 292', () => {
    const query = `DROP TABLE IF EXISTS skewed_probe;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 293', () => {
    const query = `DROP TABLE error_win_func;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 294', () => {
    const query = `DROP TABLE IF EXISTS test_table_comment;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 295', () => {
    const query = `DROP TABLE test_table_comment;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 296', () => {
    const query = `DROP TABLE IF EXISTS t3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 297', () => {
    const query = `DROP TABLE IF EXISTS t4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 298', () => {
    const query = `DROP TABLE IF EXISTS test1_00395;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 299', () => {
    const query = `DROP TABLE test1_00395;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 300', () => {
    const query = `drop table if exists hilbert_numbers_03131;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 301', () => {
    const query = `drop table if exists hilbert_numbers_1_03131;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 302', () => {
    const query = `DROP TABLE IF EXISTS test_table_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 303', () => {
    const query = `DROP TABLE IF EXISTS test_table_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 304', () => {
    const query = `DROP TABLE test_table_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 305', () => {
    const query = `DROP TABLE test_table_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 306', () => {
    const query = `DROP TABLE IF EXISTS small;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 307', () => {
    const query = `DROP TABLE small;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 308', () => {
    const query = `DROP TABLE IF EXISTS test2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 309', () => {
    const query = `DROP TABLE IF EXISTS t_index_lazy_load;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 310', () => {
    const query = `DROP TABLE t_index_lazy_load;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 311', () => {
    const query = `DROP TABLE IF EXISTS combinator_argMin_table_r1 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 312', () => {
    const query = `DROP TABLE IF EXISTS combinator_argMin_table_r2 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 313', () => {
    const query = `DROP TABLE IF EXISTS argmax_comb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 314', () => {
    const query = `drop table if exists test_subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 315', () => {
    const query = `DROP TEMPORARY TABLE IF EXISTS test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 316', () => {
    const query = `DROP TABLE IF EXISTS my_first_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 317', () => {
    const query = `DROP TABLE IF EXISTS event;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 318', () => {
    const query = `DROP TABLE IF EXISTS user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 319', () => {
    const query = `DROP TABLE IF EXISTS mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 320', () => {
    const query = `DROP TABLE IF EXISTS test_table_01;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 321', () => {
    const query = `DROP TABLE IF EXISTS test_table_02;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 322', () => {
    const query = `DROP TABLE IF EXISTS test_view_01;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 323', () => {
    const query = `DROP TABLE IF EXISTS loans;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 324', () => {
    const query = `DROP DATABASE IF EXISTS {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 325', () => {
    const query = `DROP DATABASE IF EXISTS db1_03101;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 326', () => {
    const query = `DROP DATABASE IF EXISTS db2_03101;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 327', () => {
    const query = `DROP TABLE IF EXISTS clickhouse_alias_issue_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 328', () => {
    const query = `DROP TABLE IF EXISTS clickhouse_alias_issue_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 329', () => {
    const query = `DROP TABLE IF EXISTS test_03096;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 330', () => {
    const query = `DROP TABLE IF EXISTS mt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 331', () => {
    const query = `DROP TABLE IF EXISTS mt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 332', () => {
    const query = `DROP TABLE IF EXISTS t1__fuzz_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 333', () => {
    const query = `DROP TABLE IF EXISTS left_join__fuzz_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 334', () => {
    const query = `DROP TABLE t1__fuzz_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 335', () => {
    const query = `DROP TABLE left_join__fuzz_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 336', () => {
    const query = `DROP TABLE IF EXISTS users_03094;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 337', () => {
    const query = `DROP TABLE IF EXISTS test_03093;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 338', () => {
    const query = `DROP DATABASE IF EXISTS {CLICKHOUSE_DATABASE_1:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 339', () => {
    const query = `DROP TABLE IF EXISTS fact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 340', () => {
    const query = `DROP TABLE IF EXISTS animals;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 341', () => {
    const query = `DROP TABLE IF EXISTS colors;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 342', () => {
    const query = `DROP TABLE IF EXISTS ab_12_aaa;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 343', () => {
    const query = `DROP TABLE IF EXISTS ab_12_bbb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 344', () => {
    const query = `DROP TABLE IF EXISTS nested_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 345', () => {
    const query = `DROP TABLE IF EXISTS join_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 346', () => {
    const query = `DROP TABLE IF EXISTS repl_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 347', () => {
    const query = `drop table if exists fill_ex;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 348', () => {
    const query = `DROP TABLE IF EXISTS parent;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 349', () => {
    const query = `DROP TABLE IF EXISTS join_table_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 350', () => {
    const query = `DROP TABLE IF EXISTS join_table_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 351', () => {
    const query = `DROP TABLE IF EXISTS 03040_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 352', () => {
    const query = `DROP TABLE IF EXISTS graph;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 353', () => {
    const query = `drop table if exists test;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 354', () => {
    const query = `DROP TABLE IF EXISTS move_partition_to_oneself;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 355', () => {
    const query = `DROP TABLE IF EXISTS 03038_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 356', () => {
    const query = `DROP TABLE IF EXISTS broken_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 357', () => {
    const query = `DROP TABLE IF EXISTS broken_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 358', () => {
    const query = `DROP TABLE IF EXISTS tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 359', () => {
    const query = `DROP TABLE IF EXISTS department;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 360', () => {
    const query = `DROP VIEW IF EXISTS test_mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 361', () => {
    const query = `DROP VIEW IF EXISTS test_mv_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 362', () => {
    const query = `DROP TABLE IF EXISTS alias_bug;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 363', () => {
    const query = `DROP TABLE IF EXISTS alias_bug_dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 364', () => {
    const query = `DROP TABLE tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 365', () => {
    const query = `DROP TABLE IF EXISTS department__fuzz_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 366', () => {
    const query = `DROP TABLE IF EXISTS department__fuzz_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 367', () => {
    const query = `DROP TABLE department__fuzz_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 368', () => {
    const query = `DROP TABLE department__fuzz_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 369', () => {
    const query = `DROP TABLE IF EXISTS 03033_example_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 370', () => {
    const query = `DROP TABLE IF EXISTS override_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 371', () => {
    const query = `DROP TABLE IF EXISTS test_tmp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 372', () => {
    const query = `DROP TABLE IF EXISTS dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 373', () => {
    const query = `DROP TABLE IF EXISTS view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 374', () => {
    const query = `DROP TABLE test_tmp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 375', () => {
    const query = `DROP TABLE dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 376', () => {
    const query = `DROP TABLE view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 377', () => {
    const query = `DROP TABLE IF EXISTS t_lightweight_deletes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 378', () => {
    const query = `DROP TABLE t_lightweight_deletes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 379', () => {
    const query = `DROP FUNCTION IF EXISTS test_func_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 380', () => {
    const query = `DROP TABLE IF EXISTS t4_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 381', () => {
    const query = `DROP TABLE IF EXISTS account_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 382', () => {
    const query = `DROP TABLE IF EXISTS dt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 383', () => {
    const query = `DROP TABLE IF EXISTS base;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 384', () => {
    const query = `DROP TABLE IF EXISTS copy_without_comment;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 385', () => {
    const query = `DROP TABLE IF EXISTS copy_with_comment;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 386', () => {
    const query = `DROP TABLE IF EXISTS memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 387', () => {
    const query = `DROP TABLE memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 388', () => {
    const query = `drop table if exists data_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 389', () => {
    const query = `drop table if exists data_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 390', () => {
    const query = `drop table if exists ephemeral;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 391', () => {
    const query = `drop table if exists dist_in;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 392', () => {
    const query = `drop table if exists dist_out;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 393', () => {
    const query = `DROP TABLE mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 394', () => {
    const query = `drop table data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 395', () => {
    const query = `drop table data_rep;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 396', () => {
    const query = `DROP TABLE IF EXISTS test_data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 397', () => {
    const query = `DROP TABLE test_data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 398', () => {
    const query = `drop table test_memory settings ignore_drop_queries_probability=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 399', () => {
    const query = `drop table test_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 400', () => {
    const query = `drop table test_merge_tree settings ignore_drop_queries_probability=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 401', () => {
    const query = `drop table test_merge_tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 402', () => {
    const query = `drop table test_join settings ignore_drop_queries_probability=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 403', () => {
    const query = `drop table test_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 404', () => {
    const query = `DROP TABLE IF EXISTS v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 405', () => {
    const query = `DROP TABLE v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 406', () => {
    const query = `DROP DICTIONARY IF EXISTS range_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 407', () => {
    const query = `DROP TABLE IF EXISTS range_dictionary_nullable_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 408', () => {
    const query = `DROP TABLE IF EXISTS t_nullable_keys_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 409', () => {
    const query = `DROP TABLE t_nullable_keys_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 410', () => {
    const query = `DROP TABLE IF EXISTS t_nullable_keys_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 411', () => {
    const query = `DROP TABLE t_nullable_keys_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 412', () => {
    const query = `DROP TABLE IF EXISTS t_nullable_keys_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 413', () => {
    const query = `DROP TABLE t_nullable_keys_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 414', () => {
    const query = `DROP TABLE IF EXISTS t_nullable_keys_4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 415', () => {
    const query = `DROP TABLE t_nullable_keys_4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 416', () => {
    const query = `DROP TABLE IF EXISTS t_nullable_keys_5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 417', () => {
    const query = `DROP TABLE t_nullable_keys_5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 418', () => {
    const query = `DROP TABLE IF EXISTS t_nullable_keys_6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 419', () => {
    const query = `DROP TABLE t_nullable_keys_6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 420', () => {
    const query = `DROP TABLE IF EXISTS t_uniq_exact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 421', () => {
    const query = `DROP TABLE t_uniq_exact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 422', () => {
    const query = `DROP TABLE IF EXISTS t_optimize_equal_ranges;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 423', () => {
    const query = `DROP TABLE t_optimize_equal_ranges;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 424', () => {
    const query = `DROP TABLE IF EXISTS src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 425', () => {
    const query = `DROP TABLE IF EXISTS dst_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 426', () => {
    const query = `DROP TABLE IF EXISTS mv_dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 427', () => {
    const query = `DROP TABLE src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 428', () => {
    const query = `DROP TABLE mv_dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 429', () => {
    const query = `DROP TABLE dst_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 430', () => {
    const query = `DROP TABLE IF EXISTS partitioned_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 431', () => {
    const query = `DROP TABLE partitioned_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 432', () => {
    const query = `DROP TABLE mv_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 433', () => {
    const query = `DROP TABLE IF EXISTS mv_first;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 434', () => {
    const query = `DROP TABLE IF EXISTS mv_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 435', () => {
    const query = `DROP TABLE mv_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 436', () => {
    const query = `DROP TABLE mv_first;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 437', () => {
    const query = `DROP POLICY IF EXISTS url_na_log_policy0 ON url_na_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 438', () => {
    const query = `DROP TABLE IF EXISTS url_na_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 439', () => {
    const query = `DROP POLICY url_na_log_policy0 ON url_na_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 440', () => {
    const query = `DROP TABLE url_na_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 441', () => {
    const query = `DROP TABLE IF EXISTS numbers_1e6__fuzz_34;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 442', () => {
    const query = `DROP TABLE IF EXISTS numbers_1e6__fuzz_33;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 443', () => {
    const query = `DROP TABLE numbers_1e6__fuzz_34;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 444', () => {
    const query = `DROP TABLE numbers_1e6__fuzz_33;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 445', () => {
    const query = `DROP TABLE IF EXISTS 02985_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 446', () => {
    const query = `DROP TABLE IF EXISTS t_length_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 447', () => {
    const query = `DROP TABLE IF EXISTS t_length_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 448', () => {
    const query = `DROP TABLE t_length_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 449', () => {
    const query = `DROP TABLE t_length_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 450', () => {
    const query = `DROP TABLE IF EXISTS t_sample_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 451', () => {
    const query = `DROP TABLE t_sample_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 452', () => {
    const query = `DROP TABLE mv_03002;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 453', () => {
    const query = `DROP TABLE table_03002;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 454', () => {
    const query = `DROP TABLE t__fuzz_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 455', () => {
    const query = `drop table if exists test_d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 456', () => {
    const query = `DROP TABLE IF EXISTS landing SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 457', () => {
    const query = `DROP TABLE IF EXISTS landing_dist SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 458', () => {
    const query = `DROP TABLE IF EXISTS ds SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 459', () => {
    const query = `DROP TABLE IF EXISTS t_data_version;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 460', () => {
    const query = `DROP TABLE t_data_version;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 461', () => {
    const query = `DROP TABLE IF EXISTS lwd_merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 462', () => {
    const query = `DROP TABLE IF EXISTS t_block_offset;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 463', () => {
    const query = `DROP TABLE t_block_offset;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 464', () => {
    const query = `drop table if exists x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 465', () => {
    const query = `drop table x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 466', () => {
    const query = `DROP TABLE IF EXISTS 03000_traverse_shadow_system_data_path_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 467', () => {
    const query = `DROP TABLE IF EXISTS skip_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 468', () => {
    const query = `DROP TABLE skip_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 469', () => {
    const query = `drop table if exists target1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 470', () => {
    const query = `drop table if exists target2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 471', () => {
    const query = `drop table if exists v_heavy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 472', () => {
    const query = `drop table if exists t_table_select;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 473', () => {
    const query = `DROP TABLE IF EXISTS visits_order;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 474', () => {
    const query = `DROP TABLE IF EXISTS visits_order_dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 475', () => {
    const query = `DROP TABLE IF EXISTS too_many_parts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 476', () => {
    const query = `DROP TABLE IF EXISTS test_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 477', () => {
    const query = `DROP TABLE test_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 478', () => {
    const query = `DROP TABLE IF EXISTS test_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 479', () => {
    const query = `DROP TABLE test_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 480', () => {
    const query = `DROP TABLE IF EXISTS test_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 481', () => {
    const query = `DROP TABLE test_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 482', () => {
    const query = `DROP TABLE IF EXISTS test_6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 483', () => {
    const query = `DROP TABLE test_6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 484', () => {
    const query = `DROP TABLE IF EXISTS test_9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 485', () => {
    const query = `DROP TABLE test_9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 486', () => {
    const query = `DROP TABLE b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 487', () => {
    const query = `DROP TABLE table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 488', () => {
    const query = `DROP TABLE IF EXISTS tags;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 489', () => {
    const query = `DROP TABLE IF EXISTS test_temporary_table_02989;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 490', () => {
    const query = `DROP TABLE test_temporary_table_02989;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 491', () => {
    const query = `DROP TABLE IF EXISTS test_table_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 492', () => {
    const query = `DROP TABLE test_table_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 493', () => {
    const query = `DROP TABLE IF EXISTS test_table_replicated_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 494', () => {
    const query = `DROP TABLE test_table_replicated_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 495', () => {
    const query = `DROP TABLE IF EXISTS tabc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 496', () => {
    const query = `DROP TABLE IF EXISTS ta;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 497', () => {
    const query = `DROP TABLE IF EXISTS tb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 498', () => {
    const query = `DROP TABLE IF EXISTS tc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 499', () => {
    const query = `DROP DATABASE IF EXISTS 02988_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 500', () => {
    const query = `DROP TABLE IF EXISTS test_empty;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 501', () => {
    const query = `DROP TABLE test_empty;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 502', () => {
    const query = `DROP TABLE IF EXISTS test_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 503', () => {
    const query = `DROP TABLE test_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 504', () => {
    const query = `DROP TABLE IF EXISTS test_nested_arrays;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 505', () => {
    const query = `DROP TABLE test_nested_arrays;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 506', () => {
    const query = `DROP TABLE IF EXISTS test_numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 507', () => {
    const query = `DROP TABLE test_numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 508', () => {
    const query = `DROP TABLE IF EXISTS test_big_numbers_sep;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 509', () => {
    const query = `DROP TABLE test_big_numbers_sep;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 510', () => {
    const query = `DROP TABLE IF EXISTS test_big_numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 511', () => {
    const query = `DROP TABLE test_big_numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 512', () => {
    const query = `DROP TABLE IF EXISTS test_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 513', () => {
    const query = `DROP TABLE test_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 514', () => {
    const query = `DROP TABLE IF EXISTS test_big_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 515', () => {
    const query = `DROP TABLE test_big_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 516', () => {
    const query = `DROP TABLE IF EXISTS test_datetime;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 517', () => {
    const query = `DROP TABLE test_datetime;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 518', () => {
    const query = `DROP TABLE IF EXISTS test_date32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 519', () => {
    const query = `DROP TABLE test_date32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 520', () => {
    const query = `DROP TABLE IF EXISTS test_date;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 521', () => {
    const query = `DROP TABLE test_date;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 522', () => {
    const query = `DROP TABLE IF EXISTS sharded_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 523', () => {
    const query = `DROP TABLE IF EXISTS t_index_agg_func;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 524', () => {
    const query = `DROP TABLE t_index_agg_func;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 525', () => {
    const query = `DROP TABLE IF EXISTS shared_test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 526', () => {
    const query = `DROP TABLE IF EXISTS distributed_test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 527', () => {
    const query = `DROP TABLE distributed_test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 528', () => {
    const query = `DROP TABLE shared_test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 529', () => {
    const query = `DROP DATABASE IF EXISTS shard_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 530', () => {
    const query = `DROP DATABASE IF EXISTS shard_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 531', () => {
    const query = `DROP TABLE t_distr;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 532', () => {
    const query = `DROP TABLE IF EXISTS test_unexpected_cluster;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 533', () => {
    const query = `DROP TABLE IF EXISTS mv_indexes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 534', () => {
    const query = `DROP TABLE IF EXISTS mv_no_indexes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 535', () => {
    const query = `DROP TABLE IF EXISTS mv_projections;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 536', () => {
    const query = `DROP TABLE IF EXISTS mv_primary_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 537', () => {
    const query = `DROP TABLE IF EXISTS mv_primary_key_from_column;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 538', () => {
    const query = `DROP TABLE IF EXISTS t_vertical_merge_memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 539', () => {
    const query = `DROP TABLE IF EXISTS table_with_some_columns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 540', () => {
    const query = `DROP TABLE IF EXISTS pr_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 541', () => {
    const query = `DROP TABLE IF EXISTS pr_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 542', () => {
    const query = `DROP TABLE IF EXISTS numbers_1e6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 543', () => {
    const query = `DROP TABLE IF EXISTS landing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 544', () => {
    const query = `DROP TABLE IF EXISTS ds_1_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 545', () => {
    const query = `DROP VIEW IF EXISTS mv_1_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 546', () => {
    const query = `DROP VIEW IF EXISTS mv_1_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 547', () => {
    const query = `DROP TABLE landing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 548', () => {
    const query = `DROP TABLE ds_1_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 549', () => {
    const query = `DROP VIEW mv_1_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 550', () => {
    const query = `DROP VIEW mv_1_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 551', () => {
    const query = `DROP TABLE IF EXISTS ds_1_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 552', () => {
    const query = `DROP TABLE IF EXISTS ds_2_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 553', () => {
    const query = `DROP VIEW IF EXISTS mv_2_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 554', () => {
    const query = `DROP VIEW IF EXISTS mv_2_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 555', () => {
    const query = `DROP TABLE IF EXISTS ds_3_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 556', () => {
    const query = `DROP VIEW IF EXISTS mv_3_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 557', () => {
    const query = `DROP TABLE ds_1_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 558', () => {
    const query = `DROP TABLE ds_2_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 559', () => {
    const query = `DROP VIEW mv_2_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 560', () => {
    const query = `DROP VIEW mv_2_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 561', () => {
    const query = `DROP TABLE ds_3_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 562', () => {
    const query = `DROP VIEW mv_3_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 563', () => {
    const query = `drop table if exists tlb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 564', () => {
    const query = `DROP TABLE tlb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 565', () => {
    const query = `DROP TABLE IF EXISTS t_func_to_subcolumns_variant;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 566', () => {
    const query = `DROP TABLE t_func_to_subcolumns_variant;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 567', () => {
    const query = `DROP TABLE IF EXISTS t_func_to_subcolumns_map;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 568', () => {
    const query = `DROP TABLE t_func_to_subcolumns_map;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 569', () => {
    const query = `DROP TABLE IF EXISTS t_column_names;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 570', () => {
    const query = `DROP TABLE t_column_names;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 571', () => {
    const query = `DROP TABLE IF EXISTS t_subcolumns_if;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 572', () => {
    const query = `DROP TABLE IF EXISTS im;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 573', () => {
    const query = `DROP TABLE IF EXISTS ts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 574', () => {
    const query = `DROP TABLE IF EXISTS async_insert_mt_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 575', () => {
    const query = `DROP TABLE IF EXISTS t1__fuzz_4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 576', () => {
    const query = `DROP TABLE IF EXISTS t0__fuzz_29;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 577', () => {
    const query = `DROP TABLE t1__fuzz_4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 578', () => {
    const query = `DROP TABLE t0__fuzz_29;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 579', () => {
    const query = `DROP TABLE IF EXISTS f32_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 580', () => {
    const query = `DROP TABLE f32_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 581', () => {
    const query = `drop table a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 582', () => {
    const query = `DROP TABLE IF EXISTS r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 583', () => {
    const query = `DROP TABLE IF EXISTS test_parallel_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 584', () => {
    const query = `DROP TABLE test_parallel_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 585', () => {
    const query = `DROP DATABASE IF EXISTS 02961_db1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 586', () => {
    const query = `DROP DATABASE IF EXISTS 02961_db2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 587', () => {
    const query = `DROP TABLE 02961_db1.02961_tb1, 02961_db1.02961_tb2, 02961_db2.02961_tb3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 588', () => {
    const query = `DROP TABLE 02961_db2.02961_tb4, 02961_db1.02961_tb1, 02961_db2.02961_tb5; -- { serverError UNKNOWN_TABLE } SELECT '-- check which tables exist in 02961_db1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 589', () => {
    const query = `DROP TABLE IF EXISTS tab1, tab2, tab3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 590', () => {
    const query = `DROP TABLE IF EMPTY tab1, tab2, tab3; -- { serverError TABLE_NOT_EMPTY } SELECT 'Test when deletion of not empty table fails';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 591', () => {
    const query = `DROP DATABASE IF EXISTS test2960_valid_database_engine;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 592', () => {
    const query = `DROP FUNCTION IF EXISTS f1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 593', () => {
    const query = `DROP TABLE hit;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 594', () => {
    const query = `DROP TABLE IF EXISTS spark_bar_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 595', () => {
    const query = `drop view if exists slow_view1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 596', () => {
    const query = `DROP TABLE IF EXISTS 02952_disjunction_optimization;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 597', () => {
    const query = `DROP TABLE 02952_disjunction_optimization;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 598', () => {
    const query = `DROP TABLE part_log_bytes_uncompressed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 599', () => {
    const query = `DROP TABLE IF EXISTS dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 600', () => {
    const query = `DROP DICTIONARY IF EXISTS flat_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 601', () => {
    const query = `DROP DICTIONARY flat_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 602', () => {
    const query = `DROP DICTIONARY IF EXISTS hashed_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 603', () => {
    const query = `DROP DICTIONARY hashed_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 604', () => {
    const query = `DROP DICTIONARY IF EXISTS hashed_array_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 605', () => {
    const query = `DROP TABLE IF EXISTS range_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 606', () => {
    const query = `DROP DICTIONARY IF EXISTS range_hashed_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 607', () => {
    const query = `DROP DICTIONARY range_hashed_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 608', () => {
    const query = `DROP TABLE range_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 609', () => {
    const query = `DROP DICTIONARY IF EXISTS cache_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 610', () => {
    const query = `DROP DICTIONARY cache_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 611', () => {
    const query = `DROP DICTIONARY IF EXISTS direct_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 612', () => {
    const query = `DROP DICTIONARY direct_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 613', () => {
    const query = `DROP TABLE dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 614', () => {
    const query = `DROP TABLE IF EXISTS ip_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 615', () => {
    const query = `DROP DICTIONARY IF EXISTS ip_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 616', () => {
    const query = `DROP DICTIONARY ip_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 617', () => {
    const query = `DROP TABLE IF EXISTS polygon_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 618', () => {
    const query = `DROP DICTIONARY IF EXISTS polygon_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 619', () => {
    const query = `DROP TABLE IF EXISTS points;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 620', () => {
    const query = `DROP TABLE points;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 621', () => {
    const query = `DROP DICTIONARY polygon_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 622', () => {
    const query = `DROP TABLE polygon_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 623', () => {
    const query = `DROP TABLE IF EXISTS regexp_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 624', () => {
    const query = `DROP DICTIONARY IF EXISTS regexp_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 625', () => {
    const query = `DROP TABLE regexp_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 626', () => {
    const query = `DROP TABLE IF EXISTS ttl_group_by_bug;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 627', () => {
    const query = `DROP TABLE IF EXISTS merge_tree_in_subqueries;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 628', () => {
    const query = `DROP TABLE IF EXISTS t_merge_tree_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 629', () => {
    const query = `DROP TABLE t_merge_tree_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 630', () => {
    const query = `DROP TABLE IF EXISTS 02947_table_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 631', () => {
    const query = `DROP TABLE IF EXISTS 02947_table_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 632', () => {
    const query = `DROP TABLE 02947_table_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 633', () => {
    const query = `DROP TABLE 02947_table_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 634', () => {
    const query = `DROP TABLE IF EXISTS t1 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 635', () => {
    const query = `DROP TABLE IF EXISTS t2 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 636', () => {
    const query = `DROP TABLE IF EXISTS t3 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 637', () => {
    const query = `DROP TABLE t2 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 638', () => {
    const query = `DROP TABLE t3 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 639', () => {
    const query = `DROP TABLE test_d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 640', () => {
    const query = `DROP TABLE IF EXISTS literal_alias_misclassification;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 641', () => {
    const query = `DROP TABLE IF EXISTS tokenbf_v1_hasany_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 642', () => {
    const query = `DROP TABLE IF EXISTS ngrambf_v1_hasany_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 643', () => {
    const query = `DROP TABLE tokenbf_v1_hasany_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 644', () => {
    const query = `DROP TABLE ngrambf_v1_hasany_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 645', () => {
    const query = `DROP TABLE IF EXISTS tokenbf_tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 646', () => {
    const query = `DROP TABLE IF EXISTS ngrambf_tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 647', () => {
    const query = `DROP TABLE tokenbf_tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 648', () => {
    const query = `DROP TABLE ngrambf_tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 649', () => {
    const query = `DROP TABLE IF EXISTS order_by_all;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 650', () => {
    const query = `DROP TABLE order_by_all;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 651', () => {
    const query = `DROP TABLE IF EXISTS test_group_by_with_rollup_order;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 652', () => {
    const query = `DROP TABLE IF EXISTS regex_test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 653', () => {
    const query = `DROP VIEW test_mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 654', () => {
    const query = `DROP TABLE IF EXISTS t_proj_external;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 655', () => {
    const query = `DROP TABLE IF EXISTS data_sparse_column;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 656', () => {
    const query = `DROP TABLE IF EXISTS test_parallel_replicas_settings;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 657', () => {
    const query = `DROP TABLE test_parallel_replicas_settings;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 658', () => {
    const query = `DROP TABLE IF EXISTS format_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 659', () => {
    const query = `DROP TABLE format_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 660', () => {
    const query = `DROP TABLE IF EXISTS test_max_mt_projections_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 661', () => {
    const query = `DROP TABLE IF EXISTS test_max_mt_projections_create;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 662', () => {
    const query = `DROP VIEW parse_mv_eph;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 663', () => {
    const query = `DROP TABLE parsed_eph;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 664', () => {
    const query = `DROP TABLE raw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 665', () => {
    const query = `DROP TABLE t_temp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 666', () => {
    const query = `DROP TABLE test_max_size_drop SETTINGS max_table_size_to_drop = 1; -- { serverError TABLE_SIZE_EXCEEDS_MAX_DROP_SIZE_LIMIT } DROP TABLE test_max_size_drop;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 667', () => {
    const query = `DROP TABLE test_max_size_drop;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 668', () => {
    const query = `drop table if exists from_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 669', () => {
    const query = `drop table from_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 670', () => {
    const query = `drop view mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 671', () => {
    const query = `DROP TABLE IF EXISTS t_lwd_mutations;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 672', () => {
    const query = `DROP TABLE IF EXISTS t_materialize_delete;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 673', () => {
    const query = `DROP TABLE t_materialize_delete;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 674', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_02931;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 675', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 676', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 677', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 678', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 679', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 680', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 681', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 682', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 683', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 684', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 685', () => {
    const query = `DROP DATABASE IF EXISTS test_max_num_to_warn_11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 686', () => {
    const query = `DROP TABLE IF EXISTS pipe;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 687', () => {
    const query = `DROP TABLE IF EXISTS dest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 688', () => {
    const query = `DROP TABLE IF EXISTS 02919_test_table_noarg;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 689', () => {
    const query = `DROP TABLE IF EXISTS 02919_test_table_valid_args;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 690', () => {
    const query = `DROP TABLE IF EXISTS 02919_test_table_reuse_args;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 691', () => {
    const query = `DROP TABLE IF EXISTS 02919_test_table_invalid_col_type;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 692', () => {
    const query = `DROP TABLE IF EXISTS 02919_test_multi_col;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 693', () => {
    const query = `DROP TABLE IF EXISTS crash_02919;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 694', () => {
    const query = `DROP TABLE crash_02919;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 695', () => {
    const query = `DROP TABLE IF EXISTS t_hardware_error NO DELAY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 696', () => {
    const query = `DROP TABLE t_hardware_error NO DELAY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 697', () => {
    const query = `DROP TABLE IF EXISTS alter_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 698', () => {
    const query = `DROP DICTIONARY IF EXISTS id_value_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 699', () => {
    const query = `DROP TABLE IF EXISTS source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 700', () => {
    const query = `DROP TABLE source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 701', () => {
    const query = `DROP TABLE IF EXISTS 02918_parallel_replicas;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 702', () => {
    const query = `DROP TABLE 02918_parallel_replicas;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 703', () => {
    const query = `DROP TABLE IF EXISTS merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 704', () => {
    const query = `DROP TABLE IF EXISTS mt3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 705', () => {
    const query = `DROP NAMED COLLECTION IF EXISTS 02918_json_fuzzer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 706', () => {
    const query = `DROP TABLE IF EXISTS 02918_table_str;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 707', () => {
    const query = `DROP TABLE IF EXISTS 02918_table_obj1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 708', () => {
    const query = `DROP TABLE IF EXISTS 02918_table_obj2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 709', () => {
    const query = `DROP TABLE alter_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 710', () => {
    const query = `DROP VIEW IF EXISTS v1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 711', () => {
    const query = `DROP VIEW v1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 712', () => {
    const query = `drop table tableIn;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 713', () => {
    const query = `drop table tableOut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 714', () => {
    const query = `DROP TABLE IF EXISTS table_02916;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 715', () => {
    const query = `DROP TABLE IF EXISTS table_02916_distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 716', () => {
    const query = `DROP TABLE table_02916_distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 717', () => {
    const query = `DROP TABLE table_02916;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 718', () => {
    const query = `drop table if exists shard_0.from_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 719', () => {
    const query = `drop table if exists shard_1.from_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 720', () => {
    const query = `drop table if exists shard_0.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 721', () => {
    const query = `drop table if exists shard_1.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 722', () => {
    const query = `DROP TABLE IF EXISTS nested_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 723', () => {
    const query = `DROP TABLE nested_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 724', () => {
    const query = `drop table if exists shard_0.from_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 725', () => {
    const query = `drop table if exists shard_1.from_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 726', () => {
    const query = `DROP TABLE IF EXISTS mv SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 727', () => {
    const query = `drop database if exists 02911_support_alias_column_in_indices;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 728', () => {
    const query = `drop database 02911_support_alias_column_in_indices;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 729', () => {
    const query = `DROP ROW POLICY IF EXISTS 02911_rowpolicy ON default.* ON CLUSTER test_shard_localhost;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 730', () => {
    const query = `DROP USER IF EXISTS 02911_user ON CLUSTER test_shard_localhost;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 731', () => {
    const query = `DROP ROW POLICY 02911_rowpolicy ON default.* ON CLUSTER test_shard_localhost;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 732', () => {
    const query = `DROP USER 02911_user ON CLUSTER test_shard_localhost;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 733', () => {
    const query = `DROP TABLE IF EXISTS t1n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 734', () => {
    const query = `DROP TABLE IF EXISTS t2n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 735', () => {
    const query = `drop table t3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 736', () => {
    const query = `drop table if exists tab2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 737', () => {
    const query = `drop table if exists tab3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 738', () => {
    const query = `drop table if exists tab4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 739', () => {
    const query = `drop table if exists tab5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 740', () => {
    const query = `DROP TABLE IF EXISTS index_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 741', () => {
    const query = `drop table index_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 742', () => {
    const query = `drop table if exists prefetched_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 743', () => {
    const query = `DROP TABLE IF EXISTS test02910;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 744', () => {
    const query = `DROP TABLE IF EXISTS test02910_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 745', () => {
    const query = `drop table if exists test_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 746', () => {
    const query = `drop table test_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 747', () => {
    const query = `drop table if exists test_array_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 748', () => {
    const query = `drop table test_array_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 749', () => {
    const query = `DROP TABLE null_02902;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 750', () => {
    const query = `drop table test_02902; `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 751', () => {
    const query = `DROP TABLE IF EXISTS test_apply_deleted_mask;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 752', () => {
    const query = `DROP TABLE test_apply_deleted_mask;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 753', () => {
    const query = `DROP TABLE t1 SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 754', () => {
    const query = `DROP TABLE IF EXISTS 02898_parallel_replicas_final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 755', () => {
    const query = `DROP TABLE 02898_parallel_replicas_final;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 756', () => {
    const query = `DROP TABLE IF EXISTS test3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 757', () => {
    const query = `DROP TABLE IF EXISTS test4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 758', () => {
    const query = `DROP TABLE IF EXISTS test5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 759', () => {
    const query = `DROP TABLE IF EXISTS test6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 760', () => {
    const query = `DROP TABLE IF EXISTS or_bug;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 761', () => {
    const query = `DROP TABLE IF EXISTS forms;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 762', () => {
    const query = `DROP TABLE IF EXISTS t_leading_zeroes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 763', () => {
    const query = `DROP TABLE IF EXISTS t_leading_zeroes_f;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 764', () => {
    const query = `DROP TABLE IF EXISTS foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 765', () => {
    const query = `DROP TABLE IF EXISTS bar;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 766', () => {
    const query = `DROP TABLE IF EXISTS view_without_sample;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 767', () => {
    const query = `DROP TABLE view_without_sample;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 768', () => {
    const query = `drop table if exists nested_smt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 769', () => {
    const query = `drop table nested_smt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 770', () => {
    const query = `DROP TABLE IF EXISTS e;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 771', () => {
    const query = `DROP TABLE e;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 772', () => {
    const query = `drop table if exists tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 773', () => {
    const query = `drop table tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 774', () => {
    const query = `DROP TABLE IF EXISTS t_describe_options;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 775', () => {
    const query = `DROP TABLE t_describe_options;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 776', () => {
    const query = `DROP TABLE IF EXISTS t_parts_columns_filenames;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 777', () => {
    const query = `DROP TABLE IF EXISTS t_mutations_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 778', () => {
    const query = `DROP TABLE t_mutations_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 779', () => {
    const query = `DROP TABLE IF EXISTS quorum1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 780', () => {
    const query = `DROP TABLE IF EXISTS quorum2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 781', () => {
    const query = `DROP TABLE quorum1 NO DELAY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 782', () => {
    const query = `DROP TABLE quorum2 NO DELAY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 783', () => {
    const query = `DROP TABLE IF EXISTS dist_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 784', () => {
    const query = `DROP TABLE IF EXISTS local_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 785', () => {
    const query = `DROP TABLE dist_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 786', () => {
    const query = `DROP TABLE local_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 787', () => {
    const query = `DROP TABLE IF EXISTS test_dup_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 788', () => {
    const query = `DROP TABLE IF EXISTS t_async_insert_skip_settings SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 789', () => {
    const query = `DROP TABLE t_async_insert_skip_settings SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 790', () => {
    const query = `DROP TABLE IF EXISTS t_reverse_order_virt_col;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 791', () => {
    const query = `DROP TABLE my_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 792', () => {
    const query = `DROP TABLE IF EXISTS checksums_r3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 793', () => {
    const query = `DROP TABLE IF EXISTS checksums_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 794', () => {
    const query = `DROP TABLE IF EXISTS checksums_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 795', () => {
    const query = `DROP TABLE IF EXISTS all_valid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 796', () => {
    const query = `DROP TABLE IF EXISTS some_invalid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 797', () => {
    const query = `DROP TABLE all_valid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 798', () => {
    const query = `DROP TABLE some_invalid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 799', () => {
    const query = `DROP TABLE IF EXISTS tt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 800', () => {
    const query = `DROP TABLE tt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 801', () => {
    const query = `DROP TABLE max_length_alias_14053__fuzz_45;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 802', () => {
    const query = `drop table t_json_merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 803', () => {
    const query = `DROP TABLE IF EXISTS table_gcd_codec_one_hundred_zeros;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 804', () => {
    const query = `DROP TABLE IF EXISTS table_gcd_codec_one_hundred_ones;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 805', () => {
    const query = `DROP TABLE table_gcd_codec_one_hundred_zeros;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 806', () => {
    const query = `DROP TABLE table_gcd_codec_one_hundred_ones;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 807', () => {
    const query = `DROP TABLE IF EXISTS t_collisions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 808', () => {
    const query = `drop table test_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 809', () => {
    const query = `drop table if exists test_rewrite_uniq_to_count;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 810', () => {
    const query = `DROP TABLE IF EXISTS tnul SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 811', () => {
    const query = `DROP TABLE IF EXISTS tlc SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 812', () => {
    const query = `DROP TABLE tnul SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 813', () => {
    const query = `DROP TABLE tlc SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 814', () => {
    const query = `DROP USER IF EXISTS test_user_02867;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 815', () => {
    const query = `DROP USER test_user_02867;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 816', () => {
    const query = `DROP TABLE test_skip_idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 817', () => {
    const query = `DROP TABLE IF EXISTS tab SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 818', () => {
    const query = `DROP TABLE IF EXISTS bug_67742;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 819', () => {
    const query = `DROP TABLE bug_67742;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 820', () => {
    const query = `DROP TABLE IF EXISTS random_mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 821', () => {
    const query = `DROP TABLE IF EXISTS Dates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 822', () => {
    const query = `drop table if exists child;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 823', () => {
    const query = `drop table child3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 824', () => {
    const query = `drop table child2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 825', () => {
    const query = `drop table child;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 826', () => {
    const query = `drop table parent;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 827', () => {
    const query = `DROP TABLE IF EXISTS 02863_delayed_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 828', () => {
    const query = `DROP TABLE 02863_delayed_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 829', () => {
    const query = `DROP TABLE IF EXISTS t_uuid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 830', () => {
    const query = `DROP TABLE IF EXISTS t_sparse_distinct;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 831', () => {
    const query = `DROP TABLE t_sparse_distinct;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 832', () => {
    const query = `DROP TABLE IF EXISTS 02861_interpolate;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 833', () => {
    const query = `DROP TABLE 02861_interpolate;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 834', () => {
    const query = `DROP TABLE IF EXISTS set_index__fuzz_41;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 835', () => {
    const query = `drop table dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 836', () => {
    const query = `DROP TABLE IF EXISTS 02845_prewhere;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 837', () => {
    const query = `drop table if exists t02845;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 838', () => {
    const query = `drop table if exists data_01072;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 839', () => {
    const query = `drop table if exists dist_01072;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 840', () => {
    const query = `DROP DICTIONARY IF EXISTS 02843_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 841', () => {
    const query = `DROP TABLE IF EXISTS 02843_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 842', () => {
    const query = `DROP TABLE IF EXISTS 02843_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 843', () => {
    const query = `DROP DICTIONARY 02843_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 844', () => {
    const query = `DROP TABLE 02843_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 845', () => {
    const query = `DROP TABLE 02843_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 846', () => {
    const query = `DROP DATABASE IF EXISTS test_truncate_database;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 847', () => {
    const query = `DROP DATABASE test_truncate_database;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 848', () => {
    const query = `DROP TABLE IF EXISTS t_mutations_nondeterministic SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 849', () => {
    const query = `DROP TABLE t_mutations_nondeterministic SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 850', () => {
    const query = `DROP TABLE IF EXISTS t_02848_mt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 851', () => {
    const query = `DROP TABLE IF EXISTS t_02848_mt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 852', () => {
    const query = `DROP TABLE t_02848_mt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 853', () => {
    const query = `DROP TABLE t_02848_mt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 854', () => {
    const query = `drop table if exists largestTriangleThreeBucketsTestFloat64Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 855', () => {
    const query = `drop table largestTriangleThreeBucketsTestFloat64Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 856', () => {
    const query = `drop table if exists largestTriangleThreeBucketsTestDecimal64Decimal64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 857', () => {
    const query = `drop table largestTriangleThreeBucketsTestDecimal64Decimal64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 858', () => {
    const query = `drop table if exists largestTriangleThreeBucketsTestDateTime64Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 859', () => {
    const query = `drop table largestTriangleThreeBucketsTestDateTime64Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 860', () => {
    const query = `DROP TABLE largestTriangleTreeBucketsBucketSizeTest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 861', () => {
    const query = `DROP TABLE IF EXISTS test_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 862', () => {
    const query = `DROP TABLE tab2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 863', () => {
    const query = `DROP TABLE IF EXISTS test2_d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 864', () => {
    const query = `DROP TABLE IF EXISTS cool_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 865', () => {
    const query = `DROP TABLE IF EXISTS numbers500k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 866', () => {
    const query = `DROP TABLE IF EXISTS t_sparse_sort_limit;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 867', () => {
    const query = `DROP TABLE IF EXISTS nulls_first_sort_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 868', () => {
    const query = `DROP TABLE nulls_first_sort_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 869', () => {
    const query = `DROP TABLE IF EXISTS 02834_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 870', () => {
    const query = `DROP TABLE IF EXISTS alter_02834;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 871', () => {
    const query = `DROP TABLE IF EXISTS t_02833;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 872', () => {
    const query = `DROP TABLE t_02833;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 873', () => {
    const query = `DROP TABLE IF EXISTS series;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 874', () => {
    const query = `DROP TABLE series;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 875', () => {
    const query = `drop table if exists t_tuple_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 876', () => {
    const query = `drop table if exists t_multi_prewhere;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 877', () => {
    const query = `drop row policy if exists policy_02834 on t_multi_prewhere;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 878', () => {
    const query = `drop table if exists test_array_joins;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 879', () => {
    const query = `drop table if exists v4test_array_joins;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 880', () => {
    const query = `drop table if exists t_delete_skip_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 881', () => {
    const query = `drop table if exists t_delete_projection;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 882', () => {
    const query = `DROP TABLE IF EXISTS rdb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 883', () => {
    const query = `DROP DICTIONARY IF EXISTS dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 884', () => {
    const query = `drop table if exists 02815_first_line_vector;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 885', () => {
    const query = `DROP TABLE IF EXISTS null_table_buffer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 886', () => {
    const query = `DROP TABLE IF EXISTS null_mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 887', () => {
    const query = `DROP VIEW IF EXISTS number_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 888', () => {
    const query = `DROP TABLE IF EXISTS tb1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 889', () => {
    const query = `DROP TABLE IF EXISTS tb2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 890', () => {
    const query = `DROP TABLE IF EXISTS pk_test1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 891', () => {
    const query = `DROP TABLE IF EXISTS pk_test2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 892', () => {
    const query = `DROP TABLE IF EXISTS pk_test3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 893', () => {
    const query = `DROP TABLE IF EXISTS pk_test4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 894', () => {
    const query = `DROP TABLE IF EXISTS pk_test5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 895', () => {
    const query = `DROP TABLE IF EXISTS pk_test6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 896', () => {
    const query = `DROP TABLE IF EXISTS pk_test7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 897', () => {
    const query = `DROP TABLE IF EXISTS pk_test8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 898', () => {
    const query = `DROP TABLE IF EXISTS pk_test9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 899', () => {
    const query = `DROP TABLE IF EXISTS pk_test10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 900', () => {
    const query = `DROP TABLE IF EXISTS pk_test11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 901', () => {
    const query = `DROP TABLE IF EXISTS pk_test12;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 902', () => {
    const query = `DROP TABLE IF EXISTS pk_test13;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 903', () => {
    const query = `DROP TABLE IF EXISTS pk_test14;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 904', () => {
    const query = `DROP TABLE IF EXISTS pk_test15;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 905', () => {
    const query = `DROP TABLE IF EXISTS pk_test16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 906', () => {
    const query = `DROP TABLE IF EXISTS pk_test17;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 907', () => {
    const query = `DROP TABLE IF EXISTS pk_test18;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 908', () => {
    const query = `DROP TABLE IF EXISTS pk_test19;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 909', () => {
    const query = `DROP TABLE IF EXISTS pk_test20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 910', () => {
    const query = `DROP TABLE IF EXISTS pk_test21;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 911', () => {
    const query = `DROP TABLE IF EXISTS pk_test22;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 912', () => {
    const query = `DROP TABLE IF EXISTS pk_test23;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 913', () => {
    const query = `DROP DICTIONARY dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 914', () => {
    const query = `DROP TABLE IF EXISTS test_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 915', () => {
    const query = `DROP TABLE IF EXISTS null_in__fuzz_6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 916', () => {
    const query = `DROP TABLE null_in__fuzz_6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 917', () => {
    const query = `DROP TABLE IF EXISTS t_02809;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 918', () => {
    const query = `DROP TABLE t_02809;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 919', () => {
    const query = `DROP TABLE t_02809_set;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 920', () => {
    const query = `DROP TABLE t_02809_aux;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 921', () => {
    const query = `DROP TABLE IF EXISTS t10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 922', () => {
    const query = `DROP TABLE t10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 923', () => {
    const query = `DROP TABLE IF EXISTS numbers_10_00223;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 924', () => {
    const query = `DROP TABLE numbers_10_00223;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 925', () => {
    const query = `DROP TABLE IF EXISTS test_xy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 926', () => {
    const query = `DROP TABLE IF EXISTS updates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 927', () => {
    const query = `DROP TABLE test_xy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 928', () => {
    const query = `DROP TABLE updates;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 929', () => {
    const query = `DROP TABLE IF EXISTS fx_1m;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 930', () => {
    const query = `DROP TABLE IF EXISTS fx_5m;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 931', () => {
    const query = `DROP TABLE fx_5m;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 932', () => {
    const query = `DROP TABLE fx_1m;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 933', () => {
    const query = `DROP TABLE IF EXISTS t_projections_lwd;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 934', () => {
    const query = `DROP TABLE t_projections_lwd;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 935', () => {
    const query = `DROP TABLE t SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 936', () => {
    const query = `DROP TABLE IF EXISTS outer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 937', () => {
    const query = `DROP TABLE IF EXISTS inner;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 938', () => {
    const query = `DROP TABLE IF EXISTS outer_distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 939', () => {
    const query = `DROP TABLE IF EXISTS inner_distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 940', () => {
    const query = `drop table if exists test1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 941', () => {
    const query = `DROP TABLE IF EXISTS session_events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 942', () => {
    const query = `DROP TABLE IF EXISTS event_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 943', () => {
    const query = `DROP TABLE session_events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 944', () => {
    const query = `DROP TABLE event_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 945', () => {
    const query = `DROP TABLE IF EXISTS summing_merge_tree_datetime64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 946', () => {
    const query = `DROP TABLE summing_merge_tree_datetime64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 947', () => {
    const query = `DROP TABLE IF EXISTS test_table__fuzz_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 948', () => {
    const query = `drop table if exists local;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 949', () => {
    const query = `drop table if exists distr;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 950', () => {
    const query = `DROP TABLE IF EXISTS date_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 951', () => {
    const query = `DROP TABLE date_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 952', () => {
    const query = `DROP TABLE IF EXISTS datetime_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 953', () => {
    const query = `DROP TABLE datetime_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 954', () => {
    const query = `DROP TABLE IF EXISTS date32_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 955', () => {
    const query = `DROP TABLE date32_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 956', () => {
    const query = `DROP TABLE IF EXISTS datetime64_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 957', () => {
    const query = `DROP TABLE datetime64_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 958', () => {
    const query = `DROP TABLE IF EXISTS t_02784;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 959', () => {
    const query = `DROP TABLE t_02784;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 960', () => {
    const query = `DROP TABLE IF EXISTS t7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 961', () => {
    const query = `DROP TABLE t7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 962', () => {
    const query = `DROP TABLE t4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 963', () => {
    const query = `DROP DATABASE IF EXISTS test_02771;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 964', () => {
    const query = `DROP TABLE IF EXISTS join_inner_table__fuzz_146_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 965', () => {
    const query = `DROP TABLE join_inner_table__fuzz_146_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 966', () => {
    const query = `DROP TABLE IF EXISTS test_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 967', () => {
    const query = `DROP TABLE test_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 968', () => {
    const query = `DROP TABLE IF EXISTS data_02771;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 969', () => {
    const query = `DROP TABLE data_02771;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 970', () => {
    const query = `DROP TABLE IF EXISTS test_parallel_replicas_unavailable_shards;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 971', () => {
    const query = `DROP TABLE test_parallel_replicas_unavailable_shards;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 972', () => {
    const query = `DROP TABLE IF EXISTS t5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 973', () => {
    const query = `DROP TABLE t5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 974', () => {
    const query = `DROP TABLE IF EXISTS parallel_replicas_plain;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 975', () => {
    const query = `DROP TABLE parallel_replicas_plain;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 976', () => {
    const query = `DROP TABLE IF EXISTS defaults;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 977', () => {
    const query = `DROP TABLE defaults;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 978', () => {
    const query = `DROP TABLE IF EXISTS 02751_query_log_test_partitions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 979', () => {
    const query = `DROP TABLE IF EXISTS test_table_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 980', () => {
    const query = `DROP TABLE IF EXISTS test_table_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 981', () => {
    const query = `DROP TABLE IF EXISTS test_table_complex;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 982', () => {
    const query = `DROP DICTIONARY IF EXISTS test_sparse_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 983', () => {
    const query = `DROP DICTIONARY test_sparse_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 984', () => {
    const query = `DROP DICTIONARY IF EXISTS test_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 985', () => {
    const query = `DROP DICTIONARY test_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 986', () => {
    const query = `DROP DICTIONARY IF EXISTS test_dictionary_load_factor_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 987', () => {
    const query = `DROP DICTIONARY test_dictionary_load_factor_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 988', () => {
    const query = `DROP DICTIONARY IF EXISTS test_complex_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 989', () => {
    const query = `DROP DICTIONARY test_complex_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 990', () => {
    const query = `DROP DICTIONARY IF EXISTS test_dictionary_load_factor_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 991', () => {
    const query = `DROP TABLE test_table_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 992', () => {
    const query = `DROP TABLE test_table_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 993', () => {
    const query = `DROP TABLE test_table_complex;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 994', () => {
    const query = `DROP TABLE IF EXISTS array_jaccard_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 995', () => {
    const query = `DROP TABLE array_jaccard_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 996', () => {
    const query = `DROP TABLE IF EXISTS test_zk_connection_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 997', () => {
    const query = `drop table if exists basic_types_02735;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 998', () => {
    const query = `drop table basic_types_02735;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 999', () => {
    const query = `drop table if exists nullables_02735;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors drop: 1000', () => {
    const query = `drop table nullables_02735;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
