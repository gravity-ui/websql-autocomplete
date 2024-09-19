/* no-irregular-whitespace: "off" */
/* eslint no-useless-escape: "off" */
import {parseClickHouseQuery} from '../../index';

test('should pass without errors create: 1', () => {
    const query = `CREATE TABLE id_values ENGINE MergeTree ORDER BY id1 AS SELECT arrayJoin(range(500000)) AS id1, arrayJoin(range(1000)) AS id2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 2', () => {
    const query = `CREATE TABLE test_table ENGINE MergeTree ORDER BY id AS SELECT id_values.id1             AS id,
string_values.string_val1 AS string_val1,
string_values.string_val2 AS string_val2
FROM id_values
JOIN (SELECT arrayJoin(range(10)) AS id1,
'qwe'                AS string_val1,
'asd'                AS string_val2) AS string_values
ON id_values.id1 = string_values.id1
SETTINGS join_algorithm = 'hash';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 3', () => {
    const query = `CREATE TABLE t (st FixedString(54)) ENGINE=MergeTree ORDER BY ();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 4', () => {
    const query = `create table test (map Map(String, DateTime)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 5', () => {
    const query = `CREATE TABLE checks (
\`check_name\` LowCardinality(String),
\`check_status\` LowCardinality(String),
\`check_start_time\` DateTime,
\`test_name\` LowCardinality(String),
\`test_status\` LowCardinality(String),
)
ENGINE = ReplicatedMergeTree('/clickhouse/{database}/checks', '{replica}')
ORDER BY check_start_time;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 6', () => {
    const query = `CREATE TABLE ANIMAL ( ANIMAL Nullable(String) ) ENGINE = ReplicatedMergeTree('/clickhouse/test/{database}/animal', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 7', () => {
    const query = `CREATE TABLE test_table (
id UInt64,
value String
) ENGINE=ReplicatedMergeTree('/clickhouse/test/{database}/test_table', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 8', () => {
    const query = `CREATE TABLE test_table_for_in (
id UInt64
) ENGINE=ReplicatedMergeTree('/clickhouse/test/{database}/test_table_for_in', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 9', () => {
    const query = `CREATE TABLE t0 (c0 Int) ENGINE = AggregatingMergeTree() ORDER BY (c0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 10', () => {
    const query = `CREATE TABLE t1 (c0 Array(Dynamic), c1 Int) ENGINE = MergeTree() ORDER BY (c0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 11', () => {
    const query = `CREATE TABLE a (x Int64, y Int64 MATERIALIZED 1 SETTINGS (max_compress_block_size = 30000)) ENGINE = MergeTree ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 12', () => {
    const query = `CREATE TABLE projections (
key String,
d1 Int,
PROJECTION improved_sorting_key (
SELECT *
ORDER BY d1, key
)
)
Engine=MergeTree()
ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 13', () => {
    const query = `CREATE TABLE projections_2 (
name String,
frequency UInt64,
PROJECTION agg (
SELECT name, max(frequency) max_frequency
GROUP BY name
),
PROJECTION agg_no_key (
SELECT max(frequency) max_frequency
)
)
Engine=MergeTree()
ORDER BY name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 14', () => {
    const query = `CREATE TABLE rawtable (
\`Attributes\` Map(String, String),
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 15', () => {
    const query = `CREATE MATERIALIZED VIEW raw_to_attributes_mv TO attributes (
\`AttributeKeys\` Array(String),
\`AttributeValues\` Array(String)
)
AS SELECT
mapKeys(Attributes) AS AttributeKeys,
mapValues(Attributes) AS AttributeValues
FROM rawtable;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 16', () => {
    const query = `CREATE TABLE attributes (
\`AttributeKeys\` Array(String),
\`AttributeValues\` Array(String)
)
ENGINE = ReplacingMergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 17', () => {
    const query = `CREATE TABLE uk_price_paid (
price UInt32,
date Date,
postcode1 LowCardinality(String),
postcode2 LowCardinality(String),
type Enum('terraced' = 1, 'semi-detached' = 2, 'detached' = 3, 'flat' = 4, 'other' = 0),
is_new UInt8,
duration Enum('freehold' = 1, 'leasehold' = 2, 'unknown' = 0),
addr1 String,
addr2 String,
street LowCardinality(String),
locality LowCardinality(String),
town LowCardinality(String),
district LowCardinality(String),
county LowCardinality(String),
INDEX county_index county TYPE set(10) GRANULARITY 1,
PROJECTION town_date_projection
(
SELECT 
town,
date,
price
ORDER BY 
town,
date
),
PROJECTION handy_aggs_projection
(
SELECT 
avg(price),
max(price),
sum(price)
GROUP BY town
)
)
ENGINE = MergeTree
ORDER BY (postcode1, postcode2, date);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 18', () => {
    const query = `CREATE TABLE prices_by_year_dest ( price UInt32,
date Date,
addr1 String,
addr2 String,
street LowCardinality(String),
town LowCardinality(String),
district LowCardinality(String),
county LowCardinality(String)
)
ENGINE = MergeTree
PRIMARY KEY (town, date)
PARTITION BY toYear(date);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 19', () => {
    const query = `CREATE MATERIALIZED VIEW prices_by_year_view TO prices_by_year_dest
AS
SELECT
price,
date,
addr1,
addr2,
street,
town,
district,
county
FROM uk_price_paid;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 20', () => {
    const query = `CREATE TABLE uk_prices_aggs_dest ( month Date,
min_price SimpleAggregateFunction(min, UInt32),
max_price SimpleAggregateFunction(max, UInt32),
volume AggregateFunction(count, UInt32),
avg_price AggregateFunction(avg, UInt32)
)
ENGINE = AggregatingMergeTree
PRIMARY KEY month;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 21', () => {
    const query = `CREATE MATERIALIZED VIEW uk_prices_aggs_view TO uk_prices_aggs_dest
AS
WITH
toStartOfMonth(date) AS month
SELECT
month,
minSimpleState(price) AS min_price,
maxSimpleState(price) AS max_price,
countState(price) AS volume,
avgState(price) AS avg_price
FROM uk_price_paid
GROUP BY month;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 22', () => {
    const query = `CREATE TABLE uk_mortgage_rates ( date DateTime64,
variable Decimal32(2),
fixed Decimal32(2),
bank Decimal32(2)
)
ENGINE Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 23', () => {
    const query = `CREATE DICTIONARY uk_mortgage_rates_dict ( date DateTime64,
variable Decimal32(2),
fixed Decimal32(2),
bank Decimal32(2)
)
PRIMARY KEY date
SOURCE(
CLICKHOUSE(TABLE 'uk_mortgage_rates')
)
LAYOUT(COMPLEX_KEY_HASHED())
LIFETIME(2628000000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 24', () => {
    const query = `CREATE TABLE t (letter String) ENGINE=MergeTree order by () partition by letter;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 25', () => {
    const query = `CREATE TABLE a (x String, y String MATERIALIZED 'str') ENGINE = ReplicatedMergeTree('/clickhouse/{database}/a', 'r1') ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 26', () => {
    const query = `CREATE TABLE test_new_json_type(id UInt32, data JSON, version UInt64) ENGINE=ReplacingMergeTree(version) ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 27', () => {
    const query = `CREATE TABLE t_async_insert_alter (id Int64, v1 Int64) ENGINE = MergeTree ORDER BY id SETTINGS async_insert = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 28', () => {
    const query = `CREATE TABLE t_local_1 (a UInt32) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 29', () => {
    const query = `CREATE TABLE t_local_2 (a UInt32) ENGINE = MergeTree ORDER BY  a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 30', () => {
    const query = `CREATE TABLE t_merge AS t_local_1 ENGINE = Merge(currentDatabase(), '^(t_local_1|t_local_2)\$');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 31', () => {
    const query = `CREATE TABLE t_distr AS t_local_1 ENGINE = Distributed('test_shard_localhost', currentDatabase(), t_merge, rand());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 32', () => {
    const query = `CREATE TABLE test_new_json_type(id Nullable(UInt32), data JSON, version UInt64) ENGINE=ReplacingMergeTree(version) ORDER BY id settings allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 33', () => {
    const query = `CREATE TABLE table1 (number UInt64) ENGINE=MergeTree ORDER BY number SETTINGS index_granularity=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 34', () => {
    const query = `CREATE VIEW view1 AS SELECT number FROM table1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 35', () => {
    const query = `CREATE TABLE test_left (a Int64, b String, c LowCardinality(String)) ENGINE = MergeTree() ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 36', () => {
    const query = `CREATE TABLE test_right (a Int64, b String, c LowCardinality(String)) ENGINE = MergeTree() ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 37', () => {
    const query = `CREATE TABLE tab ( v0 String,
v1 String,
INDEX idx (v0, v1) TYPE full_text GRANULARITY 1)
ENGINE = MergeTree
ORDER BY tuple()
SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 38', () => {
    const query = `CREATE TABLE t_async_insert_params (id UInt64) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 39', () => {
    const query = `CREATE TABLE IF NOT EXISTS table_name (
id UInt64
)
ENGINE = MergeTree()
ORDER BY cityHash64(id)
SAMPLE BY cityHash64(id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 40', () => {
    const query = `create table test (json JSON(SKIP REGEXP '[]')) engine=Memory(); -- {serverError CANNOT_COMPILE_REGEXP} create table test (json JSON(SKIP REGEXP '+')) engine=Memory(); -- {serverError CANNOT_COMPILE_REGEXP};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 41', () => {
    const query = `create table test (json JSON) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 42', () => {
    const query = `create table test_json_dynamic_aggregate_functions (json JSON(a1 String, max_dynamic_paths=2, max_dynamic_types=2)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 43', () => {
    const query = `create table test (d Dynamic, json JSON) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 44', () => {
    const query = `create table test (s String) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 45', () => {
    const query = `create table test (s Array(String)) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 46', () => {
    const query = `create table test (s Tuple(String, String)) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 47', () => {
    const query = `create table test (json JSON(max_dynamic_paths=8)) engine=MergeTree order by tuple() settings min_rows_for_wide_part = 1, min_bytes_for_wide_part = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 48', () => {
    const query = `create table test (json JSON(max_dynamic_paths=1)) engine=MergeTree order by tuple() settings min_rows_for_wide_part = 1, min_bytes_for_wide_part = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 49', () => {
    const query = `create table null as system.one engine=Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 50', () => {
    const query = `create table dist as null engine=Distributed(test_cluster_two_shards, currentDatabase(), 'null', rand());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 51', () => {
    const query = `create table rocksdb (key Int) engine=EmbeddedRocksDB() primary key key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 52', () => {
    const query = `create table mt (key Int) engine=MergeTree() order by key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 53', () => {
    const query = `create table rep1 (key Int) engine=ReplicatedMergeTree('/{database}/rep', '{table}') order by key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 54', () => {
    const query = `create table rep2 (key Int) engine=ReplicatedMergeTree('/{database}/rep', '{table}') order by key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 55', () => {
    const query = `CREATE TABLE test__fuzz_22 (k Float32, v String) ENGINE = MergeTree ORDER BY k SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 56', () => {
    const query = `create table test (json JSON(max_dynamic_paths=8)) engine=MergeTree order by tuple() settings min_bytes_for_wide_part=1, min_rows_for_wide_part=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 57', () => {
    const query = `CREATE TABLE t1 (\`a\` Int64, \`b\` Int64) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 58', () => {
    const query = `CREATE TABLE t2 (\`key\` Int32, \`val\` Int64) ENGINE = MergeTree ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 59', () => {
    const query = `CREATE TABLE test (k UInt64, v String) ENGINE = MergeTree
ORDER BY k
SETTINGS index_granularity=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 60', () => {
    const query = `CREATE TABLE test__fuzz_22 (k Float32, v String) ENGINE = ReplicatedMergeTree('/clickhouse/03222/{database}/test__fuzz_22', 'r1') ORDER BY k SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 61', () => {
    const query = `CREATE TABLE test_00808 (
\`date\` Date,
\`id\` Int8,
\`name\` String,
\`value\` Int64,
\`sign\` Int8
)
ENGINE = CollapsingMergeTree(sign)
ORDER BY (id, date);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 62', () => {
    const query = `create table test (json JSON) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 63', () => {
    const query = `create table test (json JSON(max_dynamic_paths=2)) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 64', () => {
    const query = `create table test (json JSON(max_dynamic_paths=8)) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 65', () => {
    const query = `CREATE TABLE table1(col AggregateFunction(uniq, UInt64)) ENGINE=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 66', () => {
    const query = `CREATE TABLE table2(UserID UInt64) ENGINE=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 67', () => {
    const query = `CREATE TABLE table1(address IPv6 DEFAULT toIPv6('2001:db8:3333:4444:5555:6666:7777:8888')) ENGINE=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 68', () => {
    const query = `create database if not exists shard_0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 69', () => {
    const query = `create database if not exists shard_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 70', () => {
    const query = `create table shard_0.dt64_03222(id UInt64, dt DateTime64(3)) engine = MergeTree order by id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 71', () => {
    const query = `create table shard_1.dt64_03222(id UInt64, dt DateTime64(3)) engine = MergeTree order by id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 72', () => {
    const query = `create table distr_03222_dt64 (id UInt64, dt DateTime64(3)) engine = Distributed(test_cluster_two_shards_different_databases, '', dt64_03222);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 73', () => {
    const query = `CREATE TABLE 03222_timeseries_table1 ENGINE = TimeSeries FORMAT Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 74', () => {
    const query = `CREATE TABLE 03222_timeseries_table2 ENGINE = TimeSeries SETTINGS store_min_time_and_max_time = 1, aggregate_min_time_and_max_time = 1 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 75', () => {
    const query = `CREATE TABLE 03222_timeseries_table4 ENGINE = TimeSeries SETTINGS store_min_time_and_max_time = 0 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 76', () => {
    const query = `CREATE MATERIALIZED VIEW 03221_rmv REFRESH AFTER 10 SECOND
(
x UInt64
)
ENGINE = Memory
AS SELECT number AS x
FROM numbers(3)
UNION ALL
SELECT rand64() AS x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 77', () => {
    const query = `CREATE TABLE t_merge_profile_events_1 (id UInt64, v1 UInt64, v2 UInt64) ENGINE = MergeTree ORDER BY id
SETTINGS min_bytes_for_wide_part = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 78', () => {
    const query = `CREATE TABLE t_merge_profile_events_2 (id UInt64, v1 UInt64, v2 UInt64) ENGINE = MergeTree ORDER BY id
SETTINGS min_bytes_for_wide_part = 0, vertical_merge_algorithm_min_rows_to_activate = 1, vertical_merge_algorithm_min_columns_to_activate = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 79', () => {
    const query = `CREATE TABLE t_merge_profile_events_3 (id UInt64, v1 UInt64, v2 UInt64, PROJECTION p (SELECT v2, v2 * v2, v2 * 2, v2 * 10, v1 ORDER BY v1)) ENGINE = MergeTree ORDER BY id
SETTINGS min_bytes_for_wide_part = 0, vertical_merge_algorithm_min_rows_to_activate = 1, vertical_merge_algorithm_min_columns_to_activate = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 80', () => {
    const query = `CREATE TABLE IF NOT EXISTS report_metrics_v2 (
	\`a\` UInt64
) Engine = MergeTree()
ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 81', () => {
    const query = `CREATE TABLE example_table (id UInt32) ENGINE=MergeTree() ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 82', () => {
    const query = `CREATE TABLE example_table (id UInt32) ENGINE=MergeTree() ORDER BY id; -- { serverError TABLE_ALREADY_EXISTS } DROP DATABASE IF EXISTS example_database;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 83', () => {
    const query = `CREATE DATABASE example_database;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 84', () => {
    const query = `CREATE DATABASE example_database; -- { serverError DATABASE_ALREADY_EXISTS } SET create_if_not_exists=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 85', () => {
    const query = `CREATE TABLE t_primary_index_memory (s String) ENGINE = MergeTree ORDER BY s SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 86', () => {
    const query = `CREATE TABLE test_03217_system_tables_replica_1(x UInt32) ENGINE ReplicatedMergeTree('/clickhouse/tables/{database}/test_03217_system_tables_replica', 'r1')
ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 87', () => {
    const query = `CREATE TABLE test_03217_system_tables_replica_2(x UInt32) ENGINE ReplicatedMergeTree('/clickhouse/tables/{database}/test_03217_system_tables_replica', 'r2')
ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 88', () => {
    const query = `CREATE TABLE test_03217_merge_replica_1(x UInt32) ENGINE ReplicatedMergeTree('/clickhouse/tables/{database}/test_03217_merge_replica', 'r1')
ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 89', () => {
    const query = `CREATE TABLE test_03217_merge_replica_2(x UInt32) ENGINE ReplicatedMergeTree('/clickhouse/tables/{database}/test_03217_merge_replica', 'r2')
ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 90', () => {
    const query = `CREATE TABLE test_03217_all_replicas (x UInt32) ENGINE = Merge(currentDatabase(), 'test_03217_merge_replica_*');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 91', () => {
    const query = `CREATE VIEW 03215_test_v AS WITH RECURSIVE test_table AS
(
SELECT 1 AS number
UNION ALL
SELECT number + 1
FROM test_table
WHERE number < 100
)
SELECT sum(number)
FROM test_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 92', () => {
    const query = `CREATE VIEW 03215_multi_v AS WITH RECURSIVE
task AS
(
SELECT
number AS task_id,
number - 1 AS parent_id
FROM numbers(10)
),
rtq AS
(
SELECT
task_id,
parent_id
FROM task AS t
WHERE t.parent_id = 1
UNION ALL
SELECT
t.task_id,
t.parent_id
FROM task AS t, rtq AS r
WHERE t.parent_id = r.task_id
)
SELECT count()
FROM rtq;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 93', () => {
    const query = `create table test (id UInt64) engine=MergeTree order by id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 94', () => {
    const query = `CREATE FUNCTION 03215_udf_with_union AS () -> ( SELECT sum(s)
FROM
(
SELECT 1 AS s
UNION ALL
SELECT 1 AS s
)
);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 95', () => {
    const query = `CREATE TABLE test_parquet (col1 int, col2 String) ENGINE=File(Parquet);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 96', () => {
    const query = `CREATE TABLE test_parquet (col1 int, col2 String) ENGINE=File(Parquet)  SETTINGS output_format_parquet_use_custom_encoder=false, output_format_parquet_write_page_index=true;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 97', () => {
    const query = `CREATE TABLE test_parquet (col1 int, col2 String) ENGINE=File(Parquet)  SETTINGS output_format_parquet_use_custom_encoder=false, output_format_parquet_write_page_index=false;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 98', () => {
    const query = `CREATE TABLE IF NOT EXISTS t (shape Array(Array(Tuple(Float64, Float64))), wkt_string String, ord Float64) Engine = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 99', () => {
    const query = `CREATE TABLE t (x Int8) ENGINE MergeTree ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 100', () => {
    const query = `create table t (number UInt64) engine MergeTree order by number;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 101', () => {
    const query = `CREATE TABLE test__fuzz_21 (
\`x\` Decimal(18, 10)
)
ENGINE = MergeTree
ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 102', () => {
    const query = `create table test (json JSON(a Dynamic)) engine=MergeTree order by tuple() settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 103', () => {
    const query = `create table test (json JSON(a Dynamic)) engine=MergeTree order by tuple() settings min_rows_for_wide_part=10000000, min_bytes_for_wide_part=10000000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 104', () => {
    const query = `CREATE TABLE a (key Nullable(String)) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 105', () => {
    const query = `CREATE TABLE b (key Nullable(String)) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 106', () => {
    const query = `CREATE TABLE testnull (
\`a\` Nullable(String),
\`b\` Nullable(String),
\`c\` Nullable(String)
)
ENGINE = MergeTree
PARTITION BY tuple()
ORDER BY c
SETTINGS index_granularity = 8192, allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 107', () => {
    const query = `CREATE TABLE product_groups ( 	group_id Int64,
	group_name String
) Engine = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 108', () => {
    const query = `CREATE TABLE products ( 	product_id Int64,
	product_name String,
	price DECIMAL(11, 2),
	group_id Int64
) Engine = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 109', () => {
    const query = `create table t (d Dynamic) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 110', () => {
    const query = `CREATE TABLE test_table (
id UInt64,
value String
) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 111', () => {
    const query = `CREATE TABLE t0 (c0 Int32, c1 Int32, c2 String) ENGINE = Log() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 112', () => {
    const query = `CREATE TABLE source  (
Name String,
Value Int64
) ENGINE = MergeTree ORDER BY ();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 113', () => {
    const query = `CREATE TABLE test_agg_variant (
Name String,
Value Variant(AggregateFunction(uniqExact, Int64), AggregateFunction(avg, Int64))
)
ENGINE = MergeTree
ORDER BY (Name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 114', () => {
    const query = `CREATE TABLE a (
\`a_id\` String
)
ENGINE = MergeTree
PARTITION BY tuple()
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 115', () => {
    const query = `CREATE TABLE b (
\`b_id\` AggregateFunction(uniq, Nullable(String))
)
ENGINE = AggregatingMergeTree
PARTITION BY tuple()
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 116', () => {
    const query = `CREATE MATERIALIZED VIEW mv TO b (
\`b_id\` AggregateFunction(uniq, Nullable(String))
)
AS SELECT uniqState(if(a_id != '', a_id, NULL)) AS b_id
FROM a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 117', () => {
    const query = `create table test (d Dynamic) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 118', () => {
    const query = `create table test (d Dynamic(max_types=1)) engine=MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 119', () => {
    const query = `CREATE TABLE user_country ( user_id UInt64,
country String
)
ENGINE = ReplacingMergeTree
ORDER BY user_id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 120', () => {
    const query = `CREATE TABLE user_transactions ( user_id UInt64,
transaction_id String
)
ENGINE = MergeTree
ORDER BY user_id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 121', () => {
    const query = `create table date_table_pv (id Int32, dt Date) engine = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 122', () => {
    const query = `create view date_pv as select * from date_table_pv where dt =  {dtparam:Date};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 123', () => {
    const query = `create table date32_table_pv (id Int32, dt Date32) engine = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 124', () => {
    const query = `create view date32_pv as select * from date32_table_pv where dt =  {dtparam:Date32};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 125', () => {
    const query = `create table uuid_table_pv (id Int32, uu UUID) engine = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 126', () => {
    const query = `create view uuid_pv as select * from uuid_table_pv where uu =  {uuidparam:UUID};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 127', () => {
    const query = `create view date_pv2 as select * from date_table_pv where dt = {dtparam:Date} and id = {intparam:Int32};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 128', () => {
    const query = `create table ipv4_table_pv (id Int32, ipaddr IPv4) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 129', () => {
    const query = `create view ipv4_pv as select * from ipv4_table_pv where ipaddr = {ipv4param:IPv4};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 130', () => {
    const query = `CREATE TABLE order_by_all (
a String,
b Nullable(Int32),
all UInt64
)
ENGINE = ReplicatedMergeTree('/clickhouse/{database}/test_03210', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 131', () => {
    const query = `CREATE TABLE t_03209 ( \`a\` Decimal(18, 0), \`b\` Decimal(18, 1), \`c\` Decimal(36, 0) ) ENGINE = ReplicatedMergeTree('/clickhouse/{database}/test_03209', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 132', () => {
    const query = `CREATE TABLE tab ( \`k\` Nullable(UInt32), \`k1\` Nullable(UInt32), \`k2\` Nullable(UInt32), \`v\` String ) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 133', () => {
    const query = `CREATE TABLE mem ( \`k\` UInt64, \`v\` String ) ENGINE = Join(ANY, LEFT, k);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 134', () => {
    const query = `CREATE TABLE mem2 ( \`k\` UInt64, \`v\` String ) ENGINE = Join(ANY, RIGHT, k);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 135', () => {
    const query = `CREATE TABLE mem3 ( \`k\` UInt64, \`v\` String ) ENGINE = Join(ALL, FULL, k) SETTINGS join_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 136', () => {
    const query = `CREATE TABLE mem4 ( \`k1\` UInt64, \`k2\` UInt64, \`v\` String ) ENGINE = Join(ALL, FULL, k1, k2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 137', () => {
    const query = `CREATE TABLE grouparray (
\`v\` AggregateFunction(groupArrayIntersect, Array(UInt8))
)
ENGINE = Log;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 138', () => {
    const query = `CREATE TABLE grouparray_string (
\`v\` AggregateFunction(groupArrayIntersect, Array(Tuple(Array(String))))
)
ENGINE = Log;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 139', () => {
    const query = `CREATE TABLE realtimedrep (\`amount\` Int32) ENGINE = MergeTree() ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 140', () => {
    const query = `CREATE TABLE realtimedistributed (\`amount\` Int32) ENGINE = Distributed(test_cluster_two_shards, currentDatabase(), realtimedrep, rand());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 141', () => {
    const query = `CREATE TABLE realtimebuff__fuzz_19 (\`amount\` UInt32) ENGINE = Buffer(currentDatabase(), 'realtimedistributed', 16, 3600, 36000, 10000, 1000000, 10000000, 100000000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 142', () => {
    const query = `CREATE TABLE realtimebuff__fuzz_20 (\`amount\` Nullable(Int32)) ENGINE = Buffer(currentDatabase(), 'realtimedistributed', 16, 3600, 36000, 10000, 1000000, 10000000, 100000000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 143', () => {
    const query = `create table test (id UInt64, json JSON(max_dynamic_paths=8, a.b Array(JSON))) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 144', () => {
    const query = `create table test (id UInt64, json JSON(max_dynamic_paths=2, a.b.c UInt32)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 145', () => {
    const query = `CREATE DATABASE rdb1 ENGINE = Replicated('/test/test_replication_lag_metric', 'shard1', 'replica1');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 146', () => {
    const query = `CREATE DATABASE rdb2 ENGINE = Replicated('/test/test_replication_lag_metric', 'shard1', 'replica2');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 147', () => {
    const query = `CREATE TABLE rdb1.t (id UInt32) ENGINE = ReplicatedMergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 148', () => {
    const query = `CREATE TABLE tp ( type Int32,
eventcnt UInt64,
PROJECTION p (select sum(eventcnt), type group by type)
) engine = MergeTree order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 149', () => {
    const query = `CREATE TABLE tp ( type Int32,
eventcnt UInt64,
PROJECTION p (select sum(eventcnt), type group by type)
) engine = MergeTree order by type
SETTINGS deduplicate_merge_projection_mode = 'drop';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 150', () => {
    const query = `CREATE TABLE tp ( type Int32,
eventcnt UInt64,
PROJECTION p (select sum(eventcnt), type group by type)
) engine = ReplacingMergeTree order by type;  -- { serverError SUPPORT_IS_DISABLED }
CREATE TABLE tp (
type Int32,
eventcnt UInt64,
PROJECTION p (select sum(eventcnt), type group by type)
) engine = ReplacingMergeTree order by type
SETTINGS deduplicate_merge_projection_mode = 'throw';  -- { serverError SUPPORT_IS_DISABLED }
CREATE TABLE tp (
type Int32,
eventcnt UInt64,
PROJECTION p (select sum(eventcnt), type group by type)
) engine = ReplacingMergeTree order by type
SETTINGS deduplicate_merge_projection_mode = 'drop';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 151', () => {
    const query = `CREATE TABLE tp ( type Int32,
eventcnt UInt64,
PROJECTION p (select sum(eventcnt), type group by type)
) engine = ReplacingMergeTree order by type
SETTINGS deduplicate_merge_projection_mode = 'rebuild';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 152', () => {
    const query = `CREATE TABLE tp ( type Int32,
eventcnt UInt64
) engine = ReplacingMergeTree order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 153', () => {
    const query = `CREATE TABLE left (x UUID) ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 154', () => {
    const query = `CREATE TABLE right (x UUID) ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 155', () => {
    const query = `create table t(c Int32, d Bool) Engine=MergeTree order by c;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 156', () => {
    const query = `create table t ( c Int32 primary key ,
s Bool ,
w Float64
);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 157', () => {
    const query = `CREATE TABLE t1__fuzz_26 (\`a\` Nullable(Float64), \`b\` Nullable(Float32), \`pk\` Int64) ENGINE = MergeTree ORDER BY pk;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 158', () => {
    const query = `CREATE TABLE t1 ( a Float64, b Int64, pk String) Engine = MergeTree() ORDER BY pk;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 159', () => {
    const query = `create table test (json JSON(max_dynamic_paths=10)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 160', () => {
    const query = `create table test (json JSON(max_dynamic_types=10)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 161', () => {
    const query = `create table test (json JSON(a UInt32)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 162', () => {
    const query = `create table test (json JSON(aaaaa UInt32)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 163', () => {
    const query = `create table test (json JSON(\`a b c d\` UInt32)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 164', () => {
    const query = `create table test (json JSON(a.b.c UInt32)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 165', () => {
    const query = `create table test (json JSON(aaaa.b.cccc UInt32)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 166', () => {
    const query = `create table test (json JSON(\`some path\`.\`path some\` UInt32)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 167', () => {
    const query = `create table test (json JSON(a.b.c Tuple(d UInt32, e UInt32))) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 168', () => {
    const query = `create table test (json JSON(SKIP a)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 169', () => {
    const query = `create table test (json JSON(SKIP aaaa)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 170', () => {
    const query = `create table test (json JSON(SKIP \`a b c d\`)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 171', () => {
    const query = `create table test (json JSON(SKIP a.b.c)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 172', () => {
    const query = `create table test (json JSON(SKIP aaaa.b.cccc)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 173', () => {
    const query = `create table test (json JSON(SKIP \`some path\`.\`path some\`)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 174', () => {
    const query = `create table test (json JSON(SKIP REGEXP '.*a.*')) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 175', () => {
    const query = `create table test (json JSON(max_dynamic_paths=10, max_dynamic_types=10, a.b.c UInt32, b.c.d String, SKIP g.d.a, SKIP o.g.a, SKIP REGEXP '.*u.*', SKIP REGEXP 'abc')) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 176', () => {
    const query = `CREATE TABLE dict_03204 (k UInt64, v UInt64) ENGINE = Join(ANY, LEFT, k);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 177', () => {
    const query = `CREATE TABLE t_c3oollc8r (c_k37 Int32, c_y String, c_bou Int32, c_g1 Int32, c_lfntfzg Int32, c_kntw50q Int32) ENGINE = MergeTree ORDER BY ();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 178', () => {
    const query = `CREATE TABLE foo (i Date) ENGINE MergeTree ORDER BY i;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 179', () => {
    const query = `CREATE TABLE bugcheck1 ENGINE = MergeTree
ORDER BY tuple()
AS SELECT
'c1' as column_a,
'c2' as column_b;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 180', () => {
    const query = `CREATE TABLE t_missed_subcolumns (x UInt32) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 181', () => {
    const query = `CREATE TABLE t_missed_subcolumns (id UInt64, \`n.a\` Array(Nullable(String))) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 182', () => {
    const query = `CREATE TABLE t_missed_subcolumns (id UInt64) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 183', () => {
    const query = `CREATE TABLE t_03203 (p UInt64, v UInt64) ENGINE = MergeTree PARTITION BY p ORDER BY v;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 184', () => {
    const query = `CREATE TABLE t (p UInt8, x UInt64) Engine = MergeTree PARTITION BY p ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 185', () => {
    const query = `CREATE TABLE t_subcolumns_join (id UInt64) ENGINE=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 186', () => {
    const query = `create table test (d Dynamic) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 187', () => {
    const query = `CREATE TABLE test ( idx UInt64,
coverage Array(UInt64),
test_name String
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 188', () => {
    const query = `CREATE TABLE seq ( number UInt64
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 189', () => {
    const query = `CREATE TABLE t1 (
\`s1\` String,
\`s2\` String,
\`s3\` String
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 190', () => {
    const query = `CREATE TABLE t2 (
\`fs1\` FixedString(10),
\`fs2\` FixedString(10)
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 191', () => {
    const query = `CREATE TABLE table_with_materialized (col String MATERIALIZED 'A') ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 192', () => {
    const query = `CREATE TABLE 03199_fixedstring_array (arr Array(LowCardinality(FixedString(8)))) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 193', () => {
    const query = `CREATE TABLE labels_unordered (
idx Int64,
score Float64,
label Int64
)
ENGINE = MergeTree
PRIMARY KEY idx
ORDER BY idx;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 194', () => {
    const query = `CREATE TABLE labels_ordered (
idx Int64,
score Float64,
label Int64
)
ENGINE = MergeTree
PRIMARY KEY idx
ORDER BY idx;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 195', () => {
    const query = `CREATE TABLE test_numbers__fuzz_29 (\`a\` Array(Nullable(FixedString(19)))) ENGINE = MergeTree ORDER BY a SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 196', () => {
    const query = `CREATE TABLE test_dynamic (id UInt64, d Dynamic) ENGINE = MergeTree ORDER BY id SETTINGS min_bytes_for_wide_part = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 197', () => {
    const query = `CREATE DICTIONARY \`test_dictionary0\` ( \`n1\` String,
\`n2\` UInt32
)
PRIMARY KEY n1
SOURCE(CLICKHOUSE(HOST 'localhost' PORT 9000 DB 'test_db' TABLE 'table_01' USER 'default'))
LIFETIME(MIN 1 MAX 10)
LAYOUT(FLAT());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 198', () => {
    const query = `CREATE DICTIONARY \`test_dictionary1\` ( \`n1\` String,
\`n2\` UInt32
)
PRIMARY KEY n1
SOURCE(CLICKHOUSE(HOST 'localhost' PORT 9000 DB 'test_db' TABLE 'table_01' USER 'default'))
LIFETIME(MIN 1 MAX 10)
LAYOUT(FLAT());  -- { serverError 36 }
CREATE DICTIONARY \`test_dictionary2\` (
\`n1\` UInt32,
\`n2\` UInt32
)
PRIMARY KEY n1
SOURCE(CLICKHOUSE(HOST 'localhost' PORT 9000 DB 'test_db' TABLE 'table_01' USER 'default'))
LIFETIME(MIN 1 MAX 10)
LAYOUT(FLAT()); -- { serverError 36 }
CREATE DICTIONARY \`test_dictionary3\` (
\`n1\` UInt64,
\`n2\` UInt32
)
PRIMARY KEY n1
SOURCE(CLICKHOUSE(HOST 'localhost' PORT 9000 DB 'test_db' TABLE 'table_01' USER 'default'))
LIFETIME(MIN 1 MAX 10)
LAYOUT(FLAT());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 199', () => {
    const query = `CREATE TABLE my_events (start UInt32, end UInt32) Engine = MergeTree ORDER BY tuple() AS Select * FROM VALUES ('start UInt32, end UInt32', (1, 3), (1, 6), (2, 5), (3, 7));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 200', () => {
    const query = `CREATE TABLE test_serialization (
id UInt64,
text AggregateFunction(groupConcat, String)
) ENGINE = AggregatingMergeTree() ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 201', () => {
    const query = `CREATE TABLE t_bloom_filter( key UInt64,
value UInt64,
INDEX key_bf key TYPE bloom_filter(0.01) GRANULARITY 2147483648, -- bloom filter on sorting key column
INDEX value_bf value TYPE bloom_filter(0.01) GRANULARITY 2147483648  -- bloom filter on no-sorting column
) ENGINE=MergeTree ORDER BY key
SETTINGS
ratio_of_defaults_for_sparse_serialization = 0.0
,vertical_merge_algorithm_min_rows_to_activate = 1
,vertical_merge_algorithm_min_columns_to_activate = 1
,allow_vertical_merges_from_compact_to_wide_parts = 1
,min_bytes_for_wide_part=0
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 202', () => {
    const query = `create table tab (x DateTime('UTC'), y UInt32, v Int32) engine = ReplacingMergeTree(v) order by x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 203', () => {
    const query = `CREATE TABLE test_projection_deduplicate (
\`id\` Int32,
\`string\` String,
PROJECTION test_projection
(
SELECT id
GROUP BY id
)
)
ENGINE = MergeTree
PRIMARY KEY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 204', () => {
    const query = `CREATE TABLE xxxx_yyy (key UInt32, key_b ALIAS key) ENGINE=MergeTree() ORDER BY key SETTINGS ratio_of_defaults_for_sparse_serialization=0.0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 205', () => {
    const query = `create table test (i int) engine MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 206', () => {
    const query = `create table test (i int) engine MergeTree order by i;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 207', () => {
    const query = `CREATE TABLE 03173_single_function ( dt Date,
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY toMonth(dt);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 208', () => {
    const query = `CREATE TABLE 03173_nested_function( id Int32,
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY xxHash32(id) % 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 209', () => {
    const query = `CREATE TABLE 03173_nested_function_lc( id LowCardinality(Int32),
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY xxHash32(id) % 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 210', () => {
    const query = `CREATE TABLE 03173_nested_function_null( id Nullable(Int32),
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY xxHash32(id) % 3
SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 211', () => {
    const query = `CREATE TABLE 03173_nested_function_lc_null( id LowCardinality(Nullable(Int32)),
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY xxHash32(id) % 3
SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 212', () => {
    const query = `CREATE TABLE 03173_nonsafe_cast( id Int64,
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY xxHash32(id) % 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 213', () => {
    const query = `CREATE TABLE 03173_multiple_partition_cols ( key1 Int32,
key2 Int32
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY (intDiv(key1, 50), xxHash32(key2) % 3);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 214', () => {
    const query = `CREATE TABLE 03173_base_data_source( id Int32,
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY xxHash32(id) % 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 215', () => {
    const query = `CREATE TABLE 03173_low_cardinality_set (id LowCardinality(Int32)) ENGINE=Memory AS SELECT 10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 216', () => {
    const query = `CREATE TABLE 03173_nullable_set (id Nullable(Int32)) ENGINE=Memory AS SELECT 10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 217', () => {
    const query = `CREATE TABLE 03173_lc_nullable_set (id LowCardinality(Nullable(Int32))) ENGINE=Memory AS SELECT 10 UNION ALL SELECT NULL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 218', () => {
    const query = `CREATE TABLE 03173_date_parsing ( id String
)
ENGINE=MergeTree
ORDER BY tuple()
PARTITION BY toDate(id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 219', () => {
    const query = `CREATE TABLE 03173_nested_date_parsing ( id String
)
ENGINE=MergeTree
ORDER BY tuple()
PARTITION BY toMonth(toDate(id));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 220', () => {
    const query = `CREATE TABLE 03173_empty_transform( id Int32,
)
ENGINE = MergeTree
ORDER BY tuple()
PARTITION BY xxHash32(id) % 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 221', () => {
    const query = `create table test_qualify (number Int64) ENGINE = MergeTree ORDER BY (number);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 222', () => {
    const query = `CREATE TABLE test (id UInt64, value String) ENGINE=MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 223', () => {
    const query = `CREATE DICTIONARY test_dict (
id UInt64,
value String
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE test))
LAYOUT(FLAT())
LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 224', () => {
    const query = `CREATE TABLE view_source (id UInt64) ENGINE=MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 225', () => {
    const query = `CREATE VIEW view AS SELECT id, dictGet('test_dict', 'value', id) as value FROM view_source;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 226', () => {
    const query = `CREATE OR REPLACE DICTIONARY test_dict (
id UInt64,
value String
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE view))
LAYOUT(FLAT())
LIFETIME(MIN 0 MAX 1000); -- {serverError INFINITE_LOOP}
REPLACE DICTIONARY test_dict
(
id UInt64,
value String
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE view))
LAYOUT(FLAT())
LIFETIME(MIN 0 MAX 1000); -- {serverError INFINITE_LOOP}
DROP DICTIONARY IF EXISTS test_dict_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 227', () => {
    const query = `CREATE DICTIONARY test_dict_2 (
id UInt64,
value String
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE view))
LAYOUT(FLAT())
LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 228', () => {
    const query = `CREATE OR REPLACE DICTIONARY test_dict_2 (
id UInt64,
value String
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE view))
LAYOUT(FLAT())
LIFETIME(MIN 0 MAX 1000); `;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 229', () => {
    const query = `CREATE TABLE test_hilbert_encode (x UInt32, y UInt32) ENGINE = MergeTree ORDER BY hilbertEncode(x, y) SETTINGS index_granularity = 8192, index_granularity_bytes = '1Mi';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 230', () => {
    const query = `CREATE TABLE test_hilbert_encode (x UInt32, y UInt32) ENGINE = MergeTree ORDER BY hilbertEncode(x, y) SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 231', () => {
    const query = `CREATE TABLE x ( hash_id UInt64, user_result Decimal(3, 2) ) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 232', () => {
    const query = `CREATE TABLE y ( hash_id UInt64, user_result  DECIMAL(18, 6) ) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 233', () => {
    const query = `CREATE DICTIONARY d1 (hash_id UInt64, user_result Decimal(3, 2) ) PRIMARY KEY hash_id
SOURCE(CLICKHOUSE(TABLE 'x'))
LIFETIME(0)
LAYOUT(HASHED());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 234', () => {
    const query = `CREATE DICTIONARY d2 (hash_id UInt64, user_result Decimal(3, 2) ) PRIMARY KEY hash_id
SOURCE(CLICKHOUSE(TABLE 'x'))
LIFETIME(0)
LAYOUT(HASHED_ARRAY());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 235', () => {
    const query = `CREATE TABLE t_func_to_subcolumns_map_2 (id UInt64, m Map(String, UInt64)) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 236', () => {
    const query = `CREATE TABLE t_func_to_subcolumns_join (id UInt64, arr Array(UInt64), n Nullable(String), m Map(String, UInt64)) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 237', () => {
    const query = `CREATE TABLE t_func_to_subcolumns_use_nulls (arr Array(UInt64), v UInt64) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 238', () => {
    const query = `CREATE TABLE simple_key_simple_attributes_source_table (
id UInt64,
value_first String,
value_second String
)
ENGINE = TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 239', () => {
    const query = `CREATE DICTIONARY direct_dictionary_simple_key_simple_attributes (
\`id\` UInt64,
\`value_first\` String DEFAULT 'value_first_default',
\`value_second\` String DEFAULT 'value_second_default'
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE 'simple_key_simple_attributes_source_table'))
LAYOUT(DIRECT());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 240', () => {
    const query = `CREATE TABLE test_table (
\`key\` UInt32,
\`_part_offset\` DEFAULT 0
)
ENGINE = MergeTree
ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 241', () => {
    const query = `CREATE TABLE column_modify_test (id UInt64, val String, other_col UInt64) engine=MergeTree ORDER BY id SETTINGS min_bytes_for_wide_part=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 242', () => {
    const query = `CREATE TABLE complex_key_simple_attributes_source_short_circuit_table (
id UInt64,
id_key String,
value_first String,
value_second String
)
ENGINE = TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 243', () => {
    const query = `CREATE DICTIONARY cache_dictionary_complex_key_simple_attributes_short_circuit (
\`id\` UInt64,
\`id_key\` String,
\`value_first\` String DEFAULT 'value_first_default',
\`value_second\` String DEFAULT 'value_second_default'
)
PRIMARY KEY id, id_key
SOURCE(CLICKHOUSE(TABLE 'complex_key_simple_attributes_source_short_circuit_table'))
LIFETIME(MIN 1 MAX 1000)
LAYOUT(COMPLEX_KEY_CACHE(SIZE_IN_CELLS 10));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 244', () => {
    const query = `CREATE TABLE t_read_in_order_2 (id UInt64, v UInt64) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 245', () => {
    const query = `CREATE TABLE t_read_in_order_1 (id UInt64, v UInt64) ENGINE = MergeTree ORDER BY id
SETTINGS index_granularity = 1024, index_granularity_bytes = '10M';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 246', () => {
    const query = `CREATE DATABASE IF NOT EXISTS 03147_db;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 247', () => {
    const query = `CREATE TABLE 03147_db.t (n Int8) ENGINE=MergeTree ORDER BY n;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 248', () => {
    const query = `create table a (x \`Null\`); -- { clientError SYNTAX_ERROR } create table a (x f(\`Null\`)); -- { clientError SYNTAX_ERROR }
create table a (x Enum8(f(\`Null\`, 'World', 2))); -- { clientError SYNTAX_ERROR }
create table a (\`value2\` Enum8('Hello' = 1, equals(\`Null\`, 'World', 2), '!' = 3)); -- { clientError SYNTAX_ERROR }
create table a (x Int8) engine Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 249', () => {
    const query = `create table b empty as a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 250', () => {
    const query = `CREATE TABLE null_table (str String) ENGINE = Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 251', () => {
    const query = `CREATE MATERIALIZED VIEW mv_table (str String) ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/transactions_disabled_rmt', '{replica}') ORDER BY str AS SELECT str AS str FROM null_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 252', () => {
    const query = `CREATE OR REPLACE VIEW param_test AS SELECT {test_str:String} as s_result;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 253', () => {
    const query = `CREATE TABLE t_ind_merge_2 ( a UInt64,
b UInt64,
c UInt64,
d UInt64,
e UInt64,
f UInt64,
INDEX idx_a  a TYPE minmax,
INDEX idx_b  b TYPE minmax,
INDEX idx_cd c * d TYPE minmax,
INDEX idx_d1 d TYPE minmax,
INDEX idx_d2 d + 7 TYPE set(3),
INDEX idx_e  e * 3 TYPE set(3))
ENGINE = MergeTree
ORDER BY a SETTINGS
index_granularity = 64,
vertical_merge_algorithm_min_rows_to_activate = 1,
vertical_merge_algorithm_min_columns_to_activate = 1,
min_bytes_for_wide_part = 0,
min_bytes_for_full_part_storage = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 254', () => {
    const query = `CREATE TABLE t_ind_merge_1 (a UInt64, b UInt64, c UInt64, d UInt64, INDEX idx_b b TYPE minmax) ENGINE = MergeTree
ORDER BY a SETTINGS
index_granularity = 64,
merge_max_block_size = 8192,
vertical_merge_algorithm_min_rows_to_activate = 1,
vertical_merge_algorithm_min_columns_to_activate = 1,
min_bytes_for_wide_part = 0,
min_bytes_for_full_part_storage = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 255', () => {
    const query = `CREATE TABLE tab ( name String,
event Int8
) ENGINE = MergeTree
ORDER BY name
SETTINGS optimize_row_order = true;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 256', () => {
    const query = `CREATE TABLE tab ( name String,
timestamp Int64,
money UInt8,
flag String
) ENGINE = MergeTree
ORDER BY ()
SETTINGS optimize_row_order = True;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 257', () => {
    const query = `CREATE TABLE tab ( name FixedString(2),
timestamp Float32,
money Float64,
flag Nullable(Int32)
) ENGINE = MergeTree
ORDER BY (flag, money)
SETTINGS optimize_row_order = True, allow_nullable_key = True;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 258', () => {
    const query = `CREATE TABLE tab ( fixed_str FixedString(6),
event_date Date,
vector_array Array(Float32),
nullable_int Nullable(Int128),
low_card_string LowCardinality(String),
map_column Map(String, String),
tuple_column Tuple(UInt256)
) ENGINE = MergeTree()
ORDER BY (fixed_str, event_date)
SETTINGS optimize_row_order = True;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 259', () => {
    const query = `create table src (x Int64) engine = Log;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 260', () => {
    const query = `create table dst (s String, lc LowCardinality(String)) engine MergeTree order by s;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 261', () => {
    const query = `create materialized view mv to dst (s String, lc String) as select 'a' as s, toLowCardinality('b') as lc from src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 262', () => {
    const query = `CREATE TABLE 03165_token_bf (
id Int64,
message String,
INDEX idx_message message TYPE tokenbf_v1(32768, 3, 2) GRANULARITY 1
)
ENGINE = MergeTree
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 263', () => {
    const query = `CREATE TABLE 03165_token_ft (
id Int64,
message String,
INDEX idx_message message TYPE full_text() GRANULARITY 1
)
ENGINE = MergeTree
ORDER BY id
SETTINGS min_bytes_for_full_part_storage=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 264', () => {
    const query = `CREATE TABLE ids (id UUID, whatever String) Engine=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 265', () => {
    const query = `CREATE TABLE data (id UUID, event_time DateTime, status String) Engine=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 266', () => {
    const query = `CREATE TABLE data2 (id UUID, event_time DateTime, status String) Engine=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 267', () => {
    const query = `CREATE TABLE tab ( id Int32,
scale Int16,
u8 UInt8, u16 UInt16, u32 UInt32, u64 UInt64,
i8 Int8, i16 Int16, i32 Int32, i64 Int64,
f32 Float32, f64 Float64
) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 268', () => {
    const query = `CREATE TABLE tab ( id Int32,
scale Int16,
d32 Decimal32(4), d64 Decimal64(4), d128 Decimal128(4), d256 Decimal256(4)
) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 269', () => {
    const query = `CREATE TABLE test ENGINE = ReplacingMergeTree
PRIMARY KEY id
AS SELECT number AS id FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 270', () => {
    const query = `CREATE TABLE atable (
cdu_date Int16,
loanx_id String,
rating_sp String
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 271', () => {
    const query = `CREATE TABLE t_compact_bytes_s3(c1 UInt32, c2 UInt32, c3 UInt32, c4 UInt32, c5 UInt32) ENGINE = MergeTree ORDER BY c1
SETTINGS index_granularity = 512, min_bytes_for_wide_part = '10G', storage_policy = 's3_no_cache';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 272', () => {
    const query = `CREATE TABLE range_filter_custom_range_test (k UInt64) ENGINE=MergeTree ORDER BY k;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 273', () => {
    const query = `CREATE TABLE range_filter_custom_range_test_2 (k UInt64) ENGINE=MergeTree ORDER BY k;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 274', () => {
    const query = `CREATE TABLE range_filter_custom_range_test_3 (k UInt64) ENGINE=MergeTree ORDER BY k;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 275', () => {
    const query = `CREATE TABLE 03164_users (uid Nullable(Int16), name String, age Int16) ENGINE=MergeTree ORDER BY (uid) SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 276', () => {
    const query = `CREATE TABLE 03164_multi_key (c1 Nullable(UInt32), c2 Nullable(UInt32)) ENGINE = MergeTree ORDER BY (c1, c2) SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 277', () => {
    const query = `CREATE TABLE t_skip_index_insert (
a UInt64,
b UInt64,
INDEX idx_a a TYPE minmax,
INDEX idx_b b TYPE set(3)
)
ENGINE = MergeTree ORDER BY tuple() SETTINGS index_granularity = 4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 278', () => {
    const query = `CREATE TABLE checks (
\`pull_request_number\` UInt32,
\`commit_sha\` LowCardinality(String),
\`check_name\` LowCardinality(String),
\`check_status\` LowCardinality(String),
\`check_duration_ms\` UInt64,
\`check_start_time\` DateTime,
\`test_name\` LowCardinality(String),
\`test_status\` LowCardinality(String),
\`test_duration_ms\` UInt64,
\`report_url\` String,
\`pull_request_url\` String,
\`commit_url\` String,
\`task_url\` String,
\`base_ref\` String,
\`base_repo\` String,
\`head_ref\` String,
\`head_repo\` String,
\`test_context_raw\` String,
\`instance_type\` LowCardinality(String),
\`instance_id\` String,
\`date\` Date MATERIALIZED toDate(check_start_time)
)
ENGINE = MergeTree ORDER BY (date, pull_request_number, commit_sha, check_name, test_name, check_start_time);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 279', () => {
    const query = `CREATE TABLE src_table (
time DateTime('UTC') DEFAULT fromUnixTimestamp(sipTimestamp),
sipTimestamp UInt64
)
ENGINE = MergeTree
ORDER BY time;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 280', () => {
    const query = `CREATE TABLE copied_table AS src_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 281', () => {
    const query = `CREATE TABLE t (
c1	Int64	,
c2	Int64	,
c3	Int64	,
c4	Int64	,
c5	Int64	,
c6	Int64	,
c7	Int64	,
c8	Int64	,
c9	Int64	,
c10	Int64	,
c11	Int64	,
c12	Int64	,
c13	Int64	,
c14	Int64	,
c15	Int64	,
c16	Int64	,
c17	Int64	,
c18	Int64	,
c19	Int64	,
c20	Int64	,
c21	Int64	,
c22	Int64	,
c23	Int64	,
c24	Int64	,
c25	Int64	,
c26	Int64	,
c27	Int64	,
c28	Int64	,
c29	Int64	,
c30	Int64	,
c31	Int64	,
c32	Int64	,
c33	Int64	,
c34	Int64	,
c35	Int64	,
c36	Int64	,
c37	Int64	,
c38	Int64	,
c39	Int64	,
c40	Int64	,
c41	Int64	,
c42	Int64	,
c43	Int64	,
c44	Int64	,
c45	Int64	,
c46	Int64	,
c47	Int64	,
c48	Int64	,
c49	Int64	,
c50	Int64	,
c51	Int64	,
c52	Int64	,
c53	Int64	,
c54	Int64	,
c55	Int64	,
c56	Int64	,
c57	Int64	,
c58	Int64	,
c59	Int64	,
c60	Int64	,
c61	Int64	,
c62	Int64	,
c63	Int64	,
c64	Int64	,
c65	Int64	,
c66	Int64	,
c67	Int64	,
c68	Int64	,
c69	Int64	,
c70	Int64	,
c71	Int64	,
c72	Int64	,
c73	Int64	,
c74	Int64	,
c75	Int64	,
c76	Int64	,
c77	Int64	,
c78	Int64	,
c79	Int64	,
c80	Int64	,
c81	Int64	,
c82	Int64	,
c83	Int64	,
c84	Int64	,
c85	Int64	,
c86	Int64	,
c87	Int64	,
c88	Int64	,
c89	Int64	,
c90	Int64	,
c91	Int64	,
c92	Int64	,
c93	Int64	,
c94	Int64	,
c95	Int64	,
c96	Int64	,
c97	Int64	,
c98	Int64	,
c99	Int64	,
c100	Int64	,
c101	Int64	,
c102	Int64	,
c103	Int64	,
c104	Int64	,
c105	Int64	,
c106	Int64	,
c107	Int64	,
c108	Int64	,
c109	Int64	,
c110	Int64	,
c111	Int64	,
c112	Int64	,
c113	Int64	,
c114	Int64	,
c115	Int64	,
c116	Int64	,
c117	Int64	,
c118	Int64	,
c119	Int64	,
c120	Int64	,
c121	Int64	,
c122	Int64	,
c123	Int64	,
c124	Int64	,
c125	Int64	,
c126	Int64	,
c127	Int64	,
c128	Int64	,
c129	Int64	,
c130	Int64	,
c131	Int64	,
c132	Int64	,
c133	Int64	,
c134	Int64	,
c135	Int64	,
c136	Int64	,
c137	Int64	,
c138	Int64	,
c139	Int64	,
c140	Int64	,
c141	Int64	,
c142	Int64	,
c143	Int64	,
c144	Int64	,
c145	Int64	,
c146	Int64	,
c147	Int64	,
c148	Int64	,
c149	Int64	,
c150	Int64	,
c151	Int64	,
c152	Int64	,
c153	Int64	,
c154	Int64	,
c155	Int64	,
c156	Int64	,
c157	Int64	,
c158	Int64	,
c159	Int64	,
c160	Int64	,
c161	Int64	,
c162	Int64	,
c163	Int64	,
c164	Int64	,
c165	Int64	,
c166	Int64	,
c167	Int64	,
c168	Int64	,
c169	Int64	,
c170	Int64	,
c171	Int64	,
c172	Int64	,
c173	Int64	,
c174	Int64	,
c175	Int64	,
c176	Int64	,
c177	Int64	,
c178	Int64	,
c179	Int64	,
c180	Int64	,
c181	Int64	,
c182	Int64	,
c183	Int64	,
c184	Int64	,
c185	Int64	,
c186	Int64	,
c187	Int64	,
c188	Int64	,
c189	Int64	,
c190	Int64	,
c191	Int64	,
c192	Int64	,
c193	Int64	,
c194	Int64	,
c195	Int64	,
c196	Int64	,
c197	Int64	,
c198	Int64	,
c199	Int64	,
c200	Int64	,
c201	Int64	,
c202	Int64	,
c203	Int64	,
c204	Int64	,
c205	Int64	,
c206	Int64	,
c207	Int64	,
c208	Int64	,
c209	Int64	,
c210	Int64	,
c211	Int64	,
c212	Int64	,
c213	Int64	,
c214	Int64	,
c215	Int64	,
c216	Int64	,
c217	Int64	,
c218	Int64	,
c219	Int64	,
c220	Int64	,
c221	Int64	,
c222	Int64	,
c223	Int64	,
c224	Int64	,
c225	Int64	,
c226	Int64	,
c227	Int64	,
c228	Int64	,
c229	Int64	,
c230	Int64	,
c231	Int64	,
c232	Int64	,
c233	Int64	,
c234	Int64	,
c235	Int64	,
c236	Int64	,
c237	Int64	,
c238	Int64	,
c239	Int64	,
c240	Int64	,
c241	Int64	,
c242	Int64	,
c243	Int64	,
c244	Int64	,
c245	Int64	,
c246	Int64	,
c247	Int64	,
c248	Int64	,
c249	Int64	,
c250	Int64	,
c251	Int64	,
c252	Int64	,
c253	Int64	,
c254	Int64	,
c255	Int64	,
c256	Int64	,
c257	Int64	,
c258	Int64	,
c259	Int64	,
c260	Int64	,
c261	Int64	,
c262	Int64	,
c263	Int64	,
c264	Int64	,
c265	Int64	,
c266	Int64	,
c267	Int64	,
c268	Int64	,
c269	Int64	,
c270	Int64	,
c271	Int64	,
c272	Int64	,
c273	Int64	,
c274	Int64	,
c275	Int64	,
c276	Int64	,
c277	Int64	,
c278	Int64	,
c279	Int64	,
c280	Int64	,
c281	Int64	,
c282	Int64	,
c283	Int64	,
c284	Int64	,
c285	Int64	,
c286	Int64	,
c287	Int64	,
c288	Int64	,
c289	Int64	,
c290	Int64	,
c291	Int64	,
c292	Int64	,
c293	Int64	,
c294	Int64	,
c295	Int64	,
c296	Int64	,
c297	Int64	,
c298	Int64	,
c299	Int64	,
c300	Int64	,
c301	Int64	,
c302	Int64	,
c303	Int64	,
c304	Int64	,
c305	Int64	,
c306	Int64	,
c307	Int64	,
c308	Int64	,
c309	Int64	,
c310	Int64	,
c311	Int64	,
c312	Int64	,
c313	Int64	,
c314	Int64	,
c315	Int64	,
c316	Int64	,
c317	Int64	,
c318	Int64	,
c319	Int64	,
c320	Int64	,
c321	Int64	,
c322	Int64	,
c323	Int64	,
c324	Int64	,
c325	Int64	,
c326	Int64	,
c327	Int64	,
c328	Int64	,
c329	Int64	,
c330	Int64	,
c331	Int64	,
c332	Int64	,
c333	Int64	,
c334	Int64	,
c335	Int64	,
c336	Int64	,
c337	Int64	,
c338	Int64	,
c339	Int64	,
c340	Int64	,
c341	Int64	,
c342	Int64	,
c343	Int64	,
c344	Int64	,
c345	Int64	,
c346	Int64	,
c347	Int64	,
c348	Int64	,
c349	Int64	,
c350	Int64	,
c351	Int64	,
c352	Int64	,
c353	Int64	,
c354	Int64	,
c355	Int64	,
c356	Int64	,
c357	Int64	,
c358	Int64	,
c359	Int64	,
c360	Int64	,
c361	Int64	,
c362	Int64	,
c363	Int64	,
c364	Int64	,
c365	Int64	,
c366	Int64	,
c367	Int64	,
c368	Int64	,
c369	Int64	,
c370	Int64	,
c371	Int64	,
c372	Int64	,
c373	Int64	,
c374	Int64	,
c375	Int64	,
c376	Int64	,
c377	Int64	,
c378	Int64	,
c379	Int64	,
c380	Int64	,
c381	Int64	,
c382	Int64	,
c383	Int64	,
c384	Int64	,
c385	Int64	,
c386	Int64	,
c387	Int64	,
c388	Int64	,
c389	Int64	,
c390	Int64	,
c391	Int64	,
c392	Int64	,
c393	Int64	,
c394	Int64	,
c395	Int64	,
c396	Int64	,
c397	Int64	,
c398	Int64	,
c399	Int64	,
c400	Int64	,
c401	Int64	,
c402	Int64	,
c403	Int64	,
c404	Int64	,
c405	Int64	,
c406	Int64	,
c407	Int64	,
c408	Int64	,
c409	Int64	,
c410	Int64	,
c411	Int64	,
c412	Int64	,
c413	Int64	,
c414	Int64	,
c415	Int64	,
c416	Int64	,
c417	Int64	,
c418	Int64	,
c419	Int64	,
c420	Int64	,
c421	Int64	,
c422	Int64	,
c423	Int64	,
c424	Int64	,
c425	Int64	,
c426	Int64	,
c427	Int64	,
c428	Int64	,
c429	Int64	,
c430	Int64	,
c431	Int64	,
c432	Int64	,
c433	Int64	,
c434	Int64	,
c435	Int64	,
c436	Int64	,
c437	Int64	,
c438	Int64	,
c439	Int64	,
c440	Int64	,
c441	Int64	,
c442	Int64	,
c443	Int64	,
c444	Int64	,
c445	Int64	,
c446	Int64	,
c447	Int64	,
c448	Int64	,
c449	Int64	,
c450	Int64	,
c451	Int64	,
c452	Int64	,
c453	Int64	,
c454	Int64	,
c455	Int64	,
c456	Int64	,
c457	Int64	,
c458	Int64	,
c459	Int64	,
c460	Int64	,
c461	Int64	,
c462	Int64	,
c463	Int64	,
c464	Int64	,
c465	Int64	,
c466	Int64	,
c467	Int64	,
c468	Int64	,
c469	Int64	,
c470	Int64	,
c471	Int64	,
c472	Int64	,
c473	Int64	,
c474	Int64	,
c475	Int64	,
c476	Int64	,
c477	Int64	,
c478	Int64	,
c479	Int64	,
c480	Int64	,
c481	Int64	,
c482	Int64	,
c483	Int64	,
c484	Int64	,
c485	Int64	,
c486	Int64	,
c487	Int64	,
c488	Int64	,
c489	Int64	,
c490	Int64	,
c491	Int64	,
c492	Int64	,
c493	Int64	,
c494	Int64	,
c495	Int64	,
c496	Int64	,
c497	Int64	,
c498	Int64	,
c499	Int64	,
c500	Int64	,
b1	Int64	,
b2	Int64	,
b3	Int64	,
b4	Int64	,
b5	Int64	,
b6	Int64	,
b7	Int64	,
b8	Int64	,
b9	Int64	,
b10	Int64	,
b11	Int64	,
b12	Int64	,
b13	Int64	,
b14	Int64	,
b15	Int64	,
b16	Int64	,
b17	Int64	,
b18	Int64	,
b19	Int64	,
b20	Int64	,
b21	Int64	,
b22	Int64	,
b23	Int64	,
b24	Int64	,
b25	Int64	,
b26	Int64	,
b27	Int64	,
b28	Int64	,
b29	Int64	,
b30	Int64	,
b31	Int64	,
b32	Int64	,
b33	Int64	,
b34	Int64	,
b35	Int64	,
b36	Int64	,
b37	Int64	,
b38	Int64	,
b39	Int64	,
b40	Int64	,
b41	Int64	,
b42	Int64	,
b43	Int64	,
b44	Int64	,
b45	Int64	,
b46	Int64	,
b47	Int64	,
b48	Int64	,
b49	Int64	,
b50	Int64	,
b51	Int64	,
b52	Int64	,
b53	Int64	,
b54	Int64	,
b55	Int64	,
b56	Int64	,
b57	Int64	,
b58	Int64	,
b59	Int64	,
b60	Int64	,
b61	Int64	,
b62	Int64	,
b63	Int64	,
b64	Int64	,
b65	Int64	,
b66	Int64	,
b67	Int64	,
b68	Int64	,
b69	Int64	,
b70	Int64	,
b71	Int64	,
b72	Int64	,
b73	Int64	,
b74	Int64	,
b75	Int64	,
b76	Int64	,
b77	Int64	,
b78	Int64	,
b79	Int64	,
b80	Int64	,
b81	Int64	,
b82	Int64	,
b83	Int64	,
b84	Int64	,
b85	Int64	,
b86	Int64	,
b87	Int64	,
b88	Int64	,
b89	Int64	,
b90	Int64	,
b91	Int64	,
b92	Int64	,
b93	Int64	,
b94	Int64	,
b95	Int64	,
b96	Int64	,
b97	Int64	,
b98	Int64	,
b99	Int64	,
b100	Int64	,
b101	Int64	,
b102	Int64	,
b103	Int64	,
b104	Int64	,
b105	Int64	,
b106	Int64	,
b107	Int64	,
b108	Int64	,
b109	Int64	,
b110	Int64	,
b111	Int64	,
b112	Int64	,
b113	Int64	,
b114	Int64	,
b115	Int64	,
b116	Int64	,
b117	Int64	,
b118	Int64	,
b119	Int64	,
b120	Int64	,
b121	Int64	,
b122	Int64	,
b123	Int64	,
b124	Int64	,
b125	Int64	,
b126	Int64	,
b127	Int64	,
b128	Int64	,
b129	Int64	,
b130	Int64	,
b131	Int64	,
b132	Int64	,
b133	Int64	,
b134	Int64	,
b135	Int64	,
b136	Int64	,
b137	Int64	,
b138	Int64	,
b139	Int64	,
b140	Int64	,
b141	Int64	,
b142	Int64	,
b143	Int64	,
b144	Int64	,
b145	Int64	,
b146	Int64	,
b147	Int64	,
b148	Int64	,
b149	Int64	,
b150	Int64	,
b151	Int64	,
b152	Int64	,
b153	Int64	,
b154	Int64	,
b155	Int64	,
b156	Int64	,
b157	Int64	,
b158	Int64	,
b159	Int64	,
b160	Int64	,
b161	Int64	,
b162	Int64	,
b163	Int64	,
b164	Int64	,
b165	Int64	,
b166	Int64	,
b167	Int64	,
b168	Int64	,
b169	Int64	,
b170	Int64	,
b171	Int64	,
b172	Int64	,
b173	Int64	,
b174	Int64	,
b175	Int64	,
b176	Int64	,
b177	Int64	,
b178	Int64	,
b179	Int64	,
b180	Int64	,
b181	Int64	,
b182	Int64	,
b183	Int64	,
b184	Int64	,
b185	Int64	,
b186	Int64	,
b187	Int64	,
b188	Int64	,
b189	Int64	,
b190	Int64	,
b191	Int64	,
b192	Int64	,
b193	Int64	,
b194	Int64	,
b195	Int64	,
b196	Int64	,
b197	Int64	,
b198	Int64	,
b199	Int64	,
b200	Int64	,
b201	Int64	,
b202	Int64	,
b203	Int64	,
b204	Int64	,
b205	Int64	,
b206	Int64	,
b207	Int64	,
b208	Int64	,
b209	Int64	,
b210	Int64	,
b211	Int64	,
b212	Int64	,
b213	Int64	,
b214	Int64	,
b215	Int64	,
b216	Int64	,
b217	Int64	,
b218	Int64	,
b219	Int64	,
b220	Int64	,
b221	Int64	,
b222	Int64	,
b223	Int64	,
b224	Int64	,
b225	Int64	,
b226	Int64	,
b227	Int64	,
b228	Int64	,
b229	Int64	,
b230	Int64	,
b231	Int64	,
b232	Int64	,
b233	Int64	,
b234	Int64	,
b235	Int64	,
b236	Int64	,
b237	Int64	,
b238	Int64	,
b239	Int64	,
b240	Int64	,
b241	Int64	,
b242	Int64	,
b243	Int64	,
b244	Int64	,
b245	Int64	,
b246	Int64	,
b247	Int64	,
b248	Int64	,
b249	Int64	,
b250	Int64	,
b251	Int64	,
b252	Int64	,
b253	Int64	,
b254	Int64	,
b255	Int64	,
b256	Int64	,
b257	Int64	,
b258	Int64	,
b259	Int64	,
b260	Int64	,
b261	Int64	,
b262	Int64	,
b263	Int64	,
b264	Int64	,
b265	Int64	,
b266	Int64	,
b267	Int64	,
b268	Int64	,
b269	Int64	,
b270	Int64	,
b271	Int64	,
b272	Int64	,
b273	Int64	,
b274	Int64	,
b275	Int64	,
b276	Int64	,
b277	Int64	,
b278	Int64	,
b279	Int64	,
b280	Int64	,
b281	Int64	,
b282	Int64	,
b283	Int64	,
b284	Int64	,
b285	Int64	,
b286	Int64	,
b287	Int64	,
b288	Int64	,
b289	Int64	,
b290	Int64	,
b291	Int64	,
b292	Int64	,
b293	Int64	,
b294	Int64	,
b295	Int64	,
b296	Int64	,
b297	Int64	,
b298	Int64	,
b299	Int64	,
b300	Int64	,
b301	Int64	,
b302	Int64	,
b303	Int64	,
b304	Int64	,
b305	Int64	,
b306	Int64	,
b307	Int64	,
b308	Int64	,
b309	Int64	,
b310	Int64	,
b311	Int64	,
b312	Int64	,
b313	Int64	,
b314	Int64	,
b315	Int64	,
b316	Int64	,
b317	Int64	,
b318	Int64	,
b319	Int64	,
b320	Int64	,
b321	Int64	,
b322	Int64	,
b323	Int64	,
b324	Int64	,
b325	Int64	,
b326	Int64	,
b327	Int64	,
b328	Int64	,
b329	Int64	,
b330	Int64	,
b331	Int64	,
b332	Int64	,
b333	Int64	,
b334	Int64	,
b335	Int64	,
b336	Int64	,
b337	Int64	,
b338	Int64	,
b339	Int64	,
b340	Int64	,
b341	Int64	,
b342	Int64	,
b343	Int64	,
b344	Int64	,
b345	Int64	,
b346	Int64	,
b347	Int64	,
b348	Int64	,
b349	Int64	,
b350	Int64	,
b351	Int64	,
b352	Int64	,
b353	Int64	,
b354	Int64	,
b355	Int64	,
b356	Int64	,
b357	Int64	,
b358	Int64	,
b359	Int64	,
b360	Int64	,
b361	Int64	,
b362	Int64	,
b363	Int64	,
b364	Int64	,
b365	Int64	,
b366	Int64	,
b367	Int64	,
b368	Int64	,
b369	Int64	,
b370	Int64	,
b371	Int64	,
b372	Int64	,
b373	Int64	,
b374	Int64	,
b375	Int64	,
b376	Int64	,
b377	Int64	,
b378	Int64	,
b379	Int64	,
b380	Int64	,
b381	Int64	,
b382	Int64	,
b383	Int64	,
b384	Int64	,
b385	Int64	,
b386	Int64	,
b387	Int64	,
b388	Int64	,
b389	Int64	,
b390	Int64	,
b391	Int64	,
b392	Int64	,
b393	Int64	,
b394	Int64	,
b395	Int64	,
b396	Int64	,
b397	Int64	,
b398	Int64	,
b399	Int64	,
b400	Int64	,
b401	Int64	,
b402	Int64	,
b403	Int64	,
b404	Int64	,
b405	Int64	,
b406	Int64	,
b407	Int64	,
b408	Int64	,
b409	Int64	,
b410	Int64	,
b411	Int64	,
b412	Int64	,
b413	Int64	,
b414	Int64	,
b415	Int64	,
b416	Int64	,
b417	Int64	,
b418	Int64	,
b419	Int64	,
b420	Int64	,
b421	Int64	,
b422	Int64	,
b423	Int64	,
b424	Int64	,
b425	Int64	,
b426	Int64	,
b427	Int64	,
b428	Int64	,
b429	Int64	,
b430	Int64	,
b431	Int64	,
b432	Int64	,
b433	Int64	,
b434	Int64	,
b435	Int64	,
b436	Int64	,
b437	Int64	,
b438	Int64	,
b439	Int64	,
b440	Int64	,
b441	Int64	,
b442	Int64	,
b443	Int64	,
b444	Int64	,
b445	Int64	,
b446	Int64	,
b447	Int64	,
b448	Int64	,
b449	Int64	,
b450	Int64	,
b451	Int64	,
b452	Int64	,
b453	Int64	,
b454	Int64	,
b455	Int64	,
b456	Int64	,
b457	Int64	,
b458	Int64	,
b459	Int64	,
b460	Int64	,
b461	Int64	,
b462	Int64	,
b463	Int64	,
b464	Int64	,
b465	Int64	,
b466	Int64	,
b467	Int64	,
b468	Int64	,
b469	Int64	,
b470	Int64	,
b471	Int64	,
b472	Int64	,
b473	Int64	,
b474	Int64	,
b475	Int64	,
b476	Int64	,
b477	Int64	,
b478	Int64	,
b479	Int64	,
b480	Int64	,
b481	Int64	,
b482	Int64	,
b483	Int64	,
b484	Int64	,
b485	Int64	,
b486	Int64	,
b487	Int64	,
b488	Int64	,
b489	Int64	,
b490	Int64	,
b491	Int64	,
b492	Int64	,
b493	Int64	,
b494	Int64	,
b495	Int64	,
b496	Int64	,
b497	Int64	,
b498	Int64	,
b499	Int64	,
b500	Int64	  
) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 282', () => {
    const query = `CREATE TABLE test_parquet (col1 String, col2 String, col3 String, col4 String, col5 String, col6 String, col7 String) ENGINE=File(Parquet);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 283', () => {
    const query = `CREATE TABLE test_parquet (col1 String, col2 String, col3 String, col4 String, col5 String, col6 String, col7 String) ENGINE=File(Parquet) settings input_format_parquet_max_block_size=16;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 284', () => {
    const query = `CREATE TABLE test_parquet (col1 String, col2 String, col3 String, col4 String, col5 String, col6 String, col7 String) ENGINE=File(Parquet) settings input_format_parquet_prefer_block_bytes=30;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 285', () => {
    const query = `CREATE TABLE test_parquet (col1 String, col2 String, col3 String, col4 String, col5 String, col6 String, col7 String) ENGINE=File(Parquet) settings input_format_parquet_prefer_block_bytes=30720;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 286', () => {
    const query = `CREATE TABLE dynamic_test_1 (d Dynamic(max_types=3)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 287', () => {
    const query = `CREATE TABLE dynamic_test_2 (d Dynamic(max_types=5)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 288', () => {
    const query = `CREATE TABLE t (d Dynamic) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 289', () => {
    const query = `CREATE TABLE users_compact ( uid Int16,
name String,
age Int16,
projection p1 (select count(), age group by age),
projection p2 (select age, name group by age, name)
) ENGINE = MergeTree order by uid
SETTINGS min_bytes_for_wide_part = 10485760;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 290', () => {
    const query = `CREATE TABLE users_wide ( uid Int16,
name String,
age Int16,
projection p1 (select count(), age group by age),
projection p2 (select age, name group by age, name)
) ENGINE = MergeTree order by uid
SETTINGS min_bytes_for_wide_part = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 291', () => {
    const query = `CREATE TABLE base_table (date DateTime, id String, cost Float64) ENGINE = MergeTree() ORDER BY date;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 292', () => {
    const query = `CREATE TABLE target_table (id String, total AggregateFunction(sum, Float64)) ENGINE = MergeTree() ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 293', () => {
    const query = `CREATE MATERIALIZED VIEW mv_from_base_to_target TO target_table AS Select id, sumState(cost) FROM base_table GROUP BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 294', () => {
    const query = `CREATE MATERIALIZED VIEW mv_with_storage ENGINE=MergeTree() ORDER BY id AS Select id, sumState(cost) FROM base_table GROUP BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 295', () => {
    const query = `CREATE TABLE other_table_1 AS mv_with_storage;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 296', () => {
    const query = `CREATE TABLE 03161_table (id UInt32, f UInt8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 297', () => {
    const query = `CREATE TABLE 03161_reproducer (c0 UInt8, c1 UInt8, c2 UInt8, c3 UInt8, c4 UInt8, c5 UInt8, c6 UInt8, c7 UInt8, c8 UInt8, c9 UInt8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 298', () => {
    const query = `CREATE TABLE t (d Dynamic(max_types=254)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 299', () => {
    const query = `CREATE TABLE t2 (d Dynamic(max_types=254)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 300', () => {
    const query = `CREATE TABLE test_variable (v Variant(String, UInt32, IPv6, Bool, DateTime64)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 301', () => {
    const query = `CREATE TABLE test_dynamic (d Dynamic) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 302', () => {
    const query = `CREATE TABLE test_deep_nested_json (i UInt16, d JSON) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 303', () => {
    const query = `CREATE TABLE t_map_lc (
id UInt64,
t Tuple(m Map(LowCardinality(String), LowCardinality(String)))
)
ENGINE = MergeTree ORDER BY id SETTINGS min_bytes_for_wide_part = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 304', () => {
    const query = `CREATE TABLE t_map_lc (
id UInt64,
t Tuple(m Map(LowCardinality(String), LowCardinality(String)))
)
ENGINE = MergeTree ORDER BY id SETTINGS min_bytes_for_wide_part = '10G';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 305', () => {
    const query = `CREATE TEMPORARY TABLE test (x Nullable(UInt64), PRIMARY KEY ()) ENGINE = MergeTree SETTINGS ratio_of_defaults_for_sparse_serialization = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 306', () => {
    const query = `CREATE TEMPORARY TABLE test (x UInt64, PRIMARY KEY ()) ENGINE = MergeTree SETTINGS ratio_of_defaults_for_sparse_serialization = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 307', () => {
    const query = `CREATE TABLE test_groupConcat (
id UInt64,
p_int Int32 NULL,
p_string String,
p_array Array(Int32)
) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 308', () => {
    const query = `CREATE TABLE test_groupConcat (
id UInt64,
p_int Int32,
) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 309', () => {
    const query = `CREATE TABLE arrays_test (s String, arr Array(UInt8)) ENGINE = MergeTree() ORDER BY (s);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 310', () => {
    const query = `create table hourly( hour datetime,
\`metric.names\` Array(String),
\`metric.values\` Array(Int64)
) Engine=Memory
as select '2020-01-01', ['a', 'b'], [1,2];`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 311', () => {
    const query = `create table Example (id Int32) engine = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 312', () => {
    const query = `create table Null engine=Null as Example ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 313', () => {
    const query = `create materialized view Transform to Example as select * from Null
join ( select * FROM Example
WHERE id IN (SELECT * FROM (SELECT * FROM (SELECT * FROM (SELECT * FROM (SELECT * FROM Null)))))
) as old
using id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 314', () => {
    const query = `CREATE TABLE test_table (
id String,
parent_id String
)
ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 315', () => {
    const query = `CREATE TEMPORARY TABLE test (a UInt8, b UInt8, c UInt8);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 316', () => {
    const query = `CREATE TABLE test_null_empty (d Dynamic) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 317', () => {
    const query = `CREATE TABLE users (uid Int16, name String, age Int16) ENGINE=MergeTree order by (uid, name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 318', () => {
    const query = `CREATE TABLE users2 (uid Int16, name String, age2 Int16) ENGINE=MergeTree order by (uid, name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 319', () => {
    const query = `CREATE TABLE test_max_types (d Dynamic(max_types=5)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 320', () => {
    const query = `CREATE TABLE test_nested_dynamic (d1 Dynamic, d2 Dynamic(max_types=2)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 321', () => {
    const query = `CREATE TABLE test_rapid_schema (d Dynamic) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 322', () => {
    const query = `CREATE TABLE test (
foo String,
bar String,
)
ENGINE = MergeTree()
ORDER BY (foo, bar);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 323', () => {
    const query = `CREATE TABLE tab (id Int32, val Nullable(Float64), dt Nullable(DateTime64(6)), type Nullable(Int32)) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 324', () => {
    const query = `CREATE VIEW tab_v AS SELECT t1.type AS type,
sum(t1.val) AS sval,
toStartOfDay(t1.dt) AS sday,
anyLast(sval) OVER w AS lval
FROM tab AS t1
GROUP BY
type,
sday
WINDOW w AS (PARTITION BY type);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 325', () => {
    const query = `CREATE TABLE t1 (x Int32) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 326', () => {
    const query = `CREATE TABLE to_table (
n1 UInt8,
n2 Dynamic(max_types=2)
)
ENGINE = MergeTree ORDER BY n1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 327', () => {
    const query = `CREATE TABLE test_table (
id UInt64,
value String
) ENGINE=MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 328', () => {
    const query = `CREATE VIEW test_view AS SELECT id, value FROM test_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 329', () => {
    const query = `CREATE TABLE test_grouping_sets_predicate ( day_ Date, type_1 String ) ENGINE=MergeTree ORDER BY day_;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 330', () => {
    const query = `CREATE TABLE null_table (
n1 UInt8,
n2 Dynamic(max_types=3)
)
ENGINE = Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 331', () => {
    const query = `CREATE MATERIALIZED VIEW dummy_rmv TO to_table AS SELECT * FROM null_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 332', () => {
    const query = `CREATE TABLE to_table (
n1 UInt8,
n2 Dynamic(max_types=4)
)
ENGINE = MergeTree ORDER BY n1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 333', () => {
    const query = `CREATE TABLE events0 ENGINE = MergeTree()
ORDER BY COALESCE(begin, toDateTime('9999-12-31 23:59:59'))
AS
SELECT
toNullable(toDateTime('2023-03-21 13:00:00') + INTERVAL number HOUR) AS begin,
number AS value
FROM numbers(4);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 334', () => {
    const query = `CREATE TABLE probe0 ENGINE = MergeTree()
ORDER BY COALESCE(begin, toDateTime('9999-12-31 23:59:59'))
AS
SELECT
toNullable(toDateTime('2023-03-21 12:00:00') + INTERVAL number HOUR) AS begin
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 335', () => {
    const query = `CREATE TABLE users (uid Int16, name String, age Int16) ENGINE=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 336', () => {
    const query = `CREATE TABLE test_table (
id UInt64,
value String
) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 337', () => {
    const query = `CREATE DICTIONARY 03148_dictionary ( id UInt64,
name String
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(
QUERY 'select 0 as id, ''name0'' as name'
))
LIFETIME(MIN 1 MAX 10)
LAYOUT(HASHED);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 338', () => {
    const query = `CREATE TABLE t_mut_virtuals (id UInt64, s String) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 339', () => {
    const query = `CREATE TABLE events (begin Float64, value Int32) ENGINE = MergeTree() ORDER BY begin;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 340', () => {
    const query = `CREATE TABLE t (n Int8) ENGINE=MergeTree ORDER BY n;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 341', () => {
    const query = `CREATE TABLE test (d DateTime, PRIMARY KEY (d));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 342', () => {
    const query = `create table table_pv (id Int32, timestamp_field DateTime) engine = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 343', () => {
    const query = `create view pv as select * from table_pv where timestamp_field > {timestamp_param:DateTime};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 344', () => {
    const query = `CREATE TABLE t_index_3146 (a UInt64, b UInt64) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 345', () => {
    const query = `CREATE INDEX i1 ON t_index_3146 (a) TYPE minmax;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 346', () => {
    const query = `CREATE INDEX i2 ON t_index_3146 (a, b) TYPE minmax;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 347', () => {
    const query = `CREATE INDEX i3 ON t_index_3146 (a DESC, b ASC) TYPE minmax;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 348', () => {
    const query = `CREATE INDEX i4 ON t_index_3146 a TYPE minmax;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 349', () => {
    const query = `CREATE INDEX i5 ON t_index_3146 (a); -- ignored CREATE INDEX i6 ON t_index_3146 (a DESC, b ASC); -- ignored
CREATE INDEX i7 ON t_index_3146; -- { clientError SYNTAX_ERROR }
CREATE INDEX i8 ON t_index_3146 a, b TYPE minmax; -- { clientError SYNTAX_ERROR }
SHOW CREATE TABLE t_index_3146;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 350', () => {
    const query = `CREATE TABLE events0 ( begin Nullable(DateTime('UTC')),
value Int32
) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 351', () => {
    const query = `CREATE TABLE probe0 ( begin Nullable(DateTime('UTC'))
) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 352', () => {
    const query = `CREATE TABLE test_table (\`id\` UInt64, \`value\` String) ENGINE = TinyLog() AS Select number, number::String from numbers(10);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 353', () => {
    const query = `create table t (x 123) engine Memory; -- { clientError SYNTAX_ERROR } create table t (x \`a.b\`) engine Memory; -- { clientError SYNTAX_ERROR }
create table t (x Array(\`a.b\`)) engine Memory; -- { clientError SYNTAX_ERROR }
create table t (x Array(\`ab\`)) engine Memory; -- { serverError UNKNOWN_TYPE }
create table t (x \`ab\`) engine Memory; -- { serverError UNKNOWN_TYPE }
create table t (x \`Int64\`) engine Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 354', () => {
    const query = `CREATE TABLE events0 ( begin Float64,
value Int32
) ENGINE = MergeTree ORDER BY begin;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 355', () => {
    const query = `CREATE TABLE events ( key Int32,
begin Float64,
value Int32
) ENGINE = MergeTree ORDER BY (key, begin);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 356', () => {
    const query = `CREATE TABLE probes ( key Int32,
ts Float64
) ENGINE = MergeTree ORDER BY (key, ts) AS
SELECT
key.number,
ts.number
FROM
numbers(1, 2) as key,
numbers(10) as ts
SETTINGS join_algorithm = 'hash';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 357', () => {
    const query = `create table tab (x UInt32) engine = MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 358', () => {
    const query = `CREATE TABLE uk_price_paid (
\`price\` UInt32,
\`date\` Date,
\`postcode1\` LowCardinality(String),
\`postcode2\` LowCardinality(String),
\`type\` Enum8('terraced' = 1, 'semi-detached' = 2, 'detached' = 3, 'flat' = 4, 'other' = 0),
\`is_new\` UInt8,
\`duration\` Enum8('freehold' = 1, 'leasehold' = 2, 'unknown' = 0),
\`addr1\` String,
\`addr2\` String,
\`street\` LowCardinality(String),
\`locality\` LowCardinality(String),
\`town\` LowCardinality(String),
\`district\` LowCardinality(String),
\`county\` LowCardinality(String)
)
ENGINE = MergeTree
ORDER BY (postcode1, postcode2, addr1, addr2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 359', () => {
    const query = `CREATE TABLE test_03143 ( timestamp DateTime,
x UInt32 TTL timestamp + INTERVAL 1 MONTH,
y String TTL timestamp + INTERVAL 1 DAY,
z String
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 360', () => {
    const query = `CREATE MATERIALIZED VIEW mv_table (str String) ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/03143_parallel_replicas_mat_view_bug', '{replica}') ORDER BY str AS SELECT str AS str FROM null_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 361', () => {
    const query = `CREATE TABLE t1 (
id UInt64,
external_id UInt64
)
ENGINE = MergeTree
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 362', () => {
    const query = `CREATE TABLE t2 (
id UInt64,
name String
)
ENGINE = MergeTree
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 363', () => {
    const query = `CREATE DICTIONARY d2 (
id UInt64,
name String,
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(
table t2))
LIFETIME(MIN 600 MAX 900)
LAYOUT(HASHED());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 364', () => {
    const query = `CREATE TEMPORARY TABLE IF NOT EXISTS tmp_a (
k1 Int32,
k2 Int32,
d1 Int32,
d2 Int32
) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 365', () => {
    const query = `CREATE TEMPORARY TABLE IF NOT EXISTS tmp_b ( k1 Int32,
k2 Int32,
d0 Float64
) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 366', () => {
    const query = `CREATE TABLE build ENGINE = MergeTree ORDER BY (key, begin) AS
SELECT
toDateTime('1990-03-21 13:00:00') + INTERVAL number MINUTE AS begin,
number % 4 AS key,
number AS value
FROM numbers(0, 4000000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 367', () => {
    const query = `CREATE TABLE skewed_probe ENGINE = MergeTree ORDER BY (key, begin) AS
SELECT
toDateTime('1990-04-21 13:00:01') + INTERVAL number MINUTE AS begin,
0 AS key
FROM numbers(0, 5)
UNION ALL
SELECT
toDateTime('1990-05-21 13:00:01') + INTERVAL number MINUTE AS begin,
1 AS key
FROM numbers(0, 10)
UNION ALL
SELECT
toDateTime('1990-06-21 13:00:01') + INTERVAL number MINUTE AS begin,
2 AS key
FROM numbers(0, 20)
UNION ALL
SELECT
toDateTime('1990-03-21 13:00:01') + INTERVAL number MINUTE AS begin,
3 AS key
FROM numbers(0, 4000000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 368', () => {
    const query = `CREATE TABLE error_win_func (
\`k\` String,
\`in\` UInt64,
\`out\` UInt64
)
ENGINE = MergeTree
ORDER BY k AS
SELECT * from VALUES (('a', 2, 4), ('a', 4, 2), ('a', 6, 3), ('a', 8, 4));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 369', () => {
    const query = `CREATE TABLE t(n String, st String) ENGINE = Memory as select * from values(('a', 'x'), ('b', 'y'), ('c', 'z'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 370', () => {
    const query = `CREATE VIEW test_table_comment AS SELECT toString({date_from:String});`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 371', () => {
    const query = `create table data_r1 (key Int, value String) engine=ReplicatedMergeTree('/tables/{database}/data', '{table}') order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 372', () => {
    const query = `create table data_r2 (key Int, value String) engine=ReplicatedMergeTree('/tables/{database}/data', '{table}') order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 373', () => {
    const query = `CREATE TABLE t0 (c0 String) ENGINE = Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 374', () => {
    const query = `CREATE TABLE IF NOT EXISTS t1 (c0 Int32, c1 Int32, c2  ALIAS c1) ENGINE = Log() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 375', () => {
    const query = `CREATE TABLE t2 (c0 Int32) ENGINE = MergeTree()  ORDER BY tuple() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 376', () => {
    const query = `CREATE TABLE t3 (c0 String) ENGINE = Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 377', () => {
    const query = `CREATE TABLE t4 (c0 Int32) ENGINE = Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 378', () => {
    const query = `CREATE TABLE test1_00395 (
col1 UInt64,
col2 Nullable(UInt64),
col3 String,
col4 Nullable(String),
col5 Array(UInt64),
col6 Array(Nullable(UInt64)),
col7 Array(String),
col8 Array(Nullable(String)),
d Date
) Engine = MergeTree(d, (col1, d), 8192);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 379', () => {
    const query = `create table hilbert_numbers_03131( n1 UInt32,
n2 UInt32
)
Engine=MergeTree()
ORDER BY n1 SETTINGS index_granularity = 8192, index_granularity_bytes = '10Mi';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 380', () => {
    const query = `create table hilbert_numbers_1_03131( n1 UInt64,
n2 UInt64
)
Engine=MergeTree()
ORDER BY n1 SETTINGS index_granularity = 8192, index_granularity_bytes = '10Mi';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 381', () => {
    const query = `CREATE TABLE test_table_1 (
id UInt64,
value String
) ENGINE=MergeTree ORDER BY id
SETTINGS index_granularity = 16 # We have number of granules in the \`EXPLAIN\` output in reference file
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 382', () => {
    const query = `CREATE TABLE test_table_2 (
id UInt64,
value String
) ENGINE=MergeTree ORDER BY id
SETTINGS index_granularity = 16
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 383', () => {
    const query = `CREATE TABLE t1 (x Int32) ENGINE = MergeTree ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 384', () => {
    const query = `CREATE TABLE test_table (\`id\` UInt64, \`value\` String, \`value_array\` Array(UInt64)) ENGINE = MergeTree() ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 385', () => {
    const query = `CREATE TABLE t (id UInt64, ts DateTime) ENGINE = MergeTree() ORDER BY (id, ts) SETTINGS index_granularity = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 386', () => {
    const query = `CREATE TABLE elements (
\`id\` UInt32,
\`nested.key\` Array(String),
\`nested.value\` Array(String),
\`nested.key_hashed\` Array(UInt64) MATERIALIZED arrayMap(x -> sipHash64(x), nested.key),
\`nested.val_hashed\` Array(UInt64) MATERIALIZED arrayMap(x -> sipHash64(x), nested.value),
)
ENGINE = Memory ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 387', () => {
    const query = `CREATE TABLE small (\`dt\` DateTime, \`user_email\` LowCardinality(Nullable(String))) ENGINE = MergeTree order by (dt, user_email) settings allow_nullable_key = 1, min_bytes_for_wide_part=0, min_rows_for_wide_part=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 388', () => {
    const query = `CREATE TABLE t (
\`key\` Int64,
\`someCol\` String,
\`eventTime\` DateTime
)
ENGINE = ReplacingMergeTree(eventTime)
ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 389', () => {
    const query = `CREATE TABLE test (s String) ENGINE = MergeTree ORDER BY s SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 390', () => {
    const query = `CREATE TABLE test2 (s String) ENGINE = MergeTree ORDER BY s SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 391', () => {
    const query = `CREATE TABLE t_index_lazy_load (a UInt64, b UInt64) ENGINE = MergeTree ORDER BY (a, b)
SETTINGS index_granularity = 4, primary_key_ratio_of_unique_prefix_values_to_skip_suffix_columns = 0.5;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 392', () => {
    const query = `CREATE TABLE combinator_argMin_table_r1 (
\`id\` Int32,
\`value\` Int32,
\`agg_time\` DateTime,
PROJECTION first_items
(
SELECT
id,
minArgMin(agg_time, value),
maxArgMax(agg_time, value)
GROUP BY id
)
)
ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/test_03128/combinator_argMin_table', 'r1')
ORDER BY (id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 393', () => {
    const query = `CREATE TABLE combinator_argMin_table_r2 (
\`id\` Int32,
\`value\` Int32,
\`agg_time\` DateTime,
PROJECTION first_items
(
SELECT
id,
minArgMin(agg_time, value),
maxArgMax(agg_time, value)
GROUP BY id
)
)
ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/test_03128/combinator_argMin_table', 'r2')
ORDER BY (id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 394', () => {
    const query = `CREATE TABLE argmax_comb( id UInt64,
state AggregateFunction(avgArgMax, Float64, UInt64)
)
ENGINE=MergeTree() ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 395', () => {
    const query = `create table events ( distinct_id String ) engine = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 396', () => {
    const query = `create table table_local engine = Memory AS select * from numbers(10);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 397', () => {
    const query = `create table table_dist engine = Distributed('test_cluster_two_shards', currentDatabase(),table_local) AS table_local;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 398', () => {
    const query = `create table "t0" (a Int64, b Int64) engine = MergeTree() partition by a order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 399', () => {
    const query = `create table "dist_t0" (a Int64, b Int64) engine = Distributed(test_shard_localhost, currentDatabase(), t0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 400', () => {
    const query = `create table test_window_collate(c1 String, c2 String) engine=MergeTree order by c1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 401', () => {
    const query = `CREATE TABLE test_subquery ENGINE = Memory AS
SELECT 'base' AS my_field;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 402', () => {
    const query = `CREATE TABLE a1_replicated ON CLUSTER test_shard_localhost ( day Date,
id UInt32
)
ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/a1_replicated', '1_replica')
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 403', () => {
    const query = `CREATE TABLE a1 ( day Date,
id UInt32
)
ENGINE = Distributed('test_shard_localhost', currentDatabase(), a1_replicated, id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 404', () => {
    const query = `CREATE TABLE b1_replicated ON CLUSTER test_shard_localhost ( day Date,
id UInt32
)
ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/b1_replicated', '1_replica')
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 405', () => {
    const query = `CREATE TABLE b1 ( day Date,
id UInt32
)
ENGINE = Distributed('test_shard_localhost', currentDatabase(), b1_replicated, id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 406', () => {
    const query = `CREATE TEMPORARY TABLE test (a Float32, id UInt64);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 407', () => {
    const query = `CREATE TABLE a1 ( ANIMAL Nullable(String) ) engine = MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 408', () => {
    const query = `create table x( a UInt64,
\`sipHash64(a)\` UInt64
) engine = MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 409', () => {
    const query = `create table t  (ID UInt8) Engine= Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 410', () => {
    const query = `create table t  (ID String) Engine= Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 411', () => {
    const query = `CREATE TABLE my_first_table (
user_id UInt32,
message String,
timestamp DateTime,
metric Float32
)
ENGINE = MergeTree
PRIMARY KEY (user_id, timestamp);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 412', () => {
    const query = `CREATE TABLE a ( a UInt64, b UInt64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 413', () => {
    const query = `CREATE TABLE b ( b UInt64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 414', () => {
    const query = `CREATE MATERIALIZED VIEW view_4 ( bb UInt64, cnt UInt64) Engine=MergeTree ORDER BY bb POPULATE AS SELECT bb, count() AS cnt FROM (SELECT a, b AS j, b AS bb FROM a INNER JOIN (SELECT b AS j, b AS bb FROM b ) USING (j)) GROUP BY bb; -- { serverError UNKNOWN_IDENTIFIER } DROP TABLE IF EXISTS a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 415', () => {
    const query = `CREATE TABLE event ( \`event_time\` DateTime,
\`event_name\` String,
\`user_id\` String
)
ENGINE = MergeTree()
ORDER BY (event_time, event_name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 416', () => {
    const query = `CREATE TABLE user ( \`user_id\` String,
\`user_type\` String
)
ENGINE = MergeTree()
ORDER BY (user_id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 417', () => {
    const query = `CREATE MATERIALIZED VIEW mv (
\`event_time\` DateTime,
\`event_name\` String,
\`user_id\` String,
\`user_type\` String
)
ENGINE = MergeTree()
ORDER BY (event_time, event_name) POPULATE AS
SELECT
e.event_time,
e.event_name,
e.user_id,
u.user_type
FROM event e
INNER JOIN user u ON u.user_id = e.user_id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 418', () => {
    const query = `CREATE TABLE test_table_01 ( column Int32
) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 419', () => {
    const query = `CREATE TABLE test_table_02 ( column Int32
) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 420', () => {
    const query = `CREATE VIEW test_view_01 AS SELECT
t1.column,
t2.column
FROM test_table_01 AS t1
INNER JOIN test_table_02 AS t2 ON t1.column = t2.column;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 421', () => {
    const query = `CREATE TABLE users (uid Int16, name String, age Int16) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 422', () => {
    const query = `CREATE TABLE loans (loan_number int, security_id text) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 423', () => {
    const query = `create table t1 (c3 String, primary key(c3)) engine = MergeTree;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 424', () => {
    const query = `create table t2 (c11 String, primary key(c11)) engine = MergeTree;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 425', () => {
    const query = `CREATE DATABASE {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 426', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.t (
col String,
hello String,
world String
)
ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 427', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.u (
cc String
)
ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 428', () => {
    const query = `CREATE TEMPORARY TABLE aliased (
x UInt8 DEFAULT 0,
y ALIAS x + 1
);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 429', () => {
    const query = `CREATE TEMPORARY TABLE aliased2 (
x UInt8,
y ALIAS ((x + 1) AS z) + 1
);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 430', () => {
    const query = `CREATE TEMPORARY TABLE aliased3 (
x UInt8,
y ALIAS z + 1,
z ALIAS x + 1
);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 431', () => {
    const query = `CREATE DATABASE db1_03101;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 432', () => {
    const query = `CREATE DATABASE db2_03101;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 433', () => {
    const query = `CREATE TABLE db1_03101.tbl (
col String,
db1_03101 Nested
(
tbl Nested
(
col String
)
)
)
ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 434', () => {
    const query = `CREATE TABLE t (
x String,
nest Nested
(
a String,
b String
)
) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 435', () => {
    const query = `CREATE TEMPORARY TABLE test1 (a String, nest Nested(x String, y String));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 436', () => {
    const query = `CREATE TEMPORARY TABLE test2 (a String, nest Array(Tuple(x String, y String)));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 437', () => {
    const query = `CREATE TABLE table ( column UInt64,
nest Nested
(
key Nested (
subkey UInt16
)
)
) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 438', () => {
    const query = `CREATE TABLE users (name String, age Int16) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 439', () => {
    const query = `CREATE TABLE clickhouse_alias_issue_1 ( id bigint,
column_1 Nullable(Float32)
) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 440', () => {
    const query = `CREATE TABLE clickhouse_alias_issue_2 ( id bigint,
column_2 Nullable(Float32)
) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 441', () => {
    const query = `create table test (id UInt64, v Variant(UInt64, String)) engine=MergeTree order by (id, v);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 442', () => {
    const query = `CREATE TABLE test_03096 (
\`a\` UInt32,
\`b\` UInt32,
\`c\` UInt32,
\`d\` UInt32 MATERIALIZED 0,
\`sum\` UInt32 MATERIALIZED (a + b) + c,
INDEX idx (c, d) TYPE minmax GRANULARITY 1
)
ENGINE = MergeTree
ORDER BY a
SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 443', () => {
    const query = `create table mt1 (f1 Int32, f2 Int32) engine = MergeTree() order by f1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 444', () => {
    const query = `create table mt2 as mt1 engine = MergeTree() order by f1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 445', () => {
    const query = `create table b as mt1 engine = Buffer(currentDatabase(), mt2, 16, 1, 1, 10000, 1000000, 10000000, 100000000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 446', () => {
    const query = `create table m as mt1 engine = Merge(currentDatabase(), '^(mt1|b)\$');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 447', () => {
    const query = `CREATE TABLE t1__fuzz_0 (
\`x\` UInt8,
\`str\` String
)
ENGINE = MergeTree ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 448', () => {
    const query = `CREATE TABLE left_join__fuzz_2 (
\`x\` UInt32,
\`s\` LowCardinality(String)
) ENGINE = Join(\`ALL\`, LEFT, x);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 449', () => {
    const query = `CREATE TABLE 03094_grouparrysorted_dest (
ServiceName LowCardinality(String) CODEC(ZSTD(1)),
SlowSpans AggregateFunction(groupArraySorted(100),
Tuple(NegativeDurationNs Int64, Timestamp DateTime64(9), TraceId String, SpanId String)
) CODEC(ZSTD(1))
)
ENGINE = AggregatingMergeTree()
ORDER BY (ServiceName);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 450', () => {
    const query = `CREATE TABLE 03094_grouparrysorted_src (
ServiceName String,
Duration Int64,
Timestamp DateTime64(9),
TraceId String,
SpanId String
)
ENGINE = MergeTree()
ORDER BY ();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 451', () => {
    const query = `CREATE MATERIALIZED VIEW 03094_grouparrysorted_mv TO 03094_grouparrysorted_dest AS SELECT
ServiceName,
groupArraySortedState(100)(
CAST(
tuple(-Duration, Timestamp, TraceId, SpanId),
'Tuple(NegativeDurationNs Int64, Timestamp DateTime64(9), TraceId String, SpanId String)'
)) as SlowSpans
FROM 03094_grouparrysorted_src
GROUP BY
ServiceName;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 452', () => {
    const query = `CREATE TABLE users_03094 (name String, age Int16) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 453', () => {
    const query = `CREATE TABLE override_test__fuzz_45 (\`_part\` Float32) ENGINE = MergeTree ORDER BY tuple() AS SELECT 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 454', () => {
    const query = `CREATE TABLE replacing_wrong (key Int64, ver Int64, is_deleted UInt16) ENGINE = ReplacingMergeTree(ver, is_deleted) ORDER BY key; -- { serverError BAD_TYPE_OF_FIELD } CREATE TABLE replacing_wrong (key Int64, ver String, is_deleted UInt8) ENGINE = ReplacingMergeTree(ver, is_deleted) ORDER BY key; -- { serverError BAD_TYPE_OF_FIELD }
CREATE TABLE replacing_wrong (key Int64, ver Int64, is_deleted UInt8) ENGINE = ReplacingMergeTree(is_deleted, is_deleted) ORDER BY key; -- { serverError BAD_ARGUMENTS }
CREATE TABLE replacing (key Int64, ver Int64, is_deleted UInt8) ENGINE = ReplacingMergeTree(ver, is_deleted) ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 455', () => {
    const query = `create table t2(a Int16) engine=MergeTree order by tuple() partition by a % 8 SETTINGS index_granularity = 8192, index_granularity_bytes = '10Mi';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 456', () => {
    const query = `CREATE TABLE test_gcd(test_col UInt32 CODEC(GCD, LZ4)) ENGINE = MergeTree
ORDER BY tuple()
SETTINGS index_granularity = 8192, index_granularity_bytes = 1024;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 457', () => {
    const query = `CREATE TABLE test_gcd2(test_col UInt32 CODEC(GCD, LZ4)) ENGINE = MergeTree
ORDER BY tuple()
SETTINGS index_granularity = 8192, index_granularity_bytes = 1024, min_bytes_for_wide_part = 0, max_compress_block_size = 1024, min_compress_block_size = 1024;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 458', () => {
    const query = `CREATE TABLE test_03093 (app String, c UInt64, k Map(String, String)) ENGINE=MergeTree ORDER BY app;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 459', () => {
    const query = `CREATE DATABASE {CLICKHOUSE_DATABASE_1:Identifier};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 460', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.\`1-1\` (field Int8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 461', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE_1:Identifier}.\`2-1\` (field Int8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 462', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE_1:Identifier}.\`3-1\` (field Int8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 463', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE_1:Identifier}.\`1-1\` (field Int8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 464', () => {
    const query = `create table {CLICKHOUSE_DATABASE:Identifier}.a (i int) engine = Log();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 465', () => {
    const query = `create table t1 engine = MergeTree()
order by tuple()
as
select 1 as user_id, 2 as level;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 466', () => {
    const query = `create table t2 engine = MergeTree()
order by tuple()
as
select 1 as user_id, 'website' as event_source, '2023-01-01 00:00:00'::DateTime as timestamp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 467', () => {
    const query = `CREATE TABLE test1 (
\`pk\` String,
\`x.y\` Decimal(18, 4)
)
ENGINE = MergeTree()
ORDER BY (pk);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 468', () => {
    const query = `CREATE TABLE test2 (
\`pk\` String,
\`x.y\` Decimal(18, 4)
)
ENGINE = MergeTree()
ORDER BY (pk);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 469', () => {
    const query = `CREATE TABLE test (
\`dt\` Date,
\`text\` String
)
ENGINE = MergeTree
ORDER BY dt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 470', () => {
    const query = `CREATE TABLE first_table_lr (
id String,
id2 String
)
ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/test_03080/alter', 'r1')
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 471', () => {
    const query = `CREATE TABLE first_table (
id String,
id2 String
)
ENGINE = Distributed('test_shard_localhost', currentDatabase(), 'first_table_lr');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 472', () => {
    const query = `CREATE TABLE second_table_lr (
id String,
id2 String
) ENGINE = MergeTree()
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 473', () => {
    const query = `CREATE TABLE second_table (
id String,
id2 String
)
ENGINE = Distributed('test_shard_localhost', currentDatabase(), 'second_table_lr');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 474', () => {
    const query = `CREATE TABLE two_tables (
id String,
id2 String
)
ENGINE = Merge(currentDatabase(), '^(first_table)\$');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 475', () => {
    const query = `CREATE TABLE test ( id UInt64
)
ENGINE = MergeTree()
SAMPLE BY intHash32(id)
ORDER BY intHash32(id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 476', () => {
    const query = `CREATE TABLE testdata (\`1\` String) ENGINE=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 477', () => {
    const query = `CREATE TABLE t2 (first_column Int64, second_column Int64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 478', () => {
    const query = `CREATE TABLE t1 (i Int64, j Int64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 479', () => {
    const query = `create view alias (dummy int, n alias dummy) as select * from system.one;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 480', () => {
    const query = `CREATE TABLE test ( id String, create_time DateTime ) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 481', () => {
    const query = `CREATE FUNCTION IF NOT EXISTS unhexPrefixed AS value -> unhex(substring(value, 3));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 482', () => {
    const query = `CREATE FUNCTION IF NOT EXISTS hex2bytes AS address -> CAST(unhexPrefixed(address), 'FixedString(20)');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 483', () => {
    const query = `CREATE FUNCTION IF NOT EXISTS bytes2hex AS address -> concat('0x', lower(hex(address)));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 484', () => {
    const query = `CREATE TABLE test (
\`transfer_id\` String,
\`address\` FixedString(20),
\`value\` UInt256,
\`block_timestamp\` DateTime('UTC'),
\`token_address\` FixedString(20)
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(block_timestamp)
PRIMARY KEY (address, block_timestamp)
ORDER BY (address, block_timestamp);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 485', () => {
    const query = `CREATE TABLE token_data (
token_address_hex String,
chain String,
is_blacklisted Bool
)
ENGINE = TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 486', () => {
    const query = `CREATE DICTIONARY token_data_map (
token_address_hex String,
chain String,
is_blacklisted Bool
)
PRIMARY KEY token_address_hex, chain
SOURCE(Clickhouse(table token_data))
LIFETIME(MIN 200 MAX 300)
LAYOUT(COMPLEX_KEY_HASHED_ARRAY());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 487', () => {
    const query = `CREATE TABLE LINEITEM_shard ON CLUSTER test_shard_localhost (
L_ORDERKEY UInt64,
L_COMMITDATE UInt32,
L_RECEIPTDATE UInt32
)
ENGINE = MergeTree()
ORDER BY L_ORDERKEY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 488', () => {
    const query = `CREATE TABLE LINEITEM AS LINEITEM_shard ENGINE = Distributed('test_shard_localhost', currentDatabase(), LINEITEM_shard, rand());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 489', () => {
    const query = `CREATE TABLE ORDERS_shard ON CLUSTER test_shard_localhost (
O_ORDERKEY UInt64,
O_ORDERPRIORITY UInt32
)
ENGINE = MergeTree()
ORDER BY O_ORDERKEY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 490', () => {
    const query = `CREATE TABLE ORDERS AS ORDERS_shard ENGINE = Distributed('test_shard_localhost', currentDatabase(), ORDERS_shard, rand());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 491', () => {
    const query = `CREATE TABLE t1 ( k Int64, x Int64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 492', () => {
    const query = `CREATE TABLE t2( x Int64 ) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 493', () => {
    const query = `create table s (k Int64, d DateTime)  Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 494', () => {
    const query = `create table test (TOPIC String, PARTITION UInt64, OFFSET UInt64, ID UInt64) ENGINE ReplicatedMergeTree('/clickhouse/tables/{database}/test_03062', 'r2') ORDER BY (TOPIC, PARTITION, OFFSET);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 495', () => {
    const query = `create table test_join (TOPIC String, PARTITION UInt64, OFFSET UInt64)  ENGINE = Join(ANY, LEFT, \`TOPIC\`, \`PARTITION\`) SETTINGS join_any_take_last_row = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 496', () => {
    const query = `CREATE TABLE xxxx_yyy (key UInt32, key_b ALIAS key) ENGINE=MergeTree() ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 497', () => {
    const query = `create table vt(datetime_value DateTime, value Float64) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 498', () => {
    const query = `create view computed_datum_hours as SELECT
toStartOfHour(b.datetime_value) AS datetime_desc,
sum(b.value) AS value
FROM vt AS b
GROUP BY toStartOfHour(b.datetime_value);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 499', () => {
    const query = `CREATE TABLE id_val(id UInt32, val UInt32) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 500', () => {
    const query = `CREATE TABLE id_val_join0(id UInt32, val UInt8) ENGINE = Join(ANY, LEFT, id) SETTINGS join_use_nulls = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 501', () => {
    const query = `CREATE TABLE id_val_join1(id UInt32, val UInt8) ENGINE = Join(ANY, LEFT, id) SETTINGS join_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 502', () => {
    const query = `create table fact(id Int64, animal_key Int64, color_key Int64) Engine = MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 503', () => {
    const query = `create table animals(animal_key UInt64, animal_name String) Engine = MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 504', () => {
    const query = `create table colors(color_key UInt64, color_name String) Engine = MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 505', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.base (
\`id\` UInt64,
\`id2\` UInt64,
\`d\` UInt64,
\`value\` UInt64
)
ENGINE=MergeTree()
PARTITION BY d
ORDER BY (id,id2,d);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 506', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.derived1 (
\`id1\` UInt64,
\`d1\` UInt64,
\`value1\` UInt64
)
ENGINE = MergeTree()
PARTITION BY d1
ORDER BY (id1, d1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 507', () => {
    const query = `CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.derived2 (
\`id2\` UInt64,
\`d2\` UInt64,
\`value2\` UInt64
)
ENGINE = MergeTree()
PARTITION BY d2
ORDER BY (id2, d2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 508', () => {
    const query = `CREATE TABLE l (y String) Engine Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 509', () => {
    const query = `CREATE TABLE r (d Date, y String, ty UInt16 MATERIALIZED toYear(d)) Engine Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 510', () => {
    const query = `CREATE TABLE test (\`a\` UInt32, \`b\` UInt32) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 511', () => {
    const query = `CREATE TABLE ab_12_aaa (
\`id\` String,
\`subid\` Int32,
\`prodcat\` String,
\`prodtype\` String,
\`quality\` String,
\`m1\` Float64,
\`m2\` Float64,
\`r1\` Float64,
\`r2\` Float64,
\`d1\` Float64,
\`d2\` Float64,
\`pcs\` Float64,
\`qty\` Float64,
\`amt\` Float64,
\`amts\` Float64,
\`prc\` Float64,
\`prcs\` Float64,
\`suqty\` Float64,
\`suamt\` Float64,
\`_year\` String
)
ENGINE = MergeTree
ORDER BY (_year, prodcat, prodtype, quality, d1, id)
SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 512', () => {
    const query = `CREATE TABLE ab_12_bbb (
\`id\` String,
\`sales_type\` String,
\`date\` Date32,
\`o1\` String,
\`o2\` String,
\`o3\` String,
\`o4\` String,
\`o5\` String,
\`short\` String,
\`a1\` String,
\`a2\` String,
\`a3\` String,
\`idx\` String,
\`a4\` String,
\`ctx\` String,
\`_year\` String,
\`theyear\` UInt16 MATERIALIZED toYear(\`date\`),
\`themonth\` UInt8 MATERIALIZED toMonth(\`date\`),
\`theweek\` UInt8 MATERIALIZED toISOWeek(\`date\`)
)
ENGINE = MergeTree
ORDER BY (theyear, themonth, _year, id, sales_type, date)
SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 513', () => {
    const query = `CREATE TABLE nested_test (
s String,
nest Nested
(
x UInt64,
y UInt64
)
) ENGINE = MergeTree
ORDER BY s;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 514', () => {
    const query = `CREATE TABLE join_test (
id Int64,
y UInt64
)
ENGINE = MergeTree
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 515', () => {
    const query = `CREATE TEMPORARY TABLE repl_tbl (
\`key\` UInt32,
\`val_1\` UInt32,
\`val_2\` String,
\`val_3\` String,
\`val_4\` String,
\`val_5\` UUID,
\`ts\` DateTime
)
ENGINE = ReplacingMergeTree(ts)
ORDER BY \`key\`;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 516', () => {
    const query = `CREATE TABLE test_a_table ( name String,
a_col String
)
Engine = MergeTree()
ORDER BY name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 517', () => {
    const query = `CREATE TABLE test_b_table ( name String,
b_col String,
some_val String
)
Engine = MergeTree()
ORDER BY name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 518', () => {
    const query = `CREATE TEMPORARY TABLE hits (date Date, data Float64) engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 519', () => {
    const query = `create table fill_ex ( eventDate Date ,
storeId String
)
engine = ReplacingMergeTree()
partition by toYYYYMM(eventDate)
order by (storeId,eventDate);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 520', () => {
    const query = `CREATE TABLE IF NOT EXISTS t0 (c0 Int32) ENGINE = Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 521', () => {
    const query = `CREATE TABLE t1 (c0 Int32, c1 Int32, c2 Int32) ENGINE = Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 522', () => {
    const query = `CREATE TABLE t2 (c0 String, c1 String MATERIALIZED (c2), c2 Int32) ENGINE = Memory() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 523', () => {
    const query = `CREATE TABLE t3 (c0 String, c1 String, c2 String) ENGINE = Log() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 524', () => {
    const query = `CREATE TABLE IF NOT EXISTS t4 (c0 Int32) ENGINE = Log() ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 525', () => {
    const query = `CREATE TABLE test1(id UInt64, t1value UInt64) ENGINE=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 526', () => {
    const query = `CREATE TABLE test2(id UInt64, t2value String) ENGINE=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 527', () => {
    const query = `CREATE TABLE parent( a_id Int64,
b_id Int64,
c_id Int64,
created_at Int64
)
ENGINE=MergeTree()
ORDER BY (a_id, b_id, c_id, created_at);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 528', () => {
    const query = `CREATE TABLE join_table_1( a_id Int64,
b_id Int64
)
ENGINE=MergeTree()
ORDER BY (a_id, b_id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 529', () => {
    const query = `CREATE TABLE join_table_2( c_id Int64,
created_at Int64
)
ENGINE=MergeTree()
ORDER BY (c_id, created_at);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 530', () => {
    const query = `CREATE TABLE IF NOT EXISTS first engine = MergeTree PARTITION BY (inn, toYYYYMM(received)) ORDER BY (inn, sessionId) AS SELECT now() AS received, '123456789' AS inn, '42' AS sessionId;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 531', () => {
    const query = `CREATE TABLE IF NOT EXISTS second engine = MergeTree PARTITION BY (inn, toYYYYMM(received)) ORDER BY (inn, sessionId) AS SELECT now() AS received, '123456789' AS inn, '42' AS sessionId, '111' AS serial, '222' AS reg;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 532', () => {
    const query = `CREATE TABLE y (a UInt64) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 533', () => {
    const query = `create table test (x UInt64, y UInt64) engine=MergeTree order by x settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 534', () => {
    const query = `create table test (x UInt64, y UInt64) engine=MergeTree order by x settings min_rows_for_wide_part=100000000, min_bytes_for_wide_part=1000000000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 535', () => {
    const query = `create table test (x UInt64, y UInt64) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 536', () => {
    const query = `CREATE TABLE 03040_test (
id           UInt64,
val String alias 'value: '||toString(id)
) ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 537', () => {
    const query = `CREATE TABLE graph( f UInt64,
t UInt64,
label String
)
ENGINE = TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 538', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1, vertical_merge_algorithm_min_rows_to_activate=1, vertical_merge_algorithm_min_columns_to_activate=1, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 539', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 540', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000, vertical_merge_algorithm_min_rows_to_activate=1, vertical_merge_algorithm_min_columns_to_activate=1, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 541', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 542', () => {
    const query = `CREATE TABLE move_partition_to_oneself (key UInt64 CODEC(NONE)) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 543', () => {
    const query = `CREATE TABLE 03038_table (
\`time\` DateTime
)
ENGINE = MergeTree
ORDER BY time;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 544', () => {
    const query = `CREATE TABLE broken_table (
start DateTime64(6),
end DateTime64(6),
)
ENGINE = ReplacingMergeTree(start)
ORDER BY (start);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 545', () => {
    const query = `CREATE VIEW broken_view as SELECT
t.start as start,
t.end as end,
cast(datediff('second', t.start, t.end) as float) as total_sec
FROM broken_table t FINAL
UNION ALL
SELECT
null as start,
null as end,
null as total_sec;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 546', () => {
    const query = `CREATE TABLE tree( id UInt64,
parent_id Nullable(UInt64)
)
ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 547', () => {
    const query = `create table test (id UInt64, d Dynamic) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1, vertical_merge_algorithm_min_rows_to_activate=1, vertical_merge_algorithm_min_columns_to_activate=1, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 548', () => {
    const query = `create table test (id UInt64, d Dynamic) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000, vertical_merge_algorithm_min_rows_to_activate=1, vertical_merge_algorithm_min_columns_to_activate=1, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 549', () => {
    const query = `create table test (id UInt64, d Dynamic) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 550', () => {
    const query = `create table test (id UInt64, d Dynamic) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 551', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1, vertical_merge_algorithm_min_rows_to_activate=1, vertical_merge_algorithm_min_columns_to_activate=1, index_granularity_bytes=10485760, index_granularity=8192, merge_max_block_size=8192, merge_max_block_size_bytes=10485760, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 552', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000, vertical_merge_algorithm_min_rows_to_activate=1, vertical_merge_algorithm_min_columns_to_activate=1, index_granularity_bytes=10485760, index_granularity=8192, merge_max_block_size=8192, merge_max_block_size_bytes=10485760, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 553', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1, vertical_merge_algorithm_min_columns_to_activate=10, index_granularity_bytes=10485760, index_granularity=8192, merge_max_block_size=8192, merge_max_block_size_bytes=10485760, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 554', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000, vertical_merge_algorithm_min_columns_to_activate=10, index_granularity_bytes=10485760, index_granularity=8192, merge_max_block_size=8192, merge_max_block_size_bytes=10485760, lock_acquire_timeout_for_background_operations=600;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 555', () => {
    const query = `CREATE TABLE department ( id UInt64,  -- department ID
parent_department UInt64, -- upper department ID
name String -- department name
)
ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 556', () => {
    const query = `CREATE table table_tar2star Engine S3(s3_conn, filename='03036_archive2.tar :: example*.csv');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 557', () => {
    const query = `CREATE table table_tarstarglobs Engine S3(s3_conn, filename='03036_archive*.tar* :: example{2..3}.csv');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 558', () => {
    const query = `CREATE TABLE t (A Array(Int64)) Engine = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 559', () => {
    const query = `CREATE TABLE test_table_1 (
id UInt64,
value String
) ENGINE=MergeTree ORDER BY id SETTINGS index_granularity = 8192, index_granularity_bytes = '10Mi';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 560', () => {
    const query = `CREATE TABLE test_table_2 (
id UInt64,
value String
) ENGINE=MergeTree ORDER BY id SETTINGS index_granularity = 8192, index_granularity_bytes = '10Mi';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 561', () => {
    const query = `create table test (id UInt64, d Dynamic) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 562', () => {
    const query = `create table test (id UInt64, d Dynamic) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 563', () => {
    const query = `create table test (id UInt64, d Dynamic) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 564', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1, min_bytes_for_wide_part=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 565', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 566', () => {
    const query = `create table test (id UInt64, d Dynamic(max_types=2)) engine=MergeTree order by id settings min_rows_for_wide_part=1000000000, min_bytes_for_wide_part=10000000000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 567', () => {
    const query = `CREATE TABLE test (
id UInt64,
value String
) ENGINE=MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 568', () => {
    const query = `CREATE MATERIALIZED VIEW test_mv (
id UInt64,
value String
) ENGINE=MergeTree
ORDER BY id AS SELECT id, value FROM test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 569', () => {
    const query = `CREATE MATERIALIZED VIEW test_mv_pk (
value String,
id UInt64
) ENGINE=MergeTree PRIMARY KEY value
POPULATE AS SELECT value, id FROM test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 570', () => {
    const query = `create table test (d1 Dynamic(max_types=2), d2 Dynamic(max_types=2)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 571', () => {
    const query = `CREATE TABLE IF NOT EXISTS test (
\`value\` Float64 CODEC(Delta, LZ4),
\`uuid\` LowCardinality(String),
\`time\` DateTime64(3, 'UTC') CODEC(DoubleDelta, LZ4)
)
ENGINE = MergeTree()
ORDER BY uuid;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 572', () => {
    const query = `CREATE TABLE alias_bug (
\`src\` String,
\`theAlias\` String ALIAS trimBoth(src)
)
ENGINE = MergeTree()
ORDER BY src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 573', () => {
    const query = `CREATE TABLE alias_bug_dist AS alias_bug
ENGINE = Distributed('test_shard_localhost', currentDatabase(), 'alias_bug', rand());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 574', () => {
    const query = `CREATE TABLE alias_bug (
\`s\` String,
\`src\` String,
\`theAlias\` String ALIAS trimBoth(src)
)
ENGINE = MergeTree()
ORDER BY src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 575', () => {
    const query = `CREATE TABLE tree (
id UInt64,
link Nullable(UInt64),
data String
) ENGINE=MergeTree ORDER BY ();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 576', () => {
    const query = `CREATE TABLE department ( id UInt64,  -- department ID
parent_department UInt64, -- upper department ID
name String -- department name
)
ENGINE=MergeTree ORDER BY ();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 577', () => {
    const query = `CREATE TABLE department__fuzz_1 (\`id\` DateTime, \`parent_department\` UInt128, \`name\` String) ENGINE = TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 578', () => {
    const query = `CREATE TABLE department__fuzz_3 (\`id\` Date, \`parent_department\` UInt128, \`name\` LowCardinality(String)) ENGINE = TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 579', () => {
    const query = `CREATE TABLE tree (
id UInt64,
link Nullable(UInt64),
data String
) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 580', () => {
    const query = `create table test (d Dynamic) engine = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 581', () => {
    const query = `CREATE TABLE tab (m1 Map(Nothing, String)) ENGINE = MergeTree ORDER BY m1; -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY } SELECT 'But Map(Nothing, ...) can be a non-primary-key, it is quite useless though ...';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 582', () => {
    const query = `CREATE TABLE tab (m3 Map(Nothing, String)) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 583', () => {
    const query = `CREATE TABLE tab (m1 Map(Float32, String), m2 Map(LowCardinality(String), String)) ENGINE = MergeTree ORDER BY (m1, m2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 584', () => {
    const query = `CREATE TABLE tab (m1 Map(Float32, String), m2 Map(LowCardinality(String), String)) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 585', () => {
    const query = `CREATE TABLE 03033_example_table (
ColumnA Int64,
ColumnB Int64,
ColumnC Int64
)
ENGINE = MergeTree()
ORDER BY ColumnA;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 586', () => {
    const query = `CREATE TABLE override_test (_part UInt32) ENGINE = MergeTree ORDER BY tuple() AS SELECT 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 587', () => {
    const query = `create table a (k UInt64, v UInt64, index i (v) type set(100) granularity 2) engine MergeTree order by k settings index_granularity=8192, index_granularity_bytes=1000000000, min_index_granularity_bytes=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 588', () => {
    const query = `CREATE TABLE test  (
\`address\` FixedString(20),
\`deployer\` FixedString(20),
\`block_number\` UInt256,
\`block_hash\` FixedString(32),
\`block_timestamp\` DateTime('UTC'),
\`insertion_time\` DateTime('UTC')
)
ENGINE = MergeTree
ORDER BY address
SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 589', () => {
    const query = `CREATE TABLE test_tmp as test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 590', () => {
    const query = `CREATE TABLE dst (
\`block_timestamp\` AggregateFunction(max, Nullable(DateTime('UTC'))),
\`block_hash\` AggregateFunction(argMax, Nullable(FixedString(32)), DateTime('UTC')),
\`block_number\` AggregateFunction(argMax, Nullable(UInt256), DateTime('UTC')),
\`deployer\` AggregateFunction(argMax, Nullable(FixedString(20)), DateTime('UTC')),
\`address\` FixedString(20),
\`name\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`symbol\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`decimals\` AggregateFunction(argMax, Nullable(UInt8), DateTime('UTC')),
\`is_proxy\` AggregateFunction(argMax, Nullable(Bool), DateTime('UTC')),
\`blacklist_flags\` AggregateFunction(argMax, Array(Nullable(String)), DateTime('UTC')),
\`whitelist_flags\` AggregateFunction(argMax, Array(Nullable(String)), DateTime('UTC')),
\`detected_standards\` AggregateFunction(argMax, Array(Nullable(String)), DateTime('UTC')),
\`amended_type\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`comment\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`_sources\` AggregateFunction(groupUniqArray, String),
\`_updated_at\` AggregateFunction(max, DateTime('UTC')),
\`_active\` AggregateFunction(argMax, Bool, DateTime('UTC'))
)
ENGINE = MergeTree
ORDER BY address
SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 591', () => {
    const query = `CREATE MATERIALIZED VIEW view TO dst (
\`block_timestamp\` AggregateFunction(max, Nullable(DateTime('UTC'))),
\`block_hash\` AggregateFunction(argMax, Nullable(FixedString(32)), DateTime('UTC')),
\`block_number\` AggregateFunction(argMax, Nullable(UInt256), DateTime('UTC')),
\`deployer\` AggregateFunction(argMax, Nullable(FixedString(20)), DateTime('UTC')),
\`address\` FixedString(20),
\`name\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`symbol\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`decimals\` AggregateFunction(argMax, Nullable(UInt8), DateTime('UTC')),
\`is_proxy\` AggregateFunction(argMax, Nullable(Bool), DateTime('UTC')),
\`blacklist_flags\` AggregateFunction(argMax, Array(Nullable(String)), DateTime('UTC')),
\`whitelist_flags\` AggregateFunction(argMax, Array(Nullable(String)), DateTime('UTC')),
\`detected_standards\` AggregateFunction(argMax, Array(Nullable(String)), DateTime('UTC')),
\`amended_type\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`comment\` AggregateFunction(argMax, Nullable(String), DateTime('UTC')),
\`_sources\` AggregateFunction(groupUniqArray, String),
\`_updated_at\` AggregateFunction(max, DateTime('UTC')),
\`_active\` AggregateFunction(argMax, Bool, DateTime('UTC'))
) AS
(WITH (
SELECT toDateTime('1970-01-01 00:00:00')
) AS default_timestamp
SELECT
maxState(CAST(block_timestamp, 'Nullable(DateTime(\\'UTC\\'))')) AS block_timestamp,
argMaxState(CAST(block_hash, 'Nullable(FixedString(32))'), insertion_time) AS block_hash,
argMaxState(CAST(block_number, 'Nullable(UInt256)'), insertion_time) AS block_number,
argMaxState(CAST(deployer, 'Nullable(FixedString(20))'), insertion_time) AS deployer,
address,
argMaxState(CAST(NULL, 'Nullable(String)'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS name,
argMaxState(CAST(NULL, 'Nullable(String)'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS symbol,
argMaxState(CAST(NULL, 'Nullable(UInt8)'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS decimals,
argMaxState(CAST(true, 'Nullable(Boolean)'), insertion_time) AS is_proxy,
argMaxState(CAST('[]', 'Array(Nullable(String))'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS blacklist_flags,
argMaxState(CAST('[]', 'Array(Nullable(String))'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS whitelist_flags,
argMaxState(CAST('[]', 'Array(Nullable(String))'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS detected_standards,
argMaxState(CAST(NULL, 'Nullable(String)'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS amended_type,
argMaxState(CAST(NULL, 'Nullable(String)'), CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS comment,
groupUniqArrayState('tokens_proxy_deployments') AS _sources,
maxState(insertion_time) AS _updated_at,
argMaxState(true, CAST(default_timestamp, 'DateTime(\\'UTC\\')')) AS _active
FROM test
WHERE insertion_time > toDateTime('2024-03-14 11:38:09')
GROUP BY address);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 592', () => {
    const query = `create table t(a UInt32, b UInt32) engine=MergeTree order by (a, b) settings index_granularity=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 593', () => {
    const query = `CREATE TABLE t_lightweight_deletes (a UInt64) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 594', () => {
    const query = `CREATE FUNCTION test_func_1 AS (a, b, c) -> ((a + b) + c);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 595', () => {
    const query = `CREATE TABLE t4_2 (
\`col1\` Int64 NOT NULL COMMENT 'test',
\`col2\` Float64 NOT NULL,
\`col3\` Int64 NOT NULL,
INDEX ind4 test_func_1(col1, col3, col1) TYPE set(51) GRANULARITY 5
)
ENGINE = MergeTree
ORDER BY col1
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 596', () => {
    const query = `CREATE TABLE account_test (
\`id\` UInt64,
\`row_ver\` UInt64,
)
ENGINE = ReplacingMergeTree(row_ver)
ORDER BY id
SETTINGS index_granularity = 16, index_granularity_bytes = 0,
min_rows_for_wide_part = 0, min_bytes_for_wide_part = 0,
min_rows_for_compact_part = 0, min_bytes_for_compact_part = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 597', () => {
    const query = `create table test (s String) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 598', () => {
    const query = `CREATE TABLE t (tag_id UInt64, tag_name String) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 599', () => {
    const query = `CREATE TABLE dt AS t ENGINE = Distributed('test_cluster_two_shards_localhost', currentDatabase(), 't', cityHash64(concat(tag_id, tag_name)));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 600', () => {
    const query = `CREATE TABLE base (a Int32) ENGINE = TinyLog COMMENT 'original comment';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 601', () => {
    const query = `CREATE TABLE copy_without_comment AS base;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 602', () => {
    const query = `CREATE TABLE copy_with_comment AS base COMMENT 'new comment';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 603', () => {
    const query = `CREATE TABLE vecs_Float32 (v Array(Float32)) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 604', () => {
    const query = `CREATE TABLE raw_data (
	\`id\` UInt8,
	\`data\` String
)
ENGINE = MergeTree
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 605', () => {
    const query = `CREATE VIEW raw_data_parametrized AS SELECT *
FROM raw_data
WHERE (id >= {id_from:UInt8}) AND (id <= {id_to:UInt8});`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 606', () => {
    const query = `create table test (\`x\` LowCardinality(Nullable(UInt32)), \`y\` String) engine = MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 607', () => {
    const query = `create table m_table (x UInt32, y String) engine = Merge(currentDatabase(), 'test*');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 608', () => {
    const query = `CREATE TABLE memory (i UInt32) ENGINE = Memory SETTINGS min_bytes_to_keep = 8192, max_bytes_to_keep = 32768;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 609', () => {
    const query = `CREATE TABLE memory (i UInt32) ENGINE = Memory SETTINGS min_rows_to_keep = 200, max_rows_to_keep = 2000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 610', () => {
    const query = `CREATE TABLE memory (i UInt32) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 611', () => {
    const query = `create table query_run_metric_arrays engine Memory as with (with (select groupUniqArrayArray(['a', 'b']) from numbers(1)) as all_names select all_names) as all_metrics select all_metrics;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 612', () => {
    const query = `create table data_r1 (key Int) engine=ReplicatedMergeTree('/tables/{database}', 'r1') order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 613', () => {
    const query = `create table data_r2 engine=ReplicatedMergeTree('/tables/{database}', 'r2') order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 614', () => {
    const query = `CREATE TABLE test_table (
k UInt64,
)
ENGINE = MergeTree
ORDER BY k SETTINGS index_granularity = 8192, index_granularity_bytes = '10Mi';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 615', () => {
    const query = `CREATE TABLE test (\`id\` LowCardinality(UInt32)) ENGINE = MergeTree ORDER BY id AS SELECT 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 616', () => {
    const query = `CREATE TABLE 03031_test (
\`id\` UInt64,
\`value_1\` String,
\`value_2\` String,
\`value_3\` String,
INDEX value_1_idx value_1 TYPE bloom_filter GRANULARITY 1,
INDEX value_2_idx value_2 TYPE ngrambf_v1(3, 512, 2, 0) GRANULARITY 1,
INDEX value_3_idx value_3 TYPE tokenbf_v1(512, 3, 0) GRANULARITY 1
)
ENGINE = MergeTree
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 617', () => {
    const query = `create table ephemeral (key Int, value Int) engine=Null();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 618', () => {
    const query = `create table dist_in as ephemeral engine=Distributed(test_shard_localhost, currentDatabase(), ephemeral, key) settings background_insert_batch=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 619', () => {
    const query = `create table data (key Int, uniq_values Int) engine=TinyLog();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 620', () => {
    const query = `create materialized view mv to data as select key, uniqExact(value::String) uniq_values from ephemeral group by key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 621', () => {
    const query = `create table dist_out as data engine=Distributed(test_shard_localhost, currentDatabase(), data);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 622', () => {
    const query = `CREATE TABLE src_table (\`a\` UInt32, \`b\` UInt32) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 623', () => {
    const query = `CREATE MATERIALIZED VIEW mv (\`a\` UInt32) ENGINE = MergeTree ORDER BY a AS SELECT a FROM src_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 624', () => {
    const query = `create table data (key Int, value AggregateFunction(sum, UInt64)) engine=AggregatingMergeTree() order by (key, value); -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY } create table data (key Int, value SimpleAggregateFunction(sum, UInt64)) engine=AggregatingMergeTree() order by (key, value); -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY }
create table data (key Int, value AggregateFunction(sum, UInt64)) engine=AggregatingMergeTree() primary key value; -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY }
create table data (key Int, value SimpleAggregateFunction(sum, UInt64)) engine=AggregatingMergeTree() primary key value; -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY }
create table data (key Int, value AggregateFunction(sum, UInt64)) engine=AggregatingMergeTree() primary key value order by (value, key); -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY }
create table data (key Int, value SimpleAggregateFunction(sum, UInt64)) engine=AggregatingMergeTree() primary key value order by (value, key); -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY }
set allow_suspicious_primary_key = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 625', () => {
    const query = `create table data (key Int, value SimpleAggregateFunction(sum, UInt64)) engine=AggregatingMergeTree() primary key value order by (value, key);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 626', () => {
    const query = `create table data (key Int) engine=AggregatingMergeTree() order by (key);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 627', () => {
    const query = `create table data_rep (key Int) engine=ReplicatedAggregatingMergeTree('/tables/{database}', 'r1') order by (key);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 628', () => {
    const query = `CREATE TABLE set_index_not__fuzz_0 (\`name\` String, \`status\` Enum8('alive' = 0, 'rip' = 1), INDEX idx_status status TYPE set(2) GRANULARITY 1) ENGINE = MergeTree ORDER BY name
SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 629', () => {
    const query = `CREATE TABLE test_data (
ShipmentDate Date
)
ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 630', () => {
    const query = `CREATE TABLE 03015_aggregator_empty_data_multiple_blocks (c0 Int32) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 631', () => {
    const query = `CREATE TABLE 03014_async_with_dedup_part_log (x UInt64) ENGINE=ReplicatedMergeTree('/clickhouse/table/{database}/03014_async_with_dedup_part_log', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 632', () => {
    const query = `CREATE TABLE test (a Int) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 633', () => {
    const query = `CREATE TABLE 03013_position_const_start_pos (n Int16) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 634', () => {
    const query = `create table test_memory (number UInt64) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 635', () => {
    const query = `create table test_merge_tree (number UInt64) engine=MergeTree order by number;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 636', () => {
    const query = `create table test_join (number UInt64) engine=Join(ALL, LEFT, number);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 637', () => {
    const query = `CREATE VIEW v (\`date\` UInt32,\`value\` UInt8) AS WITH
data AS (SELECT '' id LIMIT 0),
r AS (SELECT'' as id, 1::UInt8 as value)
SELECT
now() as date,
value AND (data.id IN (SELECT '' as d from system.one)) AS value
FROM data
LEFT JOIN r ON data.id = r.id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 638', () => {
    const query = `CREATE TABLE users (uid Int16, name String, age Int16) ENGINE=MergeTree ORDER BY uid PARTITION BY uid;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 639', () => {
    const query = `create table test (number UInt64) engine=FileLog('./user_files/data.jsonl', 'JSONEachRow') settings poll_max_batch_size=18446744073709; -- {serverError INVALID_SETTING_VALUE} `;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 640', () => {
    const query = `CREATE TABLE memory (i UInt32) ENGINE = Memory SETTINGS min_bytes_to_keep = 4096, max_bytes_to_keep = 16384;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 641', () => {
    const query = `CREATE TABLE faulty_memory (i UInt32) ENGINE = Memory SETTINGS min_rows_to_keep = 100;  -- { serverError SETTING_CONSTRAINT_VIOLATION } CREATE TABLE faulty_memory (i UInt32) ENGINE = Memory SETTINGS min_bytes_to_keep = 100; -- { serverError SETTING_CONSTRAINT_VIOLATION }
DROP TABLE memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 642', () => {
    const query = `CREATE TABLE range_dictionary_nullable_source_table (
key UInt64,
start_date Date,
end_date Date,
value Nullable(UInt64)
)
ENGINE = TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 643', () => {
    const query = `CREATE DICTIONARY range_dictionary (
key UInt64,
start_date Date,
end_date Date,
value Nullable(UInt64) DEFAULT NULL
)
PRIMARY KEY key
SOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() TABLE 'range_dictionary_nullable_source_table'))
LIFETIME(MIN 1 MAX 1000)
LAYOUT(RANGE_HASHED())
RANGE(MIN start_date MAX end_date);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 644', () => {
    const query = `CREATE TABLE t_nullable_keys_1 (x Nullable(Int64)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 645', () => {
    const query = `CREATE TABLE t_nullable_keys_2 (x Nullable(Int64)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 646', () => {
    const query = `CREATE TABLE t_nullable_keys_3 (x Nullable(Int64)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 647', () => {
    const query = `CREATE TABLE t_nullable_keys_4 (x Nullable(Int64)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 648', () => {
    const query = `CREATE TABLE t_nullable_keys_5 (x Nullable(Int64)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 649', () => {
    const query = `CREATE TABLE t_nullable_keys_6 (x Nullable(Int64)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 650', () => {
    const query = `CREATE TABLE t_uniq_exact (a UInt64, b String, c UInt64) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 651', () => {
    const query = `CREATE TABLE t_optimize_equal_ranges (a UInt64, b String, c UInt64) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 652', () => {
    const query = `CREATE TABLE test (a UInt8, b UInt8) ENGINE = MergeTree ORDER BY (a, b) SETTINGS index_granularity = 1, primary_key_ratio_of_unique_prefix_values_to_skip_suffix_columns = 0.01;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 653', () => {
    const query = `create table test (number UInt64) engine=MergeTree order by number;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 654', () => {
    const query = `CREATE TABLE src (x UInt8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 655', () => {
    const query = `CREATE TABLE dst (x UInt8) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 656', () => {
    const query = `CREATE MATERIALIZED VIEW mv1 TO dst AS SELECT * FROM src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 657', () => {
    const query = `CREATE TABLE src (a UInt64, b UInt64) ENGINE=ReplicatedMergeTree('/clickhouse/tables/{database}/03008_deduplication_remote_insert_select/src', '{replica}')
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 658', () => {
    const query = `CREATE TABLE dst_null(a UInt64, b UInt64) ENGINE = Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 659', () => {
    const query = `CREATE MATERIALIZED VIEW mv_dst ENGINE = AggregatingMergeTree()
ORDER BY a
AS SELECT
a,
sumState(b)  AS sum_b,
uniqState(b) AS uniq_b
FROM dst_null
GROUP BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 660', () => {
    const query = `CREATE TABLE partitioned_table (key Int64, value String)
ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/03008_deduplication_insert_into_partitioned_table', '{replica}')
partition by key % 10
order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 661', () => {
    const query = `CREATE MATERIALIZED VIEW mv_table (key Int64, value String) ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/03008_deduplication_insert_into_partitioned_table_mv', '{replica}')
ORDER BY tuple()
AS SELECT key, value FROM partitioned_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 662', () => {
    const query = `CREATE TABLE dst (
\`key\` Int64,
\`value\` String
)
ENGINE = MergeTree
ORDER BY tuple()
SETTINGS non_replicated_deduplication_window=1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 663', () => {
    const query = `CREATE TABLE mv_dst (
\`key\` Int64,
\`value\` String
)
ENGINE = MergeTree
ORDER BY tuple()
SETTINGS non_replicated_deduplication_window=1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 664', () => {
    const query = `CREATE MATERIALIZED VIEW mv_first TO mv_dst
AS SELECT
0 AS key,
value AS value
FROM dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 665', () => {
    const query = `CREATE MATERIALIZED VIEW mv_second TO mv_dst
AS SELECT
0 AS key,
value AS value
FROM dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 666', () => {
    const query = `CREATE MATERIALIZED VIEW mv_dst (
\`key\` Int64,
\`value\` String
)
ENGINE = MergeTree
ORDER BY tuple()
SETTINGS non_replicated_deduplication_window=1000
AS SELECT
0 AS key,
value AS value
FROM dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 667', () => {
    const query = `CREATE TABLE url_na_log (
\`SiteId\` UInt32,
\`DateVisit\` Date
)
ENGINE = MergeTree
PRIMARY KEY SiteId
ORDER BY (SiteId, DateVisit)
SETTINGS index_granularity = 1000, min_bytes_for_wide_part = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 668', () => {
    const query = `CREATE ROW POLICY url_na_log_policy0 ON url_na_log FOR SELECT USING (DateVisit < '2022-08-11') OR (DateVisit > '2022-08-19') TO default;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 669', () => {
    const query = `CREATE TABLE numbers_1e6__fuzz_34 (
n UInt64
)
ENGINE = MergeTree
ORDER BY n
AS SELECT *
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 670', () => {
    const query = `CREATE TABLE numbers_1e6__fuzz_33 (
n UInt64
)
ENGINE = MergeTree
ORDER BY n
AS SELECT *
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 671', () => {
    const query = `CREATE TABLE 03006_test (
d Date,
value UInt64
)
ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 672', () => {
    const query = `CREATE TABLE 03006_buffer_overflow_l (\`a\` String, \`b\` Tuple(String, String)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 673', () => {
    const query = `CREATE TABLE 03006_buffer_overflow_r (\`a\` LowCardinality(Nullable(String)), \`c\` Tuple(LowCardinality(String), LowCardinality(String))) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 674', () => {
    const query = `create table test (a Int8) engine = MergeTree order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 675', () => {
    const query = `CREATE TABLE t_length_1 (id UInt64, arr Array(UInt64)) ENGINE = ReplacingMergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 676', () => {
    const query = `CREATE TABLE t_length_2 (id UInt64, arr_length UInt64) ENGINE = ReplacingMergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 677', () => {
    const query = `CREATE TABLE users (uid Int16, name Nullable(String), age Int16) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 678', () => {
    const query = `CREATE TABLE test (dummy Int8) ENGINE = Distributed(test_cluster_two_shards, 'system', 'one');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 679', () => {
    const query = `CREATE TABLE t_sample_factor(a UInt64, b UInt64) ENGINE = MergeTree ORDER BY (a, b) SAMPLE BY b;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 680', () => {
    const query = `CREATE TABLE table_03002 (ts DateTime, event_type String) ENGINE = MergeTree ORDER BY (event_type, ts);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 681', () => {
    const query = `CREATE MATERIALIZED VIEW mv_03002 TO table_03002 AS SELECT ts FROM table_03002;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 682', () => {
    const query = `CREATE TABLE t__fuzz_0 (\`i\` Int32, \`j\` Nullable(Int32), \`k\` Int32, PROJECTION p (SELECT * ORDER BY j)) ENGINE = MergeTree ORDER BY i SETTINGS index_granularity = 1, allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 683', () => {
    const query = `create table test_d engine=Distributed(test_cluster_two_shard_three_replicas_localhost, system, numbers);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 684', () => {
    const query = `CREATE TABLE landing (
timestamp DateTime64(3),
status String,
id String
)
ENGINE = MergeTree()
ORDER BY timestamp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 685', () => {
    const query = `CREATE TABLE landing_dist (
timestamp DateTime64(3),
status String,
id String
)
ENGINE = Distributed('test_cluster_two_shards', currentDatabase(), 'landing', rand());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 686', () => {
    const query = `CREATE TABLE ds (
timestamp DateTime64(3),
status String,
id String
)
ENGINE = MergeTree()
ORDER BY timestamp
SETTINGS non_replicated_deduplication_window=1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 687', () => {
    const query = `CREATE TABLE t_data_version (a UInt64, b UInt64) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 688', () => {
    const query = `CREATE TABLE lwd_merge (id UInt64 CODEC(NONE)) ENGINE = MergeTree ORDER BY id
SETTINGS max_bytes_to_merge_at_max_space_in_pool = 80000, exclude_deleted_rows_for_part_size_in_merge = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 689', () => {
    const query = `CREATE TABLE t_block_offset (id UInt32) ENGINE = MergeTree ORDER BY id SETTINGS index_granularity = 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 690', () => {
    const query = `create table x (i int, j int, k int) engine MergeTree order by tuple() settings index_granularity=8192, index_granularity_bytes = '10Mi',  min_bytes_for_wide_part=0, min_rows_for_wide_part=0, ratio_of_defaults_for_sparse_serialization=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 691', () => {
    const query = `CREATE TABLE 03000_traverse_shadow_system_data_path_table ( id Int64,
data String
) ENGINE=MergeTree()
ORDER BY id
SETTINGS storage_policy='s3_cache';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 692', () => {
    const query = `CREATE TABLE skip_table (
k UInt64,
v UInt64,
INDEX v_set v TYPE set(100) GRANULARITY 2, -- set index is declared before minmax intentionally
INDEX v_mm v TYPE minmax GRANULARITY 2
)
ENGINE = MergeTree
PRIMARY KEY k
SETTINGS index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 693', () => {
    const query = `create table source(type String) engine=MergeTree order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 694', () => {
    const query = `create view v_heavy as with nums as (select number from numbers(1e5))
select count(*) n from (select number from numbers(1e5) n1 cross join nums);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 695', () => {
    const query = `create table target1(type String) engine=MergeTree order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 696', () => {
    const query = `create table target2(type String) engine=MergeTree order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 697', () => {
    const query = `create materialized view vm_target2 to target2 as select * from source where type='two' and (select sum(sleepEachRow(0.1)) from numbers(30));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 698', () => {
    const query = `CREATE TABLE t_table_select (id UInt32) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 699', () => {
    const query = `CREATE TEMPORARY TABLE t_test (x UInt32, y Nullable(UInt32)) AS SELECT a.id, b.id FROM remote('127.0.0.{1,2}', currentDatabase(), t_table_select) AS a GLOBAL LEFT JOIN (SELECT id FROM remote('127.0.0.{1,2}', currentDatabase(), t_table_select) AS b WHERE (b.id % 10) = 0) AS b ON b.id = a.id SETTINGS join_use_nulls = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 700', () => {
    const query = `CREATE TABLE date_t__fuzz_0 (\`id\` UInt32, \`value1\` String, \`date1\` Date) ENGINE = ReplacingMergeTree ORDER BY id SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 701', () => {
    const query = `CREATE TABLE visits_order (
user_id UInt64,
user_name String,
some_int UInt64
) ENGINE = MergeTree() PRIMARY KEY user_id PARTITION BY user_id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 702', () => {
    const query = `CREATE TABLE visits_order_dst (
user_id UInt64,
user_name String,
some_int UInt64
) ENGINE = MergeTree() PRIMARY KEY user_id PARTITION BY user_id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 703', () => {
    const query = `CREATE TABLE test (a UInt64, b UInt64, c UInt64) ENGINE = MergeTree ORDER BY (a, b, c) SETTINGS index_granularity = 1, primary_key_ratio_of_unique_prefix_values_to_skip_suffix_columns = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 704', () => {
    const query = `CREATE TABLE attach_partition_t7 ( a UInt32,
b UInt32
)
ENGINE = MergeTree
PARTITION BY a ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 705', () => {
    const query = `CREATE TABLE attach_partition_t8 ( a UInt32,
b UInt32
)
ENGINE = MergeTree
PARTITION BY a ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 706', () => {
    const query = `CREATE TABLE hits (
\`date\` Date,
\`data\` Array(UInt32)
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(date)
ORDER BY date;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 707', () => {
    const query = `CREATE TEMPORARY TABLE t_proj (t DateTime, id UInt64, PROJECTION p (SELECT id, t ORDER BY toStartOfDay(t))) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 708', () => {
    const query = `CREATE TEMPORARY TABLE t_proj2 (a UInt32, b UInt32, PROJECTION p (SELECT a ORDER BY b * 2)) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 709', () => {
    const query = `CREATE TABLE too_many_parts (x UInt64) ENGINE = MergeTree ORDER BY tuple() SETTINGS parts_to_delay_insert = 5, parts_to_throw_insert = 5;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 710', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_0 (a DateTime64(0)) engine = MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 711', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_2 (a DateTime64(2)) engine = MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 712', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_3 (a DateTime64(3)) engine = MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 713', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_6 (a DateTime64(6)) engine = MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 714', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_9 (a DateTime64(6)) engine = MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 715', () => {
    const query = `create table b (x Int64, y String) engine MergeTree order by (x, y) settings index_granularity=2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 716', () => {
    const query = `CREATE TABLE t__fuzz_0 (\`i\` LowCardinality(Int32), \`j\` Int32, \`k\` Int32, PROJECTION p (SELECT * ORDER BY j)) ENGINE = MergeTree ORDER BY i SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 717', () => {
    const query = `create table data (key SimpleAggregateFunction(max, Int)) engine=AggregatingMergeTree() order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 718', () => {
    const query = `create table data (key Int) engine=AggregatingMergeTree() order by tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 719', () => {
    const query = `create temporary table t1 engine=MergeTree() order by c as ( select 1 as c intersect (select 1 as c union all  select 2 as c ) );`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 720', () => {
    const query = `CREATE TABLE data_02052_1_wide0__fuzz_48 (
\`key\` Nullable(Int64),
\`value\` UInt8
)
ENGINE = MergeTree
ORDER BY key
SETTINGS min_bytes_for_wide_part = 0, allow_nullable_key = 1 AS
SELECT
number,
repeat(toString(number), 5)
FROM numbers(1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 721', () => {
    const query = `CREATE TEMPORARY TABLE table (x UInt8);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 722', () => {
    const query = `CREATE TEMPORARY TABLE FORMAT (x UInt8);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 723', () => {
    const query = `CREATE TABLE ttt (hr DateTime, ts DateTime) ENGINE=Memory as select '2000-01-01' d, d;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 724', () => {
    const query = `create table test (v Variant(String, UInt64)) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 725', () => {
    const query = `CREATE TABLE x (key Int) ENGINE = ReplicatedMergeTree('/tables/{database}/{uuid}', 'r1') ORDER BY tuple(); -- { serverError BAD_ARGUMENTS } CREATE TABLE x UUID 'aaaaaaaa-1111-2222-3333-aaaaaaaaaaaa' (key Int) ENGINE = ReplicatedMergeTree('/tables/{database}/{uuid}', 'r1') ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 726', () => {
    const query = `CREATE TABLE test_table (
\`eventType\` String,
\`timestamp\` UInt64,
\`key\` UInt64
)
ENGINE = ReplacingMergeTree
PRIMARY KEY (eventType, timestamp)
ORDER BY (eventType, timestamp, key)
SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 727', () => {
    const query = `CREATE TABLE tags (dev_tag String) ENGINE = Memory AS SELECT '1';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 728', () => {
    const query = `CREATE TABLE users (
\`id\` Int64,
\`name\` String
)
ENGINE = ReplacingMergeTree
ORDER BY (id, name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 729', () => {
    const query = `create table test (v1 Variant(String, UInt64, Array(UInt32)), v2 Variant(String, UInt64, Array(UInt32))) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 730', () => {
    const query = `CREATE TEMPORARY TABLE test_temporary_table_02989 (
id UInt64,
value String
) ENGINE=MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 731', () => {
    const query = `CREATE TABLE test_table_replicated (
id UInt64,
value String
) ENGINE=ReplicatedMergeTree('/clickhouse/tables/{database}/test_table_replicated', '1_replica') ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 732', () => {
    const query = `CREATE TABLE test_table_replicated_second (
id UInt64,
value String,
insert_time DateTime
) ENGINE=ReplicatedMergeTree('/clickhouse/tables/{database}/test_table_replicated', '2_replica') ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 733', () => {
    const query = `CREATE TABLE tabc (a UInt32, b UInt32 ALIAS a + 1, c UInt32 ALIAS b + 1, s String) ENGINE = MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 734', () => {
    const query = `CREATE TABLE ta (a Int32) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 735', () => {
    const query = `CREATE TABLE tb (b Int32) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 736', () => {
    const query = `CREATE TABLE users (uid Int16, name String, spouse_name String) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 737', () => {
    const query = `CREATE DATABASE 02988_ordinary ENGINE=Ordinary;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 738', () => {
    const query = `CREATE TABLE t (\`id\` UInt16, \`u\` LowCardinality(Int32), \`s\` LowCardinality(String)) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 739', () => {
    const query = `CREATE TABLE 02987_logical_optimizer_table (key Int, value Int) ENGINE=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 740', () => {
    const query = `CREATE VIEW v1 AS SELECT * FROM 02987_logical_optimizer_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 741', () => {
    const query = `CREATE TABLE 02987_logical_optimizer_merge AS v1 ENGINE=Merge(currentDatabase(), 'v1');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 742', () => {
    const query = `CREATE TABLE test_empty (a Array(Int64)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 743', () => {
    const query = `CREATE TABLE test_null (a Array(Nullable(Int64))) engine=MergeTree ORDER BY a SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 744', () => {
    const query = `CREATE TABLE test_nested_arrays (a Array(Array(Int64))) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 745', () => {
    const query = `CREATE TABLE test_numbers (a Array(Int64)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 746', () => {
    const query = `CREATE TABLE test_big_numbers_sep (a Array(Int64)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 747', () => {
    const query = `CREATE TABLE test_big_numbers (a Array(Int64)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 748', () => {
    const query = `CREATE TABLE test_string (a Array(String)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 749', () => {
    const query = `CREATE TABLE test_big_string (a Array(String)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 750', () => {
    const query = `CREATE TABLE test_datetime (a Array(DateTime)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 751', () => {
    const query = `CREATE TABLE test_date32 (a Array(Date32)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 752', () => {
    const query = `CREATE TABLE test_date (a Array(Date)) engine=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 753', () => {
    const query = `CREATE TABLE sharded_table (dummy UInt8) ENGINE = Distributed('test_cluster_two_shards', 'system', 'one');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 754', () => {
    const query = `CREATE TABLE t_index_agg_func (
id UInt64,
v AggregateFunction(avg, UInt64),
INDEX idx_v v TYPE minmax GRANULARITY 1
)
ENGINE = AggregatingMergeTree ORDER BY id
SETTINGS index_granularity = 4; -- { serverError BAD_ARGUMENTS }
CREATE TABLE t_index_agg_func
(
id UInt64,
v AggregateFunction(avg, UInt64),
)
ENGINE = AggregatingMergeTree ORDER BY id
SETTINGS index_granularity = 4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 755', () => {
    const query = `CREATE TABLE shared_test_table (id UInt64) ENGINE = MergeTree
ORDER BY (id);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 756', () => {
    const query = `CREATE TABLE distributed_test_table ENGINE = Distributed(test_cluster_two_shard_three_replicas_localhost, currentDatabase(), shared_test_table);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 757', () => {
    const query = `CREATE TABLE test (
t String,
id String,
h Map(String, String)   
)
ENGINE = MergeTree
ORDER BY (t, id) SETTINGS index_granularity = 4096 ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 758', () => {
    const query = `CREATE TABLE t1 (
f1 Int32,
f2 Map(LowCardinality(String),LowCardinality(String)),
f3 Map(String,String),
f4 Map(Int32,Int32)
)
ENGINE=Memory AS
SELECT 1 as f1,
map(number%2,number%10) as f2,
f2 as f3,
f2 as f4
from numbers(1000111);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 759', () => {
    const query = `CREATE TABLE shard_0.t_local (a Int) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 760', () => {
    const query = `CREATE TABLE shard_1.t_local (a Int) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 761', () => {
    const query = `CREATE TABLE t_distr (a Int) ENGINE = Distributed(test_cluster_two_shards_different_databases, '', 't_local', 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 762', () => {
    const query = `CREATE TABLE test_unexpected_cluster (n UInt64) ENGINE=MergeTree() ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 763', () => {
    const query = `CREATE TABLE data (
key String,
)
ENGINE = MergeTree
ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 764', () => {
    const query = `CREATE MATERIALIZED VIEW mv_indexes (
key String,
INDEX idx key TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree
ORDER BY key
AS SELECT * FROM data;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 765', () => {
    const query = `CREATE MATERIALIZED VIEW mv_no_indexes (
key String,
INDEX idx key TYPE bloom_filter GRANULARITY 1
)
ENGINE = Null
AS SELECT * FROM data;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 766', () => {
    const query = `CREATE MATERIALIZED VIEW mv_projections (
key String,
projection p (SELECT uniqCombined(key))
)
ENGINE = MergeTree
ORDER BY key
AS SELECT * FROM data;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 767', () => {
    const query = `CREATE MATERIALIZED VIEW mv_primary_key (
key String,
PRIMARY KEY key
)
ENGINE = MergeTree
AS SELECT * FROM data;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 768', () => {
    const query = `CREATE MATERIALIZED VIEW mv_primary_key_from_column (
key String PRIMARY KEY
)
ENGINE = MergeTree
AS SELECT * FROM data;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 769', () => {
    const query = `CREATE TABLE t_vertical_merge_memory (id UInt64, arr Array(String)) ENGINE = MergeTree ORDER BY id
SETTINGS
min_bytes_for_wide_part = 0,
vertical_merge_algorithm_min_rows_to_activate = 1,
vertical_merge_algorithm_min_columns_to_activate = 1,
index_granularity = 8192,
index_granularity_bytes = '10M',
merge_max_block_size = 8192,
merge_max_block_size_bytes = '10M';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 770', () => {
    const query = `CREATE TABLE test (v Variant(UInt64, String, Array(UInt64))) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 771', () => {
    const query = `CREATE TABLE t2 (id Int32, pe Map(String, Tuple(a UInt64, b UInt64))) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 772', () => {
    const query = `CREATE TABLE t3 (id Int32, c Tuple(v String, pe Map(String, Tuple(a UInt64, b UInt64)))) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 773', () => {
    const query = `CREATE TABLE test_table (i Int64) engine=MergeTree order by i;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 774', () => {
    const query = `CREATE DICTIONARY test_dict (y String, value UInt64 DEFAULT 0) PRIMARY KEY y SOURCE(CLICKHOUSE(TABLE 'test_table')) LAYOUT(DIRECT());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 775', () => {
    const query = `CREATE TABLE table_with_some_columns( key UInt64,
value0 UInt8
)
ENGINE = ReplicatedMergeTree('/clickhouse/tables/{database}/table_with_some_columns', '1')
ORDER BY key
SETTINGS allow_experimental_block_number_column=1,
ratio_of_defaults_for_sparse_serialization=0.0001,
min_bytes_for_wide_part = 0,
replace_long_file_name_to_hash=0; -- simpler to debug
INSERT INTO table_with_some_columns SELECT rand(), number + 10 from numbers(100000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 776', () => {
    const query = `CREATE TABLE pr_1 (\`a\` UInt32) ENGINE = MergeTree ORDER BY a PARTITION BY a % 10 AS SELECT 10 * intDiv(number, 10) + 1 FROM numbers(1_000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 777', () => {
    const query = `CREATE TABLE pr_2 (\`a\` UInt32) ENGINE = MergeTree ORDER BY a AS SELECT * FROM numbers(1_000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 778', () => {
    const query = `CREATE TABLE numbers_1e3 (
\`n\` UInt64
)
ENGINE = MergeTree
ORDER BY n
AS SELECT * FROM numbers(1_000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 779', () => {
    const query = `CREATE TABLE landing (
timestamp UInt64,
value UInt64
)
ENGINE = MergeTree ORDER BY tuple() SETTINGS non_replicated_deduplication_window = 1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 780', () => {
    const query = `CREATE TABLE ds_1_1 (
t UInt64,
v UInt64
)
ENGINE = MergeTree ORDER BY tuple() SETTINGS non_replicated_deduplication_window = 1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 781', () => {
    const query = `CREATE MATERIALIZED VIEW mv_1_1 TO ds_1_1 as SELECT
timestamp t, sum(value) v
FROM landing
GROUP BY t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 782', () => {
    const query = `CREATE MATERIALIZED VIEW mv_1_2 TO ds_1_1 as SELECT
timestamp t, sum(value) v
FROM landing
GROUP BY t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 783', () => {
    const query = `CREATE TABLE ds_1_2 (
t UInt64,
v UInt64
)
ENGINE = MergeTree ORDER BY tuple() SETTINGS non_replicated_deduplication_window = 1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 784', () => {
    const query = `CREATE MATERIALIZED VIEW mv_1_2 TO ds_1_2 as SELECT
timestamp t, sum(value) v
FROM landing
GROUP BY t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 785', () => {
    const query = `CREATE TABLE ds_2_1 (
l String,
t DateTime,
v UInt64
)
ENGINE = MergeTree ORDER BY tuple() SETTINGS non_replicated_deduplication_window = 1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 786', () => {
    const query = `CREATE MATERIALIZED VIEW mv_2_1 TO ds_2_1 as SELECT '2_1' l, t, v
FROM ds_1_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 787', () => {
    const query = `CREATE MATERIALIZED VIEW mv_2_2 TO ds_2_1 as SELECT '2_2' l, t, v
FROM ds_1_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 788', () => {
    const query = `CREATE TABLE ds_3_1 (
l String,
t DateTime,
v UInt64
)
ENGINE = MergeTree ORDER BY tuple() SETTINGS non_replicated_deduplication_window = 1000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 789', () => {
    const query = `CREATE MATERIALIZED VIEW mv_3_1 TO ds_3_1 as SELECT '3_1' l, t, v
FROM ds_2_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 790', () => {
    const query = `create table tlb (k UInt64) engine MergeTree order by k;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 791', () => {
    const query = `CREATE TABLE t_func_to_subcolumns_variant (id UInt64, v Variant(String, UInt64)) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 792', () => {
    const query = `CREATE TABLE t_func_to_subcolumns_map (id UInt64, m Map(String, UInt64)) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 793', () => {
    const query = `CREATE TABLE t_column_names (arr Array(UInt64), n Nullable(String)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 794', () => {
    const query = `CREATE TABLE t_subcolumns_if (id Nullable(Int64)) ENGINE=MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 795', () => {
    const query = `create table a (x Int64) engine URL('https://example.com/', CSV, headers('foo' = 'bar', 'a' = '13'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 796', () => {
    const query = `create table b (x Int64) engine URL('https://example.com/', CSV, headers());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 797', () => {
    const query = `create table c (x Int64) engine S3('https://example.s3.amazonaws.com/a.csv', NOSIGN, CSV, headers('foo' = 'bar'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 798', () => {
    const query = `create table d (x Int64) engine S3('https://example.s3.amazonaws.com/a.csv', NOSIGN, headers('foo' = 'bar'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 799', () => {
    const query = `create view e (x Int64) as select count() from url('https://example.com/', CSV, headers('foo' = 'bar', 'a' = '13'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 800', () => {
    const query = `create view f (x Int64) as select count() from url('https://example.com/', CSV, headers());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 801', () => {
    const query = `create view g (x Int64) as select count() from s3('https://example.s3.amazonaws.com/a.csv', CSV, headers('foo' = 'bar'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 802', () => {
    const query = `create view h (x Int64) as select count() from s3('https://example.s3.amazonaws.com/a.csv', headers('foo' = 'bar'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 803', () => {
    const query = `CREATE TABLE tp (
\`type\` Int32,
\`eventcnt\` UInt64,
PROJECTION p
(
SELECT type,sum(eventcnt)
GROUP BY type
)
)
ENGINE = ReplacingMergeTree
ORDER BY type
SETTINGS deduplicate_merge_projection_mode = 'rebuild';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 804', () => {
    const query = `CREATE TABLE tp (
\`type\` Int32,
\`eventcnt\` UInt64,
\`sign\` Int8,
PROJECTION p
(
SELECT type,sum(eventcnt)
GROUP BY type
)
)
ENGINE = CollapsingMergeTree(sign)
ORDER BY type
SETTINGS deduplicate_merge_projection_mode = 'rebuild';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 805', () => {
    const query = `CREATE TABLE tp (
\`type\` Int32,
\`eventcnt\` UInt64,
\`sign\` Int8,
\`version\` UInt8,
PROJECTION p
(
SELECT type,sum(eventcnt)
GROUP BY type
)
)
ENGINE = VersionedCollapsingMergeTree(sign,version)
ORDER BY type
SETTINGS deduplicate_merge_projection_mode = 'rebuild';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 806', () => {
    const query = `CREATE TABLE tp (
\`type\` Int32,
\`eventcnt\` UInt64,
PROJECTION p
(
SELECT type,sum(eventcnt)
GROUP BY type
)
)
ENGINE = MergeTree
ORDER BY type
SETTINGS deduplicate_merge_projection_mode = 'rebuild';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 807', () => {
    const query = `CREATE TABLE t1 (\`key\` UInt32, \`s\` String) ENGINE = MergeTree ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 808', () => {
    const query = `CREATE TABLE t2 (\`key\` UInt32, \`s\` String) ENGINE = MergeTree ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 809', () => {
    const query = `CREATE TABLE im (id Int32, dd Int32) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 810', () => {
    const query = `CREATE TABLE ts (tid Int32, id Int32) ENGINE = Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 811', () => {
    const query = `CREATE TABLE async_insert_mt_test (a UInt64, b Array(UInt64)) ENGINE=MergeTree() ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 812', () => {
    const query = `CREATE TABLE tab (
\`foo\` Array(LowCardinality(String)),
INDEX idx foo TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree
PRIMARY KEY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 813', () => {
    const query = `CREATE TABLE t1__fuzz_4 (\`x\` Nullable(UInt32), \`y\` Int64) ENGINE = MergeTree ORDER BY (x, y) SETTINGS allow_nullable_key = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 814', () => {
    const query = `CREATE TABLE t0__fuzz_29 (\`x\` LowCardinality(UInt256), \`y\` Array(Array(Date))) ENGINE = MergeTree ORDER BY (x, y);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 815', () => {
    const query = `CREATE TABLE data_01223 (\`key\` Int) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 816', () => {
    const query = `CREATE TABLE dist_layer_01223 AS data_01223 ENGINE = Distributed(test_cluster_two_shards, currentDatabase(), data_01223);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 817', () => {
    const query = `CREATE TABLE dist_01223 AS data_01223 ENGINE = Distributed(test_cluster_two_shards, currentDatabase(), dist_layer_01223);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 818', () => {
    const query = `CREATE TABLE f32_table (my_field Float32) ENGINE=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 819', () => {
    const query = `create table a (i int, j int, projection p (select * order by j)) engine MergeTree partition by i order by tuple() settings index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 820', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='02963_custom_disk', type = object_storage, object_storage_type = local_blob_storage, path='./02963_test1/');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 821', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='02963_custom_disk', type = object_storage, object_storage_type = local_blob_storage, path='./02963_test2/'); -- { serverError BAD_ARGUMENTS }
drop table if exists test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 822', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='02963_custom_disk'); -- { serverError BAD_ARGUMENTS }
drop table if exists test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 823', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk='02963_custom_disk'; -- { serverError BAD_ARGUMENTS }
drop table if exists test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 824', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='s3_disk_02963'); -- { serverError BAD_ARGUMENTS }
drop table if exists test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 825', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk='s3_disk_02963';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 826', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='s3_disk_02963', type = object_storage, object_storage_type = local_blob_storage, path='./02963_test2/'); -- { serverError BAD_ARGUMENTS }
drop table if exists test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 827', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='test1',
type = object_storage,
object_storage_type = s3,
endpoint = 'http://localhost:11111/test/common/',
access_key_id = clickhouse,
secret_access_key = clickhouse);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 828', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='test2',
type = object_storage,
object_storage_type = s3,
metadata_type = local,
endpoint = 'http://localhost:11111/test/common/',
access_key_id = clickhouse,
secret_access_key = clickhouse);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 829', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='test3',
type = object_storage,
object_storage_type = s3,
metadata_type = local,
metadata_keep_free_space_bytes = 1024,
endpoint = 'http://localhost:11111/test/common/',
access_key_id = clickhouse,
secret_access_key = clickhouse);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 830', () => {
    const query = `create table test (a Int32) engine = MergeTree() order by tuple() settings disk=disk(name='test4',
type = object_storage,
object_storage_type = s3,
metadata_type = local,
metadata_keep_free_space_bytes = 0,
endpoint = 'http://localhost:11111/test/common/',
access_key_id = clickhouse,
secret_access_key = clickhouse);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 831', () => {
    const query = `CREATE TABLE empsalary  (
\`depname\` LowCardinality(String),
\`empno\` UInt64,
\`salary\` Int32,
\`enroll_date\` Date
)
ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 832', () => {
    const query = `CREATE table t1 (a UInt64, b UInt64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 833', () => {
    const query = `CREATE table t2 (a UInt64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 834', () => {
    const query = `CREATE TABLE t (\`x\` UInt32, \`s\` LowCardinality(String)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 835', () => {
    const query = `CREATE TABLE r (\`x\` LowCardinality(Nullable(UInt32)), \`s\` Nullable(String)) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 836', () => {
    const query = `CREATE TABLE test_parallel_index (
z UInt64,
INDEX i z TYPE set(8)
)
ENGINE = MergeTree
ORDER BY ();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 837', () => {
    const query = `CREATE DATABASE IF NOT EXISTS 02961_db1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 838', () => {
    const query = `CREATE DATABASE IF NOT EXISTS 02961_db2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 839', () => {
    const query = `CREATE TABLE IF NOT EXISTS 02961_db1.02961_tb1 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 840', () => {
    const query = `CREATE TABLE IF NOT EXISTS 02961_db1.02961_tb2 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 841', () => {
    const query = `CREATE TABLE IF NOT EXISTS 02961_db2.02961_tb3 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 842', () => {
    const query = `CREATE TABLE IF NOT EXISTS 02961_db2.02961_tb4 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 843', () => {
    const query = `CREATE TABLE IF NOT EXISTS 02961_db2.02961_tb5 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 844', () => {
    const query = `CREATE TABLE IF NOT EXISTS tab1 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 845', () => {
    const query = `CREATE TABLE IF NOT EXISTS tab2 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 846', () => {
    const query = `CREATE TABLE IF NOT EXISTS tab3 (id UInt32) Engine=Memory();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 847', () => {
    const query = `CREATE TABLE test_tuple_filter__fuzz_2 (
\`id\` Nullable(UInt32),
\`value\` LowCardinality(String),
\`log_date\` LowCardinality(Date)
)
ENGINE = MergeTree
PARTITION BY log_date
ORDER BY id
SETTINGS allow_nullable_key = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 848', () => {
    const query = `CREATE DATABASE test2960_valid_database_engine ENGINE = Atomic;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 849', () => {
    const query = `CREATE DATABASE test2960_database_engine_args_not_allowed ENGINE = Atomic('foo', 'bar'); -- { serverError BAD_ARGUMENTS } CREATE DATABASE test2960_invalid_database_engine ENGINE = Foo; -- { serverError UNKNOWN_DATABASE_ENGINE }
DROP DATABASE IF EXISTS test2960_valid_database_engine;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 850', () => {
    const query = `CREATE FUNCTION f1 AS (x) -> x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 851', () => {
    const query = `CREATE TABLE hit (
\`UserID\` UInt32,
\`URL\` String,
\`EventTime\` DateTime
)
ENGINE = MergeTree
partition by f1(URL)
ORDER BY (EventTime);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 852', () => {
    const query = `create table data (key Int) engine=MergeTree() order by key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 853', () => {
    const query = `CREATE TABLE dict_with_ttl (key UInt64, value String) ENGINE = EmbeddedRocksDB(2) PRIMARY KEY (key);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 854', () => {
    const query = `CREATE TABLE spark_bar_test (\`value\` Int64, \`event_date\` Date) ENGINE = MergeTree ORDER BY event_date;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 855', () => {
    const query = `CREATE TABLE t (
\`n1\` Int32
)
ENGINE = File(Avro)
SETTINGS output_format_avro_codec = 'zstd';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 856', () => {
    const query = `create view slow_view1 as with c1 as (select 1 as a),
c2 as (select a from c1),
c3 as (select a from c2),
c4 as (select a from c3),
c5 as (select a from c4),
c6 as (select a from c5),
c7 as (select a from c6),
c8 as (select a from c7),
c9 as (select a from c8),
c10 as (select a from c9),
c11 as (select a from c10),
c12 as (select a from c11),
c13 as (select a from c12),
c14 as (select a from c13),
c15 as (select a from c14),
c16 as (select a from c15),
c17 as (select a from c16),
c18 as (select a from c17),
c19 as (select a from c18),
c20 as (select a from c19),
c21 as (select a from c20),
c22 as (select a from c21),
c23 as (select a from c22),
c24 as (select a from c23),
c25 as (select a from c24),
c26 as (select a from c25),
c27 as (select a from c26),
c28 as (select a from c27),
c29 as (select a from c28),
c30 as (select a from c29),
c31 as (select a from c30),
c32 as (select a from c31),
c33 as (select a from c32),
c34 as (select a from c33),
c35 as (select a from c34),
c36 as (select a from c35),
c37 as (select a from c36),
c38 as (select a from c37),
c39 as (select a from c38),
c40 as (select a from c39)
select a from c21;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 857', () => {
    const query = `CREATE TABLE 02952_disjunction_optimization (a Int32, b String)
ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 858', () => {
    const query = `CREATE TABLE test (
\`id\` UInt64,
\`t\` Tuple(a UInt64, b Array(Tuple(c UInt64, d UInt64)))
)
ENGINE = MergeTree
ORDER BY id
SETTINGS min_rows_for_wide_part = 1, min_bytes_for_wide_part = 1, index_granularity = 8192;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 859', () => {
    const query = `create table a (i int) engine MergeTree order by i settings index_granularity = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 860', () => {
    const query = `create table b (i int) engine MergeTree order by tuple() settings index_granularity = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 861', () => {
    const query = `CREATE TABLE part_log_bytes_uncompressed ( key UInt8,
value UInt8
)
Engine=MergeTree()
ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 862', () => {
    const query = `CREATE TABLE dictionary_source_table (
id UInt64,
v1 String,
v2 Nullable(String),
v3 Nullable(UInt64)
) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 863', () => {
    const query = `CREATE DICTIONARY flat_dictionary (
id UInt64,
v1 String,
v2 Nullable(String) DEFAULT NULL,
v3 Nullable(UInt64)
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE 'dictionary_source_table'))
LIFETIME(MIN 0 MAX 0)
LAYOUT(FLAT());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 864', () => {
    const query = `CREATE DICTIONARY hashed_dictionary (
id UInt64,
v1 String,
v2 Nullable(String) DEFAULT NULL,
v3 Nullable(UInt64)
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE 'dictionary_source_table'))
LIFETIME(MIN 0 MAX 0)
LAYOUT(HASHED());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 865', () => {
    const query = `CREATE DICTIONARY hashed_array_dictionary (
id UInt64,
v1 String,
v2 Nullable(String) DEFAULT NULL,
v3 Nullable(UInt64)
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE 'dictionary_source_table'))
LIFETIME(MIN 0 MAX 0)
LAYOUT(HASHED_ARRAY());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 866', () => {
    const query = `CREATE TABLE range_dictionary_source_table (
id UInt64,
start Date,
end Nullable(Date),
val Nullable(UInt64)
) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 867', () => {
    const query = `CREATE DICTIONARY range_hashed_dictionary (
id UInt64,
start Date,
end Nullable(Date),
val Nullable(UInt64)
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE 'range_dictionary_source_table'))
LIFETIME(MIN 0 MAX 0)
LAYOUT(RANGE_HASHED())
RANGE(MIN start MAX end);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 868', () => {
    const query = `CREATE DICTIONARY cache_dictionary (
id UInt64,
v1 String,
v2 Nullable(String) DEFAULT NULL,
v3 Nullable(UInt64)
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE 'dictionary_source_table'))
LIFETIME(MIN 0 MAX 0)
LAYOUT(CACHE(SIZE_IN_CELLS 10));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 869', () => {
    const query = `CREATE DICTIONARY direct_dictionary (
id UInt64,
v1 String,
v2 Nullable(String) DEFAULT NULL,
v3 Nullable(UInt64)
)
PRIMARY KEY id
SOURCE(CLICKHOUSE(TABLE 'dictionary_source_table'))
LAYOUT(DIRECT());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 870', () => {
    const query = `CREATE TABLE ip_dictionary_source_table (
id UInt64,
prefix String,
asn UInt32,
cca2 String
) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 871', () => {
    const query = `CREATE DICTIONARY ip_dictionary (
id UInt64,
prefix String,
asn UInt32,
cca2 String
)
PRIMARY KEY prefix
SOURCE(CLICKHOUSE(TABLE 'ip_dictionary_source_table'))
LAYOUT(IP_TRIE)
LIFETIME(3600);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 872', () => {
    const query = `CREATE TABLE polygon_dictionary_source_table (
key Array(Array(Array(Tuple(Float64, Float64)))),
name Nullable(String)
) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 873', () => {
    const query = `CREATE DICTIONARY polygon_dictionary (
key Array(Array(Array(Tuple(Float64, Float64)))),
name Nullable(String)
)
PRIMARY KEY key
SOURCE(CLICKHOUSE(TABLE 'polygon_dictionary_source_table'))
LIFETIME(0)
LAYOUT(POLYGON());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 874', () => {
    const query = `CREATE TABLE points (x Float64, y Float64) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 875', () => {
    const query = `CREATE TABLE regexp_dictionary_source_table (
id UInt64,
parent_id UInt64,
regexp String,
keys   Array(String),
values Array(String),
) ENGINE=TinyLog;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 876', () => {
    const query = `create dictionary regexp_dict (
regexp String,
name String,
version Nullable(UInt64),
comment String default 'nothing'
)
PRIMARY KEY(regexp)
SOURCE(CLICKHOUSE(TABLE 'regexp_dictionary_source_table'))
LIFETIME(0)
LAYOUT(regexp_tree);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 877', () => {
    const query = `CREATE TABLE ttl_group_by_bug (key UInt32, ts DateTime, value UInt32, min_value UInt32 default value, max_value UInt32 default value)
ENGINE = MergeTree()
ORDER BY (key, toStartOfInterval(ts, toIntervalMinute(3)), ts)
TTL ts + INTERVAL 5 MINUTE GROUP BY key, toStartOfInterval(ts, toIntervalMinute(3))
SET value = sum(value), min_value = min(min_value), max_value = max(max_value),  ts=min(toStartOfInterval(ts, toIntervalMinute(3)));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 878', () => {
    const query = `CREATE TABLE test (x UInt8) ENGINE = MergeTree ORDER BY x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 879', () => {
    const query = `CREATE TABLE merge_tree_in_subqueries (id UInt64, name String, num UInt64) ENGINE = MergeTree ORDER BY (id, name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 880', () => {
    const query = `CREATE TABLE test (id UInt64, date Date) ENGINE = MergeTree
ORDER BY id
AS select *, '2023-12-25' from numbers(100);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 881', () => {
    const query = `CREATE TABLE t_merge_tree_index (
\`a\` UInt64,
\`b\` UInt64,
\`sp\` UInt64,
\`arr\` Array(LowCardinality(String)),
\`n\` Nested(c1 String, c2 UInt64),
\`t\` Tuple(c1 UInt64, c2 UInt64),
\`column.with.dots\` UInt64
)
ENGINE = MergeTree
ORDER BY (a, b, sipHash64(sp) % 100)
SETTINGS
index_granularity = 3,
min_bytes_for_wide_part = 0,
min_rows_for_wide_part = 6,
ratio_of_defaults_for_sparse_serialization = 0.9;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 882', () => {
    const query = `CREATE TABLE t_merge_tree_index (a UInt64 CODEC(LZ4), b UInt64 CODEC(LZ4), s String CODEC(LZ4)) ENGINE = MergeTree ORDER BY (a, b)
SETTINGS
index_granularity = 3,
min_bytes_for_wide_part = 0,
ratio_of_defaults_for_sparse_serialization = 1.0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 883', () => {
    const query = `CREATE TABLE t_merge_tree_index (a UInt64 CODEC(LZ4), b UInt64 CODEC(LZ4), s String CODEC(LZ4)) ENGINE = MergeTree ORDER BY (a, b)
SETTINGS
index_granularity = 3,
min_bytes_for_wide_part = '1G',
ratio_of_defaults_for_sparse_serialization = 1.0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 884', () => {
    const query = `CREATE TABLE 02947_table_1 (id Int32) Engine=MergeTree() ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 885', () => {
    const query = `CREATE TABLE 02947_table_2 (id Int32) Engine=MergeTree() ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 886', () => {
    const query = `CREATE TABLE t1(k UInt32, v String) ENGINE ReplicatedMergeTree('/02946_parallel_replicas/{database}/test_tbl', 'r1') ORDER BY k;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 887', () => {
    const query = `CREATE TABLE t2(k UInt32, v String) ENGINE ReplicatedMergeTree('/02946_parallel_replicas/{database}/test_tbl', 'r2') ORDER BY k;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 888', () => {
    const query = `CREATE TABLE t3(k UInt32, v String) ENGINE ReplicatedMergeTree('/02946_parallel_replicas/{database}/test_tbl', 'r3') ORDER BY k;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 889', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_d as test ENGINE = Distributed(test_cluster_one_shard_three_replicas_localhost, currentDatabase(), test);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 890', () => {
    const query = `CREATE TABLE test_table (
id UInt64,
value String
) ENGINE=ReplacingMergeTree ORDER BY id SETTINGS index_granularity = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 891', () => {
    const query = `CREATE TABLE tab (id Int64, dflt Int64 DEFAULT 54321) ENGINE MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 892', () => {
    const query = `CREATE TABLE tab (id Int64, dflt Int64 DEFAULT 54321) ENGINE MergeTree ORDER BY id SETTINGS min_bytes_for_wide_part = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 893', () => {
    const query = `CREATE TABLE tab (id Int64, dflt Nullable(Int64) DEFAULT 54321) ENGINE MergeTree ORDER BY id SETTINGS min_bytes_for_wide_part = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 894', () => {
    const query = `CREATE TABLE tab (id Int64, mtrl Int64 MATERIALIZED 54321) ENGINE MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 895', () => {
    const query = `CREATE TABLE tab (id Int64, mtrl Int64 MATERIALIZED 54321) ENGINE MergeTree ORDER BY id SETTINGS min_bytes_for_wide_part = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 896', () => {
    const query = `CREATE TABLE literal_alias_misclassification (
\`id\` Int64,
\`a\` Nullable(String),
\`b\` Nullable(Int64)
)
ENGINE = MergeTree
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 897', () => {
    const query = `CREATE TABLE tokenbf_v1_hasany_test (
id UInt32,
array Array(String),
INDEX idx_array_tokenbf_v1 array TYPE tokenbf_v1(512,3,0) GRANULARITY 1,
) Engine=MergeTree() ORDER BY id SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 898', () => {
    const query = `CREATE TABLE ngrambf_v1_hasany_test (
id UInt32,
array Array(String),
INDEX idx_array_ngrambf_v1 array TYPE ngrambf_v1(3,512,3,0) GRANULARITY 1,
) Engine=MergeTree() ORDER BY id SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 899', () => {
    const query = `CREATE TABLE tokenbf_tab (
id UInt32,
str String,
INDEX idx str TYPE tokenbf_v1(256, 2, 0)
)
ENGINE = MergeTree
ORDER BY id
SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 900', () => {
    const query = `CREATE TABLE ngrambf_tab (
id UInt32,
str String,
INDEX idx str TYPE ngrambf_v1(3, 256, 2, 0)
)
ENGINE = MergeTree
ORDER BY id
SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 901', () => {
    const query = `CREATE TABLE t (
\`n\` int,
\`__unused_group_by_column\` int
)
ENGINE = MergeTree
ORDER BY n AS
SELECT number, number
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 902', () => {
    const query = `CREATE TABLE order_by_all (
a String,
b Nullable(Int32)
)
ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 903', () => {
    const query = `CREATE TABLE order_by_all (
a String,
b Nullable(Int32),
all UInt64
)
ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 904', () => {
    const query = `CREATE TABLE test_group_by_with_rollup_order (id Int64, a Nullable(Int64), b Nullable(String)) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 905', () => {
    const query = `CREATE TABLE test_table (
number UInt64
)
ENGINE=MergeTree ORDER BY number;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 906', () => {
    const query = `CREATE MATERIALIZED VIEW test_mv ENGINE=MergeTree ORDER BY arr AS
WITH (SELECT '\\d[a-z]') AS constant_value
SELECT extractAll(concat(toString(number), 'a'), assumeNotNull(constant_value)) AS arr
FROM test_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 907', () => {
    const query = `CREATE TABLE regex_test_table (
regex String
)
ENGINE = MergeTree ORDER BY regex;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 908', () => {
    const query = `CREATE MATERIALIZED VIEW test_mv ENGINE=MergeTree ORDER BY arr AS
WITH (SELECT regex FROM regex_test_table) AS constant_value
SELECT extractAll(concat(toString(number), 'a'), assumeNotNull(constant_value)) AS arr
FROM test_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 909', () => {
    const query = `CREATE TABLE t_proj_external (
k1 UInt32,
k2 UInt32,
k3 UInt32,
value UInt32
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 910', () => {
    const query = `CREATE TABLE data_sparse_column (\`key\` Int64, \`value\` Int32) ENGINE = MergeTree ORDER BY key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 911', () => {
    const query = `CREATE TABLE test_parallel_replicas_settings (n UInt64) ENGINE=MergeTree() ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 912', () => {
    const query = `CREATE TABLE format_nested(attrs Nested(k String, v String)) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 913', () => {
    const query = `CREATE TABLE test_max_mt_projections_alter (c1 UInt32, c2 UInt32, c3 UInt32) ENGINE = MergeTree ORDER BY c1
SETTINGS max_projections = 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 914', () => {
    const query = `CREATE TABLE test_max_mt_projections_create (c1 UInt32, c2 UInt32, PROJECTION p1 (SELECT c1, c2 ORDER BY c2),
PROJECTION p2 (SELECT c2 ORDER BY c2))
ENGINE = MergeTree ORDER BY c1
SETTINGS max_projections = 1; -- { serverError LIMIT_EXCEEDED }
CREATE TABLE test_max_mt_projections_create (c1 UInt32, c2 UInt32,
PROJECTION p (SELECT c1, c2 ORDER BY c2))
ENGINE = MergeTree ORDER BY c1
SETTINGS max_projections = 0; -- { serverError LIMIT_EXCEEDED }
CREATE TABLE test_max_mt_projections_create (c1 UInt32, c2 UInt32,
PROJECTION p (SELECT c1, c2 ORDER BY c2))
ENGINE = MergeTree ORDER BY c1
SETTINGS max_projections = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 915', () => {
    const query = `CREATE TABLE tab (id String) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 916', () => {
    const query = `create table if not exists test (number UInt64) engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 917', () => {
    const query = `CREATE TABLE t2 (a UInt64, b UInt64) ENGINE = Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 918', () => {
    const query = `CREATE TABLE test1 (a Int32) engine=MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 919', () => {
    const query = `CREATE TABLE test2 (a Int32) engine=MergeTree order by a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 920', () => {
    const query = `CREATE TABLE raw (
name String,
num String
) ENGINE = MergeTree
ORDER BY (name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 921', () => {
    const query = `CREATE TABLE parsed_eph (
name String,
num_ephemeral UInt32 EPHEMERAL,
num UInt32 MATERIALIZED num_ephemeral,
) ENGINE = MergeTree
ORDER BY (name);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 922', () => {
    const query = `CREATE MATERIALIZED VIEW parse_mv_eph TO parsed_eph
AS
SELECT
name,
toUInt32(num) as num_ephemeral
FROM raw;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 923', () => {
    const query = `create or replace table t_temp ( a UInt32,
timestamp DateTime
)
engine = MergeTree
order by a
TTL timestamp + INTERVAL 2 SECOND WHERE a in (select number from system.numbers limit 100_000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 924', () => {
    const query = `CREATE TABLE test_max_size_drop Engine = MergeTree()
ORDER BY number
AS SELECT number
FROM numbers(1000)
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 925', () => {
    const query = `CREATE TABLE tab (str String) ENGINE=MergeTree ORDER BY str;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 926', () => {
    const query = `CREATE TABLE tab (puny String) ENGINE=MergeTree ORDER BY puny;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 927', () => {
    const query = `CREATE TABLE join_inner_table__fuzz_146 (\`id\` UUID, \`key\` String, \`number\` Int64, \`value1\` String, \`value2\` String, \`time\` Nullable(Int64)) ENGINE = MergeTree ORDER BY (id, number, key);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 928', () => {
    const query = `CREATE TABLE t_02709__fuzz_23 (\`key\` Nullable(UInt8), \`sign\` Int8, \`date\` DateTime64(3)) ENGINE = CollapsingMergeTree(sign) PARTITION BY date ORDER BY key SETTINGS allow_nullable_key=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 929', () => {
    const query = `CREATE TABLE tab (item_id UInt64, price_sold Nullable(Float32), date Date) ENGINE = MergeTree ORDER BY item_id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 930', () => {
    const query = `create table from_table (x UInt32) engine=MergeTree order by x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 931', () => {
    const query = `create table to_table (x UInt32) engine=MergeTree order by x;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 932', () => {
    const query = `create materialized view mv to to_table as select * from from_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 933', () => {
    const query = `CREATE TABLE t_lwd_mutations(id UInt64, v UInt64) ENGINE = MergeTree ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 934', () => {
    const query = `CREATE TABLE tab (idna String) ENGINE=MergeTree ORDER BY idna;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 935', () => {
    const query = `CREATE TABLE t_materialize_delete (id UInt64, v UInt64) ENGINE = MergeTree ORDER BY id PARTITION BY id % 10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 936', () => {
    const query = `CREATE TABLE test_table (
uint64 UInt64,
float64 Float64,
decimal32 Decimal32(5),
) ENGINE=MergeTree ORDER BY uint64;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 937', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_02931;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 938', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_1 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 939', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_2 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 940', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_3 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 941', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_4 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 942', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_5 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 943', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_6 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 944', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_7 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 945', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_8 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 946', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_9 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 947', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_10 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 948', () => {
    const query = `CREATE TABLE IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_11 (id Int32, str String) Engine=Memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 949', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_1 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 950', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_2 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 951', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_3 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 952', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_4 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 953', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_5 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_5;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 954', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_6 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_6;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 955', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_7 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_7;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 956', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_8 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_8;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 957', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_9 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_9;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 958', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_10 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 959', () => {
    const query = `CREATE VIEW IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_view_11 AS SELECT * FROM test_max_num_to_warn_02931.test_max_num_to_warn_11;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 960', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_1 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_1'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 961', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_2 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_2'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 962', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_3 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_3'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 963', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_4 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_4'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 964', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_5 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_5'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 965', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_6 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_6'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 966', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_7 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_7'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 967', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_8 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_8'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 968', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_9 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_9'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 969', () => {
    const query = `CREATE DICTIONARY IF NOT EXISTS test_max_num_to_warn_02931.test_max_num_to_warn_dict_10 (id Int32, str String) PRIMARY KEY id SOURCE(CLICKHOUSE(DB 'test_max_num_to_warn_02931' TABLE 'test_max_num_to_warn_10'))LAYOUT(FLAT()) LIFETIME(MIN 0 MAX 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 970', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 971', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 972', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 973', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 974', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_5;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 975', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_6;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 976', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_7;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 977', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_8;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 978', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_9;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 979', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 980', () => {
    const query = `CREATE DATABASE IF NOT EXISTS test_max_num_to_warn_11;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 981', () => {
    const query = `CREATE TABLE src(v UInt64) ENGINE = Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 982', () => {
    const query = `CREATE TABLE dest(v UInt64) Engine = MergeTree() ORDER BY v;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 983', () => {
    const query = `CREATE MATERIALIZED VIEW pipe TO dest AS SELECT v FROM src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 984', () => {
    const query = `CREATE TABLE test_bug_optimization (
\`path\` String
)
ENGINE = MergeTree
ORDER BY path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 985', () => {
    const query = `CREATE TABLE t1 (\`n\` UInt64) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 986', () => {
    const query = `create database db_filesystem ENGINE=Filesystem('/etc'); -- { serverError BAD_ARGUMENTS } create database db_filesystem ENGINE=Filesystem('../../../../../../../../etc'); -- { serverError BAD_ARGUMENTS }`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 987', () => {
    const query = `CREATE TABLE t (
key1 UInt64,
value1 String,
value2 String,
INDEX idx (value1) TYPE set(10) GRANULARITY 1
)
ENGINE MergeTree ORDER BY key1 SETTINGS index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 988', () => {
    const query = `CREATE TABLE t (uid Int16, name String, age Nullable(Int8), i Int16, j Int16, projection p1 (select name, age, uniq(i), count(j) group by name, age)) ENGINE=MergeTree order by uid settings index_granularity = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 989', () => {
    const query = `CREATE TABLE 02919_test_table_noarg(str String) ENGINE = FuzzJSON('{}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 990', () => {
    const query = `CREATE TABLE 02919_test_table_valid_args(str String) ENGINE = FuzzJSON( '{"pet":"rat"}', NULL);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 991', () => {
    const query = `CREATE TABLE 02919_test_table_reuse_args(str String) ENGINE = FuzzJSON( '{
"name": "Jane Doe",
"age": 30,
"city": "New York",
"contacts": {
"email": "jane@example.com",
"phone": "+1234567890"
},
"skills": [
"JavaScript",
"Python",
{
"frameworks": ["React", "Django"]
}
],
"projects": [
{"name": "Project A", "status": "completed"},
{"name": "Project B", "status": "in-progress"}
]
}',
12345);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 992', () => {
    const query = `CREATE TABLE 02919_test_table_invalid_col_type (
str Nullable(Int64)
)
ENGINE = FuzzJSON('{"pet":"rat"}', NULL); -- { serverError BAD_ARGUMENTS }
DROP TABLE IF EXISTS 02919_test_table_invalid_col_type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 993', () => {
    const query = `CREATE TABLE 02919_test_multi_col (
str1 String,
str2 String
) ENGINE = FuzzJSON('{"pet":"rat"}', 999);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 994', () => {
    const query = `CREATE TABLE crash_02919 ( b Int64,
c Nullable(Int64) MATERIALIZED b,
d Nullable(Bool) MATERIALIZED b
)
ENGINE = MergeTree
ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 995', () => {
    const query = `CREATE TABLE t_hardware_error ( KeyID UInt32
) Engine = ReplicatedMergeTree('/clickhouse/tables/{shard}/{database}/t_async_insert_dedup', '{replica}')
ORDER BY (KeyID);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 996', () => {
    const query = `CREATE TABLE \`02919_ddsketch_quantile\` ENGINE = Log AS
SELECT quantilesDDState(0.001, 0.9)(number) AS sketch
FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 997', () => {
    const query = `CREATE TEMPORARY TABLE alter_test (a UInt32, b UInt8) ENGINE=MergeTree ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 998', () => {
    const query = `CREATE TEMPORARY TABLE alter_test (a UInt32, b UInt8) ENGINE=Log;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 999', () => {
    const query = `CREATE TEMPORARY TABLE alter_test (a UInt32, b UInt8) ENGINE=Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors create: 1000', () => {
    const query = `CREATE TABLE source_table(id UInt64, value String) ENGINE = MergeTree ORDER BY tuple();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});
