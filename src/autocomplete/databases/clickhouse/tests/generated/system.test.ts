/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[SYSTEM] should pass without errors: 1', () => {
    const query = `SYSTEM FLUSH LOGS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 2', () => {
    const query = `SYSTEM STOP MERGES checks;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 3', () => {
    const query = `SYSTEM FLUSH ASYNC INSERT QUEUE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 4', () => {
    const query = `system stop fetches rep2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 5', () => {
    const query = `system sync replica rep2 pull;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 6', () => {
    const query = `SYSTEM STOP MERGES test__fuzz_22;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 7', () => {
    const query = `SYSTEM SYNC REPLICA test_03217_merge_replica_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 8', () => {
    const query = `system stop merges t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 9', () => {
    const query = `SYSTEM STOP MERGES t_missed_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 10', () => {
    const query = `SYSTEM DROP MARK CACHE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 11', () => {
    const query = `SYSTEM STOP MERGES t_bloom_filter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 12', () => {
    const query = `SYSTEM START MERGES t_bloom_filter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 13', () => {
    const query = `SYSTEM STOP MERGES t_skip_index_insert;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 14', () => {
    const query = `SYSTEM START MERGES t_skip_index_insert;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 15', () => {
    const query = `system enable failpoint replicated_sends_failpoint;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 16', () => {
    const query = `system disable failpoint replicated_sends_failpoint;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 17', () => {
    const query = `system sync replica data_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 18', () => {
    const query = `SYSTEM UNLOAD PRIMARY KEY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 19', () => {
    const query = `SYSTEM SYNC REPLICA combinator_argMin_table_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 20', () => {
    const query = `SYSTEM UNLOAD PRIMARY KEY {CLICKHOUSE_DATABASE:Identifier}.test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 21', () => {
    const query = `SYSTEM UNLOAD PRIMARY KEY {CLICKHOUSE_DATABASE:Identifier}.test2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 22', () => {
    const query = `system stop merges t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 23', () => {
    const query = `system stop merges test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 24', () => {
    const query = `system start merges test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 25', () => {
    const query = `system start merges test; optimize table test final;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 26', () => {
    const query = `SYSTEM STOP MERGES t_lightweight_deletes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 27', () => {
    const query = `SYSTEM STOP MERGES account_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 28', () => {
    const query = `system stop distributed sends dist_in;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 29', () => {
    const query = `system flush distributed dist_in; -- { serverError MEMORY_LIMIT_EXCEEDED } system flush distributed dist_in settings max_memory_usage=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 30', () => {
    const query = `SYSTEM STOP MERGES landing; -- Stopping merges to force 3 parts INSERT INTO landing (status, id, timestamp) SELECT * FROM generateRandom() LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 31', () => {
    const query = `SYSTEM STOP MERGES too_many_parts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 32', () => {
    const query = `SYSTEM STOP MERGES test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 33', () => {
    const query = `SYSTEM RESTART REPLICA test_table_replicated_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 34', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED t_distr;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 35', () => {
    const query = `SYSTEM STOP MERGES t_merge_tree_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 36', () => {
    const query = `system sync replica t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 37', () => {
    const query = `system sync replica t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 38', () => {
    const query = `system sync replica t3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 39', () => {
    const query = `SYSTEM STOP MERGES t_proj_external;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 40', () => {
    const query = `SYSTEM START MERGES t_proj_external;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 41', () => {
    const query = `SYSTEM START MERGES t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 42', () => {
    const query = `system enable failpoint replicated_merge_tree_commit_zk_fail_after_op;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 43', () => {
    const query = `system enable failpoint replicated_merge_tree_commit_zk_fail_when_recovering_from_hw_fault;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 44', () => {
    const query = `system disable failpoint replicated_merge_tree_commit_zk_fail_when_recovering_from_hw_fault;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 45', () => {
    const query = `system sync replica tableOut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 46', () => {
    const query = `system stop merges shard_0.from_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 47', () => {
    const query = `system stop merges shard_1.from_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 48', () => {
    const query = `system sync replica shard_1.from_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 49', () => {
    const query = `system restart replica shard_0.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 50', () => {
    const query = `system sync replica shard_1.to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 51', () => {
    const query = `system sync replica shard_1.from_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 52', () => {
    const query = `SYSTEM ENABLE FAILPOINT prefetched_reader_pool_failpoint;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 53', () => {
    const query = `system stop merges nested_smt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 54', () => {
    const query = `system start merges nested_smt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 55', () => {
    const query = `system enable failpoint replicated_merge_tree_insert_quorum_fail_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 56', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES checksums_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 57', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES checksums_r3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 58', () => {
    const query = `SYSTEM START REPLICATION QUEUES checksums_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 59', () => {
    const query = `SYSTEM SYNC REPLICA checksums_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 60', () => {
    const query = `SYSTEM START REPLICATION QUEUES checksums_r3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 61', () => {
    const query = `SYSTEM SYNC REPLICA checksums_r3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 62', () => {
    const query = `system stop merges data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 63', () => {
    const query = `SYSTEM ENABLE FAILPOINT use_delayed_remote_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 64', () => {
    const query = `SYSTEM DISABLE FAILPOINT use_delayed_remote_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 65', () => {
    const query = `SYSTEM STOP MERGES t_sparse_distinct;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 66', () => {
    const query = `system stop distributed sends dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 67', () => {
    const query = `system flush distributed dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 68', () => {
    const query = `system stop merges test_block_mismatch;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 69', () => {
    const query = `system stop merges test_block_mismatch_sk1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 70', () => {
    const query = `system stop merges test_block_mismatch_sk2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 71', () => {
    const query = `SYSTEM STOP MERGES session_events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 72', () => {
    const query = `SYSTEM STOP MERGES event_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 73', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_sparse_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 74', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 75', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_load_factor_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 76', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_complex_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 77', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_load_factor_string; -- { serverError BAD_ARGUMENTS } DROP DICTIONARY test_dictionary_load_factor_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 78', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_flat_simple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 79', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_Decimal128;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 80', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_Float32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 81', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 82', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_auto_convert;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 83', () => {
    const query = `system stop merges ts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 84', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_sharded;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 85', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_sharded_multi;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 86', () => {
    const query = `SYSTEM DROP COMPILED EXPRESSION CACHE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 87', () => {
    const query = `system disable failpoint replicated_commit_zk_fail_after_op;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 88', () => {
    const query = `SYSTEM STOP MERGES replacing_m3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 89', () => {
    const query = `SYSTEM STOP MERGES 02581_trips;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 90', () => {
    const query = `SYSTEM START MERGES 02581_trips;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 91', () => {
    const query = `system start merges test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 92', () => {
    const query = `SYSTEM STOP MERGES t_sparse_intersect;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 93', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES wrong_metadata;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 94', () => {
    const query = `SYSTEM START REPLICATION QUEUES wrong_metadata;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 95', () => {
    const query = `SYSTEM SYNC REPLICA wrong_metadata;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 96', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES wrong_metadata_wide;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 97', () => {
    const query = `SYSTEM START REPLICATION QUEUES wrong_metadata_wide;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 98', () => {
    const query = `SYSTEM SYNC REPLICA wrong_metadata_wide;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 99', () => {
    const query = `system sync file cache;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 100', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS test_dist_02536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 101', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED test_dist_02536;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 102', () => {
    const query = `system stop merges t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 103', () => {
    const query = `system stop merges t3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 104', () => {
    const query = `system stop merges t4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 105', () => {
    const query = `system stop merges t5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 106', () => {
    const query = `system stop merges t6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 107', () => {
    const query = `system stop merges simple_agg_groupArrayLastArray;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 108', () => {
    const query = `SYSTEM RELOAD dictionary regexp_dict1; -- { serverError INCORRECT_DICTIONARY_DEFINITION  } truncate table regexp_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 109', () => {
    const query = `SYSTEM RELOAD dictionary regexp_dict1; -- { serverError INCORRECT_DICTIONARY_DEFINITION } select * from dictionary(regexp_dict1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 110', () => {
    const query = `SYSTEM SYNC REPLICA wikistat2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 111', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES wikistat2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 112', () => {
    const query = `SYSTEM START REPLICATION QUEUES wikistat2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 113', () => {
    const query = `SYSTEM DROP QUERY CACHE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 114', () => {
    const query = `SYSTEM STOP MERGES t; -- retain multiple parts to make the SELECT process multiple chunks INSERT INTO t values ('abc') ('def') ('ghi') ('jkl');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 115', () => {
    const query = `SYSTEM STOP MERGES t_cache_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 116', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG 'tag';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 117', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 118', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG 'def';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 119', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG 'abc';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 120', () => {
    const query = `SYSTEM RELOAD ASYNCHRONOUS METRICS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 121', () => {
    const query = `SYSTEM SYNC REPLICA testCleanupR1; -- Avoid "Cannot select parts for optimization: Entry for part all_2_2_0 hasn't been read from the replication log yet" OPTIMIZE TABLE testCleanupR1 FINAL CLEANUP;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 122', () => {
    const query = `SYSTEM SYNC REPLICA testSettingsR1; -- Avoid "Cannot select parts for optimization: Entry for part all_2_2_0 hasn't been read from the replication log yet" OPTIMIZE TABLE testSettingsR1 FINAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 123', () => {
    const query = `system restart replica rmt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 124', () => {
    const query = `system stop cleanup rmt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 125', () => {
    const query = `system stop merges rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 126', () => {
    const query = `system sync replica rmt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 127', () => {
    const query = `system sync replica rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 128', () => {
    const query = `system sync replica rmt1 lightweight;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 129', () => {
    const query = `system sync replica rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 130', () => {
    const query = `system stop cleanup rmt3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 131', () => {
    const query = `system sync replica rmt3 pull;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 132', () => {
    const query = `system sync replica rmt2 lightweight;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 133', () => {
    const query = `system stop merges rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 134', () => {
    const query = `system stop cleanup rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 135', () => {
    const query = `system stop replicated sends rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 136', () => {
    const query = `system start merges rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 137', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS dist_02482;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 138', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_02482;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 139', () => {
    const query = `SYSTEM SYNC REPLICA mutation_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 140', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES mutation_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 141', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 142', () => {
    const query = `system sync replica rmt2; -- {serverError TIMEOUT_EXCEEDED} set receive_timeout=300;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 143', () => {
    const query = `system stop replicated sends rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 144', () => {
    const query = `system start replicated sends rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 145', () => {
    const query = `system sync replica rmt1; -- {serverError TIMEOUT_EXCEEDED} set receive_timeout=300;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 146', () => {
    const query = `system stop fetches rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 147', () => {
    const query = `system stop fetches rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 148', () => {
    const query = `system sync replica t1_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 149', () => {
    const query = `system stop merges mut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 150', () => {
    const query = `system sync replica mut pull;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 151', () => {
    const query = `system start merges mut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 152', () => {
    const query = `system sync replica mut;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 153', () => {
    const query = `system sync replica rmt2 pull;  -- does not wait select type, new_part_name from system.replication_queue where database=currentDatabase() and table='rmt2' order by new_part_name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 154', () => {
    const query = `system sync replica rmt1 pull;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 155', () => {
    const query = `system start replicated sends rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 156', () => {
    const query = `system sync replica rmt2 lightweight;   -- waits for fetches, not merges select type, new_part_name from system.replication_queue where database=currentDatabase() and table='rmt2' order by new_part_name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 157', () => {
    const query = `system sync replica rmt2 pull;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 158', () => {
    const query = `system sync replica rmt1 strict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 159', () => {
    const query = `SYSTEM SYNC REPLICA mutate_and_zero_copy_replication2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 160', () => {
    const query = `SYSTEM STOP MERGES tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 161', () => {
    const query = `system sync replica src1 lightweight;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 162', () => {
    const query = `system sync replica dst2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 163', () => {
    const query = `system sync replica src1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 164', () => {
    const query = `SYSTEM STOP MERGES ttl_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 165', () => {
    const query = `SYSTEM START MERGES ttl_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 166', () => {
    const query = `system flush distributed t_l5ydey;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 167', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 168', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 169', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_complex_dictionary_10_shards;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 170', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 171', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards_incremental; -- { serverError BAD_ARGUMENTS } DROP DICTIONARY test_dictionary_10_shards_incremental;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 172', () => {
    const query = `SYSTEM STOP MERGES test_table_join_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 173', () => {
    const query = `SYSTEM STOP MERGES test_table_join_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 174', () => {
    const query = `SYSTEM SYNC REPLICA part_log_profile_events_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 175', () => {
    const query = `SYSTEM STOP FETCHES quorum3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 176', () => {
    const query = `SYSTEM SYNC REPLICA quorum3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 177', () => {
    const query = `SYSTEM STOP FETCHES quorum2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 178', () => {
    const query = `SYSTEM START FETCHES quorum2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 179', () => {
    const query = `SYSTEM SYNC REPLICA quorum2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 180', () => {
    const query = `SYSTEM START FETCHES quorum3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 181', () => {
    const query = `system drop schema cache for file;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 182', () => {
    const query = `SYSTEM STOP MERGES tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 183', () => {
    const query = `system stop merges order;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 184', () => {
    const query = `SYSTEM SYNC REPLICA t_light_sync_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 185', () => {
    const query = `system stop merges dist_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 186', () => {
    const query = `system sync replica t_index_replica;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 187', () => {
    const query = `SYSTEM STOP MERGES t_parts_profile_events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 188', () => {
    const query = `SYSTEM START MERGES t_parts_profile_events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 189', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 190', () => {
    const query = `system sync replica ttl_02265 STRICT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 191', () => {
    const query = `system sync replica ttl_02265_r2 STRICT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 192', () => {
    const query = `SYSTEM DROP FILESYSTEM CACHE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 193', () => {
    const query = `SYSTEM STOP MERGES t_sparse_02235;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 194', () => {
    const query = `SYSTEM STOP MERGES data_02201;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 195', () => {
    const query = `SYSTEM RELOAD DICTIONARIES ON CLUSTER; -- { clientError SYNTAX_ERROR } SYSTEM RELOAD DICTIONARIES ON CLUSTER test_shard_localhost;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 196', () => {
    const query = `SYSTEM STOP MERGES t_read_in_order;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 197', () => {
    const query = `system stop ttl merges ttl_test_02129;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 198', () => {
    const query = `system start ttl merges ttl_test_02129;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 199', () => {
    const query = `SYSTEM SYNC REPLICA insert_dedup_token2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 200', () => {
    const query = `SYSTEM STOP MERGES join_on_disk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 201', () => {
    const query = `SYSTEM STOP MERGES limited_merge_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 202', () => {
    const query = `SYSTEM START MERGES limited_merge_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 203', () => {
    const query = `SYSTEM STOP MERGES t_json_wide_parts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 204', () => {
    const query = `SYSTEM START MERGES t_json_wide_parts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 205', () => {
    const query = `SYSTEM STOP MERGES t_json_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 206', () => {
    const query = `SYSTEM START MERGES t_json_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 207', () => {
    const query = `SYSTEM STOP MERGES t_json;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 208', () => {
    const query = `SYSTEM STOP MERGES type_json_src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 209', () => {
    const query = `SYSTEM STOP MERGES t_json_17;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 210', () => {
    const query = `SYSTEM START MERGES t_json;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 211', () => {
    const query = `SYSTEM STOP MERGES replacing_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 212', () => {
    const query = `SYSTEM START MERGES replacing_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 213', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS dist_01781;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 214', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_01781;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 215', () => {
    const query = `SYSTEM STOP MERGES merge_tree_deduplication;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 216', () => {
    const query = `SYSTEM STOP MERGES t_sparse_full;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 217', () => {
    const query = `SYSTEM START MERGES t_sparse_full;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 218', () => {
    const query = `SYSTEM STOP MERGES t_sparse;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 219', () => {
    const query = `SYSTEM DROP MMAP CACHE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 220', () => {
    const query = `SYSTEM STOP MERGES t_src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 221', () => {
    const query = `SYSTEM STOP MERGES t_dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 222', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_01748.test_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 223', () => {
    const query = `system stop merges data_proj_order_by_incomp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 224', () => {
    const query = `system stop merges data_proj_order_by_comp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 225', () => {
    const query = `system sync replica tp_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 226', () => {
    const query = `system stop merges data_order_by_proj_incomp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 227', () => {
    const query = `system stop merges data_order_by_proj_comp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 228', () => {
    const query = `SYSTEM STOP MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 229', () => {
    const query = `SYSTEM START MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 230', () => {
    const query = `SYSTEM STOP TTL MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 231', () => {
    const query = `SYSTEM START TTL MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 232', () => {
    const query = `SYSTEM STOP MOVES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 233', () => {
    const query = `SYSTEM START MOVES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 234', () => {
    const query = `SYSTEM STOP FETCHES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 235', () => {
    const query = `SYSTEM START FETCHES sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 236', () => {
    const query = `SYSTEM STOP REPLICATED SENDS sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 237', () => {
    const query = `SYSTEM START REPLICATED SENDS sqllt.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 238', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_01683;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 239', () => {
    const query = `system stop distributed sends dist_01670;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 240', () => {
    const query = `SYSTEM SYNC REPLICA test_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 241', () => {
    const query = `SYSTEM STOP MERGES data_01660;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 242', () => {
    const query = `SYSTEM START MERGES data_01660;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 243', () => {
    const query = `SYSTEM STOP MERGES partitioned_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 244', () => {
    const query = `SYSTEM RESTART REPLICAS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 245', () => {
    const query = `system stop distributed sends dist_01643;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 246', () => {
    const query = `system flush distributed dist_01643;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 247', () => {
    const query = `system sync replica rep_fsync_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 248', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 249', () => {
    const query = `SYSTEM STOP merges wide_to_comp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 250', () => {
    const query = `SYSTEM START merges wide_to_comp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 251', () => {
    const query = `SYSTEM STOP MERGES skip_idx_comp_parts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 252', () => {
    const query = `SYSTEM START MERGES skip_idx_comp_parts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 253', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED realtimedistributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 254', () => {
    const query = `SYSTEM SYNC REPLICA replicated_deduplicate_by_columns_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 255', () => {
    const query = `SYSTEM SYNC REPLICA replicated_deduplicate_by_columns_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 256', () => {
    const query = `system stop merges order_by_const;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 257', () => {
    const query = `SYSTEM SYNC REPLICA empty1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 258', () => {
    const query = `system stop distributed sends dist_01555;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 259', () => {
    const query = `system flush distributed dist_01555; -- { serverError AUTHENTICATION_FAILED } select length(splitByChar('*', data_path)), replaceRegexpOne(data_path, '^.*/([^/]*)/' , '\\\\1'), extract(last_exception, 'AUTHENTICATION_FAILED'), dateDiff('s', last_exception_time, now()) < 3600 from system.distribution_queue where database = currentDatabase() and table = 'dist_01555' format CSV;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 260', () => {
    const query = `system flush distributed dist_01555;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 261', () => {
    const query = `SYSTEM SYNC REPLICA execute_on_single_replica_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 262', () => {
    const query = `SYSTEM SYNC REPLICA execute_on_single_replica_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 263', () => {
    const query = `system reload dictionary db_01527_ranges.dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 264', () => {
    const query = `SYSTEM STOP FETCHES quorum1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 265', () => {
    const query = `SYSTEM SYNC REPLICA table_with_version_replicated_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 266', () => {
    const query = `SYSTEM SYNC REPLICA r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 267', () => {
    const query = `SYSTEM STOP FETCHES r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 268', () => {
    const query = `SYSTEM START FETCHES r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 269', () => {
    const query = `system reload dictionaries;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 270', () => {
    const query = `SYSTEM SYNC REPLICA r_prop_table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 271', () => {
    const query = `SYSTEM SYNC REPLICA r_prop_table1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 272', () => {
    const query = `SYSTEM STOP TTL MERGES prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 273', () => {
    const query = `SYSTEM START TTL MERGES prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 274', () => {
    const query = `SYSTEM STOP TTL MERGES recompression_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 275', () => {
    const query = `SYSTEM START TTL MERGES recompression_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 276', () => {
    const query = `SYSTEM STOP TTL MERGES recompression_table_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 277', () => {
    const query = `SYSTEM SYNC REPLICA replica2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 278', () => {
    const query = `SYSTEM SYNC REPLICA replica1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 279', () => {
    const query = `SYSTEM STOP MERGES mt_01451;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 280', () => {
    const query = `SYSTEM START MERGES mt_01451;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 281', () => {
    const query = `SYSTEM STOP MERGES tt_01373;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 282', () => {
    const query = `SYSTEM START MERGES tt_01373;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 283', () => {
    const query = `SYSTEM SYNC REPLICA test2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 284', () => {
    const query = `SYSTEM STOP REPLICATED SENDS r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 285', () => {
    const query = `SYSTEM STOP REPLICATED SENDS r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 286', () => {
    const query = `SYSTEM START REPLICATED SENDS r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 287', () => {
    const query = `SYSTEM START REPLICATED SENDS r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 288', () => {
    const query = `SYSTEM SYNC REPLICA r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 289', () => {
    const query = `system flush distributed db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 290', () => {
    const query = `system flush distributed on cluster test_shard_localhost db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 291', () => {
    const query = `system stop distributed sends db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 292', () => {
    const query = `system stop distributed sends on cluster test_shard_localhost db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 293', () => {
    const query = `system start distributed sends db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 294', () => {
    const query = `system start distributed sends on cluster test_shard_localhost db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 295', () => {
    const query = `system stop distributed sends dist_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 296', () => {
    const query = `system flush distributed dist_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 297', () => {
    const query = `system start distributed sends dist_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 298', () => {
    const query = `SYSTEM STOP MERGES ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 299', () => {
    const query = `SYSTEM START MERGES ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 300', () => {
    const query = `SYSTEM RESTART REPLICA test_alter_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 301', () => {
    const query = `SYSTEM RESTART REPLICA test_alter_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 302', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dict_db.table1_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 303', () => {
    const query = `system stop merges txn_counters;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 304', () => {
    const query = `system sync replica test_1164_memory.r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 305', () => {
    const query = `system sync replica test_1164_memory.r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 306', () => {
    const query = `system stop distributed sends buf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 307', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED  dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 308', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED demo_loan_01568_dist;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 309', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS distributed_01099_b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 310', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED distributed_01099_b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 311', () => {
    const query = `SYSTEM STOP MERGES table_with_defaults_on_aliases;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 312', () => {
    const query = `SYSTEM DROP DNS CACHE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 313', () => {
    const query = `SYSTEM STOP MERGES target_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 314', () => {
    const query = `SYSTEM STOP MERGES checkouts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 315', () => {
    const query = `SYSTEM STOP MERGES logins;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 316', () => {
    const query = `SYSTEM SYNC REPLICA table_for_synchronous_mutations2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 317', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_test_01040;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 318', () => {
    const query = `SYSTEM RELOAD DICTIONARY \`foo 1234\`.dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 319', () => {
    const query = `SYSTEM RELOAD DICTIONARY {CLICKHOUSE_DATABASE:Identifier}.dict3; -- {serverError UNKNOWN_TABLE} SELECT dictGetString({CLICKHOUSE_DATABASE:String} || '.dict3', 'some_column', toUInt64(12));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 320', () => {
    const query = `SYSTEM STOP MERGES mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 321', () => {
    const query = `SYSTEM START MERGES mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 322', () => {
    const query = `SYSTEM SYNC REPLICA replicated_constraints1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 323', () => {
    const query = `SYSTEM SYNC REPLICA replicated_constraints2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 324', () => {
    const query = `SYSTEM SYNC REPLICA replicated_table_for_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 325', () => {
    const query = `SYSTEM SYNC REPLICA replicated_table_for_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 326', () => {
    const query = `system stop ttl merges ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 327', () => {
    const query = `system start ttl merges ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 328', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED distributed_00952;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 329', () => {
    const query = `SYSTEM SYNC REPLICA zero_rows_per_granule2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 330', () => {
    const query = `SYSTEM SYNC REPLICA zero_rows_per_granule1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 331', () => {
    const query = `SYSTEM SYNC REPLICA four_rows_per_granule2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 332', () => {
    const query = `SYSTEM SYNC REPLICA four_rows_per_granule1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 333', () => {
    const query = `SYSTEM SYNC REPLICA adaptive_granularity_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 334', () => {
    const query = `SYSTEM SYNC REPLICA adaptive_granularity_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 335', () => {
    const query = `SYSTEM SYNC REPLICA alter_compression_codec2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 336', () => {
    const query = `SYSTEM SYNC REPLICA alter_compression_codec1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 337', () => {
    const query = `SYSTEM SYNC REPLICA compression_codec_replicated2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 338', () => {
    const query = `SYSTEM SYNC REPLICA compression_codec_multiple_replicated1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 339', () => {
    const query = `SYSTEM SYNC REPLICA compression_codec_multiple_replicated2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 340', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx_r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 341', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 342', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 343', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx2_r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 344', () => {
    const query = `SYSTEM SYNC REPLICA summing_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 345', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS check_system_tables;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 346', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED check_system_tables;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 347', () => {
    const query = `SYSTEM SYNC REPLICA replicated_table_detach_all2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 348', () => {
    const query = `SYSTEM STOP MERGES sites;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 349', () => {
    const query = `SYSTEM START MERGES sites;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 350', () => {
    const query = `SYSTEM START FETCHES quorum1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 351', () => {
    const query = `SYSTEM SYNC REPLICA quorum1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 352', () => {
    const query = `SYSTEM SYNC REPLICA byte_identical_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 353', () => {
    const query = `SYSTEM SYNC REPLICA byte_identical_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 354', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_tuple_replica2_00661;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 355', () => {
    const query = `SYSTEM SYNC REPLICA cast2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 356', () => {
    const query = `SYSTEM STOP MERGES dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 357', () => {
    const query = `SYSTEM START MERGES dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 358', () => {
    const query = `SYSTEM SYNC REPLICA replicated_truncate2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 359', () => {
    const query = `SYSTEM SYNC REPLICA rename1 PULL; -- Avoid "Cannot select parts for optimization: Entry for part 0_1_1_0 hasn't been read from the replication log yet" SYSTEM SYNC REPLICA rename2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 360', () => {
    const query = `SYSTEM SYNC REPLICA rename3; -- Make "rename3" to see all data parts. OPTIMIZE TABLE rename3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 361', () => {
    const query = `SYSTEM SYNC REPLICA rename1; -- Make "rename1" to see and process all scheduled merges. SELECT * FROM rename1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 362', () => {
    const query = `SYSTEM SYNC REPLICA replicated_collapsing PULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 363', () => {
    const query = `SYSTEM SYNC REPLICA replicated_versioned_collapsing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 364', () => {
    const query = `SYSTEM SYNC REPLICA not_partitioned_replica1_00502 PULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 365', () => {
    const query = `SYSTEM SYNC REPLICA not_partitioned_replica2_00502;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 366', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_week_replica1 PULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 367', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_week_replica2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 368', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_tuple_replica1_00502 PULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 369', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_tuple_replica2_00502;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 370', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_string_replica1 PULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 371', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_string_replica2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 372', () => {
    const query = `SYSTEM SYNC REPLICA without_fixed_size_columns_replica1 PULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 373', () => {
    const query = `SYSTEM SYNC REPLICA without_fixed_size_columns_replica2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SYSTEM] should pass without errors: 374', () => {
    const query = `SYSTEM SYNC REPLICA clear_column2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
