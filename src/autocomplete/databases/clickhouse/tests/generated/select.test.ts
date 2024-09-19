/* no-irregular-whitespace: "off" */
/* eslint no-useless-escape: "off" */
import {parseClickHouseQuery} from '../../index';

test('should pass without errors select: 1', () => {
    const query = `SELECT is_initial_query,
count() AS c,
replaceRegexpAll(query, '_data_(\\\\d+)_(\\\\d+)', '_data_') AS query
FROM system.query_log
WHERE (event_date >= yesterday()) AND (type = 'QueryFinish') AND (ignore(54, 0, ignore('QueryFinish', 11, toLowCardinality(toLowCardinality(11)), 11, 11, 11), 'QueryFinish', materialize(11), toUInt128(11)) IN (
SELECT query_id
FROM system.query_log
WHERE (current_database = currentDatabase()) AND (event_date >= yesterday()) AND (type = 'QueryFinish') AND (query LIKE '-- Parallel inner query alone%')
))
GROUP BY
is_initial_query,
query
ORDER BY
is_initial_query ASC,
c ASC,
query ASC
SETTINGS allow_experimental_parallel_reading_from_replicas=1, max_parallel_replicas=3, cluster_for_parallel_replicas='test_cluster_one_shard_three_replicas_localhost', parallel_replicas_for_non_replicated_merge_tree=1, parallel_replicas_min_number_of_rows_per_replica=10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 2', () => {
    const query = `select * from test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 3', () => {
    const query = `SELECT trimBoth(explain) FROM
(
EXPLAIN actions=1 SELECT
check_start_time,
check_name,
test_name,
test_status,
check_status
FROM checks
WHERE 1 AND (test_status != 'SKIPPED') AND (test_status != 'OK') AND (check_status != 'success') AND (test_name ILIKE '%parallel_replicas%')
ORDER BY
check_start_time DESC,
check_name ASC,
test_name ASC
SETTINGS query_plan_read_in_order = 1, optimize_read_in_order = 1, max_parallel_replicas = 1
)
WHERE explain LIKE '%InReverseOrder%';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 4', () => {
    const query = `SELECT check_start_time, check_name, test_name, test_status, check_status FROM checks
WHERE 1
AND test_status != 'SKIPPED'
AND test_status != 'OK'
AND check_status != 'success'
AND test_name ilike '%parallel_replicas%'
ORDER BY check_start_time desc, check_name, test_name
SETTINGS query_plan_read_in_order = 1, optimize_read_in_order = 1, allow_experimental_parallel_reading_from_replicas = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 5', () => {
    const query = `SELECT * FROM
(
SELECT
x.b AS x,
countDistinct(x.c) AS ANIMAL
FROM
(
SELECT
a.ANIMAL AS a,
'CAT' AS b,
c.ANIMAL AS c,
d.ANIMAL AS d
FROM ANIMAL AS a
INNER JOIN ANIMAL AS b ON a.ANIMAL = b.ANIMAL
LEFT JOIN ANIMAL AS c ON b.ANIMAL = c.ANIMAL
RIGHT JOIN
(
SELECT *
FROM ANIMAL
UNION ALL
SELECT *
FROM ANIMAL
UNION ALL
SELECT *
FROM ANIMAL
) AS d ON a.ANIMAL = d.ANIMAL
WHERE (d.ANIMAL != 'CAT') AND (c.ANIMAL != 'DOG') AND (b.ANIMAL != 'FISH')
) AS x
WHERE x.b >= 'CAT'
GROUP BY x.b
HAVING ANIMAL >= 0
) AS ANIMAL
WHERE ANIMAL.ANIMAL >= 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 6', () => {
    const query = `SELECT id, value FROM test_table WHERE id IN (SELECT id FROM test_table_for_in UNION DISTINCT SELECT id FROM test_table_for_in);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 7', () => {
    const query = `SELECT 1 FROM t0 FINAL JOIN t1 ON TRUE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 8', () => {
    const query = `select * from format(CSV, '"42","42.42","True"');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 9', () => {
    const query = `SELECT 'REMOVE';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 10', () => {
    const query = `SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR } SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y DEFAULT 2 REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y MATERIALIZED 3 REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y EPHEMERAL 4 REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y COMMENT \\'5\\' REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y CODEC(ZSTD) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y STATISTICS(tdigest) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y TTL toDate(\\'2025-01-01\\') + toIntervalDay(x) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y COLLATE binary REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y SETTINGS (max_compress_block_size = 20000) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y PRIMARY KEY REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT 'The same, but with type';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 11', () => {
    const query = `SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 DEFAULT 2 REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR } SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 MATERIALIZED 3 REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 EPHEMERAL 4 REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 COMMENT \\'5\\' REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 CODEC(ZSTD) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 STATISTICS(tdigest) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 TTL toDate(\\'2025-01-01\\') + toIntervalDay(x) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 COLLATE binary REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 SETTINGS (max_compress_block_size = 20000) REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 PRIMARY KEY REMOVE MATERIALIZED'); -- { serverError SYNTAX_ERROR }
SELECT 'MODIFY SETTING';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 12', () => {
    const query = `SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR } SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y DEFAULT 2 MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y MATERIALIZED 3 MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y EPHEMERAL 4 MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y COMMENT \\'5\\' MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y CODEC(ZSTD) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y STATISTICS(tdigest) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y TTL toDate(\\'2025-01-01\\') + toIntervalDay(x) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y COLLATE binary MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y SETTINGS (some_setting = 2) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y PRIMARY KEY MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT 'The same, but with type';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 13', () => {
    const query = `SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 DEFAULT 2 MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR } SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 MATERIALIZED 3 MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 EPHEMERAL 4 MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 COMMENT \\'5\\' MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 CODEC(ZSTD) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 STATISTICS(tdigest) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 TTL toDate(\\'2025-01-01\\') + toIntervalDay(x) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 COLLATE binary MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 SETTINGS (some_setting = 2) MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 PRIMARY KEY MODIFY SETTING max_compress_block_size = 20000'); -- { serverError SYNTAX_ERROR }
SELECT 'RESET SETTING';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 14', () => {
    const query = `SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y Int64 RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR } SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y DEFAULT 2 RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y MATERIALIZED 3 RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y EPHEMERAL 4 RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y COMMENT \\'5\\' RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y CODEC(ZSTD) RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y STATISTICS(tdigest) RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y TTL toDate(\\'2025-01-01\\') + toIntervalDay(x) RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y COLLATE binary RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y SETTINGS (some_setting = 2) RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT formatQuery('ALTER TABLE a MODIFY COLUMN y PRIMARY KEY RESET SETTING max_compress_block_size'); -- { serverError SYNTAX_ERROR }
SELECT 'The same, but with type';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 15', () => {
    const query = `SELECT * FROM system.projections WHERE database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 16', () => {
    const query = `SELECT count(*) FROM system.projections WHERE table = 'projections' AND database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 17', () => {
    const query = `SELECT count(*) FROM system.projections WHERE table = 'projections_2' AND database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 18', () => {
    const query = `SELECT name FROM system.projections WHERE type = 'Normal' AND database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 19', () => {
    const query = `SELECT * FROM raw_to_attributes_mv ORDER BY AttributeKeys;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 20', () => {
    const query = `select materialize('{"a" : 42}')::JSON as json, toTypeName(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 21', () => {
    const query = `select '{"a" : 42}'::JSON as json, toTypeName(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 22', () => {
    const query = `select '{"a" : 42}'::JSON(max_dynamic_paths=100) as json, toTypeName(json); -- {serverError BAD_ARGUMENTS} set allow_experimental_object_type = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 23', () => {
    const query = `select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 YEAR);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 24', () => {
    const query = `select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 QUARTER);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 25', () => {
    const query = `select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 MONTH);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 26', () => {
    const query = `select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 WEEK);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 27', () => {
    const query = `select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 DAY);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 28', () => {
    const query = `select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 HOUR); -- {  serverError ILLEGAL_TYPE_OF_ARGUMENT } select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 MINUTE); -- {  serverError ILLEGAL_TYPE_OF_ARGUMENT }
