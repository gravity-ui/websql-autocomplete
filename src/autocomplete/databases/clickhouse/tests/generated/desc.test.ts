/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors desc: 1', () => {
    const query = `desc format(CSV, '"42","42.42","True"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 2', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : 42}}, {"obj" : {"a" : {"b" : 42}}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 3', () => {
    const query = `DESC format(CSV, '1E20\\n1.1E20') settings input_format_try_infer_exponent_floats = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 4', () => {
    const query = `DESC format(CSV, '1E20\\n1.1E20') settings input_format_try_infer_exponent_floats = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 5', () => {
    const query = `DESC format(JSONEachRow, '{"x" : 1.1e20}') settings input_format_try_infer_exponent_floats = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 6', () => {
    const query = `desc file('02977_1.csv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 7', () => {
    const query = `desc format(JSONEachRow, '{"data" : [[1, null, 3, null], [null, {"a" : 12, "b" : 12}, null, "string"], [null, null, 4, "string"]]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 8', () => {
    const query = `DESC TABLE alter_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 9', () => {
    const query = `desc format(CSV, '"42","42.42","True"\\n"abc","def","ghk"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 10', () => {
    const query = `desc file('02906.orc');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 11', () => {
    const query = `desc test_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 12', () => {
    const query = `desc test_array_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 13', () => {
    const query = `desc file('02892.orc');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 14', () => {
    const query = `desc test format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 15', () => {
    const query = `desc s3Cluster(test_cluster_one_shard_three_replicas_localhost, 'http://localhost:11111/test/02876.parquet');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 16', () => {
    const query = `desc format(JSONEachRow, '{"a" : null, "b" : {}, "c" : []}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 17', () => {
    const query = `desc format(JSONEachRow, '{"a" : {"b" : null, "c" : [[], []]}, "d" : {"e" : [{}, {}], "f" : null}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 18', () => {
    const query = `desc format(JSON, '{"a" : 10, "b" : "Hello"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 19', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : 42, "b" : "Hello", "c" : [1,2,3]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 20', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : 42, "b" : "Hello", "c" : [1,2,3]}}, {"obj" : {"a" : 43, "b" : "World", "d" : "2020-01-01"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 21', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : 42, "b" : "Hello", "c" : [1,2,3]}}, {"obj" : {"a" : 43, "b" : "World", "d" : "2020-01-01"}}, {"obj" : {}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 22', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : 42, "b" : "Hello", "c" : [1,2,3]}}, {"obj" : {"a" : 43, "b" : "World", "d" : "2020-01-01"}}, {"obj" : {}}, {"obj" : {"d" : "Hello", "b" : "2020-01-01"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 23', () => {
    const query = `desc format(JSONEachRow, '{"obj" : [{"a" : 42, "b" : "Hello", "c" : [1,2,3]}, {"a" : 43, "b" : "World", "d" : "2020-01-01"}]}, {"obj" : [{}]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 24', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"nested_obj" : {"a" : 42, "b" : "Hello", "c" : [1,2,3]}}}, {"obj" : {"nested_obj" : {"a" : 43, "b" : "World", "d" : "2020-01-01"}}}, {"obj" : {"nested_obj" : {}}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 25', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : {"b" : 1}}}, {"obj" : {"a.b" : 2, "a.b.c" : "Hello"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 26', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : {}}}, {"obj" : {"a" : {"b" : {"c" : 10}}}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 27', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : {}}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 28', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 29', () => {
    const query = `desc format(JSONEachRow, '{"obj" : {"a" : [{}, {"b" : null}, {"c" : {"d" : 10}}]}}, {"obj" : {"a" : [{"e" : "Hello", "b" : [1,2,3]}]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 30', () => {
    const query = `desc file('02841.parquet');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 31', () => {
    const query = `DESC format(JSONEachRow, '{"id" : 1, "age" : 25, "name" : "Josh", "status" : null, "hobbies" : ["football", "cooking"]}') SETTINGS schema_inference_hints = 'age LowCardinality(UInt8), status Nullable(String)', allow_suspicious_low_cardinality_types=1 FORMAT CSV;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 32', () => {
    const query = `DESC format(JSONEachRow, '{"id" : 1, "age" : 25, "name" : "Josh", "status" : null, "hobbies" : ["football", "cooking"]}') FORMAT CSV SETTINGS schema_inference_hints = 'age LowCardinality(UInt8), status Nullable(String)', allow_suspicious_low_cardinality_types=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 33', () => {
    const query = `desc format(JSONEachRow, '{"x" : null}, {"x" : 42}') settings schema_inference_make_columns_nullable=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 34', () => {
    const query = `desc format(JSONEachRow, '{"x" : null}, {"x" : 42}') settings schema_inference_make_columns_nullable='auto', input_format_null_as_default=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 35', () => {
    const query = `desc format(JSONEachRow, '{"x" : null}, {"x" : 42}') settings schema_inference_make_columns_nullable=0, input_format_null_as_default=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 36', () => {
    const query = `desc format('JSONEachRow', '{"a" : null}, {"a" : 42}') settings input_format_max_bytes_to_read_for_schema_inference=10; -- {serverError CANNOT_EXTRACT_TABLE_STRUCTURE} desc format('JSONEachRow', '{"a" : null}, {"a" : 42}') settings input_format_max_bytes_to_read_for_schema_inference=20;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 37', () => {
    const query = `desc file(basic_types_02735.parquet);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 38', () => {
    const query = `desc file(datetime64_02735.parquet);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 39', () => {
    const query = `desc urlCluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 40', () => {
    const query = `desc urlCluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 41', () => {
    const query = `desc urlCluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'TSV', 'c1 UInt64, c2 UInt64, c3 UInt64');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 42', () => {
    const query = `desc urlCluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'TSV', 'c1 UInt64, c2 UInt64, c3 UInt64', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 43', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 44', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 45', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 46', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 47', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV', 'auto', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 48', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', headers('X-ClickHouse-Database'='default'), 'http://localhost:11111/test/{a,b}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 49', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', headers('X-ClickHouse-Database'='default'), 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 50', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'auto', headers('X-ClickHouse-Database'='default'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 51', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV', 'auto', headers('X-ClickHouse-Database'='default'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 52', () => {
    const query = `desc urlCluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV', headers('X-ClickHouse-Database'='default'), 'auto', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 53', () => {
    const query = `desc format(JSONEachRow, '{"x" : "2020-01-01"}, {"x" : "1000"}') `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 54', () => {
    const query = `desc format('CSV', '100000000000000000000');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 55', () => {
    const query = `desc format('CSV', '-100000000000000000000');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 56', () => {
    const query = `desc format(JSONEachRow,  \$\$
{"a": "Hello", "b": 111}
{"a": "World", "b": 123}
{"a": "Hello", "b": 111}
{"a": "World", "b": 123}
\$\$);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 57', () => {
    const query = `desc format(JSONEachRow, 'a String, b Int64', \$\$
{"a": "Hello", "b": 111}
{"a": "World", "b": 123}
{"a": "Hello", "b": 111}
{"a": "World", "b": 123}
\$\$);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 58', () => {
    const query = `desc format(CSV, '1,2,"[1,2,3]","[[\\'abc\\'], [], [\\'d\\', \\'e\\']]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 59', () => {
    const query = `desc format(CSV, 'a1 Int32, a2 UInt64, a3 Array(Int32), a4 Array(Array(String))', '1,2,"[1,2,3]","[[\\'abc\\'], [], [\\'d\\', \\'e\\']]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 60', () => {
    const query = `desc table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 61', () => {
    const query = `desc format(JSONEachRow, '{"x" : "20000101"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 62', () => {
    const query = `desc format(Values, '(\\'abc)'); -- { serverError CANNOT_EXTRACT_TABLE_STRUCTURE } `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 63', () => {
    const query = `desc format(JSONEachRow, '{"x" : "abc"}, {"x" : {"a" : 10, "b" : "abc"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 64', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"a" : "b"}}, {"x" : {"a" : 1, "b" : [1,2,3]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 65', () => {
    const query = `desc format(CSV, '"[\\'abc\\\\\\'\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 66', () => {
    const query = `desc format(Values, '(\\'abc\\\\\\'\\')');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 67', () => {
    const query = `desc format(JSONEachRow, '{"x" : 1234}, {"x" : "String"}') settings input_format_json_try_infer_numbers_from_strings=1; -- { serverError CANNOT_EXTRACT_TABLE_STRUCTURE } desc format(JSONEachRow, '{"x" : [null, 1]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 68', () => {
    const query = `desc format(JSONEachRow, '{"x" : [null, 1]}, {"x" : []}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 69', () => {
    const query = `desc format(JSONEachRow, '{"x" : [null, 1]}, {"x" : [null]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 70', () => {
    const query = `desc format(JSONEachRow, '{"x" : [null, 1]}, {"x" : [1, null]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 71', () => {
    const query = `desc format(JSONEachRow, '{"x" : [null, 1]}, {"x" : ["abc", 1]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 72', () => {
    const query = `desc format(JSONEachRow, '{"x" : [null, 1]}, {"x" : ["abc", null]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 73', () => {
    const query = `desc format(JSONEachRow, '{"x" : {}}, {"x" : {"a" : 1}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 74', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"a" : null}}, {"x" : {"b" : 1}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 75', () => {
    const query = `desc format(JSONEachRow, '{"x" : null}, {"x" : [1, 2]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 76', () => {
    const query = `desc format(JSONEachRow, '{"x" : [[], [null], [1, 2, 3]]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 77', () => {
    const query = `desc format(JSONEachRow, '{"x" : [{"a" : null}, {"b" : 1}]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 78', () => {
    const query = `desc format(JSONEachRow, '{"x" : [["2020-01-01", null, "1234"], ["abcd"]]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 79', () => {
    const query = `desc format(JSONEachRow, '{"x" : [1, 2]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 80', () => {
    const query = `desc format(JSONEachRow, '{"x" : [null, 1]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 81', () => {
    const query = `desc format(JSONEachRow, '{"x" : [1, 2]}, {"x" : [3]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 82', () => {
    const query = `desc format(JSONEachRow, '{"x" : [1, 2]}, {"x" : [null]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 83', () => {
    const query = `desc format(JSONCompactEachRow, '[1234], ["String"]') settings input_format_json_try_infer_numbers_from_strings=1; -- { serverError CANNOT_EXTRACT_TABLE_STRUCTURE } desc format(JSONCompactEachRow, '[[null, 1]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 84', () => {
    const query = `desc format(JSONCompactEachRow, '[[null, 1]], [[]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 85', () => {
    const query = `desc format(JSONCompactEachRow, '[[null, 1]], [[null]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 86', () => {
    const query = `desc format(JSONCompactEachRow, '[[null, 1]], [[1, null]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 87', () => {
    const query = `desc format(JSONCompactEachRow, '[[null, 1]], [["abc", 1]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 88', () => {
    const query = `desc format(JSONCompactEachRow, '[[null, 1]], [["abc", null]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 89', () => {
    const query = `desc format(JSONCompactEachRow, '[{}], [{"a" : 1}]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 90', () => {
    const query = `desc format(JSONCompactEachRow, '[{"a" : null}], [{"b" : 1}]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 91', () => {
    const query = `desc format(JSONCompactEachRow, '[null], [[1, 2]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 92', () => {
    const query = `desc format(JSONCompactEachRow, '[[[], [null], [1, 2, 3]]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 93', () => {
    const query = `desc format(JSONCompactEachRow, '[[{"a" : null}, {"b" : 1}]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 94', () => {
    const query = `desc format(JSONCompactEachRow, '[[["2020-01-01", null, "1234"], ["abcd"]]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 95', () => {
    const query = `desc format(JSONCompactEachRow, '[[1, 2]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 96', () => {
    const query = `desc format(JSONCompactEachRow, '[[null, 1]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 97', () => {
    const query = `desc format(JSONCompactEachRow, '[[1, 2]], [[3]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 98', () => {
    const query = `desc format(JSONCompactEachRow, '[[1, 2]], [[null]]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 99', () => {
    const query = `desc format(CSV, '"[null, 1]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 100', () => {
    const query = `desc format(CSV, '"[null, 1]"\\n"[]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 101', () => {
    const query = `desc format(CSV, '"[null, 1]"\\n"[null]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 102', () => {
    const query = `desc format(CSV, '"[null, 1]"\\n"[1, null]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 103', () => {
    const query = `desc format(CSV, '"{}"\\n"{\\'a\\' : 1}"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 104', () => {
    const query = `desc format(CSV, '"{\\'a\\' : null}"\\n"{\\'b\\' : 1}"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 105', () => {
    const query = `desc format(CSV, '"[[], [null], [1, 2, 3]]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 106', () => {
    const query = `desc format(CSV, '"[{\\'a\\' : null}, {\\'b\\' : 1}]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 107', () => {
    const query = `desc format(CSV, '"[[\\'2020-01-01\\', null, \\'1234\\'], [\\'abcd\\']]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 108', () => {
    const query = `desc format(CSV, '"[1,2]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 109', () => {
    const query = `desc format(CSV, '"[1, 2]"\\n"[3]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 110', () => {
    const query = `desc format(CSV, '"[1, 2]"\\n"[null]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 111', () => {
    const query = `DESC TABLE 02483_substitute_udf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 112', () => {
    const query = `desc hdfsCluster('test_cluster_one_shard_three_replicas_localhost', 'hdfs://localhost:12222/test_02458_{1,2}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 113', () => {
    const query = `desc hdfsCluster('test_cluster_one_shard_three_replicas_localhost', 'hdfs://localhost:12222/test_02458_{1,2}.tsv', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 114', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 115', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 116', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'test', 'testtest');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 117', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'test', 'testtest', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 118', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 119', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 120', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV', 'auto', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 121', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'test', 'testtest', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 122', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'test', 'testtest', 'TSV', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 123', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'test', 'testtest', 'TSV', 'auto', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 124', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', NOSIGN);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 125', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', NOSIGN, 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 126', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', NOSIGN, 'TSV', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 127', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', NOSIGN, 'TSV', 'auto', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 128', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', headers(MyCustomHeader = 'SomeValue'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 129', () => {
    const query = `desc s3Cluster('test_cluster_one_shard_three_replicas_localhost', 'http://localhost:11111/test/{a,b}.tsv', 'TSV', 'auto', headers(MyCustomHeader = 'SomeValue'), 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 130', () => {
    const query = `desc format(JSONEachRow, '{"x" : 1, "x" : 2}'); -- {serverError CANNOT_EXTRACT_TABLE_STRUCTURE} desc format(JSONEachRow, '{"x" : 1, "y" : 2}\\n{"x" : 2, "x" : 3}'); -- {serverError CANNOT_EXTRACT_TABLE_STRUCTURE}
desc format(CSVWithNames, 'a,b,a\\n1,2,3'); -- {serverError CANNOT_EXTRACT_TABLE_STRUCTURE}
desc format(CSV, '1,2,3') settings column_names_for_schema_inference='a, b, a'; -- {serverError CANNOT_EXTRACT_TABLE_STRUCTURE}
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 131', () => {
    const query = `desc file(02454_data.jsonobjecteachrow);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 132', () => {
    const query = `desc file(02417_data.jsonObjectEachRow);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 133', () => {
    const query = `desc format(JSONEachRow, '{"x" : [[42, null], [24, null]]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 134', () => {
    const query = `desc format(JSONEachRow, '{"x" : [[[42, null], []], 24]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 135', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"key" : [42, null]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 136', () => {
    const query = `desc format(JSONEachRow, '{"a" : {"b" : {"c" : 1, "d" : "str"}}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 137', () => {
    const query = `desc file(02416_data.json);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 138', () => {
    const query = `desc file(02416_data.jsonCompact);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 139', () => {
    const query = `desc file(02416_data.jsonColumnsWithMetadata);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 140', () => {
    const query = `desc format(CSV, ',,,');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 141', () => {
    const query = `desc url('http://localhost:8888/test/data.tsv?get=parameterHere', auto, 'x UInt32');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 142', () => {
    const query = `desc format(CSV, '"Aaaa e a.a.aaaaaaaaa"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 143', () => {
    const query = `desc file(02384_data.arrow);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 144', () => {
    const query = `desc format(JSONEachRow, '{"x" : 1, "y" : "String", "z" : "0.0.0.0" }') settings schema_inference_hints='x UInt8, z IPv4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 145', () => {
    const query = `desc format(JSONEachRow, '{"x" : 1, "y" : "String"}\\n{"z" : "0.0.0.0", "y" : "String2"}\\n{"x" : 2}') settings schema_inference_hints='x UInt8, z IPv4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 146', () => {
    const query = `desc format(JSONEachRow, '{"x" : null}') settings schema_inference_hints='x Nullable(UInt32)';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 147', () => {
    const query = `desc format(JSONEachRow, '{"x" : []}') settings schema_inference_hints='x Array(UInt32)';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 148', () => {
    const query = `desc format(JSONEachRow, '{"x" : {}}') settings schema_inference_hints='x Map(String, String)';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 149', () => {
    const query = `desc format(CSV, '1,"String","0.0.0.0"') settings schema_inference_hints='c1 UInt8, c3 IPv4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 150', () => {
    const query = `desc format(CSV, '1,"String","0.0.0.0"') settings schema_inference_hints='x UInt8, z IPv4', column_names_for_schema_inference='x, y, z';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 151', () => {
    const query = `desc format(CSV, '\\\\N') settings schema_inference_hints='x Nullable(UInt32)', column_names_for_schema_inference='x';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 152', () => {
    const query = `desc file (02376_data.arrow);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 153', () => {
    const query = `desc file('02374_data1.jsonl');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 154', () => {
    const query = `desc file('02374_data2.jsonl');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 155', () => {
    const query = `desc format(JSONEachRow, '{"x" : 123}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 156', () => {
    const query = `desc format(JSONEachRow, '{"x" : [123, 123]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 157', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"a" : [123, 123]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 158', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"a" : [123, 123]}}\\n{"x" : {"b" : [321, 321]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 159', () => {
    const query = `desc format(JSONEachRow, '{"x" : 123}\\n{"x" : 123.123}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 160', () => {
    const query = `desc format(JSONEachRow, '{"x" : 123}\\n{"x" : 1e2}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 161', () => {
    const query = `desc format(JSONEachRow, '{"x" : [123, 123]}\\n{"x" : [321.321, 312]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 162', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"a" : [123, 123]}}\\n{"x" : {"b" : [321.321, 123]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 163', () => {
    const query = `desc format(CSV, '123');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 164', () => {
    const query = `desc format(CSV, '"[123, 123]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 165', () => {
    const query = `desc format(CSV, '"{\\'a\\' : [123, 123]}"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 166', () => {
    const query = `desc format(CSV, '"{\\'a\\' : [123, 123]}"\\n"{\\'b\\' : [321, 321]}"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 167', () => {
    const query = `desc format(CSV, '123\\n123.123');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 168', () => {
    const query = `desc format(CSV, '122\\n1e2');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 169', () => {
    const query = `desc format(CSV, '"[123, 123]"\\n"[321.321, 312]"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 170', () => {
    const query = `desc format(CSV, '"{\\'a\\' : [123, 123]}"\\n"{\\'b\\' : [321.321, 123]}"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 171', () => {
    const query = `desc format(TSV, '123');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 172', () => {
    const query = `desc format(TSV, '[123, 123]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 173', () => {
    const query = `desc format(TSV, '{\\'a\\' : [123, 123]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 174', () => {
    const query = `desc format(TSV, '{\\'a\\' : [123, 123]}\\n{\\'b\\' : [321, 321]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 175', () => {
    const query = `desc format(TSV, '123\\n123.123');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 176', () => {
    const query = `desc format(TSV, '122\\n1e2');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 177', () => {
    const query = `desc format(TSV, '[123, 123]\\n[321.321, 312]');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 178', () => {
    const query = `desc format(TSV, '{\\'a\\' : [123, 123]}\\n{\\'b\\' : [321.321, 123]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 179', () => {
    const query = `desc format(Values, '(123)');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 180', () => {
    const query = `desc format(Values, '([123, 123])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 181', () => {
    const query = `desc format(Values, '({\\'a\\' : [123, 123]})');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 182', () => {
    const query = `desc format(Values, '({\\'a\\' : [123, 123]}), ({\\'b\\' : [321, 321]})');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 183', () => {
    const query = `desc format(Values, '(123), (123.123)');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 184', () => {
    const query = `desc format(Values, '(122), (1e2)');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 185', () => {
    const query = `desc format(Values, '([123, 123])\\n([321.321, 312])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 186', () => {
    const query = `desc format(Values, '({\\'a\\' : [123, 123]}), ({\\'b\\' : [321.321, 123]})');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 187', () => {
    const query = `DESC system.settings_changes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 188', () => {
    const query = `desc format(JSONEachRow, '{"x" : "123"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 189', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["123", 123, 12.3]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 190', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : "123", "k2" : 123}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 191', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : ["123", "123"], "k2" : [123, 123]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 192', () => {
    const query = `desc format(JSONEachRow, '{"x" : "123"}\\n{"x" : 123}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 193', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["123", "456"]}\\n{"x" : [123, 456]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 194', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : "123"}}\\n{"x" : {"k2" : 123}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 195', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : ["123", "123"]}}\\n{"x": {"k2" : [123, 123]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 196', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["123", "Some string"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 197', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : "123", "k2" : "Some string"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 198', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : ["123", "123"], "k2" : ["Some string"]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 199', () => {
    const query = `desc format(JSONEachRow, '{"x" : "123"}\\n{"x" : "Some string"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 200', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["123", "456"]}\\n{"x" : ["Some string"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 201', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : "123"}}\\n{"x" : {"k2" : "Some string"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 202', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"k1" : ["123", "123"]}}\\n{"x": {"k2" : ["Some string"]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 203', () => {
    const query = `desc format(JSONEachRow, '{"x" : [123, "Some string"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 204', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"a" : 123, "b" : "Some string"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 205', () => {
    const query = `desc format(JSONEachRow, '{"x" : "2020-01-01"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 206', () => {
    const query = `desc format(JSONEachRow, '{"x" : "2020-01-01 00:00:00.00000"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 207', () => {
    const query = `desc format(JSONEachRow, '{"x" : "2020-01-01 00:00:00"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 208', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["2020-01-01", "2020-01-02"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 209', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["2020-01-01", "2020-01-01 00:00:00"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 210', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["2020-01-01 00:00:00", "2020-01-01 00:00:00"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 211', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"date1" : "2020-01-01 00:00:00", "date2" : "2020-01-01"}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 212', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["2020-01-01 00:00:00", "2020-01-01"]}\\n{"x" : ["2020-01-01"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 213', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["2020-01-01 00:00:00"]}\\n{"x" : ["2020-01-01"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 214', () => {
    const query = `desc format(JSONEachRow, '{"x" : "2020-01-01 00:00:00"}\\n{"x" : "2020-01-01"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 215', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["2020-01-01 00:00:00", "Some string"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 216', () => {
    const query = `desc format(JSONEachRow, '{"x" : "2020-01-01 00:00:00"}\\n{"x" : "Some string"}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 217', () => {
    const query = `desc format(JSONEachRow, '{"x" : ["2020-01-01 00:00:00", "2020-01-01"]}\\n{"x" : ["2020-01-01", "Some string"]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 218', () => {
    const query = `desc format(JSONEachRow, '{"x" : {"key1" : [["2020-01-01 00:00:00"]], "key2" : [["2020-01-01"]]}}\\n{"x" : {"key1" : [["2020-01-01"]], "key2" : [["Some string"]]}}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 219', () => {
    const query = `desc format(CSV, '"2020-01-01"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 220', () => {
    const query = `desc format(CSV, '"2020-01-01 00:00:00.00000"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 221', () => {
    const query = `desc format(CSV, '"2020-01-01 00:00:00"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 222', () => {
    const query = `desc format(CSV, '"[\\'2020-01-01\\', \\'2020-01-02\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 223', () => {
    const query = `desc format(CSV, '"[\\'2020-01-01\\', \\'2020-01-01 00:00:00\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 224', () => {
    const query = `desc format(CSV, '"[\\'2020-01-01 00:00:00\\', \\'2020-01-01 00:00:00\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 225', () => {
    const query = `desc format(CSV, '"{\\'date1\\' : \\'2020-01-01 00:00:00\\', \\'date2\\' : \\'2020-01-01\\'}"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 226', () => {
    const query = `desc format(CSV, '"[\\'2020-01-01 00:00:00\\', \\'2020-01-01\\']"\\n"[\\'2020-01-01\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 227', () => {
    const query = `desc format(CSV, '"[\\'2020-01-01 00:00:00\\']"\\n"[\\'2020-01-01\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 228', () => {
    const query = `desc format(CSV, '"2020-01-01 00:00:00"\\n"2020-01-01"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 229', () => {
    const query = `desc format(CSV, '"[\\'2020-01-01 00:00:00\\', \\'Some string\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 230', () => {
    const query = `desc format(CSV, '"2020-01-01 00:00:00"\\n"Some string"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 231', () => {
    const query = `desc format(CSV, '"[\\'2020-01-01 00:00:00\\', \\'2020-01-01\\']"\\n"[\\'2020-01-01\\', \\'Some string\\']"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 232', () => {
    const query = `desc format(CSV, '"{\\'key1\\' : [[\\'2020-01-01 00:00:00\\']], \\'key2\\' : [[\\'2020-01-01\\']]}"\\n"{\\'key1\\' : [[\\'2020-01-01\\']], \\'key2\\' : [[\\'Some string\\']]}"');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 233', () => {
    const query = `desc format(TSV, '2020-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 234', () => {
    const query = `desc format(TSV, '2020-01-01 00:00:00.00000');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 235', () => {
    const query = `desc format(TSV, '2020-01-01 00:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 236', () => {
    const query = `desc format(TSV, '[\\'2020-01-01\\', \\'2020-01-02\\']');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 237', () => {
    const query = `desc format(TSV, '[\\'2020-01-01\\', \\'2020-01-01 00:00:00\\']');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 238', () => {
    const query = `desc format(TSV, '[\\'2020-01-01 00:00:00\\', \\'2020-01-01 00:00:00\\']');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 239', () => {
    const query = `desc format(TSV, '{\\'date1\\' : \\'2020-01-01 00:00:00\\', \\'date2\\' : \\'2020-01-01\\'}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 240', () => {
    const query = `desc format(TSV, '[\\'2020-01-01 00:00:00\\', \\'2020-01-01\\']\\n[\\'2020-01-01\\']');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 241', () => {
    const query = `desc format(TSV, '[\\'2020-01-01 00:00:00\\']\\n[\\'2020-01-01\\']');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 242', () => {
    const query = `desc format(TSV, '2020-01-01 00:00:00\\n2020-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 243', () => {
    const query = `desc format(TSV, '[\\'2020-01-01 00:00:00\\', \\'Some string\\']');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 244', () => {
    const query = `desc format(TSV, '2020-01-01 00:00:00\\nSome string');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 245', () => {
    const query = `desc format(TSV, '[\\'2020-01-01 00:00:00\\', \\'2020-01-01\\']\\n[\\'2020-01-01\\', \\'Some string\\']');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 246', () => {
    const query = `desc format(TSV, '{\\'key1\\' : [[\\'2020-01-01 00:00:00\\']], \\'key2\\' : [[\\'2020-01-01\\']]}\\n{\\'key1\\' : [[\\'2020-01-01\\']], \\'key2\\' : [[\\'Some string\\']]}');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 247', () => {
    const query = `desc format(Values, '(\\'2020-01-01\\')');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 248', () => {
    const query = `desc format(Values, '(\\'2020-01-01 00:00:00.00000\\')');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 249', () => {
    const query = `desc format(Values, '(\\'2020-01-01 00:00:00\\')');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 250', () => {
    const query = `desc format(Values, '([\\'2020-01-01\\', \\'2020-01-02\\'])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 251', () => {
    const query = `desc format(Values, '([\\'2020-01-01\\', \\'2020-01-01 00:00:00\\'])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 252', () => {
    const query = `desc format(Values, '([\\'2020-01-01 00:00:00\\', \\'2020-01-01 00:00:00\\'])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 253', () => {
    const query = `desc format(Values, '({\\'date1\\' : \\'2020-01-01 00:00:00\\', \\'date2\\' : \\'2020-01-01\\'})');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 254', () => {
    const query = `desc format(Values, '([\\'2020-01-01 00:00:00\\', \\'2020-01-01\\'])\\n([\\'2020-01-01\\'])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 255', () => {
    const query = `desc format(Values, '([\\'2020-01-01 00:00:00\\']), ([\\'2020-01-01\\'])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 256', () => {
    const query = `desc format(Values, '(\\'2020-01-01 00:00:00\\')\\n(\\'2020-01-01\\')');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 257', () => {
    const query = `desc format(Values, '([\\'2020-01-01 00:00:00\\', \\'Some string\\'])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 258', () => {
    const query = `desc format(Values, '(\\'2020-01-01 00:00:00\\')\\n(\\'Some string\\')');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 259', () => {
    const query = `desc format(Values, '([\\'2020-01-01 00:00:00\\', \\'2020-01-01\\'])\\n([\\'2020-01-01\\', \\'Some string\\'])');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 260', () => {
    const query = `desc format(Values, '({\\'key1\\' : [[\\'2020-01-01 00:00:00\\']], \\'key2\\' : [[\\'2020-01-01\\']]})\\n({\\'key1\\' : [[\\'2020-01-01\\']], \\'key2\\' : [[\\'Some string\\']]})');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 261', () => {
    const query = `desc file(data_02314.csv) settings input_format_csv_skip_first_lines=5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 262', () => {
    const query = `desc file(data_02314.tsv) settings input_format_tsv_skip_first_lines=5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 263', () => {
    const query = `desc file(data_02313.avro);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 264', () => {
    const query = `desc file(data_02304.parquet);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 265', () => {
    const query = `desc file(data_02304.orc);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 266', () => {
    const query = `desc file(data_02304.arrow);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 267', () => {
    const query = `DESC TABLE t_nested_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 268', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 269', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 270', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'TSV', 'c1 UInt64, c2 UInt64, c3 UInt64');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 271', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'test', 'testtest');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 272', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'TSV', 'c1 UInt64, c2 UInt64, c3 UInt64', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 273', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'test', 'testtest', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 274', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'test', 'testtest', 'TSV', 'c1 UInt64, c2 UInt64, c3 UInt64');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 275', () => {
    const query = `desc s3Cluster('test_cluster_two_shards_localhost', 'http://localhost:11111/test/{a,b,c}.tsv', 'test', 'testtest', 'TSV', 'c1 UInt64, c2 UInt64, c3 UInt64', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 276', () => {
    const query = `desc hdfs('hdfs://localhost:12222/test_{1,2,3}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 277', () => {
    const query = `desc hdfs('hdfs://localhost:12222/test_{1,2,3}.tsv', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 278', () => {
    const query = `desc hdfs('hdfs://localhost:12222/test_{1,2,3}.tsv', 'TSV', 'c1 UInt32, c2 UInt32, c3 UInt32');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 279', () => {
    const query = `desc hdfs('hdfs://localhost:12222/test_{1,2,3}.tsv', 'TSV', 'c1 UInt32, c2 UInt32, c3 UInt32', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 280', () => {
    const query = `desc hdfsCluster('test_cluster_two_shards_localhost', 'hdfs://localhost:12222/test_{1,2,3}.tsv');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 281', () => {
    const query = `desc hdfsCluster('test_cluster_two_shards_localhost', 'hdfs://localhost:12222/test_{1,2,3}.tsv', 'TSV');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 282', () => {
    const query = `desc hdfsCluster('test_cluster_two_shards_localhost', 'hdfs://localhost:12222/test_{1,2,3}.tsv', 'TSV', 'c1 UInt32, c2 UInt32, c3 UInt32');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 283', () => {
    const query = `desc hdfsCluster('test_cluster_two_shards_localhost', 'hdfs://localhost:12222/test_{1,2,3}.tsv', 'TSV', 'c1 UInt32, c2 UInt32, c3 UInt32', 'auto');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 284', () => {
    const query = `desc file('test_02244', 'TSV') settings column_names_for_schema_inference='x,y';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 285', () => {
    const query = `desc file('test_02244', 'CSV') settings column_names_for_schema_inference='x,y';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 286', () => {
    const query = `desc file('test_02244', 'JSONCompactEachRow') settings column_names_for_schema_inference='x,y';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 287', () => {
    const query = `desc file('test_02244', 'Values') settings column_names_for_schema_inference='x,y';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 288', () => {
    const query = `desc file('data.native.zst');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 289', () => {
    const query = `DESC t02006;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 290', () => {
    const query = `DESC TABLE t_json_desc;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 291', () => {
    const query = `DESC TABLE t_json_desc SETTINGS describe_extend_object_types = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 292', () => {
    const query = `DESC (SELECT * FROM HASH_MV);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 293', () => {
    const query = `DESC TABLE defaults;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 294', () => {
    const query = `DESC tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 295', () => {
    const query = `DESC alter_01355;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 296', () => {
    const query = `DESC TABLE merge(currentDatabase(), 'upyachka');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 297', () => {
    const query = `desc table ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 298', () => {
    const query = `DESC TABLE add_materialized_column_after;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 299', () => {
    const query = `DESC check_comments;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 300', () => {
    const query = `DESC TABLE decimal;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 301', () => {
    const query = `DESC TABLE cast1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 302', () => {
    const query = `DESC TABLE cast;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 303', () => {
    const query = `desc tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 304', () => {
    const query = `desc table tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 305', () => {
    const query = `desc remote('127.0.0.2', currentDatabase(), tab);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 306', () => {
    const query = `desc table remote('127.0.0.2', currentDatabase(), tab);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 307', () => {
    const query = `desc (select 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 308', () => {
    const query = `desc table (select 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 309', () => {
    const query = `desc (select * from system.numbers);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 310', () => {
    const query = `desc table enums;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 311', () => {
    const query = `DESC TABLE mt_00168;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 312', () => {
    const query = `DESC TABLE mt_00168_buffer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 313', () => {
    const query = `desc table defaulted;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 314', () => {
    const query = `DESC TABLE replicated_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 315', () => {
    const query = `DESC TABLE replicated_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors desc: 316', () => {
    const query = `DESC TABLE alter_00061;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
