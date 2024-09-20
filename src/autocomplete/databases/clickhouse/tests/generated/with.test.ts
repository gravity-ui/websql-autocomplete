/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors with: 1', () => {
    const query = `WITH (SELECT groupConcat(',')(st) FROM t) AS a, (SELECT groupConcat(',')(st :: String) FROM t) AS b
SELECT equals(a, b);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 2', () => {
    const query = `with activity as ( select
groupUniqArrayState(toDate('2025-01-01 01:00:00')) as dates_seen,
toDateTime('2025-01-01 01:00:00') as last_seen
union all
select
groupUniqArrayState(toDate('2023-11-11 11:11:11')) as dates_seen,
toDateTime('2023-11-11 11:11:11') as last_seen
)
select last_seen from activity
where last_seen < toDateTime('2020-01-01 00:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 3', () => {
    const query = `WITH wkt(CAST([[(1, 1), (2, 2), (3, 3), (1, 1)]], 'Array(Array(Tuple(Float64, Float64)))')) as x SELECT x, toTypeName(x), readWKTPolygon(x) as y, toTypeName(y);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 4', () => {
    const query = `WITH ( SELECT CAST(toFixedString(toFixedString(materialize(toFixedString('111111111111111111111111111111111111111', 39)), 39), 39), 'UInt128')
) AS v
SELECT
coalesce(materialize(toLowCardinality(toNullable(1))), 10, NULL),
max(v)
FROM remote('127.0.0.{1,2}', currentDatabase(), test__fuzz_21)
GROUP BY
coalesce(NULL),
coalesce(1, 10, 10, materialize(NULL));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 5', () => {
    const query = `WITH '{ "v":1.1}' AS raw SELECT JSONExtract(raw, 'float') AS float32_1, JSONExtract(concat(tuple('1970-01-05', 10, materialize(10), 10, 10, 10, toUInt256(10), 10, toNullable(10), 10, 10), materialize(toUInt256(0)), ', ', 2, 2, toLowCardinality(toLowCardinality(2))), raw, toLowCardinality('v'), 'Float32') AS float32_2, JSONExtractFloat(raw) AS float64_1, JSONExtract(raw, 'v', 'double') AS float64_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 6', () => {
    const query = `WITH number - 12 AS offset SELECT offset, overlay('Spark SQL', '__', offset), overlayUTF8('Spark SQL和CH', '之', offset) FROM numbers(26) ORDER BY number;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 7', () => {
    const query = `WITH number - 1 AS length SELECT length, overlay('Spark SQL', 'ANSI ', 7, length), overlayUTF8('Spark SQL和CH', 'ANSI ', 7, length) FROM numbers(8) ORDER BY number;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 8', () => {
    const query = `WITH (num > 1) AND (arraySum(arrayMap(y -> ((y > 1) AND (y < num) AND ((num % y) = 0)), range(toUInt64(sqrt(num)) + 1))) = 0) AS is_prime_slow
SELECT
num,
ds,
FROM
(
WITH
arraySum(arrayMap(y -> toUInt8(y), splitByString('', toString(num)))) AS digits_sum
SELECT
1 + (number * 2) AS num,
digits_sum AS ds
FROM numbers_mt(10000)
WHERE ds IN (
WITH
(number > 1) AND (arraySum(arrayMap(y -> ((y > 1) AND (y < number) AND ((number % y) = 0)), range(toUInt64(sqrt(number)) + 1))) = 0) AS is_prime_slow
SELECT number
FROM numbers(180 + 1)
WHERE is_prime_slow
)
)
WHERE is_prime_slow
ORDER BY num ASC
LIMIT 998, 1
SETTINGS max_block_size = 64, max_threads=16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 9', () => {
    const query = `WITH 4096 AS w, 4096 AS h, w * h AS pixels,
arrayJoin(coverage) AS num,
num DIV (32768 * 32768 DIV pixels) AS idx,
mortonDecode(2, idx) AS coord,
255 AS b,
least(255, uniq(test_name)) AS r,
255 * uniq(test_name) / (max(uniq(test_name)) OVER ()) AS g
SELECT r::UInt8, g::UInt8, b::UInt8
FROM test
GROUP BY coord
ORDER BY coord.2 * w + coord.1
WITH FILL FROM 0 TO 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 10', () => {
    const query = `WITH (Select min(number), max(number) from seq) as range Select * from numbers(range.1, range.2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 11', () => {
    const query = `WITH tmp1 AS
(
SELECT
CAST(s1, 'FixedString(10)') AS fs1,
s2 AS sector,
s3
FROM t1
WHERE  (s3 != 'test')
)
SELECT
fs1
FROM t2
LEFT JOIN tmp1 USING (fs1)
WHERE (fs1 IN ('test')) SETTINGS enable_multiple_prewhere_read_steps = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 12', () => {
    const query = `WITH tmp1 AS
(
SELECT
CAST(s1, 'FixedString(10)') AS fs1,
s2 AS sector,
s3
FROM t1
WHERE  (s3 != 'test')
)
SELECT
fs1
FROM t2
LEFT JOIN tmp1 USING (fs1)
WHERE (fs1 IN ('test'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 13', () => {
    const query = `WITH (60 * 60) * 24 AS d select toStartOfDay(x) as k, sum(y) as v,
(z + d) * (z + d - 1) / 2 - (toUInt64(k - toDateTime('2000-01-01', 'UTC')) as z) * (z - 1) / 2 as est,
est - v as delta
from tab final group by k order by k
settings max_threads=8, optimize_aggregation_in_order=1, split_parts_ranges_into_intersecting_and_non_intersecting_final=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 14', () => {
    const query = `WITH 'OK' AS s SELECT * FROM param_test(test_str=s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 15', () => {
    const query = `WITH (SELECT 123) AS s SELECT * FROM param_test(test_str=s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 16', () => {
    const query = `WITH (SELECT 100 + 20 + 3) AS s SELECT * FROM param_test(test_str=s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 17', () => {
    const query = `WITH (SELECT number FROM numbers(123, 1)) AS s SELECT * FROM param_test(test_str=s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 18', () => {
    const query = `WITH CAST(123, 'String') AS s SELECT * FROM param_test(test_str=s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 19', () => {
    const query = `WITH (SELECT uuid FROM system.tables WHERE database = currentDatabase() AND table = 't_ind_merge_2') AS uuid,
extractAllGroupsVertical(message, 'containing (\\\\d+) columns \\((\\\\d+) merged, (\\\\d+) gathered\\)')[1] AS groups
SELECT
groups[1] AS total,
groups[2] AS merged,
groups[3] AS gathered
FROM system.text_log
WHERE ((query_id = uuid || '::all_1_2_1') OR (query_id = currentDatabase() || '.t_ind_merge_2::all_1_2_1')) AND notEmpty(groups)
ORDER BY event_time_microseconds;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 20', () => {
    const query = `WITH (SELECT uuid FROM system.tables WHERE database = currentDatabase() AND table = 't_ind_merge_1') AS uuid,
extractAllGroupsVertical(message, 'containing (\\\\d+) columns \\((\\\\d+) merged, (\\\\d+) gathered\\)')[1] AS groups
SELECT
groups[1] AS total,
groups[2] AS merged,
groups[3] AS gathered
FROM system.text_log
WHERE ((query_id = uuid || '::all_1_2_1') OR (query_id = currentDatabase() || '.t_ind_merge_1::all_1_2_1')) AND notEmpty(groups)
ORDER BY event_time_microseconds;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 21', () => {
    const query = `WITH wkt(CAST([(1, 1), (2, 2), (3, 3)], 'Array(Tuple(Float64, Float64))')) as x SELECT x, toTypeName(x), readWKTRing(x) as y, toTypeName(y);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 22', () => {
    const query = `WITH RECURSIVE search_tree AS ( SELECT id, parent_id, [parent_id] AS path, toUInt64(0) AS depth
FROM test_table
UNION ALL
SELECT t.id, t.parent_id, arrayConcat(path, [t.id]) as path, depth + 1
FROM test_table t, search_tree st
WHERE t.parent_id = st.id)
SELECT * FROM search_tree ORDER BY depth, id, parent_id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 23', () => {
    const query = `WITH RECURSIVE search_tree AS ( SELECT id, parent_id, [parent_id] AS path, toUInt64(0) AS depth
FROM remote('127.0.0.1', currentDatabase(), test_table)
UNION ALL
SELECT t.id, t.parent_id, arrayConcat(path, [t.id]) as path, depth + 1
FROM remote('127.0.0.1', currentDatabase(), test_table) t, search_tree st
WHERE t.parent_id = st.id)
SELECT * FROM search_tree ORDER BY depth, id, parent_id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 24', () => {
    const query = `WITH RECURSIVE search_tree AS ( SELECT id, parent_id, [parent_id] AS path, toUInt64(0) AS depth
FROM remote('127.0.0.{1,2}', currentDatabase(), test_table)
UNION ALL
SELECT t.id, t.parent_id, arrayConcat(path, [t.id]) as path, depth + 1
FROM remote('127.0.0.{1,2}', currentDatabase(), test_table) t, search_tree st
WHERE t.parent_id = st.id)
SELECT * FROM search_tree ORDER BY depth, id, parent_id;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 25', () => {
    const query = `WITH 'https://www3.botinok.co.edu.il/~kozlevich/CGI-BIN/WEBSIT~0.DLL?longptr=0xFFFFFFFF&ONERR=CONTINUE#!PGNUM=99' AS url SELECT URLHash(url, arrayJoin(range(10)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 26', () => {
    const query = `WITH 'https://www3.botinok.co.edu.il/~kozlevich/CGI-BIN/WEBSIT~0.DLL?longptr=0xFFFFFFFF&ONERR=CONTINUE#!PGNUM=99' AS url SELECT URLHash(materialize(url), arrayJoin(range(10)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 27', () => {
    const query = `WITH 'https://www3.botinok.co.edu.il/~kozlevich/CGI-BIN/WEBSIT~0.DLL?longptr=0xFFFFFFFF&ONERR=CONTINUE#!PGNUM=99' AS url SELECT cityHash64(substring(x, -1, 1) IN ('/', '?', '#') ? substring(x, 1, -1) : x), arrayJoin(URLHierarchy(url)) AS x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 28', () => {
    const query = `WITH 'https://www3.botinok.co.edu.il/~kozlevich/CGI-BIN/WEBSIT~0.DLL?longptr=0xFFFFFFFF&ONERR=CONTINUE#!PGNUM=99' AS url SELECT cityHash64(substring(x, -1, 1) IN ('/', '?', '#') ? substring(x, 1, -1) : x), arrayJoin(URLHierarchy(materialize(url))) AS x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 29', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(10), (SELECT number AS k FROM numbers(5))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 30', () => {
    const query = `WITH build AS ( SELECT
k * 2 AS k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(10), (SELECT number AS k FROM numbers(5))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
intDiv(k, 2) AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v), COUNT(*)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 31', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(20), (SELECT number AS k FROM numbers(5))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 32', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(30), (SELECT number AS k FROM numbers(5))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 33', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(50), (SELECT number AS k FROM numbers(5))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 34', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(100), (SELECT number AS k FROM numbers(5))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 35', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(100), (SELECT number AS k FROM numbers(50))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 36', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(1000), (SELECT number AS k FROM numbers(5))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 37', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(1000), (SELECT number AS k FROM numbers(50))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 38', () => {
    const query = `WITH build AS ( SELECT
k,
toDateTime('2001-01-01 00:00:00') + INTERVAL number MINUTE AS t,
number AS v
FROM numbers(10000), (SELECT number AS k FROM numbers(50))
SETTINGS join_algorithm = 'default'
),
probe AS (
SELECT
k * 2 AS k,
t - INTERVAL 30 SECOND AS t
FROM build
)
SELECT SUM(v)
FROM probe ASOF JOIN build USING (k, t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 39', () => {
    const query = `WITH CAST(tuple(1), 'Tuple (value UInt64)') AS compound_value SELECT id, test_table.* APPLY x -> compound_value.*
FROM test_table
WHERE arrayMap(x -> toString(x) AS lambda, [NULL, 256, 257, NULL, NULL])
SETTINGS convert_query_to_cnf = true, optimize_using_constraints = true, optimize_substitute_columns = true; -- { serverError ILLEGAL_TYPE_OF_COLUMN_FOR_FILTER }
DESCRIBE TABLE (SELECT test_table.COLUMNS(id) FROM test_table WHERE '2147483647'); -- { serverError ILLEGAL_TYPE_OF_COLUMN_FOR_FILTER }
DROP TABLE test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 40', () => {
    const query = `WITH merged_test AS( 	SELECT * FROM  t Final
)
SELECT * FROM  merged_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 41', () => {
    const query = `WITH cte1 as ( SELECT '1234' as x
), cte2 as (
SELECT '1234' as x
)
SELECT *
FROM events AS events
JOIN cte2 ON cte2.x = events.distinct_id
JOIN cte1 ON cte1.x = cte2.x
limit 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 42', () => {
    const query = `with x as (
select number
from numbers(10)
where number % 3=0),
y as (
select number, count()
from table_dist
where number in (select * from x)
group by number
)
select * from y
ORDER BY ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 43', () => {
    const query = `WITH {test_a:UInt32} as column SELECT column as number FROM numbers(2) FORMAT TSVWithNames;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 44', () => {
    const query = `WITH {test_a:UInt32} as column SELECT {test_a:UInt32} as number FROM numbers(2) FORMAT TSVWithNames;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 45', () => {
    const query = `WITH {test_a:UInt32} as column SELECT column FROM numbers(2) FORMAT TSVWithNames;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 46', () => {
    const query = `WITH avg(a) OVER () AS a SELECT a, id FROM test SETTINGS allow_experimental_window_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 47', () => {
    const query = `WITH avg(a) OVER () AS a2 SELECT a2, id FROM test SETTINGS allow_experimental_window_functions = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 48', () => {
    const query = `with a as (select 1 as column_a) , b as (select 2 as column_b) select * FROM remote('127.0.0.{1,2}', currentDatabase(), t) as c
inner join a on ID=column_a inner join b on ID=column_b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 49', () => {
    const query = `WITH data AS (
SELECT
rand64() AS val1,
rand64() AS val2,
rand64() AS val3,
rand64() AS val4,
rand64() AS val5,
rand64() AS val6,
rand64() AS val7,
rand64() AS val8,
rand64() AS val9,
rand64() AS val10,
rand64() AS val11,
rand64() AS val12,
rand64() AS val13,
rand64() AS val14
FROM numbers(10)
),
(SELECT avg(val1) FROM data) AS value1,
(SELECT avg(val2) FROM data) AS value2,
(SELECT avg(val3) FROM data) AS value3,
(SELECT avg(val4) FROM data) AS value4,
(SELECT avg(val5) FROM data) AS value5,
(SELECT avg(val6) FROM data) AS value6,
(SELECT avg(val7) FROM data) AS value7,
(SELECT avg(val8) FROM data) AS value8,
(SELECT avg(val9) FROM data) AS value9,
(SELECT avg(val10) FROM data) AS value10,
(SELECT avg(val11) FROM data) AS value11,
(SELECT avg(val12) FROM data) AS value12,
(SELECT avg(val13) FROM data) AS value13,
(SELECT avg(val14) FROM data) AS value14
SELECT
value1 AS v1,
value2 AS v2,
value3 AS v3,
value4 AS v4,
value5 AS v5,
value6 AS v6,
value7 AS v7,
value8 AS v8,
value9 AS v9,
value10 AS v10,
value11 AS v11,
value12 AS v12,
value13 AS v13,
value14 AS v14
FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 50', () => {
    const query = `with block_0 as ( select * from loans
),
block_1 as (
select sum(loan_number) as loan_number from block_0 group by security_id
)
select loan_number from block_1 where loan_number > 3 order by loan_number settings prefer_column_name_to_alias = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 51', () => {
    const query = `WITH 123 AS x SELECT 555 FROM (SELECT a, x FROM (SELECT 1 AS a, 2 AS b));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 52', () => {
    const query = `WITH t AS (SELECT 1) SELECT t, (SELECT * FROM t) FROM t; -- { serverError UNKNOWN_IDENTIFIER } SELECT x FROM (SELECT y FROM VALUES ('y UInt16', (2)) WHERE (1 AS x) = y) AS t;  -- { serverError UNKNOWN_IDENTIFIER }
SELECT t.x FROM (SELECT * FROM (SELECT 1 AS x) AS t); -- { serverError UNKNOWN_IDENTIFIER }
SELECT x FROM (SELECT * FROM (SELECT 99 AS x) AS t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 53', () => {
    const query = `WITH ['asynchronous_metric_log', 'asynchronous_insert_log', 'opentelemetry_span_log', 'coverage_log'] AS known_tables,
'event_date, event_time' as default_sorting_key
SELECT
'Table ' || name || ' has non-default sorting key: ' || sorting_key
FROM system.tables
WHERE (database = 'system') AND (engine = 'MergeTree') AND (NOT arraySum(arrayMap(x -> position(name, x), known_tables))) AND (sorting_key != default_sorting_key);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 54', () => {
    const query = `WITH 0 AS l, 10 AS r SELECT number * 2 FROM numbers(5) ORDER BY 1 WITH FILL FROM l TO r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 55', () => {
    const query = `WITH 0 AS l, 10 AS r SELECT number * 2 FROM numbers(5) ORDER BY 1 WITH FILL FROM l TO l + r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 56', () => {
    const query = `with dummy + 1 as dummy select dummy from system.one;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 57', () => {
    const query = `WITH dummy + 3 AS dummy SELECT dummy + 1 AS y
FROM system.one
SETTINGS enable_global_with_statement = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 58', () => {
    const query = `WITH max(dt) AS maxDt SELECT maxDt
FROM test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 59', () => {
    const query = `WITH max(number) AS maxDt SELECT maxDt
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 60', () => {
    const query = `WITH ( SELECT max(i)
FROM t1
) AS value
SELECT
value AS i,
value AS j,
value AS k,
value AS l
FROM t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 61', () => {
    const query = `with (select 25) as something
select *, something
from numbers(toUInt64(assumeNotNull(something)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 62', () => {
    const query = `with d as (select 'key'::Varchar(255) c, 'x'::Varchar(255) s) SELECT r1, c as r2
FROM (
SELECT t as s, c as r1
FROM ( SELECT 'y'::Varchar(255) as t, 'x'::Varchar(255) as s) t1
LEFT JOIN d USING (s)
) t2
LEFT JOIN d using (s)
SETTINGS join_use_nulls=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 63', () => {
    const query = `WITH toInt64(2) AS new_x SELECT new_x AS x FROM (SELECT 1 AS x) t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 64', () => {
    const query = `WITH toInt64(2) AS new_x SELECT * replace(new_x as x)  FROM (SELECT 1 AS x) t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 65', () => {
    const query = `WITH a as key
SELECT
a as k1,
sum(b) as k2
FROM
test
GROUP BY
key
ORDER BY k1, k2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 66', () => {
    const query = `WITH a as key SELECT key as k1 FROM test GROUP BY key ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 67', () => {
    const query = `WITH a as key SELECT key as k1 FROM test ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 68', () => {
    const query = `WITH 10 as k SELECT k as key, * FROM repl_tbl WHERE key = k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 69', () => {
    const query = `WITH with_table as ( SELECT p.a_id, p.b_id, p.c_id FROM parent p
LEFT JOIN join_table_1 jt1 ON jt1.a_id = p.a_id AND jt1.b_id = p.b_id
LEFT JOIN join_table_2 jt2 ON jt2.c_id = p.c_id
WHERE
p.a_id = 0 AND (jt2.c_id = 0 OR p.created_at = 0)
)
SELECT p.a_id, p.b_id, COUNT(*) as f_count FROM with_table
GROUP BY p.a_id, p.b_id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 70', () => {
    const query = `WITH RECURSIVE foo AS (SELECT 1 AS i
UNION ALL
(SELECT i+1 FROM foo WHERE i < 10
UNION ALL
SELECT i+1 FROM foo WHERE i < 5)
) SELECT * FROM foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 71', () => {
    const query = `WITH RECURSIVE foo AS (SELECT 1 AS i
UNION ALL
SELECT * FROM
(SELECT i+1 FROM foo WHERE i < 10
UNION ALL
SELECT i+1 FROM foo WHERE i < 5) AS t
) SELECT * FROM foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 72', () => {
    const query = `WITH RECURSIVE foo AS (SELECT 1 AS i
UNION ALL
(SELECT i+1 FROM foo WHERE i < 10
EXCEPT
SELECT i+1 FROM foo WHERE i < 5)
) SELECT * FROM foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 73', () => {
    const query = `WITH RECURSIVE foo AS (SELECT 1 AS i
UNION ALL
(SELECT i+1 FROM foo WHERE i < 10
INTERSECT
SELECT i+1 FROM foo WHERE i < 5)
) SELECT * FROM foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 74', () => {
    const query = `WITH RECURSIVE t AS ( WITH RECURSIVE s AS (
SELECT toUInt64(1) AS i
UNION ALL
SELECT i+1 FROM s WHERE i < 10
)
SELECT i AS j FROM s
UNION ALL
SELECT j+1 FROM t WHERE j < 10
)
SELECT * FROM t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 75', () => {
    const query = `WITH RECURSIVE tab AS (SELECT * FROM values('id_key UInt64, link UInt64', (1,17), (2,17), (3,17), (4,17), (6,17), (5,17))),
iter AS (
SELECT 0 AS id_key, 'base' AS row_type, 17 AS link
UNION ALL (
WITH remaining AS (
SELECT tab.id_key AS id_key, 'true'::text AS row_type, iter.link AS link, MIN(tab.id_key) OVER () AS min
FROM tab INNER JOIN iter USING (link)
WHERE tab.id_key > iter.id_key
),
first_remaining AS (
SELECT id_key, row_type, link
FROM remaining
WHERE id_key=min
),
effect AS (
SELECT tab.id_key AS id_key, 'new'::text AS row_type, tab.link AS link
FROM first_remaining e INNER JOIN tab ON e.id_key=tab.id_key
WHERE e.row_type = 'false'
)
SELECT * FROM first_remaining
UNION ALL SELECT * FROM effect
)
)
SELECT * FROM iter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 76', () => {
    const query = `WITH RECURSIVE x AS (SELECT 1 AS n INTERSECT SELECT n+1 FROM x) SELECT * FROM x; -- {serverError UNSUPPORTED_METHOD}
WITH RECURSIVE x AS (SELECT 1 AS n INTERSECT ALL SELECT n+1 FROM x)
SELECT * FROM x; -- {serverError UNSUPPORTED_METHOD}
WITH RECURSIVE x AS (SELECT 1 AS n EXCEPT SELECT n+1 FROM x)
SELECT * FROM x; -- {serverError UNSUPPORTED_METHOD}
WITH RECURSIVE x AS (SELECT 1 AS n EXCEPT ALL SELECT n+1 FROM x)
SELECT * FROM x; -- {serverError UNSUPPORTED_METHOD}
WITH RECURSIVE x AS (SELECT n FROM x)
SELECT * FROM x; -- {serverError UNKNOWN_TABLE}
WITH RECURSIVE x AS (SELECT n FROM x UNION ALL SELECT 1 AS n)
SELECT * FROM x; -- {serverError UNKNOWN_TABLE}
DROP TABLE IF EXISTS y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 77', () => {
    const query = `WITH toString(number) as str
SELECT
*,
count() OVER () AS c
FROM numbers(10)
ORDER BY str;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 78', () => {
    const query = `WITH test AS (
SELECT
*,
count() OVER () AS c
FROM numbers(10)
)
SELECT * FROM test
ORDER BY toString(number);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 79', () => {
    const query = `WITH RECURSIVE y AS (SELECT 1 AS id),
x AS (SELECT * FROM y UNION ALL SELECT id+1 FROM x WHERE id < 5)
SELECT * FROM x ORDER BY id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 80', () => {
    const query = `WITH RECURSIVE x AS (SELECT * FROM y UNION ALL SELECT id+1 FROM x WHERE id < 5),
y AS (SELECT 1 AS id)
SELECT * FROM x ORDER BY id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 81', () => {
    const query = `WITH RECURSIVE x AS
(SELECT 1 AS id UNION ALL SELECT id+1 FROM x WHERE id < 5),
y AS
(SELECT 1 AS id UNION ALL SELECT id+1 FROM y WHERE id < 10)
SELECT y.*, x.* FROM y LEFT JOIN x USING (id) ORDER BY y.id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 82', () => {
    const query = `WITH RECURSIVE x AS
(SELECT 1 AS id UNION ALL SELECT id+1 FROM x WHERE id < 5),
y AS
(SELECT 1 AS id UNION ALL SELECT id+1 FROM x WHERE id < 10)
SELECT y.*, x.* FROM y LEFT JOIN x USING (id) ORDER BY y.id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 83', () => {
    const query = `WITH RECURSIVE x AS
(SELECT 1 AS id UNION ALL SELECT id+1 FROM x WHERE id < 3 ),
y AS
(SELECT * FROM x UNION ALL SELECT * FROM x),
z AS
(SELECT * FROM x UNION ALL SELECT id+1 FROM z WHERE id < 10)
SELECT * FROM z ORDER BY id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 84', () => {
    const query = `WITH RECURSIVE x AS
(SELECT 1 AS id UNION ALL SELECT id+1 FROM x WHERE id < 3 ),
y AS
(SELECT * FROM x UNION ALL SELECT * FROM x),
z AS
(SELECT * FROM y UNION ALL SELECT id+1 FROM z WHERE id < 10)
SELECT * FROM z ORDER BY id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 85', () => {
    const query = `WITH RECURSIVE search_graph AS ( 	SELECT *, false AS is_cycle, [tuple(g.f, g.t)] AS path FROM graph g
	UNION ALL
	SELECT g.*, has(path, tuple(g.f, g.t)), arrayConcat(sg.path, [tuple(g.f, g.t)])
	FROM graph g, search_graph sg
	WHERE g.f = sg.t AND NOT is_cycle
)
SELECT * FROM search_graph;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 86', () => {
    const query = `WITH RECURSIVE search_graph AS ( 	SELECT *, false AS is_cycle, [tuple(g.f, g.t)] AS path FROM graph g
	UNION ALL
	SELECT g.*, has(path, tuple(g.f, g.t)), arrayConcat(sg.path, [tuple(g.f, g.t)])
	FROM graph g, search_graph sg
	WHERE g.f = sg.t AND NOT is_cycle
)
SELECT * FROM search_graph ORDER BY path;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 87', () => {
    const query = `WITH subquery AS ( SELECT
toUInt64(time) AS time,
toHour(03038_table.time)
FROM 03038_table
)
SELECT *
FROM subquery
ORDER BY subquery.time ASC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 88', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 1 AS id, []::Array(UInt64) AS path
UNION ALL
SELECT tree.id, arrayConcat(t.path, [tree.id])
FROM tree JOIN t ON (tree.parent_id = t.id)
)
SELECT t1.*, t2.* FROM t AS t1 JOIN t AS t2 ON
(t1.path[1] = t2.path[1] AND
length(t1.path) = 1 AND
length(t2.path) > 1)
ORDER BY t1.id, t2.id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 89', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 1 AS id, []::Array(UInt64) AS path
UNION ALL
SELECT tree.id, arrayConcat(t.path, [tree.id])
FROM tree JOIN t ON (tree.parent_id = t.id)
)
SELECT t1.id, count(t2.path) FROM t AS t1 JOIN t AS t2 ON
(t1.path[1] = t2.path[1] AND
length(t1.path) = 1 AND
length(t2.path) > 1)
GROUP BY t1.id
ORDER BY t1.id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 90', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 1 AS id, []::Array(UInt64) AS path
UNION ALL
SELECT tree.id, arrayConcat(t.path, [tree.id])
FROM tree JOIN t ON (tree.parent_id = t.id)
)
SELECT t1.id, t2.path, tuple(t2.*) FROM t AS t1 JOIN t AS t2 ON
(t1.id=t2.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 91', () => {
    const query = `WITH 10 AS n SELECT *
FROM numbers(n);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 92', () => {
    const query = `WITH cast(10, 'UInt64') AS n SELECT *
FROM numbers(n);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 93', () => {
    const query = `WITH RECURSIVE subdepartment AS (
SELECT name as root_name, * FROM department WHERE name = 'A'
UNION ALL
SELECT sd.root_name, d.* FROM department AS d, subdepartment AS sd
WHERE d.parent_department = sd.id
)
SELECT * FROM subdepartment ORDER BY name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 94', () => {
    const query = `WITH RECURSIVE subdepartment AS (
SELECT 1 AS level, * FROM department WHERE name = 'A'
UNION ALL
SELECT sd.level + 1, d.* FROM department AS d, subdepartment AS sd
WHERE d.parent_department = sd.id
)
SELECT * FROM subdepartment ORDER BY name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 95', () => {
    const query = `WITH RECURSIVE subdepartment AS (
SELECT 1 AS level, * FROM department WHERE name = 'A'
UNION ALL
SELECT sd.level + 1, d.* FROM department AS d, subdepartment AS sd
WHERE d.parent_department = sd.id
)
SELECT * FROM subdepartment WHERE level >= 2 ORDER BY name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 96', () => {
    const query = `WITH RECURSIVE subdepartment AS (
SELECT * FROM department WHERE name = 'A'
)
SELECT * FROM subdepartment ORDER BY name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 97', () => {
    const query = `WITH RECURSIVE q AS ( SELECT * FROM department
UNION ALL
(WITH x AS (SELECT * FROM q)
SELECT * FROM x)
)
SELECT * FROM q LIMIT 24;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 98', () => {
    const query = `WITH RECURSIVE q AS ( SELECT * FROM department
UNION ALL
(WITH RECURSIVE x AS (
SELECT * FROM department
UNION ALL
(SELECT * FROM q UNION ALL SELECT * FROM x)
)
SELECT * FROM x)
)
SELECT * FROM q LIMIT 32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 99', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 1 AS i, 2 AS j
UNION ALL
SELECT t2.i, t.j+1 FROM
(SELECT 2 AS i UNION ALL SELECT 3 AS i) AS t2
JOIN t ON (t2.i = t.i+1))
SELECT * FROM t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 100', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 1 AS n
UNION ALL
SELECT n+1 FROM t WHERE n < 100
)
SELECT sum(n) FROM t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 101', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 1 AS n
UNION ALL
SELECT n+1 FROM t WHERE n < 5
)
SELECT * FROM t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 102', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 1 AS n
UNION ALL
SELECT n+1 FROM t)
SELECT * FROM t LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 103', () => {
    const query = `WITH RECURSIVE t AS ( SELECT 'foo' AS n
UNION ALL
SELECT n || ' bar' FROM t WHERE length(n) < 20
)
SELECT n, toTypeName(n) FROM t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 104', () => {
    const query = `WITH RECURSIVE t AS ( SELECT '7' AS n
UNION ALL
SELECT n+1 FROM t WHERE n < 10
)
SELECT n, toTypeName(n) FROM t; -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
WITH RECURSIVE w1 AS
(WITH w2 AS
(WITH w3 AS
(WITH w4 AS
(WITH w5 AS
(WITH RECURSIVE w6 AS
(WITH w7 AS
(WITH w8 AS
(SELECT 1)
SELECT * FROM w8)
SELECT * FROM w7)
SELECT * FROM w6)
SELECT * FROM w5)
SELECT * FROM w4)
SELECT * FROM w3)
SELECT * FROM w2)
SELECT * FROM w1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 105', () => {
    const query = `WITH RECURSIVE search_tree AS ( SELECT id, link, data
FROM tree t
WHERE t.id = 0
UNION ALL
SELECT t.id, t.link, t.data
FROM tree t, search_tree st
WHERE t.link = st.id
)
SELECT * FROM search_tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 106', () => {
    const query = `WITH RECURSIVE search_tree AS ( SELECT id, link, data, [t.id] AS path
FROM tree t
WHERE t.id = 0
UNION ALL
SELECT t.id, t.link, t.data, arrayConcat(path, [t.id])
FROM tree t, search_tree st
WHERE t.link = st.id
)
SELECT * FROM search_tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 107', () => {
    const query = `WITH helper AS (
SELECT
*
FROM
03033_example_table
ORDER BY
ColumnA WITH FILL INTERPOLATE (
ColumnB AS ColumnC,
ColumnC AS ColumnA
)
)
SELECT ColumnB FROM helper;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 108', () => {
    const query = `WITH RECURSIVE recursive_cte AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM recursive_cte WHERE n < 10) SELECT n FROM recursive_cte;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 109', () => {
    const query = `WITH RECURSIVE recursive_cte AS (SELECT toUInt8(1) AS n UNION ALL SELECT toUInt8(n + 1) FROM recursive_cte WHERE n < 10) SELECT n FROM recursive_cte;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 110', () => {
    const query = `WITH RECURSIVE recursive_cte AS (SELECT toUInt16(1) AS n UNION ALL SELECT toUInt8(n + 1) FROM recursive_cte WHERE n < 10) SELECT n FROM recursive_cte;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 111', () => {
    const query = `WITH RECURSIVE recursive_cte AS (SELECT materialize(toUInt16(1)) AS n UNION ALL SELECT toUInt8(n + 1) FROM recursive_cte WHERE n < 10) SELECT n FROM recursive_cte;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 112', () => {
    const query = `WITH RECURSIVE recursive_cte AS (SELECT toUInt16(1) AS n UNION ALL SELECT materialize(toUInt8(n + 1)) FROM recursive_cte WHERE n < 10) SELECT n FROM recursive_cte;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 113', () => {
    const query = `WITH RECURSIVE recursive_cte AS (SELECT toUInt16(1) AS n, '1' AS concat UNION ALL SELECT materialize(toUInt8(n + 1)), concat || toString(n + 1) FROM recursive_cte WHERE n < 10) SELECT n, concat FROM recursive_cte;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 114', () => {
    const query = `WITH RECURSIVE recursive_cte AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM recursive_cte) SELECT n FROM recursive_cte LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 115', () => {
    const query = `WITH (SELECT number FROM system.numbers LIMIT 1) as w1,
(SELECT number FROM system.numbers LIMIT 1) as w2,
(SELECT number FROM system.numbers LIMIT 1) as w3,
(SELECT number FROM system.numbers LIMIT 1) as w4,
(SELECT number FROM system.numbers LIMIT 1) as w5,
(SELECT number FROM system.numbers LIMIT 1) as w6
SELECT number FROM (
SELECT number FROM system.numbers LIMIT 10
UNION ALL
SELECT number FROM system.numbers LIMIT 10
)
WHERE number < 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 116', () => {
    const query = `WITH (SELECT v FROM vecs_Float32 limit 1) AS a SELECT count(dp) FROM (SELECT dotProduct(a, v) AS dp FROM vecs_Float32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 117', () => {
    const query = `WITH 'Hello'::Enum8('Hello', 'World') AS enum1, 'test'::Enum8('test', 'best') AS enum2 SELECT [enum1, 'Goodbye', enum2];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 118', () => {
    const query = `WITH ( SELECT dummy AS x
FROM system.one
) AS y
SELECT
y,
min(dummy)
FROM remote('127.0.0.{1,2}', system.one)
GROUP BY y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 119', () => {
    const query = `WITH ( SELECT dummy AS x
FROM system.one
) AS y
SELECT
y,
min(dummy)
FROM remote('127.0.0.{2,3}', system.one)
GROUP BY y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 120', () => {
    const query = `WITH (
SELECT
(query_id, query_start_time, query_start_time_microseconds)
FROM
system.query_log
WHERE
event_date >= yesterday()
AND current_database = currentDatabase()
AND log_comment = '02985_shard_query_start_time_query_1'
AND type = 'QueryFinish'
) AS id_and_start_tuple
SELECT
type,
countIf(query_start_time >= initial_query_start_time), -- Using >= because it's comparing seconds
countIf(query_start_time_microseconds > initial_query_start_time_microseconds),
countIf(initial_query_start_time = id_and_start_tuple.2),
countIf(initial_query_start_time_microseconds = id_and_start_tuple.3)
FROM
system.query_log
WHERE
NOT is_initial_query AND initial_query_id = id_and_start_tuple.1
GROUP BY type;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 121', () => {
    const query = `with d1 as ( select
1 as a,
2 as b
),
d2 as (
select
1 as a,
3 as c
),
joined as (
select
d1.*,
d2.c
from d1
inner join d2
on (d1.a = d2.a)
)
select c
from joined;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 122', () => {
    const query = `WITH a AS ( SELECT 0 AS key, 'a' AS acol ),
b AS ( SELECT 2 AS key )
SELECT a.key
FROM b
LEFT JOIN a ON 1
LEFT JOIN a AS a1 ON 1
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 123', () => {
    const query = `WITH a AS ( SELECT 0 AS key, 'a' AS acol ),
b AS ( SELECT 2 AS key )
SELECT a.acol, a1.acol
FROM b
LEFT JOIN a ON a.key = b.key
LEFT JOIN a AS a1 ON a1.key = a.key
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 124', () => {
    const query = `WITH a AS ( SELECT 0 AS key, 'a' AS acol ),
b AS ( SELECT 2 AS key )
SELECT a.acol, a1.acol
FROM b
FULL JOIN a ON a.key = b.key
FULL JOIN a AS a1 ON a1.key = a.key
ORDER BY 1
SETTINGS join_use_nulls = 0
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 125', () => {
    const query = `WITH a AS ( SELECT 0 AS key, 'a' AS acol ),
b AS ( SELECT 2 AS key )
SELECT a.acol, a1.acol
FROM b
FULL JOIN a ON a.key = b.key
FULL JOIN a AS a1 ON a1.key = a.key
ORDER BY 1
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 126', () => {
    const query = `WITH filtered_groups AS (SELECT a FROM pr_1 WHERE a >= 100) SELECT count() FROM pr_2 INNER JOIN filtered_groups ON pr_2.a = filtered_groups.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 127', () => {
    const query = `WITH filtered_groups AS (SELECT a FROM pr_1 WHERE a >= 100) SELECT count() FROM pr_2 INNER JOIN filtered_groups ON pr_2.a = filtered_groups.a
SETTINGS allow_experimental_parallel_reading_from_replicas = 1, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 128', () => {
    const query = `WITH filtered_groups AS (SELECT a FROM pr_1 WHERE a >= 100) SELECT count() FROM pr_2 INNER JOIN filtered_groups ON pr_2.a = filtered_groups.a
SETTINGS enable_analyzer = 0, allow_experimental_parallel_reading_from_replicas = 2, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3; -- { serverError SUPPORT_IS_DISABLED }
WITH filtered_groups AS (SELECT a FROM pr_1 WHERE a >= 100)
SELECT count() FROM pr_2 INNER JOIN filtered_groups ON pr_2.a = filtered_groups.a
SETTINGS enable_analyzer = 0, allow_experimental_parallel_reading_from_replicas = 512, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3; -- { serverError SUPPORT_IS_DISABLED }
SELECT count() FROM pr_2 JOIN numbers(10) as pr_1 ON pr_2.a = pr_1.number
SETTINGS allow_experimental_parallel_reading_from_replicas = 1, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 129', () => {
    const query = `WITH cte1 AS
(
SELECT n
FROM numbers_1e3
),
cte2 AS
(
SELECT n
FROM numbers_1e3
WHERE n IN (cte1)
)
SELECT count()
FROM cte2
SETTINGS allow_experimental_parallel_reading_from_replicas = 1, parallel_replicas_for_non_replicated_merge_tree = 1, cluster_for_parallel_replicas = 'test_cluster_one_shard_three_replicas_localhost', max_parallel_replicas = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 130', () => {
    const query = `WITH arraySlice(arrayReverseSort(x -> (x.2, x.1), arrayZip(untuple(sumMap(([k], [1]))))), 1, 5) AS topKExact,
arraySlice(arrayReverseSort(x -> (x.2, x.1), arrayZip(untuple(sumMap(([k], [w]))))), 1, 5) AS topKWeightedExact
SELECT
topKExact,
topKWeightedExact,
topK(3, 2, 'counts')(k) AS topK_counts,
topKWeighted(3, 2, 'counts')(k, w) AS topKWeighted_counts,
approx_top_count(3, 6)(k) AS approx_top_count,
approx_top_k(3, 6)(k) AS approx_top_k,
approx_top_sum(3, 6)(k, w) AS approx_top_sum
FROM
(
SELECT
concat(countDigits(number * number), '_', intDiv((number % 10), 7)) AS k,
number AS w
FROM numbers(1000)
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 131', () => {
    const query = `WITH arrayJoin(['Hello', 'world'])::Enum('Hello', 'world') AS x SELECT x, transform(x, ['Hello', 'world'], [123, 456], 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 132', () => {
    const query = `WITH arrayJoin(['Hello', 'world'])::Enum('Hello', 'world') AS x SELECT x, transform(x, ['Hello', 'world', 'goodbye'], [123, 456], 0); -- { serverError UNKNOWN_ELEMENT_OF_ENUM } WITH arrayJoin(['Hello', 'world'])::Enum('Hello', 'world') AS x SELECT x, transform(x, ['Hello', 'world'], ['test', 'best']::Array(Enum('test' = 123, 'best' = 456, '' = 0)), ''::Enum('test' = 123, 'best' = 456, '' = 0)) AS y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 133', () => {
    const query = `WITH (SELECT '111111111111111111111111111111111111111'::UInt128) AS v SELECT sum(x), max(v) FROM test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 134', () => {
    const query = `WITH toIPv6('FFFF:0000:FFFF:0000:FFFF:0000:FFFF:0000') AS ip1, toIPv6('0000:FFFF:0000:FFFF:0000:FFFF:0000:FFFF') AS ip2, CAST('226854911280625642308916404954512140970', 'UInt128') AS n1, CAST('113427455640312821154458202477256070485', 'UInt128') AS n2
SELECT bin(ip1), bin(ip2), bin(n1), bin(n2),
bin(bitAnd(ip1, n1)), bin(bitAnd(n1, ip1)), bin(bitAnd(ip2, n1)), bin(bitAnd(n1, ip2)),
bin(bitAnd(ip1, n2)), bin(bitAnd(n2, ip1)), bin(bitAnd(ip2, n2)), bin(bitAnd(n2, ip2)),
bin(bitOr(ip1, n1)), bin(bitOr(n1, ip1)), bin(bitOr(ip2, n1)), bin(bitOr(n1, ip2)),
bin(bitOr(ip1, n2)), bin(bitOr(n2, ip1)), bin(bitOr(ip2, n2)), bin(bitOr(n2, ip2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 135', () => {
    const query = `WITH 1::Nullable(UInt64) as my_literal Select sum(number + my_literal) from numbers(0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 136', () => {
    const query = `WITH 1::Nullable(UInt64) as my_literal Select sum(number) + my_literal * count() from numbers(0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 137', () => {
    const query = `WITH (path = 'test1') OR match(path, 'test2') OR (match(path, 'test3') AND match(path, 'test2')) OR match(path, 'test4') OR (path = 'test5') OR (path = 'test6') AS alias_in_error SELECT count(1)
FROM test_bug_optimization
WHERE alias_in_error;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 138', () => {
    const query = `WITH x AS (SELECT in((SELECT * FROM y))),
y AS (SELECT 1)
SELECT * FROM x; -- { serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH }
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 139', () => {
    const query = `WITH cte_1 AS (select
subq_1.c_5_c1698_16 as c_2_c1702_3,
subq_1.c_5_c1694_12 as c_2_c1703_4
from
(select
covarPop(-0, 74) as c_5_c1686_4,
sumWithOverflow(0) as c_5_c1694_12,
covarPop(-53.64, 92.63) as c_5_c1698_16
from
t3 as ref_8
group by ref_8.c17) as subq_1)
select
ref_15.c_2_c1703_4 as c_2_c1723_6,
ref_15.c_2_c1702_3 as c_2_c1724_7
from
t0 as ref_14
RIGHT outer join cte_1 as ref_15
on (ref_14.c1 = ref_15.c_2_c1702_3)
RIGHT outer join t1 as ref_16
on (ref_14.pkey = ref_16.vkey);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 140', () => {
    const query = `WITH minSimpleState(value) AS c SELECT toTypeName(c), c
FROM (
SELECT NULL as value
UNION ALL
SELECT 1 as value
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 141', () => {
    const query = `WITH 'hours' AS maximum_unit,
arrayJoin([1.12, 60.2, 123.33, 24.45, 35.57, 66.64, 67.79, 48.88, 99.96, 3600]) AS elapsed
SELECT
formatReadableTimeDelta(elapsed, maximum_unit) AS time_delta;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 142', () => {
    const query = `WITH 'milliseconds' AS maximum_unit,
arrayJoin([1.12, 60.2, 123.33, 24.45, 35.57, 66.64, 67.79797979, 48.888888, 99.96, 3600]) AS elapsed
SELECT
formatReadableTimeDelta(elapsed, maximum_unit) AS time_delta;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 143', () => {
    const query = `WITH 'milliseconds' AS maximum_unit,
arrayJoin([0, 1.0005]) AS elapsed
SELECT
formatReadableTimeDelta(elapsed, maximum_unit);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 144', () => {
    const query = `WITH 44100 AS sample_frequency
, number AS tick
, tick / sample_frequency AS time
, (time, wave, delay_, decay, count) -> arraySum(n1 -> wave(time - delay_ * n1), range(count)) AS delay
, delay(time, (time -> 0.5), 0.2, 0.5, 5) AS kick
SELECT
kick
FROM system.numbers
LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 145', () => {
    const query = `WITH 44100 AS sample_frequency
, number AS tick
, tick / sample_frequency AS time
, 1 AS master_volume
, level -> least(1.0, greatest(-1.0, level)) AS clamp
, level -> (clamp(level) * 0x7FFF * master_volume)::Int16 AS output
, x -> (x, x) AS mono
, time -> sin(time * 2 * pi()) AS sine_wave
, time -> time::UInt64 % 2 * 2 - 1 AS square_wave
, time -> (time - floor(time)) * 2 - 1 AS sawtooth_wave
, time -> abs(sawtooth_wave(time)) * 2 - 1 AS triangle_wave
, (from, to, wave, time) -> from + ((wave(time) + 1) / 2) * (to - from) AS lfo
, (from, to, steps, time) -> from + floor((time - floor(time)) * steps) / steps * (to - from) AS step_lfo
, (from, to, steps, time) -> exp(step_lfo(log(from), log(to), steps, time)) AS exp_step_lfo
, time -> cityHash64(time) / 0xFFFFFFFFFFFFFFFF AS uniform_noise
, time -> erf(uniform_noise(time)) AS white_noise
, time -> cityHash64(time) % 2 ? 1 : -1 AS bernoulli_noise
, (x, amount) -> clamp(x * amount) AS clipping
, (x, amount) -> clamp(x > 0 ? pow(x, amount) : -pow(-x, amount)) AS power_distortion
, (x, amount) -> round(x * exp2(amount)) / exp2(amount) AS bitcrush
, (time, sample_frequency) -> round(time * sample_frequency) / sample_frequency AS desample
, (time, wave, amount) -> (time - floor(time) < (1 - amount)) ? wave(time * (1 - amount)) : 0 AS thin
, (time, wave, amount) -> wave(floor(time) + pow(time - floor(time), amount)) AS skew
, (a, b, weight) -> a * (1 - weight) + b * weight AS combine
, (time, offset, attack, hold, release) ->
time < offset ? 0
: (time < offset + attack                  ? ((time - offset) / attack)
: (time < offset + attack + hold           ? 1
: (time < offset + attack + hold + release ? (offset + attack + hold + release - time) / release
: 0))) AS envelope
, (bpm, time, offset, attack, hold, release) ->
envelope(
time * (bpm / 60) - floor(time * (bpm / 60)),
offset,
attack,
hold,
release) AS running_envelope
, (sequence, time) -> sequence[1 + time::UInt64 % length(sequence)] AS sequencer
, (time, wave, delay, decay, count) -> arraySum(n -> wave(time - delay * n) * pow(decay, n), range(count)) AS delay
, delay(time, (time -> power_distortion(sine_wave(time * 80 + sine_wave(time * 2)), lfo(0.5, 1, sine_wave, time / 16))
* running_envelope(60, time, 0, 0.0, 0.01, 0.1)),
0.2, 0.5, 5) AS kick
SELECT
(output(
kick +
delay(time, (time ->
power_distortion(
sine_wave(time * 50 + 1 * sine_wave(time * 100 + 1/4))
* running_envelope(60, time, 0, 0.01, 0.01, 0.1),
lfo(1, 0.75, triangle_wave, time / 8))),
0.2, 0.5, 10)
* lfo(0.5, 1, triangle_wave, time / 7)
+ delay(time, (time ->
power_distortion(
sine_wave(time * sequencer([50, 100, 200, 400], time / 2) + 1 * sine_wave(time * sequencer([50, 100, 200], time / 4) + 1/4))
* running_envelope(60, time, 0.5, 0.01, 0.01, 0.1),
lfo(1, 0.75, triangle_wave, time / 8))),
0.2, 0.5, 10)
* lfo(0.5, 1, triangle_wave, 16 + time / 11)
+ delay(time, (time ->
white_noise(time) * running_envelope(60, time, 0.75, 0.01, 0.01, 0.1)),
0.2, 0.5, 10)
* lfo(0.5, 1, triangle_wave, 24 + time / 13)
+ sine_wave(time * 100 + 1 * sine_wave(time * 10 + 1/4))
* running_envelope(120, time, 0, 0.01, 0.01, 0.1)
),
output(
kick +
delay(time + 0.01, (time ->
power_distortion(
sine_wave(time * 50 + 1 * sine_wave(time * 100 + 1/4))
* running_envelope(60, time, 0, 0.01, 0.01, 0.1),
lfo(1, 0.75, triangle_wave, time / 8))),
0.2, 0.5, 10)
* lfo(0.5, 1, triangle_wave, time / 7)
+ delay(time - 0.01, (time ->
power_distortion(
sine_wave(time * sequencer([50, 100, 200, 400], time / 2) + 1 * sine_wave(time * sequencer([50, 100, 200], time / 4) + 1/4))
* running_envelope(60, time, 0.5, 0.01, 0.01, 0.1),
lfo(1, 0.75, triangle_wave, time / 8))),
0.2, 0.5, 10)
* lfo(0.5, 1, triangle_wave, 16 + time / 11)
+ delay(time + 0.005, (time ->
white_noise(time) * running_envelope(60, time, 0.75, 0.01, 0.01, 0.1)),
0.2, 0.5, 10)
* lfo(0.5, 1, triangle_wave, 24 + time / 13)
))
FROM system.numbers
LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 146', () => {
    const query = `WITH subquery AS (SELECT []) SELECT t.* FROM 02834_t AS t JOIN subquery ON arrayExists(x -> x = 1, t.arr); -- { serverError INVALID_JOIN_ON_EXPRESSION } DROP TABLE 02834_t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 147', () => {
    const query = `WITH test_aliases AS (SELECT number FROM numbers(20)), alias2 AS (SELECT number FROM test_aliases) SELECT number FROM alias2 SETTINGS enable_global_with_statement = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 148', () => {
    const query = `WITH (1,2,3) || ('a','b','c') || ('2020-10-08'::Date, '2020-11-08'::Date) AS t SELECT t, t.1, t.2, t.3, t.4, t.5, t.6, t.7, t.8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 149', () => {
    const query = `WITH (tup || tup) AS res SELECT res, res.1, res.2, res.3, res.4 FROM t_02833;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 150', () => {
    const query = `WITH (tup || (3, 4)) AS res SELECT res, res.1, res.2, res.3, res.4 FROM t_02833;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 151', () => {
    const query = `WITH ((3, 4) || tup) AS res SELECT res, res.1, res.2, res.3, res.4 FROM t_02833;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 152', () => {
    const query = `WITH (SELECT value IN ('ON', '1') FROM system.build_options WHERE name = 'USE_JEMALLOC') AS jemalloc_enabled,
(SELECT count() FROM system.jemalloc_bins) AS total_bins,
(SELECT count() FROM system.jemalloc_bins WHERE large) AS large_bins,
(SELECT count() FROM system.jemalloc_bins WHERE NOT large) AS small_bins,
(SELECT sum(size * (allocations - deallocations)) FROM system.jemalloc_bins WHERE large) AS large_allocated_bytes,
(SELECT sum(size * (allocations - deallocations)) FROM system.jemalloc_bins WHERE NOT large) AS small_allocated_bytes
SELECT
(total_bins > 0) = jemalloc_enabled,
(large_bins > 0) = jemalloc_enabled,
(small_bins > 0) = jemalloc_enabled,
(large_allocated_bytes > 0) = jemalloc_enabled,
(small_allocated_bytes > 0) = jemalloc_enabled;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 153', () => {
    const query = `with c as ( select 1 ID, toDate('2023-06-24') dt, 0 p ) select multiIf(t.ID = 1, formatRowNoNewline('JSONEachRow', dd), '') AS params     from (select ID, case when p = 0 then toString(date_add(hour, p, dt)) else '2022-01-01' end as dd from c) t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 154', () => {
    const query = `with c as ( select 1 ID, toDate('2023-06-24') dt, 0 p ) select multiIf(t.ID = 1, formatRowNoNewline('JSONEachRow', dd), '') AS params, dd from (select ID, case when p = 0 then toString(date_add(hour, p, dt)) else '2022-01-01' end as dd from c) t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 155', () => {
    const query = `WITH toDateTime('2023-06-30 23:59:30') AS dt_ref,
now() AS dt_now, 
date_sub(DAY, 1, dt_now) as dt_before,
dateDiff(SECOND, dt_ref, dt_now) AS time_shift,
formatDateTime(dt_before, '%b %e %T') AS syslog_before
SELECT
formatDateTime(dt_before - time_shift, '%b %e %T') AS syslog_arg,
parseDateTimeBestEffort(syslog_before) - time_shift AS res,
parseDateTimeBestEffortOrNull(syslog_before) - time_shift AS res_null,
parseDateTimeBestEffortOrZero(syslog_before) - time_shift AS res_zero,
parseDateTimeBestEffortUS(syslog_before) - time_shift AS res_us,
parseDateTimeBestEffortUSOrNull(syslog_before) - time_shift AS res_us_null,
parseDateTimeBestEffortUSOrZero(syslog_before) - time_shift AS res_us_zero,
parseDateTime64BestEffort(syslog_before) - time_shift AS res64,
parseDateTime64BestEffortOrNull(syslog_before) - time_shift AS res64_null,
parseDateTime64BestEffortOrZero(syslog_before) - time_shift AS res64_zero,
parseDateTime64BestEffortUS(syslog_before) - time_shift AS res64_us,
parseDateTime64BestEffortUSOrNull(syslog_before) - time_shift AS res64_us_null,
parseDateTime64BestEffortUSOrZero(syslog_before) - time_shift AS res64_us_zero
FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 156', () => {
    const query = `WITH toDateTime('2023-06-30 23:59:30') AS dt_ref,
now() AS dt_now, 
date_add(DAY, 1, dt_now) as dt_after,
dateDiff(SECOND, dt_ref, dt_now) AS time_shift,
formatDateTime(dt_after, '%b %e %T') AS syslog_after
SELECT
formatDateTime(dt_after - time_shift, '%b %e %T') AS syslog_arg,
parseDateTimeBestEffort(syslog_after) - time_shift AS res,
parseDateTimeBestEffortOrNull(syslog_after) - time_shift AS res_null,
parseDateTimeBestEffortOrZero(syslog_after) - time_shift AS res_zero,
parseDateTimeBestEffortUS(syslog_after) - time_shift AS res_us,
parseDateTimeBestEffortUSOrNull(syslog_after) - time_shift AS res_us_null,
parseDateTimeBestEffortUSOrZero(syslog_after) - time_shift AS res_us_zero,
parseDateTime64BestEffort(syslog_after) - time_shift AS res64,
parseDateTime64BestEffortOrNull(syslog_after) - time_shift AS res64_null,
parseDateTime64BestEffortOrZero(syslog_after) - time_shift AS res64_zero,
parseDateTime64BestEffortUS(syslog_after) - time_shift AS res64_us,
parseDateTime64BestEffortUSOrNull(syslog_after) - time_shift AS res64_us_null,
parseDateTime64BestEffortUSOrZero(syslog_after) - time_shift AS res64_us_zero
FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 157', () => {
    const query = `WITH test_cte AS (
SELECT
ref_10.c11 as c_2_c2350_1,
ref_9.c9 as c_2_c2351_2
FROM
test_table_1 as ref_9
RIGHT OUTER JOIN test_table_1 as ref_10 ON (ref_9.c11 = ref_10.c9)
INNER JOIN test_table_2 as ref_11 ON (ref_10.c8 = ref_11.vkey)
WHERE ((ref_10.pkey + ref_11.pkey) BETWEEN ref_11.vkey AND (CASE WHEN (-30.87 >= ref_9.c10) THEN ref_11.c15 ELSE ref_11.pkey END))
)
SELECT ref_13.c_2_c2350_1 as c_2_c2357_3 FROM test_cte as ref_13 WHERE (ref_13.c_2_c2351_2) in (select ref_14.c_2_c2351_2 as c_5_c2352_0 FROM test_cte as ref_14);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 158', () => {
    const query = `with (select count() > 0 from remote('127.2', system.settings)) as s select s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 159', () => {
    const query = `with (select count() > 0 from remote('127.2', remote('127.2', system.settings))) as s select s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 160', () => {
    const query = `with (select count() > 0 from remote('127.2', view(select count() from remote('127.2', system.settings)))) as s select s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 161', () => {
    const query = `WITH 18 AS precision,
toUInt256(-1) AS int,
toUInt256(toFloat64(int)) AS converted,
toString(int) AS int_str,
toString(converted) AS converted_str
SELECT
length(int_str) = length(converted_str) AS have_same_length,
substring(int_str, 1, precision) = substring(converted_str, 1, precision) AS have_same_prefix
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 162', () => {
    const query = `with toDateTime64('2023-01-01 00:00:00.000000001', 9, 'US/Eastern') as c select c+v1 as c_v1, c+v2 as c_v2, c+v3 as c_v3, date_diff(second, c, c_v1), date_diff(hour, c, c_v2), date_diff(second, c, c_v3) from saved_intervals_tmp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 163', () => {
    const query = `with toDateTime64('2023-01-01 00:00:00.000000001', 9, 'US/Eastern') as c select c+v1 as c_v1, c+v2 as c_v2, c+v3 as c_v3, date_diff(second, c, c_v1), date_diff(hour, c, c_v2), date_diff(second, c, c_v3) from saved_intervals_mgt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 164', () => {
    const query = `WITH toIPv4('127.0.0.10') AS ip SELECT
ip = 2130706442::UInt32,
ip = 0::UInt32,
ip < 2130706443::UInt32,
ip > 2130706441::UInt32,
ip <= 2130706442::UInt32,
ip >= 2130706442::UInt32,
ip != 2130706442::UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 165', () => {
    const query = `WITH [(1, 2)] AS arr1 SELECT arrayMap((x, y) -> (y, x), arr1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 166', () => {
    const query = `WITH [(1, 2)] AS arr1 SELECT arrayMap(x -> x.1, arr1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 167', () => {
    const query = `WITH [(1, 2)] AS arr1, [(3, 4)] AS arr2 SELECT arrayMap((x, y) -> (y.1, x.2), arr1, arr2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 168', () => {
    const query = `WITH ((position(path, '/a') > 0) AND (NOT (position(path, 'a') > 0))) OR (path = '/b') OR (path = '/b/') as alias1 SELECT max(alias1) FROM remote('127.0.0.{1,2}', currentDatabase(), test_local) WHERE (id = 299386662);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 169', () => {
    const query = `WITH ('a', 'b')::Tuple(c1 String, c2 String) AS t SELECT t.c1, t.c2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 170', () => {
    const query = `WITH materialize(('a', 'b')::Tuple(c1 String, c2 String)) AS t SELECT t.c1, t.c2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 171', () => {
    const query = `WITH (1, ('a', 'b'))::Tuple(c1 UInt64, t1 Tuple(c1 String, c2 String)) AS t SELECT t.c1, t.t1.c1, t.t1.c2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 172', () => {
    const query = `WITH materialize((1, ('a', 'b'))::Tuple(c1 UInt64, t1 Tuple(c1 String, c2 String))) AS t SELECT t.c1, t.t1.c1, t.t1.c2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 173', () => {
    const query = `WITH [1, 2, 3] AS arr SELECT arr.size0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 174', () => {
    const query = `WITH materialize([1, 2, 3]) AS arr SELECT arr.size0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 175', () => {
    const query = `WITH [1, 2, NULL] AS arr SELECT arr.null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 176', () => {
    const query = `WITH materialize([1, 2, NULL]) AS arr SELECT arr.null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 177', () => {
    const query = `WITH [[1, 2], [], [3]] AS arr SELECT arr.size0, arr.size1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 178', () => {
    const query = `WITH materialize([[1, 2], [], [3]]) AS arr SELECT arr.size0, arr.size1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 179', () => {
    const query = `WITH map('foo', 1, 'bar', 2) AS m SELECT m.keys, m.values;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 180', () => {
    const query = `WITH materialize(map('foo', 1, 'bar', 2)) AS m SELECT m.keys, m.values;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 181', () => {
    const query = `WITH map('foo', 1, 'bar', 2) AS m SELECT m.*;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 182', () => {
    const query = `WITH map('foo', (1, 2), 'bar', (3, 4))::Map(String, Tuple(a UInt64, b UInt64)) AS m SELECT m.keys, m.values, m.values.a, m.values.b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 183', () => {
    const query = `WITH materialize(map('foo', (1, 2), 'bar', (3, 4))::Map(String, Tuple(a UInt64, b UInt64))) AS m SELECT m.keys, m.values, m.values.a, m.values.b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 184', () => {
    const query = `WITH map('foo', (1, 2), 'bar', (3, 4))::Map(String, Tuple(a UInt64, b UInt64)) AS m SELECT m.keys, m.values, m.values.*;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 185', () => {
    const query = `WITH materialize(map('foo', (1, 2), 'bar', (3, 4))::Map(String, Tuple(a UInt64, b UInt64))) AS m SELECT m.keys, m.values, m.values.*;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 186', () => {
    const query = `WITH [1, 2, 3] AS arr SELECT arr.*; -- { serverError UNSUPPORTED_METHOD } SELECT getSubcolumn([1, 2, 3], 'size0');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 187', () => {
    const query = `WITH 1 as a SELECT a, FROM numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 188', () => {
    const query = `WITH 1 as from SELECT from, from + from, from in [0], FROM numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 189', () => {
    const query = `with arrayJoin([0, 1, 2, 10]) as x select quantilesGK(100, 0.5, 0.4, 0.1)(x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 190', () => {
    const query = `with arrayJoin([0, 6, 7, 9, 10]) as x select quantileGK(100, 0.5)(x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 191', () => {
    const query = `with number + 1 as col select quantilesGK(10000, 0.25, 0.5, 0.75)(col), count(col), quantilesGK(10000, 0.0, 1.0)(col), sum(col) from numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 192', () => {
    const query = `WITH ( SELECT uuid
FROM system.tables
WHERE (database = currentDatabase()) AND (name = '02581_trips')
) AS table_uuid
SELECT
CAST(splitByChar('_', query_id)[5], 'UInt64') AS mutation_version, -- '5521485f-8a40-4aba-87a2-00342c369563::all_3_3_0_6'
sum(message LIKE 'Created Set with % entries%') >= 1  AS has_parts_for_which_set_was_built,
sum(message LIKE 'Got set from cache%') >= 1 AS has_parts_that_shared_set
FROM system.text_log
WHERE
query_id LIKE concat(CAST(table_uuid, 'String'), '::all\\\\_%')
AND (event_date >= yesterday())
AND (message LIKE 'Created Set with % entries%' OR message LIKE 'Got set from cache%')
GROUP BY mutation_version ORDER BY mutation_version FORMAT TSVWithNames;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 193', () => {
    const query = `WITH pow(NULL, 256) AS four SELECT NULL AS two GROUP BY GROUPING SETS ((pow(two, 65536)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 194', () => {
    const query = `WITH (SELECT pow(two, 1) GROUP BY GROUPING SETS ((pow(1, 9)))) AS four SELECT 2 AS two GROUP BY pow(1, two);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 195', () => {
    const query = `WITH splitByChar('_', part_name) AS name_parts, name_parts[2]::UInt64 AS min_block,
name_parts[3]::UInt64 AS max_block
SELECT min_block, max_block, event_type, merge_algorithm, part_type FROM system.part_log
WHERE
database = currentDatabase() AND
table = 't_compact_vertical_merge' AND
min_block = 1 AND max_block = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 196', () => {
    const query = `WITH splitByChar('_', part_name) AS name_parts, name_parts[2]::UInt64 AS min_block,
name_parts[3]::UInt64 AS max_block
SELECT min_block, max_block, event_type, merge_algorithm, part_type FROM system.part_log
WHERE
database = currentDatabase() AND
table = 't_compact_vertical_merge' AND
min_block = 1 AND max_block = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 197', () => {
    const query = `with toDate('2023-01-09') as date_mon, date_mon - 1 as date_sun select toDayOfWeek(date_mon), toDayOfWeek(date_sun);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 198', () => {
    const query = `with toDate('2023-01-09') as date_mon, date_mon - 1 as date_sun select toDayOfWeek(date_mon, 0), toDayOfWeek(date_sun, 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 199', () => {
    const query = `with toDate('2023-01-09') as date_mon, date_mon - 1 as date_sun select toDayOfWeek(date_mon, 1), toDayOfWeek(date_sun, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 200', () => {
    const query = `with toDate('2023-01-09') as date_mon, date_mon - 1 as date_sun select toDayOfWeek(date_mon, 2), toDayOfWeek(date_sun, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 201', () => {
    const query = `with toDate('2023-01-09') as date_mon, date_mon - 1 as date_sun select toDayOfWeek(date_mon, 3), toDayOfWeek(date_sun, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 202', () => {
    const query = `with toDate('2023-01-09') as date_mon, date_mon - 1 as date_sun select toDayOfWeek(date_mon, 4), toDayOfWeek(date_sun, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 203', () => {
    const query = `with toDate('2023-01-09') as date_mon, date_mon - 1 as date_sun select toDayOfWeek(date_mon, 5), toDayOfWeek(date_sun, 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 204', () => {
    const query = `with toUInt64(id) as id_with select day, count(id_with) from test where day >= '2023-01-01' group by day limit 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 205', () => {
    const query = `with NULL as pid select a.col1, sum(a.col2) as summ
from table1 a
prewhere (pid is null or a.col2 = pid)
group by a.col1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 206', () => {
    const query = `with 123 as pid select a.col1, sum(a.col2) as summ
from table1 a
prewhere (pid is null or a.col2 = pid)
group by a.col1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 207', () => {
    const query = `WITH extractKeyValuePairs('name:neymar, age:31 team:psg,nationality:brazil') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 208', () => {
    const query = `WITH extractKeyValuePairs('1name:neymar, 4ge:31 _team:_psg,\$nationality:@brazil') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 209', () => {
    const query = `WITH extractKeyValuePairs('_:_, @:@ #:#,\$:\$') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 210', () => {
    const query = `WITH extractKeyValuePairs('name:ney!mar, age:3! t&am:@psg,nationality:br4z!l') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 211', () => {
    const query = `WITH extractKeyValuePairs('currency:\\\$USD, amount\\z:\$5\\h') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 212', () => {
    const query = `WITH extractKeyValuePairsWithEscaping('valid_key:valid_value key:invalid_escape_sequence\\\\', ':', ' ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 213', () => {
    const query = `WITH extractKeyValuePairs('name:"neymar", "age":31 "team":"psg"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 214', () => {
    const query = `WITH extractKeyValuePairs('name:"", age: , nationality:') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 215', () => {
    const query = `WITH extractKeyValuePairs('"":abc, :def') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 216', () => {
    const query = `WITH extractKeyValuePairs('name:neymar;age:31;team:psg;random_key:value_with_comma,still_part_of_value:still_part_of_value;anotherkey:anothervalue', ':', ';') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 217', () => {
    const query = `WITH extractKeyValuePairs('name:neymar;age:31;team:psg;nationality:brazil,last_key:last_value', ':', ';,') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 218', () => {
    const query = `WITH extractKeyValuePairs('name:\\'neymar\\';\\'age\\':31;team:psg;nationality:brazil,last_key:last_value', ':', ';,', '\\'') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 219', () => {
    const query = `WITH extractKeyValuePairs('name:neymar, age:31 team:psg,nationality:brazil', ':', ', ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 220', () => {
    const query = `WITH extractKeyValuePairs('name:ney!mar, age:3! t&am:@psg,nationality:br4z!l', ':', ', ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 221', () => {
    const query = `WITH extractKeyValuePairs('currency:\\\$USD, amount\\z:\$5\\h', ':', ', ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 222', () => {
    const query = `WITH extractKeyValuePairs('key1:header\\nbody key2:start_of_text\\tend_of_text', ':', ', ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 223', () => {
    const query = `WITH extractKeyValuePairs('name:"neymar", "age":31 "team":"psg"', ':', ', ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 224', () => {
    const query = `WITH extractKeyValuePairs('name:"", age: , nationality:', ':', ', ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 225', () => {
    const query = `WITH extractKeyValuePairs('"":abc, :def', ':', ', ', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 226', () => {
    const query = `WITH extractKeyValuePairs('name:neymar;age:31;team:psg;nationality:brazil', ':', ';', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 227', () => {
    const query = `WITH extractKeyValuePairs('name:neymar;age:31;team:psg;nationality:brazil,last_key:last_value', ':', ';,', '"') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 228', () => {
    const query = `WITH extractKeyValuePairs('not_important', ':', ',:', '\\'') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError BAD_ARGUMENTS}
WITH
extractKeyValuePairs('not_important', ':', ',', '\\':') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError BAD_ARGUMENTS}
WITH
extractKeyValuePairs('not_important', ':', ',', ',') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError BAD_ARGUMENTS}
WITH
extractKeyValuePairs([1, 2]) AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
WITH
extractKeyValuePairs('', [1, 2]) AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
WITH
extractKeyValuePairs('', ':', [1, 2]) AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
WITH
extractKeyValuePairs('', ':', ' ', [1, 2]) AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
WITH
extractKeyValuePairs('not_important', ':', '123456789', '\\'') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError BAD_ARGUMENTS}
WITH
extractKeyValuePairs() AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
WITH
extractKeyValuePairs('a', ':', ',', '"', '') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError NUMBER_OF_ARGUMENTS_DOESNT_MATCH}
SET extract_key_value_pairs_max_pairs_per_row = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 229', () => {
    const query = `WITH extractKeyValuePairs('key1:value1,key2:value2') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x; -- {serverError LIMIT_EXCEEDED}
SET extract_key_value_pairs_max_pairs_per_row = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 230', () => {
    const query = `WITH extractKeyValuePairs('key1:value1,key2:value2') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 231', () => {
    const query = `WITH extractKeyValuePairs('not_important', ':', '12345678', '\\'') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 232', () => {
    const query = `WITH extractKeyValuePairs('formula=1+2=3 argument1=1 argument2=2 result=3, char="=" char2== string="foo=bar"', '=') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 233', () => {
    const query = `WITH extractKeyValuePairs('{"a":"1", "b":"2"}') as s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 234', () => {
    const query = `WITH sTr_tO_mAp('name:neymar, age:31 team:psg,nationality:brazil') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 235', () => {
    const query = `WITH mapFromString('name:neymar, age:31 team:psg,nationality:brazil') AS s_map,
CAST(
arrayMap(
(x) -> (x, s_map[x]), arraySort(mapKeys(s_map))
),
'Map(String,String)'
) AS x
SELECT
x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 236', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'S', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 237', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 238', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SSS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 239', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SSSS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 240', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SSSSS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 241', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SSSSSS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 242', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SSSSSSS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 243', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SSSSSSSS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 244', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT fromUnixTimestampInJodaSyntax(datetime64, 'SSSSSSSSS', 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 245', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'G'), formatDateTimeInJodaSyntax(datetime64, 'G'), formatDateTimeInJodaSyntax(date, 'G'), formatDateTimeInJodaSyntax(date32, 'G');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 246', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'GG'), formatDateTimeInJodaSyntax(datetime64, 'GG'), formatDateTimeInJodaSyntax(date, 'GG'), formatDateTimeInJodaSyntax(date32, 'GG');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 247', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'GGG'), formatDateTimeInJodaSyntax(datetime64, 'GGG'), formatDateTimeInJodaSyntax(date, 'GGG'), formatDateTimeInJodaSyntax(date32, 'GGG');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 248', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'GGGG'), formatDateTimeInJodaSyntax(datetime64, 'GGGG'), formatDateTimeInJodaSyntax(date, 'GGGG'), formatDateTimeInJodaSyntax(date32, 'GGGG');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 249', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'GGGGG'), formatDateTimeInJodaSyntax(datetime64, 'GGGGG'), formatDateTimeInJodaSyntax(date, 'GGGGG'), formatDateTimeInJodaSyntax(date32, 'GGGGG');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 250', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'C'), formatDateTimeInJodaSyntax(datetime64, 'C'), formatDateTimeInJodaSyntax(date, 'C'), formatDateTimeInJodaSyntax(date32, 'C');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 251', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'CC'), formatDateTimeInJodaSyntax(datetime64, 'CC'), formatDateTimeInJodaSyntax(date, 'CC'), formatDateTimeInJodaSyntax(date32, 'CC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 252', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'CCC'), formatDateTimeInJodaSyntax(datetime64, 'CCC'), formatDateTimeInJodaSyntax(date, 'CCC'), formatDateTimeInJodaSyntax(date32, 'CCC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 253', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'Y'), formatDateTimeInJodaSyntax(datetime64, 'Y'), formatDateTimeInJodaSyntax(date, 'Y'), formatDateTimeInJodaSyntax(date32, 'Y');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 254', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'YY'), formatDateTimeInJodaSyntax(datetime64, 'YY'), formatDateTimeInJodaSyntax(date, 'YY'), formatDateTimeInJodaSyntax(date32, 'YY');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 255', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'YYY'), formatDateTimeInJodaSyntax(datetime64, 'YYY'), formatDateTimeInJodaSyntax(date, 'YYY'), formatDateTimeInJodaSyntax(date32, 'YYY');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 256', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'YYYY'), formatDateTimeInJodaSyntax(datetime64, 'YYYY'), formatDateTimeInJodaSyntax(date, 'YYYY'), formatDateTimeInJodaSyntax(date32, 'YYYY');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 257', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'YYYYY'), formatDateTimeInJodaSyntax(datetime64, 'YYYYY'), formatDateTimeInJodaSyntax(date, 'YYYYY'), formatDateTimeInJodaSyntax(date32, 'YYYYY');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 258', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'e'), formatDateTimeInJodaSyntax(datetime64, 'e'), formatDateTimeInJodaSyntax(date, 'e'), formatDateTimeInJodaSyntax(date32, 'e');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 259', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'ee'), formatDateTimeInJodaSyntax(datetime64, 'ee'), formatDateTimeInJodaSyntax(date, 'ee'), formatDateTimeInJodaSyntax(date32, 'ee');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 260', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'EEE'), formatDateTimeInJodaSyntax(datetime64, 'EEE'), formatDateTimeInJodaSyntax(date, 'EEE'), formatDateTimeInJodaSyntax(date32, 'EEE');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 261', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'EEEE'), formatDateTimeInJodaSyntax(datetime64, 'EEEE'), formatDateTimeInJodaSyntax(date, 'EEEE'), formatDateTimeInJodaSyntax(date32, 'EEEE');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 262', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'EEEEE'), formatDateTimeInJodaSyntax(datetime64, 'EEEEE'), formatDateTimeInJodaSyntax(date, 'EEEEE'), formatDateTimeInJodaSyntax(date32, 'EEEEE');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 263', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'D'), formatDateTimeInJodaSyntax(datetime64, 'D'), formatDateTimeInJodaSyntax(date, 'D'), formatDateTimeInJodaSyntax(date32, 'D');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 264', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'DD'), formatDateTimeInJodaSyntax(datetime64, 'DD'), formatDateTimeInJodaSyntax(date, 'DD'), formatDateTimeInJodaSyntax(date32, 'DD');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 265', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'DDD'), formatDateTimeInJodaSyntax(datetime64, 'DDD'), formatDateTimeInJodaSyntax(date, 'DDD'), formatDateTimeInJodaSyntax(date32, 'DDD');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 266', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'M'), formatDateTimeInJodaSyntax(datetime64, 'M'), formatDateTimeInJodaSyntax(date, 'M'), formatDateTimeInJodaSyntax(date32, 'M');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 267', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'MM'), formatDateTimeInJodaSyntax(datetime64, 'MM'), formatDateTimeInJodaSyntax(date, 'MM'), formatDateTimeInJodaSyntax(date32, 'MM');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 268', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'MMM'), formatDateTimeInJodaSyntax(datetime64, 'MMM'), formatDateTimeInJodaSyntax(date, 'MMM'), formatDateTimeInJodaSyntax(date32, 'MMM');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 269', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'MMMM'), formatDateTimeInJodaSyntax(datetime64, 'MMMM'), formatDateTimeInJodaSyntax(date, 'MMMM'), formatDateTimeInJodaSyntax(date32, 'MMMM');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 270', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'a'), formatDateTimeInJodaSyntax(datetime64, 'a'), formatDateTimeInJodaSyntax(date, 'a'), formatDateTimeInJodaSyntax(date32, 'a');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 271', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'aa'), formatDateTimeInJodaSyntax(datetime64, 'aa'), formatDateTimeInJodaSyntax(date, 'aa'), formatDateTimeInJodaSyntax(date32, 'aa');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 272', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'aaa'), formatDateTimeInJodaSyntax(datetime64, 'aaa'), formatDateTimeInJodaSyntax(date, 'aaa'), formatDateTimeInJodaSyntax(date32, 'aaa');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 273', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'K'), formatDateTimeInJodaSyntax(datetime64, 'K'), formatDateTimeInJodaSyntax(date, 'K'), formatDateTimeInJodaSyntax(date32, 'K');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 274', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'KK'), formatDateTimeInJodaSyntax(datetime64, 'KK'), formatDateTimeInJodaSyntax(date, 'KK'), formatDateTimeInJodaSyntax(date32, 'KK');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 275', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'KKK'), formatDateTimeInJodaSyntax(datetime64, 'KKK'), formatDateTimeInJodaSyntax(date, 'KKK'), formatDateTimeInJodaSyntax(date32, 'KKK');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 276', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'h'), formatDateTimeInJodaSyntax(datetime64, 'h'), formatDateTimeInJodaSyntax(date, 'h'), formatDateTimeInJodaSyntax(date32, 'h');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 277', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'hh'), formatDateTimeInJodaSyntax(datetime64, 'hh'), formatDateTimeInJodaSyntax(date, 'hh'), formatDateTimeInJodaSyntax(date32, 'hh');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 278', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'hhh'), formatDateTimeInJodaSyntax(datetime64, 'hhh'), formatDateTimeInJodaSyntax(date, 'hhh'), formatDateTimeInJodaSyntax(date32, 'hhh');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 279', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 's'), formatDateTimeInJodaSyntax(datetime64, 's'), formatDateTimeInJodaSyntax(date, 's'), formatDateTimeInJodaSyntax(date32, 's');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 280', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'ss'), formatDateTimeInJodaSyntax(datetime64, 'ss'), formatDateTimeInJodaSyntax(date, 'ss'), formatDateTimeInJodaSyntax(date32, 'ss');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 281', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'sss'), formatDateTimeInJodaSyntax(datetime64, 'sss'), formatDateTimeInJodaSyntax(date, 'sss'), formatDateTimeInJodaSyntax(date32, 'sss');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 282', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s, 'UTC') as datetime, toDateTime64(s, 6, 'UTC') as datetime64, toDate(s) as date, toDate32(s) as date32 select formatDateTimeInJodaSyntax(datetime, 'zzzz'), formatDateTimeInJodaSyntax(datetime64, 'zzzz');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 283', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'G123DDD'), formatDateTimeInJodaSyntax(datetime64, 'G123DDD'), formatDateTimeInJodaSyntax(date, 'G123DDD'), formatDateTimeInJodaSyntax(date32, 'G123DDD');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 284', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'G\\'\\'DDD'), formatDateTimeInJodaSyntax(datetime64, 'G\\'\\'DDD'), formatDateTimeInJodaSyntax(date, 'G\\'\\'DDD'), formatDateTimeInJodaSyntax(date32, 'G\\'\\'DDD');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 285', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'G\\'aaa\\'DDD'), formatDateTimeInJodaSyntax(datetime64, 'G\\'aaa\\'DDD'), formatDateTimeInJodaSyntax(date, 'G\\'aaa\\'DDD'), formatDateTimeInJodaSyntax(date32, 'G\\'aaa\\'DDD');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 286', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'G\\'a\\'\\'aa\\'DDD'), formatDateTimeInJodaSyntax(datetime64, 'G\\'a\\'\\'aa\\'DDD'), formatDateTimeInJodaSyntax(date, 'G\\'a\\'\\'aa\\'DDD'), formatDateTimeInJodaSyntax(date32, 'G\\'a\\'\\'aa\\'DDD');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 287', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'x'), formatDateTimeInJodaSyntax(datetime64, 'x'), formatDateTimeInJodaSyntax(date, 'x'), formatDateTimeInJodaSyntax(date32, 'x');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 288', () => {
    const query = `with '2018-01-12 22:33:44' as s, toDateTime(s) as datetime, toDateTime64(s, 6) as datetime64, toDate(s) as date, toDate32(s) as date32 SELECT formatDateTimeInJodaSyntax(datetime, 'w'), formatDateTimeInJodaSyntax(datetime64, 'w'), formatDateTimeInJodaSyntax(date, 'w'), formatDateTimeInJodaSyntax(date32, 'w');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 289', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'S');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 290', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 291', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 292', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 293', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSSSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 294', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSSSSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 295', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSSSSSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 296', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSSSSSSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 297', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSSSSSSSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 298', () => {
    const query = `with '2018-01-12 22:33:44.55' as s, toDateTime64(s, 6) as datetime64 SELECT formatDateTimeInJodaSyntax(datetime64, 'SSSSSSSSSS');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 299', () => {
    const query = `WITH splitByChar('_', _file)[3]::UInt64 AS num SELECT count(), min(num), max(num)
FROM  s3(s3_conn, filename = 'test_02495_*', format = Parquet)
WHERE num >= 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 300', () => {
    const query = `WITH a AS (SELECT t1.number AS n1, t2.number AS n2 FROM numbers(1) AS t1, numbers(1) AS t2), b AS (SELECT sum(n1) AS s FROM a) SELECT * FROM b AS l, a AS r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 301', () => {
    const query = `WITH a AS (SELECT number FROM numbers(1)), b AS (SELECT number FROM a) SELECT * FROM b as l, a as r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 302', () => {
    const query = `WITH a AS (SELECT number FROM numbers(1)), b AS (SELECT number FROM a) SELECT * FROM a as l, b as r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 303', () => {
    const query = `with (select uuid from system.tables where database = currentDatabase() and table = 'data_02491') as table_uuid_ select
table_uuid != toUUIDOrDefault(Null),
event_type,
merge_reason,
part_name
from system.part_log
where
database = currentDatabase() and
table = 'data_02491' and
table_uuid = table_uuid_
order by event_time_microseconds;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 304', () => {
    const query = `WITH cte_subquery AS (SELECT 1) SELECT * FROM cte_subquery AS cte_subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 305', () => {
    const query = `WITH cte_subquery AS (SELECT 1) SELECT * FROM cte_subquery AS cte_subquery, cte_subquery AS subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 306', () => {
    const query = `WITH subquery AS (SELECT sum(number) FROM numbers(10)) SELECT * FROM subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 307', () => {
    const query = `WITH subquery AS (SELECT sum(number) FROM numbers(10)) SELECT (SELECT * FROM subquery);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 308', () => {
    const query = `WITH map(1, 2, 3, NULL) AS m SELECT m[toNullable(1)], m[toNullable(2)], m[toNullable(3)];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 309', () => {
    const query = `WITH map(1, 2, 3, NULL) AS m SELECT m[materialize(toNullable(1))], m[materialize(toNullable(2))], m[materialize(toNullable(3))];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 310', () => {
    const query = `WITH materialize(map(1, 2, 3, NULL)) AS m SELECT m[toNullable(1)], m[toNullable(2)], m[toNullable(3)];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 311', () => {
    const query = `WITH materialize(map(1, 2, 3, NULL)) AS m SELECT m[materialize(toNullable(1))], m[materialize(toNullable(2))], m[materialize(toNullable(3))];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 312', () => {
    const query = `WITH map('a', 2, 'b', NULL) AS m SELECT m[toNullable('a')], m[toNullable('b')], m[toNullable('c')];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 313', () => {
    const query = `WITH map('a', 2, 'b', NULL) AS m SELECT m[materialize(toNullable('a'))], m[materialize(toNullable('b'))], m[materialize(toNullable('c'))];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 314', () => {
    const query = `WITH materialize(map('a', 2, 'b', NULL)) AS m SELECT m[toNullable('a')], m[toNullable('b')], m[toNullable('c')];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 315', () => {
    const query = `WITH materialize(map('a', 2, 'b', NULL)) AS m SELECT m[materialize(toNullable('a'))], m[materialize(toNullable('b'))], m[materialize(toNullable('c'))];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 316', () => {
    const query = `WITH map(1, 2, 3, NULL) AS m SELECT m[1], m[2], m[3];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 317', () => {
    const query = `WITH map(1, 2, 3, NULL) AS m SELECT m[materialize(1)], m[materialize(2)], m[materialize(3)];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 318', () => {
    const query = `WITH materialize(map(1, 2, 3, NULL)) AS m SELECT m[1], m[2], m[3];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 319', () => {
    const query = `WITH materialize(map(1, 2, 3, NULL)) AS m SELECT m[materialize(1)], m[materialize(2)], m[materialize(3)];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 320', () => {
    const query = `WITH map('a', 2, 'b', NULL) AS m SELECT m['a'], m['b'], m['c'];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 321', () => {
    const query = `WITH map('a', 2, 'b', NULL) AS m SELECT m[materialize('a')], m[materialize('b')], m[materialize('c')];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 322', () => {
    const query = `WITH materialize(map('a', 2, 'b', NULL)) AS m SELECT m['a'], m['b'], m['c'];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 323', () => {
    const query = `WITH materialize(map('a', 2, 'b', NULL)) AS m SELECT m[materialize('a')], m[materialize('b')], m[materialize('c')];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 324', () => {
    const query = `WITH tuple(INTERVAL 1 SECOND) - INTERVAL 1 SECOND as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 325', () => {
    const query = `WITH INTERVAL 1 SECOND + tuple(INTERVAL 1 SECOND) as expr SELECT expr, toTypeName(expr); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT } WITH INTERVAL 1 SECOND - tuple(INTERVAL 1 SECOND) as expr SELECT expr, toTypeName(expr); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
SELECT '---';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 326', () => {
    const query = `WITH INTERVAL 1 SECOND + INTERVAL 1 SECOND + INTERVAL 1 SECOND as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 327', () => {
    const query = `WITH INTERVAL 1 HOUR + INTERVAL 1 SECOND + INTERVAL 1 SECOND as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 328', () => {
    const query = `WITH INTERVAL 1 SECOND + INTERVAL 1 HOUR + INTERVAL 1 SECOND as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 329', () => {
    const query = `WITH INTERVAL 1 SECOND + INTERVAL 1 SECOND + INTERVAL 1 HOUR as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 330', () => {
    const query = `WITH - INTERVAL 1 SECOND - INTERVAL 1 SECOND - INTERVAL 1 SECOND as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 331', () => {
    const query = `WITH - INTERVAL 1 HOUR - INTERVAL 1 SECOND - INTERVAL 1 SECOND as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 332', () => {
    const query = `WITH - INTERVAL 1 SECOND - INTERVAL 1 HOUR - INTERVAL 1 SECOND as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 333', () => {
    const query = `WITH - INTERVAL 1 SECOND - INTERVAL 1 SECOND - INTERVAL 1 HOUR as expr SELECT expr, toTypeName(expr);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 334', () => {
    const query = `WITH '2022-01-30'::Date + INTERVAL 1 MONTH + INTERVAL 1 DAY AS e1, '2022-01-30'::Date + (INTERVAL 1 MONTH + INTERVAL 1 DAY) AS e2,
'2022-01-30'::Date + (INTERVAL 1 MONTH, INTERVAL 1 DAY) AS e3,
'2022-01-30'::Date + INTERVAL '1 MONTH 1 DAY' AS e4
SELECT e1 == e2 AND e2 == e3 AND e3 == e4, e1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 335', () => {
    const query = `WITH '2022-01-30'::Date + INTERVAL 1 DAY + INTERVAL 1 MONTH AS e1, '2022-01-30'::Date + (INTERVAL 1 DAY + INTERVAL 1 MONTH) AS e2,
'2022-01-30'::Date + (INTERVAL 1 DAY, INTERVAL 1 MONTH) AS e3,
'2022-01-30'::Date + INTERVAL '1 DAY 1 MONTH' AS e4
SELECT e1 == e2 AND e2 == e3 AND e3 == e4, e1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 336', () => {
    const query = `WITH '2022-10-11'::Date + INTERVAL -1 SECOND + INTERVAL 2 MINUTE + INTERVAL -3 MONTH + INTERVAL 1 YEAR AS e1, '2022-10-11'::Date + (INTERVAL -1 SECOND + INTERVAL 2 MINUTE + INTERVAL -3 MONTH + INTERVAL 1 YEAR) AS e2,
'2022-10-11'::Date + (INTERVAL -1 SECOND, INTERVAL 2 MINUTE, INTERVAL -3 MONTH, INTERVAL 1 YEAR) AS e3,
'2022-10-11'::Date + INTERVAL '-1 SECOND 2 MINUTE -3 MONTH 1 YEAR' AS e4
SELECT e1 == e2 AND e2 == e3 AND e3 == e4, e1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 337', () => {
    const query = `WITH '2022-10-11'::DateTime - INTERVAL 1 QUARTER - INTERVAL -3 WEEK - INTERVAL 1 YEAR - INTERVAL 1 HOUR AS e1, '2022-10-11'::DateTime + (- INTERVAL 1 QUARTER - INTERVAL -3 WEEK - INTERVAL 1 YEAR - INTERVAL 1 HOUR) AS e2,
'2022-10-11'::DateTime - (INTERVAL 1 QUARTER, INTERVAL -3 WEEK, INTERVAL 1 YEAR, INTERVAL 1 HOUR) AS e3,
'2022-10-11'::DateTime - INTERVAL '1 QUARTER -3 WEEK 1 YEAR 1 HOUR' AS e4
SELECT e1 == e2 AND e2 == e3 AND e3 == e4, e1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 338', () => {
    const query = `WITH '2022-10-11'::DateTime64 - INTERVAL 1 YEAR - INTERVAL 4 MONTH - INTERVAL 1 SECOND AS e1, '2022-10-11'::DateTime64 + (- INTERVAL 1 YEAR - INTERVAL 4 MONTH - INTERVAL 1 SECOND) AS e2,
'2022-10-11'::DateTime64 - (INTERVAL 1 YEAR, INTERVAL 4 MONTH, INTERVAL 1 SECOND) AS e3,
'2022-10-11'::DateTime64 - INTERVAL '1 YEAR 4 MONTH 1 SECOND' AS e4
SELECT e1 == e2 AND e2 == e3 AND e3 == e4, e1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 339', () => {
    const query = `WITH 1 as n FROM numbers(1) SELECT number * n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 340', () => {
    const query = `WITH arrayJoin([1, 2, 3, nan, 4, 5]) AS data,
arrayJoin([nan, 1, 2, 3, 4]) AS data2,
arrayJoin([1, 2, 3, 4, nan]) AS data3,
arrayJoin([nan, nan, nan]) AS data4,
arrayJoin([nan, 1, 2, 3, nan]) AS data5
SELECT
min(data),
min(data2),
min(data3),
min(data4),
min(data5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 341', () => {
    const query = `WITH arrayJoin([1, 2, 3, nan, 4, 5]) AS data,
arrayJoin([nan, 1, 2, 3, 4]) AS data2,
arrayJoin([1, 2, 3, 4, nan]) AS data3,
arrayJoin([nan, nan, nan]) AS data4,
arrayJoin([nan, 1, 2, 3, nan]) AS data5
SELECT
max(data),
max(data2),
max(data3),
max(data4),
max(data5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 342', () => {
    const query = `WITH x -> toString(x) AS lambda SELECT arrayMap(x -> lambda(x), [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 343', () => {
    const query = `WITH x -> toString(x) AS lambda SELECT arrayMap(x -> arrayMap(y -> concat(lambda(x), '_', lambda(y)), [1,2,3]), [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 344', () => {
    const query = `WITH x -> toString(id) AS lambda SELECT arrayMap(x -> lambda(x), [1,2,3]) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 345', () => {
    const query = `WITH x -> toString(id) AS lambda SELECT arrayMap(x -> arrayMap(y -> lambda(y), [1,2,3]), [1,2,3]) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 346', () => {
    const query = `WITH x -> toString(id) AS lambda SELECT arrayMap(x -> arrayMap(y -> concat(lambda(x), '_', lambda(y)), [1,2,3]), [1,2,3]) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 347', () => {
    const query = `WITH x -> plus(lambda(1), x) AS lambda SELECT lambda(1048576); -- { serverError UNSUPPORTED_METHOD };`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 348', () => {
    const query = `WITH lambda(lambda(plus(x, x, -1)), tuple(x), x + 2147483646) AS lambda, x -> plus(lambda(1), x, 2) AS lambda SELECT 1048576, lambda(1048576); -- { serverError UNSUPPORTED_METHOD };`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 349', () => {
    const query = `WITH cte_subquery AS (SELECT 1) SELECT * FROM cte_subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 350', () => {
    const query = `WITH cte_subquery AS (SELECT * FROM test_table) SELECT * FROM cte_subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 351', () => {
    const query = `WITH cte_subquery AS (SELECT 1 UNION DISTINCT SELECT 1) SELECT * FROM cte_subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 352', () => {
    const query = `WITH cte_subquery AS (SELECT * FROM test_table UNION DISTINCT SELECT * FROM test_table) SELECT * FROM cte_subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 353', () => {
    const query = `WITH  'John' AS name,  toDate('1990-01-01') AS birthdate SELECT * FROM numbers(10)
WHERE (number, name, birthdate) IN (userid_set2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 354', () => {
    const query = `WITH (x -> x + 1) AS lambda SELECT lambda(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 355', () => {
    const query = `WITH (x -> x + 1) AS lambda SELECT lambda.nested(1); -- { serverError BAD_ARGUMENTS } SELECT '--';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 356', () => {
    const query = `WITH 'test_dictionary' AS dictionary SELECT dictGet(dictionary, 'value', toUInt64(0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 357', () => {
    const query = `WITH 'invalid_dictionary' AS dictionary SELECT dictGet(dictionary, 'value', toUInt64(0)); -- { serverError BAD_ARGUMENTS } DROP DICTIONARY test_dictionary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 358', () => {
    const query = `WITH 'test_table_join' AS join_table SELECT joinGet(join_table, 'value', toUInt64(0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 359', () => {
    const query = `WITH 'invalid_test_table_join' AS join_table SELECT joinGet(join_table, 'value', toUInt64(0)); -- { serverError UNKNOWN_TABLE } DROP TABLE test_table_join;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 360', () => {
    const query = `WITH groupArray((table, bytes))::Map(String, UInt64) AS stats SELECT
length(stats), stats['t_modify_from_lc_1'] < stats['t_modify_from_lc_2']
FROM
(
SELECT table, sum(bytes_on_disk) AS bytes FROM system.parts
WHERE database = currentDatabase() AND table LIKE 't_modify_from_lc%' AND active
GROUP BY table
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 361', () => {
    const query = `WITH cte_test_table_for_in AS (SELECT id FROM test_table_for_in) SELECT id, value FROM test_table WHERE id IN cte_test_table_for_in;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 362', () => {
    const query = `WITH cte_test_table_for_in AS (SELECT id FROM test_table_for_in) SELECT id, value FROM test_table WHERE id IN (SELECT id FROM cte_test_table_for_in UNION DISTINCT SELECT id FROM cte_test_table_for_in);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 363', () => {
    const query = `WITH ( SELECT toLowCardinality('a') ) AS bar SELECT bar`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 364', () => {
    const query = `WITH [1, 2, 3] AS constant_array SELECT id, value FROM test_table ARRAY JOIN constant_array AS value;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 365', () => {
    const query = `WITH [1, 2, 3] AS constant_array SELECT id, value, value_1 FROM test_table ARRAY JOIN constant_array AS value_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 366', () => {
    const query = `WITH 'CSV', '1,2,"[1,2,3]","[[\\'abc\\'], [], [\\'d\\', \\'e\\']]"' AS format_value SELECT c1, c2, c3, c4 FROM format('CSV', format_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 367', () => {
    const query = `WITH concat('1,2,"[1,2,3]",','"[[\\'abc\\'], [], [\\'d\\', \\'e\\']]"') AS format_value SELECT c1, c2, c3, c4 FROM format('CSV', format_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 368', () => {
    const query = `WITH v1 AS (SELECT t1.c2, t2.c2, t2.c3 FROM t1 ASOF JOIN t2 USING (c1, c2))
SELECT count() FROM v1 WHERE c3 = 'b';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 369', () => {
    const query = `WITH b AS bb SELECT bb FROM t2 WHERE a IN (SELECT a FROM t1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 370', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 371', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, cosineDistance(vec, reference_vec)
FROM tab
ORDER BY cosineDistance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 372', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_f64
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 373', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_f32
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 374', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_f16
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 375', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_bf16
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 376', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_i8
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 377', () => {
    const query = `WITH [0.0, 2.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3; -- { serverError SIZES_OF_ARRAYS_DONT_MATCH }
DROP TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 378', () => {
    const query = `WITH [1.0, 0.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab
ORDER BY L2Distance(vec, reference_vec)
LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 379', () => {
    const query = `WITH [9000.0, 0.0] AS reference_vec SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab
ORDER BY L2Distance(vec, reference_vec)
LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 380', () => {
    const query = `WITH 1 AS a SELECT (SELECT a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 381', () => {
    const query = `WITH 1 AS global_a SELECT a FROM (SELECT global_a AS a) AS b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 382', () => {
    const query = `WITH 1 AS global_a SELECT b.a FROM (SELECT global_a AS a) AS b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 383', () => {
    const query = `WITH 1 AS a SELECT (SELECT * FROM (SELECT * FROM (SELECT a + 1)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 384', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT * FROM subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 385', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT a FROM subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 386', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT subquery.a FROM subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 387', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT subquery.* FROM subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 388', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT subquery.* APPLY toString FROM subquery;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 389', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT subquery_alias.a FROM subquery AS subquery_alias;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 390', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT subquery_alias.* FROM subquery AS subquery_alias;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 391', () => {
    const query = `WITH subquery AS (SELECT 1 AS a) SELECT subquery_alias.* APPLY toString FROM subquery AS subquery_alias;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 392', () => {
    const query = `WITH subquery_1 AS (SELECT 1 AS a), subquery_2 AS (SELECT 1 + subquery_1.a FROM subquery_1) SELECT * FROM subquery_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 393', () => {
    const query = `WITH subquery_1 AS (SELECT 1 AS a), subquery_2 AS (SELECT (1 + subquery_1.a) AS a FROM subquery_1) SELECT subquery_2.a FROM subquery_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 394', () => {
    const query = `WITH x -> x + 1 AS lambda, x -> x + 1 AS lambda SELECT lambda(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 395', () => {
    const query = `WITH x -> x + 1 AS lambda SELECT lambda(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 396', () => {
    const query = `WITH x -> toString(x) AS lambda SELECT lambda(1), lambda(NULL), lambda([1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 397', () => {
    const query = `WITH x -> toString(x) AS lambda_1, lambda_1 AS lambda_2, lambda_2 AS lambda_3 SELECT lambda_1(1), lambda_2(NULL), lambda_3([1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 398', () => {
    const query = `WITH x -> x + 1 AS lambda SELECT lambda(id) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 399', () => {
    const query = `WITH x -> toString(x) AS lambda SELECT lambda(id), lambda(value) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 400', () => {
    const query = `WITH x -> x + 1 AS lambda SELECT arrayMap(lambda, [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 401', () => {
    const query = `WITH x -> toString(x) AS lambda_1 SELECT arrayMap(lambda_1 AS lambda_2, [1,2,3]), arrayMap(lambda_2, ['1', '2', '3']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 402', () => {
    const query = `WITH x -> concat(concat(toString(x.id), '_'), x.value) AS lambda SELECT cast((1, 'Value'), 'Tuple (id UInt64, value String)') AS value, lambda(value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 403', () => {
    const query = `WITH x -> concat(concat(x.value_0_level_0, '_'), x.value_1_level_0) AS lambda SELECT lambda(value) FROM test_table_tuple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 404', () => {
    const query = `WITH x -> * AS lambda SELECT lambda(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 405', () => {
    const query = `WITH x -> * AS lambda SELECT lambda(1) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 406', () => {
    const query = `WITH cast(tuple(1), 'Tuple (value UInt64)') AS compound_value SELECT arrayMap(x -> compound_value.*, [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 407', () => {
    const query = `WITH cast(tuple(1, 1), 'Tuple (value_1 UInt64, value_2 UInt64)') AS compound_value SELECT arrayMap(x -> compound_value.*, [1,2,3]); -- { serverError UNSUPPORTED_METHOD } WITH cast(tuple(1, 1), 'Tuple (value_1 UInt64, value_2 UInt64)') AS compound_value SELECT arrayMap(x -> plus(compound_value.*), [1,2,3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 408', () => {
    const query = `WITH cast(tuple(1), 'Tuple (value UInt64)') AS compound_value SELECT id, test_table.* APPLY x -> compound_value.* FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 409', () => {
    const query = `WITH cast(tuple(1, 1), 'Tuple (value_1 UInt64, value_2 UInt64)') AS compound_value SELECT id, test_table.* APPLY x -> compound_value.* FROM test_table; -- { serverError UNSUPPORTED_METHOD } WITH cast(tuple(1, 1), 'Tuple (value_1 UInt64, value_2 UInt64)') AS compound_value SELECT id, test_table.* APPLY x -> plus(compound_value.*) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 410', () => {
    const query = `WITH x -> untuple(x) AS lambda SELECT cast((1, 'Value'), 'Tuple (id UInt64, value String)') AS value, lambda(value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 411', () => {
    const query = `WITH (functor, x) -> functor(x) AS lambda, x -> x + 1 AS functor_1, x -> toString(x) AS functor_2 SELECT lambda(functor_1, 1), lambda(functor_2, 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 412', () => {
    const query = `WITH (functor, x) -> functor(x) AS lambda, x -> x + 1 AS functor_1, x -> toString(x) AS functor_2 SELECT lambda(functor_1, id), lambda(functor_2, id) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 413', () => {
    const query = `WITH 222 AS lambda SELECT arrayMap(lambda(tuple(x), x + 1), [1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 414', () => {
    const query = `WITH 222 AS lambda SELECT arrayMap(lambda((x, ), x + 1), [1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 415', () => {
    const query = `WITH x -> x + 1 AS lambda SELECT arrayMap(lambda(tuple(x), x + 1), [1, 2, 3]), lambda(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 416', () => {
    const query = `WITH (x, y) -> y AS lambda SELECT arrayMap(lambda(tuple(x), x + 1), [1, 2, 3]), lambda(tuple(x), x + 1), 1 AS x; -- { serverError BAD_ARGUMENTS }
WITH (x, y) -> y AS lambda2
SELECT arrayMap(lambda(tuple(x), x + 1), [1, 2, 3]), lambda2(tuple(x), x + 1), 1 AS x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 417', () => {
    const query = `with rhs as (select * from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one))) select lhs.d2 from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one)) lhs global join rhs using (d1) order by rhs.d2 settings enable_analyzer=0; -- { serverError ALIAS_REQUIRED } with rhs as (select * from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one))) select lhs.d2 from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one)) lhs global join rhs using (d1) order by rhs.d2 settings enable_analyzer=1; -- It works with analyzer; rhs is an alias itself.
with rhs as (select * from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one))) select lhs.d2 from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one)) lhs global join rhs using (d1) order by rhs.d2 settings joined_subquery_requires_alias=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 418', () => {
    const query = `with rhs_ as (select * from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one))) select lhs.d2 from remote('127.{1,2}', view(select dummy d1, dummy d2 from system.one)) lhs global join rhs_ rhs using (d1) order by rhs.d2 settings joined_subquery_requires_alias=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 419', () => {
    const query = `WITH 1 as a SELECT a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 420', () => {
    const query = `WITH a as b SELECT 1 as a, b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 421', () => {
    const query = `WITH value_1 as value_2, id_1 as id_2, id AS id_1, value AS value_1 SELECT id_2, value_2 FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 422', () => {
    const query = `WITH id AS value SELECT value FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 423', () => {
    const query = `WITH path('clickhouse.com/a/b/c') AS x SELECT x AS path;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 424', () => {
    const query = `WITH toDateTime64('1959-09-16 19:20:12.999999998', 9, 'UTC') AS dt1,
toDateTime64('1959-09-16 19:20:12.999999999', 9, 'UTC') AS dt2
SELECT
dt1 < dt2,
(dt1 + INTERVAL 1 NANOSECOND) = dt2,
(dt1 + INTERVAL 2 NANOSECOND) > dt2,
(dt1 + INTERVAL 3 NANOSECOND) > dt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 425', () => {
    const query = `WITH toDateTime64('1969-12-31 23:59:59.999999998', 9, 'UTC') AS dt1,
toDateTime64('1969-12-31 23:59:59.999999999', 9, 'UTC') AS dt2
SELECT
dt1 < dt2,
(dt1 + INTERVAL 1 NANOSECOND) = dt2,
(dt1 + INTERVAL 2 NANOSECOND) > dt2,
(dt1 + INTERVAL 3 NANOSECOND) > dt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 426', () => {
    const query = `WITH toDateTime64('2001-12-31 23:59:59.999999998', 9, 'UTC') AS dt1,
toDateTime64('2001-12-31 23:59:59.999999999', 9, 'UTC') AS dt2
SELECT
dt1 < dt2,
(dt1 + INTERVAL 1 NANOSECOND) = dt2,
(dt1 + INTERVAL 2 NANOSECOND) > dt2,
(dt1 + INTERVAL 3 NANOSECOND) > dt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 427', () => {
    const query = `WITH toDateTime64('2282-12-31 23:59:59.999998', 6, 'UTC') AS dt1,
toDateTime64('2282-12-31 23:59:59.999999', 6, 'UTC') AS dt2
SELECT
dt1 < dt2,
(dt1 + INTERVAL 1 MICROSECOND) = dt2,
(dt1 + INTERVAL 2 MICROSECOND) > dt2,
(dt1 + INTERVAL 3 MICROSECOND) > dt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 428', () => {
    const query = `WITH (SELECT 1) as v0 SELECT v0, v > 0 FROM (
WITH (SELECT 1) AS v1, (SELECT 2) AS v2
SELECT v1 AS v
UNION ALL
SELECT v2 AS v
) AS a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 429', () => {
    const query = `WITH CAST([-547274980, 1790553898, 1981517754, 1908431500, 1352428565, -573412550, -552499284, 2096941042], 'Array(Int32)') AS a SELECT
L1Norm(a),
L2Norm(a),
L2SquaredNorm(a),
LpNorm(a,1),
LpNorm(a,2),
LpNorm(a,3.14),
LinfNorm(a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 430', () => {
    const query = `WITH CAST([-547274980, 1790553898, 1981517754, 1908431500, 1352428565, -573412550, -552499284, 2096941042], 'Array(Int32)') AS a SELECT
L1Distance(a, a),
L2Distance(a, a),
L2SquaredDistance(a, a),
LinfDistance(a, a),
cosineDistance(a, a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 431', () => {
    const query = `with top_repos as ( select repo_name from github_events where event_type = 'WatchEvent' and toDate(created_at) = today() - 1 group by repo_name order by count() desc limit 100 union distinct select repo_name from github_events where event_type = 'WatchEvent' and toMonday(created_at) = toMonday(today() - interval 1 week) group by repo_name order by count() desc limit 100 union distinct select repo_name from github_events where event_type = 'WatchEvent' and toStartOfMonth(created_at) = toStartOfMonth(today()) - interval 1 month group by repo_name order by count() desc limit 100 union distinct select repo_name from github_events where event_type = 'WatchEvent' and toYear(created_at) = toYear(today()) - 1 group by repo_name order by count() desc limit 100 ),
last_day as ( select repo_name, count() as count_last_day, rowNumberInAllBlocks() + 1 as position_last_day from github_events where repo_name in (select repo_name from top_repos) and toDate(created_at) = today() - 1 group by repo_name order by count_last_day desc ),
last_week as ( select repo_name, count() as count_last_week, rowNumberInAllBlocks() + 1 as position_last_week from github_events where repo_name in (select repo_name from top_repos) and toMonday(created_at) = toMonday(today()) - interval 1 week group by repo_name order by count_last_week desc ),
last_month as ( select repo_name, count() as count_last_month, rowNumberInAllBlocks() + 1 as position_last_month from github_events where repo_name in (select repo_name from top_repos) and toStartOfMonth(created_at) = toStartOfMonth(today()) - interval 1 month group by repo_name order by count_last_month desc )
select d.repo_name, columns('count') from last_day d join last_week w on d.repo_name = w.repo_name join last_month m on d.repo_name = m.repo_name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 432', () => {
    const query = `WITH arrayJoin(['a', 'a', 'b', 'b']) AS field SELECT
field,
count() OVER (PARTITION BY field)
ORDER BY field ASC
LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 433', () => {
    const query = `WITH toDate('2021-09-12') AS date_value,
toDateTime('2021-09-12 11:22:33') AS date_time_value,
toDateTime64('2021-09-12 11:22:33', 3) AS date_time_64_value
SELECT toLastDayOfMonth(date_value), toLastDayOfMonth(date_time_value), toLastDayOfMonth(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 434', () => {
    const query = `WITH toDate('2021-03-12') AS date_value,
toDateTime('2021-03-12 11:22:33') AS date_time_value,
toDateTime64('2021-03-12 11:22:33', 3) AS date_time_64_value
SELECT toLastDayOfMonth(date_value), toLastDayOfMonth(date_time_value), toLastDayOfMonth(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 435', () => {
    const query = `WITH toDate('2021-02-12') AS date_value,
toDateTime('2021-02-12 11:22:33') AS date_time_value,
toDateTime64('2021-02-12 11:22:33', 3) AS date_time_64_value
SELECT toLastDayOfMonth(date_value), toLastDayOfMonth(date_time_value), toLastDayOfMonth(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 436', () => {
    const query = `WITH toDate('2020-02-12') AS date_value,
toDateTime('2020-02-12 11:22:33') AS date_time_value,
toDateTime64('2020-02-12 11:22:33', 3) AS date_time_64_value
SELECT toLastDayOfMonth(date_value), toLastDayOfMonth(date_time_value), toLastDayOfMonth(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 437', () => {
    const query = `WITH toDate('2021-12-12') AS date_value,
toDateTime('2021-12-12 11:22:33') AS date_time_value,
toDateTime64('2021-12-12 11:22:33', 3) AS date_time_64_value
SELECT toLastDayOfMonth(date_value), toLastDayOfMonth(date_time_value), toLastDayOfMonth(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 438', () => {
    const query = `WITH toDate('2020-12-12') AS date_value,
toDateTime('2020-12-12 11:22:33') AS date_time_value,
toDateTime64('2020-12-12 11:22:33', 3) AS date_time_64_value
SELECT toLastDayOfMonth(date_value), toLastDayOfMonth(date_time_value), toLastDayOfMonth(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 439', () => {
    const query = `WITH toDate('2020-12-12') AS date_value
SELECT last_day(date_value), LAST_DAY(date_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 440', () => {
    const query = `WITH toDate('1970-01-01') AS date_value,
toDateTime('1970-01-01 11:22:33') AS date_time_value,
toDateTime64('1900-01-01 11:22:33', 3) AS date_time_64_value
SELECT toLastDayOfMonth(date_value), toLastDayOfMonth(date_time_value), toLastDayOfMonth(date_time_64_value)
SETTINGS enable_extended_results_for_datetime_functions = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 441', () => {
    const query = `WITH 'number: 1' as year SELECT extract(year, '\\\\d+');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 442', () => {
    const query = `WITH 'number: 2' as mm SELECT extract(mm, '\\\\d+');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 443', () => {
    const query = `WITH 'number: 3' as s SELECT extract(s, '\\\\d+');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 444', () => {
    const query = `WITH 'test' AS u SELECT count() FROM ev WHERE a IN (SELECT a FROM idx) SETTINGS enable_global_with_statement = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 445', () => {
    const query = `WITH 'test' AS u SELECT count() FROM ev WHERE a IN (SELECT a FROM idx) SETTINGS enable_global_with_statement = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 446', () => {
    const query = `WITH h3ToGeo(arrayJoin([579205133326352383,589753847883235327,594082350283882495])) AS p SELECT round(p.1, 2), round(p.2, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 447', () => {
    const query = `WITH (SELECT * FROM data_02222) AS bm1,
(SELECT * FROM data_02222) AS bm2,
(SELECT * FROM data_02222) AS bm3,
(SELECT * FROM data_02222) AS bm4,
(SELECT * FROM data_02222) AS bm5,
(SELECT * FROM data_02222) AS bm6,
(SELECT * FROM data_02222) AS bm7,
(SELECT * FROM data_02222) AS bm8,
(SELECT * FROM data_02222) AS bm9,
(SELECT * FROM data_02222) AS bm10
SELECT bm1, bm2, bm3, bm4, bm5, bm6, bm7, bm8, bm9, bm10 FROM data_02222;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 448', () => {
    const query = `WITH t AS (
SELECT number AS n
FROM numbers(10000)
)
SELECT count(*)
FROM t AS a
WHERE a.n < 5000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 449', () => {
    const query = `WITH t AS (
SELECT number AS n
FROM numbers(10000)
)
SELECT count(*)
FROM t AS a
WHERE t.n < 5000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 450', () => {
    const query = `WITH (
SELECT query_id
FROM system.query_log
WHERE current_database = currentDatabase() AND Settings['log_processors_profiles']='1'
) AS query_id_
SELECT
name,
multiIf(
name = 'ExpressionTransform', elapsed_us >= 0.9e6 ? 1 : elapsed_us,
name = 'SourceFromSingleChunk', output_wait_elapsed_us >= 0.9e6 ? 1 : output_wait_elapsed_us,
input_wait_elapsed_us>=1e6 ? 1 : input_wait_elapsed_us)
elapsed,
input_rows,
input_bytes,
output_rows,
output_bytes
FROM system.processors_profile_log
WHERE query_id = query_id_
ORDER BY name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 451', () => {
    const query = `WITH minSampleSizeContinous(20, 10, 0.05, 0.8, 0.05) AS res SELECT 'continous const 1', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 452', () => {
    const query = `WITH minSampleSizeContinous(0.0, 10.0, 0.05, 0.8, 0.05) AS res SELECT 'continous const 2', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 453', () => {
    const query = `WITH minSampleSizeContinous(20, 10.0, 0.05, 0.8, 0.05) AS res SELECT 'continous const 3', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 454', () => {
    const query = `WITH minSampleSizeContinous(20.0, 10, 0.05, 0.8, 0.05) AS res SELECT 'continous const 4', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 455', () => {
    const query = `WITH minSampleSizeContinous(baseline, sigma, 0.05, 0.8, 0.05) AS res SELECT 'continous UInt64 1', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2) FROM minimum_sample_size_continuos ORDER BY roundBankers(res.1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 456', () => {
    const query = `WITH minSampleSizeContinous(20, sigma, 0.05, 0.8, 0.05) AS res SELECT 'continous UInt64 2', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2) FROM minimum_sample_size_continuos ORDER BY roundBankers(res.1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 457', () => {
    const query = `WITH minSampleSizeContinous(baseline, 10, 0.05, 0.8, 0.05) AS res SELECT 'continous UInt64 3', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2) FROM minimum_sample_size_continuos ORDER BY roundBankers(res.1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 458', () => {
    const query = `WITH minSampleSizeContinous(baseline, sigma, 0.05, 0.8, 0.05) AS res SELECT 'continous Float64 1', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2) FROM minimum_sample_size_continuos ORDER BY roundBankers(res.1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 459', () => {
    const query = `WITH minSampleSizeContinous(20, sigma, 0.05, 0.8, 0.05) AS res SELECT 'continous Float64 2', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2) FROM minimum_sample_size_continuos ORDER BY roundBankers(res.1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 460', () => {
    const query = `WITH minSampleSizeConversion(0.9, 0.01, 0.8, 0.05) AS res SELECT 'conversion const 1', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 461', () => {
    const query = `WITH minSampleSizeConversion(0.0, 0.01, 0.8, 0.05) AS res SELECT 'conversion const 2', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 462', () => {
    const query = `WITH minSampleSizeConversion(p1, 0.01, 0.8, 0.05) AS res SELECT 'conversion Float64 1', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2) FROM minimum_sample_size_conversion ORDER BY roundBankers(res.1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 463', () => {
    const query = `WITH minSampleSizeConversion(0.9, 0.01, 0.8, 0.05) AS res SELECT 'conversion Float64 2', roundBankers(res.1, 2), roundBankers(res.2, 2), roundBankers(res.3, 2) FROM minimum_sample_size_conversion ORDER BY roundBankers(res.1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 464', () => {
    const query = `WITH (
SELECT initial_query_id
FROM system.query_log
WHERE
current_database = currentDatabase()
AND event_date >= yesterday()
AND query LIKE '-- INSERT USING VALUES%'
LIMIT 1
) AS q_id
SELECT 'VALUES', view_duration_ms >= 50
FROM system.query_views_log
WHERE initial_query_id = q_id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 465', () => {
    const query = `WITH (
SELECT initial_query_id
FROM system.query_log
WHERE
current_database = currentDatabase()
AND event_date >= yesterday()
AND query LIKE '-- INSERT USING TABLE%'
LIMIT 1
) AS q_id
SELECT 'TABLE', view_duration_ms >= 50
FROM system.query_views_log
WHERE initial_query_id = q_id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 466', () => {
    const query = `WITH map(1, 'Test') AS value, 'Array(Tuple(UInt64, String))' AS type SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 467', () => {
    const query = `WITH map(1, 'Test') AS value, 'Array(Tuple(UInt64, UInt64))' AS type SELECT value, cast(value, type), cast(materialize(value), type); --{serverError CANNOT_PARSE_TEXT}
WITH map(1, '1234') AS value, 'Array(Tuple(UInt64, UInt64))' AS type
SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 468', () => {
    const query = `WITH map(1, [1, 2, 3]) AS value, 'Array(Tuple(UInt64, Array(String)))' AS type SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 469', () => {
    const query = `WITH map(1, ['1', '2', '3']) AS value, 'Array(Tuple(UInt64, Array(UInt64)))' AS type SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 470', () => {
    const query = `WITH map(1, map(1, '1234')) AS value, 'Array(Tuple(UInt64, Map(UInt64, String)))' AS type SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 471', () => {
    const query = `WITH map(1, map(1, '1234')) AS value, 'Array(Tuple(UInt64, Map(UInt64, UInt64)))' AS type SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 472', () => {
    const query = `WITH map(1, map(1, '1234')) AS value, 'Array(Tuple(UInt64, Array(Tuple(UInt64, String))))' AS type SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 473', () => {
    const query = `WITH map(1, map(1, '1234')) as value, 'Array(Tuple(UInt64, Array(Tuple(UInt64, UInt64))))' AS type SELECT value, cast(value, type), cast(materialize(value), type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 474', () => {
    const query = `WITH map(1, 'val1', 2, 'val2') AS map SELECT CAST(map, 'Array(Tuple(k UInt32, v String))') AS c, toTypeName(c);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 475', () => {
    const query = `WITH ( SELECT sleep(0.0001) FROM system.one ) as a1,
( SELECT sleep(0.0001) FROM system.one ) as a2,
( SELECT sleep(0.0001) FROM system.one ) as a3,
( SELECT sleep(0.0001) FROM system.one ) as a4,
( SELECT sleep(0.0001) FROM system.one ) as a5
SELECT '02177_CTE_GLOBAL_ON', a1, a2, a3, a4, a5 FROM system.numbers LIMIT 100
FORMAT Null
SETTINGS enable_global_with_statement = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 476', () => {
    const query = `WITH ( SELECT sleep(0.0001) FROM system.one ) as a1,
( SELECT sleep(0.0001) FROM system.one ) as a2,
( SELECT sleep(0.0001) FROM system.one ) as a3,
( SELECT sleep(0.0001) FROM system.one ) as a4,
( SELECT sleep(0.0001) FROM system.one ) as a5
SELECT '02177_CTE_GLOBAL_OFF', a1, a2, a3, a4, a5 FROM system.numbers LIMIT 100
FORMAT Null
SETTINGS enable_global_with_statement = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 477', () => {
    const query = `WITH ( SELECT sleep(0.0001) FROM system.one ) as a1,
( SELECT sleep(0.0001) FROM system.one ) as a2,
( SELECT sleep(0.0001) FROM system.one ) as a3,
( SELECT sleep(0.0001) FROM system.one ) as a4,
( SELECT sleep(0.0001) FROM system.one ) as a5
SELECT '02177_CTE_NEW_ANALYZER', a1, a2, a3, a4, a5 FROM system.numbers LIMIT 100
FORMAT Null
SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 478', () => {
    const query = `WITH (range(0, number % 10), range(0, number % 10))::Map(UInt64, UInt64) AS m1, (range(0, number % 10, 2), arrayMap(x -> x * x, range(0, number % 10, 2)))::Map(UInt64, UInt64) AS m2
SELECT DISTINCT mapUpdate(m1, m2) FROM numbers (100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 479', () => {
    const query = `WITH 2 AS \`b.c\`, [4, 5] AS a, 6 AS u, 3 AS v, 2 AS d, TRUE AS e, 1 AS f, 0 AS g, 2 AS h, 'Hello' AS i, 'World' AS j, 'hi' AS w, NULL AS k, (1, 2) AS l, 2 AS m, 3 AS n, [] AS o, [1] AS p, 1 AS q, q AS r, 1 AS s, 1 AS t SELECT INTERVAL CASE CASE WHEN NOT -a[\`b.c\`] * u DIV v + d IS NOT NULL AND e OR f BETWEEN g AND h THEN i ELSE j END WHEN w THEN k END || [l, (m, n)] MINUTE IS NULL OR NOT o::Array(INT) = p <> q < r > s != t AS upyachka;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 480', () => {
    const query = `WITH lineWithInlines AS
(
SELECT DISTINCT addressToLineWithInlines(arrayJoin(trace)) AS lineWithInlines FROM system.trace_log WHERE query_id =
(
SELECT query_id FROM system.query_log WHERE current_database = currentDatabase() AND log_comment='02161_test_case' ORDER BY event_time DESC LIMIT 1
)
)
SELECT 'has inlines:', or(max(length(lineWithInlines)) > 1, max(locate(lineWithInlines[1], ':')) = 0) FROM lineWithInlines SETTINGS short_circuit_function_evaluation='enable';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 481', () => {
    const query = `WITH toDate('2021-01-14') AS date_value,
toDateTime('2021-01-14 11:22:33') AS date_time_value,
toDateTime64('2021-01-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 482', () => {
    const query = `WITH toDate('2021-02-14') AS date_value,
toDateTime('2021-02-14 11:22:33') AS date_time_value,
toDateTime64('2021-02-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 483', () => {
    const query = `WITH toDate('2021-03-14') AS date_value,
toDateTime('2021-03-14 11:22:33') AS date_time_value,
toDateTime64('2021-03-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 484', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 485', () => {
    const query = `WITH toDate('2021-05-14') AS date_value,
toDateTime('2021-05-14 11:22:33') AS date_time_value,
toDateTime64('2021-05-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 486', () => {
    const query = `WITH toDate('2021-06-14') AS date_value,
toDateTime('2021-06-14 11:22:33') AS date_time_value,
toDateTime64('2021-06-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 487', () => {
    const query = `WITH toDate('2021-07-14') AS date_value,
toDateTime('2021-07-14 11:22:33') AS date_time_value,
toDateTime64('2021-07-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 488', () => {
    const query = `WITH toDate('2021-08-14') AS date_value,
toDateTime('2021-08-14 11:22:33') AS date_time_value,
toDateTime64('2021-08-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 489', () => {
    const query = `WITH toDate('2021-09-14') AS date_value,
toDateTime('2021-09-14 11:22:33') AS date_time_value,
toDateTime64('2021-09-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 490', () => {
    const query = `WITH toDate('2021-10-14') AS date_value,
toDateTime('2021-10-14 11:22:33') AS date_time_value,
toDateTime64('2021-10-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 491', () => {
    const query = `WITH toDate('2021-11-14') AS date_value,
toDateTime('2021-11-14 11:22:33') AS date_time_value,
toDateTime64('2021-11-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 492', () => {
    const query = `WITH toDate('2021-12-14') AS date_value,
toDateTime('2021-12-14 11:22:33') AS date_time_value,
toDateTime64('2021-12-14 11:22:33', 3) AS date_time_64_value
SELECT monthName(date_value), monthName(date_time_value), monthName(date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 493', () => {
    const query = `with generateUUIDv4() as uuid, replace(toString(uuid), '-', '') as str1,
lower(hex(uuid)) as str2
select str1 = str2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 494', () => {
    const query = `WITH * APPLY lambda(e); -- { clientError SYNTAX_ERROR } SELECT * APPLY lambda(); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(1); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(x); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(range(1)); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(range(x)); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(1, 2); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(x, y); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda((x, y), 2); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda((x, y), x + y); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(tuple(1), 1); -- { clientError SYNTAX_ERROR }
SELECT * APPLY lambda(tuple(x), 1) FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 495', () => {
    const query = `WITH (
SELECT initial_query_id
FROM system.query_log
WHERE current_database = currentDatabase()
AND event_date >= yesterday()
AND query LIKE '-- INSERT INTO wv%'
LIMIT 1
) AS q_id
SELECT view_name, view_type, view_query, read_rows, read_bytes, written_rows, written_bytes
FROM system.query_views_log
WHERE initial_query_id = q_id FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 496', () => {
    const query = `WITH (
SELECT initial_query_id
FROM system.query_log
WHERE current_database = currentDatabase()
AND event_date >= yesterday()
AND query LIKE '-- INSERT INTO wv%'
LIMIT 1
) AS q_id
SELECT views
FROM system.query_log
WHERE initial_query_id = q_id
AND type = 'QueryFinish'
FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 497', () => {
    const query = `WITH 'aes-256-ecb' as mode, 'Hello World!' as plaintext, 'test_key________________________' as key SELECT hex(aes_encrypt_mysql(mode, toNullable(plaintext), key));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 498', () => {
    const query = `WITH 'aes-256-ecb' as mode, unhex('D1B43643E1D0E9390E39BA4EAE150851') as ciphertext, 'test_key________________________' as key SELECT hex(aes_decrypt_mysql(mode, toNullable(ciphertext), key));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 499', () => {
    const query = `WITH 'aes-256-ecb' as mode, 'test_key________________________' as key SELECT mode, encrypt(mode, CAST(null as Nullable(String)), key);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 500', () => {
    const query = `WITH 'aes-256-gcm' as mode, 'test_key________________________' as key, 'test_iv_____' as iv SELECT mode, encrypt(mode, CAST(null as Nullable(String)), key, iv);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 501', () => {
    const query = `WITH 'aes-256-ecb' as mode, 'test_key________________________' as key SELECT mode, hex(encrypt(mode, toNullable('Hello World!'), key));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 502', () => {
    const query = `WITH 'aes-256-gcm' as mode, 'test_key________________________' as key, 'test_iv_____' as iv SELECT mode, hex(encrypt(mode, toNullable('Hello World!'), key, iv));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 503', () => {
    const query = `WITH 'aes-256-ecb' as mode, 'test_key________________________' as key SELECT mode, decrypt(mode, CAST(null as Nullable(String)), key);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 504', () => {
    const query = `WITH 'aes-256-gcm' as mode, 'test_key________________________' as key, 'test_iv_____' as iv SELECT mode, decrypt(mode, CAST(null as Nullable(String)), key, iv);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 505', () => {
    const query = `WITH 'aes-256-ecb' as mode, unhex('D1B43643E1D0E9390E39BA4EAE150851') as ciphertext, 'test_key________________________' as key SELECT mode, decrypt(mode, toNullable(ciphertext), key);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 506', () => {
    const query = `WITH 'aes-256-gcm' as mode, unhex('219E6478A1A3BB5B686DA4BAD70323F192EFEDCCBBD6F49E78A7E2F6') as ciphertext, 'test_key________________________' as key, 'test_iv_____' as iv SELECT mode, decrypt(mode, toNullable(ciphertext), key, iv);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 507', () => {
    const query = `WITH (1, 2) AS t SELECT t.1, t.2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 508', () => {
    const query = `WITH (1, 2)::Tuple(a UInt32, b UInt32) AS t SELECT t.1, tupleElement(t, 'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 509', () => {
    const query = `WITH splitByChar(' ', getOSKernelVersion()) AS version_pair SELECT version_pair[1] `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 510', () => {
    const query = `with lowerUTF8(str) as l_, upperUTF8(str) as u_, '0x' || hex(str) as h_ select length(str), if(l_ == '\\xe2', h_, l_), if(u_ == '\\xe2', h_, u_) from utf8_overlap format CSV;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 511', () => {
    const query = `WITH lower('\\RealVNC\\WinVNC4 /v password') as CommandLine SELECT
CommandLine LIKE '%\\\\\\\\realvnc\\\\\\\\winvnc4%password%' as t1,
CommandLine LIKE '%\\\\\\\\realvnc\\\\\\\\winvnc4 %password%' as t2,
CommandLine LIKE '%\\\\\\\\realvnc\\\\\\\\winvnc4%password' as t3,
CommandLine LIKE '%\\\\\\\\realvnc\\\\\\\\winvnc4 %password' as t4,
CommandLine LIKE '%realvnc%winvnc4%password%' as t5,
CommandLine LIKE '%\\\\\\\\winvnc4%password%' as t6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 512', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM remote('127.0.0.{1..10}', numbers_mt(1000));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 513', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM remote('127.0.0.{1..10}', numbers_mt(10000));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 514', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM remote('127.0.0.{1..10}', numbers_mt(100000));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 515', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM remote('127.0.0.{1..10}', numbers_mt(1000000));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 516', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM numbers_mt(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 517', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM numbers_mt(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 518', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM numbers_mt(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 519', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM numbers_mt(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 520', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM numbers_mt(100000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 521', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM numbers_mt(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 522', () => {
    const query = `WITH number % 10 = 0 AS value, number AS time SELECT exponentialMovingAverage(1)(value, time) AS exp_smooth FROM numbers_mt(10000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 523', () => {
    const query = `WITH number DIV 50 AS k, toUInt32(number % 50) AS value SELECT k, sparkbar(50, 0, 99)(number, value) FROM numbers(100) GROUP BY k ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 524', () => {
    const query = `WITH map(1, 2, 3, 4) AS m SELECT m[number] FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 525', () => {
    const query = `WITH map('1', 2, '3', 4) AS m SELECT m[toString(number)] FROM numbers(5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 526', () => {
    const query = `WITH map(1, 2, 3, 4) AS m SELECT m[3];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 527', () => {
    const query = `WITH map('1', 2, '3', 4) AS m SELECT m['3'];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 528', () => {
    const query = `with (select count() from (select * from test union distinct select * from test except select * from test where toUInt8(name) > 3)) as max select count() from (select * from test union all select * from test where toUInt8(name) < max);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 529', () => {
    const query = `with (select count() from (select * from test union distinct select * from test except select * from test where toUInt8(name) > 3)) as max select count() from (select * from test except select * from test where toUInt8(name) < max);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 530', () => {
    const query = `WITH 1 AS max_size SELECT groupArray(max_size)(col)
FROM
(SELECT col FROM (
SELECT 1 as col
UNION ALL
SELECT 2
) ORDER BY col);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 531', () => {
    const query = `WITH 0.1 AS level SELECT quantile(level)(number)
FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 532', () => {
    const query = `WITH 0.1 AS level,
1 AS max_size
SELECT groupArray(max_size)(col)
FROM
(
SELECT quantile(level)(number) AS col
FROM numbers(1000)
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 533', () => {
    const query = `with res as (select first_col from (select first_col, second_col as total from tp2 order by 2 desc) limit 1) select * from res;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 534', () => {
    const query = `with (select number from numbers(10) intersect select 5) as a select a * 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 535', () => {
    const query = `with (select 5 except select 1) as a select a except select 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 536', () => {
    const query = `with (select number from numbers(10) intersect select 5) as a select a intersect select 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 537', () => {
    const query = `with (select number from numbers(10) intersect select 5) as a select a except select 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 538', () => {
    const query = `with (select count() from (select 1 union distinct select 2 except select 1)) as max select count() from (select 1 union all select max) limit 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 539', () => {
    const query = `WITH toDateTime('1970-06-17 07:39:21', 'Africa/Monrovia') as t SELECT toUnixTimestamp(t),
timeZoneOffset(t),
formatDateTime(t, '%F %T', 'Africa/Monrovia'),
toString(t, 'Africa/Monrovia'),
toStartOfMinute(t),
toStartOfFiveMinutes(t),
toStartOfFifteenMinutes(t),
toStartOfTenMinutes(t),
toStartOfHour(t),
toStartOfDay(t),
toStartOfWeek(t),
toStartOfInterval(t, INTERVAL 1 second),
toStartOfInterval(t, INTERVAL 1 minute),
toStartOfInterval(t, INTERVAL 2 minute),
toStartOfInterval(t, INTERVAL 5 minute),
toStartOfInterval(t, INTERVAL 60 minute),
addMinutes(t, 1),
addMinutes(t, 60)
FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 540', () => {
    const query = `WITH CAST(1426860704886947840 AS Int64) AS i64,
'UTC' AS tz
SELECT
tz,
i64,
snowflakeToDateTime(i64, tz) as dt,
toTypeName(dt),
snowflakeToDateTime64(i64, tz) as dt64,
toTypeName(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 541', () => {
    const query = `WITH CAST(1426860704886947840 AS Int64) AS i64,
'Asia/Shanghai' AS tz
SELECT
tz,
i64,
snowflakeToDateTime(i64, tz) as dt,
toTypeName(dt),
snowflakeToDateTime64(i64, tz) as dt64,
toTypeName(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 542', () => {
    const query = `WITH 7204436857747984384 AS sf
SELECT
sf,
snowflakeIDToDateTime(sf) as dt,
snowflakeIDToDateTime64(sf) as dt64
FORMAT
Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 543', () => {
    const query = `WITH 1426981498778550272 AS sf,
1288834974657 AS epoch
SELECT
sf,
snowflakeIDToDateTime(sf, epoch) as dt,
snowflakeIDToDateTime64(sf, epoch) as dt64
FORMAT
Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 544', () => {
    const query = `WITH 7204436857747984384 AS sf,
0 AS epoch, -- default epoch
'Asia/Shanghai' AS tz
SELECT
sf,
snowflakeIDToDateTime(sf, epoch, tz) as dt,
snowflakeIDToDateTime64(sf, epoch, tz) as dt64
FORMAT
Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 545', () => {
    const query = `WITH 7204436857747984384 AS sf,
0 AS epoch, -- default epoch
materialize('Asia/Shanghai') AS tz
SELECT
sf,
snowflakeIDToDateTime(sf, epoch, tz) as dt,
snowflakeIDToDateTime64(sf, epoch, tz) as dt64
FORMAT
Vertical
SETTINGS
allow_nonconst_timezone_arguments = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 546', () => {
    const query = `WITH generateSnowflakeID() AS snowflake
SELECT
snowflakeIDToDateTime(snowflake),
snowflakeIDToDateTime64(snowflake)
FORMAT
Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 547', () => {
    const query = `WITH toDateTime('2021-08-15 18:57:56') AS dt,
toDateTime64('2021-08-15 18:57:56.492', 3) AS dt64,
1288834974657 AS twitter_epoch
SELECT
dt,
dt64,
dateTimeToSnowflakeID(dt),
dateTime64ToSnowflakeID(dt64),
dateTimeToSnowflakeID(dt, twitter_epoch),
dateTime64ToSnowflakeID(dt64, twitter_epoch)
FORMAT
Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 548', () => {
    const query = `WITH toDateTime64('2021-08-15 18:57:56.492', 0, 'UTC') AS dt64_0,
toDateTime64('2021-08-15 18:57:56.492', 1, 'UTC') AS dt64_1,
toDateTime64('2021-08-15 18:57:56.492', 2, 'UTC') AS dt64_2,
toDateTime64('2021-08-15 18:57:56.492', 3, 'UTC') AS dt64_3,
toDateTime64('2021-08-15 18:57:56.492', 4, 'UTC') AS dt64_4
SELECT
dateTime64ToSnowflakeID(dt64_0),
dateTime64ToSnowflakeID(dt64_1),
dateTime64ToSnowflakeID(dt64_2),
dateTime64ToSnowflakeID(dt64_3),
dateTime64ToSnowflakeID(dt64_4)
Format
Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 549', () => {
    const query = `WITH now64(0) AS dt64_0,
now64(1) AS dt64_1,
now64(2) AS dt64_2,
now64(3) AS dt64_3
SELECT
snowflakeIDToDateTime64(dateTime64ToSnowflakeID(dt64_0), 0, 'UTC') == dt64_0,
snowflakeIDToDateTime64(dateTime64ToSnowflakeID(dt64_1), 0, 'UTC') == dt64_1,
snowflakeIDToDateTime64(dateTime64ToSnowflakeID(dt64_2), 0, 'UTC') == dt64_2,
snowflakeIDToDateTime64(dateTime64ToSnowflakeID(dt64_3), 0, 'UTC') == dt64_3
FORMAT
Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 550', () => {
    const query = `WITH toDateTime64('2023-11-11 11:11:11.1231', 4, 'UTC') AS dt64_4
SELECT
dt64_4,
snowflakeIDToDateTime64(dateTime64ToSnowflakeID(dt64_4))
FORMAT
Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 551', () => {
    const query = `WITH toDateTime('2021-08-15 18:57:56', 'Asia/Shanghai') AS dt SELECT dt, dateTimeToSnowflake(dt), materialize(dateTimeToSnowflake(dt));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 552', () => {
    const query = `WITH toDateTime64('2021-08-15 18:57:56.492', 3, 'Asia/Shanghai') AS dt64 SELECT dt64, dateTime64ToSnowflake(dt64), materialize(dateTime64ToSnowflake(dt64));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 553', () => {
    const query = `WITH toDateTime64('2021-08-15 18:57:56.492', 0, 'UTC') AS dt64_0, toDateTime64('2021-08-15 18:57:56.492', 1, 'UTC') AS dt64_1,
toDateTime64('2021-08-15 18:57:56.492', 2, 'UTC') AS dt64_2,
toDateTime64('2021-08-15 18:57:56.492', 3, 'UTC') AS dt64_3,
toDateTime64('2021-08-15 18:57:56.492', 4, 'UTC') AS dt64_4
SELECT dateTime64ToSnowflake(dt64_0),
dateTime64ToSnowflake(dt64_1),
dateTime64ToSnowflake(dt64_2),
dateTime64ToSnowflake(dt64_3),
dateTime64ToSnowflake(dt64_4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 554', () => {
    const query = `WITH now64(0, 'UTC') AS dt64_0, now64(1, 'UTC') AS dt64_1,
now64(2, 'UTC') AS dt64_2,
now64(3, 'UTC') AS dt64_3
SELECT snowflakeToDateTime64(dateTime64ToSnowflake(dt64_0), 'UTC') == dt64_0,
snowflakeToDateTime64(dateTime64ToSnowflake(dt64_1), 'UTC') == dt64_1,
snowflakeToDateTime64(dateTime64ToSnowflake(dt64_2), 'UTC') == dt64_2,
snowflakeToDateTime64(dateTime64ToSnowflake(dt64_3), 'UTC') == dt64_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 555', () => {
    const query = `WITH toDate('2000-01-01') as a, toDateTime('2000-01-01', 'Asia/Istanbul') as b SELECT if(value, b, a) as result, toTypeName(result)
FROM predicate_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 556', () => {
    const query = `WITH toDateTime('2000-01-01', 'Asia/Istanbul') as a, toDateTime64('2000-01-01', 5, 'Asia/Istanbul') as b SELECT if(value, b, a) as result, toTypeName(result)
FROM predicate_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 557', () => {
    const query = `with '{"string_value":null}' as json select JSONExtract(json, 'string_value', 'Nullable(String)');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 558', () => {
    const query = `with '{"string_value":null}' as json select JSONExtract(json, 'string_value', 'LowCardinality(Nullable(String))');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 559', () => {
    const query = `WITH arrayJoin(['a', 'b']) AS z SELECT
z,
sumMergeForEach(x) AS x
FROM
(
SELECT sumStateForEach([1., 1.1, 1.1300175]) AS x
FROM remote('127.0.0.{1,2}', system.one)
)
GROUP BY z
ORDER BY z;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 560', () => {
    const query = `WITH A as (SELECT rowNumberInAllBlocks() R,addDays(toDate('2021-05-18'), R) TVV from numbers(5)), B as (SELECT rowNumberInAllBlocks() R,toDateTime(NULL) TVV from numbers(1))
SELECT
joinGet('DATE_INFO_DICT',  'SHAMSI',   toDate(A.TVV) ) TV1,
substr(TV1, 3,  8) || ' : ' || toString(1) TV_CHAR_1
from A LEFT JOIN B USING (R)
ORDER BY TV1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 561', () => {
    const query = `WITH A as (SELECT rowNumberInAllBlocks() R,addDays(toDate('2021-05-18'), R) TVV from numbers(5)), B as (SELECT rowNumberInAllBlocks() R,toDateTime(NULL) TVV from numbers(1))
SELECT
joinGetOrNull('DATE_INFO_DICT',    'SHAMSI',   toDate(A.TVV) ) TV1,
substr(TV1, 3,  8) || ' : ' || toString(1) TV_CHAR_1
from A LEFT JOIN B USING (R)
ORDER BY TV1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 562', () => {
    const query = `WITH (d < '2018-01-01') AND (d < '2018-01-02') AS x SELECT 1
FROM t
WHERE x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 563', () => {
    const query = `WITH h3ToGeo(h3_index) AS p SELECT round(p.1, 3), round(p.2, 3) FROM h3_indexes ORDER BY h3_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 564', () => {
    const query = `with t as s select t from tab where s > '2020-01-01 01:01:01';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 565', () => {
    const query = `with t + 1 as s select t from tab where s > '2020-01-01 01:01:01';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 566', () => {
    const query = `with x + y as s select x, y from tab where s = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 567', () => {
    const query = `WITH [3,4,5] AS x SELECT x[1]::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 568', () => {
    const query = `WITH tuple(3,4,5) AS x SELECT x.1::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 569', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDate32('2021-04-14') AS date_32_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('year', date_value), dateName('year', date_32_value), dateName('year', date_time_value), dateName('year', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 570', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDate32('2021-04-14') AS date_32_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('quarter', date_value), dateName('quarter', date_32_value), dateName('quarter', date_time_value), dateName('quarter', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 571', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDate32('2021-04-14') AS date_32_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('month', date_value), dateName('month', date_32_value), dateName('month', date_time_value), dateName('month', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 572', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDate32('2021-04-14') AS date_32_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('dayofyear', date_value), dateName('dayofyear', date_32_value), dateName('dayofyear', date_time_value), dateName('dayofyear', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 573', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDate32('2021-04-14') AS date_32_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('day', date_value), dateName('day', date_32_value), dateName('day', date_time_value), dateName('day', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 574', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDate32('2021-04-14') AS date_32_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('week', date_value), dateName('week', date_32_value), dateName('week', date_time_value), dateName('week', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 575', () => {
    const query = `WITH toDate('2021-04-14') AS date_value,
toDate32('2021-04-14') AS date_32_value,
toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('weekday', date_value), dateName('weekday', date_32_value), dateName('weekday', date_time_value), dateName('weekday', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 576', () => {
    const query = `WITH toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('hour', date_time_value), dateName('hour', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 577', () => {
    const query = `WITH toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('minute', date_time_value), dateName('minute', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 578', () => {
    const query = `WITH toDateTime('2021-04-14 11:22:33') AS date_time_value,
toDateTime64('2021-04-14 11:22:33', 3) AS date_time_64_value
SELECT dateName('second', date_time_value), dateName('second', date_time_64_value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 579', () => {
    const query = `WITH toDateTime('2021-04-14 23:22:33', 'UTC') as date
SELECT
dateName('weekday', date, 'UTC'),
dateName('hour', date, 'UTC'),
dateName('minute', date, 'UTC'),
dateName('second', date, 'UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 580', () => {
    const query = `WITH toDateTime('2021-04-14 23:22:33', 'UTC') as date
SELECT
dateName('weekday', date, 'Asia/Istanbul'),
dateName('hour', date, 'Asia/Istanbul'),
dateName('minute', date, 'Asia/Istanbul'),
dateName('second', date, 'Asia/Istanbul');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 581', () => {
    const query = `WITH arrayJoin(['192.168.99.255', '192.168.100.1', '192.168.103.255', '192.168.104.0']) as addr, '192.168.100.0/22' as prefix SELECT addr, prefix, isIPAddressInRange(addr, prefix);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 582', () => {
    const query = `WITH arrayJoin(['::192.168.99.255', '::192.168.100.1', '::192.168.103.255', '::192.168.104.0']) as addr, '::192.168.100.0/118' as prefix SELECT addr, prefix, isIPAddressInRange(addr, prefix);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 583', () => {
    const query = `WITH '192.168.100.1' as addr, arrayJoin(['192.168.100.0/22', '192.168.100.0/24', '192.168.100.0/32']) as prefix SELECT addr, prefix, isIPAddressInRange(addr, prefix);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 584', () => {
    const query = `WITH '::192.168.100.1' as addr, arrayJoin(['::192.168.100.0/118', '::192.168.100.0/120', '::192.168.100.0/128']) as prefix SELECT addr, prefix, isIPAddressInRange(addr, prefix);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 585', () => {
    const query = `WITH arrayJoin(['192.168.100.1', '192.168.103.255']) as addr, arrayJoin(['192.168.100.0/22', '192.168.100.0/24']) as prefix SELECT addr, prefix, isIPAddressInRange(addr, prefix);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 586', () => {
    const query = `WITH arrayJoin(['::192.168.100.1', '::192.168.103.255']) as addr, arrayJoin(['::192.168.100.0/118', '::192.168.100.0/120']) as prefix SELECT addr, prefix, isIPAddressInRange(addr, prefix);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 587', () => {
    const query = `with (select currentDatabase()) as id_no select *, ignore(id_no) from dist_01756 where dummy in (0, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 588', () => {
    const query = `with (select currentDatabase()) as id_02 select *, ignore(id_02) from dist_01756 where dummy in (0, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 589', () => {
    const query = `with (select currentDatabase()) as id_2 select *, ignore(id_2) from dist_01756 where dummy in (2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 590', () => {
    const query = `with (select currentDatabase()) as id_00 select *, ignore(id_00) from dist_01756 where dummy in (0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 591', () => {
    const query = `with (select currentDatabase()) as key_signed select *, ignore(key_signed) from cluster(test_cluster_two_shards, currentDatabase(), data_01756_signed, key) where key in (-1, -2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 592', () => {
    const query = `WITH (SELECT count(distinct colU) from tabA) AS withA, (SELECT count(distinct colU) from tabA) AS withB SELECT withA / withB AS ratio FROM (SELECT date AS period, colX FROM (SELECT date, if(colA IN (SELECT colB FROM tabC), 0, colA) AS colX FROM tabB) AS tempB GROUP BY period, colX) AS main; -- {serverError UNKNOWN_TABLE} `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 593', () => {
    const query = `WITH toStartOfHour(ts) AS a SELECT sum(value) v FROM normal WHERE ts > '2021-12-06 22:00:00' GROUP BY a ORDER BY v LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 594', () => {
    const query = `WITH toStartOfHour(ts) AS a SELECT sum(value) v FROM normal WHERE ts > '2021-12-06 22:00:00' GROUP BY toStartOfHour(ts), a ORDER BY v LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 595', () => {
    const query = `WITH toStartOfHour(ts) AS a SELECT sum(value) v FROM agg WHERE ts > '2021-12-06 22:00:00' GROUP BY a ORDER BY v LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 596', () => {
    const query = `WITH toStartOfHour(ts) AS a SELECT sum(value) v FROM agg WHERE ts > '2021-12-06 22:00:00' GROUP BY toStartOfHour(ts), a ORDER BY v LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 597', () => {
    const query = `WITH '{ "v":1.1}' AS raw SELECT
JSONExtract(raw, 'v', 'float') AS float32_1,
JSONExtract(raw, 'v', 'Float32') AS float32_2,
JSONExtractFloat(raw, 'v') AS float64_1,
JSONExtract(raw, 'v', 'double') AS float64_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 598', () => {
    const query = `WITH '{ "v":1E-2}' AS raw SELECT
JSONExtract(raw, 'v', 'float') AS float32_1,
JSONExtract(raw, 'v', 'Float32') AS float32_2,
JSONExtractFloat(raw, 'v') AS float64_1,
JSONExtract(raw, 'v', 'double') AS float64_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 599', () => {
    const query = `WITH concat(addressToLine(arrayJoin(trace) AS addr), '#') AS symbol SELECT count() > 7
FROM trace_log AS t
WHERE (query_id =
(
SELECT
[NULL, NULL, NULL, NULL, 0.00009999999747378752, NULL, NULL, NULL, NULL, NULL],
query_id
FROM system.query_log
WHERE current_database = currentDatabase() AND (query LIKE '%test cpu time query profiler%') AND (query NOT LIKE '%system%')
ORDER BY event_time DESC
LIMIT 1
)) AND (symbol LIKE '%Source%'); -- { serverError INCORRECT_RESULT_OF_SCALAR_SUBQUERY }
WITH addressToSymbol(arrayJoin(trace)) AS symbol
SELECT count() > 0
FROM trace_log AS t
WHERE greaterOrEquals(event_date, ignore(ignore(ignore(NULL, '')), 256), yesterday()) AND (trace_type = 'Memory') AND (query_id =
(
SELECT
ignore(ignore(ignore(ignore(65536)), ignore(65537), ignore(2)), ''),
query_id
FROM system.query_log
WHERE current_database = currentDatabase() AND (event_date >= yesterday()) AND (query LIKE '%test memory profiler%')
ORDER BY event_time DESC
LIMIT 1
)); -- { serverError INCORRECT_RESULT_OF_SCALAR_SUBQUERY, 42 }
DROP TABLE IF EXISTS trace_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 600', () => {
    const query = `WITH ( (
SELECT query_start_time_microseconds
FROM system.query_log
WHERE current_database = currentDatabase()
ORDER BY query_start_time DESC
LIMIT 1
) AS time_with_microseconds,
(
SELECT
inf,
query_start_time
FROM system.query_log
WHERE current_database = currentDatabase()
ORDER BY query_start_time DESC
LIMIT 1
) AS t)
SELECT if(dateDiff('second', toDateTime(time_with_microseconds), toDateTime(t)) = -9223372036854775808, 'ok', ''); -- { serverError ILLEGAL_TYPE_OF_ARGUMENT }
WITH (
(
SELECT query_start_time_microseconds
FROM system.query_log
WHERE current_database = currentDatabase()
ORDER BY query_start_time DESC
LIMIT 1
) AS time_with_microseconds,
(
SELECT query_start_time
FROM system.query_log
WHERE current_database = currentDatabase()
ORDER BY query_start_time DESC
LIMIT 1
) AS t)
SELECT if(dateDiff('second', toDateTime(time_with_microseconds), toDateTime(t)) = -9223372036854775808, 'ok', '');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 601', () => {
    const query = `with i as k select * from alias_key_condition where k = (select i from alias_key_condition where i = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 602', () => {
    const query = `WITH  sum(if((a >= 0) AND (b != 100) AND (c = 0), 1, 0)) AS r1, 
sum(if((a >= 0) AND (b != 100) AND (c > 220), 1, 0)) AS r2 
SELECT 
(intDiv(toUInt32(rtime), 20) * 20) * 1000 AS t, 
(r1 * 100) / (r1 + r2) AS m
FROM cluster('test_cluster_two_shards', currentDatabase(), test_alias)
WHERE day = '2022-01-01'
GROUP BY t
ORDER BY t ASC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 603', () => {
    const query = `WITH ['2023-04-05 00:25:23', '2023-04-05 00:25:24']::Array(DateTime) AS dt SELECT arrayMax(dt), arrayMin(dt), arrayDifference(dt);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 604', () => {
    const query = `WITH ['2023-04-05 00:25:23.123', '2023-04-05 00:25:24.124']::Array(DateTime64(3)) AS dt SELECT arrayMax(dt), arrayMin(dt), arrayDifference(dt);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 605', () => {
    const query = `WITH ['2023-04-05', '2023-04-06']::Array(Date) AS d SELECT arrayMax(d), arrayMin(d), arrayDifference(d);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 606', () => {
    const query = `WITH ['2023-04-05', '2023-04-06']::Array(Date32) AS d SELECT arrayMax(d), arrayMin(d), arrayDifference(d);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 607', () => {
    const query = `with number + 1 as x select intDiv(number, 3) as y, sum(x + y) over (partition by y order by x rows unbounded preceding) from numbers(7);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 608', () => {
    const query = `with anySimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 609', () => {
    const query = `with anyLastSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 610', () => {
    const query = `with minSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 611', () => {
    const query = `with maxSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 612', () => {
    const query = `with sumSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 613', () => {
    const query = `with sumWithOverflowSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 614', () => {
    const query = `with groupBitAndSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 615', () => {
    const query = `with groupBitOrSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 616', () => {
    const query = `with groupBitXorSimpleState(number) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 617', () => {
    const query = `with sumMapSimpleState(([number], [number])) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 618', () => {
    const query = `with minMapSimpleState(([number], [number])) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 619', () => {
    const query = `with maxMapSimpleState(([number], [number])) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 620', () => {
    const query = `with groupArrayArraySimpleState([number]) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 621', () => {
    const query = `with groupUniqArrayArraySimpleState([number]) as c select toTypeName(c), c from numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 622', () => {
    const query = `WITH arrayJoin(range(2)) AS delta SELECT
toDate(time) + toIntervalDay(delta) AS dt
FROM
(
SELECT toDateTime('2020.11.12 19:02:04') AS time
)
ORDER BY dt ASC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 623', () => {
    const query = `WITH arrayJoin([0, 1]) AS delta SELECT
toDate(time) + toIntervalDay(delta) AS dt
FROM
(
SELECT toDateTime('2020.11.12 19:02:04') AS time
)
ORDER BY dt ASC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 624', () => {
    const query = `WITH mannWhitneyUTest(left, right) AS pair SELECT roundBankers(pair.1, 16) as t_stat, roundBankers(pair.2, 16) as p_value from mann_whitney_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 625', () => {
    const query = `WITH mannWhitneyUTest('two-sided', 1)(left, right) as pair SELECT roundBankers(pair.1, 16) as t_stat, roundBankers(pair.2, 16) as p_value from mann_whitney_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 626', () => {
    const query = `WITH mannWhitneyUTest('two-sided')(left, right) as pair SELECT roundBankers(pair.1, 16) as t_stat, roundBankers(pair.2, 16) as p_value from mann_whitney_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 627', () => {
    const query = `WITH mannWhitneyUTest('two-sided')(1, right) AS pair SELECT roundBankers(pair.1, 16) AS t_stat, roundBankers(pair.2, 16) AS p_value FROM mann_whitney_test; --{serverError BAD_ARGUMENTS} DROP TABLE IF EXISTS mann_whitney_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 628', () => {
    const query = `with 1 as x select x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 629', () => {
    const query = `with 1 as x select * from (select x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 630', () => {
    const query = `with 1 as x select *, x from (with 2 as x select x as y);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 631', () => {
    const query = `with 1 as x select x union all select x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 632', () => {
    const query = `with 5 as q1, x as (select number+100 as b, number as a from numbers(10) where number > q1) select * from x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 633', () => {
    const query = `with it as ( select * from numbers(1) ) select it.number, i.number from it as i;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 634', () => {
    const query = `WITH x AS (SELECT * FROM cte1),
y AS (SELECT * FROM cte2),
z AS (SELECT * FROM x WHERE a % 2 = 1),
w AS (SELECT * FROM y WHERE a > 333)
SELECT max(a) 
FROM x JOIN y USING (a) 
WHERE a in (SELECT * FROM z) AND a <= (SELECT max(a) FROM w);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 635', () => {
    const query = `WITH x AS (SELECT * FROM cte1),
y AS (SELECT * FROM cte2),
z AS (SELECT * FROM x WHERE a % 3 = 1),
w AS (SELECT * FROM y WHERE a > 333 AND a < 1000)
SELECT count(a) 
FROM x left JOIN y USING (a) 
WHERE a in (SELECT * FROM z) AND a <= (SELECT max(a) FROM w);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 636', () => {
    const query = `WITH x AS (SELECT * FROM cte1),
y AS (SELECT * FROM cte2),
z AS (SELECT * FROM x WHERE a % 3 = 1),
w AS (SELECT * FROM y WHERE a > 333 AND a < 1000)
SELECT count(a) 
FROM x left JOIN y USING (a) 
WHERE a in (SELECT * FROM z);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 637', () => {
    const query = `WITH x AS (SELECT a-4000 a FROM cte1 WHERE cte1.a >700),
y AS (SELECT * FROM cte2),
z AS (SELECT * FROM x WHERE a % 3 = 1),
w AS (SELECT * FROM y WHERE a > 333 AND a < 1000)
SELECT count(*) 
FROM x left JOIN y USING (a) 
WHERE a in (SELECT * FROM z);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 638', () => {
    const query = `WITH x AS (SELECT a-4000 a FROM cte1 WHERE cte1.a >700),
y AS (SELECT * FROM cte2),
z AS (SELECT * FROM x WHERE a % 3 = 1),
w AS (SELECT * FROM y WHERE a > 333 AND a < 1000)
SELECT max(a), min(a), count(*) 
FROM x
WHERE a in (SELECT * FROM z) AND a <100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 639', () => {
    const query = `WITH x AS (SELECT a-4000 a FROM cte1 WHERE cte1.a >700),
y AS (SELECT * FROM cte2),
z AS (SELECT * FROM x WHERE a % 3 = 1),
w AS (SELECT * FROM y WHERE a > 333 AND a < 1000)
SELECT max(a), min(a), count(*) FROM x
WHERE  a <100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 640', () => {
    const query = `WITH x AS (SELECT a-4000 a FROM cte1 AS t WHERE cte1.a >700),
y AS (SELECT * FROM cte2),
z AS (SELECT * FROM x WHERE a % 3 = 1),
w AS (SELECT * FROM y WHERE a > 333 AND a < 1000)
SELECT max(a), min(a), count(*) 
FROM y
WHERE  a <100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 641', () => {
    const query = `WITH x AS (SELECT a-4000 a FROM cte1 t WHERE t.a >700),
y AS (SELECT x.a a FROM x left JOIN cte1 USING (a)),
z AS (SELECT * FROM x WHERE a % 3 = 1),
w AS (SELECT * FROM y WHERE a > 333 AND a < 1000)
SELECT max(a), min(a), count(*) 
FROM y
WHERE a <100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 642', () => {
    const query = `WITH x AS (SELECT number AS a FROM numbers(10)),
y AS (SELECT number AS a FROM numbers(5))
SELECT * FROM x WHERE a in (SELECT a FROM y)
ORDER BY a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 643', () => {
    const query = `WITH x AS (SELECT number AS a FROM numbers(10)),
y AS (SELECT number AS a FROM numbers(5))
SELECT * FROM x left JOIN y USING a
ORDER BY a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 644', () => {
    const query = `WITH x AS (SELECT number AS a FROM numbers(10)),
y AS (SELECT number AS a FROM numbers(5))
SELECT * FROM x JOIN y USING a
ORDER BY x.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 645', () => {
    const query = `WITH x AS (SELECT number AS a FROM numbers(10)),
y AS (SELECT number AS a FROM numbers(5)),
z AS (SELECT toUInt64(1) b)
SELECT * FROM x JOIN y USING a WHERE a in (SELECT * FROM z);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 646', () => {
    const query = `WITH x AS (SELECT number AS a FROM numbers(10)),
y AS (SELECT number AS a FROM numbers(5)),
z AS (SELECT * FROM x WHERE a % 2),
w AS (SELECT * FROM y WHERE a > 0)
SELECT * FROM x JOIN y USING a WHERE a in (SELECT * FROM z)
ORDER BY x.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 647', () => {
    const query = `WITH x AS (SELECT number AS a FROM numbers(10)),
y AS (SELECT number AS a FROM numbers(5)),
z AS (SELECT * FROM x WHERE a % 2),
w AS (SELECT * FROM y WHERE a > 0)
SELECT max(a) FROM x JOIN y USING a WHERE a in (SELECT * FROM z) AND a > (SELECT min(a) FROM w);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 648', () => {
    const query = `WITH x AS (SELECT number AS a FROM numbers(10)),
y AS (SELECT number AS a FROM numbers(5)),
z AS (SELECT * FROM x WHERE a % 2),
w AS (SELECT * FROM y WHERE a > 0)
SELECT a FROM x JOIN y USING a WHERE a in (SELECT * FROM z) AND a <= (SELECT max(a) FROM w)
ORDER BY x.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 649', () => {
    const query = `WITH test1 AS (SELECT * FROM numbers(5)) SELECT * FROM test1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 650', () => {
    const query = `WITH test1 AS (SELECT i + 1, j + 1 FROM test1) SELECT * FROM test1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 651', () => {
    const query = `WITH test1 AS (SELECT i + 1, j + 1 FROM test1) SELECT * FROM (SELECT * FROM test1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 652', () => {
    const query = `WITH test1 AS (SELECT i + 1, j + 1 FROM test1) SELECT toInt64(4) i, toInt64(5) j FROM numbers(3) WHERE (i, j) IN test1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 653', () => {
    const query = `WITH test1 AS (SELECT number-1 as n FROM numbers(42))  SELECT max(n+1)+1 z FROM test1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 654', () => {
    const query = `WITH test1 AS (SELECT number-1 as n FROM numbers(42))  SELECT max(n+1)+1 z FROM test1 join test1 x using n having z - 1 = (select min(n-1)+41 from test1) + 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 655', () => {
    const query = `WITH test1 AS (SELECT number-1 as n FROM numbers(4442) order by n limit 100) SELECT max(n) FROM test1 where n=422;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 656', () => {
    const query = `WITH test1 AS (SELECT number-1 as n FROM numbers(4442) order by n limit 100) SELECT max(n) FROM test1 where n=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 657', () => {
    const query = `WITH test1 AS (SELECT n FROM with_test where n <= 40)  SELECT max(n+1)+1 z FROM test1 join test1 x using (n) having max(n+1)+1 - 1 = (select min(n-1)+41 from test1) + 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 658', () => {
    const query = `WITH test1 AS (SELECT n FROM with_test where n <= 40)  SELECT max(n+1)+1 z FROM test1 join test1 x using (n) having z - 1 = (select min(n-1)+41 from test1) + 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 659', () => {
    const query = `WITH test1 AS (SELECT  n FROM with_test order by n limit 100) SELECT max(n) FROM test1 where n=422;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 660', () => {
    const query = `WITH test1 AS (SELECT n FROM with_test order by n limit 100) SELECT max(n) FROM test1 where n=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 661', () => {
    const query = `WITH test1 AS (SELECT n FROM with_test where n = 42  order by n limit 100) SELECT max(n) FROM test1 where n=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 662', () => {
    const query = `WITH test1 AS (SELECT n FROM with_test where n = 42 or 1=1 order by n limit 100) SELECT max(n) FROM test1 where n=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 663', () => {
    const query = `WITH test1 AS (SELECT n, null as b FROM with_test where n = 42 or b is null order by n limit 100) SELECT max(n) FROM test1 where n=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 664', () => {
    const query = `WITH test1 AS (SELECT n, null b FROM with_test where b is null) SELECT max(n) FROM test1 where n=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 665', () => {
    const query = `WITH test1 AS (SELECT n, null b FROM with_test where b is null or 1=1) SELECT max(n) FROM test1 where n=45;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 666', () => {
    const query = `WITH test1 AS (SELECT n, null b FROM with_test where b is null and n = 42) SELECT max(n) FROM test1 where n=45;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 667', () => {
    const query = `WITH test1 AS (SELECT n, null b FROM with_test where 1=1 and n = 42 order by n) SELECT max(n) FROM test1 where n=45;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 668', () => {
    const query = `WITH test1 AS (SELECT n, null b, n+1 m FROM with_test where 1=0 or n = 42 order by n limit 4) SELECT max(n) m FROM test1 where test1.m=43 having max(n)=42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 669', () => {
    const query = `WITH test1 AS (SELECT n, null b, n+1 m FROM with_test where  n = 42 order by n limit 4) SELECT max(n) m FROM test1 where b is null and test1.m=43 having m=42 limit 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 670', () => {
    const query = `with test1 as (select n, null b, n+1 m from with_test where  n = 42 order by n limit 4),
test2 as (select n + 1 as x, n - 1 as y from test1),
test3 as (select x * y as z from test2)
select z + 1 as q from test3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 671', () => {
    const query = `WITH round(exp(number), 6) AS x, toUInt64(x) AS y, toInt32(min2(x, 2147483647)) AS z SELECT formatReadableQuantity(x), formatReadableQuantity(y), formatReadableQuantity(z)
FROM system.numbers
LIMIT 45;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 672', () => {
    const query = `WITH ( SELECT event_time_microseconds, event_time
FROM system.metric_log
ORDER BY event_time DESC
LIMIT 1
) AS time
SELECT if(dateDiff('second', toDateTime(time.1), toDateTime(time.2)) = 0, 'ok', toString(time));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 673', () => {
    const query = `WITH ( SELECT event_time_microseconds, event_time
FROM system.trace_log
ORDER BY event_time DESC
LIMIT 1
) AS time
SELECT if(dateDiff('second', toDateTime(time.1), toDateTime(time.2)) = 0, 'ok', toString(time));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 674', () => {
    const query = `WITH ( SELECT event_time_microseconds, event_time
FROM system.query_log
WHERE current_database = currentDatabase()
ORDER BY event_time DESC
LIMIT 1
) AS time
SELECT if(dateDiff('second', toDateTime(time.1), toDateTime(time.2)) = 0, 'ok', toString(time));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 675', () => {
    const query = `WITH ( SELECT event_time_microseconds, event_time
FROM system.query_thread_log
WHERE current_database = currentDatabase()
ORDER BY event_time DESC
LIMIT 1
) AS time
SELECT if(dateDiff('second', toDateTime(time.1), toDateTime(time.2)) = 0, 'ok', toString(time));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 676', () => {
    const query = `WITH ( (
SELECT query_start_time_microseconds
FROM system.query_log
WHERE current_database = currentDatabase()
AND query like 'SELECT \\'01461_query%'
AND event_date >= yesterday()
ORDER BY query_start_time DESC
LIMIT 1
) AS time_with_microseconds,
(
SELECT query_start_time
FROM system.query_log
WHERE current_database = currentDatabase()
AND query like 'SELECT \\'01461_query%'
AND event_date >= yesterday()
ORDER BY query_start_time DESC
LIMIT 1
) AS t)
SELECT if(dateDiff('second', toDateTime(time_with_microseconds), toDateTime(t)) = 0, 'ok', 'fail'); --
SET log_query_threads = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 677', () => {
    const query = `WITH number * 2 AS square_number SELECT number, square_number FROM numbers_indexed WHERE number = 999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 678', () => {
    const query = `WITH 8.5 AS a, 2.5 AS b SELECT a % b, -a % b, a % -b, -a % -b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 679', () => {
    const query = `WITH 10.125 AS a, 2.5 AS b SELECT a % b, -a % b, a % -b, -a % -b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 680', () => {
    const query = `WITH 8.5 AS a, 2.5 AS b SELECT mod(a, b), MOD(-a, b), modulo(a, -b), moduloOrZero(-a, -b);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 681', () => {
    const query = `WITH 8.5 AS a, 2.5 AS b SELECT a MOD b, -a MOD b, a MOD -b, -a MOD -b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 682', () => {
    const query = `WITH 10.125 AS a, 2.5 AS b SELECT a MOD b, -a MOD b, a MOD -b, -a MOD -b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 683', () => {
    const query = `WITH CAST(round(sqrt(number)) % 4 AS Enum('' = 0, 'hello' = 1, 'world' = 2, 'test' = 3)) AS x SELECT topK(10)(x) FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 684', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:12.3456789102019-09-16 19:20:12.345678910', 0) AS dt64 SELECT dt64; -- { serverError CANNOT_PARSE_TEXT } SELECT toDateTime64('2011-11-11 11:11:11.1234567890123456789', 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 685', () => {
    const query = `WITH materialize(CAST(NULL, 'Nullable(Float64)')) AS test SELECT test, toTypeName(test), IF(test = 0, 1, 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 686', () => {
    const query = `WITH (SELECT [0, 1, 2, 3]) AS arr1
SELECT arraySort(arrayIntersect(argMax(seqs, create_time), arr1)) AS common, id
FROM tags
WHERE id LIKE 'id%'
GROUP BY id
ORDER BY id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 687', () => {
    const query = `with (select groupArray(id) from bbb) as ids select *
from aaa
where has(ids, id)
order by id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 688', () => {
    const query = `WITH CAST(NULL as Nullable(String)) as input, 'aes-256-ofb' as mode SELECT toTypeName(input), hex(aes_encrypt_mysql(mode, input, key32,iv)) FROM encryption_test LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 689', () => {
    const query = `WITH CAST('text' as Nullable(String)) as input, 'aes-256-ofb' as mode SELECT toTypeName(input), hex(aes_encrypt_mysql(mode, input, key32, iv)) FROM encryption_test LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 690', () => {
    const query = `WITH CAST('text' as LowCardinality(String)) as input, 'aes-256-ofb' as mode SELECT toTypeName(input), hex(aes_encrypt_mysql(mode, input, key32, iv)) FROM encryption_test LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 691', () => {
    const query = `WITH unhex('eebc1f57487f51921c0465665f8ae6d1658bb26de6f8a069a3520293a572078f') as key,
unhex('67ba0510262ae487d737ee6298f77e0c') as tag,
unhex('99aa3e68ed8173a0eed06684') as iv,
unhex('f56e87055bc32d0eeb31b2eacc2bf2a5') as plaintext,
unhex('4d23c3cec334b49bdb370c437fec78de') as aad,
unhex('f7264413a84c0e7cd536867eb9f21736') as ciphertext
SELECT
hex(encrypt('aes-256-gcm', plaintext, key, iv, aad)) as ciphertext_actual,
ciphertext_actual = concat(hex(ciphertext), hex(tag));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 692', () => {
    const query = `WITH unhex('eebc1f57487f51921c0465665f8ae6d1658bb26de6f8a069a3520293a572078f') as key,
unhex('67ba0510262ae487d737ee6298f77e0c') as tag,
unhex('99aa3e68ed8173a0eed06684') as iv,
unhex('f56e87055bc32d0eeb31b2eacc2bf2a5') as plaintext,
unhex('4d23c3cec334b49bdb370c437fec78de') as aad,
unhex('f7264413a84c0e7cd536867eb9f21736') as ciphertext
SELECT
hex(decrypt('aes-256-gcm', concat(ciphertext, tag), key, iv, aad)) as plaintext_actual,
plaintext_actual = hex(plaintext);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 693', () => {
    const query = `WITH 	toDateTime64('2019-09-16 19:20:12.345678910', 3) AS dt64
SELECT
	dt64,
	fromUnixTimestamp64Milli(toUnixTimestamp64Milli(dt64)),
	fromUnixTimestamp64Micro(toUnixTimestamp64Micro(dt64)),
	fromUnixTimestamp64Nano(toUnixTimestamp64Nano(dt64));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 694', () => {
    const query = `WITH 	toDateTime64('2019-09-16 19:20:12.345678910', 6) AS dt64
SELECT
	dt64,
	fromUnixTimestamp64Milli(toUnixTimestamp64Milli(dt64)),
	fromUnixTimestamp64Micro(toUnixTimestamp64Micro(dt64)),
	fromUnixTimestamp64Nano(toUnixTimestamp64Nano(dt64));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 695', () => {
    const query = `WITH 	toDateTime64('2019-09-16 19:20:12.345678910', 9) AS dt64
SELECT
	dt64,
	fromUnixTimestamp64Milli(toUnixTimestamp64Milli(dt64)),
	fromUnixTimestamp64Micro(toUnixTimestamp64Micro(dt64)),
	fromUnixTimestamp64Nano(toUnixTimestamp64Nano(dt64));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 696', () => {
    const query = `WITH 	'UTC' as timezone,
	toDateTime64('2019-09-16 19:20:12.345678910', 3, timezone) AS dt64
SELECT
	dt64,
	fromUnixTimestamp64Milli(toUnixTimestamp64Milli(dt64), timezone),
	fromUnixTimestamp64Micro(toUnixTimestamp64Micro(dt64), timezone),
	fromUnixTimestamp64Nano(toUnixTimestamp64Nano(dt64), timezone) AS v,
	toTypeName(v);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 697', () => {
    const query = `WITH 	'Asia/Makassar' as timezone,
	toDateTime64('2019-09-16 19:20:12.345678910', 3, timezone) AS dt64
SELECT
	dt64,
	fromUnixTimestamp64Milli(toUnixTimestamp64Milli(dt64), timezone),
	fromUnixTimestamp64Micro(toUnixTimestamp64Micro(dt64), timezone),
	fromUnixTimestamp64Nano(toUnixTimestamp64Nano(dt64), timezone) AS v,
	toTypeName(v);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 698', () => {
    const query = `WITH 	CAST(1234567891011 AS Int64) AS val
SELECT
	val,
	toUnixTimestamp64Milli(fromUnixTimestamp64Milli(val)),
	toUnixTimestamp64Micro(fromUnixTimestamp64Micro(val)),
	toUnixTimestamp64Nano(fromUnixTimestamp64Nano(val));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 699', () => {
    const query = `WITH 	'UTC' as timezone,
	CAST(1234567891011 AS Int64) AS val
SELECT
	val,
	toUnixTimestamp64Milli(fromUnixTimestamp64Milli(val, timezone)),
	toUnixTimestamp64Micro(fromUnixTimestamp64Micro(val, timezone)),
	toUnixTimestamp64Nano(fromUnixTimestamp64Nano(val, timezone)) AS v,
	toTypeName(v);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 700', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:12.345678910', 3, 'Asia/Istanbul') AS dt64 SELECT dt64, toUnixTimestamp64Milli(dt64), toUnixTimestamp64Micro(dt64), toUnixTimestamp64Nano(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 701', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:12.345678910', 6, 'Asia/Istanbul') AS dt64 SELECT dt64, toUnixTimestamp64Milli(dt64), toUnixTimestamp64Micro(dt64), toUnixTimestamp64Nano(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 702', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:12.345678910', 9, 'Asia/Istanbul') AS dt64 SELECT dt64, toUnixTimestamp64Milli(dt64), toUnixTimestamp64Micro(dt64), toUnixTimestamp64Nano(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 703', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:12.345678910', 3, 'Asia/Istanbul') AS x SELECT materialize(x) as dt64, toUnixTimestamp64Milli(dt64), toUnixTimestamp64Micro(dt64), toUnixTimestamp64Nano(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 704', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:12.345678910', 6, 'Asia/Istanbul') AS x SELECT materialize(x) as dt64, toUnixTimestamp64Milli(dt64), toUnixTimestamp64Micro(dt64), toUnixTimestamp64Nano(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 705', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:12.345678910', 9, 'Asia/Istanbul') AS x SELECT materialize(x) as dt64, toUnixTimestamp64Milli(dt64), toUnixTimestamp64Micro(dt64), toUnixTimestamp64Nano(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 706', () => {
    const query = `WITH (
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300,
301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400,
401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500,
501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600,
601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700,
701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800,
801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900,
901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000
) AS tuple
SELECT
tuple.1,
tuple.300,
tuple.500,
tuple.700,
tuple.1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 707', () => {
    const query = `WITH 	CAST(1234567891011 AS Int64) AS i64,
	'UTC' AS tz
SELECT
	tz,
	i64,
	fromUnixTimestamp64Milli(i64, tz),
	fromUnixTimestamp64Micro(i64, tz),
	fromUnixTimestamp64Nano(i64, tz) as dt64,
	toTypeName(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 708', () => {
    const query = `WITH 	CAST(1234567891011 AS Int64) AS i64,
	'Asia/Makassar' AS tz
SELECT
	tz,
	i64,
	fromUnixTimestamp64Milli(i64, tz),
	fromUnixTimestamp64Micro(i64, tz),
	fromUnixTimestamp64Nano(i64, tz) as dt64,
	toTypeName(dt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 709', () => {
    const query = `WITH 	CAST(1234567891011 AS Int64) AS i64,
	'UTC' AS tz
SELECT
	i64,
	fromUnixTimestamp64Milli(i64, tz),
	fromUnixTimestamp64Micro(i64, tz),
	fromUnixTimestamp64Nano(i64, tz) as dt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 710', () => {
    const query = `WITH 10413688942 AS timestamp,
CAST(10413688942123 AS Int64) AS milli,
CAST(10413688942123456 AS Int64) AS micro,
CAST(10413688942123456789 AS Int64) AS nano,
'UTC' AS tz
SELECT
timestamp,
fromUnixTimestamp64Milli(milli, tz),
fromUnixTimestamp64Micro(micro, tz),
fromUnixTimestamp64Nano(nano, tz);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 711', () => {
    const query = `WITH -2208985199 AS timestamp,
CAST(-2208985199123 AS Int64) AS milli,
CAST(-2208985199123456 AS Int64) AS micro,
CAST(-2208985199123456789 AS Int64) AS nano,
'UTC' AS tz
SELECT
timestamp,
fromUnixTimestamp64Milli(milli, tz),
fromUnixTimestamp64Micro(micro, tz),
fromUnixTimestamp64Nano(nano, tz);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 712', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:11', 0, 'UTC') AS dt64 SELECT toStartOfSecond(dt64) AS res, toTypeName(res);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 713', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:11.123', 3, 'UTC') AS dt64 SELECT toStartOfSecond(dt64) AS res, toTypeName(res);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 714', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:11.123', 9, 'UTC') AS dt64 SELECT toStartOfSecond(dt64) AS res, toTypeName(res);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 715', () => {
    const query = `WITH toDateTime64('2019-09-16 19:20:11.123', 3, 'UTC') AS dt64 SELECT toStartOfSecond(materialize(dt64)) AS res, toTypeName(res);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 716', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT DT64 = materialize(S); -- {serverError ILLEGAL_TYPE_OF_ARGUMENT} WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT materialize(S) = toDateTime64(S, 3); -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE DT64 = materialize(S); -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE materialize(S) = DT64; -- {serverError ILLEGAL_TYPE_OF_ARGUMENT}
SELECT * WHERE toDateTime64(123.345, 3) == 'ABCD'; -- {serverError CANNOT_PARSE_DATETIME} -- invalid DateTime64 string
SELECT * WHERE toDateTime64(123.345, 3) == '2020-02-05 14:34:12.33333333333333333333333333333333333333333333333333333333';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 717', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT DT64 = S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 718', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT S = DT64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 719', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT materialize(DT64) = S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 720', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT S = materialize(DT64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 721', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE DT64 = S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 722', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE S = DT64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 723', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE materialize(DT64) = S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 724', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE S = materialize(DT64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 725', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE DT64 <= S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 726', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE DT64 >= S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 727', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE S <= DT64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 728', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE S >= DT64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 729', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE DT64 < S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 730', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE DT64 > S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 731', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE DT64 != S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 732', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE S < DT64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 733', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE S > DT64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 734', () => {
    const query = `WITH '2020-02-05 14:34:12.333' as S, toDateTime64(S, 3) as DT64 SELECT * WHERE S != DT64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 735', () => {
    const query = `WITH 'abb' AS b, 'abc' AS c, 'abd' AS d, toFixedString(b, 5) AS bf, toFixedString(c, 5) AS cf, toFixedString(d, 5) AS df SELECT
b = b, b > b, b < b,
b = c, b > c, b < c,
b = d, b > d, b < d,
b = bf, b > bf, b < bf,
b = cf, b > cf, b < cf,
b = df, b > df, b < df,
c = b, c > b, c < b,
c = c, c > c, c < c,
c = d, c > d, c < d,
c = bf, c > bf, c < bf,
c = cf, c > cf, c < cf,
c = df, c > df, c < df,
d = b, d > b, d < b,
d = c, d > c, d < c,
d = d, d > d, d < d,
d = bf, d > bf, d < bf,
d = cf, d > cf, d < cf,
d = df, d > df, d < df,
bf = b, bf > b, bf < b,
bf = c, bf > c, bf < c,
bf = d, bf > d, bf < d,
bf = bf, bf > bf, bf < bf,
bf = cf, bf > cf, bf < cf,
bf = df, bf > df, bf < df,
cf = b, cf > b, cf < b,
cf = c, cf > c, cf < c,
cf = d, cf > d, cf < d,
cf = bf, cf > bf, cf < bf,
cf = cf, cf > cf, cf < cf,
cf = df, cf > df, cf < df,
df = b, df > b, df < b,
df = c, df > c, df < c,
df = d, df > d, df < d,
df = bf, df > bf, df < bf,
df = cf, df > cf, df < cf,
df = df, df > df, df < df
FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 736', () => {
    const query = `WITH A as (SELECT rowNumberInAllBlocks() R, addDays(toDate('2017-04-01'), R) TVV from numbers(5)),
B as (SELECT rowNumberInAllBlocks() R, toDateTime(NULL) TVV from numbers(1))
SELECT
joinGetOrNull('test', 'y', toDate(A.TVV) ) TV1
from A LEFT JOIN B USING (R) order by TV1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 737', () => {
    const query = `with [ 'Seconds',
'Bool',
'Int64',
'String',
'Char',
'LogsLevel',
'URI',
'Float',
'UInt64',
'MaxThreads',
'Milliseconds',
'JoinStrictness',
'JoinAlgorithm',
'OverflowMode',
'TotalsMode',
'LoadBalancing',
'OverflowModeGroupBy',
'DateTimeInputFormat',
'DistributedProductMode'
] as types select hasAll(arrayDistinct(groupArray(type)), types) from system.settings;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 738', () => {
    const query = `with [ 'Seconds',
'Bool',
'Int64',
'String',
'Float',
'UInt64',
'MaxThreads'
] as types select hasAll(arrayDistinct(groupArray(type)), types) from system.merge_tree_settings;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 739', () => {
    const query = `WITH [(39.82535, 21.26649), (39.63179, 21.4366), (39.94803, 21.56766)] AS outer,
[(39.84994, 21.44025), (39.82728, 21.4666), (39.82667, 21.46592)] AS inner,
(39.840202, 21.451471) AS point
SELECT
pointInPolygon(point, inner) AS inside_inner,
pointInPolygon(point, outer, inner) AS inside_outer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 740', () => {
    const query = `WITH toDateTime('2020-06-16 03:00:00') AS date_time SELECT date_time ORDER BY date_time ASC
WITH FILL
FROM toDateTime('2020-06-16 00:00:00')
TO toDateTime('2020-06-16 10:00:00')
STEP 1800;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 741', () => {
    const query = `with 3 as "1" select 1, "1"; -- { serverError AMBIGUOUS_COLUMN_NAME } select 1, * from (select 2 x) a left join (select 1, 3 y) b on y = x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 742', () => {
    const query = `WITH arrayMap(x -> x + 1, range(50)) as data
SELECT
arrayReduceInRanges('groupArray', [(a, c), (b, d)], data) =
[arraySlice(data, a, c), arraySlice(data, b, d)]
FROM (
SELECT
cityHash64(number + 100) % 40 as a,
cityHash64(number + 200) % 60 as b,
cityHash64(number + 300) % 20 as c,
cityHash64(number + 400) % 30 as d
FROM numbers(20)
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 743', () => {
    const query = `WITH addressToSymbol(arrayJoin(trace)) AS symbol SELECT count() > 0 FROM system.trace_log t WHERE event_date >= yesterday() AND trace_type = 'Memory' AND query_id = (SELECT query_id FROM system.query_log WHERE current_database = currentDatabase() AND event_date >= yesterday() AND query LIKE '%test memory profiler%' AND has(used_table_functions, 'numbers') AND log_comment = '01092_memory_profiler' ORDER BY event_time DESC LIMIT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 744', () => {
    const query = `WITH addressToSymbol(arrayJoin(trace)) AS symbol SELECT count() > 0 FROM system.trace_log t WHERE event_date >= yesterday() AND trace_type = 'MemoryPeak' AND query_id = (SELECT query_id FROM system.query_log WHERE current_database = currentDatabase() AND event_date >= yesterday() AND query LIKE '%test memory profiler%' AND has(used_table_functions, 'numbers') AND log_comment = '01092_memory_profiler' ORDER BY event_time DESC LIMIT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 745', () => {
    const query = `WITH addressToSymbol(arrayJoin(trace)) AS symbol SELECT count() > 0 FROM system.trace_log t WHERE event_date >= yesterday() AND trace_type = 'MemorySample' AND query_id = (SELECT query_id FROM system.query_log WHERE current_database = currentDatabase() AND event_date >= yesterday() AND query LIKE '%test memory profiler%' AND has(used_table_functions, 'numbers') AND log_comment = '01092_memory_profiler' ORDER BY event_time DESC LIMIT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 746', () => {
    const query = `WITH 01091 AS id SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 747', () => {
    const query = `WITH (
SELECT query_id
FROM system.query_log
WHERE current_database = currentDatabase() AND (normalizeQuery(query) like normalizeQuery('WITH 01091 AS id SELECT 1;')) AND (event_date >= (today() - 1))
ORDER BY event_time DESC
LIMIT 1
) AS id
SELECT uniqExact(thread_id)
FROM system.query_thread_log
WHERE (event_date >= (today() - 1)) AND (query_id = id) AND (thread_id != master_thread_id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 748', () => {
    const query = `with 01091 as id select sum(number) from numbers(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 749', () => {
    const query = `WITH (
SELECT query_id
FROM system.query_log
WHERE current_database = currentDatabase() AND (normalizeQuery(query) = normalizeQuery('with 01091 as id select sum(number) from numbers(1000000);')) AND (event_date >= (today() - 1))
ORDER BY event_time DESC
LIMIT 1
) AS id
SELECT uniqExact(thread_id) > 2
FROM system.query_thread_log
WHERE (event_date >= (today() - 1)) AND (query_id = id) AND (thread_id != master_thread_id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 750', () => {
    const query = `with 01091 as id select sum(number) from numbers_mt(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 751', () => {
    const query = `WITH (
SELECT query_id
FROM system.query_log
WHERE current_database = currentDatabase() AND (normalizeQuery(query) = normalizeQuery('with 01091 as id select sum(number) from numbers_mt(1000000);')) AND (event_date >= (today() - 1))
ORDER BY event_time DESC
LIMIT 1
) AS id
SELECT uniqExact(thread_id) > 2
FROM system.query_thread_log
WHERE (event_date >= (today() - 1)) AND (query_id = id) AND (thread_id != master_thread_id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 752', () => {
    const query = `WITH '{"a": "hello", "b": 12345678901234567890}' AS json SELECT JSONExtractRaw(json, 'a');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 753', () => {
    const query = `WITH number - 90 AS lat SELECT DISTINCT greatCircleAngle(0, 0, 0, lat) = abs(lat) FROM numbers(180);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 754', () => {
    const query = `WITH number - 180 AS lon SELECT lon, round(greatCircleAngle(0, 0, lon, 0) - abs(lon) AS err, 2) FROM numbers(360) WHERE abs(err) > 0.01;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 755', () => {
    const query = `WITH '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' AS x,
replaceRegexpAll(x, '.', ' ') AS spaces,
concat(substring(spaces, 1, rand(1) % 62), substring(x, 1, rand(2) % 62), substring(spaces, 1, rand(3) % 62)) AS s,
trimLeft(s) AS sl,
trimRight(s) AS sr,
trimBoth(s) AS t,
replaceRegexpOne(s, '^ +', '') AS slr,
replaceRegexpOne(s, ' +\$', '') AS srr,
replaceRegexpOne(s, '^ *(.*?) *\$', '\\\\1') AS tr
SELECT
replaceAll(s, ' ', '_'),
replaceAll(sl, ' ', '_'),
replaceAll(slr, ' ', '_'),
replaceAll(sr, ' ', '_'),
replaceAll(srr, ' ', '_'),
replaceAll(t, ' ', '_'),
replaceAll(tr, ' ', '_')
FROM numbers(100000)
WHERE NOT ((sl = slr) AND (sr = srr) AND (t = tr))
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 756', () => {
    const query = `WITH addressToLine(arrayJoin(trace) AS addr) || '#' || demangle(addressToSymbol(addr)) AS symbol SELECT count() > 0 FROM system.trace_log t WHERE query_id = (SELECT query_id FROM system.query_log WHERE current_database = currentDatabase() AND query LIKE '%test real time query profiler%' AND query NOT LIKE '%system%' ORDER BY event_time DESC LIMIT 1) AND symbol LIKE '%FunctionSleep%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 757', () => {
    const query = `WITH addressToLine(arrayJoin(trace) AS addr) || '#' || demangle(addressToSymbol(addr)) AS symbol SELECT count() > 0 FROM system.trace_log t WHERE query_id = (SELECT query_id FROM system.query_log WHERE current_database = currentDatabase() AND query LIKE '%test cpu time query profiler%' AND query NOT LIKE '%system%' ORDER BY event_time DESC LIMIT 1) AND symbol LIKE '%Source%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 758', () => {
    const query = `WITH (SELECT stochasticLinearRegressionState(1, 2, 3)) AS model SELECT evalMLMethod(model, toFloat64(1), toFloat64(1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 759', () => {
    const query = `with (select state from model) as model select round(evalMLMethod(model, predict1, predict2, predict3, predict4, predict5, predict6, predict7), 12) from defaults;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 760', () => {
    const query = `WITH (1, 2) AS liter_prepared_set SELECT COUNT() FROM single_column_bloom_filter WHERE i32 IN liter_prepared_set SETTINGS max_rows_to_read = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 761', () => {
    const query = `WITH ((1, 2), (2, 3)) AS liter_prepared_set SELECT COUNT() FROM single_column_bloom_filter WHERE (i32, i32) IN liter_prepared_set SETTINGS max_rows_to_read = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 762', () => {
    const query = `WITH ((1, 1), (2, 2)) AS liter_prepared_set SELECT COUNT() FROM single_column_bloom_filter WHERE (i32, i64) IN liter_prepared_set SETTINGS max_rows_to_read = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 763', () => {
    const query = `WITH ((1, (1, 1)), (2, (2, 2))) AS liter_prepared_set SELECT COUNT() FROM single_column_bloom_filter WHERE (i64, (i64, i32)) IN liter_prepared_set SETTINGS max_rows_to_read = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 764', () => {
    const query = `WITH toDate('2018-12-25') + number AS d,
toDate32(d) AS d32,
toDateTime(d) AS dt,
toDateTime64(d, 0) AS dt64
SELECT
dt64,
toStartOfWeek(d) AS wd_sun,
toStartOfWeek(d32) AS wd32_sun,
toStartOfWeek(dt) AS wdt_sun,
toStartOfWeek(dt64) AS wdt64_sun,
toStartOfWeek(d, 1) AS wd_mon,
toStartOfWeek(d32, 1) AS wd32_mon,
toStartOfWeek(dt, 1) AS wdt_mon,
toStartOfWeek(dt64, 1) AS wdt64_mon
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 765', () => {
    const query = `WITH toDate('2018-12-25') + number AS d,
toDate32(d) AS d32,
toDateTime(d) AS dt,
toDateTime64(d, 0) AS dt64
SELECT
dt64,
toLastDayOfWeek(d) AS wd_sun,
toLastDayOfWeek(d32) AS wd32_sun,
toLastDayOfWeek(dt) AS wdt_sun,
toLastDayOfWeek(dt64) AS wdt64_sun,
toLastDayOfWeek(d, 1) AS wd_mon,
toLastDayOfWeek(d32, 1) AS wd32_mon,
toLastDayOfWeek(dt, 1) AS wdt_mon,
toLastDayOfWeek(dt64, 1) AS wdt64_mon
FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 766', () => {
    const query = `WITH IPv6CIDRToRange(IPv6StringToNum('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 32) as ip_range SELECT COUNT(*) FROM ipv6_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 767', () => {
    const query = `WITH IPv6CIDRToRange(IPv6StringToNum('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 25) as ip_range SELECT COUNT(*) FROM ipv6_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 768', () => {
    const query = `WITH IPv6CIDRToRange(IPv6StringToNum('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 26) as ip_range SELECT COUNT(*) FROM ipv6_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 769', () => {
    const query = `WITH IPv6CIDRToRange(IPv6StringToNum('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 64) as ip_range SELECT COUNT(*) FROM ipv6_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 770', () => {
    const query = `WITH IPv6CIDRToRange(IPv6StringToNum('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 0) as ip_range SELECT COUNT(*) FROM ipv6_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 771', () => {
    const query = `WITH IPv4CIDRToRange(toIPv4('192.168.0.0'), 8) as ip_range SELECT COUNT(*) FROM ipv4_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 772', () => {
    const query = `WITH IPv4CIDRToRange(toIPv4('192.168.0.0'), 13) as ip_range SELECT COUNT(*) FROM ipv4_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 773', () => {
    const query = `WITH IPv4CIDRToRange(toIPv4('192.168.0.0'), 16) as ip_range SELECT COUNT(*) FROM ipv4_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 774', () => {
    const query = `WITH IPv4CIDRToRange(toIPv4('192.168.0.0'), 0) as ip_range SELECT COUNT(*) FROM ipv4_range WHERE ip BETWEEN tupleElement(ip_range, 1) AND tupleElement(ip_range, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 775', () => {
    const query = `WITH IPv4CIDRToRange(ip, cidr) as ip_range SELECT ip, cidr, IPv4NumToString(tupleElement(ip_range, 1)), ip_range FROM ipv4_range;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 776', () => {
    const query = `WITH 'Europe/Minsk' as timezone SELECT timezone, timeZoneOf(now64(3, timezone)) == timezone;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 777', () => {
    const query = `WITH arrayJoin(finalizeAggregation((SELECT histogramState(3)(number) FROM numbers(10, 190)) + (SELECT histogramState(3)(number) FROM numbers(0, 100)))) AS hist SELECT round(hist.1) AS l, round(hist.2) AS r, round(hist.3) AS cnt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 778', () => {
    const query = `WITH arrayJoin(finalizeAggregation((SELECT histogramState(3)(number) FROM numbers(0, 100)) + (SELECT histogramState(3)(number) FROM numbers(10, 190)))) AS hist SELECT round(hist.1) AS l, round(hist.2) AS r, round(hist.3) AS cnt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 779', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'x' AS a, prefix || 'y' AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 780', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'y' AS a, prefix || 'x' AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 781', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'x' AS a, prefix || 'x' AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 782', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'x' || prefix AS a, prefix || 'y' || prefix AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 783', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'y' || prefix AS a, prefix || 'x' || prefix AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 784', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'x' || prefix AS a, prefix || 'x' || prefix AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 785', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'x' || prefix AS a, prefix || 'y' AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 786', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'y' || prefix AS a, prefix || 'x' AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 787', () => {
    const query = `WITH substring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, number) AS prefix, prefix || 'x' || prefix AS a, prefix || 'x' AS b SELECT a = b, a < b, a > b, a <= b, a >= b FROM numbers(40);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 788', () => {
    const query = `WITH arrayJoin(['aaa', 'bbb']) AS a, 'aaa\\0bbb' AS b SELECT a = b, a < b, a > b, a <= b, a >= b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 789', () => {
    const query = `WITH arrayJoin(['aaa', 'zzz']) AS a, 'aaa\\0bbb' AS b SELECT a = b, a < b, a > b, a <= b, a >= b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 790', () => {
    const query = `WITH arrayJoin(['aaa', 'bbb']) AS a, materialize('aaa\\0bbb') AS b SELECT a = b, a < b, a > b, a <= b, a >= b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 791', () => {
    const query = `WITH arrayJoin(['aaa', 'zzz']) AS a, materialize('aaa\\0bbb') AS b SELECT a = b, a < b, a > b, a <= b, a >= b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 792', () => {
    const query = `with (select sumState(1)) as s select sumMerge(s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 793', () => {
    const query = `with (select sumState(number) from (select * from system.numbers limit 10)) as s select sumMerge(s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 794', () => {
    const query = `with (select quantileState(0.5)(number) from (select * from system.numbers limit 10)) as s select quantileMerge(s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 795', () => {
    const query = `WITH number AS k SELECT k FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 796', () => {
    const query = `WITH (
SELECT arrayCumSum(groupArray(amount))
FROM
(
SELECT
amount
FROM bm
ORDER BY business_dttm
)
) AS arr,
1 + rowNumberInAllBlocks() AS id,
3 AS window_size
SELECT
amount,
business_dttm,
if(id < window_size, NULL, round(arr[id] - arr[id - window_size], 4)) AS moving_sum
FROM
(
SELECT
amount,
business_dttm
FROM bm
ORDER BY business_dttm
) ORDER BY business_dttm;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 797', () => {
    const query = `WITH dummy AS myName SELECT myName FROM system.one;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 798', () => {
    const query = `WITH dummy AS myName SELECT myName + 1 FROM system.one;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 799', () => {
    const query = `WITH toDateTime(1 + rand() % 0xFFFFFFFF) AS t SELECT count() FROM numbers(1000000) WHERE formatDateTime(t, '%F %T') != toString(t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 800', () => {
    const query = `WITH toDateTime(1 + rand() % 0xFFFFFFFF) AS t SELECT count() FROM numbers(1000000) WHERE formatDateTime(t, '%Y-%m-%d %H:%i:%S') != toString(t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 801', () => {
    const query = `WITH toDateTime(1 + rand() % 0xFFFFFFFF) AS t SELECT count() FROM numbers(1000000) WHERE formatDateTime(t, '%Y-%m-%d %R:%S') != toString(t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 802', () => {
    const query = `WITH toDateTime(1 + rand() % 0xFFFFFFFF) AS t SELECT count() FROM numbers(1000000) WHERE formatDateTime(t, '%F %R:%S') != toString(t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 803', () => {
    const query = `WITH toDate(today() + rand() % 4096) AS t SELECT count() FROM numbers(1000000) WHERE formatDateTime(t, '%F') != toString(t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 804', () => {
    const query = `WITH toDate(today() + rand() % 4096) AS t SELECT count() FROM numbers(1000000) WHERE formatDateTime(t, '%F %T', 'Asia/Istanbul') != toString(toDateTime(t, 'Asia/Istanbul'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 805', () => {
    const query = `WITH toDateTime(1000000000 + rand64() % 1000000000) AS time SELECT max(abs(toYear(time) - toISOYear(time))) <= 1 FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 806', () => {
    const query = `WITH toDateTime(1000000000 + rand64() % 1000000000) AS time SELECT DISTINCT toISOWeek(time) BETWEEN 1 AND 53 FROM numbers(1000000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 807', () => {
    const query = `WITH arrayJoin(['hello', 'world']) AS s SELECT count(), arraySort(groupUniqArray(s)), anyHeavy(s) FROM remote('127.0.0.{2,3}', system.one);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 808', () => {
    const query = `WITH arrayJoin(histogram(3)(sin(number))) AS res select round(res.1, 2), round(res.2, 2), round(res.3, 2) from (select * from system.numbers limit 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 809', () => {
    const query = `WITH arrayJoin(histogram(1)(sin(number-40))) AS res SELECT round(res.1, 2), round(res.2, 2), round(res.3, 2) from (select * from system.numbers limit 80);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 810', () => {
    const query = `WITH toDate('2000-01-01') + rand() % (30000) AS EventDate SELECT * FROM numbers(1000000) WHERE EventDate != toDate(concat(toString(toYear(EventDate)), '-', toString(toMonth(EventDate)), '-', toString(toDayOfMonth(EventDate))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 811', () => {
    const query = `WITH toDateTime(1509138000) + number * 300 AS t SELECT toHour(t, 'Asia/Kolkata') AS h, toString(toStartOfHour(t, 'Asia/Kolkata'), 'Asia/Kolkata') AS h_start FROM system.numbers LIMIT 12;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 812', () => {
    const query = `with pow(2,2) as four select pow(four, 2), 2 as two, pow(two, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 813', () => {
    const query = `with (select pow(two,2)) as four select pow(four, 2), 2 as two, pow(two, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 814', () => {
    const query = `with 'string' as str select str || '_abc';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 815', () => {
    const query = `with generateUUIDv4() as uuid, identity(lower(hex(reverse(reinterpretAsString(uuid))))) as str,
reinterpretAsUUID(reverse(unhex(str))) as uuid2
select uuid = uuid2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 816', () => {
    const query = `WITH round(exp(number), 6) AS x, x > 0xFFFFFFFFFFFFFFFF ? 0xFFFFFFFFFFFFFFFF : toUInt64(x) AS y, x > 0x7FFFFFFF ? 0x7FFFFFFF : toInt32(x) AS z SELECT FORMAT_BYTES(x), format_bytes(y), formatReadableSize(z)
FROM system.numbers
LIMIT 70;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 817', () => {
    const query = `WITH round(exp(number), 6) AS x, x > 0xFFFFFFFFFFFFFFFF ? 0xFFFFFFFFFFFFFFFF : toUInt64(x) AS y, x > 0x7FFFFFFF ? 0x7FFFFFFF : toInt32(x) AS z SELECT formatReadableDecimalSize(x), formatReadableDecimalSize(y), formatReadableDecimalSize(z)
FROM system.numbers
LIMIT 70;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 818', () => {
    const query = `WITH a AS (select (select 1 WHERE 0) as b) select 1
from system.one
cross join a
where a.b = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 819', () => {
    const query = `WITH cte_0 AS (select
subq_0.c6 as c2,
case when 0<>0 then ((select c_zeij from t_q1ht4gq_5 order by c_zeij limit 1 offset 1)
+ subq_0.c4) else ((select c_zeij from t_q1ht4gq_5 order by c_zeij limit 1 offset 1)
+ subq_0.c4) end as c4
from
(select
ref_0.c_nkt as c4,
ref_0.c_nkt as c6
from
t_q1ht4gq_5 as ref_0
) as subq_0
)
select
ref_12.c_zeij as c3
from
t_q1ht4gq_5 as ref_12
where (ref_12.c_jz not in (
select
ref_14.c_mc2 as c0
from
t_q1ht4gq_5 as ref_14
cross join cte_0 as ref_15
where ref_15.c4 > ref_15.c2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 820', () => {
    const query = `WITH (1, 2) AS a SELECT 1 IN a, 3 IN a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 821', () => {
    const query = `WITH 0.001 AS threshold SELECT
'runtime messages',
greatest(coalesce(sum(length(message_format_string) = 0) / countOrNull(), 0) as v, threshold),
v <= threshold ? [] :
(SELECT groupArray((message, c)) FROM (
SELECT message, count() as c FROM logs
WHERE
length(message_format_string) = 0
AND message not like '% Received from %clickhouse-staging.com:9440%'
AND source_file not like '%/AWSLogger.cpp%'
AND source_file not like '%/BaseDaemon.cpp%'
AND logger_name not in ('RaftInstance')
GROUP BY message ORDER BY c LIMIT 10
))
FROM logs
WHERE
message NOT LIKE '% Received from %clickhouse-staging.com:9440%'
AND source_file not like '%/AWSLogger.cpp%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 822', () => {
    const query = `WITH 0.05 AS threshold SELECT
'runtime exceptions',
greatest(coalesce(sum(length(message_format_string) = 0) / countOrNull(), 0) as v, threshold),
v <= threshold ? [] :
(SELECT groupArray((message, c)) FROM (
SELECT message, count() as c FROM logs
WHERE
length(message_format_string) = 0
AND (message like '%DB::Exception%' or message like '%Coordination::Exception%')
AND message not like '% Received from %clickhouse-staging.com:9440%'
GROUP BY message ORDER BY c LIMIT 10
))
FROM logs
WHERE
message NOT LIKE '% Received from %clickhouse-staging.com:9440%'
AND (message like '%DB::Exception%' or message like '%Coordination::Exception%');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 823', () => {
    const query = `WITH 0.01 AS threshold SELECT
'unknown runtime exceptions',
greatest(coalesce(sum(length(message_format_string) = 0) / countOrNull(), 0) as v, threshold),
v <= threshold ? [] :
(SELECT groupArray((message, c)) FROM (
SELECT message, count() as c FROM logs
WHERE
length(message_format_string) = 0
AND (message like '%DB::Exception%' or message like '%Coordination::Exception%')
AND message not like '% Received from %' and message not like '%(SYNTAX_ERROR)%' and message not like '%Fault injection%'
GROUP BY message ORDER BY c LIMIT 10
))
FROM logs
WHERE
(message like '%DB::Exception%' or message like '%Coordination::Exception%')
AND message not like '% Received from %' and message not like '%(SYNTAX_ERROR)%' and message not like '%Fault injection%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 824', () => {
    const query = `WITH 1 AS max_messages select 'messages shorter than 10',
(uniqExact(message_format_string) as c) <= max_messages,
c <= max_messages ? [] : groupUniqArray(message_format_string)
from logs
where length(message_format_string) < 10 and message_format_string not in known_short_messages;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 825', () => {
    const query = `WITH 3 AS max_messages select 'messages shorter than 16',
(uniqExact(message_format_string) as c) <= max_messages,
c <= max_messages ? [] : groupUniqArray(message_format_string)
from logs
where length(message_format_string) < 16 and message_format_string not in known_short_messages;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 826', () => {
    const query = `WITH 3 AS max_messages select 'exceptions shorter than 30',
(uniqExact(message_format_string) as c) <= max_messages,
c <= max_messages ? [] : groupUniqArray(message_format_string)
from logs
where message ilike '%DB::Exception%' and if(length(extract(toValidUTF8(message), '(.*)\\\\([A-Z0-9_]+\\\\)')) as pref > 0, pref, length(toValidUTF8(message))) < 30 + 26 and message_format_string not in known_short_messages;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 827', () => {
    const query = `WITH 0.30 as threshold select
'noisy messages',
greatest(coalesce(((select message_format_string, count() from logs group by message_format_string order by count() desc limit 1) as top_message).2, 0) / (select count() from logs), threshold) as r,
r <= threshold ? '' : top_message.1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 828', () => {
    const query = `with 0.16 as threshold select
'noisy Trace messages',
greatest(coalesce(((select message_format_string, count() from logs where level = 'Trace' and message_format_string not in ('Access granted: {}{}', '{} -> {}', 'Query to stage {}{}', 'Query from stage {} to stage {}{}')
group by message_format_string order by count() desc limit 1) as top_message).2, 0) / (select count() from logs), threshold) as r,
r <= threshold ? '' : top_message.1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 829', () => {
    const query = `WITH 0.09 as threshold select 'noisy Debug messages',
greatest(coalesce(((select message_format_string, count() from logs where level = 'Debug' group by message_format_string order by count() desc limit 1) as top_message).2, 0) / (select count() from logs), threshold) as r,
r <= threshold ? '' : top_message.1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 830', () => {
    const query = `WITH 0.05 as threshold select 'noisy Info messages',
greatest(coalesce(((select message_format_string, count() from logs
where level = 'Information'
and message_format_string not in ('Sorting and writing part of data into temporary file {}', 'Done writing part of data into temporary file {}, compressed {}, uncompressed {}')
group by message_format_string order by count() desc limit 1) as top_message).2, 0) / (select count() from logs), threshold) as r,
r <= threshold ? '' : top_message.1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 831', () => {
    const query = `with 0.01 as threshold select
'noisy Warning messages',
greatest(coalesce(((select message_format_string, count() from logs where level = 'Warning' and message_format_string not in ('Not enabled four letter command {}')
group by message_format_string order by count() desc limit 1) as top_message).2, 0) / (select count() from logs), threshold) as r,
r <= threshold ? '' : top_message.1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors with: 832', () => {
    const query = `WITH 0.03 as threshold select 'noisy Error messages',
greatest(coalesce(((select message_format_string, count() from logs where level = 'Error' group by message_format_string order by count() desc limit 1) as top_message).2, 0) / (select count() from logs), threshold) as r,
r <= threshold ? '' : top_message.1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