select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 SECOND); -- {  serverError ILLEGAL_TYPE_OF_ARGUMENT }
select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 MILLISECOND); -- {  serverError ILLEGAL_TYPE_OF_ARGUMENT }
select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 MICROSECOND); -- {  serverError ILLEGAL_TYPE_OF_ARGUMENT }
select toStartOfInterval(toDate32('2022-09-16'), INTERVAL 1 NANOSECOND); -- {  serverError ILLEGAL_TYPE_OF_ARGUMENT }
select date_trunc('YEAR', toDate32('2022-09-16'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 29', () => {
    const query = `select date_trunc('QUARTER', toDate32('2022-09-16'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 30', () => {
    const query = `select date_trunc('MONTH', toDate32('2022-09-16'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 31', () => {
    const query = `select date_trunc('WEEK', toDate32('2022-09-16'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 32', () => {
    const query = `select date_trunc('DAY', toDate32('2022-09-16'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 33', () => {
    const query = `SELECT arrayZipUnaligned(['a', 'b', 'c'], ['d', 'e', 'f']) as x, toTypeName(x);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 34', () => {
    const query = `SELECT arrayZipUnaligned(['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 35', () => {
    const query = `SELECT arrayZipUnaligned(); -- { serverError TOO_FEW_ARGUMENTS_FOR_FUNCTION } SELECT arrayZipUnaligned('a', 'b', 'c'); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT arrayZipUnaligned(['a', 'b', 'c'], ['d', 'e', 'f', 'g']);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 36', () => {
    const query = `SELECT arrayZipUnaligned(['a'], [1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 37', () => {
    const query = `SELECT arrayZipUnaligned(['a', 'b', 'c'], [1, 2], [1.1, 2.2, 3.3, 4.4]);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 38', () => {
    const query = `SELECT arrayZipUnaligned(materialize(['g', 'h', 'i'])) from numbers(3); `;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 39', () => {
    const query = `SELECT anyHeavy(if(letter != 'b', letter, NULL)) FROM t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 40', () => {
    const query = `SELECT 'BEFORE', table, name, type, default_kind, default_expression FROM system.columns WHERE database = currentDatabase() AND table = 'a' ORDER BY table, name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 41', () => {
    const query = `SELECT 'AFTER', table, name, type, default_kind, default_expression FROM system.columns WHERE database = currentDatabase() AND table = 'a' ORDER BY table, name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 42', () => {
    const query = `SELECT a.data
, b.data
FROM
test_new_json_type a
JOIN test_new_json_type b
ON a.id = b.id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 43', () => {
    const query = `select materialize('{"a" : [[1, {}], null]}')::JSON as json, getSubcolumn(json, 'a'), dynamicType(getSubcolumn(json, 'a'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 44', () => {
    const query = `select [()][0];`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 45', () => {
    const query = `SELECT * FROM t_async_insert_alter ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 46', () => {
    const query = `SELECT query, data_kind, status FROM system.asynchronous_insert_log WHERE database = currentDatabase() AND table = 't_async_insert_alter' ORDER BY event_time_microseconds;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 47', () => {
    const query = `SELECT a, _table FROM t_merge ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 48', () => {
    const query = `SELECT a, _table FROM t_distr ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 49', () => {
    const query = `SELECT a, _database = currentDatabase() FROM t_merge ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 50', () => {
    const query = `SELECT a, _database = currentDatabase() FROM t_distr ORDER BY a;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 51', () => {
    const query = `SELECT * FROM test_new_json_type FINAL WHERE data.foo2 is not null ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 52', () => {
    const query = `SELECT * FROM test_new_json_type FINAL PREWHERE data.foo2 IS NOT NULL WHERE data.foo2 IS NOT NULL ORDER BY id ASC NULLS FIRST;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 53', () => {
    const query = `SELECT toTypeName(_headers) FROM url('http://127.0.0.1:8123/?query=select+1&user=default', LineAsString, 's String');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 54', () => {
    const query = `SELECT *,
mapFromString(_headers['X-ClickHouse-Summary'])['read_rows']
FROM url('http://127.0.0.1:8123/?query=select+1&user=default', LineAsString, 's String');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 55', () => {
    const query = `SELECT *,
mapFromString(_headers['X-ClickHouse-Summary'])['read_rows'],
toUInt64OrZero(mapFromString(_headers['X-ClickHouse-Summary'])['real_time_microseconds']) >= 0 ? 1 : 0
FROM url('http://127.0.0.1:8123/?query=SELECT%20uniq%28number%253%29%20FROM%20numbers%28100%29&user=default&wait_end_of_query=1', LineAsString, 's String');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 56', () => {
    const query = `SELECT * FROM
(
SELECT *
FROM view1
)
ORDER BY number DESC
LIMIT 20
SETTINGS cluster_for_parallel_replicas = 'parallel_replicas', allow_experimental_parallel_reading_from_replicas = 1, max_parallel_replicas = 3, parallel_replicas_for_non_replicated_merge_tree = 1, parallel_replicas_local_plan = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 57', () => {
    const query = `SELECT MAX(test_right.a) FROM test_left INNER JOIN test_right on test_left.b = test_right.b SETTINGS allow_experimental_join_right_table_sorting=true;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 58', () => {
    const query = `SELECT MAX(test_right.a) FROM test_left LEFT JOIN test_right on test_left.b = test_right.b SETTINGS allow_experimental_join_right_table_sorting=true;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 59', () => {
    const query = `SELECT 'Query column at granularity boundary';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 60', () => {
    const query = `SELECT * FROM tab WHERE hasToken(v1, '1');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 61', () => {
    const query = `select d.String from (select 'str'::Dynamic as d);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 62', () => {
    const query = `select json.a from (select '{"a" : 42}'::JSON as json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 63', () => {
    const query = `select json.a from (select '{"a" : 42}'::JSON(a UInt32) as json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 64', () => {
    const query = `select json.a.:Int64 from (select materialize('{"a" : 42}')::JSON as json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 65', () => {
    const query = `SELECT toFixedString('str', 3), 3, CAST(if(1 = 0, toInt8(3), NULL), 'Int32') AS x from numbers(10) GROUP BY GROUPING SETS ((CAST(toInt32(1), 'Int32')), ('str', 3), (CAST(toFixedString('str', 3), 'Dynamic')), (CAST(toFixedString(toFixedString('str', 3), 3), 'Dynamic')));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 66', () => {
    const query = `SELECT * FROM t_async_insert_params ORDER BY id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 67', () => {
    const query = `select count() from table_name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 68', () => {
    const query = `SELECT count() < 50 * 5 FROM ( 	SELECT * FROM table_name SAMPLE 50
);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 69', () => {
    const query = `SELECT '414243'::String;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 70', () => {
    const query = `SELECT x'414243'::String;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 71', () => {
    const query = `SELECT b'01000001'::String;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 72', () => {
    const query = `SELECT '{"a": \\'\\x41\\'}'::String;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 73', () => {
    const query = `select json.a.String from test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 74', () => {
    const query = `select json.a.:String from test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 75', () => {
    const query = `select json.a.UInt64 from test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 76', () => {
    const query = `select arrayJoin(distinctJSONPaths(json)) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 77', () => {
    const query = `select arrayJoin(distinctJSONPathsAndTypes(json)) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 78', () => {
    const query = `select arrayJoin(distinctDynamicTypes(json.a2)) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 79', () => {
    const query = `select arrayJoin(distinctDynamicTypes(json.a3)) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 80', () => {
    const query = `select arrayJoin(distinctDynamicTypes(json.a42)) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 81', () => {
    const query = `select 'Filter';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 82', () => {
    const query = `select arrayJoin(distinctJSONPaths(json)) from test_json_dynamic_aggregate_functions where dynamicType(json.a2) == 'String';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 83', () => {
    const query = `select arrayJoin(distinctJSONPathsAndTypes(json)) from test_json_dynamic_aggregate_functions where dynamicType(json.a2) == 'String';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 84', () => {
    const query = `select arrayJoin(distinctDynamicTypes(json.a2)) from test_json_dynamic_aggregate_functions where dynamicType(json.a2) == 'String';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 85', () => {
    const query = `select 'If';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 86', () => {
    const query = `select arrayJoin(distinctJSONPathsIf(json, dynamicType(json.a2) == 'String')) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 87', () => {
    const query = `select arrayJoin(distinctJSONPathsAndTypesIf(json, dynamicType(json.a2) == 'String')) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 88', () => {
    const query = `select arrayJoin(distinctDynamicTypesIf(json.a2, dynamicType(json.a2) == 'String')) from test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 89', () => {
    const query = `select 'Group by';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 90', () => {
    const query = `select dynamicType(json.a2), distinctJSONPaths(json) from test_json_dynamic_aggregate_functions group by dynamicType(json.a2) order by dynamicType(json.a2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 91', () => {
    const query = `select dynamicType(json.a2), distinctJSONPathsAndTypes(json) from test_json_dynamic_aggregate_functions group by dynamicType(json.a2) order by dynamicType(json.a2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 92', () => {
    const query = `select dynamicType(json.a2), distinctDynamicTypes(json.a2) from test_json_dynamic_aggregate_functions group by dynamicType(json.a2) order by dynamicType(json.a2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 93', () => {
    const query = `select 'Remote';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 94', () => {
    const query = `select arrayJoin(distinctJSONPaths(json)) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 95', () => {
    const query = `select arrayJoin(distinctJSONPathsAndTypes(json)) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 96', () => {
    const query = `select arrayJoin(distinctDynamicTypes(json.a2)) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 97', () => {
    const query = `select 'Remote filter';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 98', () => {
    const query = `select arrayJoin(distinctJSONPaths(json)) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions) where dynamicType(json.a2) == 'String';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 99', () => {
    const query = `select arrayJoin(distinctJSONPathsAndTypes(json)) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions) where dynamicType(json.a2) == 'String';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 100', () => {
    const query = `select arrayJoin(distinctDynamicTypes(json.a2)) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions) where dynamicType(json.a2) == 'String';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 101', () => {
    const query = `select 'Remote if';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 102', () => {
    const query = `select arrayJoin(distinctJSONPathsIf(json, dynamicType(json.a2) == 'String')) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 103', () => {
    const query = `select arrayJoin(distinctJSONPathsAndTypesIf(json, dynamicType(json.a2) == 'String')) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 104', () => {
    const query = `select arrayJoin(distinctDynamicTypesIf(json.a2, dynamicType(json.a2) == 'String')) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 105', () => {
    const query = `select 'Remote group by';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 106', () => {
    const query = `select dynamicType(json.a2), distinctJSONPaths(json) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions) group by dynamicType(json.a2) order by dynamicType(json.a2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 107', () => {
    const query = `select dynamicType(json.a2), distinctJSONPathsAndTypes(json) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions) group by dynamicType(json.a2) order by dynamicType(json.a2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 108', () => {
    const query = `select dynamicType(json.a2), distinctDynamicTypes(json.a2) from remote('127.0.0.{1,2,3}', currentDatabase(), test_json_dynamic_aggregate_functions) group by dynamicType(json.a2) order by dynamicType(json.a2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 109', () => {
    const query = `select distinctJSONPaths() from test_json_dynamic_aggregate_functions; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH} select distinctJSONPaths(json, 42) from test_json_dynamic_aggregate_functions; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
select distinctJSONPaths(42) from test_json_dynamic_aggregate_functions; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
select distinctJSONPathsAndTypes() from test_json_dynamic_aggregate_functions; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
select distinctJSONPathsAndTypes(json, 42) from test_json_dynamic_aggregate_functions; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
select distinctJSONPathsAndTypes(42) from test_json_dynamic_aggregate_functions; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
select distinctDynamicTypes() from test_json_dynamic_aggregate_functions; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
select distinctDynamicTypes(json.a2, 42) from test_json_dynamic_aggregate_functions; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
select distinctDynamicTypes(42) from test_json_dynamic_aggregate_functions; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
drop table test_json_dynamic_aggregate_functions;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 110', () => {
    const query = `SELECT JSONExtract('{"hello":[{"world":"wtf"}]}', 'Tuple(hello Array(Tuple(world String)))') AS x, x.hello, x.hello[1].world;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 111', () => {
    const query = `SELECT JSONExtract('{"hello":[{" wow ":"wtf"}]}', 'Tuple(hello Array(Tuple(\` wow \` String)))') AS x, x.hello, x.hello[1].\` wow \`;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 112', () => {
    const query = `SELECT JSONExtract('{"hello":[{" wow ":"wtf"}]}', 'Tuple(hello Array(Tuple(\` wow \` String)))') AS x, x.hello, x.hello[1].\`wow\`; -- { serverError NOT_FOUND_COLUMN_IN_BLOCK }
SELECT ('Hello' AS world,).world;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 113', () => {
    const query = `SELECT ('Hello' AS world,) AS t, t.world, (t).world, identity(t).world;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 114', () => {
    const query = `select distinct dynamicType(json.a) as type, isDynamicElementInSharedData(json.a) from test order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 115', () => {
    const query = `select distinct JSONSharedDataPaths(arrayJoin(json.a[])) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 116', () => {
    const query = `select distinct JSONDynamicPaths(arrayJoin(json.a[])) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 117', () => {
    const query = `select distinct dynamicType(arrayJoin(json.a[].c)) as type, isDynamicElementInSharedData(arrayJoin(json.a[].c)) from test order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 118', () => {
    const query = `select distinct dynamicType(arrayJoin(json.a[].d)) as type, isDynamicElementInSharedData(arrayJoin(json.a[].d)) from test order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 119', () => {
    const query = `select distinct dynamicType(json.b) as type, isDynamicElementInSharedData(json.b) from test order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 120', () => {
    const query = `select 'system.distribution_queue', count() from system.distribution_queue where exists(select 1) and database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 121', () => {
    const query = `select 'system.rocksdb', count()>0 from system.rocksdb where exists(select 1) and database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 122', () => {
    const query = `select 'system.databases', count() from system.databases where exists(select 1) and database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 123', () => {
    const query = `select 'system.mutations', count() from system.mutations where exists(select 1) and database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 124', () => {
    const query = `select 'system.replication_queue', count()>0 from system.replication_queue where exists(select 1) and database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 125', () => {
    const query = `SELECT v FROM test__fuzz_22
ORDER BY v
LIMIT 10, 10
SETTINGS max_threads = 4
FORMAT Null; -- { serverError BAD_ARGUMENTS }
DROP TABLE test__fuzz_22 SYNC;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 126', () => {
    const query = `select 'All paths';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 127', () => {
    const query = `select JSONAllPaths(arrayJoin(json.a[])) from test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 128', () => {
    const query = `select 'Dynamic paths';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 129', () => {
    const query = `select JSONDynamicPaths(arrayJoin(json.a[])) from test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 130', () => {
    const query = `select 'Shared data paths';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 131', () => {
    const query = `select JSONSharedDataPaths(arrayJoin(json.a[])) from test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 132', () => {
    const query = `SELECT('Comparing nanoseconds');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 133', () => {
    const query = `SELECT INTERVAL 500 NANOSECOND > INTERVAL 300 NANOSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 134', () => {
    const query = `SELECT INTERVAL 1000 NANOSECOND < INTERVAL 1500 NANOSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 135', () => {
    const query = `SELECT INTERVAL 2000 NANOSECOND = INTERVAL 2000 NANOSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 136', () => {
    const query = `SELECT INTERVAL 1000 NANOSECOND >= INTERVAL 1 MICROSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 137', () => {
    const query = `SELECT INTERVAL 1000001 NANOSECOND > INTERVAL 1 MILLISECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 138', () => {
    const query = `SELECT INTERVAL 2000000001 NANOSECOND > INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 139', () => {
    const query = `SELECT INTERVAL 60000000000 NANOSECOND = INTERVAL 1 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 140', () => {
    const query = `SELECT INTERVAL 7199999999999 NANOSECOND < INTERVAL 2 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 141', () => {
    const query = `SELECT INTERVAL 1 NANOSECOND < INTERVAL 2 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 142', () => {
    const query = `SELECT INTERVAL 5 NANOSECOND < INTERVAL 1 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 143', () => {
    const query = `SELECT INTERVAL 500 NANOSECOND < INTERVAL 300 NANOSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 144', () => {
    const query = `SELECT INTERVAL 1000 NANOSECOND > INTERVAL 1500 NANOSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 145', () => {
    const query = `SELECT INTERVAL 2000 NANOSECOND != INTERVAL 2000 NANOSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 146', () => {
    const query = `SELECT INTERVAL 1000 NANOSECOND < INTERVAL 1 MICROSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 147', () => {
    const query = `SELECT INTERVAL 1000001 NANOSECOND < INTERVAL 1 MILLISECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 148', () => {
    const query = `SELECT INTERVAL 2000000001 NANOSECOND < INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 149', () => {
    const query = `SELECT INTERVAL 60000000000 NANOSECOND != INTERVAL 1 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 150', () => {
    const query = `SELECT INTERVAL 7199999999999 NANOSECOND > INTERVAL 2 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 151', () => {
    const query = `SELECT INTERVAL 1 NANOSECOND > INTERVAL 2 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 152', () => {
    const query = `SELECT INTERVAL 5 NANOSECOND > INTERVAL 1 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 153', () => {
    const query = `SELECT INTERVAL 1 NANOSECOND < INTERVAL 2 MONTH; -- { serverError NO_COMMON_TYPE } SELECT('Comparing microseconds');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 154', () => {
    const query = `SELECT INTERVAL 1 MICROSECOND < INTERVAL 999 MICROSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 155', () => {
    const query = `SELECT INTERVAL 1001 MICROSECOND > INTERVAL 1 MILLISECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 156', () => {
    const query = `SELECT INTERVAL 2000000 MICROSECOND = INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 157', () => {
    const query = `SELECT INTERVAL 179999999 MICROSECOND < INTERVAL 3 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 158', () => {
    const query = `SELECT INTERVAL 3600000000 MICROSECOND = INTERVAL 1 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 159', () => {
    const query = `SELECT INTERVAL 36000000000000 MICROSECOND > INTERVAL 2 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 160', () => {
    const query = `SELECT INTERVAL 1209600000000 MICROSECOND = INTERVAL 2 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 161', () => {
    const query = `SELECT INTERVAL 1 MICROSECOND > INTERVAL 999 MICROSECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 162', () => {
    const query = `SELECT INTERVAL 1001 MICROSECOND < INTERVAL 1 MILLISECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 163', () => {
    const query = `SELECT INTERVAL 2000000 MICROSECOND != INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 164', () => {
    const query = `SELECT INTERVAL 179999999 MICROSECOND > INTERVAL 3 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 165', () => {
    const query = `SELECT INTERVAL 3600000000 MICROSECOND != INTERVAL 1 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 166', () => {
    const query = `SELECT INTERVAL 36000000000000 MICROSECOND < INTERVAL 2 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 167', () => {
    const query = `SELECT INTERVAL 1209600000000 MICROSECOND != INTERVAL 2 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 168', () => {
    const query = `SELECT INTERVAL 36000000000000 MICROSECOND < INTERVAL 1 QUARTER; -- { serverError NO_COMMON_TYPE } SELECT('Comparing milliseconds');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 169', () => {
    const query = `SELECT INTERVAL 2000 MILLISECOND > INTERVAL 2 MILLISECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 170', () => {
    const query = `SELECT INTERVAL 2000 MILLISECOND = INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 171', () => {
    const query = `SELECT INTERVAL 170000 MILLISECOND < INTERVAL 3 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 172', () => {
    const query = `SELECT INTERVAL 144000001 MILLISECOND > INTERVAL 40 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 173', () => {
    const query = `SELECT INTERVAL 1728000000 MILLISECOND = INTERVAL 20 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 174', () => {
    const query = `SELECT INTERVAL 1198599999 MILLISECOND < INTERVAL 2 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 175', () => {
    const query = `SELECT INTERVAL 2000 MILLISECOND < INTERVAL 2 MILLISECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 176', () => {
    const query = `SELECT INTERVAL 2000 MILLISECOND != INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 177', () => {
    const query = `SELECT INTERVAL 170000 MILLISECOND > INTERVAL 3 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 178', () => {
    const query = `SELECT INTERVAL 144000001 MILLISECOND < INTERVAL 40 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 179', () => {
    const query = `SELECT INTERVAL 1728000000 MILLISECOND != INTERVAL 20 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 180', () => {
    const query = `SELECT INTERVAL 1198599999 MILLISECOND > INTERVAL 2 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 181', () => {
    const query = `SELECT INTERVAL 36000000000000 MILLISECOND < INTERVAL 1 YEAR; -- { serverError NO_COMMON_TYPE } SELECT('Comparing seconds');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 182', () => {
    const query = `SELECT INTERVAL 120 SECOND > INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 183', () => {
    const query = `SELECT INTERVAL 120 SECOND = INTERVAL 2 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 184', () => {
    const query = `SELECT INTERVAL 1 SECOND < INTERVAL 2 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 185', () => {
    const query = `SELECT INTERVAL 86401 SECOND >= INTERVAL 1 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 186', () => {
    const query = `SELECT INTERVAL 1209600 SECOND = INTERVAL 2 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 187', () => {
    const query = `SELECT INTERVAL 120 SECOND < INTERVAL 2 SECOND;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 188', () => {
    const query = `SELECT INTERVAL 120 SECOND != INTERVAL 2 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 189', () => {
    const query = `SELECT INTERVAL 1 SECOND > INTERVAL 2 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 190', () => {
    const query = `SELECT INTERVAL 86401 SECOND < INTERVAL 1 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 191', () => {
    const query = `SELECT INTERVAL 1209600 SECOND != INTERVAL 2 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 192', () => {
    const query = `SELECT INTERVAL 36000000000000 SECOND < INTERVAL 1 MONTH; -- { serverError NO_COMMON_TYPE } SELECT('Comparing minutes');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 193', () => {
    const query = `SELECT INTERVAL 1 MINUTE < INTERVAL 59 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 194', () => {
    const query = `SELECT INTERVAL 1 MINUTE < INTERVAL 59 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 195', () => {
    const query = `SELECT INTERVAL 1440 MINUTE = INTERVAL 1 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 196', () => {
    const query = `SELECT INTERVAL 30241 MINUTE > INTERVAL 3 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 197', () => {
    const query = `SELECT INTERVAL 1 MINUTE > INTERVAL 59 MINUTE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 198', () => {
    const query = `SELECT INTERVAL 1 MINUTE > INTERVAL 59 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 199', () => {
    const query = `SELECT INTERVAL 1440 MINUTE != INTERVAL 1 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 200', () => {
    const query = `SELECT INTERVAL 30241 MINUTE < INTERVAL 3 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 201', () => {
    const query = `SELECT INTERVAL 2 MINUTE = INTERVAL 120 QUARTER; -- { serverError NO_COMMON_TYPE } SELECT('Comparing hours');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 202', () => {
    const query = `SELECT INTERVAL 48 HOUR > INTERVAL 2 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 203', () => {
    const query = `SELECT INTERVAL 48 HOUR >= INTERVAL 2 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 204', () => {
    const query = `SELECT INTERVAL 672 HOUR = INTERVAL 4 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 205', () => {
    const query = `SELECT INTERVAL 48 HOUR < INTERVAL 2 HOUR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 206', () => {
    const query = `SELECT INTERVAL 48 HOUR < INTERVAL 2 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 207', () => {
    const query = `SELECT INTERVAL 672 HOUR != INTERVAL 4 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 208', () => {
    const query = `SELECT INTERVAL 2 HOUR < INTERVAL 1 YEAR; -- { serverError NO_COMMON_TYPE } SELECT('Comparing days');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 209', () => {
    const query = `SELECT INTERVAL 1 DAY < INTERVAL 23 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 210', () => {
    const query = `SELECT INTERVAL 25 DAY > INTERVAL 3 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 211', () => {
    const query = `SELECT INTERVAL 1 DAY > INTERVAL 23 DAY;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 212', () => {
    const query = `SELECT INTERVAL 25 DAY < INTERVAL 3 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 213', () => {
    const query = `SELECT INTERVAL 2 DAY = INTERVAL 48 MONTH; -- { serverError NO_COMMON_TYPE } SELECT('Comparing weeks');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 214', () => {
    const query = `SELECT INTERVAL 1 WEEK < INTERVAL 6 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 215', () => {
    const query = `SELECT INTERVAL 1 WEEK > INTERVAL 6 WEEK;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 216', () => {
    const query = `SELECT INTERVAL 124 WEEK > INTERVAL 8 QUARTER; -- { serverError NO_COMMON_TYPE } SELECT('Comparing months');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 217', () => {
    const query = `SELECT INTERVAL 1 MONTH < INTERVAL 3 MONTH;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 218', () => {
    const query = `SELECT INTERVAL 124 MONTH > INTERVAL 5 QUARTER;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 219', () => {
    const query = `SELECT INTERVAL 36 MONTH = INTERVAL 3 YEAR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 220', () => {
    const query = `SELECT INTERVAL 1 MONTH > INTERVAL 3 MONTH;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 221', () => {
    const query = `SELECT INTERVAL 124 MONTH < INTERVAL 5 QUARTER;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 222', () => {
    const query = `SELECT INTERVAL 36 MONTH != INTERVAL 3 YEAR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 223', () => {
    const query = `SELECT INTERVAL 6 MONTH = INTERVAL 26 MICROSECOND; -- { serverError NO_COMMON_TYPE } SELECT('Comparing quarters');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 224', () => {
    const query = `SELECT INTERVAL 5 QUARTER > INTERVAL 4 QUARTER;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 225', () => {
    const query = `SELECT INTERVAL 20 QUARTER = INTERVAL 5 YEAR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 226', () => {
    const query = `SELECT INTERVAL 5 QUARTER < INTERVAL 4 QUARTER;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 227', () => {
    const query = `SELECT INTERVAL 20 QUARTER != INTERVAL 5 YEAR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 228', () => {
    const query = `SELECT INTERVAL 2 QUARTER = INTERVAL 6 NANOSECOND; -- { serverError NO_COMMON_TYPE } SELECT('Comparing years');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 229', () => {
    const query = `SELECT INTERVAL 1 YEAR < INTERVAL 3 YEAR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 230', () => {
    const query = `SELECT INTERVAL 1 YEAR > INTERVAL 3 YEAR;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 231', () => {
    const query = `SELECT 1 * 1000.0001,
(count(1.) = -2147483647) AND (count(a) = 1.1920928955078125e-7) AND (count(val) = 1048577) AND (sum(val) = ((NULL * 1048576) / -9223372036854775807)) AND (sum(a) = ((9223372036854775806 * 10000000000.) / 1048575))
FROM
(
SELECT
a,
val
FROM t1
FULL OUTER JOIN t2 ON (t1.a = t2.key) OR (1 * inf) OR (t1.b = t2.key)
)
GROUP BY '65537'
WITH CUBE
FORMAT Null
SETTINGS max_block_size = 100, join_use_nulls = 1, max_execution_time = 1., max_result_rows = 0, max_result_bytes = 0; -- { serverError TIMEOUT_EXCEEDED }
DROP TABLE t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 232', () => {
    const query = `SELECT hex(ripeMD160('The quick brown fox jumps over the lazy dog'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 233', () => {
    const query = `SELECT hex(ripeMD160('The quick brown fox jumps over the lazy cog'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 234', () => {
    const query = `SELECT hex(ripeMD160(''));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 235', () => {
    const query = `SELECT hex(ripeMD160('CheREpaha1512'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 236', () => {
    const query = `SELECT hex(ripeMD160('A-very-long-string-that-should-be-hashed-using-ripeMD160'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 237', () => {
    const query = `SELECT 0, materialize(18), k FROM test PREWHERE toNullable(toNullable(11)) WHERE toNullable(11) ORDER BY k DESC NULLS LAST LIMIT 100, 100 SETTINGS optimize_read_in_order = 1, merge_tree_min_rows_for_concurrent_read = 9223372036854775806, max_threads = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 238', () => {
    const query = `SELECT v FROM test__fuzz_22
ORDER BY v
LIMIT 10, 10
SETTINGS merge_tree_min_rows_for_concurrent_read = 9223372036854775806;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 239', () => {
    const query = `SELECT '---';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 240', () => {
    const query = `SELECT k, v FROM test__fuzz_22
ORDER BY k
LIMIT 100, 10
SETTINGS optimize_read_in_order=1, merge_tree_min_rows_for_concurrent_read = 9223372036854775806;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 241', () => {
    const query = `SELECT * FROM (SELECT * FROM test_00808 FINAL) WHERE id = 1; -- { serverError SUPPORT_IS_DISABLED } DROP TABLE test_00808;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 242', () => {
    const query = `select distinct arrayJoin(JSONAllPaths(json)) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 243', () => {
    const query = `select distinct arrayJoin(JSONDynamicPaths(json)) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 244', () => {
    const query = `select distinct arrayJoin(JSONSharedDataPaths(json)) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 245', () => {
    const query = `select distinct arrayJoin(JSONAllPaths(arrayJoin(json.a[]))) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 246', () => {
    const query = `select distinct arrayJoin(JSONDynamicPaths(arrayJoin(json.a[]))) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 247', () => {
    const query = `select distinct arrayJoin(JSONSharedDataPaths(arrayJoin(json.a[]))) as path from test order by path;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 248', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Date', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 249', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Date32', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 250', () => {
    const query = `SELECT toTimeZone(x, 'UTC') FROM format(JSONEachRow, 'x DateTime', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 251', () => {
    const query = `SELECT toTimeZone(x, 'UTC') FROM format(JSONEachRow, 'x DateTime64', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 252', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x IPv4', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 253', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x IPv6', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 254', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x UUID', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 255', () => {
    const query = `SELECT COUNT(DISTINCT col) FROM table1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 256', () => {
    const query = `SELECT * FROM table1 ORDER BY address ASC;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 257', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Nullable(IPv6)', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 258', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Array(UUID)', '{"x":["00000000-0000-0000-0000-000000000000","b15f852c-c41a-4fd6-9247-1929c841715e",""]}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 259', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Array(Nullable(IPv6))', '{"x":["",""]}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 260', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Tuple(Date, IPv4, String)', '{"x":["", "", "abc"]}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 261', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Map(String, IPv6)', '{"x":{"abc": ""}}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 262', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Variant(Date, UUID)', '{"x":""}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 263', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Array(Array(IPv6))', '{"x":[["2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF", ""], ["", "2001:db8:3333:4444:5555:6666:7777:8888"]]}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 264', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Variant(Date, Array(UUID))', '{"x":["", "b15f852c-c41a-4fd6-9247-1929c841715e"]}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 265', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Tuple(Array(UUID), Tuple(UUID, Map(String, IPv6)))', '{"x":[[""], ["",{"abc":""}]]}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 266', () => {
    const query = `SELECT x FROM format(JSONEachRow, 'x Map(Tuple(Date,IPv4), Variant(UUID,IPv6))', '{"x":{["",""]:""}}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 267', () => {
    const query = `select *, (select toDateTime64(0, 3)) from remote('127.0.0.1', system.one) settings prefer_localhost_replica=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 268', () => {
    const query = `select *, (select toDateTime64(5, 3)) from remote('127.0.0.1', system.one) settings prefer_localhost_replica=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 269', () => {
    const query = `select *, (select toDateTime64('1970-01-01 00:45:25.456789', 6)) from remote('127.0.0.1', system.one) settings prefer_localhost_replica=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 270', () => {
    const query = `select *, (select toDateTime64('1970-01-01 00:53:25.456789123', 9)) from remote('127.0.0.1', system.one) settings prefer_localhost_replica=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 271', () => {
    const query = `select *, (select toDateTime64(null,3)) from remote('127.0.0.1', system.one) settings prefer_localhost_replica=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 272', () => {
    const query = `select id, dt from distr_03222_dt64 where dt = (select toDateTime64(0,3)) order by id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 273', () => {
    const query = `select id, dt from distr_03222_dt64 where dt > (select toDateTime64(0,3)) order by id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 274', () => {
    const query = `select id, dt from distr_03222_dt64 where dt > (select toDateTime64('1970-01-01 00:10:00.000',3)) order by id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 275', () => {
    const query = `select id, dt from distr_03222_dt64 where dt < (select toDateTime64(5,3)) order by id;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 276', () => {
    const query = `select count(*) from distr_03222_dt64 where dt > (select toDateTime64('2024-07-20 00:00:00',3));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 277', () => {
    const query = `select count(*) from distr_03222_dt64 where dt > (select now());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 278', () => {
    const query = `select count(*) from distr_03222_dt64 where dt < (select toDateTime64('2004-07-20 00:00:00',3));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 279', () => {
    const query = `select 'Date';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 280', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020:01:01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 281', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020:1:01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 282', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020:01:1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 283', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020:1:1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 284', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 285', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-1-01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 286', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 287', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-1-1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 288', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020/01/01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 289', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020/1/01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 290', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020/01/1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 291', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020/1/1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 292', () => {
    const query = `select 'String';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 293', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020_01_01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 294', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020_1_01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 295', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020_01_1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 296', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020_1_1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 297', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020a01a01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 298', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020a1a01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 299', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020a01a1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 300', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020a1a1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 301', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20200101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 302', () => {
    const query = `select 'DateTime';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 303', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020:01:01 42:42:42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 304', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020/01/01 42:42:42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 305', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42:42:42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 306', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020_01_01 42:42:42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 307', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020a01a01 42:42:42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 308', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42.42.42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 309', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42 42 42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 310', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42a42a42"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 311', () => {
    const query = `select 'DateTime64';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 312', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020:01:01 42:42:42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 313', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020/01/01 42:42:42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 314', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42:42:42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 315', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020_01_01 42:42:42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 316', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020a01a01 42:42:42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 317', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42.42.42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 318', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42 42 42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 319', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2020-01-01 42a42a42.4242"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 320', () => {
    const query = `select 'DateTime/DateTime64 best effort';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 321', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 00:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 322', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 323', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 324', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 325', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203.000 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 326', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203 MSK+0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 327', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203.000 MSK+0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 328', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 329', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203.000 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 330', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 331', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/17 010203.000Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 332', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/1970 010203Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 333', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/1970 010203.000Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 334', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/70 010203Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 335', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "02/01/70 010203.000Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 336', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "11 Feb 2018 06:40:50 +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 337', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "11 Feb 2018 06:40:50.000 +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 338', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "17 Apr 2000 2 1:2:3"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 339', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "17 Apr 2000 2 1:2:3.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 340', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "19700102 01:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 341', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "19700102 01:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 342', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "19700102010203Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 343', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "19700102010203Z.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 344', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "1970/01/02 010203Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 345', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "1970/01/02 010203.000Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 346', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2016-01-01MSD"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 347', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2016-01-01 MSD"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 348', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2016-01-01UTC"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 349', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2016-01-01Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 350', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "201701 02 010203 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 351', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "201701 02 010203.000 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 352', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 353', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 354', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+0"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 355', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+0"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 356', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 357', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 358', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+0000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 359', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+0000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 360', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05 -0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 361', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000 -0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 362', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+030"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 363', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+030"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 364', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 365', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 366', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 367', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 368', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 369', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 370', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05+900"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 371', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000+900"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 372', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05GMT"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 373', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000GMT"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 374', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05 MSD"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 375', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000 MSD"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 376', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05 MSD Feb"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 377', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000 MSD Feb"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 378', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05 MSD Jun"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 379', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000 MSD Jun"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 380', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 381', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02 03:04:05.000 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 382', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 383', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 384', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05+00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 385', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05.000+00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 386', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05 -0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 387', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05.000 -0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 388', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05-0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 389', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05.000-0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 390', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05+0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 391', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05.000+0100"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 392', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 393', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017-01-02T03:04:05.000Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 394', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 01 11:22:33"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 395', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 01 11:22:33.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 396', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 010203 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 397', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 010203.000 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 398', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 01:2:3 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 399', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 01:2:3.000 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 400', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:02:3"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 401', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:02:3.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 402', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 11:22:33"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 403', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 11:22:33.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 404', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:03"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 405', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:03.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 406', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:22:33"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 407', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:22:33.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 408', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 409', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 410', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:33"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 411', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:33.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 412', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 413', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3.000 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 414', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3 UTC+0000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 415', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3.000 UTC+0000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 416', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 417', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3.000 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 418', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3 UTC+0400"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 419', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 02 1:2:3.000 UTC+0400"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 420', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 2 1:2:3"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 421', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Apr 2 1:2:3.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 422', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Jan 02 010203 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 423', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2017 Jan 02 010203.000 UTC+0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 424', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Apr 2017 01:02:03"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 425', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Apr 2017 01:02:03.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 426', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Apr 2017 1:2:3"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 427', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Apr 2017 1:2:3.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 428', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 429', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 430', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 431', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 MSK"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 432', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 433', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 434', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 435', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 436', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 437', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 438', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 439', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 440', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z+03:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 441', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z+03:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 442', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z +03:00 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 443', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z +03:00 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 444', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z +0300 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 445', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z +0300 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 446', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z+03:00 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 447', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z+03:00 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 448', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z +03:30 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 449', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z +03:30 PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 450', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3Z Mon"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 451', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000Z Mon"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 452', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 453', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 454', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3Z PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 455', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000Z PM"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 456', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3 Z PM +03:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 457', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "25 Jan 2017 1:2:3.000 Z PM +03:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 458', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 11 Feb 2018 06:40:50 +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 459', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 11 Feb 2018 06:40:50.000 +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 460', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun, 11 Feb 2018 06:40:50 +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 461', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun, 11 Feb 2018 06:40:50.000 +0300"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 462', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 463', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 464', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 465', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 466', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 467', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200001"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 468', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000010"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 469', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 470', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200001010"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 471', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000010101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 472', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000101010"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 473', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200001010101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 474', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000010101010"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 475', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000101010101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 476', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 477', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 478', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 479', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 480', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 481', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200001.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 482', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000010.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 483', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000101.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 484', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200001010.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 485', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000010101.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 486', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000101010.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 487', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "200001010101.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 488', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000010101010.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 489', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "20000101010101.1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 490', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 491', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 492', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 493', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 494', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 495', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar2020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 496', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 2020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 497', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 498', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 499', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar01012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 500', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 01012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 501', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar0101202001"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 502', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 0101202001"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 503', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar010120200101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 504', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 010120200101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 505', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar01012020010101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 506', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 01012020010101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 507', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar01012020010101.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 508', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 0101202001010101.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 509', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 510', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 511', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 1"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 512', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 513', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 514', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun2020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 515', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 2020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 516', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 517', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 518', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun01012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 519', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 01012020"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 520', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun0101202001"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 521', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 0101202001"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 522', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun010120200101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 523', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 010120200101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 524', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun01012020010101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 525', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 01012020010101"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 526', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun01012020010101.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 527', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Sun 0101202001010101.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 528', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000 01 01 01:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 529', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000 01 01 01:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 530', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000a01a01 01:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 531', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000a01a01 01:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 532', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01 00 00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 533', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01 00 00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 534', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01-00-00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 535', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01-00-00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 536', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01a00a00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 537', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01-01 01a00a00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 538', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01 01:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 539', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01 01:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 540', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000 01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 541', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000-01"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 542', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 2000 00:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 543', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 2000 00:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 544', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000 00:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 545', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "2000 00:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 546', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 2000-01-01 00:00:00"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 547', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "Mar 2000-01-01 00:00:00.000"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 548', () => {
    const query = `select x, toTypeName(x) from format(JSONEachRow, '{"x" : "1.7.10"}');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 549', () => {
    const query = `SELECT sleep(2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 550', () => {
    const query = `SELECT read_rows, total_rows, progress FROM system.view_refreshes WHERE database = currentDatabase() and view = '03221_rmv';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 551', () => {
    const query = `SELECT merge_algorithm,
ProfileEvents['Merge'],
ProfileEvents['MergedRows'],
ProfileEvents['MergedColumns'],
ProfileEvents['GatheredColumns'],
ProfileEvents['MergedUncompressedBytes'],
ProfileEvents['MergeTotalMilliseconds'] > 0,
ProfileEvents['MergeExecuteMilliseconds'] > 0,
ProfileEvents['MergeHorizontalStageTotalMilliseconds'] > 0,
ProfileEvents['MergeHorizontalStageExecuteMilliseconds'] > 0
FROM system.part_log WHERE database = currentDatabase() AND table = 't_merge_profile_events_1' AND event_type = 'MergeParts' AND part_name = 'all_1_2_1';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 552', () => {
    const query = `SELECT merge_algorithm,
ProfileEvents['Merge'],
ProfileEvents['MergedRows'],
ProfileEvents['MergedColumns'],
ProfileEvents['GatheredColumns'],
ProfileEvents['MergedUncompressedBytes'],
ProfileEvents['MergeTotalMilliseconds'] > 0,
ProfileEvents['MergeExecuteMilliseconds'] > 0,
ProfileEvents['MergeHorizontalStageTotalMilliseconds'] > 0,
ProfileEvents['MergeHorizontalStageExecuteMilliseconds'] > 0,
ProfileEvents['MergeVerticalStageTotalMilliseconds'] > 0,
ProfileEvents['MergeVerticalStageExecuteMilliseconds'] > 0,
FROM system.part_log WHERE database = currentDatabase() AND table = 't_merge_profile_events_2' AND event_type = 'MergeParts' AND part_name = 'all_1_2_1';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 553', () => {
    const query = `SELECT merge_algorithm,
ProfileEvents['Merge'],
ProfileEvents['MergedRows'],
ProfileEvents['MergedColumns'],
ProfileEvents['GatheredColumns'],
ProfileEvents['MergedUncompressedBytes'],
ProfileEvents['MergeTotalMilliseconds'] > 0,
ProfileEvents['MergeExecuteMilliseconds'] > 0,
ProfileEvents['MergeHorizontalStageTotalMilliseconds'] > 0,
ProfileEvents['MergeHorizontalStageExecuteMilliseconds'] > 0,
ProfileEvents['MergeVerticalStageTotalMilliseconds'] > 0,
ProfileEvents['MergeVerticalStageExecuteMilliseconds'] > 0,
ProfileEvents['MergeProjectionStageTotalMilliseconds'] > 0,
ProfileEvents['MergeProjectionStageExecuteMilliseconds'] > 0,
ProfileEvents['MergeExecuteMilliseconds'] <= duration_ms,
ProfileEvents['MergeTotalMilliseconds'] <= duration_ms
FROM system.part_log WHERE database = currentDatabase() AND table = 't_merge_profile_events_3' AND event_type = 'MergeParts' AND part_name = 'all_1_2_1';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 554', () => {
    const query = `SELECT count(*) from report_metrics_v2 WHERE (intDiv(a, 50) = 200) AND (intDiv(a, 50000) = 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 555', () => {
    const query = `SELECT unhex('f0') FORMAT JSONCompact;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 556', () => {
    const query = `SELECT materialize([(NULL, '11\\01111111\\011111', '1111')]) AS t,
(t[1048576]).2,
materialize(-2147483648),
(t[-2147483648]).1
GROUP BY
materialize([(NULL, '1')]),
'',
(materialize((t[1023]).2), (materialize(''), (t[2147483647]).1, materialize(9223372036854775807)), (materialize(''), materialize(NULL, 2147483647, t[65535], 256)), materialize(NULL))
; -- { serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
SELECT
materialize([(NULL, '11\\01111111\\011111', '1111')]) AS t,
(t[1048576]).2,
materialize(-2147483648),
(t[-2147483648]).1
GROUP BY
materialize([(NULL, '1')]),
'',
(materialize((t[1023]).2), (materialize(''), (t[2147483647]).1, materialize(9223372036854775807)), (materialize(''), materialize(NULL), materialize(2147483647), materialize(t[65535]), materialize(256)), materialize(NULL))
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 557', () => {
    const query = `SELECT count() FROM t_primary_index_memory;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 558', () => {
    const query = `SELECT JSONMergePatch(REPEAT('{"c":', 1000000)); -- { serverError BAD_ARGUMENTS } SELECT JSONMergePatch(REPEAT('{"c":', 100000)); -- { serverError BAD_ARGUMENTS }
SELECT JSONMergePatch(REPEAT('{"c":', 10000)); -- { serverError BAD_ARGUMENTS }
SELECT JSONMergePatch(REPEAT('{"c":', 1000)); -- { serverError BAD_ARGUMENTS }
SELECT JSONMergePatch(REPEAT('{"c":', 100)); -- { serverError BAD_ARGUMENTS }
SELECT JSONMergePatch(REPEAT('{"c":', 10)); -- { serverError BAD_ARGUMENTS }
SELECT JSONMergePatch(REPEAT('{"c":', 1)); -- { serverError BAD_ARGUMENTS }
`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 559', () => {
    const query = `select * from ( select sum(last_seen) as dates_seen, materialize(1) as last_seen ) where last_seen > 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 560', () => {
    const query = `select * from ( select sum(last_seen) as dates_seen, materialize(2) as last_seen ) where last_seen < 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 561', () => {
    const query = `select * from ( select sum(last_seen) as dates_seen, materialize(2) as last_seen GROUP BY 'a' ) where last_seen < 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 562', () => {
    const query = `select * from ( select sum(last_seen) as dates_seen, 1 as last_seen UNION ALL select sum(last_seen) as dates_seen, 3 as last_seen ) where last_seen < 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 563', () => {
    const query = `select * from ( select sum(last_seen) as dates_seen, 1 as last_seen UNION ALL select sum(last_seen) as dates_seen, 3 as last_seen ) where last_seen > 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 564', () => {
    const query = `SELECT database, table FROM system.tables WHERE database = 'information_schema' AND table = 'tables';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 565', () => {
    const query = `SELECT 'both', database, table, left(replica_name, 2) FROM system.replicas WHERE database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 566', () => {
    const query = `SELECT database, table, left(replica_name, 2) FROM system.replicas WHERE database = currentDatabase() AND table = 'test_03217_system_tables_replica_1' AND replica_name LIKE 'r1%';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 567', () => {
    const query = `SELECT argMax(read_rows, event_time_microseconds) FROM system.query_log WHERE 1 AND current_database = currentDatabase()
AND query LIKE '%SELECT database, table FROM system.tables WHERE database = \\'information_schema\\' AND table = \\'tables\\';'
AND type = 'QueryFinish';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 568', () => {
    const query = `SELECT argMax(read_rows, event_time_microseconds) FROM system.query_log WHERE 1 AND current_database = currentDatabase()
AND query LIKE '%SELECT database, table, left(replica_name, 2) FROM system.replicas WHERE database = currentDatabase() AND table = \\'test_03217_system_tables_replica_1\\' AND replica_name LIKE \\'r1\\%\\';'
AND type = 'QueryFinish';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 569', () => {
    const query = `SELECT toDateTime64('1970-01-01 00:00:01', 3) FROM remote('127.0.0.{1,2}', system, one)
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 570', () => {
    const query = `SELECT arrayWithConstant(96142475, ['qMUF']); -- { serverError TOO_LARGE_ARRAY_SIZE } SELECT arrayWithConstant(100000000, materialize([[[[[[[[[['Hello, world!']]]]]]]]]])); -- { serverError TOO_LARGE_ARRAY_SIZE }
SELECT length(arrayWithConstant(10000000, materialize([[[[[[[[[['Hello world']]]]]]]]]])));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 571', () => {
    const query = `SELECT * FROM 03215_test_v;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 572', () => {
    const query = `SELECT * FROM 03215_multi_v;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 573', () => {
    const query = `SELECT if(number % 2, tuple(number), tuple(toString(number))) as res, toTypeName(res) FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 574', () => {
    const query = `SELECT if(number % 2, map(number, number), map(toString(number), toString(number))) as res, toTypeName(res) FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 575', () => {
    const query = `SELECT if(number % 2, number::Int64, number::UInt64) as res, toTypeName(res) FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 576', () => {
    const query = `SELECT if(number % 2, number::Int32, number::UInt64) as res, toTypeName(res) FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 577', () => {
    const query = `SELECT if(number % 2, number::Int16, number::UInt64) as res, toTypeName(res) FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 578', () => {
    const query = `SELECT if(number % 2, number::Int8, number::UInt64) as res, toTypeName(res) FROM numbers(2);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 579', () => {
    const query = `SELECT 03215_udf_with_union();`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 580', () => {
    const query = `SELECT toStartOfWeek(toDateTime64('1970-01-01', 6));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 581', () => {
    const query = `SELECT toStartOfWeek(toDateTime('1970-01-01'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 582', () => {
    const query = `SELECT _file, _path FROM s3(s3_conn, filename='::03215_archive.csv') ORDER BY (_file, _path);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 583', () => {
    const query = `SELECT _file, _path FROM s3(s3_conn, filename='test :: 03215_archive.csv') ORDER BY (_file, _path); -- { serverError S3_ERROR } INSERT INTO FUNCTION s3(s3_conn, filename='test::03215_archive.csv') SELECT 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 584', () => {
    const query = `SELECT _file, _path FROM s3(s3_conn, filename='test::03215_archive.csv') ORDER BY (_file, _path);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 585', () => {
    const query = `SELECT _file, _path FROM s3(s3_conn, filename='test.zip::03215_archive.csv') ORDER BY (_file, _path) SETTINGS allow_archive_path_syntax=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 586', () => {
    const query = `SELECT col1, col2 FROM test_parquet;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 587', () => {
    const query = `SELECT readWKTMultiLineString('MULTILINESTRING ((1 1, 2 2, 3 3, 1 1))');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 588', () => {
    const query = `SELECT toTypeName(readWKTMultiLineString('MULTILINESTRING ((1 1, 2 2, 3 3, 1 1))'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 589', () => {
    const query = `SELECT wkt(readWKTMultiLineString('MULTILINESTRING ((1 1, 2 2, 3 3, 1 1))'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 590', () => {
    const query = `SELECT readWKTMultiLineString('MULTILINESTRING ((1 1, 2 2, 3 3, 1 1), (1 0, 2 0, 3 0))');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 591', () => {
    const query = `SELECT toTypeName(readWKTMultiLineString('MULTILINESTRING ((1 1, 2 2, 3 3, 1 1), (1 0, 2 0, 3 0))'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 592', () => {
    const query = `SELECT wkt(readWKTMultiLineString('MULTILINESTRING ((1 1, 2 2, 3 3, 1 1), (1 0, 2 0, 3 0))'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 593', () => {
    const query = `select wkt(shape), readWKTMultiLineString(wkt_string), readWKTMultiLineString(wkt_string) = shape from t order by ord;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 594', () => {
    const query = `SELECT arrayJoin([tuple((toNullable(10) * toLowCardinality(20)) < materialize(30))]) AS row FROM t WHERE row.1 = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 595', () => {
    const query = `SELECT concat(materialize(toLowCardinality('b')), 'a') FROM remote('127.0.0.{1,2}', system, one) GROUP BY 'a';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 596', () => {
    const query = `SELECT concat(NULLIF(1, materialize(toLowCardinality(1))), concat(NULLIF(1, 1))) FROM remote('127.0.0.{1,2}', system, one) GROUP BY concat(NULLIF(1, 1));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 597', () => {
    const query = `select * from test order by toString(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 598', () => {
    const query = `SELECT a.key FROM a LEFT SEMI JOIN b ON tuple(a.key) = tuple(b.key) ORDER BY a.key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 599', () => {
    const query = `SELECT a.key FROM a LEFT SEMI JOIN b ON a.key IS NOT DISTINCT FROM b.key ORDER BY a.key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 600', () => {
    const query = `SELECT a.key FROM a LEFT ANY JOIN b ON tuple(a.key) = tuple(b.key) ORDER BY a.key;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 601', () => {
    const query = `SELECT count(distinct b) FROM testnull GROUP BY a  SETTINGS max_memory_usage = 10000000; -- {serverError MEMORY_LIMIT_EXCEEDED} DROP TABLE testnull;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 602', () => {
    const query = `SELECT bitSlice(); -- { serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH } SELECT bitSlice(1, 1); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT bitSlice('Hello', 'World'); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT bitSlice('Hello', 1, 'World'); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT bitSlice('Hello', 1, 1, 'World'); -- { serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH }
`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 603', () => {
    const query = `SELECT randChiSquared(-0.0000001); -- { serverError BAD_ARGUMENTS } SELECT randChiSquared(-0.0); -- { serverError BAD_ARGUMENTS }
SELECT randStudentT(-0.); -- { serverError BAD_ARGUMENTS }
SELECT randFisherF(-0., 1); -- { serverError BAD_ARGUMENTS }
SELECT randFisherF(1, -0.); -- { serverError BAD_ARGUMENTS }
`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 604', () => {
    const query = `SELECT sum(*) FROM remote('127.0.0.4', currentDatabase(), viewExplain('EXPLAIN PIPELINE', 'graph = 1', (SELECT * FROM remote('127.0.0.4', system, one)))); -- { serverError UNKNOWN_FUNCTION } SELECT groupArray(*) FROM cluster(test_cluster_two_shards, viewExplain('EXPLAIN PIPELINE', 'graph = 1', (SELECT * FROM remote('127.0.0.4', system, one))));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 605', () => {
    const query = `SELECT '---- denseRank() ----';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 606', () => {
    const query = `select number, p, o, count(*) over w,
rank() over w,
denseRank() over w,
row_number() over w
from (select number, intDiv(number, 5) p, mod(number, 3) o
from numbers(31) order by o, number) t
window w as (partition by p order by o, number)
order by p, o, number
settings max_block_size = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 607', () => {
    const query = `SELECT '---- percentRank() ----';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 608', () => {
    const query = `SELECT * FROM
(
SELECT
product_name,
group_name,
price,
rank() OVER (PARTITION BY group_name ORDER BY price ASC) AS rank,
percentRank() OVER (PARTITION BY group_name ORDER BY price ASC) AS percent
FROM products
INNER JOIN product_groups USING (group_id)
) AS t
ORDER BY
group_name ASC,
price ASC,
product_name ASC;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 609', () => {
    const query = `SELECT * FROM format("JSONCompactEachRow", 'x UInt32, y UInt32', REPEAT('[1,1,', 100000)) SETTINGS input_format_json_compact_allow_variable_number_of_columns = 1; -- { serverError TOO_DEEP_RECURSION, INCORRECT_DATA } SET input_format_json_max_depth = 100000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 610', () => {
    const query = `SELECT [[10, 2, 13, 15][toNullable(toLowCardinality(1))]][materialize(toLowCardinality(1))];`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 611', () => {
    const query = `SELECT '-- system.settings_profiles' GROUP BY [[[[[[[[[[10, toNullable(10)][1], [materialize(toLowCardinality(10)), 2][materialize(toLowCardinality(1))]][1]][materialize(materialize(1))], [10, 2, 1][1]][1]][1], 1][toLowCardinality(1)]][1], 1][1], 10][1], [[10, toLowCardinality(2)][toNullable(toLowCardinality(1))]][materialize(toLowCardinality(1))]][1], [[[[10, 2][1]][1]][1], [10, 2][materialize(1)], [[[2][1]][materialize(1)], 2, 1][1], [2, 10, toNullable(1)][1]] WITH CUBE;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 612', () => {
    const query = `select accurateCastOrDefault(variant, 'UInt32'), multiIf(number % 4 == 0, NULL, number % 4 == 1, number, number % 4 == 2, 'str_' || toString(number), range(number)) as variant from numbers(8);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 613', () => {
    const query = `select accurateCastOrNull(variant, 'UInt32'), multiIf(number % 4 == 0, NULL, number % 4 == 1, number, number % 4 == 2, 'str_' || toString(number), range(number)) as variant from numbers(8);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 614', () => {
    const query = `select accurateCastOrDefault(dynamic, 'UInt32'), multiIf(number % 4 == 0, NULL, number % 4 == 1, number, number % 4 == 2, 'str_' || toString(number), range(number))::Dynamic as dynamic from numbers(8);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 615', () => {
    const query = `select accurateCastOrNull(dynamic, 'UInt32'), multiIf(number % 4 == 0, NULL, number % 4 == 1, number, number % 4 == 2, 'str_' || toString(number), range(number))::Dynamic as dynamic from numbers(8);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 616', () => {
    const query = `select distinct toInt8OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 617', () => {
    const query = `select distinct toUInt8OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 618', () => {
    const query = `select distinct toInt16OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 619', () => {
    const query = `select distinct toUInt16OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 620', () => {
    const query = `select distinct toInt32OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 621', () => {
    const query = `select distinct toUInt32OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 622', () => {
    const query = `select distinct toInt64OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 623', () => {
    const query = `select distinct toUInt64OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 624', () => {
    const query = `select distinct toInt128OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 625', () => {
    const query = `select distinct toUInt128OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 626', () => {
    const query = `select distinct toInt256OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 627', () => {
    const query = `select distinct toUInt256OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 628', () => {
    const query = `select distinct toFloat32OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 629', () => {
    const query = `select distinct toFloat64OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 630', () => {
    const query = `select distinct toDecimal32OrDefault(d, 3) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 631', () => {
    const query = `select distinct toDecimal64OrDefault(d, 3) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 632', () => {
    const query = `select distinct toDecimal128OrDefault(d, 3) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 633', () => {
    const query = `select distinct toDecimal256OrDefault(d, 3) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 634', () => {
    const query = `select distinct toDateOrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 635', () => {
    const query = `select distinct toDate32OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 636', () => {
    const query = `select distinct toDateTimeOrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 637', () => {
    const query = `select distinct toIPv4OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 638', () => {
    const query = `select distinct toIPv6OrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 639', () => {
    const query = `select distinct toUUIDOrDefault(d) as res from t order by res;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 640', () => {
    const query = `SELECT 'DATA';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 641', () => {
    const query = `SELECT * FROM t0 FORMAT PrettyMonoBlock;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 642', () => {
    const query = `SELECT 'NUMBER OF ROWS IN FIRST SHOULD BE EQUAL TO SECOND';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 643', () => {
    const query = `SELECT 'FISRT';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 644', () => {
    const query = `SELECT left.c2 FROM t0 AS left LEFT ANTI JOIN t0 AS right_0 ON ((left.c0)=(right_0.c1))
WHERE (abs ((- ((sign (right_0.c1))))));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 645', () => {
    const query = `SELECT 'SECOND';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 646', () => {
    const query = `SELECT SUM(check <> 0) FROM
(
SELECT (abs ((- ((sign (right_0.c1)))))) AS \`check\`
FROM t0 AS left
LEFT ANTI JOIN t0 AS right_0 ON ((left.c0)=(right_0.c1))
);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 647', () => {
    const query = `SELECT 'TO DEBUG I TOOK JUST A SUBQUERY AND IT HAS 1 ROW';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 648', () => {
    const query = `SELECT 'THIRD';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 649', () => {
    const query = `SELECT (abs ((- ((sign (right_0.c1)))))) AS \`check\` FROM t0 AS left
LEFT ANTI JOIN t0 AS right_0 ON ((left.c0)=(right_0.c1));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 650', () => {
    const query = `SELECT 'AND I ADDED SINGLE CONDITION THAT CONDITION <>0 THAT IS 1 IN THIRD QUERY AND IT HAS NO RESULT!!!';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 651', () => {
    const query = `SELECT 'FOURTH';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 652', () => {
    const query = `SELECT (abs ((- ((sign (right_0.c1)))))) AS \`check\` FROM t0 AS left
LEFT ANTI JOIN t0 AS right_0 ON ((left.c0)=(right_0.c1))
WHERE check <> 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 653', () => {
    const query = `SELECT Name,
uniqExactMerge(Value.\`AggregateFunction(uniqExact, Int64)\`) AS Value
FROM test_agg_variant
GROUP BY Name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 654', () => {
    const query = `SELECT Name,
avgMerge(Value.\`AggregateFunction(avg, Int64)\`) AS Value
FROM test_agg_variant
GROUP BY Name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 655', () => {
    const query = `SELECT Name,
uniqExactMerge(Value.\`AggregateFunction(uniqExact, Int64)\`) AS ValueUniq,
avgMerge(Value.\`AggregateFunction(avg, Int64)\`) AS ValueAvg
FROM test_agg_variant
GROUP BY Name;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 656', () => {
    const query = `select hex(countState(if(toNullable(number % 2 = 0), number, null))) from numbers(5) settings optimize_rewrite_aggregate_function_with_if=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 657', () => {
    const query = `select toTypeName(countState(if(toNullable(number % 2 = 0), number, null))) from numbers(5) settings optimize_rewrite_aggregate_function_with_if=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 658', () => {
    const query = `select arrayStringConcat(arraySlice(splitByString(', ', trimLeft(explain)), 2), ', ') from (explain query tree select hex(countState(if(toNullable(number % 2 = 0), number, null))) from numbers(5) settings optimize_rewrite_aggregate_function_with_if=1) where explain like '%AggregateFunction%';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 659', () => {
    const query = `select toTypeName(uniqState(if(toNullable(number % 2 = 0), number, null))) from numbers(5) settings optimize_rewrite_aggregate_function_with_if=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 660', () => {
    const query = `select hex(uniqState(if(toNullable(number % 2 = 0), number, null))) from numbers(5) settings optimize_rewrite_aggregate_function_with_if=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 661', () => {
    const query = `select arrayStringConcat(arraySlice(splitByString(', ', trimLeft(explain)), 2), ', ') from (explain query tree select hex(uniqState(if(toNullable(number % 2 = 0), number, null))) from numbers(5) settings optimize_rewrite_aggregate_function_with_if=1) where explain like '%AggregateFunction%';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 662', () => {
    const query = `select '----';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 663', () => {
    const query = `select if(equals(materialize('abc'), 'aws.lambda.duration'), if(toFloat64(materialize('x86_74')) < 50.0000, 0, 1), 0) settings short_circuit_function_evaluation='enable';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 664', () => {
    const query = `select if(equals(materialize('abc'), 'aws.lambda.duration'), if(toFloat64(materialize('x86_74')) < 50.0000, 0, 1), 0) settings short_circuit_function_evaluation='force_enable';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 665', () => {
    const query = `SELECT lagInFrame(2::UInt128, 2, number) OVER w FROM numbers(10) WINDOW w AS (ORDER BY number);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 666', () => {
    const query = `SELECT leadInFrame(2::UInt128, 2, number) OVER w FROM numbers(10) WINDOW w AS (ORDER BY number);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 667', () => {
    const query = `SELECT lagInFrame(2::UInt64, 2, number) OVER w FROM numbers(10) WINDOW w AS (ORDER BY number);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 668', () => {
    const query = `SELECT leadInFrame(2::UInt64, 2, number) OVER w FROM numbers(10) WINDOW w AS (ORDER BY number);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 669', () => {
    const query = `SELECT number,
YYYYMMDDToDate(1, toLowCardinality(11), max(YYYYMMDDToDate(YYYYMMDDToDate(toLowCardinality(1), 11, materialize(NULL), 19700101.1, 1, 27, 7, materialize(toUInt256(37)), 9, 19, 9), 1, toUInt128(11), NULL, 19700101.1, 1, 27, 7, 37, 9, 19, 9), toUInt256(30)) IGNORE NULLS OVER w, NULL, 19700101.1, toNullable(1), 27, materialize(7), 37, 9, 19, 9),
p,
pp,
lagInFrame(number, number - pp) OVER w AS lag2,
lagInFrame(number, number - pp, number * 11) OVER w AS lag,
leadInFrame(number, number - pp, number * 11) OVER w AS lead
FROM
(
SELECT
number,
intDiv(number, 5) AS p,
p * 5 AS pp
FROM numbers(16)
)
WHERE toLowCardinality(1)
WINDOW w AS (PARTITION BY p ORDER BY number ASC NULLS FIRST ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)
ORDER BY number DESC NULLS LAST;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 670', () => {
    const query = `SELECT intDiv(number, 2) AS k,
sumArgMax(number, number % 20),
sumArgMax(number, leftPad(toString(number % 20), 5, '0')), -- Pad with 0 to preserve number ordering
sumArgMax(number, [number % 20, number % 20]),
sumArgMin(number, number % 20),
sumArgMin(number, leftPad(toString(number % 20), 5, '0')),
sumArgMin(number, [number % 20, number % 20]),
FROM
(
SELECT number
FROM system.numbers
LIMIT 65537
)
GROUP BY k
WITH TOTALS
ORDER BY k ASC
LIMIT 10
SETTINGS group_by_overflow_mode = 'any', totals_mode = 'before_having', max_rows_to_group_by = 100000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 671', () => {
    const query = `SELECT tuple() IN tuple(1) SETTINGS allow_experimental_map_type = 1; -- { serverError INCORRECT_ELEMENT_OF_SET } `;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 672', () => {
    const query = `select '1';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 673', () => {
    const query = `select distinct dynamicType(d) as type, isDynamicElementInSharedData(d) as flag from test order by type;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 674', () => {
    const query = `select '2';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 675', () => {
    const query = `select '3';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 676', () => {
    const query = `SELECT * FROM user_transactions ANY LEFT JOIN user_country USING (user_id)
WHERE
user_id = 1
AND country = 'US'
ORDER BY ALL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 677', () => {
    const query = `select 'Test with Date parameter';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 678', () => {
    const query = `select id from date_pv(dtparam=today());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 679', () => {
    const query = `select id from date_pv(dtparam=yesterday());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 680', () => {
    const query = `select id from date_pv(dtparam=yesterday()+1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 681', () => {
    const query = `select id from date_pv(dtparam='1974-04-07');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 682', () => {
    const query = `select id from date_pv(dtparam=toDate('1974-04-07'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 683', () => {
    const query = `select id from date_pv(dtparam=toString(toDate('1974-04-07')));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 684', () => {
    const query = `select id from date_pv(dtparam=toDate('1975-04-07'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 685', () => {
    const query = `select id from date_pv(dtparam=(select dt from date_table_pv where id = 2));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 686', () => {
    const query = `select 'Test with Date32 parameter';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 687', () => {
    const query = `select id from date32_pv(dtparam=today());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 688', () => {
    const query = `select id from date32_pv(dtparam=yesterday());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 689', () => {
    const query = `select id from date32_pv(dtparam=yesterday()+1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 690', () => {
    const query = `select id from date32_pv(dtparam='2199-12-31');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 691', () => {
    const query = `select id from date32_pv(dtparam=toDate32('1900-01-01'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 692', () => {
    const query = `select id from date32_pv(dtparam=(select dt from date32_table_pv where id = 3));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 693', () => {
    const query = `select id from date32_pv(dtparam=(select dt from date32_table_pv where id = 4));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 694', () => {
    const query = `select 'Test with UUID parameter';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 695', () => {
    const query = `select id from uuid_pv(uuidparam=serverUUID());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 696', () => {
    const query = `select id from uuid_pv(uuidparam=toUUID('11111111-2222-3333-4444-555555555555'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 697', () => {
    const query = `select id from uuid_pv(uuidparam='11111111-2222-3333-4444-555555555555');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 698', () => {
    const query = `select id from uuid_pv(uuidparam=(select uu from uuid_table_pv where id = 1));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 699', () => {
    const query = `select id from uuid_pv(uuidparam=(select uu from uuid_table_pv where id = 2));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 700', () => {
    const query = `select id from uuid_pv(uuidparam=generateUUIDv4()); -- { serverError UNKNOWN_QUERY_PARAMETER } select id from uuid_pv(uuidparam=(select generateUUIDv4()));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 701', () => {
    const query = `select 'Test with 2 parameters';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 702', () => {
    const query = `select id from date_pv2(dtparam=today(),intparam=1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 703', () => {
    const query = `select id from date_pv2(dtparam=today(),intparam=length('A'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 704', () => {
    const query = `select id from date_pv2(dtparam='1974-04-07',intparam=length('AAA'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 705', () => {
    const query = `select id from date_pv2(dtparam=toDate('1974-04-07'),intparam=length('BBB'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 706', () => {
    const query = `select 'Test with IPv4';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 707', () => {
    const query = `select id from ipv4_pv(ipv4param='116.106.34.242');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 708', () => {
    const query = `select id from ipv4_pv(ipv4param=toIPv4('116.106.34.243'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 709', () => {
    const query = `select id from ipv4_pv(ipv4param=(select ipaddr from ipv4_table_pv where id=3));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 710', () => {
    const query = `SELECT a, b, all FROM order_by_all ORDER BY all SETTINGS enable_order_by_all = 0, allow_experimental_parallel_reading_from_replicas=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 711', () => {
    const query = `SELECT a, b, all FROM order_by_all ORDER BY all SETTINGS enable_order_by_all = 0, allow_experimental_parallel_reading_from_replicas=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 712', () => {
    const query = `SELECT * FROM t_03209 WHERE a IN toDecimal32('33.3000', 4) SETTINGS allow_experimental_parallel_reading_from_replicas=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 713', () => {
    const query = `SELECT * FROM t_03209 WHERE a IN toDecimal32('33.3000', 4) SETTINGS allow_experimental_parallel_reading_from_replicas=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 714', () => {
    const query = `SELECT uniqTheta(tuple());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 715', () => {
    const query = `SELECT uniq(tuple());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 716', () => {
    const query = `SELECT number FROM numbers(2, 1) WHERE number % 2 = 0 SETTINGS max_rows_to_read = 10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 717', () => {
    const query = `SELECT '-----';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 718', () => {
    const query = `SELECT * FROM tab
ANY LEFT JOIN mem ON k1 = mem.k
ANY LEFT JOIN mem AS t ON k2 = t.k
ORDER BY tab.v
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 719', () => {
    const query = `SELECT * FROM tab
ANY LEFT JOIN mem ON k1 = mem.k
ANY RIGHT JOIN mem2 ON k2 = mem2.k
ORDER BY tab.v
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 720', () => {
    const query = `SELECT * FROM tab
FULL JOIN mem3 AS t1 ON k1 = t1.k
FULL JOIN mem3 AS t2 ON k2 = t2.k
ORDER BY tab.v
SETTINGS join_use_nulls = 1
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 721', () => {
    const query = `SELECT * FROM tab
FULL JOIN mem4 AS t1 ON tab.k1 = t1.k1 AND tab.k2 = t1.k2
FULL JOIN mem4 AS t2 ON tab.k1 = t2.k1 AND tab.k2 = t2.k2
ORDER BY tab.v
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 722', () => {
    const query = `SELECT * FROM tab
FULL JOIN mem4 AS t1 USING (k1, k2)
FULL JOIN mem4 AS t2 USING (k1, k2)
ORDER BY tab.v
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 723', () => {
    const query = `SELECT count() FROM ( EXPLAIN PLAN
SELECT * FROM tab
ANY LEFT JOIN mem AS t1 ON tab.k = t1.k
ANY LEFT JOIN mem AS t2 ON tab.k = t2.k
ANY LEFT JOIN mem AS t3 ON tab.k = t3.k
ANY LEFT JOIN mem AS t4 ON tab.k = t4.k
ANY RIGHT JOIN mem2 AS t5 ON tab.k = t5.k
ANY LEFT JOIN mem AS t6 ON tab.k = t6.k
ANY LEFT JOIN mem AS t7 ON tab.k = t7.k
)
WHERE explain like '%FilledJoin%'
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 724', () => {
    const query = `SELECT hex(groupArrayIntersectState([1]) AS a), toTypeName(a);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 725', () => {
    const query = `SELECT finalizeAggregation(CAST(unhex('010101'), 'AggregateFunction(groupArrayIntersect, Array(UInt8))'));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 726', () => {
    const query = `SELECT '1', arraySort(groupArrayIntersectMerge(v)) FROM grouparray;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 727', () => {
    const query = `SELECT '2', arraySort(groupArrayIntersectMerge(v)) FROM grouparray;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 728', () => {
    const query = `SELECT '3', arraySort(groupArrayIntersectMerge(v)) FROM grouparray;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 729', () => {
    const query = `SELECT '5', arraySort(groupArrayIntersectMerge(v)) FROM grouparray;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 730', () => {
    const query = `SELECT '6', arraySort(groupArrayIntersectMerge(v)) FROM grouparray;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 731', () => {
    const query = `SELECT '7', arraySort(groupArrayIntersectMerge(v)) FROM grouparray;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 732', () => {
    const query = `SELECT 'a', arraySort(groupArrayIntersectMerge(v)) FROM grouparray_string;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 733', () => {
    const query = `SELECT 'b', arraySort(groupArrayIntersectMerge(v)) FROM grouparray_string;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 734', () => {
    const query = `SELECT 'c', arraySort(groupArrayIntersectMerge(v)) FROM grouparray_string;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 735', () => {
    const query = `SELECT 'd', arraySort(groupArrayIntersectMerge(v)) FROM grouparray_string;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 736', () => {
    const query = `SELECT 'e', arraySort(groupArrayIntersectMerge(v)) FROM grouparray_string;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 737', () => {
    const query = `SELECT amount FROM realtimebuff__fuzz_19 t1 ORDER BY ALL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 738', () => {
    const query = `SELECT amount + 1 FROM realtimebuff__fuzz_19 t1 ORDER BY ALL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 739', () => {
    const query = `SELECT amount + 1 FROM realtimebuff__fuzz_20 t1 ORDER BY ALL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 740', () => {
    const query = `SELECT sum(amount) = 100 FROM realtimebuff__fuzz_19 ORDER BY ALL; -- { serverError CANNOT_CONVERT_TYPE } SELECT sum(amount) = 100 FROM realtimebuff__fuzz_20 ORDER BY ALL; -- { serverError CANNOT_CONVERT_TYPE }
SELECT amount FROM realtimebuff__fuzz_19 t1
JOIN (SELECT number :: UInt32 AS amount FROM numbers(3) ) t2 ON t1.amount = t2.amount
ORDER BY ALL
SETTINGS allow_experimental_analyzer = 0; -- { serverError UNKNOWN_IDENTIFIER }
SELECT amount FROM realtimebuff__fuzz_19 t1
JOIN (SELECT number :: UInt32 AS amount FROM numbers(3) ) t2 ON t1.amount = t2.amount
ORDER BY ALL
SETTINGS allow_experimental_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 741', () => {
    const query = `SELECT amount FROM realtimebuff__fuzz_19 t1 JOIN (SELECT number :: UInt32 AS amount FROM numbers(300) ) t2 ON t1.amount = t2.amount
ORDER BY ALL
SETTINGS allow_experimental_analyzer = 0; -- { serverError UNKNOWN_IDENTIFIER }
SELECT amount FROM realtimebuff__fuzz_19 t1
JOIN (SELECT number :: UInt32 AS amount FROM numbers(300) ) t2 ON t1.amount = t2.amount
ORDER BY ALL
SETTINGS allow_experimental_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 742', () => {
    const query = `SELECT t2.amount + 1 FROM (SELECT number :: UInt32 AS amount FROM numbers(300) ) t1 JOIN realtimebuff__fuzz_19 t2 USING (amount)
ORDER BY ALL
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 743', () => {
    const query = `SELECT t2.amount + 1 FROM (SELECT number :: UInt32 AS amount FROM numbers(300) ) t1 JOIN realtimebuff__fuzz_19 t2 ON t1.amount = t2.amount
ORDER BY ALL
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 744', () => {
    const query = `SELECT amount FROM realtimebuff__fuzz_19 t1 JOIN realtimebuff__fuzz_19 t2 ON t1.amount = t2.amount
; -- { serverError NOT_IMPLEMENTED,UNKNOWN_IDENTIFIER }
SELECT amount FROM realtimebuff__fuzz_19 t1
JOIN realtimebuff__fuzz_19 t2 ON t1.amount = t2.amount
JOIN realtimebuff__fuzz_19 t3 ON t1.amount = t3.amount
; -- { serverError NOT_IMPLEMENTED,AMBIGUOUS_COLUMN_NAME }
SELECT
toLowCardinality(1) + materialize(toLowCardinality(2))
FROM realtimebuff__fuzz_19
GROUP BY toLowCardinality(1)
FORMAT Null
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 745', () => {
    const query = `SELECT intDivOrZero(intDivOrZero(toLowCardinality(-128), toLowCardinality(-1)) = 0, materialize(toLowCardinality(4))) FROM realtimebuff__fuzz_19 GROUP BY materialize(toLowCardinality(-127)), intDivOrZero(0, 0) = toLowCardinality(toLowCardinality(0))
WITH TOTALS ORDER BY ALL DESC NULLS FIRST
FORMAT Null
;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 746', () => {
    const query = `select distinct arrayJoin(JSONAllPathsWithTypes(json)) as paths_with_types from test order by paths_with_types;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 747', () => {
    const query = `select distinct arrayJoin(JSONAllPathsWithTypes(arrayJoin(json.a.b))) as paths_with_types from test order by paths_with_types;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 748', () => {
    const query = `select distinct arrayJoin(JSONAllPathsWithTypes(arrayJoin(json.a.r[]))) as paths_with_types from test order by paths_with_types;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 749', () => {
    const query = `select json, json.a.b, json.a.b.c, json.a.b.c.d.e, json.a.b.b.c.d_0, json.a.b.b.c.d_1, json.a.b.b.c.d_2, json.a.b.b.c.d_3, json.a.b.b.c.d_4, json.a.r, json.a.r[], json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1, json.a.r[].b.c.d_2, json.a.r[].b.c.d_3, json.a.r[].b.c.d_4, json.^a, json.a.b.^b.c, json.a.r[].^b.c from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 750', () => {
    const query = `select json, json.a.b, json.a.b.c, json.a.b.c.d.e, json.a.b.b.c.d_0, json.a.b.b.c.d_1, json.a.b.b.c.d_2, json.a.b.b.c.d_3, json.a.b.b.c.d_4, json.a.r, json.a.r[], json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1, json.a.r[].b.c.d_2, json.a.r[].b.c.d_3, json.a.r[].b.c.d_4, json.^a, json.a.b.^b.c, json.a.r[].^b.c from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 751', () => {
    const query = `select json.a.b, json.a.b.c, json.a.b.c.d.e, json.a.b.b.c.d_0, json.a.b.b.c.d_1, json.a.b.b.c.d_2, json.a.b.b.c.d_3, json.a.b.b.c.d_4, json.a.r, json.a.r[], json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1, json.a.r[].b.c.d_2, json.a.r[].b.c.d_3, json.a.r[].b.c.d_4, json.^a, json.a.b.^b.c, json.a.r[].^b.c from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 752', () => {
    const query = `select json.a.b, json.a.b.c, json.a.b.c.d.e, json.a.b.b.c.d_0, json.a.b.b.c.d_1, json.a.b.b.c.d_2, json.a.b.b.c.d_3, json.a.b.b.c.d_4, json.a.r, json.a.r[], json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1, json.a.r[].b.c.d_2, json.a.r[].b.c.d_3, json.a.r[].b.c.d_4, json.^a, json.a.b.^b.c, json.a.r[].^b.c from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 753', () => {
    const query = `select count() from test where empty(json.a.r[].c.d.e) and empty(json.a.r[].b.c.d_0) and empty(json.a.r[].b.c.d_1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 754', () => {
    const query = `select count() from test where empty(json.a.r[].c.d.e.:\`Array(Nullable(Int64))\`) and empty(json.a.r[].b.c.d_0.:Int64) and empty(json.a.r[].b.c.d_1.:Int64);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 755', () => {
    const query = `select count() from test where arrayJoin(json.a.r[].c.d.e) is null and arrayJoin(json.a.r[].b.c.d_0) is null and arrayJoin(json.a.r[].b.c.d_1) is null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 756', () => {
    const query = `select count() from test where arrayJoin(json.a.r[].c.d.e.:\`Array(Nullable(Int64))\`) is null and arrayJoin(json.a.r[].b.c.d_0.:Int64) is null and arrayJoin(json.a.r[].b.c.d_1.:Int64) is null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 757', () => {
    const query = `select json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 758', () => {
    const query = `select json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 759', () => {
    const query = `select json.a.r[].c.d.e.:\`Array(Nullable(Int64))\`, json.a.r[].b.c.d_0.:Int64, json.a.r[].b.c.d_1.:Int64 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 760', () => {
    const query = `select json.a.r[].c.d.e.:\`Array(Nullable(Int64))\`, json.a.r[].b.c.d_0.:Int64, json.a.r[].b.c.d_1.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 761', () => {
    const query = `select json.a.r, json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 762', () => {
    const query = `select json.a.r, json.a.r[].c.d.e, json.a.r[].b.c.d_0, json.a.r[].b.c.d_1 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 763', () => {
    const query = `select json.a.r, json.a.r[].c.d.e.:\`Array(Nullable(Int64))\`, json.a.r[].b.c.d_0.:Int64, json.a.r[].b.c.d_1.:Int64 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 764', () => {
    const query = `select json.a.r, json.a.r[].c.d.e.:\`Array(Nullable(Int64))\`, json.a.r[].b.c.d_0.:Int64, json.a.r[].b.c.d_1.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 765', () => {
    const query = `select count() from test where empty(json.a.r[].^b) and empty(json.a.r[].^b.c) and empty(json.a.r[].b.c.d_0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 766', () => {
    const query = `select count() from test where empty(json.a.r[].^b) and empty(json.a.r[].^b.c) and empty(json.a.r[].b.c.d_0.:Int64);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 767', () => {
    const query = `select count() from test where empty(arrayJoin(json.a.r[].^b)) and empty(arrayJoin(json.a.r[].^b.c)) and arrayJoin(json.a.r[].b.c.d_0) is null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 768', () => {
    const query = `select count() from test where empty(arrayJoin(json.a.r[].^b)) and empty(arrayJoin(json.a.r[].^b.c)) and arrayJoin(json.a.r[].b.c.d_0.:Int64) is null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 769', () => {
    const query = `select json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 770', () => {
    const query = `select json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 771', () => {
    const query = `select json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0.:Int64 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 772', () => {
    const query = `select json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 773', () => {
    const query = `select json.a.r, json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 774', () => {
    const query = `select json.a.r, json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 775', () => {
    const query = `select json.a.r, json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0.:Int64 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 776', () => {
    const query = `select json.a.r, json.a.r[].^b, json.a.r[].^b.c, json.a.r[].b.c.d_0.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 777', () => {
    const query = `select json.non.existing.path, json.a.b.c, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:UUID, json.a.b.e, json.a.b.e.:String, json.a.b.e.:UUID, json.b.b.\`_0\`, json.b.b.\`_0\`.:Int64, json.b.b.\`_0\`.:UUID, json.b.b.\`_1\`, json.b.b.\`_1\`.:Int64, json.b.b.\`_1\`.:UUID, json.b.b.\`_2\`, json.b.b.\`_2\`.:Int64, json.b.b.\`_2\`.:UUID, json.b.b.\`_3\`, json.b.b.\`_3\`.:Int64, json.b.b.\`_3\`.:UUID, json.b.b.\`_4\`, json.b.b.\`_4\`.:Int64,  json.b.b.\`_4\`.:UUID, json.b.b.d, json.b.b.d.:Int64, json.b.b.d.:UUID, json.b.b.e, json.b.b.e.:String, json.b.b.e.:UUID, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:UUID, json.d.b, json.d.b.:Int64, json.d.b.:UUID, json.d.c, json.d.c.:Date, json.d.c.:UUID, json.^n, json.^a, json.^a.b, json.^b, json.^d from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 778', () => {
    const query = `select json.non.existing.path, json.a.b.c, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:UUID, json.a.b.e, json.a.b.e.:String, json.a.b.e.:UUID, json.b.b.\`_0\`, json.b.b.\`_0\`.:Int64, json.b.b.\`_0\`.:UUID, json.b.b.\`_1\`, json.b.b.\`_1\`.:Int64, json.b.b.\`_1\`.:UUID, json.b.b.\`_2\`, json.b.b.\`_2\`.:Int64, json.b.b.\`_2\`.:UUID, json.b.b.\`_3\`, json.b.b.\`_3\`.:Int64, json.b.b.\`_3\`.:UUID, json.b.b.\`_4\`, json.b.b.\`_4\`.:Int64,  json.b.b.\`_4\`.:UUID, json.b.b.d, json.b.b.d.:Int64, json.b.b.d.:UUID, json.b.b.e, json.b.b.e.:String, json.b.b.e.:UUID, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:UUID, json.d.b, json.d.b.:Int64, json.d.b.:UUID, json.d.c, json.d.c.:Date, json.d.c.:UUID, json.^n, json.^a, json.^a.b, json.^b, json.^d from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 779', () => {
    const query = `select json, json.non.existing.path, json.a.b.c, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:UUID, json.a.b.e, json.a.b.e.:String, json.a.b.e.:UUID, json.b.b.\`_0\`, json.b.b.\`_0\`.:Int64, json.b.b.\`_0\`.:UUID, json.b.b.\`_1\`, json.b.b.\`_1\`.:Int64, json.b.b.\`_1\`.:UUID, json.b.b.\`_2\`, json.b.b.\`_2\`.:Int64, json.b.b.\`_2\`.:UUID, json.b.b.\`_3\`, json.b.b.\`_3\`.:Int64, json.b.b.\`_3\`.:UUID, json.b.b.\`_4\`, json.b.b.\`_4\`.:Int64,  json.b.b.\`_4\`.:UUID, json.b.b.d, json.b.b.d.:Int64, json.b.b.d.:UUID, json.b.b.e, json.b.b.e.:String, json.b.b.e.:UUID, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:UUID, json.d.b, json.d.b.:Int64, json.d.b.:UUID, json.d.c, json.d.c.:Date, json.d.c.:UUID, json.^n, json.^a, json.^a.b, json.^b, json.^d from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 780', () => {
    const query = `select json, json.non.existing.path, json.a.b.c, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:UUID, json.a.b.e, json.a.b.e.:String, json.a.b.e.:UUID, json.b.b.\`_0\`, json.b.b.\`_0\`.:Int64, json.b.b.\`_0\`.:UUID, json.b.b.\`_1\`, json.b.b.\`_1\`.:Int64, json.b.b.\`_1\`.:UUID, json.b.b.\`_2\`, json.b.b.\`_2\`.:Int64, json.b.b.\`_2\`.:UUID, json.b.b.\`_3\`, json.b.b.\`_3\`.:Int64, json.b.b.\`_3\`.:UUID, json.b.b.\`_4\`, json.b.b.\`_4\`.:Int64,  json.b.b.\`_4\`.:UUID, json.b.b.d, json.b.b.d.:Int64, json.b.b.d.:UUID, json.b.b.e, json.b.b.e.:String, json.b.b.e.:UUID, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:UUID, json.d.b, json.d.b.:Int64, json.d.b.:UUID, json.d.c, json.d.c.:Date, json.d.c.:UUID, json.^n, json.^a, json.^a.b, json.^b, json.^d from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 781', () => {
    const query = `select count() from test where json.non.existing.path is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 782', () => {
    const query = `select count() from test where json.non.existing.path.:String is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 783', () => {
    const query = `select json.non.existing.path from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 784', () => {
    const query = `select json.non.existing.path.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 785', () => {
    const query = `select json.non.existing.path, json.non.existing.path.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 786', () => {
    const query = `select json, json.non.existing.path from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 787', () => {
    const query = `select json, json.non.existing.path.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 788', () => {
    const query = `select json, json.non.existing.path, json.non.existing.path.:Int64 from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 789', () => {
    const query = `select json, json.non.existing.path, json.non.existing.path.:Int64 from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 790', () => {
    const query = `select count() from test where json.a.b.c == 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 791', () => {
    const query = `select json.a.b.c from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 792', () => {
    const query = `select json.a.b.c from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 793', () => {
    const query = `select json, json.a.b.c from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 794', () => {
    const query = `select json, json.a.b.c from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 795', () => {
    const query = `select count() from test where json.b.b.e is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 796', () => {
    const query = `select count() from test where json.b.b.e.:String is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 797', () => {
    const query = `select json.b.b.e from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 798', () => {
    const query = `select json.b.b.e from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 799', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 800', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 801', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 802', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 803', () => {
    const query = `select json, json.b.b.e from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 804', () => {
    const query = `select json, json.b.b.e from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 805', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 806', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 807', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 808', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 809', () => {
    const query = `select count() from test where json.b.b.e is Null and json.a.b.d is Null ;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 810', () => {
    const query = `select count() from test where json.b.b.e.:String is Null and json.a.b.d.:Int64 is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 811', () => {
    const query = `select json.b.b.e, json.a.b.d from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 812', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 813', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 814', () => {
    const query = `select json, json.b.b.e, json.a.b.d from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 815', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 816', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 817', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 818', () => {
    const query = `select count() from test where json.b.b.e is Null and json.d.a is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 819', () => {
    const query = `select count() from test where json.b.b.e.:String is Null and empty(json.d.a.:\`Array(Nullable(Int64))\`);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 820', () => {
    const query = `select json.b.b.e, json.d.a from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 821', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 822', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 823', () => {
    const query = `select json, json.b.b.e, json.d.a from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 824', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 825', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 826', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 827', () => {
    const query = `select count() from test where json.b.b.e is Null and json.d.a is Null and json.d.b is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 828', () => {
    const query = `select count() from test where json.b.b.e.:String is Null and empty(json.d.a.:\`Array(Nullable(Int64))\`) and json.d.b.:Int64 is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 829', () => {
    const query = `select json.b.b.e, json.d.a, json.d.b from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 830', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 831', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 832', () => {
    const query = `select json, json.b.b.e, json.d.a, json.d.b from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 833', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 834', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 835', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 836', () => {
    const query = `select count() from test where json.d.a is Null and json.d.b is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 837', () => {
    const query = `select count() from test where empty(json.d.a.:\`Array(Nullable(Int64))\`) and json.d.b.:Int64 is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 838', () => {
    const query = `select json.d.a, json.d.b from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 839', () => {
    const query = `select json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 840', () => {
    const query = `select json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 841', () => {
    const query = `select json, json.d.a, json.d.b from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 842', () => {
    const query = `select json, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 843', () => {
    const query = `select json, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 844', () => {
    const query = `select json, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 845', () => {
    const query = `select count() from test where json.d.a is Null and json.b.b.\`_1\` is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 846', () => {
    const query = `select count() from test where empty(json.d.a.:\`Array(Nullable(Int64))\`) and json.b.b.\`_1\`.:Int64 is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 847', () => {
    const query = `select json.d.a, json.b.b.\`_1\` from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 848', () => {
    const query = `select json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_1\`.:Int64, json.b.b.\`_1\`.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 849', () => {
    const query = `select json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_1\`.:Int64, json.b.b, json.b.b.\`_1\`.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 850', () => {
    const query = `select json, json.d.a, json.b.b.\`_1\` from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 851', () => {
    const query = `select json, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_1\`.:Int64, json.b.b.\`_1\`.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 852', () => {
    const query = `select json, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_1\`.:Int64, json.b.b, json.b.b.\`_1\`.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 853', () => {
    const query = `select json, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_1\`.:Int64, json.b.b, json.b.b.\`_1\`.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 854', () => {
    const query = `select count() from test where empty(json.^a) and json.a.b.c == 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 855', () => {
    const query = `select json.^a, json.a.b.c from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 856', () => {
    const query = `select json, json.^a, json.a.b.c from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 857', () => {
    const query = `select json, json.^a, json.a.b.c from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 858', () => {
    const query = `select count() from test where empty(json.^a) and json.a.b.d is Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 859', () => {
    const query = `select json.^a, json.a.b.d from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 860', () => {
    const query = `select json.^a, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 861', () => {
    const query = `select json.^a, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 862', () => {
    const query = `select json, json.^a, json.a.b.d from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 863', () => {
    const query = `select json, json.^a, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 864', () => {
    const query = `select json, json.^a, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 865', () => {
    const query = `select json, json.^a, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 866', () => {
    const query = `select json.non.existing.path, json.a.b.c, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:UUID, json.a.b.e, json.a.b.e.:String, json.a.b.e.:UUID, json.b.b.\`_25\`, json.b.b.\`_25\`.:Int64, json.b.b.\`_25\`.:UUID, json.b.b.\`_26\`, json.b.b.\`_26\`.:Int64, json.b.b.\`_26\`.:UUID, json.b.b.\`_27\`, json.b.b.\`_27\`.:Int64, json.b.b.\`_27\`.:UUID, json.b.b.\`_28\`, json.b.b.\`_28\`.:Int64, json.b.b.\`_28\`.:UUID, json.b.b.\`_29\`, json.b.b.\`_29\`.:Int64,  json.b.b.\`_29\`.:UUID, json.b.b.d, json.b.b.d.:Int64, json.b.b.d.:UUID, json.b.b.e, json.b.b.e.:String, json.b.b.e.:UUID, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:UUID, json.d.b, json.d.b.:Int64, json.d.b.:UUID, json.d.c, json.d.c.:Date, json.d.c.:UUID, json.^n, json.^a, json.^a.b, json.^b, json.^d from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 867', () => {
    const query = `select json, json.non.existing.path, json.a.b.c, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:UUID, json.a.b.e, json.a.b.e.:String, json.a.b.e.:UUID, json.b.b.\`_25\`, json.b.b.\`_25\`.:Int64, json.b.b.\`_25\`.:UUID, json.b.b.\`_26\`, json.b.b.\`_26\`.:Int64, json.b.b.\`_26\`.:UUID, json.b.b.\`_27\`, json.b.b.\`_27\`.:Int64, json.b.b.\`_27\`.:UUID, json.b.b.\`_28\`, json.b.b.\`_28\`.:Int64, json.b.b.\`_28\`.:UUID, json.b.b.\`_29\`, json.b.b.\`_29\`.:Int64,  json.b.b.\`_29\`.:UUID, json.b.b.d, json.b.b.d.:Int64, json.b.b.d.:UUID, json.b.b.e, json.b.b.e.:String, json.b.b.e.:UUID, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:UUID, json.d.b, json.d.b.:Int64, json.d.b.:UUID, json.d.c, json.d.c.:Date, json.d.c.:UUID, json.^n, json.^a, json.^a.b, json.^b, json.^d from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 868', () => {
    const query = `select json.non.existing.path from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 869', () => {
    const query = `select json.non.existing.path.:Int64 from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 870', () => {
    const query = `select json.non.existing.path, json.non.existing.path.:Int64 from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 871', () => {
    const query = `select json, json.non.existing.path from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 872', () => {
    const query = `select json, json.non.existing.path.:Int64 from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 873', () => {
    const query = `select json, json.non.existing.path, json.non.existing.path.:Int64 from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 874', () => {
    const query = `select json.a.b.c from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 875', () => {
    const query = `select json, json.a.b.c from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 876', () => {
    const query = `select json.b.b.e from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 877', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 878', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 879', () => {
    const query = `select json, json.b.b.e from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 880', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 881', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 882', () => {
    const query = `select json.b.b.e, json.a.b.d from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 883', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 884', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 885', () => {
    const query = `select json, json.b.b.e, json.a.b.d from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 886', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 887', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 888', () => {
    const query = `select json.b.b.e, json.d.a from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 889', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 890', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 891', () => {
    const query = `select json, json.b.b.e, json.d.a from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 892', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 893', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 894', () => {
    const query = `select json.b.b.e, json.d.a, json.d.b from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 895', () => {
    const query = `select json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 896', () => {
    const query = `select json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 897', () => {
    const query = `select json, json.b.b.e, json.d.a, json.d.b from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 898', () => {
    const query = `select json, json.b.b.e.:String, json.b.b.e.:Date, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 899', () => {
    const query = `select json, json.b.b.e, json.b.b.e.:String, json.b.b.e.:Date, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 900', () => {
    const query = `select json.d.a, json.d.b from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 901', () => {
    const query = `select json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 902', () => {
    const query = `select json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 903', () => {
    const query = `select json, json.d.a, json.d.b from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 904', () => {
    const query = `select json, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 905', () => {
    const query = `select json, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.d.b, json.d.b.:Int64, json.d.b.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 906', () => {
    const query = `select json.d.a, json.b.b.\`_26\` from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 907', () => {
    const query = `select json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_26\`.:Int64, json.b.b.\`_26\`.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 908', () => {
    const query = `select json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_26\`.:Int64, json.b.b, json.b.b.\`_26\`.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 909', () => {
    const query = `select json, json.d.a, json.b.b.\`_26\` from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 910', () => {
    const query = `select json, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_26\`.:Int64, json.b.b.\`_26\`.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 911', () => {
    const query = `select json, json.d.a, json.d.a.:\`Array(Nullable(Int64))\`, json.d.a.:Date, json.b.b.\`_26\`.:Int64, json.b.b, json.b.b.\`_26\`.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 912', () => {
    const query = `select json.^a, json.a.b.c from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 913', () => {
    const query = `select json, json.^a, json.a.b.c from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 914', () => {
    const query = `select json.^a, json.a.b.d from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 915', () => {
    const query = `select json.^a, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 916', () => {
    const query = `select json.^a, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 917', () => {
    const query = `select json, json.^a, json.a.b.d from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 918', () => {
    const query = `select json, json.^a, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 919', () => {
    const query = `select json, json.^a, json.a.b.d, json.a.b.d.:Int64, json.a.b.d.:Date from test order by id format JSONColumns;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 920', () => {
    const query = `SELECT replication_lag FROM system.clusters WHERE cluster IN ('rdb1', 'rdb2') ORDER BY cluster ASC, replica_num ASC;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 921', () => {
    const query = `SELECT name
FROM system.projection_parts
WHERE (database = currentDatabase()) AND (\`table\` = 'tp') AND (active = 1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 922', () => {
    const query = `SELECT left.x, (right.x IS NULL)::Boolean FROM left LEFT OUTER JOIN right ON left.x = right.x GROUP BY ALL;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 923', () => {
    const query = `SELECT isNullable(number)::Boolean, now() FROM numbers(2) GROUP BY isNullable(number)::Boolean, now() FORMAT Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 924', () => {
    const query = `SELECT isNull(number)::Boolean, now() FROM numbers(2) GROUP BY isNull(number)::Boolean, now() FORMAT Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 925', () => {
    const query = `SELECT (number IS NULL)::Boolean, now() FROM numbers(2) GROUP BY (number IS NULL)::Boolean, now() FORMAT Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 926', () => {
    const query = `SELECT formatQuery('SYSTEM SYNC REPLICA db.table LIGHTWEIGHT');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 927', () => {
    const query = `SELECT d, c, row_number() over (partition by d order by c) as c8 FROM t qualify c8=1 order by d settings max_threads=2, allow_experimental_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 928', () => {
    const query = `SELECT d, c, row_number() over (partition by d order by c) as c8 FROM t order by d, c8 settings max_threads=2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 929', () => {
    const query = `SELECT * FROM ( SELECT c, min(w) OVER (PARTITION BY s ORDER BY c ASC, s ASC, w ASC)
FROM t limit toUInt64(-1))
WHERE c = -755809149;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 930', () => {
    const query = `SELECT 'Negative test of overlay';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 931', () => {
    const query = `SELECT overlay('hello', 'world'); -- { serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH } SELECT overlay('hello', 'world', 2, 3, 'extra'); -- { serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH }
SELECT overlay(123, 'world', 2, 3); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT overlay('hello', 456, 2, 3); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT overlay('hello', 'world', 'two', 3); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT overlay('hello', 'world', 2, 'three'); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT 'Test with 3 arguments and various combinations of const/non-const columns';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 932', () => {
    const query = `SELECT overlay('Spark SQL', '_', 6), overlayUTF8('Spark SQL和CH', '_', 6);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 933', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), '_', 6), overlayUTF8(materialize('Spark SQL和CH'), '_', 6);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 934', () => {
    const query = `SELECT overlay('Spark SQL', materialize('_'), 6), overlayUTF8('Spark SQL和CH', materialize('_'), 6);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 935', () => {
    const query = `SELECT overlay('Spark SQL', '_', materialize(6)), overlayUTF8('Spark SQL和CH', '_', materialize(6));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 936', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), materialize('_'), 6), overlayUTF8(materialize('Spark SQL和CH'), materialize('_'), 6);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 937', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), '_', materialize(6)), overlayUTF8(materialize('Spark SQL和CH'), '_', materialize(6));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 938', () => {
    const query = `SELECT overlay('Spark SQL', materialize('_'), materialize(6)), overlayUTF8('Spark SQL和CH', materialize('_'), materialize(6));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 939', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), materialize('_'), materialize(6)), overlayUTF8(materialize('Spark SQL和CH'), materialize('_'), materialize(6));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 940', () => {
    const query = `SELECT 'Test with 4 arguments and various combinations of const/non-const columns';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 941', () => {
    const query = `SELECT overlay('Spark SQL', 'ANSI ', 7, 0), overlayUTF8('Spark SQL和CH', 'ANSI ', 7, 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 942', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), 'ANSI ', 7, 0), overlayUTF8(materialize('Spark SQL和CH'), 'ANSI ', 7, 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 943', () => {
    const query = `SELECT overlay('Spark SQL', materialize('ANSI '), 7, 0), overlayUTF8('Spark SQL和CH', materialize('ANSI '), 7, 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 944', () => {
    const query = `SELECT overlay('Spark SQL', 'ANSI ', materialize(7), 0), overlayUTF8('Spark SQL和CH', 'ANSI ', materialize(7), 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 945', () => {
    const query = `SELECT overlay('Spark SQL', 'ANSI ', 7, materialize(0)), overlayUTF8('Spark SQL和CH', 'ANSI ', 7, materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 946', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), materialize('ANSI '), 7, 0), overlayUTF8(materialize('Spark SQL和CH'), materialize('ANSI '), 7, 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 947', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), 'ANSI ', materialize(7), 0), overlayUTF8(materialize('Spark SQL和CH'), 'ANSI ', materialize(7), 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 948', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), 'ANSI ', 7, materialize(0)), overlayUTF8(materialize('Spark SQL和CH'), 'ANSI ', 7, materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 949', () => {
    const query = `SELECT overlay('Spark SQL', materialize('ANSI '), materialize(7), 0), overlayUTF8('Spark SQL和CH', materialize('ANSI '), materialize(7), 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 950', () => {
    const query = `SELECT overlay('Spark SQL', materialize('ANSI '), 7, materialize(0)), overlayUTF8('Spark SQL和CH', materialize('ANSI '), 7, materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 951', () => {
    const query = `SELECT overlay('Spark SQL', 'ANSI ', materialize(7), materialize(0)), overlayUTF8('Spark SQL和CH', 'ANSI ', materialize(7), materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 952', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), materialize('ANSI '), materialize(7), 0), overlayUTF8(materialize('Spark SQL和CH'), materialize('ANSI '), materialize(7), 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 953', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), materialize('ANSI '), 7, materialize(0)), overlayUTF8(materialize('Spark SQL和CH'), materialize('ANSI '), 7, materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 954', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), 'ANSI ', materialize(7), materialize(0)), overlayUTF8(materialize('Spark SQL和CH'), 'ANSI ', materialize(7), materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 955', () => {
    const query = `SELECT overlay('Spark SQL', materialize('ANSI '), materialize(7), materialize(0)), overlayUTF8('Spark SQL和CH', materialize('ANSI '), materialize(7), materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 956', () => {
    const query = `SELECT overlay(materialize('Spark SQL'), materialize('ANSI '), materialize(7), materialize(0)), overlayUTF8(materialize('Spark SQL和CH'), materialize('ANSI '), materialize(7), materialize(0));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 957', () => {
    const query = `SELECT 'Test with special offset values';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 958', () => {
    const query = `SELECT 'Test with special length values';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 959', () => {
    const query = `SELECT 'Test with special input and replace values';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 960', () => {
    const query = `SELECT overlay('', '_', 6), overlayUTF8('', '_', 6);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 961', () => {
    const query = `SELECT overlay('Spark SQL', '', 6), overlayUTF8('Spark SQL和CH', '', 6);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 962', () => {
    const query = `SELECT overlay('', 'ANSI ', 7, 0), overlayUTF8('', 'ANSI ', 7, 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 963', () => {
    const query = `SELECT overlay('Spark SQL', '', 7, 0), overlayUTF8('Spark SQL和CH', '', 7, 0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 964', () => {
    const query = `select materialize('{}')::JSON;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 965', () => {
    const query = `select materialize('{"a" : 42, "b" : "Hello"}')::JSON;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 966', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 967', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(a.b.c.d Bool);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 968', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(SKIP a.b.c.d);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 969', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(SKIP a.b.c);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 970', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(SKIP a.b);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 971', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(SKIP a);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 972', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(SKIP REGEXP '.*a.*b');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 973', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(SKIP REGEXP '.*a.*');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 974', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(SKIP REGEXP '.*');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 975', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON as json, JSONAllPathsWithTypes(json), JSONDynamicPathsWithTypes(json), JSONSharedDataPathsWithTypes(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 976', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(max_dynamic_paths = 2) as json, JSONAllPathsWithTypes(json), JSONDynamicPathsWithTypes(json), JSONSharedDataPathsWithTypes(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 977', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(max_dynamic_paths = 1) as json, JSONAllPathsWithTypes(json), JSONDynamicPathsWithTypes(json), JSONSharedDataPathsWithTypes(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 978', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(max_dynamic_paths = 0) as json, JSONAllPathsWithTypes(json), JSONDynamicPathsWithTypes(json), JSONSharedDataPathsWithTypes(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 979', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(max_dynamic_paths = 2, max_dynamic_types=0) as json, JSONAllPathsWithTypes(json), JSONDynamicPathsWithTypes(json), JSONSharedDataPathsWithTypes(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 980', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(max_dynamic_paths = 1, max_dynamic_types=0) as json, JSONAllPathsWithTypes(json), JSONDynamicPathsWithTypes(json), JSONSharedDataPathsWithTypes(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 981', () => {
    const query = `select materialize('{"a" : {"b" : {"c" : {"d" : 42}, "e" : 43}, "f" : 44}, "g" : 44}')::JSON(max_dynamic_paths = 0, max_dynamic_types=0) as json, JSONAllPathsWithTypes(json), JSONDynamicPathsWithTypes(json), JSONSharedDataPathsWithTypes(json);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 982', () => {
    const query = `SELECT sipHash64(());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 983', () => {
    const query = `SELECT sipHash64((), ());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 984', () => {
    const query = `SELECT sipHash64((), 1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 985', () => {
    const query = `SELECT sipHash64(1, ());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 986', () => {
    const query = `SELECT sipHash64(1, (), 1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 987', () => {
    const query = `SELECT sipHash64((), 1, ());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 988', () => {
    const query = `SELECT sipHash64((), (1, 2));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 989', () => {
    const query = `SELECT sipHash64((1, 2), ());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 990', () => {
    const query = `SELECT sipHash64((), (1, 2), ());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 991', () => {
    const query = `SELECT sipHash64((1, 2), (), (3, 4));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 992', () => {
    const query = `SELECT sipHash64(materialize(()));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 993', () => {
    const query = `SELECT sipHash64(materialize(()), materialize(()));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 994', () => {
    const query = `SELECT sipHash64(materialize(()), 1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 995', () => {
    const query = `SELECT sipHash64(1, materialize(()));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 996', () => {
    const query = `SELECT sipHash64(1, materialize(()), 1);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 997', () => {
    const query = `SELECT sipHash64((), 1, materialize(()));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 998', () => {
    const query = `SELECT sipHash64(materialize(()), (1, 2));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 999', () => {
    const query = `SELECT sipHash64((1, 2), materialize(()));`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors select: 1000', () => {
    const query = `SELECT sipHash64(materialize(()), (1, 2), ());`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});
