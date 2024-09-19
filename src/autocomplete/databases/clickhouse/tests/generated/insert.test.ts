/* eslint no-useless-escape: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors insert: 1', () => {
    const query = `INSERT INTO t VALUES  ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTUVWXYZ'),
('\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0'),
('IIIIIIIIII\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 2', () => {
    const query = `insert into test values (map('Hello', '01/01/2020'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 3', () => {
    const query = `INSERT INTO checks SELECT 'asan', if(number % 2, 'success', 'fail'), toDateTime('2024-06-07 00:00:01') + INTERVAL number HOUR, '02221_parallel_replicas_bug', 'FAIL' from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 4', () => {
    const query = `INSERT INTO checks SELECT 'asan', if(number % 2, 'success', 'fail'), toDateTime('2024-06-06 00:00:02') + INTERVAL number HOUR, '02221_parallel_replicas_bug', 'FAIL' from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 5', () => {
    const query = `INSERT INTO checks SELECT 'asan', if(number % 2, 'success', 'fail'), toDateTime('2024-06-05 00:00:03') + INTERVAL number HOUR, '02221_parallel_replicas_bug', 'FAIL' from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 6', () => {
    const query = `INSERT INTO ANIMAL (ANIMAL) VALUES ('CAT'), ('FISH'), ('DOG'), ('HORSE'), ('BIRD');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 7', () => {
    const query = `INSERT INTO test_table VALUES (0, 'Value_0'), (1, 'Value_1'), (2, 'Value_2');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 8', () => {
    const query = `INSERT INTO test_table_for_in VALUES (0), (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 9', () => {
    const query = `INSERT INTO t1 (c0, c1) VALUES ([18446717433683171873], 13623876564923702671), ([-4], 6111684076076982207);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 10', () => {
    const query = `INSERT INTO rawtable VALUES ({'key1': 'value1', 'key2': 'value2'});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 11', () => {
    const query = `INSERT INTO uk_mortgage_rates VALUES ('2004-02-29', 5.02, 4.9, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 12', () => {
    const query = `INSERT INTO uk_mortgage_rates VALUES ('2004-03-31', 5.11, 4.91, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 13', () => {
    const query = `INSERT INTO t VALUES ('a'), ('a'), ('a'), ('a'),  ('b'), ('a'), ('a'), ('a'), ('a'), ('a'), ('a'), ('a'), ('a'), ('a'), ('a'), ('a'), ('c');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 14', () => {
    const query = `INSERT INTO a SELECT toString(number) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 15', () => {
    const query = `INSERT INTO test_new_json_type format JSONEachRow {"id":1,"data":{"foo1":"bar"},"version":1}
{"id":2,"data":{"foo2":"bar"},"version":1}
{"id":3,"data":{"foo2":"bar"},"version":1}
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 16', () => {
    const query = `INSERT INTO t_async_insert_alter VALUES (42, 24);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 17', () => {
    const query = `INSERT INTO t_async_insert_alter VALUES (43, 34, 55);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 18', () => {
    const query = `INSERT INTO t_async_insert_alter VALUES ('100', '200', '300');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 19', () => {
    const query = `INSERT INTO t_local_1 VALUES (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 20', () => {
    const query = `INSERT INTO t_local_2 VALUES (2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 21', () => {
    const query = `INSERT INTO test_new_json_type SELECT id, '{"foo2":"baz"}' AS _data, version+1 AS _version FROM test_new_json_type where id=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 22', () => {
    const query = `INSERT INTO table1 SELECT number FROM numbers(1, 300);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 23', () => {
    const query = `INSERT INTO test_left SELECT number % 10000, number % 10000, number % 10000 FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 24', () => {
    const query = `INSERT INTO test_right SELECT number % 10 , number % 10, number % 10 FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 25', () => {
    const query = `INSERT INTO tab VALUES('0,0', '0,1')('2,2','2,3');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 26', () => {
    const query = `INSERT INTO t_async_insert_params VALUES ({p1:UInt64}); -- { serverError  BAD_QUERY_PARAMETER } INSERT INTO t_async_insert_params VALUES ({p1:String}); -- { serverError  TYPE_MISMATCH }
ALTER TABLE t_async_insert_params MODIFY COLUMN id String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 27', () => {
    const query = `INSERT INTO t_async_insert_params VALUES ({p1:UInt64}); -- { serverError  BAD_QUERY_PARAMETER } INSERT INTO t_async_insert_params VALUES ({p1:String});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 28', () => {
    const query = `INSERT INTO table_name SELECT rand() from system.numbers limit 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 29', () => {
    const query = `insert into test select toJSONString(map('a', 'str_' || number)) from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 30', () => {
    const query = `insert into test_json_dynamic_aggregate_functions select toJSONString(map('a' || number % 13, multiIf(number % 5 == 0, NULL, number % 5 == 1, number::UInt32, number % 5 == 2, 'str_' || number, number % 5 == 3, range(number % 5), toBool(number % 2)))) from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 31', () => {
    const query = `insert into test select materialize('{"a" : 42}')::JSON(max_dynamic_paths=8) from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 32', () => {
    const query = `insert into test select materialize('{"a1" : 42, "a2" : 42, "a3" : 42, "a4" : 42, "a5" : 42, "a6" : 42, "a7" : 42, "a8" : 42, "a" : [{"c" : 42}]}')::JSON(max_dynamic_paths=8) from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 33', () => {
    const query = `insert into test select materialize('{"a1" : 42, "a2" : 42, "a3" : 42, "a4" : 42, "a5" : 42, "a6" : 42, "a7" : 42, "a8" : 42, "a" : [{"d" : 42}]}')::JSON(max_dynamic_paths=8) from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 34', () => {
    const query = `insert into test select '{"b" : 42}' from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 35', () => {
    const query = `insert into test select '{"a" : 42, "b" : [1, 2, 3]}' from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 36', () => {
    const query = `insert into dist settings prefer_localhost_replica=0 values (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 37', () => {
    const query = `insert into rocksdb values (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 38', () => {
    const query = `insert into rep1 values (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 39', () => {
    const query = `INSERT INTO test__fuzz_22 SELECT number, toString(number) FROM numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 40', () => {
    const query = `insert into test select materialize('{"a" : [{"b" : 42}]}')::JSON(max_dynamic_paths=8) from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 41', () => {
    const query = `insert into test select materialize('{"aa1" : 42, "aa2" : 42, "aa3" : 42, "aa4" : 42, "aa5" : 42, "aa6" : 42, "aa7" : 42, "aa8" : 42, "a" : [{"c" : 42}]}') from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 42', () => {
    const query = `insert into t1 Select number, number from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 43', () => {
    const query = `insert into t2 Select number, number from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 44', () => {
    const query = `INSERT INTO test SELECT number, toString(number) FROM numbers(10_000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 45', () => {
    const query = `INSERT INTO test__fuzz_22 SELECT number, toString(number) FROM numbers(10_000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 46', () => {
    const query = `INSERT INTO test_00808 VALUES('2000-01-01', 1, 'test string 1', 1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 47', () => {
    const query = `INSERT INTO test_00808 VALUES('2000-01-01', 2, 'test string 2', 2, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 48', () => {
    const query = `insert into test select multiIf(number < 1000, '{}'::JSON, number < 3000, '{"a" : 42, "b" : "Hello"}'::JSON, '{"c" : [1, 2, 3], "d" : "2020-01-01"}'::JSON) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 49', () => {
    const query = `insert into test select multiIf(number < 1000, '{"a" : 42, "b" : "Hello"}'::JSON, number < 3000, '{"c" : [1, 2, 3], "d" : "2020-01-01"}'::JSON, '{"e" : 43, "f" : ["s1", "s2", "s3"]}'::JSON) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 50', () => {
    const query = `insert into test select multiIf(number < 1000, '{}'::JSON(max_dynamic_paths=2), number < 3000, '{"a" : 42, "b" : "Hello"}'::JSON(max_dynamic_paths=2), '{"c" : [1, 2, 3], "d" : "2020-01-01"}'::JSON(max_dynamic_paths=2)) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 51', () => {
    const query = `insert into test select multiIf(number < 1000, '{"a" : 42, "b" : "Hello"}'::JSON(max_dynamic_paths=2), number < 3000, '{"c" : [1, 2, 3], "d" : "2020-01-01"}'::JSON(max_dynamic_paths=2), '{"e" : 43, "f" : ["s1", "s2", "s3"]}'::JSON(max_dynamic_paths=2)) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 52', () => {
    const query = `insert into test select multiIf(number < 1000, '{"a" : 42}'::JSON(max_dynamic_paths=2), number < 3000, '{"b" : "Hello", "c" : [1, 2, 3], "d" : "2020-01-01"}'::JSON(max_dynamic_paths=2), '{"e" : 43}'::JSON(max_dynamic_paths=2)) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 53', () => {
    const query = `insert into test select multiIf(number < 1000, '{}'::JSON(max_dynamic_paths=8), number < 3000, materialize('{"a" : [{"b" : 42, "c" : [1, 2, 3]}]}')::JSON(max_dynamic_paths=8), materialize('{"a" : [{"d" : "2020-01-01", "e" : "Hello"}]}')::JSON(max_dynamic_paths=8)) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 54', () => {
    const query = `insert into test select multiIf(number < 1000,  materialize('{"a" : [{"b" : 42, "c" : [1, 2, 3]}]}')::JSON(max_dynamic_paths=8), number < 3000, materialize('{"a" : [{"d" : "2020-01-01", "e" : "Hello"}]}')::JSON(max_dynamic_paths=8), materialize('{"a" : [{"f" : "2020-01-01 00:00:00", "g" : "Hello2"}]}')::JSON(max_dynamic_paths=8)) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 55', () => {
    const query = `insert into test select multiIf(number < 1000,  materialize('{"a" : [{"b" : 42}]}')::JSON(max_dynamic_paths=8), number < 3000, materialize('{"a" : [{"d" : "2020-01-01", "e" : "Hello"}]}')::JSON(max_dynamic_paths=8), materialize('{"a" : [{"f" : "2020-01-01 00:00:00"}]}')::JSON(max_dynamic_paths=8)) from numbers(20000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 56', () => {
    const query = `INSERT INTO table1 SELECT uniqState(UserID) FROM table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 57', () => {
    const query = `INSERT INTO table1 SELECT x FROM format(JSONEachRow, 'x AggregateFunction(uniq, UInt64)' AS T, '{"x":""}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 58', () => {
    const query = `INSERT INTO table1 FORMAT JSONEachRow {"address":""};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 59', () => {
    const query = `insert into shard_0.dt64_03222 values(1, toDateTime64('1970-01-01 00:00:00.000',3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 60', () => {
    const query = `insert into shard_0.dt64_03222 values(2, toDateTime64('1970-01-01 00:00:02.456',3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 61', () => {
    const query = `insert into shard_1.dt64_03222 values(3, toDateTime64('1970-01-01 00:00:04.811',3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 62', () => {
    const query = `insert into shard_1.dt64_03222 values(4, toDateTime64('1970-01-01 00:10:05',3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 63', () => {
    const query = `insert into shard_1.dt64_03222 values(5, toDateTime64(0,3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 64', () => {
    const query = `INSERT INTO t_merge_profile_events_1 SELECT number, number, number FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 65', () => {
    const query = `INSERT INTO t_merge_profile_events_2 SELECT number, number, number FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 66', () => {
    const query = `INSERT INTO t_merge_profile_events_3 SELECT number, number, number FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 67', () => {
    const query = `insert into report_metrics_v2 SELECT * FROM system.numbers LIMIT 50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 68', () => {
    const query = `INSERT INTO t_primary_index_memory SELECT repeat('a', 10000) FROM numbers(150000) SETTINGS
max_block_size = 32,
max_memory_usage = '100M',
max_insert_block_size = 1024,
min_insert_block_size_rows = 1024;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 69', () => {
    const query = `INSERT INTO test_03217_merge_replica_1 SELECT number AS x FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 70', () => {
    const query = `INSERT INTO FUNCTION s3(s3_conn, filename='::03215_archive.csv') SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 71', () => {
    const query = `INSERT INTO FUNCTION s3(s3_conn, filename='test.zip::03215_archive.csv') SETTINGS allow_archive_path_syntax=0 SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 72', () => {
    const query = `INSERT INTO test_parquet SELECT number, toString(number) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 73', () => {
    const query = `INSERT INTO t (ord, shape, wkt_string) VALUES (1, [[(1, 1), (2, 2), (3, 3), (1, 1)]], 'MULTILINESTRING ((1 1, 2 2, 3 3, 1 1))');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 74', () => {
    const query = `INSERT INTO t (ord, shape, wkt_string) VALUES (2, [[(1, 1), (2, 2), (3, 3), (1, 1)], [(1, 0), (2, 0), (3, 0)]], 'MULTILINESTRING ((1 1, 2 2, 3 3, 1 1), (1 0, 2 0, 3 0))');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 75', () => {
    const query = `INSERT INTO t (ord, shape, wkt_string) VALUES (3, [[(1, 0), (2, 1), (3, 0), (4, 1), (5, 0), (6, 1), (7, 0), (8, 1), (9, 0), (10, 1)]], 'MULTILINESTRING ((1 0, 2 1, 3 0, 4 1, 5 0, 6 1, 7 0, 8 1, 9 0, 10 1))');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 76', () => {
    const query = `INSERT INTO t VALUES (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 77', () => {
    const query = `INSERT INTO test__fuzz_21 VALUES (1), (2), (3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 78', () => {
    const query = `insert into test select '{"a" : 42}';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 79', () => {
    const query = `insert into test select '{"a" : [1, 2, 3]}';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 80', () => {
    const query = `INSERT INTO a VALUES (NULL), ('1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 81', () => {
    const query = `INSERT INTO b VALUES (NULL), ('1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 82', () => {
    const query = `INSERT INTO testnull(b,c) SELECT toString(rand64()) AS b, toString(rand64()) AS c FROM numbers(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 83', () => {
    const query = `INSERT INTO product_groups  VALUES	(1, 'Smartphone'),(2, 'Laptop'),(3, 'Tablet');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 84', () => {
    const query = `INSERT INTO products (product_id,product_name, group_id,price) VALUES (1, 'Microsoft Lumia', 1, 200), (2, 'HTC One', 1, 400), (3, 'Nexus', 1, 500), (4, 'iPhone', 1, 900),(5, 'HP Elite', 2, 1200),(6, 'Lenovo Thinkpad', 2, 700),(7, 'Sony VAIO', 2, 700),(8, 'Dell Vostro', 2, 800),(9, 'iPad', 3, 700),(10, 'Kindle Fire', 3, 150),(11, 'Samsung Galaxy Tab', 3, 200);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 85', () => {
    const query = `INSERT INTO product_groups  VALUES	(4, 'Unknow');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 86', () => {
    const query = `INSERT INTO products (product_id,product_name, group_id,price) VALUES (12, 'Others', 4, 200);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 87', () => {
    const query = `INSERT INTO t VALUES (-128::Int8), (-127::Int8), (-1::Int8), (0::Int8), (1::Int8), (126::Int8), (127::Int8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 88', () => {
    const query = `INSERT INTO t VALUES (-32768::Int16), (-32767::Int16), (-1::Int16), (0::Int16), (1::Int16), (32766::Int16), (32767::Int16);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 89', () => {
    const query = `INSERT INTO t VALUES (-2147483648::Int32), (-2147483647::Int32), (-1::Int32), (0::Int32), (1::Int32), (2147483646::Int32), (2147483647::Int32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 90', () => {
    const query = `INSERT INTO t VALUES (-9223372036854775808::Int64), (-9223372036854775807::Int64), (-1::Int64), (0::Int64), (1::Int64), (9223372036854775806::Int64), (9223372036854775807::Int64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 91', () => {
    const query = `INSERT INTO t VALUES (-170141183460469231731687303715884105728::Int128), (-170141183460469231731687303715884105727::Int128), (-1::Int128), (0::Int128), (1::Int128), (170141183460469231731687303715884105726::Int128), (170141183460469231731687303715884105727::Int128);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 92', () => {
    const query = `INSERT INTO t VALUES (-57896044618658097711785492504343953926634992332820282019728792003956564819968::Int256), (-57896044618658097711785492504343953926634992332820282019728792003956564819967::Int256), (-1::Int256), (0::Int256), (1::Int256), (57896044618658097711785492504343953926634992332820282019728792003956564819966::Int256), (57896044618658097711785492504343953926634992332820282019728792003956564819967::Int256);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 93', () => {
    const query = `INSERT INTO t VALUES (0::UInt8), (1::UInt8), (254::UInt8), (255::UInt8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 94', () => {
    const query = `INSERT INTO t VALUES (0::UInt16), (1::UInt16), (65534::UInt16), (65535::UInt16);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 95', () => {
    const query = `INSERT INTO t VALUES (0::UInt32), (1::UInt32), (4294967294::UInt32), (4294967295::UInt32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 96', () => {
    const query = `INSERT INTO t VALUES (0::UInt64), (1::UInt64), (18446744073709551614::UInt64), (18446744073709551615::UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 97', () => {
    const query = `INSERT INTO t VALUES (0::UInt128), (1::UInt128), (340282366920938463463374607431768211454::UInt128), (340282366920938463463374607431768211455::UInt128);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 98', () => {
    const query = `INSERT INTO t VALUES (0::UInt256), (1::UInt256), (115792089237316195423570985008687907853269984665640564039457584007913129639934::UInt256), (115792089237316195423570985008687907853269984665640564039457584007913129639935::UInt256);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 99', () => {
    const query = `INSERT INTO t VALUES (1.17549435e-38::Float32), (3.40282347e+38::Float32), (-3.40282347e+38::Float32), (-1.17549435e-38::Float32), (1.4e-45::Float32), (-1.4e-45::Float32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 100', () => {
    const query = `INSERT INTO t VALUES (inf::Float32), (-inf::Float32), (nan::Float32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 101', () => {
    const query = `INSERT INTO t VALUES (inf::FLOAT(12)), (-inf::FLOAT(12)), (nan::FLOAT(12));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 102', () => {
    const query = `INSERT INTO t VALUES (inf::FLOAT(15,22)), (-inf::FLOAT(15,22)), (nan::FLOAT(15,22));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 103', () => {
    const query = `INSERT INTO t VALUES (1.17549435e-38::Float64), (3.40282347e+38::Float64), (-3.40282347e+38::Float64), (-1.17549435e-38::Float64), (1.4e-45::Float64), (-1.4e-45::Float64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 104', () => {
    const query = `INSERT INTO t VALUES (2.2250738585072014e-308::Float64), (1.7976931348623157e+308::Float64), (-1.7976931348623157e+308::Float64), (-2.2250738585072014e-308::Float64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 105', () => {
    const query = `INSERT INTO t VALUES (inf::Float64), (-inf::Float64), (nan::Float64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 106', () => {
    const query = `INSERT INTO t VALUES (inf::DOUBLE(12)), (-inf::DOUBLE(12)), (nan::DOUBLE(12));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 107', () => {
    const query = `INSERT INTO t VALUES (inf::DOUBLE(15,22)), (-inf::DOUBLE(15,22)), (nan::DOUBLE(15,22));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 108', () => {
    const query = `INSERT INTO t VALUES ('string'::String), ('1'::FixedString(1)), ('1'::FixedString(2)), ('1'::FixedString(10)); --(''::String), INSERT INTO t VALUES ('1'::Bool), (0::Bool);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 109', () => {
    const query = `INSERT INTO t VALUES ('dededdb6-7835-4ce4-8d11-b5de6f2820e9'::UUID);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 110', () => {
    const query = `INSERT INTO t VALUES ('00000000-0000-0000-0000-000000000000'::UUID);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 111', () => {
    const query = `INSERT INTO t VALUES ('1'::LowCardinality(String)), ('1'::LowCardinality(String)), (0::LowCardinality(UInt16));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 112', () => {
    const query = `INSERT INTO t VALUES ([]::Array(Dynamic)), ([[]]::Array(Array(Dynamic))), ([[[]]]::Array(Array(Array(Dynamic))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 113', () => {
    const query = `INSERT INTO t VALUES (()::Tuple(Dynamic)), ((())::Tuple(Tuple(Dynamic))), (((()))::Tuple(Tuple(Tuple(Dynamic))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 114', () => {
    const query = `INSERT INTO t VALUES (map(11::Dynamic, 'v1'::Dynamic, '22'::Dynamic, 1::Dynamic));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 115', () => {
    const query = `INSERT INTO t VALUES ([1,2]::SimpleAggregateFunction(anyLast, Array(Int16)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 116', () => {
    const query = `INSERT INTO t VALUES (toIPv4('192.168.0.1')), (toIPv6('::1'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 117', () => {
    const query = `INSERT INTO t VALUES ((1.23, 4.56)::Point), (([(1.23, 4.56)::Point, (2.34, 5.67)::Point])::Ring);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 118', () => {
    const query = `INSERT INTO t VALUES ([[[(0, 0), (10, 0), (10, 10), (0, 10)]], [[(20, 20), (50, 20), (50, 50), (20, 50)],[(30, 30), (50, 50), (50, 30)]]]::MultiPolygon);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 119', () => {
    const query = `INSERT INTO t VALUES (interval '1' day), (interval '2' month), (interval '3' year);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 120', () => {
    const query = `INSERT INTO t VALUES ([(1, 'aa'), (2, 'bb')]::Nested(x UInt32, y String));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 121', () => {
    const query = `INSERT INTO t VALUES ([(1, (2, ['aa', 'bb']), [(3, 'cc'), (4, 'dd')]), (5, (6, ['ee', 'ff']), [(7, 'gg'), (8, 'hh')])]::Nested(x UInt32, y Tuple(y1 UInt32, y2 Array(String)), z Nested(z1 UInt32, z2 String)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 122', () => {
    const query = `INSERT INTO t0(c0, c1, c2) VALUES (826636805,0, ''), (0, 150808457, '');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 123', () => {
    const query = `INSERT INTO source SELECT ['fail', 'success'][number % 2] as Name, number AS Value FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 124', () => {
    const query = `INSERT INTO test_agg_variant SELECT
Name,
t AS Value
FROM
(
SELECT
Name,
arrayJoin([
uniqExactState(Value)::Variant(AggregateFunction(uniqExact, Int64), AggregateFunction(avg, Int64)), 
avgState(Value)::Variant(AggregateFunction(uniqExact, Int64), AggregateFunction(avg, Int64))
]) AS t
FROM source
GROUP BY Name 
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 125', () => {
    const query = `insert into test select multiIf(number < 1000, NULL::Dynamic(max_types=1), number < 3000, range(number % 5)::Dynamic(max_types=1), number::Dynamic(max_types=1)) from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 126', () => {
    const query = `insert into test select multiIf(number < 1000, 'Str'::Dynamic(max_types=1), number < 3000, range(number % 5)::Dynamic(max_types=1), number::Dynamic(max_types=1)) from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 127', () => {
    const query = `INSERT INTO user_country (user_id, country) VALUES (1, 'US');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 128', () => {
    const query = `INSERT INTO user_transactions (user_id, transaction_id) VALUES (1, 'tx1'), (1, 'tx2'), (1, 'tx3'), (2, 'tx1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 129', () => {
    const query = `insert into date_table_pv values(1, today());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 130', () => {
    const query = `insert into date_table_pv values(2, yesterday());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 131', () => {
    const query = `insert into date_table_pv values(3, toDate('1974-04-07'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 132', () => {
    const query = `insert into date32_table_pv values(1, today());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 133', () => {
    const query = `insert into date32_table_pv values(2, yesterday());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 134', () => {
    const query = `insert into date32_table_pv values(3, toDate32('2199-12-31'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 135', () => {
    const query = `insert into date32_table_pv values(4, toDate32('1950-12-25'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 136', () => {
    const query = `insert into date32_table_pv values(5, toDate32('1900-01-01'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 137', () => {
    const query = `insert into uuid_table_pv values(1, generateUUIDv4());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 138', () => {
    const query = `insert into uuid_table_pv values(2, generateUUIDv7());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 139', () => {
    const query = `insert into uuid_table_pv values(3, toUUID('11111111-2222-3333-4444-555555555555'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 140', () => {
    const query = `insert into uuid_table_pv select 4, serverUUID();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 141', () => {
    const query = `insert into ipv4_table_pv values (1, '116.106.34.242');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 142', () => {
    const query = `insert into ipv4_table_pv values (2, '116.106.34.243');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 143', () => {
    const query = `insert into ipv4_table_pv values (3, '116.106.34.244');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 144', () => {
    const query = `INSERT INTO order_by_all VALUES ('B', 3, 10), ('C', NULL, 40), ('D', 1, 20), ('A', 2, 30);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 145', () => {
    const query = `INSERT INTO t_03209 VALUES ('33', '44.4', '35');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 146', () => {
    const query = `INSERT INTO tab VALUES (1, 1, 1, 'a'), (2, 2, 2, 'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 147', () => {
    const query = `INSERT INTO mem VALUES (1, 'A'), (2, 'B'), (3, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 148', () => {
    const query = `INSERT INTO mem2 VALUES (1, 'A'), (2, 'B'), (3, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 149', () => {
    const query = `INSERT INTO mem3 VALUES (1, 'A'), (2, 'B'), (3, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 150', () => {
    const query = `INSERT INTO mem4 VALUES (1, 1, 'A'), (2, 2, 'B'), (3, 3, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 151', () => {
    const query = `INSERT INTO grouparray Select groupArrayIntersectState([2, 4, 6, 8, 10]::Array(UInt8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 152', () => {
    const query = `INSERT INTO grouparray Select groupArrayIntersectState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]::Array(UInt8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 153', () => {
    const query = `INSERT INTO grouparray Select groupArrayIntersectState([2, 6, 10]::Array(UInt8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 154', () => {
    const query = `INSERT INTO grouparray Select groupArrayIntersectState([10]::Array(UInt8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 155', () => {
    const query = `INSERT INTO grouparray Select groupArrayIntersectState([]::Array(UInt8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 156', () => {
    const query = `INSERT INTO grouparray_string Select groupArrayIntersectState([tuple(['2', '4', '6', '8', '10'])]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 157', () => {
    const query = `INSERT INTO grouparray_string Select groupArrayIntersectState([tuple(['2', '4', '6', '8', '10']), tuple(['2', '4', '6', '8', '10'])]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 158', () => {
    const query = `INSERT INTO grouparray_string Select groupArrayIntersectState([tuple(['2', '4', '6', '8', '10']), tuple(['2', '4', '6', '8', '10', '14'])]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 159', () => {
    const query = `INSERT INTO grouparray_string Select groupArrayIntersectState([tuple(['2', '4', '6', '8', '10', '20']), tuple(['2', '4', '6', '8', '10', '14'])]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 160', () => {
    const query = `INSERT INTO grouparray_string Select groupArrayIntersectState([]::Array(Tuple(Array(String))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 161', () => {
    const query = `INSERT INTO realtimedrep FORMAT Values (100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 162', () => {
    const query = `INSERT INTO realtimebuff__fuzz_19 FORMAT Values (101);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 163', () => {
    const query = `INSERT INTO realtimebuff__fuzz_20 FORMAT Values (101);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 164', () => {
    const query = `insert into test select number, '{}' from numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 165', () => {
    const query = `insert into test select number, toJSONString(map('a.b', arrayMap(x -> map('b.c.d_' || toString(x), number::UInt32, 'c.d.e', range((number + x) % 5 + 1)), range(number % 5 + 1)))) from numbers(10000, 10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 166', () => {
    const query = `insert into test select number, toJSONString(map('a.r', arrayMap(x -> map('b.c.d_' || toString(x), number::UInt32, 'c.d.e', range((number + x) % 5 + 1)), range(number % 5 + 1)))) from numbers(20000, 10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 167', () => {
    const query = `insert into test select number, toJSONString(map('a.a1', number, 'a.a2', number, 'a.a3', number, 'a.a4', number, 'a.a5', number, 'a.a6', number, 'a.a7', number, 'a.a8', number, 'a.r', arrayMap(x -> map('b.c.d_' || toString(x), number::UInt32, 'c.d.e', range((number + x) % 5 + 1)), range(number % 5 + 1)))) from numbers(30000, 10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 168', () => {
    const query = `insert into test select number, '{}' from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 169', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number)) from numbers(100000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 170', () => {
    const query = `insert into test select number, toJSONString(map('a.b.d', number::UInt32, 'a.b.e', 'str_' || toString(number))) from numbers(200000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 171', () => {
    const query = `insert into test select number, toJSONString(map('b.b.d', number::UInt32, 'b.b.e', 'str_' || toString(number))) from numbers(300000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 172', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', number::UInt32, 'a.b.e', 'str_' || toString(number))) from numbers(400000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 173', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', number::UInt32, 'a.b.e', 'str_' || toString(number), 'b.b._' || toString(number % 5), number::UInt32)) from numbers(500000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 174', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', range(number % + 1)::Array(UInt32), 'a.b.e', 'str_' || toString(number), 'd.a', number::UInt32, 'd.c', toDate(number))) from numbers(600000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 175', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', toDateTime(number), 'a.b.e', 'str_' || toString(number), 'd.a', range(number % 5 + 1)::Array(UInt32), 'd.b', number::UInt32)) from numbers(700000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 176', () => {
    const query = `insert into test select number, '{}' from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 177', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number)) from numbers(5, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 178', () => {
    const query = `insert into test select number, toJSONString(map('a.b.d', number::UInt32, 'a.b.e', 'str_' || toString(number))) from numbers(10, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 179', () => {
    const query = `insert into test select number, toJSONString(map('b.b.d', number::UInt32, 'b.b.e', 'str_' || toString(number))) from numbers(15, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 180', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', number::UInt32, 'a.b.e', 'str_' || toString(number))) from numbers(20, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 181', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', number::UInt32, 'a.b.e', 'str_' || toString(number), 'b.b._' || toString(number), number::UInt32)) from numbers(25, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 182', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', range(number % + 1)::Array(UInt32), 'a.b.e', 'str_' || toString(number), 'd.a', number::UInt32, 'd.c', toDate(number))) from numbers(30, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 183', () => {
    const query = `insert into test select number, toJSONString(map('a.b.c', number, 'a.b.d', toDateTime(number), 'a.b.e', 'str_' || toString(number), 'd.a', range(number % 5 + 1)::Array(UInt32), 'd.b', number::UInt32)) from numbers(35, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 184', () => {
    const query = `INSERT INTO tp SELECT number%3, 1 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 185', () => {
    const query = `insert into t values (1, 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 186', () => {
    const query = `insert into t values (1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 187', () => {
    const query = `insert into t values (1, 0)(1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 188', () => {
    const query = `insert into t values(439499072,true,0),(1393290072,true,0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 189', () => {
    const query = `insert into t values(-1317193174,false,0),(1929066636,false,0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 190', () => {
    const query = `insert into t values(-2,false,0),(1962246186,true,0),(2054878592,false,0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 191', () => {
    const query = `insert into t values(-1893563136,true,41.55);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 192', () => {
    const query = `insert into t values(-1338380855,true,-0.7),(-991301833,true,0),(-755809149,false,43.18),(-41,true,0),(3,false,0),(255,false,0),(255,false,0),(189195893,false,0),(195550885,false,9223372036854776000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 193', () => {
    const query = `INSERT INTO dict_03204 SELECT number, number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 194', () => {
    const query = `INSERT INTO foo VALUES ('2020-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 195', () => {
    const query = `INSERT INTO foo VALUES ('2020-01-02');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 196', () => {
    const query = `INSERT INTO t_missed_subcolumns SELECT * FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 197', () => {
    const query = `INSERT INTO t_missed_subcolumns SELECT number, if(number % 2, NULL, number) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 198', () => {
    const query = `INSERT INTO t_missed_subcolumns VALUES (1, ['aaa', NULL]) (2, ['ccc']) (3, [NULL]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 199', () => {
    const query = `INSERT INTO t_missed_subcolumns VALUES (4, [NULL, 'bbb'], ['ddd', NULL]), (5, [NULL], [NULL]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 200', () => {
    const query = `INSERT INTO t_missed_subcolumns VALUES (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 201', () => {
    const query = `INSERT INTO t_missed_subcolumns VALUES (2, ('aaa', 'bbb'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 202', () => {
    const query = `INSERT INTO t_missed_subcolumns VALUES (3, ('ccc', 'ddd'), [4, 5, 6]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 203', () => {
    const query = `INSERT INTO t_03203 VALUES (1, 1), (2, 2), (3, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 204', () => {
    const query = `INSERT INTO t SELECT 0, number FROM numbers(10) SETTINGS max_block_size = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 205', () => {
    const query = `INSERT INTO t_subcolumns_join SELECT number as number FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 206', () => {
    const query = `insert into table test select * from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 207', () => {
    const query = `INSERT INTO test VALUES (10, [0,1,2,3], 'xx'), (20, [3,4,5,6], 'xxx'), (90, [3,4,5,6,9], 'xxxx');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 208', () => {
    const query = `INSERT INTO seq VALUES (0), (6), (7);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 209', () => {
    const query = `INSERT INTO t1 SELECT repeat('t', 15) s1,
'test' s2,
'test' s3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 210', () => {
    const query = `INSERT INTO t1 SELECT substring(s1, 1, 10),
s2,
s3
FROM generateRandom('s1 String, s2 String, s3 String')
LIMIT 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 211', () => {
    const query = `INSERT INTO t2 SELECT * FROM generateRandom()
LIMIT 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 212', () => {
    const query = `INSERT INTO 03199_fixedstring_array VALUES (['a', 'b']), (['c', 'd']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 213', () => {
    const query = `INSERT INTO labels_unordered (idx,score,label) VALUES (1,0.1,0), (2,0.35,1), (3,0.4,0), (4,0.8,1), (5,0.8,0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 214', () => {
    const query = `INSERT INTO labels_ordered (idx,score,label) VALUES (1,0.1,0), (2,0.35,1), (3,0.4,0), (4,0.8,0), (5,0.8,1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 215', () => {
    const query = `INSERT INTO FUNCTION file('data_03198_table_function_directory_path.csv', 'csv') SELECT '1.csv' SETTINGS engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 216', () => {
    const query = `INSERT INTO FUNCTION file('data_03198_table_function_directory_path/1.csv', 'csv') SELECT '1.csv' SETTINGS engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 217', () => {
    const query = `INSERT INTO FUNCTION file('data_03198_table_function_directory_path/2.csv', 'csv') SELECT '2.csv' SETTINGS engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 218', () => {
    const query = `INSERT INTO FUNCTION file('data_03198_table_function_directory_path/dir/3.csv', 'csv') SELECT '3.csv' SETTINGS engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 219', () => {
    const query = `INSERT INTO FUNCTION file('data_03198_table_function_directory_path/dir1/dir/4.csv', 'csv') SELECT '4.csv' SETTINGS engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 220', () => {
    const query = `INSERT INTO FUNCTION file('data_03198_table_function_directory_path/dir2/dir/5.csv', 'csv') SELECT '5.csv' SETTINGS engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 221', () => {
    const query = `INSERT INTO test_numbers__fuzz_29 VALUES ([1,2,3,4,5,6]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 222', () => {
    const query = `INSERT INTO test_numbers__fuzz_29 VALUES ([1,2,4,5]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 223', () => {
    const query = `INSERT INTO test_numbers__fuzz_29 VALUES ([1,4,3,0,5,5,5]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 224', () => {
    const query = `INSERT INTO test_dynamic VALUES (1, 'foo'), (2, 1111), (3, [1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 225', () => {
    const query = `INSERT INTO test_serialization SELECT 1,
groupConcatState('First');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 226', () => {
    const query = `INSERT INTO test_serialization SELECT 2,
groupConcatState('Second');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 227', () => {
    const query = `INSERT INTO t_bloom_filter SELECT
number % 100 as key, -- 100 unique keys
rand() % 100 as value -- 100 unique values
FROM numbers(50_000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 228', () => {
    const query = `INSERT INTO t_bloom_filter SELECT
number % 100 as key, -- 100 unique keys
rand() % 100 as value -- 100 unique values
FROM numbers(50_000, 50_000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 229', () => {
    const query = `insert into tab select toDateTime('2000-01-01', 'UTC') + number, number, 1 from numbers(1e7);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 230', () => {
    const query = `INSERT INTO test_projection_deduplicate VALUES (1, 'one');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 231', () => {
    const query = `INSERT INTO xxxx_yyy SELECT number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 232', () => {
    const query = `insert into test select arrayJoin(range(10000));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 233', () => {
    const query = `INSERT INTO 03173_single_function SELECT toDate('2000-01-01') + 10 * number FROM numbers(50)
UNION ALL
SELECT toDate('2100-01-01') + 10 * number FROM numbers(50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 234', () => {
    const query = `INSERT INTO 03173_nested_function SELECT number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 235', () => {
    const query = `INSERT INTO 03173_nested_function_lc SELECT number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 236', () => {
    const query = `INSERT INTO 03173_nested_function_null SELECT number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 237', () => {
    const query = `INSERT INTO 03173_nested_function_lc_null SELECT number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 238', () => {
    const query = `INSERT INTO 03173_nonsafe_cast SELECT number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 239', () => {
    const query = `INSERT INTO 03173_multiple_partition_cols SELECT number, number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 240', () => {
    const query = `INSERT INTO 03173_base_data_source SELECT number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 241', () => {
    const query = `INSERT INTO 03173_date_parsing SELECT toString(toDate('2023-04-01') + number)
FROM numbers(20);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 242', () => {
    const query = `INSERT INTO 03173_nested_date_parsing SELECT toString(toDate('2000-01-01') + 10 * number) FROM numbers(50)
UNION ALL
SELECT toString(toDate('2100-01-01') + 10 * number) FROM numbers(50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 243', () => {
    const query = `INSERT INTO 03173_empty_transform SELECT number FROM numbers(6);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 244', () => {
    const query = `insert into test_qualify SELECT * FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 245', () => {
    const query = `INSERT INTO test SELECT number, 'str_' || toString(number) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 246', () => {
    const query = `INSERT INTO view_source SELECT * FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 247', () => {
    const query = `INSERT INTO test_hilbert_encode SELECT number DIV 1024, number % 1024 FROM numbers(1048576);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 248', () => {
    const query = `INSERT INTO test_hilbert_encode SELECT number DIV 32, number % 32 FROM numbers(1024);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 249', () => {
    const query = `INSERT INTO x values (100, 1), (200, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 250', () => {
    const query = `INSERT INTO y values (100, 1), (300, 3), (200, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 251', () => {
    const query = `INSERT INTO t_func_to_subcolumns_map_2 VALUES (1, map('aaa', 1, 'bbb', 2)) (2, map('ccc', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 252', () => {
    const query = `INSERT INTO t_func_to_subcolumns_join VALUES (1, [1, 2, 3], 'abc', map('foo', 1, 'bar', 2)) (2, [], NULL, map());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 253', () => {
    const query = `INSERT INTO t_func_to_subcolumns_use_nulls SELECT range(number % 10), number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 254', () => {
    const query = `INSERT INTO simple_key_simple_attributes_source_table VALUES(0, 'value_0', 'value_second_0');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 255', () => {
    const query = `INSERT INTO simple_key_simple_attributes_source_table VALUES(1, 'value_1', 'value_second_1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 256', () => {
    const query = `INSERT INTO simple_key_simple_attributes_source_table VALUES(2, 'value_2', 'value_second_2');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 257', () => {
    const query = `INSERT INTO test_table (key) SELECT number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 258', () => {
    const query = `INSERT INTO column_modify_test VALUES (1,'one',0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 259', () => {
    const query = `INSERT INTO column_modify_test VALUES (2,'two',0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 260', () => {
    const query = `INSERT INTO column_modify_test VALUES (3,Null,0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 261', () => {
    const query = `INSERT INTO complex_key_simple_attributes_source_short_circuit_table VALUES(0, 'id_key_0', 'value_0', 'value_second_0');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 262', () => {
    const query = `INSERT INTO t_read_in_order_2 SELECT number, number FROM numbers(10000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 263', () => {
    const query = `INSERT INTO t_read_in_order_1 SELECT number, number FROM numbers(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 264', () => {
    const query = `INSERT INTO 03147_db.t SELECT * FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 265', () => {
    const query = `INSERT INTO null_table VALUES ('test'); --{serverError NOT_IMPLEMENTED} DROP TABLE IF EXISTS mv_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 266', () => {
    const query = `INSERT INTO t_ind_merge_2 SELECT number, number, rand(), rand(), rand(), rand() FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 267', () => {
    const query = `INSERT INTO t_ind_merge_1 SELECT number, number, rand(), rand() FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 268', () => {
    const query = `INSERT INTO tab VALUES ('Igor', 3), ('Egor', 1), ('Egor', 2), ('Igor', 2), ('Igor', 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 269', () => {
    const query = `INSERT INTO tab VALUES ('Bob', 4, 100, '1'), ('Nikita', 2, 54, '1'), ('Nikita', 1, 228, '1'), ('Alex', 4, 83, '1'), ('Alex', 4, 134, '1'), ('Alex', 1, 65, '0'), ('Alex', 4, 134, '1'), ('Bob', 2, 53, '0'), ('Alex', 4, 83, '0'), ('Alex', 1, 63, '1'), ('Bob', 2, 53, '1'), ('Alex', 4, 192, '1'), ('Alex', 2, 128, '1'), ('Nikita', 2, 148, '0'), ('Bob', 4, 177, '0'), ('Nikita', 1, 173, '0'), ('Alex', 1, 239, '0'), ('Alex', 1, 63, '0'), ('Alex', 2, 224, '1'), ('Bob', 4, 177, '0'), ('Alex', 2, 128, '1'), ('Alex', 4, 134, '0'), ('Alex', 4, 83, '1'), ('Bob', 4, 100, '0'), ('Nikita', 2, 54, '1'), ('Alex', 1, 239, '1'), ('Bob', 2, 187, '1'), ('Alex', 1, 65, '1'), ('Bob', 2, 53, '1'), ('Alex', 2, 224, '0'), ('Alex', 4, 192, '0'), ('Nikita', 1, 173, '1'), ('Nikita', 2, 148, '1'), ('Bob', 2, 187, '1'), ('Nikita', 2, 208, '1'), ('Nikita', 2, 208, '0'), ('Nikita', 1, 228, '0'), ('Nikita', 2, 148, '0');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 270', () => {
    const query = `INSERT INTO tab VALUES ('AB', 0, 42, Null), ('AB', 0, 42, Null), ('A', 1, 42, Null), ('AB', 1, 9.81, 0), ('B', 0, 42, Null), ('B', -1, 3.14, Null), ('B', 1, 2.7, 1), ('B', 0, 42, 1), ('A', 1, 42, 1), ('B', 1, 42, Null), ('B', 0, 2.7, 1), ('A', 0, 2.7, 1), ('B', 2, 3.14, Null), ('A', 0, 3.14, Null), ('A', 1, 2.7, 1), ('A', 1, 42, Null);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 271', () => {
    const query = `INSERT INTO tab VALUES ('A', '2020-01-01', [0.0, 1.1], 10, 'some string', {'key':'value'}, (123)), ('A', '2020-01-01', [0.0, 1.1], NULL, 'example', {}, (26)), ('A', '2020-01-01', [2.2, 1.1], 1, 'some other string', {'key2':'value2'}, (5)), ('A', '2020-01-02', [0.0, 1.1], 10, 'some string', {'key':'value'}, (123)), ('A', '2020-01-02', [0.0, 2.2], 10, 'example', {}, (26)), ('A', '2020-01-02', [2.2, 1.1], 1, 'some other string', {'key2':'value2'}, (5)), ('B', '2020-01-04', [0.0, 1.1], 10, 'some string', {'key':'value'}, (123)), ('B', '2020-01-04', [0.0, 2.2], Null, 'example', {}, (26)), ('B', '2020-01-04', [2.2, 1.1], 1, 'some string', {'key2':'value2'}, (5)), ('B', '2020-01-05', [0.0, 1.1], 10, 'some string', {'key':'value'}, (123)), ('B', '2020-01-05', [0.0, 2.2], Null, 'example', {}, (26)), ('B', '2020-01-05', [2.2, 1.1], 1, 'some other string', {'key':'value'}, (5)), ('C', '2020-01-04', [0.0, 1.1], 10, 'some string', {'key':'value'}, (5)), ('C', '2020-01-04', [0.0, 2.2], Null, 'example', {}, (26)), ('C', '2020-01-04', [2.2, 1.1], 1, 'some other string', {'key2':'value2'}, (5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 272', () => {
    const query = `insert into src values (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 273', () => {
    const query = `INSERT INTO 03165_token_bf VALUES(1, 'Service is not ready');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 274', () => {
    const query = `INSERT INTO 03165_token_ft VALUES(1, 'Service is not ready');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 275', () => {
    const query = `INSERT INTO ids VALUES ('a1451105-722e-4fe7-bfaa-65ad2ae249c2', 'whatever');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 276', () => {
    const query = `INSERT INTO data VALUES ('a1451105-722e-4fe7-bfaa-65ad2ae249c2', '2000-01-01', 'CREATED');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 277', () => {
    const query = `INSERT INTO data2 VALUES ('a1451105-722e-4fe7-bfaa-65ad2ae249c2', '2000-01-02', 'CREATED');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 278', () => {
    const query = `INSERT INTO tab SELECT number    ,  0, number, number, number, number, number, number, number, number, number, number, FROM system.numbers LIMIT 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 279', () => {
    const query = `INSERT INTO tab SELECT number+20 ,  0, number+10, number+10, number+10, number+10, number-10, number-10, number-10, number-10, (toFloat32(number)-10)/10, (toFloat64(number)-10)/10, FROM system.numbers LIMIT 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 280', () => {
    const query = `INSERT INTO tab SELECT number+40 , -1, number, number, number, number, number, number, number, number, number, number, FROM system.numbers LIMIT 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 281', () => {
    const query = `INSERT INTO tab SELECT number+60 , -1, number+10, number+10, number+10, number+10, number-10, number-10, number-10, number-10, (toFloat32(number)-10)/10, (toFloat64(number)-10)/10, FROM system.numbers LIMIT 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 282', () => {
    const query = `INSERT INTO tab SELECT number+80 , -2, number, number, number, number, number, number, number, number, number, number, FROM system.numbers LIMIT 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 283', () => {
    const query = `INSERT INTO tab SELECT number+100, -2, number+10, number+10, number+10, number+10, number-10, number-10, number-10, number-10, (toFloat32(number)-10)/10, (toFloat64(number)-10)/10, FROM system.numbers LIMIT 20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 284', () => {
    const query = `INSERT INTO tab SELECT number+200, -number, 0, 0, 0, 0, 0, 0, 0, 0, 12345.6789, 12345.6789, FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 285', () => {
    const query = `INSERT INTO tab SELECT number+210, -number, 0, 0, 0, 0, 0, 0, 0, 0, 12345.6789, 12345.6789, FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 286', () => {
    const query = `INSERT INTO tab VALUES (300, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2.0, 2.0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 287', () => {
    const query = `INSERT INTO tab VALUES (301, 4, 20, 20, 20, 20, 20, 20, 20, 20, 20.0, 20.0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 288', () => {
    const query = `INSERT INTO tab VALUES (302, 4, 200, 200, 200, 200, 200, 200, 200, 200, 200.0, 200.0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 289', () => {
    const query = `INSERT INTO tab VALUES (303, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5.0, 5.0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 290', () => {
    const query = `INSERT INTO tab VALUES (304, 4, 50, 50, 50, 50, 50, 50, 50, 50, 50.0, 50.0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 291', () => {
    const query = `INSERT INTO tab VALUES (305, 4, 500, 500, 500, 500, 500, 500, 500, 500, 500.0, 500.0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 292', () => {
    const query = `INSERT INTO tab VALUES (1, 6, toDecimal32('42.42', 4), toDecimal64('42.42', 4), toDecimal128('42.42', 4), toDecimal256('42.42', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 293', () => {
    const query = `INSERT INTO tab SELECT 2 , 6, cos(d32), cos(d64), cos(d128), cos(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 294', () => {
    const query = `INSERT INTO tab SELECT 3 , 6, sqrt(d32), sqrt(d64), sqrt(d128), sqrt(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 295', () => {
    const query = `INSERT INTO tab SELECT 4 , 6, lgamma(d32), lgamma(d64), lgamma(d128), lgamma(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 296', () => {
    const query = `INSERT INTO tab SELECT 5 , 6, tgamma(d32)/1e50, tgamma(d64)/1e50, tgamma(d128)/1e50, tgamma(d256)/1e50 FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 297', () => {
    const query = `INSERT INTO tab SELECT 6 , 8, sin(d32), sin(d64), sin(d128), sin(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 298', () => {
    const query = `INSERT INTO tab SELECT 7 , 8, cos(d32), cos(d64), cos(d128), cos(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 299', () => {
    const query = `INSERT INTO tab SELECT 8 , 8, log(d32), log(d64), log(d128), log(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 300', () => {
    const query = `INSERT INTO tab SELECT 9 , 8, log2(d32), log2(d64), log2(d128), log2(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 301', () => {
    const query = `INSERT INTO tab SELECT 10, 8, log10(d32), log10(d64), log10(d128), log10(d256) FROM tab WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 302', () => {
    const query = `INSERT INTO t_compact_bytes_s3 SELECT number, number, number, number, number FROM numbers(512 * 32 * 40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 303', () => {
    const query = `INSERT INTO range_filter_custom_range_test SELECT number + 5 from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 304', () => {
    const query = `INSERT INTO range_filter_custom_range_test_2 SELECT number from numbers(13);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 305', () => {
    const query = `INSERT INTO range_filter_custom_range_test_3 SELECT number from numbers(4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 306', () => {
    const query = `insert into function file('i8.orc') select materialize(-128)::Int8 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 307', () => {
    const query = `insert into function file('u8.orc') select materialize(128)::UInt8 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 308', () => {
    const query = `insert into function file('i16.orc') select materialize(-32768)::Int16 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 309', () => {
    const query = `insert into function file('u16.orc') select materialize(32768)::UInt16 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 310', () => {
    const query = `insert into function file('i32.orc') select materialize(-2147483648)::Int32 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 311', () => {
    const query = `insert into function file('u32.orc') select materialize(2147483648)::UInt32 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 312', () => {
    const query = `insert into function file('i64.orc') select materialize(-9223372036854775808)::Int64 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 313', () => {
    const query = `insert into function file('u64.orc') select materialize(9223372036854775808)::UInt64 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 314', () => {
    const query = `INSERT INTO 03164_users VALUES (1, 'John', 33);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 315', () => {
    const query = `INSERT INTO 03164_users VALUES (2, 'Ksenia', 48);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 316', () => {
    const query = `INSERT INTO 03164_users VALUES (NULL, 'Mark', 50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 317', () => {
    const query = `INSERT INTO 03164_multi_key VALUES (0, 0), (1, NULL), (NULL, 2), (NULL, NULL), (4, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 318', () => {
    const query = `INSERT INTO t_skip_index_insert SELECT number, number / 50 FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 319', () => {
    const query = `INSERT INTO t_skip_index_insert SELECT number, number / 50 FROM numbers(100, 100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 320', () => {
    const query = `insert into checks select * from generateRandom() limit 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 321', () => {
    const query = `INSERT INTO src_table(sipTimestamp) VALUES (toUnixTimestamp(toDateTime('2024-05-20 09:00:00', 'UTC')));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 322', () => {
    const query = `insert into t(c1) values(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 323', () => {
    const query = `INSERT INTO test_parquet SELECT rand(),rand(),rand(),rand(),rand(),rand(),rand() FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 324', () => {
    const query = `INSERT INTO dynamic_test_1 VALUES ('str_1'), (42::UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 325', () => {
    const query = `INSERT INTO dynamic_test_2 VALUES ('str_2'), (43::UInt64), ('2020-01-01'::Date), ([1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 326', () => {
    const query = `INSERT INTO t VALUES ([(1, 'aa'), (2, 'bb')]::Nested(x UInt32, y Dynamic)) ;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 327', () => {
    const query = `INSERT INTO t VALUES ([(1, (2, ['aa', 'bb'])), (5, (6, ['ee', 'ff']))]::Nested(x UInt32, y Dynamic));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 328', () => {
    const query = `INSERT INTO users_compact VALUES (1231, 'John', 33);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 329', () => {
    const query = `INSERT INTO users_compact VALUES (6666, 'Ksenia', 48), (8888, 'Alice', 50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 330', () => {
    const query = `INSERT INTO users_wide VALUES (1231, 'John', 33);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 331', () => {
    const query = `INSERT INTO users_wide VALUES (6666, 'Ksenia', 48), (8888, 'Alice', 50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 332', () => {
    const query = `INSERT INTO 03161_table VALUES (0, 0), (1, 1), (2, 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 333', () => {
    const query = `INSERT INTO 03161_reproducer VALUES (0, 0, 0, 0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0, 0, 0, 1), (0, 0, 0, 0, 0, 0, 0, 0, 1, 0), (0, 0, 0, 0, 0, 0, 0, 0, 1, 1), (0, 0, 0, 0, 0, 0, 0, 1, 0, 0), (0, 0, 0, 0, 0, 0, 0, 1, 0, 1), (0, 0, 0, 0, 0, 0, 0, 1, 1, 0), (0, 0, 0, 0, 0, 0, 0, 1, 1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 334', () => {
    const query = `INSERT INTO t SELECT sumState(number) AS d FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 335', () => {
    const query = `INSERT INTO t VALUES (-99999999.9::Decimal32(1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 336', () => {
    const query = `INSERT INTO t VALUES (-999999999.99::Decimal64(2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 337', () => {
    const query = `INSERT INTO t VALUES (-999999999.999::Decimal128(3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 338', () => {
    const query = `INSERT INTO t VALUES (-999999999.9999::Decimal256(4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 339', () => {
    const query = `INSERT INTO t VALUES ('2022-01-01'::Date), ('2022-01-01'::Date32), ('2022-01-01 01:01:01'::DateTime), ('2022-01-01 01:01:01.011'::DateTime64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 340', () => {
    const query = `INSERT INTO t2 SELECT * FROM t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 341', () => {
    const query = `INSERT INTO test_variable VALUES (1), ('s'), (0), ('0'), ('true'), ('false'), ('2001-01-01 01:01:01.111'), (NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 342', () => {
    const query = `INSERT INTO test_dynamic SELECT * FROM test_variable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 343', () => {
    const query = `INSERT INTO test_deep_nested_json VALUES (1, '{"level1": {"level2": {"level3": {"level4": {"level5": {"level6": {"level7": {"level8": {"level9": {"level10": "deep_value"}}}}}}}}}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 344', () => {
    const query = `INSERT INTO test_deep_nested_json VALUES (2, '{"level1": {"level2": {"level3": {"level4": {"level5": {"level6": {"level7": {"level8": {"level9": {"level10": "deep_array_value"}}}}}}}}}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 345', () => {
    const query = `INSERT INTO t_map_lc SELECT * FROM generateRandom('id UInt64, t Tuple(m Map(LowCardinality(String), LowCardinality(String)))') LIMIT 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 346', () => {
    const query = `INSERT INTO test SELECT number % 2 ? number * 123456789 : NULL FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 347', () => {
    const query = `INSERT INTO test_groupConcat VALUES (0, 95, 'abc', [1, 2, 3]), (1, NULL, 'a', [993, 986, 979, 972]), (2, 123, 'makson95', []);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 348', () => {
    const query = `INSERT INTO test_groupConcat SELECT number, number FROM numbers(100000) SETTINGS min_insert_block_size_rows = 2000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 349', () => {
    const query = `INSERT INTO arrays_test VALUES ('Hello', [1,2]), ('World', [3,4,5]), ('Goodbye', []);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 350', () => {
    const query = `INSERT INTO Example SELECT number AS id FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 351', () => {
    const query = `INSERT INTO Null SELECT number AS id FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 352', () => {
    const query = `INSERT INTO test_table VALUES ('a', '');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 353', () => {
    const query = `INSERT INTO test_table VALUES ('b', 'a');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 354', () => {
    const query = `INSERT INTO test_table VALUES ('c', 'a');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 355', () => {
    const query = `INSERT INTO test (a, b, c) VALUES (1, 2, 3, );`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 356', () => {
    const query = `INSERT INTO test (a, b, c) VALUES (4, 5, 6,);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 357', () => {
    const query = `INSERT INTO test (a, b, c) VALUES (7, 8, 9);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 358', () => {
    const query = `INSERT INTO test_null_empty VALUES ([]), ([1]), ([]), (['1']), ([]), (()),((1)), (()), (('1')), (()), ({}), ({1:2}), ({}), ({'1':'2'}), ({});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 359', () => {
    const query = `INSERT INTO test (a, b, c, ) VALUES (1, 2, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 360', () => {
    const query = `INSERT INTO test (a, b, c) VALUES (4, 5, 6);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 361', () => {
    const query = `INSERT INTO users VALUES (1231, 'John', 33);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 362', () => {
    const query = `INSERT INTO users VALUES (6666, 'Ksenia', 48);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 363', () => {
    const query = `INSERT INTO users VALUES (8888, 'Alice', 50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 364', () => {
    const query = `INSERT INTO users2 VALUES (1231, 'John', 33);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 365', () => {
    const query = `INSERT INTO users2 VALUES (6666, 'Ksenia', 48);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 366', () => {
    const query = `INSERT INTO users2 VALUES (8888, 'Alice', 50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 367', () => {
    const query = `INSERT INTO test_max_types VALUES ('string1'), (42), (3.14), ([1, 2]), (toDate('2021-01-01')), ('string2');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 368', () => {
    const query = `INSERT INTO test_nested_dynamic VALUES (NULL, 42), (42, 'string'), ('string', [1, 2]), ([1, 2], NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 369', () => {
    const query = `INSERT INTO test_rapid_schema VALUES (42), ('string1'), (toDate('2021-01-01')), ([1, 2, 3]), (3.14), ('string2'), (toDateTime('2021-01-01 12:00:00')), (['array', 'of', 'strings']), (NULL), (toFloat64(42.42));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 370', () => {
    const query = `INSERT INTO test VALUES ('foo', 'bar1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 371', () => {
    const query = `insert into tab values (1,10,'2023-01-14 00:00:00',1),(2,20,'2023-01-14 00:00:00',1),(3,20,'2023-01-14 00:00:00',2),(4,40,'2023-01-14 00:00:00',3),(5,50,'2023-01-14 00:00:00',3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 372', () => {
    const query = `INSERT INTO t1 VALUES (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 373', () => {
    const query = `INSERT INTO t1 VALUES (10),(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 374', () => {
    const query = `INSERT INTO t1 VALUES (1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 375', () => {
    const query = `INSERT INTO t1 VALUES (10000),(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 376', () => {
    const query = `INSERT INTO to_table ( n1, n2 ) VALUES (1, '2024-01-01'), (2, toDateTime64('2024-01-01', 3, 'Asia/Istanbul')), (3, toFloat32(1)), (4, toFloat64(2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 377', () => {
    const query = `INSERT INTO test_grouping_sets_predicate SELECT toDate('2023-01-05') AS day_, 'hello, world' FROM numbers (10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 378', () => {
    const query = `INSERT INTO null_table ( n1, n2 ) VALUES (1, '2024-01-01'), (2, toDateTime64('2024-01-01', 3, 'Asia/Istanbul')), (3, toFloat32(1)), (4, toFloat64(2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 379', () => {
    const query = `INSERT INTO events0 VALUES (NULL, -1), (toDateTime('9999-12-31 23:59:59'), 9);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 380', () => {
    const query = `INSERT INTO probe0 VALUES (NULL), (toDateTime('9999-12-31 23:59:59'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 381', () => {
    const query = `INSERT INTO test_table VALUES (0, 'Value_0');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 382', () => {
    const query = `INSERT INTO t_mut_virtuals VALUES (1, 'a');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 383', () => {
    const query = `INSERT INTO t_mut_virtuals VALUES (2, 'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 384', () => {
    const query = `INSERT INTO events VALUES (1, 0), (3, 1), (6, 2), (8, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 385', () => {
    const query = `INSERT INTO t SELECT * FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 386', () => {
    const query = `insert into function file('03147_parquet_memory_tracking.parquet') select number from numbers(10000000) settings output_format_parquet_compression_method='none', output_format_parquet_row_group_size=1000000000000, engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 387', () => {
    const query = `insert into function file('03147_parquet_memory_tracking.parquet') select number from numbers(1) settings engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 388', () => {
    const query = `INSERT INTO test SELECT toDateTime('2024-01-01') + number FROM numbers(1e6);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 389', () => {
    const query = `insert into table_pv values(1, '2024-03-01 00:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 390', () => {
    const query = `insert into table_pv values (2, '2024-04-01 01:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 391', () => {
    const query = `INSERT INTO events0 SELECT toDateTime('2023-03-21 13:00:00', 'UTC') + INTERVAL number HOUR, number FROM numbers(4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 392', () => {
    const query = `INSERT INTO events0 VALUES (NULL, -10),('0000-01-01 00:00:00', -1), ('9999-12-31 23:59:59', 9);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 393', () => {
    const query = `INSERT INTO probe0 SELECT toDateTime('2023-03-21 12:00:00', 'UTC') + INTERVAl number HOUR FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 394', () => {
    const query = `INSERT INTO probe0 VALUES (NULL),('9999-12-31 23:59:59');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 395', () => {
    const query = `INSERT INTO events0 VALUES (1.0, 0), (3.0, 1), (6.0, 2), (8.0, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 396', () => {
    const query = `INSERT INTO events VALUES (1, 1.0, 0), (1, 3.0, 1), (1, 6.0, 2), (1, 8.0, 3), (2, 0.0, 10), (2, 7.0, 20), (2, 11.0, 30);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 397', () => {
    const query = `insert into tab select number from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 398', () => {
    const query = `INSERT INTO test_03143 VALUES ('2100-01-01', 123, 'Hello, world!', 'xxx yyy');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 399', () => {
    const query = `INSERT INTO null_table VALUES ('test');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 400', () => {
    const query = `INSERT INTO t1 VALUES (1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 401', () => {
    const query = `INSERT INTO t2 VALUES (1, 'test');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 402', () => {
    const query = `INSERT INTO tmp_a VALUES (1,2,3,4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 403', () => {
    const query = `INSERT INTO tmp_a VALUES (5,6,7,8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 404', () => {
    const query = `INSERT INTO tmp_b VALUES (1,2,0.3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 405', () => {
    const query = `INSERT INTO tmp_b VALUES (5,6,0.4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 406', () => {
    const query = `insert into data_r1 select number, randomPrintableASCII(100) from numbers(100_000) settings max_block_size=1000, min_insert_block_size_rows=1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 407', () => {
    const query = `INSERT INTO t4(c0) VALUES (-405831124);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 408', () => {
    const query = `INSERT INTO t1(c1, c0) VALUES (278926179, 891140511);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 409', () => {
    const query = `INSERT INTO t4(c0) VALUES (1586457527);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 410', () => {
    const query = `INSERT INTO t3(c0) VALUES ('?/|D!6	'), ('1586457527');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 411', () => {
    const query = `INSERT INTO t2(c0) VALUES (1475250982);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 412', () => {
    const query = `INSERT INTO test1_00395 VALUES (1, 1, 'a', 'a', [1], [1], ['a'], ['a'], '2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 413', () => {
    const query = `INSERT INTO test1_00395 VALUES (1, NULL, 'a', 'a', [1], [1], ['a'], ['a'], '2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 414', () => {
    const query = `INSERT INTO test1_00395 VALUES (1, 1, 'a', NULL, [1], [1], ['a'], ['a'], '2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 415', () => {
    const query = `INSERT INTO test1_00395 VALUES (1, 1, 'a', 'a', [1], [NULL], ['a'], ['a'], '2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 416', () => {
    const query = `INSERT INTO test1_00395 VALUES (1, 1, 'a', 'a', [1], [1], ['a'], [NULL], '2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 417', () => {
    const query = `insert into hilbert_numbers_03131 select n1.number, n2.number
from numbers(pow(2, 32)-8,8) n1
cross join numbers(pow(2, 32)-8, 8) n2
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 418', () => {
    const query = `insert into hilbert_numbers_1_03131 select untuple(hilbertDecode(2, hilbertEncode(n1, n2)))
from hilbert_numbers_03131;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 419', () => {
    const query = `INSERT INTO test_table_1 VALUES (1, 'Value_1'), (2, 'Value_2');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 420', () => {
    const query = `INSERT INTO test_table_2 VALUES (2, 'Value_2'), (3, 'Value_3');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 421', () => {
    const query = `INSERT INTO t1 VALUES (1), (2), (3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 422', () => {
    const query = `INSERT INTO test_table VALUES (0, 'aaa', [0]), (1, 'bbb', [1]), (2, 'ccc', [2]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 423', () => {
    const query = `INSERT INTO t VALUES (1, toDateTime('2023-05-04 21:17:23', 'UTC')), (1, toDateTime('2023-05-04 22:17:23', 'UTC')), (2, toDateTime('2023-05-04 22:17:23', 'UTC')), (2, toDateTime('2023-05-04 23:17:23', 'UTC'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 424', () => {
    const query = `INSERT INTO elements (id,\`nested.key\`,\`nested.value\`) VALUES (5555, ['moto', 'hello'],['chocolatine', 'croissant']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 425', () => {
    const query = `INSERT INTO small (dt, user_email) SELECT number, if(number % 3 = 2, NULL, number) FROM numbers(1e2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 426', () => {
    const query = `INSERT INTO t Values (1, 'first', '2024-04-19 01:01:01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 427', () => {
    const query = `INSERT INTO test SELECT randomString(1000) FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 428', () => {
    const query = `INSERT INTO test2 SELECT randomString(1000) FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 429', () => {
    const query = `INSERT INTO t_index_lazy_load SELECT number, number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 430', () => {
    const query = `INSERT INTO combinator_argMin_table_r1 SELECT
number % 10 as id,
number as value,
'2024-01-01 00:00:00' + INTERVAL number SECOND
FROM
numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 431', () => {
    const query = `INSERT INTO combinator_argMin_table_r1 SELECT
number % 10 as id,
number * 10 as value,
'2024-01-01 00:00:00' + INTERVAL number SECOND
FROM
numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 432', () => {
    const query = `INSERT INTO argmax_comb SELECT
CAST(number % 10, 'UInt64') AS id,
avgArgMaxState(CAST(number, 'Float64'), id)
FROM numbers(100)
GROUP BY id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 433', () => {
    const query = `INSERT INTO events VALUES ('1234'), ('1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 434', () => {
    const query = `insert into t0 values (1, 10), (2, 12);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 435', () => {
    const query = `insert into test_window_collate values('1', '上海');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 436', () => {
    const query = `insert into test_window_collate values('1', '北京');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 437', () => {
    const query = `insert into test_window_collate values('1', '西安');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 438', () => {
    const query = `INSERT INTO a1 (day, id) VALUES ('2019-01-01', 9), ('2019-01-01', 10), ('2019-01-02', 10), ('2019-01-01', 11);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 439', () => {
    const query = `INSERT INTO b1 (day, id) VALUES ('2019-01-01', 9), ('2019-01-01', 10), ('2019-01-02', 11), ('2019-01-01', 11);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 440', () => {
    const query = `INSERT INTO test VALUES (10,10),(20,20);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 441', () => {
    const query = `insert into a1 values('CROCO');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 442', () => {
    const query = `insert into x select number, number from VALUES('number UInt64', 1000, 10000, 100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 443', () => {
    const query = `insert into t values(1),(2),(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 444', () => {
    const query = `insert into t values('a'),('b'),('c');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 445', () => {
    const query = `INSERT INTO my_first_table (user_id, message, timestamp, metric) VALUES (101, 'Hello, ClickHouse!',                                 now(),       -1.0    ),     (102, 'Insert a lot of rows per batch',                     yesterday(), 1.41421 ),    (102, 'Sort your data based on your commonly-used queries', today(),     2.718   ),    (101, 'Granules are the smallest chunks of data read',      now() + 5,   3.14159 );`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 446', () => {
    const query = `INSERT INTO event VALUES ('2020-05-01 00:00:01', 'install', '1'), ('2020-05-01 00:00:02', 'install', '2'), ('2020-05-01 00:00:03', 'install', '3');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 447', () => {
    const query = `INSERT INTO user VALUES ('1', 'type_1'), ('2', 'type_2'), ('3', 'type_3');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 448', () => {
    const query = `INSERT INTO loans VALUES (1, 'AAA');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 449', () => {
    const query = `INSERT INTO loans VALUES (1, 'BBB');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 450', () => {
    const query = `insert into t1 values ('succeed');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 451', () => {
    const query = `insert into t2 values ('succeed');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 452', () => {
    const query = `INSERT INTO aliased VALUES (10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 453', () => {
    const query = `INSERT INTO aliased3 VALUES (10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 454', () => {
    const query = `INSERT INTO users VALUES ('John', 33);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 455', () => {
    const query = `INSERT INTO users VALUES ('Ksenia', 48);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 456', () => {
    const query = `INSERT INTO users VALUES ('Alice', 50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 457', () => {
    const query = `INSERT INTO \`clickhouse_alias_issue_1\` VALUES (1, 100), (2, 200), (3, 300);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 458', () => {
    const query = `INSERT INTO \`clickhouse_alias_issue_2\` VALUES (1, 10), (2, 20), (3, 30);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 459', () => {
    const query = `insert into test values (1, 1), (1, 'str_1'), (1, 2), (1, 'str_2');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 460', () => {
    const query = `INSERT INTO test_03096 SELECT number, number % 42, number % 123 FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 461', () => {
    const query = `insert into mt1 values(1, 1), (2, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 462', () => {
    const query = `insert into b   values(3, 3), (4, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 463', () => {
    const query = `INSERT INTO t1__fuzz_0 SELECT number, toString(number) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 464', () => {
    const query = `INSERT INTO left_join__fuzz_2 SELECT number, toString(number) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 465', () => {
    const query = `INSERT INTO 03094_grouparrysorted_src SELECT * FROM generateRandom() LIMIT 500000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 466', () => {
    const query = `INSERT INTO users_03094 VALUES ('John', 33);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 467', () => {
    const query = `INSERT INTO users_03094 VALUES ('Ksenia', 48);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 468', () => {
    const query = `INSERT INTO users_03094 VALUES ('Alice', 50);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 469', () => {
    const query = `insert into t2 select number from numbers_mt(1e6);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 470', () => {
    const query = `INSERT INTO test_gcd SELECT floor(randUniform(1, 3)) FROM numbers(150000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 471', () => {
    const query = `INSERT INTO test_gcd2 SELECT floor(randUniform(1, 3)) FROM numbers(150000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 472', () => {
    const query = `INSERT INTO test_03093 VALUES ('x1', 123, {'k1': ''});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 473', () => {
    const query = `INSERT INTO test_03093 VALUES ('x1', 123, {'k1': '', 'k11': ''});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 474', () => {
    const query = `INSERT INTO test_03093 VALUES ('x1', 12,  {'k1': ''});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 475', () => {
    const query = `INSERT INTO {CLICKHOUSE_DATABASE:Identifier}.\`1-1\` VALUES (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 476', () => {
    const query = `INSERT INTO test1 SELECT 'pk1', 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 477', () => {
    const query = `INSERT INTO test2 SELECT 'pk1', 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 478', () => {
    const query = `insert into test values ('2020-01-01', 'text1'), ('2019-01-01', 'text2'), ('1900-01-01', 'text3');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 479', () => {
    const query = `INSERT INTO first_table VALUES ('1', '2'), ('3', '4');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 480', () => {
    const query = `INSERT INTO second_table VALUES ('1', '2'), ('3', '4');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 481', () => {
    const query = `INSERT INTO testdata VALUES ('testdata');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 482', () => {
    const query = `INSERT INTO t2 SELECT number, number FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 483', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 484', () => {
    const query = `insert into test values(1,'1970-02-01 00:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 485', () => {
    const query = `insert into test values(2,'1970-02-01 00:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 486', () => {
    const query = `insert into test values(3,'1970-03-01 00:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 487', () => {
    const query = `INSERT INTO test SELECT 'token-transfer-0x758f1bbabb160683e1c80ed52dcd24a32b599d40edf1cec91b5f1199c0e392a2-56', hex2bytes('0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459'), 3000000000000000000000, '2024-01-02 16:54:59', 'abc';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 488', () => {
    const query = `INSERT INTO token_data SELECT bytes2hex('abc'), 'zksync', false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 489', () => {
    const query = `insert into test values('abc',0,0,0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 490', () => {
    const query = `insert into test_join values('abc',0,1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 491', () => {
    const query = `insert into fact values (1,1,1),(2,2,2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 492', () => {
    const query = `insert into animals values (0, 'unknown');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 493', () => {
    const query = `insert into colors values (0, 'unknown');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 494', () => {
    const query = `INSERT INTO test VALUES (1,2), (1,3), (2,4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 495', () => {
    const query = `INSERT INTO nested_test VALUES ('Hello', [1,2], [10,20]), ('World', [3,4,5], [30,40,50]), ('Goodbye', [], []);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 496', () => {
    const query = `INSERT INTO join_test VALUES (1,1),(2,4),(3,20),(4,40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 497', () => {
    const query = `INSERT INTO repl_tbl (key) SELECT number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 498', () => {
    const query = `insert into fill_ex (eventDate,storeId) values ('2021-07-16','s') ('2021-07-17','ee');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 499', () => {
    const query = `INSERT INTO y SELECT * FROM numbers(1, 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 500', () => {
    const query = `insert into test select number, number from numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 501', () => {
    const query = `insert into test select number, number, number from numbers(3, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 502', () => {
    const query = `insert into test select number, number, 'str_' || toString(number) from numbers(6, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 503', () => {
    const query = `insert into test select number, number, NULL from numbers(9, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 504', () => {
    const query = `insert into test select number, number, multiIf(number % 3 == 0, number, number % 3 == 1, 'str_' || toString(number), NULL) from numbers(12, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 505', () => {
    const query = `insert into test select number, number, [number % 2 ? number : 'str_' || toString(number)]::Array(Dynamic) from numbers(15, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 506', () => {
    const query = `insert into test select number, number, multiIf(number % 4 == 0, number, number % 4 == 1, 'str_' || toString(number), number % 4 == 2, toDate(number), NULL) from numbers(15, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 507', () => {
    const query = `insert into test select number, number, multiIf(number % 4 == 0, number, number % 4 == 1, 'str_' || toString(number), number % 4 == 2, toDate(number), NULL) from numbers(19, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 508', () => {
    const query = `insert into test select number, multiIf(number % 3 == 0, number, number % 3 == 1, 'str_' || toString(number), NULL), NULL from numbers(23, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 509', () => {
    const query = `INSERT INTO graph VALUES (1, 2, 'arc 1 -> 2'), (1, 3, 'arc 1 -> 3'), (2, 3, 'arc 2 -> 3'), (1, 4, 'arc 1 -> 4'), (4, 5, 'arc 4 -> 5'), (5, 1, 'arc 5 -> 1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 510', () => {
    const query = `insert into test select number, number from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 511', () => {
    const query = `insert into test select number, tuple(if(number % 3 == 0, number, 'str_' || toString(number)))::Tuple(a Dynamic(max_types=2)) from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 512', () => {
    const query = `insert into test select number, tuple(if(number % 3 == 0, toDate(number), range(number % 10)))::Tuple(a Dynamic(max_types=2)) from numbers(50000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 513', () => {
    const query = `insert into test select number, multiIf(number % 5 == 0, tuple(if(number % 3 == 0, toDateTime(number), toIPv4(number)))::Tuple(a Dynamic(max_types=2)), number % 5 == 1 or number % 5 == 2, number, 'str_' || number) from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 514', () => {
    const query = `insert into test select number, tuple(if(number % 3 == 0, toDateTime(number), NULL))::Tuple(a Dynamic(max_types=2)) from numbers(50000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 515', () => {
    const query = `insert into test select number, tuple(if(number % 2 == 0, tuple(number), NULL))::Tuple(a Dynamic(max_types=2)) from numbers(200000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 516', () => {
    const query = `insert into test select number, tuple(toDateTime(number))::Tuple(a Dynamic(max_types=2)) from numbers(40000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 517', () => {
    const query = `INSERT INTO move_partition_to_oneself SELECT number FROM numbers(1e6);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 518', () => {
    const query = `insert into function s3('http://localhost:11111/test/data_*_{_partition_id}.csv') partition by number % 3 select * from numbers(10); -- {serverError DATABASE_ACCESS_DENIED} `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 519', () => {
    const query = `INSERT INTO tree VALUES (1, NULL), (2, 1), (3,1), (4,2), (5,2), (6,2), (7,3), (8,3), (9,4), (10,4), (11,7), (12,7), (13,7), (14, 9), (15,11), (16,11);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 520', () => {
    const query = `insert into test select number, number from numbers(200000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 521', () => {
    const query = `insert into test select number, 'str_' || toString(number) from numbers(200000, 200000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 522', () => {
    const query = `insert into test select number, range(number % 10 + 1) from numbers(400000, 200000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 523', () => {
    const query = `insert into test select number, 'str_' || toString(number) from numbers(80000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 524', () => {
    const query = `insert into test select number, range(number % 10 + 1) from numbers(70000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 525', () => {
    const query = `insert into test select number, toDate(number) from numbers(60000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 526', () => {
    const query = `insert into test select number, toDateTime(number) from numbers(50000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 527', () => {
    const query = `insert into test select number, NULL from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 528', () => {
    const query = `insert into test select number, map(number, number) from numbers(200000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 529', () => {
    const query = `insert into test select number, tuple(number, number) from numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 530', () => {
    const query = `insert into test select number, 'str_' || number from numbers(30000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 531', () => {
    const query = `INSERT INTO department VALUES (0, NULL, 'ROOT');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 532', () => {
    const query = `INSERT INTO department VALUES (1, 0, 'A');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 533', () => {
    const query = `INSERT INTO department VALUES (2, 1, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 534', () => {
    const query = `INSERT INTO department VALUES (3, 2, 'C');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 535', () => {
    const query = `INSERT INTO department VALUES (4, 2, 'D');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 536', () => {
    const query = `INSERT INTO department VALUES (5, 0, 'E');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 537', () => {
    const query = `INSERT INTO department VALUES (6, 4, 'F');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 538', () => {
    const query = `INSERT INTO department VALUES (7, 5, 'G');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 539', () => {
    const query = `INSERT INTO t VALUES ([1,2,3]), ([4,5,6]), ([7,8,9]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 540', () => {
    const query = `INSERT INTO test_table_1 SELECT number, number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 541', () => {
    const query = `INSERT INTO test_table_2 SELECT number, number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 542', () => {
    const query = `insert into test select number, number from numbers(100000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 543', () => {
    const query = `insert into test select number, 'str_' || toString(number) from numbers(100000, 100000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 544', () => {
    const query = `insert into test select number, arrayMap(x -> multiIf(number % 9 == 0, NULL, number % 9 == 3, 'str_' || toString(number), number), range(number % 10 + 1)) from numbers(200000, 100000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 545', () => {
    const query = `insert into test select number, NULL from numbers(300000, 100000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 546', () => {
    const query = `insert into test select number, multiIf(number % 4 == 3, 'str_' || toString(number), number % 4 == 2, NULL, number % 4 == 1, number, arrayMap(x -> multiIf(number % 9 == 0, NULL, number % 9 == 3, 'str_' || toString(number), number), range(number % 10 + 1))) from numbers(400000, 400000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 547', () => {
    const query = `insert into test select number, [range((number % 10 + 1)::UInt64)]::Array(Array(Dynamic)) from numbers(100000, 100000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 548', () => {
    const query = `insert into test select number, if (number % 5 == 1, [range((number % 10 + 1)::UInt64)]::Array(Array(Dynamic)), number) from numbers(100000, 100000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 549', () => {
    const query = `insert into test select number, if (number % 5 == 1, ('str_' || number)::LowCardinality(String)::Dynamic, number::Dynamic) from numbers(100000, 100000) settings min_insert_block_size_rows=50000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 550', () => {
    const query = `INSERT INTO test VALUES (1, 'Alice'), (2, 'Bob');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 551', () => {
    const query = `insert into test values (42, 42), (42, 43), (43, 42), ('abc', 'abc'), ('abc', 'abd'), ('abd', 'abc'), ([1,2,3], [1,2,3]), ([1,2,3], [1,2,4]), ([1,2,4], [1,2,3]),
('2020-01-01', '2020-01-01'), ('2020-01-01', '2020-01-02'), ('2020-01-02', '2020-01-01'),
(NULL, NULL), (42, 'abc'), ('abc', 42), (42, [1,2,3]), ([1,2,3], 42), (42, NULL), (NULL, 42),
('abc', [1,2,3]), ([1,2,3], 'abc'), ('abc', NULL), (NULL, 'abc'), ([1,2,3], NULL), (NULL, [1,2,3]),
(42, '2020-01-01'), ('2020-01-01', 42), ('2020-01-01', 'abc'), ('abc', '2020-01-01'),
('2020-01-01', [1,2,3]), ([1,2,3], '2020-01-01'), ('2020-01-01', NULL), (NULL, '2020-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 552', () => {
    const query = `INSERT INTO test (uuid, time, value) VALUES ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:00.000',0), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:09.000',1), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:10.000',2), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:19.000',3), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:20.000',2), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:29.000',1), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:30.000',0),  ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:39.000',-1), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:40.000',-2), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:49.000',-3), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:50.000',-2), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:00:59.000',-1), ('a1000000-0000-0000-0000-0000000000a1','2021-01-01 00:01:00.000',0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 553', () => {
    const query = `INSERT INTO alias_bug VALUES ('SOURCE1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 554', () => {
    const query = `INSERT INTO tree VALUES (0, NULL, 'ROOT'), (1, 0, 'Child_1'), (2, 0, 'Child_2'), (3, 1, 'Child_1_1');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 555', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (0, NULL, 'ROOT');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 556', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (1, 0, 'A');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 557', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (2, 1, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 558', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (3, 2, 'C');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 559', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (4, 2, 'D');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 560', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (5, 0, 'E');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 561', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (6, 4, 'F');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 562', () => {
    const query = `INSERT INTO department__fuzz_1 VALUES (7, 5, 'G');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 563', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (0, NULL, 'ROOT');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 564', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (1, 0, 'A');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 565', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (2, 1, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 566', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (3, 2, 'C');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 567', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (4, 2, 'D');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 568', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (5, 0, 'E');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 569', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (6, 4, 'F');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 570', () => {
    const query = `INSERT INTO department__fuzz_3 VALUES (7, 5, 'G');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 571', () => {
    const query = `insert into test values (NULL), (42), ('42.42'), (true), ('e10');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 572', () => {
    const query = `INSERT INTO tab VALUES (map(1.0, 'a'), map('b', 'b'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 573', () => {
    const query = `INSERT INTO tab VALUES (map(2.0, 'aa'), map('bb', 'bb'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 574', () => {
    const query = `INSERT INTO tab VALUES (map(1.0, 'a'), map('b', 'b')), (map(2.0, 'aa'), map('bb', 'bb'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 575', () => {
    const query = `insert into a select number, intDiv(number, 4096) from numbers(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 576', () => {
    const query = `insert into test_tmp select * from generateRandom() limit 24;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 577', () => {
    const query = `insert into test_tmp select * from generateRandom() limit 25;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 578', () => {
    const query = `insert into test_tmp select * from generateRandom() limit 26;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 579', () => {
    const query = `insert into test_tmp select * from generateRandom() limit 30;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 580', () => {
    const query = `INSERT INTO test(address, deployer, block_number, block_hash, block_timestamp, insertion_time) SELECT * FROM test_tmp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 581', () => {
    const query = `insert into t select 42, number from numbers_mt(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 582', () => {
    const query = `insert into t select number, number from numbers_mt(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 583', () => {
    const query = `INSERT INTO t_lightweight_deletes VALUES (1) (2) (3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 584', () => {
    const query = `INSERT INTO t4_2 (col1, col2, col3) SELECT number, number, number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 585', () => {
    const query = `INSERT INTO account_test VALUES (11338881281426660955,717769962224129342),(12484100559155738267,7950971667203174918),(7603729260199571867,3255798127676911942),(7023543111808724827,911615979861855126),(10293135086416484571,3264379259750736572),(15561193439904316763,8419819469587131454),(17632407413882870235,7252071832370181502),(17009726455991851227,7525297506591593939),(12392078953873778779,8473049173389293961),(15283366022689446555,11692491360262171467),(9087459014730986523,2783662960221838603),(293823584550906267,4847630088179732782),(15693186194430465755,8163804880526285623),(7353080168325584795,17315892478487497859),(5980311238303466523,6943353798059390089),(14242621660019578011,8684624667957352769),(8241843507567433563,15731952080102886438);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 586', () => {
    const query = `INSERT INTO account_test VALUES (11338881281426660955, 14765404159170880511);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 587', () => {
    const query = `insert into test values ('42'), ('42.42'), ('[1, 2, 3]'), ('2020-01-01'), ('2020-01-01 10:00:00'), ('NULL'), ('true');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 588', () => {
    const query = `INSERT INTO dt SETTINGS distributed_foreground_insert=1 VALUES (1, 'foo1'); -- shard0 INSERT INTO dt SETTINGS distributed_foreground_insert=1 VALUES (1, 'foo2'); -- shard1
SET optimize_skip_unused_shards=1, optimize_skip_unused_shards_rewrite_in=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 589', () => {
    const query = `INSERT INTO vecs_Float32 SELECT v FROM (
SELECT
number AS n,
[
rand(n*10), rand(n*10+1), rand(n*10+2), rand(n*10+3), rand(n*10+4), rand(n*10+5), rand(n*10+6), rand(n*10+7), rand(n*10+8), rand(n*10+9),
rand(n*10+10), rand(n*10+11), rand(n*10+12), rand(n*10+13), rand(n*10+14), rand(n*10+15), rand(n*10+16), rand(n*10+17), rand(n*10+18), rand(n*10+19),
rand(n*10+20), rand(n*10+21), rand(n*10+22), rand(n*10+23), rand(n*10+24), rand(n*10+25), rand(n*10+26), rand(n*10+27), rand(n*10+28), rand(n*10+29),
rand(n*10+30), rand(n*10+31), rand(n*10+32), rand(n*10+33), rand(n*10+34), rand(n*10+35), rand(n*10+36), rand(n*10+37), rand(n*10+38), rand(n*10+39),
rand(n*10+40), rand(n*10+41), rand(n*10+42), rand(n*10+43), rand(n*10+44), rand(n*10+45), rand(n*10+46), rand(n*10+47), rand(n*10+48), rand(n*10+49),
rand(n*10+50), rand(n*10+51), rand(n*10+52), rand(n*10+53), rand(n*10+54), rand(n*10+55), rand(n*10+56), rand(n*10+57), rand(n*10+58), rand(n*10+59),
rand(n*10+60), rand(n*10+61), rand(n*10+62), rand(n*10+63), rand(n*10+64), rand(n*10+65), rand(n*10+66), rand(n*10+67), rand(n*10+68), rand(n*10+69),
rand(n*10+70), rand(n*10+71), rand(n*10+72), rand(n*10+73), rand(n*10+74), rand(n*10+75), rand(n*10+76), rand(n*10+77), rand(n*10+78), rand(n*10+79),
rand(n*10+80), rand(n*10+81), rand(n*10+82), rand(n*10+83), rand(n*10+84), rand(n*10+85), rand(n*10+86), rand(n*10+87), rand(n*10+88), rand(n*10+89),
rand(n*10+90), rand(n*10+91), rand(n*10+92), rand(n*10+93), rand(n*10+94), rand(n*10+95), rand(n*10+96), rand(n*10+97), rand(n*10+98), rand(n*10+99),
rand(n*10+100), rand(n*10+101), rand(n*10+102), rand(n*10+103), rand(n*10+104), rand(n*10+105), rand(n*10+106), rand(n*10+107), rand(n*10+108), rand(n*10+109),
rand(n*10+110), rand(n*10+111), rand(n*10+112), rand(n*10+113), rand(n*10+114), rand(n*10+115), rand(n*10+116), rand(n*10+117), rand(n*10+118), rand(n*10+119),
rand(n*10+120), rand(n*10+121), rand(n*10+122), rand(n*10+123), rand(n*10+124), rand(n*10+125), rand(n*10+126), rand(n*10+127), rand(n*10+128), rand(n*10+129),
rand(n*10+130), rand(n*10+131), rand(n*10+132), rand(n*10+133), rand(n*10+134), rand(n*10+135), rand(n*10+136), rand(n*10+137), rand(n*10+138), rand(n*10+139),
rand(n*10+140), rand(n*10+141), rand(n*10+142), rand(n*10+143), rand(n*10+144), rand(n*10+145), rand(n*10+146), rand(n*10+147), rand(n*10+148), rand(n*10+149)
] AS v
FROM system.numbers
LIMIT 10
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 590', () => {
    const query = `INSERT INTO raw_data SELECT number, number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 591', () => {
    const query = `insert into test values (1, 'a'), (2, 'bb'), (3, 'ccc'), (4, 'dddd');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 592', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(0, 100); -- 1024 bytes INSERT INTO memory SELECT * FROM numbers(0, 3000); -- 16384 bytes
SELECT total_bytes FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 17408 in total
ALTER TABLE memory MODIFY SETTING min_bytes_to_keep = 4096, max_bytes_to_keep = 16384;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 593', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(0, 100); -- 100 rows INSERT INTO memory SELECT * FROM numbers(100, 1000); -- 1000 rows
SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 1100 in total
ALTER TABLE memory MODIFY SETTING min_rows_to_keep = 100, max_rows_to_keep = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 594', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(0, 50); -- 50 rows SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 50 in total
INSERT INTO memory SELECT * FROM numbers(50, 950); -- 950 rows
SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 1000 in total
INSERT INTO memory SELECT * FROM numbers(2000, 70); -- 70 rows
SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 1070 in total
ALTER TABLE memory MODIFY SETTING min_rows_to_keep = 100, max_rows_to_keep = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 595', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(0, 50); -- 50 rows SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 50 in total
INSERT INTO memory SELECT * FROM numbers(50, 950); -- 950 rows
SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 1000 in total
INSERT INTO memory SELECT * FROM numbers(2000, 70); -- 70 rows
SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 1020 in total after deleting
INSERT INTO memory SELECT * FROM numbers(3000, 1100); -- 1100 rows
SELECT total_rows FROM system.tables WHERE name = 'memory' and database = currentDatabase(); -- 1100 in total after deleting
SELECT 'TESTING INVALID SETTINGS';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 596', () => {
    const query = `INSERT INTO test_table SELECT number FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 597', () => {
    const query = `INSERT INTO 03031_test SELECT number,
toString(number),
toString(number),
toString(number)
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 598', () => {
    const query = `insert into dist_in select number/100, number from system.numbers limit 3e6 settings max_block_size=3e6, max_memory_usage='100Mi';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 599', () => {
    const query = `INSERT INTO src_table (a, b) VALUES (1, 1), (2, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 600', () => {
    const query = `INSERT INTO set_index_not__fuzz_0 SELECT * from generateRandom() limit 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 601', () => {
    const query = `INSERT INTO test_data (ShipmentDate) Values ('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'), ('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-02-07'), ('2022-02-11'), ('2022-02-15'), ('2022-02-16'), ('2022-02-18'), ('2022-02-22'), ('2022-02-24'), ('2022-03-02'), ('2022-03-04'), ('2022-03-07'), ('2022-03-09'), ('2022-03-10'), ('2022-03-11'), ('2022-03-14'), ('2022-03-15'), ('2022-03-17'), ('2022-03-18'), ('2022-03-23'), ('2022-04-28'), ('2022-05-24'), ('2022-03-31'), ('2022-04-19'), ('2022-04-25'), ('2022-04-26'), ('2022-05-02'), ('2022-05-04'), ('2022-05-05'), ('2022-05-11'), ('2022-05-12'), ('2022-05-13'), ('2022-05-16'), ('2022-05-18'), ('2022-05-20'), ('2022-05-23'), ('2022-05-27'), ('2022-05-31'), ('2022-05-10'), ('2022-02-17'), ('2022-03-24'), ('2022-05-09'), ('2022-05-30'), ('2022-02-21'), ('2022-01-11'), ('2022-01-28'), ('2022-04-27'), ('2022-05-25'), ('2022-04-18'), ('2022-01-21'), ('2022-03-22'), ('2022-04-01'), ('2022-04-06'), ('2022-04-11'), ('2022-05-19'), ('2022-02-01'), ('2022-02-23'), ('2022-02-09'), ('2022-03-03'), ('2022-04-04'), ('2022-04-05'), ('2022-04-12'), ('2022-04-29'), ('2022-01-06'), ('2022-03-01'), ('2022-03-26'), ('2022-01-10'), ('2022-01-03'), ('2022-05-01'), ('2022-03-21'), ('2022-03-27'), ('2022-01-31'), ('2022-04-13'), ('2022-03-29'), ('2022-02-20'), ('2022-02-06'), ('2022-03-13'), ('2022-02-27'), ('2022-03-20'), ('2022-04-24'), ('2022-05-15'), ('2022-05-22'), ('2022-01-09'), ('2022-04-03'), ('2022-03-12'), ('2022-01-23'), ('2022-05-08'), ('2022-05-29'), ('2022-02-19'), ('2022-05-07'), ('2022-05-26'), ('2022-01-30'), ('2022-03-05'), ('2022-05-21'), ('2022-02-26'), ('2022-01-16'), ('2022-05-17'), ('2022-01-29'), ('2022-02-12'), ('2022-01-02'), ('2022-02-05'),('2022-04-22'), ('2022-02-14'), ('2022-02-28'), ('2022-02-04'), ('2022-02-08'), ('2022-03-16'), ('2022-03-25'), ('2022-02-25'), ('2022-03-08'), ('2022-05-03'), ('2022-05-06'), ('2022-02-10'), ('2022-02-13'), ('2022-03-06'), ('2022-04-07'), ('2022-04-08'), ('2022-04-20'), ('2022-04-21'), ('2022-03-28'), ('2022-03-30'), ('2022-01-04'), ('2022-01-05'), ('2022-01-07'), ('2022-01-12'), ('2022-01-13'), ('2022-01-14'), ('2022-01-17'), ('2022-01-18'), ('2022-01-19'), ('2022-01-20'), ('2022-01-24'), ('2022-01-25'), ('2022-01-26'), ('2022-01-27'), ('2022-02-02'), ('2022-02-03'), ('2022-01-08');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 602', () => {
    const query = `INSERT INTO 03015_aggregator_empty_data_multiple_blocks SELECT * FROM generateRandom() LIMIT 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 603', () => {
    const query = `INSERT INTO 03014_async_with_dedup_part_log VALUES (2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 604', () => {
    const query = `INSERT INTO test VALUES (1), (2), (3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 605', () => {
    const query = `INSERT INTO 03013_position_const_start_pos SELECT * FROM generateRandom() LIMIT 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 606', () => {
    const query = `insert into test_memory select 42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 607', () => {
    const query = `insert into test_merge_tree select 42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 608', () => {
    const query = `insert into test_join select 42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 609', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(3000, 1100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 610', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(0, 1600);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 611', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(1000, 100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 612', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(9000, 1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 613', () => {
    const query = `INSERT INTO memory SELECT * FROM numbers(9000, 10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 614', () => {
    const query = `INSERT INTO range_dictionary_nullable_source_table VALUES (0, toDate('2019-05-05'), toDate('2019-05-20'), 0), (1, toDate('2019-05-05'), toDate('2019-05-20'), NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 615', () => {
    const query = `INSERT INTO t_nullable_keys_1 VALUES (1), (1), (NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 616', () => {
    const query = `INSERT INTO t_nullable_keys_2 VALUES (NULL), (1), (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 617', () => {
    const query = `INSERT INTO t_nullable_keys_3 VALUES (NULL), (NULL), (NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 618', () => {
    const query = `INSERT INTO t_nullable_keys_4 VALUES (1), (1), (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 619', () => {
    const query = `INSERT INTO t_nullable_keys_5 VALUES (1), (NULL), (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 620', () => {
    const query = `INSERT INTO t_nullable_keys_6 VALUES (NULL), (1), (NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 621', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 0, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 622', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 1, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 623', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 2, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 624', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 3, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 625', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 4, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 626', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 5, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 627', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 6, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 628', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 7, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 629', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 8, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 630', () => {
    const query = `INSERT INTO t_uniq_exact SELECT 9, randomPrintableASCII(5), rand() FROM numbers(300000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 631', () => {
    const query = `INSERT INTO t_optimize_equal_ranges SELECT 0, toString(number), number FROM numbers(30000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 632', () => {
    const query = `INSERT INTO t_optimize_equal_ranges SELECT 1, toString(number), number FROM numbers(30000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 633', () => {
    const query = `INSERT INTO t_optimize_equal_ranges SELECT 2, toString(number), number FROM numbers(30000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 634', () => {
    const query = `INSERT INTO test SELECT number DIV 2, number
FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 635', () => {
    const query = `INSERT INTO test select number from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 636', () => {
    const query = `INSERT INTO src VALUES (0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 637', () => {
    const query = `INSERT INTO src SELECT number % 10 as a, number as b FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 638', () => {
    const query = `INSERT INTO dst_null SELECT a, b FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 639', () => {
    const query = `INSERT INTO partitioned_table VALUES (1, 'A'), (2, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 640', () => {
    const query = `INSERT INTO partitioned_table VALUES (1, 'A'), (2, 'C');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 641', () => {
    const query = `INSERT INTO partitioned_table VALUES (1, 'D'), (2, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 642', () => {
    const query = `INSERT INTO partitioned_table SETTINGS insert_deduplication_token='token_1' VALUES (1, 'A'), (2, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 643', () => {
    const query = `INSERT INTO partitioned_table SETTINGS insert_deduplication_token='token_2' VALUES (1, 'A'), (2, 'C');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 644', () => {
    const query = `INSERT INTO partitioned_table SETTINGS insert_deduplication_token='token_3' VALUES (1, 'D'), (2, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 645', () => {
    const query = `INSERT INTO partitioned_table SETTINGS insert_deduplication_token='token_0' VALUES (1, 'A'), (2, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 646', () => {
    const query = `INSERT INTO partitioned_table SETTINGS insert_deduplication_token='token_0' VALUES (1, 'A'), (2, 'C');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 647', () => {
    const query = `INSERT INTO partitioned_table SETTINGS insert_deduplication_token='token_0' VALUES (1, 'D'), (2, 'B');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 648', () => {
    const query = `INSERT INTO dst VALUES (1, 'A');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 649', () => {
    const query = `INSERT INTO dst VALUES (2, 'A');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 650', () => {
    const query = `INSERT INTO dst SELECT 0 AS key,
'A' AS value
FROM numbers(2)
SETTINGS insert_deduplication_token='some_user_token';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 651', () => {
    const query = `INSERT INTO dst SELECT 1 AS key,
'b' AS value
FROM numbers(2)
SETTINGS insert_deduplication_token='some_user_token';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 652', () => {
    const query = `INSERT INTO dst SELECT 0 AS key,
'A' AS value
FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 653', () => {
    const query = `INSERT INTO dst SELECT number + 1 AS key,
IF(key = 0, 'A', 'B') AS value
FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 654', () => {
    const query = `INSERT INTO url_na_log SETTINGS max_insert_block_size = 200000
SELECT
209,
CAST('2022-08-09', 'Date') + toIntervalDay(intDiv(number, 10000))
FROM numbers(130000)
SETTINGS max_insert_block_size = 200000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 655', () => {
    const query = `INSERT INTO 03006_test VALUES ('2024-03-05', 1), ('2024-03-05', 2), ('2024-03-05', 1);  -- { serverError SUPPORT_IS_DISABLED  } INSERT INTO 03006_test SETTINGS compatibility='24.1' VALUES ('2024-03-05', 1), ('2024-03-05', 2), ('2024-03-05', 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 656', () => {
    const query = `INSERT INTO 03006_test SETTINGS async_insert=0 VALUES ('2024-03-05', 1), ('2024-03-05', 2), ('2024-03-05', 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 657', () => {
    const query = `INSERT INTO 03006_test SETTINGS deduplicate_blocks_in_dependent_materialized_views=0 VALUES ('2024-03-05', 1), ('2024-03-05', 2), ('2024-03-05', 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 658', () => {
    const query = `INSERT INTO 03006_test SETTINGS throw_if_deduplication_in_dependent_materialized_views_enabled_with_async_insert=0 VALUES ('2024-03-05', 1), ('2024-03-05', 2), ('2024-03-05', 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 659', () => {
    const query = `INSERT INTO 03006_buffer_overflow_l SELECT * FROM generateRandom() limit 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 660', () => {
    const query = `INSERT INTO 03006_buffer_overflow_r SELECT * FROM generateRandom() limit 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 661', () => {
    const query = `INSERT INTO test SELECT x.number FROM (
SELECT number
FROM system.numbers
LIMIT 10
) AS x
INNER JOIN input('a UInt64') AS y ON x.number = y.a
Format CSV 2
select * from test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 662', () => {
    const query = `insert into function file(concat(currentDatabase(), '.03004_data.bsonEachRow'), auto, 'null Nullable(UInt32)') select number % 2 ? NULL : number from numbers(5) settings engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 663', () => {
    const query = `INSERT INTO t_length_1 VALUES (1, [1, 2, 3]), (2, [4, 5]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 664', () => {
    const query = `INSERT INTO t_length_2 VALUES (1, 3), (1, 2), (2, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 665', () => {
    const query = `INSERT INTO users VALUES (6666, Null, 48);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 666', () => {
    const query = `INSERT INTO t_sample_factor(a, b) VALUES (1, 2), (3, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 667', () => {
    const query = `insert into test select * from numbers(50000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 668', () => {
    const query = `INSERT INTO t__fuzz_0 SELECT * FROM generateRandom() LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 669', () => {
    const query = `INSERT INTO landing (status, id, timestamp) SELECT * FROM generateRandom() LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 670', () => {
    const query = `INSERT INTO ds SELECT * FROM landing SETTINGS insert_deduplicate=1, insert_deduplication_token='token1',
max_insert_threads=5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 671', () => {
    const query = `INSERT INTO ds SELECT * FROM landing SETTINGS insert_deduplicate=1, insert_deduplication_token='token2',
max_insert_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 672', () => {
    const query = `INSERT INTO ds SELECT * FROM landing_dist SETTINGS insert_deduplicate=1, insert_deduplication_token='token3',
max_insert_threads=5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 673', () => {
    const query = `INSERT INTO ds SELECT * FROM landing_dist SETTINGS insert_deduplicate=1, insert_deduplication_token='token4',
max_insert_threads=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 674', () => {
    const query = `INSERT INTO t_data_version VALUES (1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 675', () => {
    const query = `INSERT INTO t_data_version VALUES (2, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 676', () => {
    const query = `INSERT INTO t_data_version VALUES (3, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 677', () => {
    const query = `INSERT INTO lwd_merge SELECT number FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 678', () => {
    const query = `INSERT INTO lwd_merge SELECT number FROM numbers(10000, 10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 679', () => {
    const query = `INSERT INTO t_block_offset SELECT number * 2 FROM numbers(8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 680', () => {
    const query = `INSERT INTO t_block_offset SELECT number * 2 FROM numbers(8, 8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 681', () => {
    const query = `INSERT INTO t_block_offset SELECT number * 2 + 1 FROM numbers(16);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 682', () => {
    const query = `insert into x select number, number * 2, number * 3 from numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 683', () => {
    const query = `INSERT INTO 03000_traverse_shadow_system_data_path_table VALUES (0, 'data');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 684', () => {
    const query = `INSERT INTO skip_table SELECT number, intDiv(number, 4096) FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 685', () => {
    const query = `INSERT INTO t_table_select (id) SELECT number FROM numbers(30);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 686', () => {
    const query = `INSERT INTO visits_order SELECT 2, 'user2', number from numbers(1, 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 687', () => {
    const query = `INSERT INTO visits_order SELECT 2, 'another_user2', number*2 from numbers(1, 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 688', () => {
    const query = `INSERT INTO visits_order SELECT 2, 'yet_another_user2', number*3 from numbers(1, 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 689', () => {
    const query = `INSERT INTO test SELECT sipHash64(number, 1), sipHash64(number, 2), sipHash64(number, 3) FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 690', () => {
    const query = `insert into attach_partition_t7 values (1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 691', () => {
    const query = `INSERT INTO hits values('2024-01-01', [1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 692', () => {
    const query = `INSERT INTO too_many_parts SELECT * FROM numbers_mt(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 693', () => {
    const query = `INSERT INTO too_many_parts SELECT * FROM numbers_mt(10); --  { serverError TOO_MANY_PARTS } DROP TABLE too_many_parts;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 694', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-01 00:00:00', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 695', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-01 00:00:00.123456789', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 696', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-01 01:01:01', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 697', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-01 01:01:01.123456789', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 698', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-02 02:02:02', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 699', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-02 02:02:02.123456789', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 700', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-03 03:03:03', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 701', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-03 03:03:03.123456789', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 702', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-04 04:04:04', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 703', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-04 04:04:04.123456789', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 704', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-05 05:05:05', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 705', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-05 05:05:05.123456789', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 706', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-06 06:06:06', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 707', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-06 06:06:06.123456789', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 708', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-07 07:07:07', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 709', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-07 07:07:07.123456789', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 710', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-08 08:08:08', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 711', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-08 08:08:08.123456789', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 712', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-09 09:09:09', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 713', () => {
    const query = `INSERT INTO test_0 VALUES (toDateTime64('2023-01-09 09:09:09.123456789', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 714', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-01 00:00:00', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 715', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-01 00:00:00.123456789', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 716', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-01 01:01:01', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 717', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-01 01:01:01.123456789', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 718', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-02 02:02:02', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 719', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-02 02:02:02.123456789', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 720', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-03 03:03:03', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 721', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-03 03:03:03.123456789', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 722', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-04 04:04:04', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 723', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-04 04:04:04.123456789', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 724', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-05 05:05:05', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 725', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-05 05:05:05.123456789', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 726', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-06 06:06:06', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 727', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-06 06:06:06.123456789', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 728', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-07 07:07:07', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 729', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-07 07:07:07.123456789', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 730', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-08 08:08:08', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 731', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-08 08:08:08.123456789', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 732', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-09 09:09:09', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 733', () => {
    const query = `INSERT INTO test_2 VALUES (toDateTime64('2023-01-09 09:09:09.123456789', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 734', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-01 00:00:00', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 735', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-01 00:00:00.123456789', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 736', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-01 01:01:01', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 737', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-01 01:01:01.123456789', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 738', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-02 02:02:02', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 739', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-02 02:02:02.123456789', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 740', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-03 03:03:03', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 741', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-03 03:03:03.123456789', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 742', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-04 04:04:04', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 743', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-04 04:04:04.123456789', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 744', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-05 05:05:05', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 745', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-05 05:05:05.123456789', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 746', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-06 06:06:06', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 747', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-06 06:06:06.123456789', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 748', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-07 07:07:07', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 749', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-07 07:07:07.123456789', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 750', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-08 08:08:08', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 751', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-08 08:08:08.123456789', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 752', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-09 09:09:09', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 753', () => {
    const query = `INSERT INTO test_3 VALUES (toDateTime64('2023-01-09 09:09:09.123456789', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 754', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-01 00:00:00', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 755', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-01 00:00:00.123456789', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 756', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-01 01:01:01', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 757', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-01 01:01:01.123456789', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 758', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-02 02:02:02', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 759', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-02 02:02:02.123456789', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 760', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-03 03:03:03', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 761', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-03 03:03:03.123456789', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 762', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-04 04:04:04', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 763', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-04 04:04:04.123456789', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 764', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-05 05:05:05', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 765', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-05 05:05:05.123456789', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 766', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-06 06:06:06', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 767', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-06 06:06:06.123456789', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 768', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-07 07:07:07', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 769', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-07 07:07:07.123456789', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 770', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-08 08:08:08', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 771', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-08 08:08:08.123456789', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 772', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-09 09:09:09', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 773', () => {
    const query = `INSERT INTO test_6 VALUES (toDateTime64('2023-01-09 09:09:09.123456789', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 774', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-01 00:00:00', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 775', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-01 00:00:00.123456789', 0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 776', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-01 01:01:01', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 777', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-01 01:01:01.123456789', 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 778', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-02 02:02:02', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 779', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-02 02:02:02.123456789', 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 780', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-03 03:03:03', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 781', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-03 03:03:03.123456789', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 782', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-04 04:04:04', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 783', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-04 04:04:04.123456789', 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 784', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-05 05:05:05', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 785', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-05 05:05:05.123456789', 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 786', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-06 06:06:06', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 787', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-06 06:06:06.123456789', 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 788', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-07 07:07:07', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 789', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-07 07:07:07.123456789', 7));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 790', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-08 08:08:08', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 791', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-08 08:08:08.123456789', 8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 792', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-09 09:09:09', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 793', () => {
    const query = `INSERT INTO test_9 VALUES (toDateTime64('2023-01-09 09:09:09.123456789', 9));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 794', () => {
    const query = `insert into b values (0, 'a'), (1, 'b'),   (1, 'c');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 795', () => {
    const query = `INSERT INTO t__fuzz_0 Select number, number, number FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 796', () => {
    const query = `insert into data values (0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 797', () => {
    const query = `INSERT INTO \`table\` FORMAT Values (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 798', () => {
    const query = `INSERT INTO TABLE \`table\` FORMAT Values (2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 799', () => {
    const query = `INSERT INTO TABLE table FORMAT Values (3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 800', () => {
    const query = `INSERT INTO table FORMAT Values (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 801', () => {
    const query = `insert into test values (42), ('Hello'), (NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 802', () => {
    const query = `INSERT INTO test_table VALUES ('1', 1704472004759, 1), ('3', 1704153600000, 2), ('3', 1704153600000, 3), ('5', 1700161822134, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 803', () => {
    const query = `INSERT INTO test_table VALUES ('1', 1704468357009, 1), ('3', 1704153600000, 2), ('3', 1704153600000, 3), ('5', 1701458520878, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 804', () => {
    const query = `INSERT INTO test_table VALUES ('1', 1704470704762, 1), ('3', 1704153600000, 2), ('3', 1704153600000, 3), ('5', 1702609856302, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 805', () => {
    const query = `INSERT INTO users VALUES (1, 'pufit'), (1, 'pufit2'), (1, 'pufit3');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 806', () => {
    const query = `insert into test values (42, 42);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 807', () => {
    const query = `insert into test values (42, 43);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 808', () => {
    const query = `insert into test values (43, 42);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 809', () => {
    const query = `insert into test values ('abc', 'abc');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 810', () => {
    const query = `insert into test values ('abc', 'abd');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 811', () => {
    const query = `insert into test values ('abd', 'abc');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 812', () => {
    const query = `insert into test values ([1,2,3], [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 813', () => {
    const query = `insert into test values ([1,2,3], [1,2,4]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 814', () => {
    const query = `insert into test values ([1,2,4], [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 815', () => {
    const query = `insert into test values (NULL, NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 816', () => {
    const query = `insert into test values (42, 'abc');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 817', () => {
    const query = `insert into test values ('abc', 42);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 818', () => {
    const query = `insert into test values (42, [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 819', () => {
    const query = `insert into test values ([1,2,3], 42);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 820', () => {
    const query = `insert into test values (42, NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 821', () => {
    const query = `insert into test values (NULL, 42);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 822', () => {
    const query = `insert into test values ('abc', [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 823', () => {
    const query = `insert into test values ([1,2,3], 'abc');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 824', () => {
    const query = `insert into test values ('abc', NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 825', () => {
    const query = `insert into test values (NULL, 'abc');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 826', () => {
    const query = `insert into test values ([1,2,3], NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 827', () => {
    const query = `insert into test values (NULL, [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 828', () => {
    const query = `INSERT INTO tabc (a, s) SELECT number, 'abc' || toString(number) FROM numbers(4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 829', () => {
    const query = `INSERT INTO ta SELECT number FROM numbers(4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 830', () => {
    const query = `INSERT INTO tb SELECT number FROM numbers(4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 831', () => {
    const query = `INSERT INTO users VALUES (1231, 'John', 'Ksenia');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 832', () => {
    const query = `INSERT INTO users VALUES (6666, 'Ksenia', '');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 833', () => {
    const query = `INSERT INTO t VALUES (1,1,'a'),(2,2,'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 834', () => {
    const query = `INSERT INTO test_empty VALUES ([]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 835', () => {
    const query = `INSERT INTO test_empty VALUES ([1]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 836', () => {
    const query = `INSERT INTO test_null VALUES ([NULL, NULL]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 837', () => {
    const query = `INSERT INTO test_null VALUES ([NULL]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 838', () => {
    const query = `INSERT INTO test_null VALUES ([1,2]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 839', () => {
    const query = `INSERT INTO test_nested_arrays VALUES ([[1,2,3,4,5,6], [1,2,4,5]]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 840', () => {
    const query = `INSERT INTO test_nested_arrays VALUES ([[1,2,4,5]]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 841', () => {
    const query = `INSERT INTO test_nested_arrays VALUES ([[1,4,3,0,5,5,5]]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 842', () => {
    const query = `INSERT INTO test_numbers VALUES ([1,2,3,4,5,6]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 843', () => {
    const query = `INSERT INTO test_numbers VALUES ([1,2,4,5]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 844', () => {
    const query = `INSERT INTO test_numbers VALUES ([1,4,3,0,5,5,5]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 845', () => {
    const query = `INSERT INTO test_numbers VALUES ([9]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 846', () => {
    const query = `INSERT INTO test_big_numbers_sep SELECT array(number) FROM numbers_mt(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 847', () => {
    const query = `INSERT INTO test_big_numbers SELECT range(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 848', () => {
    const query = `INSERT INTO test_big_numbers SELECT range(99999);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 849', () => {
    const query = `INSERT INTO test_big_numbers VALUES ([9]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 850', () => {
    const query = `INSERT INTO test_string VALUES (['a', 'b', 'c', 'd', 'e', 'f']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 851', () => {
    const query = `INSERT INTO test_string VALUES (['a', 'aa', 'b', 'bb', 'c', 'cc', 'd', 'dd', 'f', 'ff']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 852', () => {
    const query = `INSERT INTO test_string VALUES (['ae', 'ab', 'a', 'bb', 'c']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 853', () => {
    const query = `INSERT INTO test_big_string SELECT groupArray(toString(number)) FROM numbers_mt(50000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 854', () => {
    const query = `INSERT INTO test_big_string SELECT groupArray(toString(number)) FROM numbers_mt(49999);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 855', () => {
    const query = `INSERT INTO test_big_string VALUES (['1']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 856', () => {
    const query = `INSERT INTO test_big_string VALUES (['a']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 857', () => {
    const query = `INSERT INTO test_datetime VALUES ([toDateTime('2023-01-01 00:00:00'), toDateTime('2023-01-01 01:02:03'), toDateTime('2023-01-01 02:03:04')]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 858', () => {
    const query = `INSERT INTO test_datetime VALUES ([toDateTime('2023-01-01 00:00:00'), toDateTime('2023-01-01 01:02:04'), toDateTime('2023-01-01 02:03:05')]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 859', () => {
    const query = `INSERT INTO test_date32 VALUES ([toDate32('2023-01-01 00:00:00'), toDate32('2023-01-01 00:00:01')]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 860', () => {
    const query = `INSERT INTO test_date VALUES ([toDate('2023-01-01 00:00:00'), toDate('2023-01-01 00:00:01')]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 861', () => {
    const query = `INSERT INTO t_index_agg_func SELECT number % 10, initializeAggregation('avgState', toUInt64(number % 20)) FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 862', () => {
    const query = `INSERT INTO t_index_agg_func SELECT number % 10, initializeAggregation('avgState', toUInt64(number % 20)) FROM numbers(1000, 1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 863', () => {
    const query = `INSERT INTO shared_test_table VALUES (123), (651), (446), (315), (234), (764);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 864', () => {
    const query = `insert into test values ('xxx', 'x', {'content-type':'text/plain','user-agent':'bulk-tests'});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 865', () => {
    const query = `insert into test values ('xxx', 'y', {'content-type':'application/json','user-agent':'bulk-tests'});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 866', () => {
    const query = `insert into test select 'xxx', number, map('content-type', 'x' ) FROM numbers(1e2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 867', () => {
    const query = `INSERT INTO t_distr VALUES (1), (2), (3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 868', () => {
    const query = `INSERT INTO t_distr VALUES (4), (5), (6), (7);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 869', () => {
    const query = `INSERT INTO test_unexpected_cluster SELECT * FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 870', () => {
    const query = `INSERT INTO t_vertical_merge_memory SELECT number, arrayMap(x -> repeat('a', 50), range(1000)) FROM numbers(3000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 871', () => {
    const query = `INSERT INTO t_vertical_merge_memory SELECT number, arrayMap(x -> repeat('a', 50), range(1000)) FROM numbers(3001);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 872', () => {
    const query = `INSERT INTO test VALUES (NULL), (42), ('Hello, World!'), ([1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 873', () => {
    const query = `insert into function file('02977_1.csv') select '20240305', 1, ['s', 'd'], map('a', 2), tuple('222', 33, map('abc', 5)) SETTINGS engine_file_truncate_on_insert=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 874', () => {
    const query = `INSERT INTO t2 VALUES (1, {'a': (1, 2), 'b': (2, 3)}),;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 875', () => {
    const query = `INSERT INTO t3 VALUES (1, ('A', {'a':(1, 2),'b':(2, 3)}));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 876', () => {
    const query = `INSERT INTO table_with_some_columns SELECT rand(), number + 10 from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 877', () => {
    const query = `INSERT INTO table_with_some_columns SELECT rand(), number+222222222 from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 878', () => {
    const query = `INSERT INTO table_with_some_columns SELECT rand() from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 879', () => {
    const query = `INSERT INTO landing SELECT 1 as timestamp, 1 AS value FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 880', () => {
    const query = `INSERT INTO tlb (k) SELECT 0 FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 881', () => {
    const query = `INSERT INTO tlb (k) SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 882', () => {
    const query = `INSERT INTO t_func_to_subcolumns_variant VALUES (1, 'foo') (2, 111);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 883', () => {
    const query = `INSERT INTO t_func_to_subcolumns_map VALUES (1, map('aaa', 1, 'bbb', 2)) (2, map('ccc', 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 884', () => {
    const query = `INSERT INTO t_column_names VALUES ([1, 2, 3], 'foo');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 885', () => {
    const query = `INSERT INTO t_subcolumns_if SELECT number::Nullable(Int64) as number FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 886', () => {
    const query = `INSERT INTO tp SELECT number%3, 2 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 887', () => {
    const query = `INSERT INTO tp SELECT number % 3, 1, 1 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 888', () => {
    const query = `INSERT INTO tp SELECT number % 3, 1, -1 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 889', () => {
    const query = `INSERT INTO tp SELECT number % 3, 2, 1 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 890', () => {
    const query = `INSERT INTO tp SELECT number % 3, 1, -1, 0 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 891', () => {
    const query = `INSERT INTO tp SELECT number % 3, 2, 1, 1 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 892', () => {
    const query = `INSERT INTO tp SELECT number % 3, 1, 1, 0 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 893', () => {
    const query = `INSERT INTO tp SELECT number % 3, 1 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 894', () => {
    const query = `INSERT INTO tp SELECT number % 3, 2 FROM numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 895', () => {
    const query = `INSERT INTO t1 SELECT (sipHash64(number, 'x') % 10000000) + 1 AS key, concat('val', toString(number)) AS s FROM numbers_mt(10000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 896', () => {
    const query = `INSERT INTO t2 SELECT (sipHash64(number, 'y') % 1000000) + 1 AS key, concat('val', toString(number)) AS s FROM numbers_mt(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 897', () => {
    const query = `INSERT INTO im VALUES (1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 898', () => {
    const query = `INSERT INTO ts VALUES (1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 899', () => {
    const query = `INSERT INTO async_insert_mt_test SETTINGS
async_insert=1,
wait_for_async_insert=1,
async_insert_busy_timeout_min_ms=10,
async_insert_busy_timeout_max_ms=500,
async_insert_busy_timeout_increase_rate=1.0,
async_insert_busy_timeout_decrease_rate=1.0
VALUES (3, []), (1, [1, 3]), (2, [7, 8]), (4, [5, 9]), (5, [2, 6]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 900', () => {
    const query = `INSERT INTO async_insert_mt_test SETTINGS
async_insert=1,
wait_for_async_insert=1,
async_insert_busy_timeout_ms=500,
async_insert_busy_timeout_min_ms=500
VALUES (3, []), (1, [1, 3]), (2, [7, 8]), (4, [5, 9]), (5, [2, 6]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 901', () => {
    const query = `INSERT INTO async_insert_mt_test SETTINGS
async_insert=1,
wait_for_async_insert=1,
async_insert_busy_timeout_ms=100,
async_insert_busy_timeout_min_ms=500
VALUES (3, []), (1, [1, 3]), (2, [7, 8]), (4, [5, 9]), (5, [2, 6]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 902', () => {
    const query = `INSERT INTO async_insert_mt_test SETTINGS
async_insert=1,
wait_for_async_insert=1,
async_insert_busy_timeout_increase_rate=-1.0
VALUES (3, []), (1, [1, 3]), (2, [7, 8]), (4, [5, 9]), (5, [2, 6]); -- { serverError INVALID_SETTING_VALUE }
INSERT INTO async_insert_mt_test
SETTINGS
async_insert=1,
wait_for_async_insert=1,
async_insert_busy_timeout_decrease_rate=-1.0
VALUES (3, []), (1, [1, 3]), (2, [7, 8]), (4, [5, 9]), (5, [2, 6]); -- { serverError INVALID_SETTING_VALUE }
DROP TABLE IF EXISTS async_insert_mt_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 903', () => {
    const query = `INSERT INTO tab SELECT if(number % 2, ['value'], []) FROM system.numbers
LIMIT 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 904', () => {
    const query = `INSERT INTO f32_table values ('49.9');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 905', () => {
    const query = `insert into a values (1, 2), (0, 5), (3, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 906', () => {
    const query = `insert into empsalary values ('sales',3,4800,'2007-08-01'), ('sales',1,5000,'2006-10-01'), ('sales',4,4800,'2007-08-08');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 907', () => {
    const query = `INSERT INTO t1 SELECT number % 2, number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 908', () => {
    const query = `INSERT INTO t2 SELECT number % 2 FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 909', () => {
    const query = `INSERT INTO t SELECT number, toString(number) FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 910', () => {
    const query = `INSERT INTO r SELECT number, toString(number) FROM numbers(2, 8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 911', () => {
    const query = `INSERT INTO r VALUES (NULL, NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 912', () => {
    const query = `insert into test_parallel_index select number from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 913', () => {
    const query = `INSERT INTO tab2 SELECT number FROM system.numbers limit 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 914', () => {
    const query = `INSERT INTO test_tuple_filter__fuzz_2 SELECT number, toString(number), toDate('2024-01-01') + number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 915', () => {
    const query = `INSERT INTO hit SELECT * FROM generateRandom() LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 916', () => {
    const query = `insert into data values (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 917', () => {
    const query = `insert into data values (2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 918', () => {
    const query = `INSERT INTO dict_with_ttl VALUES (0, 'foo');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 919', () => {
    const query = `INSERT INTO spark_bar_test VALUES (1,'2020-01-01'), (3,'2020-01-02'), (4,'2020-01-02'), (-3,'2020-01-02'), (5,'2020-01-03'), (2,'2020-01-04'), (3,'2020-01-05'), (7,'2020-01-06'), (6,'2020-01-07'), (8,'2020-01-08'), (2,'2020-01-11');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 920', () => {
    const query = `INSERT INTO 02952_disjunction_optimization VALUES (1, 'test'), (2, 'test2'), (3, 'another'), (3, ''), (4, '');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 921', () => {
    const query = `INSERT INTO test SELECT number, tuple(number, arrayMap(x -> tuple(number + 1, number + 2), range(number % 10))) FROM numbers(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 922', () => {
    const query = `insert into a select -number from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 923', () => {
    const query = `insert into b select number * 10 from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 924', () => {
    const query = `insert into b select number * 100 from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 925', () => {
    const query = `INSERT INTO part_log_bytes_uncompressed SELECT 1, 1 FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 926', () => {
    const query = `INSERT INTO part_log_bytes_uncompressed SELECT 2, 1 FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 927', () => {
    const query = `INSERT INTO part_log_bytes_uncompressed SELECT 3, 1 FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 928', () => {
    const query = `INSERT INTO dictionary_source_table VALUES (0, 'zero', 'zero', 0), (1, 'one', NULL, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 929', () => {
    const query = `INSERT INTO range_dictionary_source_table VALUES (0, '2023-01-01', Null, Null), (1, '2022-11-09', '2022-12-08', 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 930', () => {
    const query = `INSERT INTO ip_dictionary_source_table VALUES (0, '202.79.32.0/20', 17501, 'NP'), (1, '2620:0:870::/48', 3856, 'US'), (2, '2a02:6b8:1::/48', 13238, 'RU');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 931', () => {
    const query = `INSERT INTO polygon_dictionary_source_table VALUES([[[(3, 1), (0, 1), (0, -1), (3, -1)]]], 'East'), ([[[(-3, 1), (-3, -1), (0, -1), (0, 1)]]], 'West');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 932', () => {
    const query = `INSERT INTO points VALUES (0.5, 0), (-0.5, 0), (10,10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 933', () => {
    const query = `INSERT INTO regexp_dictionary_source_table VALUES (1, 0, 'Linux/(\\d+[\\.\\d]*).+tlinux', ['name', 'version'], ['TencentOS', '\\1']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 934', () => {
    const query = `INSERT INTO regexp_dictionary_source_table VALUES (2, 0, '(\\d+)/tclwebkit(\\d+[\\.\\d]*)', ['name', 'version', 'comment'], ['Android', '\$1', 'test \$1 and \$2']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 935', () => {
    const query = `INSERT INTO regexp_dictionary_source_table VALUES (3, 2, '33/tclwebkit', ['version'], ['13']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 936', () => {
    const query = `INSERT INTO regexp_dictionary_source_table VALUES (4, 2, '3[12]/tclwebkit', ['version'], ['12']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 937', () => {
    const query = `INSERT INTO regexp_dictionary_source_table VALUES (5, 2, '3[12]/tclwebkit', ['version'], ['11']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 938', () => {
    const query = `INSERT INTO regexp_dictionary_source_table VALUES (6, 2, '3[12]/tclwebkit', ['version'], ['10']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 939', () => {
    const query = `INSERT INTO ttl_group_by_bug(key, ts, value) SELECT number%5 as key, now() - interval 10 minute + number, 0 FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 940', () => {
    const query = `INSERT INTO merge_tree_in_subqueries VALUES(1, 'test1', 42);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 941', () => {
    const query = `INSERT INTO merge_tree_in_subqueries VALUES(2, 'test2', 8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 942', () => {
    const query = `INSERT INTO merge_tree_in_subqueries VALUES(3, 'test3', 8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 943', () => {
    const query = `INSERT INTO merge_tree_in_subqueries VALUES(4, 'test4', 1985);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 944', () => {
    const query = `INSERT INTO merge_tree_in_subqueries VALUES(5, 'test5', 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 945', () => {
    const query = `INSERT INTO t_merge_tree_index SELECT number % 5, number, 0, ['foo', 'bar'], ['aaa', 'bbb', 'ccc'], [11, 22, 33], (number, number), number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 946', () => {
    const query = `INSERT INTO t_merge_tree_index SELECT number % 5, number, number, 10, ['foo', 'bar'], ['aaa', 'bbb', 'ccc'], [11, 22, 33], (number, number), number FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 947', () => {
    const query = `INSERT INTO t_merge_tree_index SELECT number % 5, number, number, 10, ['foo', 'bar'], ['aaa', 'bbb', 'ccc'], [11, 22, 33], (number, number), number FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 948', () => {
    const query = `INSERT INTO t_merge_tree_index SELECT number % 5, number, 'v' || toString(number * number) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 949', () => {
    const query = `INSERT INTO t_merge_tree_index SELECT number % 5, number, 'v' || toString(number * number) FROM numbers(10, 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 950', () => {
    const query = `INSERT INTO t_merge_tree_index SELECT number % 4, number, 'v' || toString(number * number) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 951', () => {
    const query = `INSERT INTO t_merge_tree_index SELECT number % 4, number, 'v' || toString(number * number) FROM numbers(10, 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 952', () => {
    const query = `INSERT INTO 02947_table_1 VALUES (1),(2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 953', () => {
    const query = `INSERT INTO 02947_table_2 VALUES (3),(4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 954', () => {
    const query = `insert into t1 select number % 4, toString(number) from numbers(1000, 1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 955', () => {
    const query = `insert into t2 select number % 4, toString(number) from numbers(2000, 1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 956', () => {
    const query = `insert into t3 select number % 4, toString(number) from numbers(3000, 1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 957', () => {
    const query = `INSERT INTO test_table SELECT 0, '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 958', () => {
    const query = `INSERT INTO test_table SELECT number + 1, number + 1 FROM numbers(15);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 959', () => {
    const query = `INSERT INTO test_table SELECT 5, '5';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 960', () => {
    const query = `INSERT INTO test_table SELECT number + 8, number + 8 FROM numbers(8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 961', () => {
    const query = `INSERT INTO test_table SELECT number, number FROM numbers(32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 962', () => {
    const query = `INSERT INTO tab (id, dflt) VALUES (1, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 963', () => {
    const query = `INSERT INTO tab (id) VALUES (2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 964', () => {
    const query = `INSERT INTO tab (id, dflt) VALUES (2, NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 965', () => {
    const query = `INSERT INTO tab (id) VALUES (3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 966', () => {
    const query = `INSERT INTO tab (id) VALUES (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 967', () => {
    const query = `INSERT INTO literal_alias_misclassification values(1, 'a', 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 968', () => {
    const query = `INSERT INTO literal_alias_misclassification values(2, 'b', 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 969', () => {
    const query = `INSERT INTO tokenbf_v1_hasany_test VALUES (1, ['this is a test', 'example.com']), (2, ['another test', 'another example']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 970', () => {
    const query = `INSERT INTO ngrambf_v1_hasany_test VALUES (1, ['this is a test', 'example.com']), (2, ['another test', 'another example']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 971', () => {
    const query = `INSERT INTO tokenbf_tab VALUES (1, 'Well, Hello ClickHouse !'), (2, 'Well, Hello World !'), (3, 'Good Weather !'), (4, 'Say Hello !'), (5, 'Its An OLAP Database'), (6, 'True World Champion');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 972', () => {
    const query = `INSERT INTO ngrambf_tab VALUES (1, 'Hello ClickHouse'), (2, 'Hello World'), (3, 'Good Weather'), (4, 'Say Hello'), (5, 'OLAP Database'), (6, 'World Champion');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 973', () => {
    const query = `INSERT INTO order_by_all VALUES ('B', 3), ('C', NULL), ('D', 1), ('A', 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 974', () => {
    const query = `insert into test_group_by_with_rollup_order values(1,1,'a');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 975', () => {
    const query = `insert into test_group_by_with_rollup_order values(2,2,'a');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 976', () => {
    const query = `insert into test_group_by_with_rollup_order values(3,3,'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 977', () => {
    const query = `insert into test_group_by_with_rollup_order values(4,4,'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 978', () => {
    const query = `INSERT INTO test_table VALUES (0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 979', () => {
    const query = `INSERT INTO test_table VALUES (1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 980', () => {
    const query = `INSERT INTO regex_test_table VALUES ('\\d[a-z]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 981', () => {
    const query = `INSERT INTO t_proj_external SELECT 1, number%2, number%4, number FROM numbers(50000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 982', () => {
    const query = `INSERT INTO t_proj_external SELECT 1, number%2, number%4, number FROM numbers(100000) LIMIT 50000, 100000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 983', () => {
    const query = `INSERT INTO data_sparse_column VALUES (1, 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 984', () => {
    const query = `INSERT INTO test_parallel_replicas_settings SELECT * FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 985', () => {
    const query = `INSERT INTO format_nested VALUES (['foo', 'bar'], ['qaz', 'qux']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 986', () => {
    const query = `INSERT INTO tab SELECT * FROM generateRandom() LIMIT 1000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 987', () => {
    const query = `insert into test select number from numbers(6);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 988', () => {
    const query = `insert into test select number from numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 989', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(0, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 990', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(3, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 991', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(5, 7);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 992', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(12, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 993', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(14, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 994', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(15, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 995', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(17, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 996', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(18, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 997', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(20, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 998', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(22, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 999', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(24, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors insert: 1000', () => {
    const query = `INSERT INTO t1 SELECT number, number FROM numbers(26, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
