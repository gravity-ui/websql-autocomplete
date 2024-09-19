/* no-irregular-whitespace: "off" */
/* eslint no-useless-escape: "off" */
import {parseClickHouseQuery} from '../../index';

test('should pass without errors system: 1', () => {
    const query = `SYSTEM FLUSH LOGS;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 2', () => {
    const query = `SYSTEM STOP MERGES checks;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 3', () => {
    const query = `SYSTEM FLUSH ASYNC INSERT QUEUE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 4', () => {
    const query = `system stop fetches rep2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 5', () => {
    const query = `system sync replica rep2 pull;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 6', () => {
    const query = `SYSTEM STOP MERGES test__fuzz_22;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 7', () => {
    const query = `SYSTEM SYNC REPLICA test_03217_merge_replica_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 8', () => {
    const query = `system stop merges t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 9', () => {
    const query = `SYSTEM STOP MERGES t_missed_subcolumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 10', () => {
    const query = `SYSTEM DROP MARK CACHE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 11', () => {
    const query = `SYSTEM STOP MERGES t_bloom_filter;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 12', () => {
    const query = `SYSTEM START MERGES t_bloom_filter;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 13', () => {
    const query = `SYSTEM STOP MERGES t_skip_index_insert;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 14', () => {
    const query = `SYSTEM START MERGES t_skip_index_insert;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 15', () => {
    const query = `system enable failpoint replicated_sends_failpoint;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 16', () => {
    const query = `system disable failpoint replicated_sends_failpoint;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 17', () => {
    const query = `system sync replica data_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 18', () => {
    const query = `SYSTEM UNLOAD PRIMARY KEY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 19', () => {
    const query = `SYSTEM SYNC REPLICA combinator_argMin_table_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 20', () => {
    const query = `SYSTEM UNLOAD PRIMARY KEY {CLICKHOUSE_DATABASE:Identifier}.test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 21', () => {
    const query = `SYSTEM UNLOAD PRIMARY KEY {CLICKHOUSE_DATABASE:Identifier}.test2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 22', () => {
    const query = `system stop merges t2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 23', () => {
    const query = `system stop merges test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 24', () => {
    const query = `system start merges test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 25', () => {
    const query = `system start merges test; optimize table test final;;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 26', () => {
    const query = `SYSTEM STOP MERGES t_lightweight_deletes;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 27', () => {
    const query = `SYSTEM STOP MERGES account_test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 28', () => {
    const query = `system stop distributed sends dist_in;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 29', () => {
    const query = `system flush distributed dist_in; -- { serverError MEMORY_LIMIT_EXCEEDED } system flush distributed dist_in settings max_memory_usage=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 30', () => {
    const query = `SYSTEM STOP MERGES landing; -- Stopping merges to force 3 parts INSERT INTO landing (status, id, timestamp) SELECT * FROM generateRandom() LIMIT 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 31', () => {
    const query = `SYSTEM STOP MERGES too_many_parts;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 32', () => {
    const query = `SYSTEM STOP MERGES test_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 33', () => {
    const query = `SYSTEM RESTART REPLICA test_table_replicated_second;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 34', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED t_distr;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 35', () => {
    const query = `SYSTEM STOP MERGES t_merge_tree_index;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 36', () => {
    const query = `system sync replica t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 37', () => {
    const query = `system sync replica t2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 38', () => {
    const query = `system sync replica t3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 39', () => {
    const query = `SYSTEM STOP MERGES t_proj_external;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 40', () => {
    const query = `SYSTEM START MERGES t_proj_external;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 41', () => {
    const query = `SYSTEM START MERGES t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 42', () => {
    const query = `system enable failpoint replicated_merge_tree_commit_zk_fail_after_op;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 43', () => {
    const query = `system enable failpoint replicated_merge_tree_commit_zk_fail_when_recovering_from_hw_fault;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 44', () => {
    const query = `system disable failpoint replicated_merge_tree_commit_zk_fail_when_recovering_from_hw_fault;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 45', () => {
    const query = `system sync replica tableOut;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 46', () => {
    const query = `system stop merges shard_0.from_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 47', () => {
    const query = `system stop merges shard_1.from_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 48', () => {
    const query = `system sync replica shard_1.from_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 49', () => {
    const query = `system restart replica shard_0.to;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 50', () => {
    const query = `system sync replica shard_1.to;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 51', () => {
    const query = `system sync replica shard_1.from_0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 52', () => {
    const query = `SYSTEM ENABLE FAILPOINT prefetched_reader_pool_failpoint;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 53', () => {
    const query = `system stop merges nested_smt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 54', () => {
    const query = `system start merges nested_smt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 55', () => {
    const query = `system enable failpoint replicated_merge_tree_insert_quorum_fail_0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 56', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES checksums_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 57', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES checksums_r3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 58', () => {
    const query = `SYSTEM START REPLICATION QUEUES checksums_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 59', () => {
    const query = `SYSTEM SYNC REPLICA checksums_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 60', () => {
    const query = `SYSTEM START REPLICATION QUEUES checksums_r3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 61', () => {
    const query = `SYSTEM SYNC REPLICA checksums_r3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 62', () => {
    const query = `system stop merges data;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 63', () => {
    const query = `SYSTEM ENABLE FAILPOINT use_delayed_remote_source;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 64', () => {
    const query = `SYSTEM DISABLE FAILPOINT use_delayed_remote_source;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 65', () => {
    const query = `SYSTEM STOP MERGES t_sparse_distinct;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 66', () => {
    const query = `system stop distributed sends dist;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 67', () => {
    const query = `system flush distributed dist;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 68', () => {
    const query = `system stop merges test_block_mismatch;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 69', () => {
    const query = `system stop merges test_block_mismatch_sk1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 70', () => {
    const query = `system stop merges test_block_mismatch_sk2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 71', () => {
    const query = `SYSTEM STOP MERGES session_events;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 72', () => {
    const query = `SYSTEM STOP MERGES event_types;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 73', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_sparse_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 74', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 75', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_load_factor_nullable;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 76', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_complex_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 77', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_load_factor_string; -- { serverError BAD_ARGUMENTS } DROP DICTIONARY test_dictionary_load_factor_string;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 78', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_flat_simple;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 79', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_Decimal128;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 80', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_Float32;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 81', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_String;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 82', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_hashed_simple_auto_convert;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 83', () => {
    const query = `system stop merges ts;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 84', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_sharded;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 85', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict_sharded_multi;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 86', () => {
    const query = `SYSTEM DROP COMPILED EXPRESSION CACHE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 87', () => {
    const query = `system disable failpoint replicated_commit_zk_fail_after_op;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 88', () => {
    const query = `SYSTEM STOP MERGES replacing_m3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 89', () => {
    const query = `SYSTEM STOP MERGES 02581_trips;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 90', () => {
    const query = `SYSTEM START MERGES 02581_trips;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 91', () => {
    const query = `system start merges test_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 92', () => {
    const query = `SYSTEM STOP MERGES t_sparse_intersect;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 93', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES wrong_metadata;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 94', () => {
    const query = `SYSTEM START REPLICATION QUEUES wrong_metadata;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 95', () => {
    const query = `SYSTEM SYNC REPLICA wrong_metadata;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 96', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES wrong_metadata_wide;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 97', () => {
    const query = `SYSTEM START REPLICATION QUEUES wrong_metadata_wide;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 98', () => {
    const query = `SYSTEM SYNC REPLICA wrong_metadata_wide;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 99', () => {
    const query = `system sync file cache;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 100', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS test_dist_02536;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 101', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED test_dist_02536;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 102', () => {
    const query = `system stop merges t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 103', () => {
    const query = `system stop merges t3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 104', () => {
    const query = `system stop merges t4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 105', () => {
    const query = `system stop merges t5;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 106', () => {
    const query = `system stop merges t6;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 107', () => {
    const query = `system stop merges simple_agg_groupArrayLastArray;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 108', () => {
    const query = `SYSTEM RELOAD dictionary regexp_dict1; -- { serverError INCORRECT_DICTIONARY_DEFINITION  } truncate table regexp_dictionary_source_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 109', () => {
    const query = `SYSTEM RELOAD dictionary regexp_dict1; -- { serverError INCORRECT_DICTIONARY_DEFINITION } select * from dictionary(regexp_dict1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 110', () => {
    const query = `SYSTEM SYNC REPLICA wikistat2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 111', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES wikistat2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 112', () => {
    const query = `SYSTEM START REPLICATION QUEUES wikistat2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 113', () => {
    const query = `SYSTEM DROP QUERY CACHE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 114', () => {
    const query = `SYSTEM STOP MERGES t; -- retain multiple parts to make the SELECT process multiple chunks INSERT INTO t values ('abc') ('def') ('ghi') ('jkl');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 115', () => {
    const query = `SYSTEM STOP MERGES t_cache_sparse;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 116', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG 'tag';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 117', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG '';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 118', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG 'def';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 119', () => {
    const query = `SYSTEM DROP QUERY CACHE TAG 'abc';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 120', () => {
    const query = `SYSTEM RELOAD ASYNCHRONOUS METRICS;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 121', () => {
    const query = `SYSTEM SYNC REPLICA testCleanupR1; -- Avoid "Cannot select parts for optimization: Entry for part all_2_2_0 hasn't been read from the replication log yet" OPTIMIZE TABLE testCleanupR1 FINAL CLEANUP;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 122', () => {
    const query = `SYSTEM SYNC REPLICA testSettingsR1; -- Avoid "Cannot select parts for optimization: Entry for part all_2_2_0 hasn't been read from the replication log yet" OPTIMIZE TABLE testSettingsR1 FINAL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 123', () => {
    const query = `system restart replica rmt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 124', () => {
    const query = `system stop cleanup rmt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 125', () => {
    const query = `system stop merges rmt1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 126', () => {
    const query = `system sync replica rmt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 127', () => {
    const query = `system sync replica rmt1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 128', () => {
    const query = `system sync replica rmt1 lightweight;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 129', () => {
    const query = `system sync replica rmt2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 130', () => {
    const query = `system stop cleanup rmt3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 131', () => {
    const query = `system sync replica rmt3 pull;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 132', () => {
    const query = `system sync replica rmt2 lightweight;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 133', () => {
    const query = `system stop merges rmt2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 134', () => {
    const query = `system stop cleanup rmt1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 135', () => {
    const query = `system stop replicated sends rmt1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 136', () => {
    const query = `system start merges rmt2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 137', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS dist_02482;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 138', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_02482;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 139', () => {
    const query = `SYSTEM SYNC REPLICA mutation_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 140', () => {
    const query = `SYSTEM STOP REPLICATION QUEUES mutation_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 141', () => {
    const query = `SYSTEM RELOAD DICTIONARY dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 142', () => {
    const query = `system sync replica rmt2; -- {serverError TIMEOUT_EXCEEDED} set receive_timeout=300;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 143', () => {
    const query = `system stop replicated sends rmt2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 144', () => {
    const query = `system start replicated sends rmt2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 145', () => {
    const query = `system sync replica rmt1; -- {serverError TIMEOUT_EXCEEDED} set receive_timeout=300;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 146', () => {
    const query = `system stop fetches rmt1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 147', () => {
    const query = `system stop fetches rmt2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 148', () => {
    const query = `system sync replica t1_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 149', () => {
    const query = `system stop merges mut;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 150', () => {
    const query = `system sync replica mut pull;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 151', () => {
    const query = `system start merges mut;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 152', () => {
    const query = `system sync replica mut;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 153', () => {
    const query = `system sync replica rmt2 pull;  -- does not wait select type, new_part_name from system.replication_queue where database=currentDatabase() and table='rmt2' order by new_part_name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 154', () => {
    const query = `system sync replica rmt1 pull;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 155', () => {
    const query = `system start replicated sends rmt1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 156', () => {
    const query = `system sync replica rmt2 lightweight;   -- waits for fetches, not merges select type, new_part_name from system.replication_queue where database=currentDatabase() and table='rmt2' order by new_part_name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 157', () => {
    const query = `system sync replica rmt2 pull;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 158', () => {
    const query = `system sync replica rmt1 strict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 159', () => {
    const query = `SYSTEM SYNC REPLICA mutate_and_zero_copy_replication2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 160', () => {
    const query = `SYSTEM STOP MERGES tbl;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 161', () => {
    const query = `system sync replica src1 lightweight;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 162', () => {
    const query = `system sync replica dst2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 163', () => {
    const query = `system sync replica src1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 164', () => {
    const query = `SYSTEM STOP MERGES ttl_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 165', () => {
    const query = `SYSTEM START MERGES ttl_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 166', () => {
    const query = `system flush distributed t_l5ydey;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 167', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 168', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards_nullable;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 169', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_complex_dictionary_10_shards;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 170', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards_string;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 171', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary_10_shards_incremental; -- { serverError BAD_ARGUMENTS } DROP DICTIONARY test_dictionary_10_shards_incremental;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 172', () => {
    const query = `SYSTEM STOP MERGES test_table_join_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 173', () => {
    const query = `SYSTEM STOP MERGES test_table_join_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 174', () => {
    const query = `SYSTEM SYNC REPLICA part_log_profile_events_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 175', () => {
    const query = `SYSTEM STOP FETCHES quorum3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 176', () => {
    const query = `SYSTEM SYNC REPLICA quorum3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 177', () => {
    const query = `SYSTEM STOP FETCHES quorum2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 178', () => {
    const query = `SYSTEM START FETCHES quorum2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 179', () => {
    const query = `SYSTEM SYNC REPLICA quorum2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 180', () => {
    const query = `SYSTEM START FETCHES quorum3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 181', () => {
    const query = `system drop schema cache for file;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 182', () => {
    const query = `SYSTEM STOP MERGES tab;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 183', () => {
    const query = `system stop merges order;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 184', () => {
    const query = `SYSTEM SYNC REPLICA t_light_sync_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 185', () => {
    const query = `system stop merges dist_t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 186', () => {
    const query = `system sync replica t_index_replica;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 187', () => {
    const query = `SYSTEM STOP MERGES t_parts_profile_events;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 188', () => {
    const query = `SYSTEM START MERGES t_parts_profile_events;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 189', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dictionary;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 190', () => {
    const query = `system sync replica ttl_02265 STRICT;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 191', () => {
    const query = `system sync replica ttl_02265_r2 STRICT;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 192', () => {
    const query = `SYSTEM DROP FILESYSTEM CACHE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 193', () => {
    const query = `SYSTEM STOP MERGES t_sparse_02235;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 194', () => {
    const query = `SYSTEM STOP MERGES data_02201;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 195', () => {
    const query = `SYSTEM RELOAD DICTIONARIES ON CLUSTER; -- { clientError SYNTAX_ERROR } SYSTEM RELOAD DICTIONARIES ON CLUSTER test_shard_localhost;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 196', () => {
    const query = `SYSTEM STOP MERGES t_read_in_order;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 197', () => {
    const query = `system stop ttl merges ttl_test_02129;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 198', () => {
    const query = `system start ttl merges ttl_test_02129;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 199', () => {
    const query = `SYSTEM SYNC REPLICA insert_dedup_token2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 200', () => {
    const query = `SYSTEM STOP MERGES join_on_disk;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 201', () => {
    const query = `SYSTEM STOP MERGES limited_merge_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 202', () => {
    const query = `SYSTEM START MERGES limited_merge_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 203', () => {
    const query = `SYSTEM STOP MERGES t_json_wide_parts;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 204', () => {
    const query = `SYSTEM START MERGES t_json_wide_parts;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 205', () => {
    const query = `SYSTEM STOP MERGES t_json_sparse;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 206', () => {
    const query = `SYSTEM START MERGES t_json_sparse;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 207', () => {
    const query = `SYSTEM STOP MERGES t_json;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 208', () => {
    const query = `SYSTEM STOP MERGES type_json_src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 209', () => {
    const query = `SYSTEM STOP MERGES t_json_17;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 210', () => {
    const query = `SYSTEM START MERGES t_json;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 211', () => {
    const query = `SYSTEM STOP MERGES replacing_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 212', () => {
    const query = `SYSTEM START MERGES replacing_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 213', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS dist_01781;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 214', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_01781;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 215', () => {
    const query = `SYSTEM STOP MERGES merge_tree_deduplication;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 216', () => {
    const query = `SYSTEM STOP MERGES t_sparse_full;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 217', () => {
    const query = `SYSTEM START MERGES t_sparse_full;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 218', () => {
    const query = `SYSTEM STOP MERGES t_sparse;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 219', () => {
    const query = `SYSTEM DROP MMAP CACHE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 220', () => {
    const query = `SYSTEM STOP MERGES t_src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 221', () => {
    const query = `SYSTEM STOP MERGES t_dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 222', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_01748.test_dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 223', () => {
    const query = `system stop merges data_proj_order_by_incomp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 224', () => {
    const query = `system stop merges data_proj_order_by_comp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 225', () => {
    const query = `system sync replica tp_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 226', () => {
    const query = `system stop merges data_order_by_proj_incomp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 227', () => {
    const query = `system stop merges data_order_by_proj_comp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 228', () => {
    const query = `SYSTEM STOP MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 229', () => {
    const query = `SYSTEM START MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 230', () => {
    const query = `SYSTEM STOP TTL MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 231', () => {
    const query = `SYSTEM START TTL MERGES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 232', () => {
    const query = `SYSTEM STOP MOVES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 233', () => {
    const query = `SYSTEM START MOVES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 234', () => {
    const query = `SYSTEM STOP FETCHES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 235', () => {
    const query = `SYSTEM START FETCHES sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 236', () => {
    const query = `SYSTEM STOP REPLICATED SENDS sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 237', () => {
    const query = `SYSTEM START REPLICATED SENDS sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 238', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_01683;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 239', () => {
    const query = `system stop distributed sends dist_01670;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 240', () => {
    const query = `SYSTEM SYNC REPLICA test_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 241', () => {
    const query = `SYSTEM STOP MERGES data_01660;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 242', () => {
    const query = `SYSTEM START MERGES data_01660;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 243', () => {
    const query = `SYSTEM STOP MERGES partitioned_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 244', () => {
    const query = `SYSTEM RESTART REPLICAS;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 245', () => {
    const query = `system stop distributed sends dist_01643;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 246', () => {
    const query = `system flush distributed dist_01643;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 247', () => {
    const query = `system sync replica rep_fsync_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 248', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED distributed;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 249', () => {
    const query = `SYSTEM STOP merges wide_to_comp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 250', () => {
    const query = `SYSTEM START merges wide_to_comp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 251', () => {
    const query = `SYSTEM STOP MERGES skip_idx_comp_parts;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 252', () => {
    const query = `SYSTEM START MERGES skip_idx_comp_parts;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 253', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED realtimedistributed;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 254', () => {
    const query = `SYSTEM SYNC REPLICA replicated_deduplicate_by_columns_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 255', () => {
    const query = `SYSTEM SYNC REPLICA replicated_deduplicate_by_columns_r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 256', () => {
    const query = `system stop merges order_by_const;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 257', () => {
    const query = `SYSTEM SYNC REPLICA empty1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 258', () => {
    const query = `system stop distributed sends dist_01555;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 259', () => {
    const query = `system flush distributed dist_01555; -- { serverError AUTHENTICATION_FAILED } select length(splitByChar('*', data_path)), replaceRegexpOne(data_path, '^.*/([^/]*)/' , '\\\\1'), extract(last_exception, 'AUTHENTICATION_FAILED'), dateDiff('s', last_exception_time, now()) < 3600 from system.distribution_queue where database = currentDatabase() and table = 'dist_01555' format CSV;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 260', () => {
    const query = `system flush distributed dist_01555;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 261', () => {
    const query = `SYSTEM SYNC REPLICA execute_on_single_replica_r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 262', () => {
    const query = `SYSTEM SYNC REPLICA execute_on_single_replica_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 263', () => {
    const query = `system reload dictionary db_01527_ranges.dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 264', () => {
    const query = `SYSTEM STOP FETCHES quorum1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 265', () => {
    const query = `SYSTEM SYNC REPLICA table_with_version_replicated_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 266', () => {
    const query = `SYSTEM SYNC REPLICA r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 267', () => {
    const query = `SYSTEM STOP FETCHES r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 268', () => {
    const query = `SYSTEM START FETCHES r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 269', () => {
    const query = `system reload dictionaries;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 270', () => {
    const query = `SYSTEM SYNC REPLICA r_prop_table2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 271', () => {
    const query = `SYSTEM SYNC REPLICA r_prop_table1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 272', () => {
    const query = `SYSTEM STOP TTL MERGES prop_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 273', () => {
    const query = `SYSTEM START TTL MERGES prop_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 274', () => {
    const query = `SYSTEM STOP TTL MERGES recompression_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 275', () => {
    const query = `SYSTEM START TTL MERGES recompression_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 276', () => {
    const query = `SYSTEM STOP TTL MERGES recompression_table_compact;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 277', () => {
    const query = `SYSTEM SYNC REPLICA replica2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 278', () => {
    const query = `SYSTEM SYNC REPLICA replica1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 279', () => {
    const query = `SYSTEM STOP MERGES mt_01451;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 280', () => {
    const query = `SYSTEM START MERGES mt_01451;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 281', () => {
    const query = `SYSTEM STOP MERGES tt_01373;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 282', () => {
    const query = `SYSTEM START MERGES tt_01373;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 283', () => {
    const query = `SYSTEM SYNC REPLICA test2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 284', () => {
    const query = `SYSTEM STOP REPLICATED SENDS r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 285', () => {
    const query = `SYSTEM STOP REPLICATED SENDS r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 286', () => {
    const query = `SYSTEM START REPLICATED SENDS r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 287', () => {
    const query = `SYSTEM START REPLICATED SENDS r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 288', () => {
    const query = `SYSTEM SYNC REPLICA r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 289', () => {
    const query = `system flush distributed db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 290', () => {
    const query = `system flush distributed on cluster test_shard_localhost db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 291', () => {
    const query = `system stop distributed sends db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 292', () => {
    const query = `system stop distributed sends on cluster test_shard_localhost db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 293', () => {
    const query = `system start distributed sends db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 294', () => {
    const query = `system start distributed sends on cluster test_shard_localhost db_01294.dist_01294;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 295', () => {
    const query = `system stop distributed sends dist_01293;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 296', () => {
    const query = `system flush distributed dist_01293;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 297', () => {
    const query = `system start distributed sends dist_01293;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 298', () => {
    const query = `SYSTEM STOP MERGES ttl;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 299', () => {
    const query = `SYSTEM START MERGES ttl;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 300', () => {
    const query = `SYSTEM RESTART REPLICA test_alter_r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 301', () => {
    const query = `SYSTEM RESTART REPLICA test_alter_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 302', () => {
    const query = `SYSTEM RELOAD DICTIONARY test_dict_db.table1_dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 303', () => {
    const query = `system stop merges txn_counters;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 304', () => {
    const query = `system sync replica test_1164_memory.r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 305', () => {
    const query = `system sync replica test_1164_memory.r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 306', () => {
    const query = `system stop distributed sends buf;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 307', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED  dist;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 308', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED demo_loan_01568_dist;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 309', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS distributed_01099_b;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 310', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED distributed_01099_b;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 311', () => {
    const query = `SYSTEM STOP MERGES table_with_defaults_on_aliases;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 312', () => {
    const query = `SYSTEM DROP DNS CACHE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 313', () => {
    const query = `SYSTEM STOP MERGES target_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 314', () => {
    const query = `SYSTEM STOP MERGES checkouts;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 315', () => {
    const query = `SYSTEM STOP MERGES logins;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 316', () => {
    const query = `SYSTEM SYNC REPLICA table_for_synchronous_mutations2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 317', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED dist_test_01040;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 318', () => {
    const query = `SYSTEM RELOAD DICTIONARY \`foo 1234\`.dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 319', () => {
    const query = `SYSTEM RELOAD DICTIONARY {CLICKHOUSE_DATABASE:Identifier}.dict3; -- {serverError UNKNOWN_TABLE} SELECT dictGetString({CLICKHOUSE_DATABASE:String} || '.dict3', 'some_column', toUInt64(12));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 320', () => {
    const query = `SYSTEM STOP MERGES mt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 321', () => {
    const query = `SYSTEM START MERGES mt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 322', () => {
    const query = `SYSTEM SYNC REPLICA replicated_constraints1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 323', () => {
    const query = `SYSTEM SYNC REPLICA replicated_constraints2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 324', () => {
    const query = `SYSTEM SYNC REPLICA replicated_table_for_alter1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 325', () => {
    const query = `SYSTEM SYNC REPLICA replicated_table_for_alter2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 326', () => {
    const query = `system stop ttl merges ttl;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 327', () => {
    const query = `system start ttl merges ttl;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 328', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED distributed_00952;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 329', () => {
    const query = `SYSTEM SYNC REPLICA zero_rows_per_granule2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 330', () => {
    const query = `SYSTEM SYNC REPLICA zero_rows_per_granule1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 331', () => {
    const query = `SYSTEM SYNC REPLICA four_rows_per_granule2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 332', () => {
    const query = `SYSTEM SYNC REPLICA four_rows_per_granule1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 333', () => {
    const query = `SYSTEM SYNC REPLICA adaptive_granularity_alter2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 334', () => {
    const query = `SYSTEM SYNC REPLICA adaptive_granularity_alter1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 335', () => {
    const query = `SYSTEM SYNC REPLICA alter_compression_codec2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 336', () => {
    const query = `SYSTEM SYNC REPLICA alter_compression_codec1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 337', () => {
    const query = `SYSTEM SYNC REPLICA compression_codec_replicated2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 338', () => {
    const query = `SYSTEM SYNC REPLICA compression_codec_multiple_replicated1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 339', () => {
    const query = `SYSTEM SYNC REPLICA compression_codec_multiple_replicated2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 340', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx_r;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 341', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 342', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 343', () => {
    const query = `SYSTEM SYNC REPLICA minmax_idx2_r;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 344', () => {
    const query = `SYSTEM SYNC REPLICA summing_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 345', () => {
    const query = `SYSTEM STOP DISTRIBUTED SENDS check_system_tables;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 346', () => {
    const query = `SYSTEM FLUSH DISTRIBUTED check_system_tables;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 347', () => {
    const query = `SYSTEM SYNC REPLICA replicated_table_detach_all2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 348', () => {
    const query = `SYSTEM STOP MERGES sites;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 349', () => {
    const query = `SYSTEM START MERGES sites;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 350', () => {
    const query = `SYSTEM START FETCHES quorum1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 351', () => {
    const query = `SYSTEM SYNC REPLICA quorum1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 352', () => {
    const query = `SYSTEM SYNC REPLICA byte_identical_r2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 353', () => {
    const query = `SYSTEM SYNC REPLICA byte_identical_r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 354', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_tuple_replica2_00661;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 355', () => {
    const query = `SYSTEM SYNC REPLICA cast2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 356', () => {
    const query = `SYSTEM STOP MERGES dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 357', () => {
    const query = `SYSTEM START MERGES dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 358', () => {
    const query = `SYSTEM SYNC REPLICA replicated_truncate2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 359', () => {
    const query = `SYSTEM SYNC REPLICA rename1 PULL; -- Avoid "Cannot select parts for optimization: Entry for part 0_1_1_0 hasn't been read from the replication log yet" SYSTEM SYNC REPLICA rename2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 360', () => {
    const query = `SYSTEM SYNC REPLICA rename3; -- Make "rename3" to see all data parts. OPTIMIZE TABLE rename3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 361', () => {
    const query = `SYSTEM SYNC REPLICA rename1; -- Make "rename1" to see and process all scheduled merges. SELECT * FROM rename1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 362', () => {
    const query = `SYSTEM SYNC REPLICA replicated_collapsing PULL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 363', () => {
    const query = `SYSTEM SYNC REPLICA replicated_versioned_collapsing;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 364', () => {
    const query = `SYSTEM SYNC REPLICA not_partitioned_replica1_00502 PULL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 365', () => {
    const query = `SYSTEM SYNC REPLICA not_partitioned_replica2_00502;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 366', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_week_replica1 PULL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 367', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_week_replica2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 368', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_tuple_replica1_00502 PULL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 369', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_tuple_replica2_00502;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 370', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_string_replica1 PULL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 371', () => {
    const query = `SYSTEM SYNC REPLICA partitioned_by_string_replica2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 372', () => {
    const query = `SYSTEM SYNC REPLICA without_fixed_size_columns_replica1 PULL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 373', () => {
    const query = `SYSTEM SYNC REPLICA without_fixed_size_columns_replica2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors system: 374', () => {
    const query = `SYSTEM SYNC REPLICA clear_column2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});
