/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors explain: 1', () => {
    const query = `EXPLAIN SELECT _table, count() FROM test_03217_all_replicas WHERE  _table = 'test_03217_merge_replica_1' AND x >= 0 GROUP BY _table SETTINGS allow_experimental_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 2', () => {
    const query = `EXPLAIN SYNTAX WITH 1 AS compound_value SELECT * APPLY (x -> compound_value.*)
FROM test_table WHERE x > 0
SETTINGS convert_query_to_cnf = true, optimize_using_constraints = true, optimize_substitute_columns = true; -- { serverError UNKNOWN_IDENTIFIER }
DROP TABLE test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 3', () => {
    const query = `EXPLAIN QUERY TREE SELECT tuple(sumIf(toInt64(1), 1)) FROM numbers(100) settings optimize_rewrite_sum_if_to_count_if=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 4', () => {
    const query = `EXPLAIN QUERY TREE SELECT d.String FROM test_dynamic SETTINGS allow_experimental_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 5', () => {
    const query = `EXPLAIN indexes = 1 SELECT count() FROM t_ind_merge_1 WHERE b < 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 6', () => {
    const query = `EXPLAIN QUERY TREE SELECT id FROM test FINAL
WHERE id IN (
SELECT DISTINCT id
FROM test FINAL
ORDER BY id ASC
LIMIT 4
)
ORDER BY id ASC
LIMIT 1 BY id
SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 7', () => {
    const query = `EXPLAIN indexes = 1 SELECT count() FROM t_skip_index_insert WHERE a >= 110 AND a < 130 AND b = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 8', () => {
    const query = `EXPLAIN SYNTAX SELECT id
FROM 03161_table
WHERE f AND (NOT(f) OR f)
SETTINGS convert_query_to_cnf = 1, optimize_using_constraints = 1, enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 9', () => {
    const query = `EXPLAIN SYNTAX SELECT id
FROM 03161_table
WHERE f AND (NOT(f) OR f)
SETTINGS convert_query_to_cnf = 1, optimize_using_constraints = 1, enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 10', () => {
    const query = `EXPLAIN CURRENT TRANSACTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 11', () => {
    const query = `EXPLAIN header = 1, indexes = 1 SELECT name FROM users INNER JOIN users2 USING name WHERE users.name ='Alice';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 12', () => {
    const query = `EXPLAIN header = 1, indexes = 1 SELECT name FROM users LEFT JOIN users2 USING name WHERE users.name ='Alice';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 13', () => {
    const query = `EXPLAIN header = 1, indexes = 1 SELECT name FROM users RIGHT JOIN users2 USING name WHERE users2.name ='Alice';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 14', () => {
    const query = `EXPLAIN header = 1 SELECT sum(id) FROM test_view settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 15', () => {
    const query = `EXPLAIN QUERY TREE SELECT any(if((number % 10) = 5, number, CAST(NULL, 'Nullable(Int128)'))) AS a, toTypeName(a) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 16', () => {
    const query = `EXPLAIN QUERY TREE SELECT any(if((number % 10) = 5, CAST(NULL, 'Nullable(Int128)'), number)) AS a, toTypeName(a) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 17', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT * FROM test_table_1 AS lhs LEFT JOIN test_table_2 AS rhs ON lhs.id = rhs.id WHERE rhs.id != 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 18', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT * FROM test_table_1 AS lhs RIGHT JOIN test_table_2 AS rhs ON lhs.id = rhs.id WHERE lhs.id != 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 19', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT * FROM test_table_1 AS lhs FULL JOIN test_table_2 AS rhs ON lhs.id = rhs.id WHERE lhs.id != 0 AND rhs.id != 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 20', () => {
    const query = `EXPLAIN QUERY TREE passes=1 WITH merged_test AS(
	SELECT * FROM  t Final
)
SELECT * FROM  merged_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 21', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT number, COUNT() OVER (PARTITION BY number % 3) AS partition_count FROM numbers(10) QUALIFY COUNT() OVER (PARTITION BY number % 3) = 4 ORDER BY number;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 22', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs INNER JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE lhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 23', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs INNER JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE rhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 24', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs INNER JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE lhs.id = 5 AND rhs.id = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 25', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs LEFT JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE lhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 26', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs LEFT JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE rhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 27', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs RIGHT JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE lhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 28', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs RIGHT JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE rhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 29', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs FULL JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE lhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 30', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs FULL JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE rhs.id = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 31', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, rhs.id, lhs.value, rhs.value FROM test_table_1 AS lhs FULL JOIN test_table_2 AS rhs ON lhs.id = rhs.id
WHERE lhs.id = 5 AND rhs.id = 6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 32', () => {
    const query = `EXPLAIN QUERY TREE SELECT a, b
FROM numbers(3)
GROUP BY number as a, (number + number) as b WITH CUBE
ORDER BY a, b format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 33', () => {
    const query = `EXPLAIN QUERY TREE SELECT (sumIf(toNullable(1), (number % 2) = 0), NULL) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 34', () => {
    const query = `EXPLAIN QUERY TREE SELECT (sum(if((number % 2) = 0, toNullable(1), 0)), NULL) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 35', () => {
    const query = `EXPLAIN QUERY TREE SELECT (tuple(sum(if((number % 2) = 0, toNullable(0), 123)) IGNORE NULLS), toUInt8(3)) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 36', () => {
    const query = `EXPLAIN ESTIMATE SELECT count()
FROM url_na_log
PREWHERE (DateVisit >= toFixedString('2022-08-10', 10)) AND (DateVisit <= '2022-08-20')
SETTINGS parallel_replicas_local_plan=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 37', () => {
    const query = `EXPLAIN ESTIMATE SELECT count()
FROM url_na_log
PREWHERE (DateVisit >= toFixedString('2022-08-10', 10)) AND (DateVisit <= '2022-08-20')
SETTINGS allow_experimental_analyzer=1, parallel_replicas_local_plan=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 38', () => {
    const query = `EXPLAIN SYNTAX WITH
cte1 AS
(
SELECT n
FROM numbers_1e6__fuzz_34
),
cte2 AS
(
SELECT n
FROM numbers_1e6__fuzz_33
PREWHERE n IN (cte1)
)
SELECT count()
FROM cte2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 39', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT length(arr) FROM t_length_1 WHERE length(arr) in (SELECT arr_length FROM t_length_2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 40', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT length(arr) FROM t_length_1 WHERE length(arr) in (SELECT arr_length FROM t_length_2 FINAL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 41', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT length(arr) FROM t_length_1 FINAL WHERE length(arr) in (SELECT arr_length FROM t_length_2 FINAL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 42', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT *
FROM date_t__fuzz_0
WHERE ((toYear(date1) AS b) != toNullable(1993)) AND (id <= b);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 43', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT *
FROM date_t__fuzz_0
WHERE ((toYear(date1) AS b) != 1993) AND (id <= b) SETTINGS optimize_time_filter_with_preimage=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 44', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT *
FROM date_t__fuzz_0
WHERE ((toYear(date1) AS b) != 1993) AND (id <= b) SETTINGS optimize_time_filter_with_preimage=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 45', () => {
    const query = `EXPLAIN SELECT * FROM visits_order_dst WHERE user_name='another_user2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 46', () => {
    const query = `EXPLAIN QUERY TREE SELECT encrypt('aes-256-ofb', (SELECT 'qwerty'), '12345678901234567890123456789012'), encrypt('aes-256-ofb', (SELECT 'asdf'), '12345678901234567890123456789012');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 47', () => {
    const query = `EXPLAIN PIPELINE SELECT zero + 1 AS x FROM system.zeros LIMIT 10 SETTINGS max_block_size = 9223372036854775806, max_rows_to_read = 20, read_overflow_mode = 'break';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 48', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT variantElement(v, 'String') FROM t_func_to_subcolumns_variant;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 49', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT length(m) FROM t_func_to_subcolumns_map;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 50', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT empty(m) FROM t_func_to_subcolumns_map;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 51', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT notEmpty(m) FROM t_func_to_subcolumns_map;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 52', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT length(arr), isNull(n) FROM t_column_names;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 53', () => {
    const query = `EXPLAIN QUERY TREE SELECT toString(toString(number + 1)) as val, count()
FROM numbers(2)
GROUP BY val
ORDER BY val;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 54', () => {
    const query = `EXPLAIN QUERY TREE SELECT toString(toString(number + 1)) as val, count()
FROM numbers(2)
GROUP BY ALL
ORDER BY val;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 55', () => {
    const query = `EXPLAIN QUERY TREE SELECT toString(toString(number + 1)) as val, count()
FROM numbers(2)
GROUP BY val WITH TOTALS
ORDER BY val;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 56', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02952_disjunction_optimization WHERE a <> 1 AND a <> 2 AND a <> 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 57', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02952_disjunction_optimization WHERE a <> 1 AND a <> 2 AND a <> 4 AND true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 58', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02952_disjunction_optimization WHERE a <> 1 AND a <> 2 AND a <> 4 AND b <> '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 59', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02952_disjunction_optimization WHERE a <> 1 AND a <> 2 AND b = '' AND a <> 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 60', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02952_disjunction_optimization WHERE (a <> 1 AND a <> 2 AND a <> 4) OR b = '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 61', () => {
    const query = `EXPLAIN QUERY TREE (Select sum(number + 1) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 62', () => {
    const query = `EXPLAIN QUERY TREE (Select sum(1 + number) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 63', () => {
    const query = `EXPLAIN QUERY TREE (Select sum(number - 1) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 64', () => {
    const query = `EXPLAIN QUERY TREE (Select sum(1 - number) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 65', () => {
    const query = `EXPLAIN QUERY TREE (WITH 1::Nullable(UInt64) as my_literal Select sum(number + my_literal) from numbers(0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 66', () => {
    const query = `EXPLAIN QUERY TREE (WITH 1::Nullable(UInt64) as my_literal Select sum(number) + my_literal * count() from numbers(0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 67', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 + 1 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 68', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 + 1) AS j from test_table having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 69', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 + 1 AS i) j from test_table where i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 70', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum((uint64 AS m) + (1 AS n)) j from test_table where m > 0 and n > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 71', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(((uint64 AS m) + (1 AS n)) AS i) j from test_table where m > 0 and n > 0 and i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 72', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(1 + uint64 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 73', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(1 + uint64) AS j from test_table having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 74', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(1 + uint64 AS i) j from test_table where i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 75', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum((1 AS m) + (uint64 AS n)) j from test_table where m > 0 and n > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 76', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(((1 AS m) + (uint64 AS n)) AS i) j from test_table where m > 0 and n > 0 and i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 77', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 - 1 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 78', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 - 1) AS j from test_table having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 79', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 - 1 AS i) j from test_table where i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 80', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum((uint64 AS m) - (1 AS n)) j from test_table where m > 0 and n > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 81', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(((uint64 AS m) - (1 AS n)) AS i) j from test_table where m > 0 and n > 0 and i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 82', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(1 - uint64 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 83', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(1 - uint64) AS j from test_table having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 84', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(1 - uint64 AS i) j from test_table where i > 0 having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 85', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum((1 AS m) - (uint64 AS n)) j from test_table where m > 0 and n > 0 having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 86', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(((1 AS m) - (uint64 AS n)) AS i) j from test_table where m > 0 and n > 0 and i < 0 having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 87', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 + 2.11) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 88', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2.11 + uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 89', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 - 2.11) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 90', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2.11 - uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 91', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64) + 2.11 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 92', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2.11 * count(uint64) + sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 93', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64) - 2.11 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 94', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2.11 * count(uint64) - sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 95', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 + 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 96', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 + uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 97', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 - 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 98', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 - uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 99', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64) + 2 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 100', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2 * count(uint64) + sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 101', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64) - 2 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 102', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2 * count(uint64) - sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 103', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64 + 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 104', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 + float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 105', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64 - 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 106', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 - float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 107', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64) + 2 * count(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 108', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2 * count(float64) + sum(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 109', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64) - 2 * count(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 110', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2 * count(float64) - sum(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 111', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32 + 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 112', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 + decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 113', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32 - 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 114', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 - decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 115', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32) + 2 * count(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 116', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2 * count(decimal32) + sum(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 117', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32) - 2 * count(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 118', () => {
    const query = `EXPLAIN QUERY TREE (SELECT 2 * count(decimal32) - sum(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 119', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 + 2) + sum(uint64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 120', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 + 2) - sum(uint64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 121', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 - 2) + sum(uint64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 122', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(uint64 - 2) - sum(uint64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 123', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 - uint64) - sum(3 - uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 124', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(uint64) + 2 * count(uint64)) + (sum(uint64) + 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 125', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(uint64) + 2 * count(uint64)) - (sum(uint64) + 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 126', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(uint64) - 2 * count(uint64)) + (sum(uint64) - 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 127', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(uint64) - 2 * count(uint64)) - (sum(uint64) - 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 128', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (2 * count(uint64) - sum(uint64)) + (3 * count(uint64) - sum(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 129', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64 + 2) + sum(float64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 130', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64 + 2) - sum(float64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 131', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64 - 2) + sum(float64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 132', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(float64 - 2) - sum(float64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 133', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 - float64) - sum(3 - float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 134', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(float64) + 2 * count(float64)) + (sum(float64) + 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 135', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(float64) + 2 * count(float64)) - (sum(float64) + 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 136', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(float64) - 2 * count(float64)) + (sum(float64) - 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 137', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(float64) - 2 * count(float64)) - (sum(float64) - 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 138', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (2 * count(float64) - sum(float64)) + (3 * count(float64) - sum(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 139', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32 + 2) + sum(decimal32 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 140', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32 + 2) - sum(decimal32 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 141', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32 - 2) + sum(decimal32 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 142', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(decimal32 - 2) - sum(decimal32 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 143', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(2 - decimal32) - sum(3 - decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 144', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(decimal32) + 2 * count(decimal32)) + (sum(decimal32) + 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 145', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(decimal32) + 2 * count(decimal32)) - (sum(decimal32) + 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 146', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(decimal32) - 2 * count(decimal32)) + (sum(decimal32) - 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 147', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (sum(decimal32) - 2 * count(decimal32)) - (sum(decimal32) - 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 148', () => {
    const query = `EXPLAIN QUERY TREE (SELECT (2 * count(decimal32) - sum(decimal32)) + (3 * count(decimal32) - sum(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 149', () => {
    const query = `EXPLAIN SYNTAX (Select sum(number + 1) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 150', () => {
    const query = `EXPLAIN SYNTAX (Select sum(1 + number) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 151', () => {
    const query = `EXPLAIN SYNTAX (Select sum(number - 1) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 152', () => {
    const query = `EXPLAIN SYNTAX (Select sum(1 - number) from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 153', () => {
    const query = `EXPLAIN SYNTAX (WITH 1::Nullable(UInt64) as my_literal Select sum(number + my_literal) from numbers(0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 154', () => {
    const query = `EXPLAIN SYNTAX (WITH 1::Nullable(UInt64) as my_literal Select sum(number) + my_literal * count() from numbers(0));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 155', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 + 1 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 156', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 + 1) AS j from test_table having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 157', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 + 1 AS i) j from test_table where i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 158', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum((uint64 AS m) + (1 AS n)) j from test_table where m > 0 and n > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 159', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(((uint64 AS m) + (1 AS n)) AS i) j from test_table where m > 0 and n > 0 and i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 160', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(1 + uint64 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 161', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(1 + uint64) AS j from test_table having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 162', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(1 + uint64 AS i) j from test_table where i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 163', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum((1 AS m) + (uint64 AS n)) j from test_table where m > 0 and n > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 164', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(((1 AS m) + (uint64 AS n)) AS i) j from test_table where m > 0 and n > 0 and i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 165', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 - 1 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 166', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 - 1) AS j from test_table having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 167', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 - 1 AS i) j from test_table where i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 168', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum((uint64 AS m) - (1 AS n)) j from test_table where m > 0 and n > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 169', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(((uint64 AS m) - (1 AS n)) AS i) j from test_table where m > 0 and n > 0 and i > 0 having j > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 170', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(1 - uint64 AS i) from test_table where i > 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 171', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(1 - uint64) AS j from test_table having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 172', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(1 - uint64 AS i) j from test_table where i > 0 having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 173', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum((1 AS m) - (uint64 AS n)) j from test_table where m > 0 and n > 0 having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 174', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(((1 AS m) - (uint64 AS n)) AS i) j from test_table where m > 0 and n > 0 and i < 0 having j < 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 175', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 + 2.11) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 176', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2.11 + uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 177', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 - 2.11) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 178', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2.11 - uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 179', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64) + 2.11 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 180', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2.11 * count(uint64) + sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 181', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64) - 2.11 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 182', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2.11 * count(uint64) - sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 183', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 + 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 184', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 + uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 185', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 - 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 186', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 - uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 187', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64) + 2 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 188', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2 * count(uint64) + sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 189', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64) - 2 * count(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 190', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2 * count(uint64) - sum(uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 191', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64 + 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 192', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 + float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 193', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64 - 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 194', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 - float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 195', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64) + 2 * count(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 196', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2 * count(float64) + sum(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 197', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64) - 2 * count(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 198', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2 * count(float64) - sum(float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 199', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32 + 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 200', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 + decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 201', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32 - 2) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 202', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 - decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 203', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32) + 2 * count(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 204', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2 * count(decimal32) + sum(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 205', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32) - 2 * count(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 206', () => {
    const query = `EXPLAIN SYNTAX (SELECT 2 * count(decimal32) - sum(decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 207', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 + 2) + sum(uint64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 208', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 + 2) - sum(uint64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 209', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 - 2) + sum(uint64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 210', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(uint64 - 2) - sum(uint64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 211', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 - uint64) - sum(3 - uint64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 212', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(uint64) + 2 * count(uint64)) + (sum(uint64) + 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 213', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(uint64) + 2 * count(uint64)) - (sum(uint64) + 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 214', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(uint64) - 2 * count(uint64)) + (sum(uint64) - 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 215', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(uint64) - 2 * count(uint64)) - (sum(uint64) - 3 * count(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 216', () => {
    const query = `EXPLAIN SYNTAX (SELECT (2 * count(uint64) - sum(uint64)) + (3 * count(uint64) - sum(uint64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 217', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64 + 2) + sum(float64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 218', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64 + 2) - sum(float64 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 219', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64 - 2) + sum(float64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 220', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(float64 - 2) - sum(float64 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 221', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 - float64) - sum(3 - float64) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 222', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(float64) + 2 * count(float64)) + (sum(float64) + 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 223', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(float64) + 2 * count(float64)) - (sum(float64) + 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 224', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(float64) - 2 * count(float64)) + (sum(float64) - 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 225', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(float64) - 2 * count(float64)) - (sum(float64) - 3 * count(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 226', () => {
    const query = `EXPLAIN SYNTAX (SELECT (2 * count(float64) - sum(float64)) + (3 * count(float64) - sum(float64)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 227', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32 + 2) + sum(decimal32 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 228', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32 + 2) - sum(decimal32 + 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 229', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32 - 2) + sum(decimal32 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 230', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(decimal32 - 2) - sum(decimal32 - 3) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 231', () => {
    const query = `EXPLAIN SYNTAX (SELECT sum(2 - decimal32) - sum(3 - decimal32) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 232', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(decimal32) + 2 * count(decimal32)) + (sum(decimal32) + 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 233', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(decimal32) + 2 * count(decimal32)) - (sum(decimal32) + 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 234', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(decimal32) - 2 * count(decimal32)) + (sum(decimal32) - 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 235', () => {
    const query = `EXPLAIN SYNTAX (SELECT (sum(decimal32) - 2 * count(decimal32)) - (sum(decimal32) - 3 * count(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 236', () => {
    const query = `EXPLAIN SYNTAX (SELECT (2 * count(decimal32) - sum(decimal32)) + (3 * count(decimal32) - sum(decimal32)) From test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 237', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(uint64 + 2) as j, j + 5 as t from test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 238', () => {
    const query = `EXPLAIN ESTIMATE  SELECT any(toTypeName(s)) FROM (SELECT 'bbbbbbbb', toTypeName(s), CAST('', 'LowCardinality(String)'), NULL, CAST('\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0', 'String') AS s) AS t1 FULL OUTER JOIN (SELECT CAST('bbbbb\\0\\0bbb\\0bb\\0bb', 'LowCardinality(String)'), CAST(CAST('a', 'String'), 'LowCardinality(String)') AS s GROUP BY CoNnEcTiOn_Id()) AS t2 USING (s) WITH TOTALS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 239', () => {
    const query = `EXPLAIN ESTIMATE SELECT any(s) FROM (SELECT '' AS s) AS t1 JOIN (SELECT '' AS s GROUP BY connection_id()) AS t2 USING (s);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 240', () => {
    const query = `EXPLAIN SELECT count() FROM merge settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 241', () => {
    const query = `explain indexes = 1 select * from test1 where a > 10 settings enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 242', () => {
    const query = `explain indexes = 1 select * from test1 where a > 10 settings enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 243', () => {
    const query = `explain indexes = 1 select * from test2 where a2 > 15 settings enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 244', () => {
    const query = `explain indexes = 1 select * from test2 where a2 > 15 settings enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 245', () => {
    const query = `EXPLAIN ESTIMATE SELECT 0 = 1048577, NULL, groupBitmapOr(bitmapBuild([toInt32(65537)])) FROM cluster(test_cluster_two_shards) WHERE NULL = 1048575;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 246', () => {
    const query = `EXPLAIN AST CREATE VIEW numbers_pv AS
SELECT * FROM numbers LIMIT {amount:UInt8};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 247', () => {
    const query = `explain syntax system drop schema cache for hdfs;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 248', () => {
    const query = `EXPLAIN SYNTAX SYSTEM DROP FORMAT SCHEMA CACHE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 249', () => {
    const query = `EXPLAIN SYNTAX SYSTEM DROP FORMAT SCHEMA CACHE FOR Protobuf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 250', () => {
    const query = `EXPLAIN indexes = 1, description=0 SELECT id FROM test_table WHERE id <= 10 AND value IN (SELECT 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 251', () => {
    const query = `EXPLAIN indexes = 1, description=0 SELECT id FROM test_table WHERE id <= 10 AND value IN (SELECT '5');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 252', () => {
    const query = `EXPLAIN indexes = 1, description=0 SELECT id FROM test_table WHERE id <= 10 AND value IN (SELECT toUInt8(number) FROM numbers(5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 253', () => {
    const query = `EXPLAIN indexes = 1, description=0 SELECT id FROM test_table WHERE id <= 10 AND value IN (SELECT toString(number) FROM numbers(5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 254', () => {
    const query = `EXPLAIN AST SELECT false IS NOT DISTINCT FROM true IN (true, false);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 255', () => {
    const query = `EXPLAIN AST SELECT 1 IS NOT DISTINCT FROM 1 + 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 256', () => {
    const query = `EXPLAIN AST SELECT true IS NOT DISTINCT FROM 'x' LIKE 'a';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 257', () => {
    const query = `EXPLAIN AST SELECT 'x' IS NOT DISTINCT FROM 'x' || 'a';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 258', () => {
    const query = `EXPLAIN AST SELECT 1 IS NOT DISTINCT FROM 1 :: integer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 259', () => {
    const query = `EXPLAIN AST SELECT NOT 1 IS NOT DISTINCT FROM 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 260', () => {
    const query = `EXPLAIN AST SELECT - 1 IS NOT DISTINCT FROM 1 ;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 261', () => {
    const query = `EXPLAIN AST SELECT false IS NOT DISTINCT FROM true OR true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 262', () => {
    const query = `EXPLAIN AST SELECT NULL IS NULL IS NOT DISTINCT FROM NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 263', () => {
    const query = `EXPLAIN AST SELECT 1 <=> 1 == 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 264', () => {
    const query = `EXPLAIN AST SELECT 1 == 1 <=> 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 265', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(a) FROM (SELECT DISTINCT a FROM test_rewrite_uniq_to_count) settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 266', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(a) FROM (SELECT DISTINCT a FROM test_rewrite_uniq_to_count) settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 267', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(a) FROM (SELECT DISTINCT a FROM test_rewrite_uniq_to_count) t settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 268', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(t.a) FROM (SELECT DISTINCT a FROM test_rewrite_uniq_to_count) t settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 269', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(a) FROM (SELECT DISTINCT test_rewrite_uniq_to_count.a FROM test_rewrite_uniq_to_count) t settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 270', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(a) FROM (SELECT DISTINCT test_rewrite_uniq_to_count.a FROM test_rewrite_uniq_to_count) t settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 271', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(alias_of_a) FROM (SELECT DISTINCT a as alias_of_a FROM test_rewrite_uniq_to_count) t settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 272', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(alias_of_a) FROM (SELECT DISTINCT a as alias_of_a FROM test_rewrite_uniq_to_count) t settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 273', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(a) FROM (SELECT a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY a) settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 274', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(a) FROM (SELECT a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY a) settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 275', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(t.a) FROM (SELECT a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY a) t settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 276', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(t.a) FROM (SELECT a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY a) t settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 277', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(t.alias_of_a) FROM (SELECT a as alias_of_a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY a) t settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 278', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(t.alias_of_a) FROM (SELECT a as alias_of_a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY a) t settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 279', () => {
    const query = `EXPLAIN SYNTAX SELECT uniq(t.alias_of_a) FROM (SELECT a as alias_of_a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY alias_of_a) t  settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 280', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniq(t.alias_of_a) FROM (SELECT a as alias_of_a, sum(b) FROM test_rewrite_uniq_to_count GROUP BY alias_of_a) t  settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 281', () => {
    const query = `EXPLAIN indexes = 1 SELECT * FROM test_skip_idx WHERE id < 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 282', () => {
    const query = `EXPLAIN indexes = 1 SELECT * FROM test_skip_idx WHERE id < 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 283', () => {
    const query = `EXPLAIN ESTIMATE  SELECT 1 IN (SELECT joinGet(\`02843_join\`, 'value', materialize(1)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 284', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, lhs.value_1, rhs.id, rhs.value_1 FROM test_table_1 AS lhs INNER JOIN test_table_2 AS rhs ON lhs.id = rhs.id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 285', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT lhs.id, lhs.value_1, rhs.id, rhs.value_1 FROM test_table_1 AS lhs ASOF JOIN test_table_2 AS rhs ON lhs.id = rhs.id AND lhs.value_2 < rhs.value_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 286', () => {
    const query = `EXPLAIN QUERY TREE SELECT min(number % 2) AS a, max(number % 3) AS b FROM numbers(10000000) GROUP BY number % 2, number % 3 ORDER BY a, b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 287', () => {
    const query = `EXPLAIN QUERY TREE SELECT any(number % 2) AS a, anyLast(number % 3) AS b FROM numbers(10000000) GROUP BY number % 2, number % 3 ORDER BY a, b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 288', () => {
    const query = `EXPLAIN QUERY TREE SELECT max((number % 5) * (number % 7)) AS a FROM numbers(10000000) GROUP BY number % 7, number % 5 ORDER BY a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 289', () => {
    const query = `EXPLAIN QUERY TREE SELECT foo FROM (SELECT anyLast(number) AS foo FROM numbers(1) GROUP BY number);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 290', () => {
    const query = `EXPLAIN QUERY TREE SELECT min(number) OVER (PARTITION BY number % 2)
FROM numbers(3)
GROUP BY number;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 291', () => {
    const query = `EXPLAIN PIPELINE SELECT a
FROM t
GROUP BY a
FORMAT PrettySpace
SETTINGS optimize_aggregation_in_order = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 292', () => {
    const query = `EXPLAIN PIPELINE SELECT
pageId,
[prev_active_ts, timestamp] AS inactivity_timestamps,
timestamp - prev_active_ts AS inactive_duration,
timestamp
FROM
(
SELECT
pageId,
timestamp,
neighbor(timestamp, -1) AS prev_active_ts
FROM session_events
WHERE (type IN (
SELECT type
FROM event_types
WHERE active = 1
)) AND (sessionId = '693de636-6d9b-47b7-b52a-33bd303b6255') AND (session_events.clientId = 141) AND (pageId = 1686053240314)
ORDER BY timestamp ASC
)
WHERE runningDifference(timestamp) >= 500
ORDER BY timestamp ASC
FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 293', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 294', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 295', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYear(date1) <> 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 296', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYear(date1) <> 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 297', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYear(date1) < 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 298', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYear(date1) < 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 299', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYear(date1) > 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 300', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYear(date1) > 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 301', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYear(date1) <= 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 302', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYear(date1) <= 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 303', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYear(date1) >= 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 304', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYear(date1) >= 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 305', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYear(date1) BETWEEN 1993 AND 1997 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 306', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYear(date1) BETWEEN 1993 AND 1997 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 307', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE (toYear(date1) = 1993 OR toYear(date1) = 1994) AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 308', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE (toYear(date1) = 1993 OR toYear(date1) = 1994) AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 309', () => {
    const query = `EXPLAIN SYNTAX SELECT value1, toYear(date1) as year1 FROM date_t WHERE year1 = 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 310', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1, toYear(date1) as year1 FROM date_t WHERE year1 = 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 311', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE 1993 > toYear(date1) AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 312', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE 1993 > toYear(date1) AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 313', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t PREWHERE toYear(date1) = 1993 WHERE id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 314', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t PREWHERE toYear(date1) = 1993 WHERE id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 315', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE id BETWEEN 1 AND 3 HAVING toYear(date1) = 1993;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 316', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE id BETWEEN 1 AND 3 HAVING toYear(date1) = 1993 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 317', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199300 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 318', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199300 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 319', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199313 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 320', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199313 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 321', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 322', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 323', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199203 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 324', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) = 199203 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 325', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) <> 199203 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 326', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) <> 199203 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 327', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) < 199203 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 328', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) < 199203 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 329', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) > 199203 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 330', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) > 199203 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 331', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) <= 199203 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 332', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) <= 199203 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 333', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE toYYYYMM(date1) >= 199203 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 334', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE toYYYYMM(date1) >= 199203 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 335', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date_t WHERE (toYYYYMM(date1) >= 199203 OR toYear(date1) = 1993) AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 336', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date_t WHERE (toYYYYMM(date1) >= 199203 OR toYear(date1) = 1993) AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 337', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM datetime_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 338', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM datetime_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 339', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM datetime_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 340', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM datetime_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 341', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date32_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 342', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date32_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 343', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM date32_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 344', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM date32_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 345', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM datetime64_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 346', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM datetime64_t WHERE toYear(date1) = 1993 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 347', () => {
    const query = `EXPLAIN SYNTAX SELECT value1 FROM datetime64_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 348', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT value1 FROM datetime64_t WHERE toYYYYMM(date1) = 199312 AND id BETWEEN 1 AND 3 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 349', () => {
    const query = `EXPLAIN PIPELINE SELECT * FROM data FINAL WHERE v1 >= now() - INTERVAL 180 DAY SETTINGS max_threads=2, max_final_threads=2, force_data_skipping_indices='v1_index', use_skip_indexes_if_final=1
FORMAT LineAsString;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 350', () => {
    const query = `EXPLAIN PIPELINE SELECT * FROM data FINAL WHERE v1 >= now() - INTERVAL 180 DAY SETTINGS max_threads=2, max_final_threads=2, force_data_skipping_indices='v1_index', use_skip_indexes_if_final=0
FORMAT LineAsString;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 351', () => {
    const query = `EXPLAIN AST SELECT a * b IS NULL, a * b IS NOT NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 352', () => {
    const query = `EXPLAIN indexes = 1, description = 0 SELECT * FROM tab WHERE has(foo, 'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 353', () => {
    const query = `EXPLAIN SELECT count() FROM t_skip_index_in WHERE c IN (SELECT throwIf(1)) SETTINGS use_skip_indexes = 0 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 354', () => {
    const query = `EXPLAIN SELECT count() FROM t_skip_index_in WHERE c IN (SELECT throwIf(1)) SETTINGS use_skip_indexes = 1; -- { serverError FUNCTION_THROW_IF_VALUE_IS_NON_ZERO } DROP TABLE t_skip_index_in;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 355', () => {
    const query = `EXPLAIN PIPELINE graph = 1, compact = 1 SELECT * FROM merge1 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 356', () => {
    const query = `EXPLAIN PIPELINE graph = 1, compact = 1 SELECT * FROM merge1 FORMAT Null SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 357', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02702_logical_optimizer WHERE a = 1 OR 3 = a OR NULL = a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 358', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02702_logical_optimizer WHERE a = 1 OR 3 = a OR 2 = a OR a = NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 359', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02702_logical_optimizer_with_null_column WHERE a = 1 OR 3 = a OR 2 = a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 360', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1
WHERE (a, b) = (1, 2) AND (c, d, a) = (3, 4, 5) OR (a, b, 1000) = (c, 10, d) OR ((a, b), 1000) = ((c, 10), d);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 361', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT id, value FROM test_table PREWHERE id = 5 settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 362', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT id, value FROM test_table PREWHERE id = 5 settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 363', () => {
    const query = `explain pipeline graph=1 select count(ID) from t1 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 364', () => {
    const query = `explain pipeline graph=1 select sum(1) from t1 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 365', () => {
    const query = `explain pipeline graph=1 select min(ID) from t1 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 366', () => {
    const query = `explain pipeline graph=1 select max(ID) from t1 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 367', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT t1.id, t1.value, t2.value FROM test_table AS t1 INNER JOIN test_table_join AS t2 ON t1.id = t2.id WHERE t1.id = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 368', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02668_logical_optimizer WHERE a = 1 OR 3 = a OR 1 = a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 369', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02668_logical_optimizer WHERE a = 1 OR 1 = a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 370', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02668_logical_optimizer WHERE a = 1 AND 2 = a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 371', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02668_logical_optimizer WHERE a = 3 AND b = 'another' AND a = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 372', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02668_logical_optimizer WHERE a = 2 AND 2 = a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 373', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02668_logical_optimizer WHERE a <> 1 AND 3 <> a AND 1 <> a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 374', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM 02668_logical_optimizer WHERE a <> 1 AND 1 <> a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 375', () => {
    const query = `explain pipeline select * from t limit 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 376', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1  select arrayExists(x -> x = 5 , materialize(range(10))) from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 377', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1  select arrayExists(x -> 5 = x , materialize(range(10))) from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 378', () => {
    const query = `EXPLAIN SYNTAX select arrayExists(x -> x = 5 , materialize(range(10))) from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 379', () => {
    const query = `EXPLAIN SYNTAX select arrayExists(x -> 5 = x , materialize(range(10))) from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 380', () => {
    const query = `EXPLAIN header = 1, actions = 1 SELECT number FROM (SELECT number FROM numbers(2) ORDER BY ignore(2)) WHERE ignore(2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 381', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM t1, t2, (SELECT a as x from t3 where a + 1 = b ) as t3
WHERE t1.a = if(t2.b > 0, t2.a, 0) AND t2.a = t3.x AND 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 382', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM t1, t2, (SELECT a as x from t3 where a + 1 = b ) as t3
WHERE t1.a = if(t2.b > 0, t2.a, 0) AND t2.a = t3.x AND 1
SETTINGS cross_to_inner_join_rewrite = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 383', () => {
    const query = `EXPLAIN QUERY TREE SELECT * FROM t1, t2, (SELECT a as x from t3 where a + 1 = b ) as t3
WHERE t1.a = if(t2.b > 0, t2.a, 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 384', () => {
    const query = `EXPLAIN SYNTAX SELECT countDistinctIf(number % 10, number % 5 = 2) FROM numbers(1000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 385', () => {
    const query = `EXPLAIN SYNTAX SELECT *
FROM
(
SELECT
day_,
if(type_1 = '', 'all', type_1) AS type_1
FROM
(
SELECT
day_,
type_1
FROM test_grouping_sets_predicate
WHERE day_ = '2023-01-05'
GROUP BY
GROUPING SETS (
(day_, type_1),
(day_))
) AS t
)
WHERE type_1 = 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 386', () => {
    const query = `EXPLAIN PIPELINE SELECT *
FROM
(
SELECT
day_,
if(type_1 = '', 'all', type_1) AS type_1
FROM
(
SELECT
day_,
type_1
FROM test_grouping_sets_predicate
WHERE day_ = '2023-01-05'
GROUP BY
GROUPING SETS (
(day_, type_1),
(day_))
) AS t
)
WHERE type_1 = 'all' settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 387', () => {
    const query = `EXPLAIN PIPELINE SELECT *
FROM
(
SELECT
day_,
if(type_1 = '', 'all', type_1) AS type_1
FROM
(
SELECT
day_,
type_1
FROM test_grouping_sets_predicate
WHERE day_ = '2023-01-05'
GROUP BY
GROUPING SETS (
(day_, type_1),
(day_))
) AS t
)
WHERE type_1 = 'all' settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 388', () => {
    const query = `EXPLAIN PIPELINE SELECT *
FROM
(
SELECT
day_,
if(type_1 = '', 'all', type_1) AS type_1
FROM
(
SELECT
day_,
type_1
FROM test_grouping_sets_predicate
GROUP BY
GROUPING SETS (
(day_, type_1),
(day_))
) AS t
)
WHERE day_ = '2023-01-05' settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 389', () => {
    const query = `EXPLAIN PIPELINE SELECT *
FROM
(
SELECT
day_,
if(type_1 = '', 'all', type_1) AS type_1
FROM
(
SELECT
day_,
type_1
FROM test_grouping_sets_predicate
GROUP BY
GROUPING SETS (
(day_, type_1),
(day_))
) AS t
)
WHERE day_ = '2023-01-05' settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 390', () => {
    const query = `EXPLAIN QUERY TREE SELECT grouping(id), grouping(value) FROM test_table GROUP BY id, value;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 391', () => {
    const query = `EXPLAIN QUERY TREE SELECT grouping(id), grouping(value) FROM test_table GROUP BY ROLLUP (id, value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 392', () => {
    const query = `EXPLAIN QUERY TREE SELECT grouping(id), grouping(value) FROM test_table GROUP BY CUBE (id, value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 393', () => {
    const query = `EXPLAIN QUERY TREE SELECT grouping(id), grouping(value) FROM test_table GROUP BY GROUPING SETS (id, value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 394', () => {
    const query = `EXPLAIN QUERY TREE SELECT grouping(id), grouping(value) FROM test_table GROUP BY GROUPING SETS ((id), (value));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 395', () => {
    const query = `explain pipeline select a from t1 group by a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 396', () => {
    const query = `explain pipeline select a from t2 group by a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 397', () => {
    const query = `explain pipeline select a from t3 group by a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 398', () => {
    const query = `explain pipeline select a from t4 group by a settings read_in_order_two_level_merge_threshold = 1e12;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 399', () => {
    const query = `explain pipeline select a from t5 group by a settings read_in_order_two_level_merge_threshold = 1e12;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 400', () => {
    const query = `explain pipeline select a from t6 group by a settings read_in_order_two_level_merge_threshold = 1e12;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 401', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select sum(if(number % 2, number, 0)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 402', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select sum(if(number % 2, 0, number)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 403', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select sum(if(number % 2, number, null)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 404', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select sum(if(number % 2, null, number)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 405', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select avg(if(number % 2, number, null)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 406', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select avg(if(number % 2, null, number)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 407', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select quantiles(0.5, 0.9, 0.99)(if(number % 2, number, null)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 408', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 select quantiles(0.5, 0.9, 0.99)(if(number % 2, null, number)) from numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 409', () => {
    const query = `explain ast select tuple(a) -> f(a); -- { clientError SYNTAX_ERROR } explain ast select tuple(a, b) -> f(a); -- { clientError SYNTAX_ERROR }
explain ast select (tuple(a)) -> f(a); -- { clientError SYNTAX_ERROR }
explain ast select (f(a)) -> f(a); -- { clientError SYNTAX_ERROR }
explain ast select (a::UInt64) -> f(a); -- { clientError SYNTAX_ERROR }
explain ast select (1) -> f(a); -- { clientError SYNTAX_ERROR }
explain ast select (1::UInt64) -> f(a); -- { clientError SYNTAX_ERROR }
`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 410', () => {
    const query = `EXPLAIN PLAN header = 1 SELECT count() FROM a JOIN b ON b.b1 = a.a1 JOIN c ON c.c1 = b.b1 JOIN d ON d.d1 = c.c1 GROUP BY a.a2
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 411', () => {
    const query = `EXPLAIN PLAN header = 1 SELECT a.a2, d.d2 FROM a JOIN b USING (k) JOIN c USING (k) JOIN d USING (k)
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 412', () => {
    const query = `EXPLAIN PLAN header = 1 SELECT b.bx FROM a
JOIN (SELECT b1, b2 || 'x'  AS bx FROM b ) AS b ON b.b1 = a.a1
JOIN c ON c.c1 = b.b1
JOIN (SELECT number AS d1 from numbers(10)) AS d ON d.d1 = c.c1
WHERE c.c2 != '' ORDER BY a.a2
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 413', () => {
    const query = `explain ast insert into test values (balabala);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 414', () => {
    const query = `explain ast insert into test format TabSeparated balabala;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 415', () => {
    const query = `EXPLAIN QUERY TREE SELECT value FROM ( SELECT tupleElement(value, 'a') AS value FROM test_table
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 416', () => {
    const query = `EXPLAIN QUERY TREE SELECT value FROM ( SELECT tupleElement(value, 'a') AS value FROM test_table
) SETTINGS optimize_functions_to_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 417', () => {
    const query = `EXPLAIN QUERY TREE SELECT value FROM ( SELECT tupleElement(value, 'a') AS value FROM test_table SETTINGS optimize_functions_to_subcolumns = 0
) SETTINGS optimize_functions_to_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 418', () => {
    const query = `EXPLAIN QUERY TREE SELECT value FROM ( SELECT tupleElement(value, 'a') AS value FROM test_table
) SETTINGS optimize_functions_to_subcolumns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 419', () => {
    const query = `EXPLAIN QUERY TREE SELECT value FROM ( SELECT tupleElement(value, 'a') AS value FROM test_table SETTINGS optimize_functions_to_subcolumns = 1
) SETTINGS optimize_functions_to_subcolumns = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 420', () => {
    const query = `EXPLAIN SYNTAX SELECT transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other') FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 421', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other') FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 422', () => {
    const query = `EXPLAIN SYNTAX SELECT number > 5 ? 'censor.net' : 'google' FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 423', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT number > 5 ? 'censor.net' : 'google' FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 424', () => {
    const query = `EXPLAIN SYNTAX SELECT CONCAT(transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other'), '1') FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 425', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT CONCAT(transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other'), '1') FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 426', () => {
    const query = `EXPLAIN SYNTAX SELECT CONCAT(number > 5 ? 'censor.net' : 'google', '1') FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 427', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT CONCAT(number > 5 ? 'censor.net' : 'google', '1') FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 428', () => {
    const query = `EXPLAIN SYNTAX SELECT t1.value FROM (SELECT number > 5 ? 'censor.net' : 'google' as value FROM system.numbers LIMIT 10) as t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 429', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT t1.value FROM (SELECT number > 5 ? 'censor.net' : 'google' as value FROM system.numbers LIMIT 10) as t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 430', () => {
    const query = `EXPLAIN SYNTAX SELECT t1.value FROM (SELECT transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other') as value FROM system.numbers LIMIT 10) as t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 431', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT t1.value FROM (SELECT transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other') as value FROM system.numbers LIMIT 10) as t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 432', () => {
    const query = `EXPLAIN SYNTAX SELECT number > 5 ? 'censor.net' : 'google' as value, value FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 433', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT number > 5 ? 'censor.net' : 'google' as value, value FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 434', () => {
    const query = `EXPLAIN SYNTAX SELECT transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other') as value, value FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 435', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT transform(number, [2, 4, 6], ['google', 'censor.net', 'yahoo'], 'other') as value, value FROM system.numbers LIMIT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 436', () => {
    const query = `EXPLAIN SYNTAX SELECT transform(number, [NULL], ['google', 'censor.net', 'yahoo'], 'other') FROM (SELECT NULL as number FROM system.numbers LIMIT 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 437', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT transform(number, [NULL], ['google', 'censor.net', 'yahoo'], 'other') FROM (SELECT NULL as number FROM system.numbers LIMIT 10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 438', () => {
    const query = `EXPLAIN PLAN SELECT 1 + number from system.numbers LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 439', () => {
    const query = `EXPLAIN PLAN SELECT 1 + number from system.numbers LIMIT 1 SETTINGS use_query_cache = true; -- (*) EXPLAIN PIPELINE SELECT 1 + number from system.numbers LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 440', () => {
    const query = `EXPLAIN PIPELINE SELECT 1 + number from system.numbers LIMIT 1 SETTINGS use_query_cache = true; -- (*) SELECT count(*) FROM system.query_cache;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 441', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniqCombined(tuple('')) FROM numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 442', () => {
    const query = `EXPLAIN QUERY TREE SELECT uniqCombined(tuple(materialize(tuple(number)))) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 443', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sumIf(1, (number % 2) == 0) FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 444', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(if((number % 2) == 0, 1, 0)) FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 445', () => {
    const query = `EXPLAIN QUERY TREE (SELECT sum(if((number % 2) == 0, 0, 1)) FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 446', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT avg(log(2) * number) AS k FROM numbers(10000000)
GROUP BY GROUPING SETS (((number % 2) * (number % 3)), number % 3, number % 2)
HAVING avg(log(2) * number) > 3465735.3
ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 447', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT avg(log(2) * number) AS k FROM numbers(10000000)
GROUP BY GROUPING SETS (((number % 2) * (number % 3), number % 3, number % 2), (number % 4))
HAVING avg(log(2) * number) > 3465735.3
ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 448', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT avg(log(2) * number) AS k FROM numbers(10000000)
GROUP BY GROUPING SETS (((number % 2) * (number % 3), number % 3), (number % 2))
HAVING avg(log(2) * number) > 3465735.3
ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 449', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT count() FROM numbers(1000)
GROUP BY GROUPING SETS
(
(number, number + 1, number +2),
(number % 2, number % 3),
(number / 2, number / 3)
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 450', () => {
    const query = `EXPLAIN QUERY TREE SELECT avg(log(2) * number) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 451', () => {
    const query = `EXPLAIN QUERY TREE SELECT avg(number * log(2)) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 452', () => {
    const query = `EXPLAIN QUERY TREE dump_ast = 1 SELECT * FROM mysql(
'127.0.0.1:9004', currentDatabase(), foo, 'default', '',
SETTINGS connection_wait_timeout = 123, connect_timeout = 40123002, read_write_timeout = 40123001, connection_pool_size = 3
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 453', () => {
    const query = `EXPLAIN SYNTAX SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a = 'x' OR a = 'y';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 454', () => {
    const query = `EXPLAIN QUERY TREE SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a = 'x' OR a = 'y' SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 455', () => {
    const query = `EXPLAIN SYNTAX SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a = 'x' OR 'y' = a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 456', () => {
    const query = `EXPLAIN QUERY TREE SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a = 'x' OR 'y' = a SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 457', () => {
    const query = `EXPLAIN SYNTAX SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a <> 'x' AND a <> 'y';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 458', () => {
    const query = `EXPLAIN QUERY TREE SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a <> 'x' AND a <> 'y' SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 459', () => {
    const query = `EXPLAIN SYNTAX SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a <> 'x' AND 'y' <> a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 460', () => {
    const query = `EXPLAIN QUERY TREE SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE a <> 'x' AND 'y' <> a SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 461', () => {
    const query = `EXPLAIN SYNTAX SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE b = 0 OR b = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 462', () => {
    const query = `EXPLAIN QUERY TREE SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE b = 0 OR b = 1 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 463', () => {
    const query = `EXPLAIN SYNTAX SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE b <> 0 AND b <> 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 464', () => {
    const query = `EXPLAIN QUERY TREE SELECT a FROM t_logical_expressions_optimizer_low_cardinality WHERE b <> 0 AND b <> 1 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 465', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 IS NULL + 1 IS NOT NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 466', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 IS NULL = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 467', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 IS NULL :: Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 468', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT quantile(0.5)(b), quantile(0.9)(b) from (SELECT x + 1 as b FROM (SELECT quantile(0.5)(b) as x, quantile(0.9)(b) FROM fuse_tbl) GROUP BY x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 469', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT sum(a), avg(a) from fuse_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 470', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT sum(b), avg(b) from fuse_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 471', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT sum(a + 1), sum(b), count(b), avg(b), count(a + 1), sum(a + 2), count(a) from fuse_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 472', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT avg(b) * 3, sum(b) + 1 + count(b), count(b) * count(b) FROM (SELECT b FROM fuse_tbl);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 473', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT sum(b), count(b) from (SELECT x as b FROM (SELECT sum(b) as x, count(b)  FROM fuse_tbl) );`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 474', () => {
    const query = `EXPLAIN AST ALTER user WITH a; -- { clientError SYNTAX_ERROR } `;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 475', () => {
    const query = `EXPLAIN SYNTAX SELECT INTERVAL '-1 SECOND 2 MINUTE -3 MONTH 1 YEAR';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 476', () => {
    const query = `EXPLAIN SYNTAX CREATE TABLE test (a Int32)
ENGINE = MergeTree() order by tuple()
SETTINGS disk = disk(type=local, path='/var/lib/clickhouse/disks/local/');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 477', () => {
    const query = `EXPLAIN SYNTAX WITH
cs_ui AS
(
SELECT
cs_item_sk,
sum(cs_ext_list_price) AS sale,
sum((cr_refunded_cash + cr_reversed_charge) + cr_store_credit) AS refund
FROM catalog_sales , catalog_returns
WHERE (cs_item_sk = cr_item_sk) AND (cs_order_number = cr_order_number)
GROUP BY cs_item_sk
HAVING sum(cs_ext_list_price) > (2 * sum((cr_refunded_cash + cr_reversed_charge) + cr_store_credit))
),
cross_sales AS
(
SELECT
i_product_name AS product_name,
i_item_sk AS item_sk,
s_store_name AS store_name,
s_zip AS store_zip,
ad1.ca_street_number AS b_street_number,
ad1.ca_street_name AS b_street_name,
ad1.ca_city AS b_city,
ad1.ca_zip AS b_zip,
ad2.ca_street_number AS c_street_number,
ad2.ca_street_name AS c_street_name,
ad2.ca_city AS c_city,
ad2.ca_zip AS c_zip,
d1.d_year AS syear,
d2.d_year AS fsyear,
d3.d_year AS s2year,
count(*) AS cnt,
sum(ss_wholesale_cost) AS s1,
sum(ss_list_price) AS s2,
sum(ss_coupon_amt) AS s3
FROM store_sales
, store_returns
, cs_ui
, date_dim AS d1
, date_dim AS d2
, date_dim AS d3
, store
, customer
, customer_demographics AS cd1
, customer_demographics AS cd2
, promotion
, household_demographics AS hd1
, household_demographics AS hd2
, customer_address AS ad1
, customer_address AS ad2
, income_band AS ib1
, income_band AS ib2
, item
WHERE (ss_store_sk = s_store_sk) AND (ss_sold_date_sk = d1.d_date_sk) AND (ss_customer_sk = c_customer_sk) AND (ss_cdemo_sk = cd1.cd_demo_sk) AND (ss_hdemo_sk = hd1.hd_demo_sk) AND (ss_addr_sk = ad1.ca_address_sk) AND (ss_item_sk = i_item_sk) AND (ss_item_sk = sr_item_sk) AND (ss_ticket_number = sr_ticket_number) AND (ss_item_sk = cs_ui.cs_item_sk) AND (c_current_cdemo_sk = cd2.cd_demo_sk) AND (c_current_hdemo_sk = hd2.hd_demo_sk) AND (c_current_addr_sk = ad2.ca_address_sk) AND (c_first_sales_date_sk = d2.d_date_sk) AND (c_first_shipto_date_sk = d3.d_date_sk) AND (ss_promo_sk = p_promo_sk) AND (hd1.hd_income_band_sk = ib1.ib_income_band_sk) AND (hd2.hd_income_band_sk = ib2.ib_income_band_sk) AND (cd1.cd_marital_status != cd2.cd_marital_status) AND (i_color IN ('maroon', 'burnished', 'dim', 'steel', 'navajo', 'chocolate')) AND ((i_current_price >= 35) AND (i_current_price <= (35 + 10))) AND ((i_current_price >= (35 + 1)) AND (i_current_price <= (35 + 15)))
GROUP BY
i_product_name,
i_item_sk,
s_store_name,
s_zip,
ad1.ca_street_number,
ad1.ca_street_name,
ad1.ca_city,
ad1.ca_zip,
ad2.ca_street_number,
ad2.ca_street_name,
ad2.ca_city,
ad2.ca_zip,
d1.d_year,
d2.d_year,
d3.d_year
)
SELECT
cs1.product_name,
cs1.store_name,
cs1.store_zip,
cs1.b_street_number,
cs1.b_street_name,
cs1.b_city,
cs1.b_zip,
cs1.c_street_number,
cs1.c_street_name,
cs1.c_city,
cs1.c_zip,
cs1.syear,
cs1.cnt,
cs1.s1 AS s11,
cs1.s2 AS s21,
cs1.s3 AS s31,
cs2.s1 AS s12,
cs2.s2 AS s22,
cs2.s3 AS s32,
cs2.syear,
cs2.cnt
FROM cross_sales AS cs1 , cross_sales AS cs2
WHERE (cs1.item_sk = cs2.item_sk) AND (cs1.syear = 2000) AND (cs2.syear = (2000 + 1)) AND (cs2.cnt <= cs1.cnt) AND (cs1.store_name = cs2.store_name) AND (cs1.store_zip = cs2.store_zip)
ORDER BY
cs1.product_name ASC,
cs1.store_name ASC,
cs2.cnt ASC,
cs1.s1 ASC,
cs2.s1 ASC
FORMAT Null
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 478', () => {
    const query = `explain syntax select left_table.id,val_left, val_middle, val_right from left_table inner join middle_table on left_table.id = middle_table.id
inner join right_table on middle_table.id = right_table.id
ORDER BY left_table.id, val_left, val_middle, val_right;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 479', () => {
    const query = `explain pipeline select a from remote(test_cluster_two_shards, currentDatabase(), t) group by a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 480', () => {
    const query = `explain pipeline select a from remote(test_cluster_two_shards, currentDatabase(), dist_t) group by a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 481', () => {
    const query = `explain pipeline select a, count() from dist_t_different_dbs group by a order by a limit 5 offset 500;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 482', () => {
    const query = `explain pipeline select a from pr_t group by a order by a limit 5 offset 500 settings parallel_replicas_local_plan=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 483', () => {
    const query = `explain pipeline select a from pr_t group by a order by a limit 5 offset 500 settings allow_experimental_analyzer=1, parallel_replicas_local_plan=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 484', () => {
    const query = `explain syntax select number from (select number from t order by number desc offset 3) where number < 18;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 485', () => {
    const query = `explain syntax select number from (select number from t order by number limit 5) where number % 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 486', () => {
    const query = `EXPLAIN SYNTAX SELECT * from executable('', 'JSON', 'data String');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 487', () => {
    const query = `EXPLAIN SYNTAX SELECT * from executable('', 'JSON', 'data String', SETTINGS max_command_execution_time=100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 488', () => {
    const query = `EXPLAIN SYNTAX SELECT * from executable('', 'JSON', 'data String', SETTINGS max_command_execution_time=100, command_read_timeout=1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 489', () => {
    const query = `EXPLAIN QUERY TREE select sum(multiIf(a = 1, 1, 0)) from m;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 490', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 0 SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 491', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 0 SELECT id, value FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 492', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT id, value FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 493', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 0 SELECT arrayMap(x -> x + id, [1, 2, 3]) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 494', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 SELECT arrayMap(x -> x + 1, [1, 2, 3]) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 495', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 0 WITH x -> x + 1 AS lambda SELECT lambda(id) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 496', () => {
    const query = `EXPLAIN QUERY TREE run_passes = 1 WITH x -> x + 1 AS lambda SELECT lambda(id) FROM test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 497', () => {
    const query = `EXPLAIN indexes = 1 WITH [0.0, 2.0] AS reference_vec
SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 498', () => {
    const query = `EXPLAIN indexes = 1 WITH [0.0, 2.0] AS reference_vec
SELECT id, vec, cosineDistance(vec, reference_vec)
FROM tab
ORDER BY cosineDistance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 499', () => {
    const query = `EXPLAIN indexes=1 WITH [0.0, 2.0] as reference_vec
SELECT id, vec, cosineDistance(vec, reference_vec)
FROM tab
ORDER BY cosineDistance(vec, reference_vec)
LIMIT 3
SETTINGS max_limit_for_ann_queries = 2; -- LIMIT 3 > 2 --> don't use the ann index
DROP TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 500', () => {
    const query = `EXPLAIN indexes = 1 WITH [0.0, 2.0] AS reference_vec
SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_f64
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 501', () => {
    const query = `EXPLAIN indexes = 1 WITH [0.0, 2.0] AS reference_vec
SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_f32
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 502', () => {
    const query = `EXPLAIN indexes = 1 WITH [0.0, 2.0] AS reference_vec
SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_f16
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 503', () => {
    const query = `EXPLAIN indexes = 1 WITH [0.0, 2.0] AS reference_vec
SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_bf16
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 504', () => {
    const query = `EXPLAIN indexes = 1 WITH [0.0, 2.0] AS reference_vec
SELECT id, vec, L2Distance(vec, reference_vec)
FROM tab_i8
ORDER BY L2Distance(vec, reference_vec)
LIMIT 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 505', () => {
    const query = `EXPLAIN indexes = 1 WITH [0., 2.] AS reference_vec
SELECT
id,
vec,
cosineDistance(vec, reference_vec) AS distance
FROM tab
ORDER BY distance
LIMIT 1
SETTINGS enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 506', () => {
    const query = `EXPLAIN indexes = 1 WITH (
SELECT vec
FROM tab
LIMIT 1
) AS reference_vec
SELECT
id,
vec,
cosineDistance(vec, reference_vec) AS distance
FROM tab
ORDER BY distance
LIMIT 1
SETTINGS enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 507', () => {
    const query = `EXPLAIN indexes = 1 WITH (
SELECT [0., 2.]
) AS reference_vec
SELECT
id,
vec,
cosineDistance(vec, reference_vec) AS distance
FROM tab
ORDER BY distance
LIMIT 1
SETTINGS enable_analyzer = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 508', () => {
    const query = `EXPLAIN AST optimize=0 SELECT * FROM numbers(0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 509', () => {
    const query = `EXPLAIN AST optimize=1 SELECT * FROM numbers(0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 510', () => {
    const query = `EXPLAIN AST optimize=0 SELECT countDistinct(number) FROM numbers(0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 511', () => {
    const query = `EXPLAIN AST optimize=1 SELECT countDistinct(number) FROM numbers(0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 512', () => {
    const query = `explain pipeline select * from (select * from numbers(1e8) group by number) group by number settings max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 513', () => {
    const query = `explain pipeline select * from (select * from numbers_mt(1e8) group by number) group by number settings max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 514', () => {
    const query = `explain pipeline select * from (select * from numbers_mt(1e8) group by number) order by number settings max_rows_to_read = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 515', () => {
    const query = `explain pipeline select number from remote('127.0.0.{1,2,3}', system, numbers_mt) group by number settings distributed_aggregation_memory_efficient = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 516', () => {
    const query = `explain pipeline select number from remote('127.0.0.{1,2,3}', system, numbers_mt) group by number settings distributed_aggregation_memory_efficient = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 517', () => {
    const query = `explain pipeline SELECT k1, k3, sum(value) v FROM remote('127.0.0.{1,2}', currentDatabase(), proj_agg_02343) GROUP BY k1, k3 SETTINGS distributed_aggregation_memory_efficient = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 518', () => {
    const query = `explain pipeline SELECT k1, k3, sum(value) v FROM remote('127.0.0.{1,2}', currentDatabase(), proj_agg_02343) GROUP BY k1, k3 SETTINGS distributed_aggregation_memory_efficient = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 519', () => {
    const query = `explain pipeline select a from remote('127.0.0.{1,2}', currentDatabase(), dist_t) group by a settings max_threads = 2, distributed_aggregation_memory_efficient = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 520', () => {
    const query = `EXPLAIN SYNTAX WITH
x AS ( SELECT number FROM numbers(10) ),
cross_sales AS (
SELECT 1 AS xx
FROM x, x AS d1, x AS d2, x AS d3, x AS d4, x AS d5, x AS d6, x AS d7, x AS d8, x AS d9
WHERE x.number = d9.number
)
SELECT xx FROM cross_sales WHERE xx = 2000 FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 521', () => {
    const query = `EXPLAIN SYNTAX WITH
x AS ( SELECT number FROM numbers(10) ),
cross_sales AS (
SELECT 1 AS xx
FROM x, x AS d1, x AS d2, x AS d3, x AS d4, x AS d5, x AS d6, x AS d7, x AS d8, x AS d9
WHERE x.number = d9.number
)
SELECT xx FROM cross_sales WHERE xx = 2000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 522', () => {
    const query = `EXPLAIN SYNTAX SELECT multiIf(number = 0, NULL, toNullable(number)) FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 523', () => {
    const query = `EXPLAIN SYNTAX SELECT CASE WHEN number = 0 THEN NULL ELSE toNullable(number) END FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 524', () => {
    const query = `EXPLAIN PIPELINE header = true, compact = true WITH top_repos AS (SELECT repo_name FROM github_events__fuzz_0 WHERE (event_type = 'WatchEvent') AND (toDate(created_at) = (today() - 1)) GROUP BY repo_name ORDER BY count() DESC LIMIT 100 UNION DISTINCT SELECT repo_name FROM github_events__fuzz_0 WHERE (event_type = 'WatchEvent') AND (toMonday(created_at) = toMonday(today() - toIntervalWeek(1))) GROUP BY repo_name ORDER BY count() DESC LIMIT 100 UNION DISTINCT SELECT repo_name FROM github_events__fuzz_0 PREWHERE (event_type = 'WatchEvent') AND (toStartOfMonth(created_at) = (toStartOfMonth(today()) - toIntervalMonth(1))) GROUP BY repo_name ORDER BY count() DESC LIMIT 100 UNION DISTINCT SELECT repo_name FROM github_events WHERE (event_type = 'WatchEvent') AND (toYear(created_at) = (toYear(today()) - 1)) GROUP BY repo_name ORDER BY count() DESC LIMIT 100), last_day AS (SELECT repo_name, count() AS count_last_day, rowNumberInAllBlocks() + 1 AS position_last_day FROM github_events WHERE (repo_name IN (SELECT repo_name FROM top_repos)) AND (toDate(created_at) = (today() - 1)) GROUP BY repo_name ORDER BY count_last_day DESC), last_week AS (SELECT repo_name, count() AS count_last_week, rowNumberInAllBlocks() + 1 AS position_last_week FROM github_events WHERE (repo_name IN (SELECT repo_name FROM top_repos)) AND (toMonday(created_at) = (toMonday(today()) - toIntervalWeek(2))) GROUP BY repo_name ORDER BY count_last_week DESC), last_month AS (SELECT repo_name, count() AS count_last_month, rowNumberInAllBlocks() + 1 AS position_last_month FROM github_events__fuzz_0 WHERE ('deleted' = 4) AND in(repo_name) AND (toStartOfMonth(created_at) = (toStartOfMonth(today()) - toIntervalMonth(1))) GROUP BY repo_name ORDER BY count_last_month DESC) SELECT d.repo_name, COLUMNS(count) FROM last_day AS d INNER JOIN last_week AS w ON d.repo_name = w.repo_name INNER JOIN last_month AS m ON d.repo_name = m.repo_name format Null; -- { serverError INVALID_SETTING_VALUE } DROP TABLE github_events;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 525', () => {
    const query = `EXPLAIN SYNTAX CREATE TABLE t (x varchar(255) COLLATE binary NOT NULL) ENGINE=Memory;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 526', () => {
    const query = `EXPLAIN SYNTAX CREATE TABLE t (x varchar(255) COLLATE NOT NULL) ENGINE=Memory; -- {clientError SYNTAX_ERROR} EXPLAIN SYNTAX CREATE TABLE t (x varchar(255) COLLATE NULL) ENGINE=Memory; -- {clientError SYNTAX_ERROR}
EXPLAIN SYNTAX CREATE TABLE t (x varchar(255) COLLATE something_else NOT NULL) ENGINE=Memory; -- {clientError SYNTAX_ERROR}
SET compatibility_ignore_collation_in_create_table=false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 527', () => {
    const query = `EXPLAIN SYNTAX INSERT INTO foo FROM INFILE '/dev/null';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 528', () => {
    const query = `EXPLAIN SYNTAX INSERT INTO foo FROM INFILE '/dev/null' COMPRESSION 'gz';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 529', () => {
    const query = `explain estimate select  DISTINCT _partition_id from weird_partitions_02245 where d >= '2021-12-31 00:00:00' and d < '2022-01-01 00:00:00';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 530', () => {
    const query = `explain estimate select  DISTINCT _partition_id from weird_partitions_02245 where d >= '2022-01-01 00:00:00' and d1 >= '2021-12-31 00:00:00' and d1 < '2022-01-01 00:00:00';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 531', () => {
    const query = `explain estimate select  DISTINCT _partition_id from weird_partitions_02245 where d1 >= '2021-12-31 00:00:00' and d1 < '2022-01-01 00:00:00';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 532', () => {
    const query = `explain estimate select  DISTINCT _partition_id from weird_partitions_02245 where d >= '2022-01-01 00:00:00' and d1 >= '2021-12-31 00:00:00' and d1 < '2020-01-01 00:00:00';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 533', () => {
    const query = `EXPLAIN PIPELINE SELECT * FROM
(
SELECT * FROM system.numbers LIMIT 10
) t1
ALL LEFT JOIN
(
SELECT * FROM system.numbers LIMIT 10
) t2
USING number
SETTINGS max_threads=16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 534', () => {
    const query = `explain pipeline select parent_key, child_key, count() from data_02233 group by parent_key, child_key with totals order by parent_key, child_key settings max_threads=1, optimize_aggregation_in_order=1, read_in_order_two_level_merge_threshold=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 535', () => {
    const query = `explain pipeline select parent_key, child_key, count() from data_02233 group by parent_key, child_key with totals order by parent_key, child_key settings max_threads=1, optimize_aggregation_in_order=0, read_in_order_two_level_merge_threshold=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 536', () => {
    const query = `EXPLAIN header = 1, optimize = 0 SELECT avgWeighted(x, y) FROM (SELECT NULL, 255 AS x, 1 AS y UNION ALL SELECT y, NULL AS x, 1 AS y);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 537', () => {
    const query = `EXPLAIN SYNTAX SELECT materialize('Привет, World') AS s WHERE (s LIKE 'hell%') OR (s ILIKE '%привет%') OR (s ILIKE 'world%') SETTINGS optimize_or_like_chain = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 538', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT materialize('Привет, World') AS s WHERE (s LIKE 'hell%') OR (s ILIKE '%привет%') OR (s ILIKE 'world%') SETTINGS optimize_or_like_chain = 0, enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 539', () => {
    const query = `EXPLAIN SYNTAX SELECT materialize('Привет, World') AS s WHERE (s LIKE 'hell%') OR (s ILIKE '%привет%') OR (s ILIKE 'world%') SETTINGS optimize_or_like_chain = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 540', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT materialize('Привет, World') AS s WHERE (s LIKE 'hell%') OR (s ILIKE '%привет%') OR (s ILIKE 'world%') SETTINGS optimize_or_like_chain = 1, enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 541', () => {
    const query = `EXPLAIN SYNTAX SELECT materialize('Привет, World') AS s1, materialize('Привет, World') AS s2 WHERE (s1 LIKE 'hell%') OR (s2 ILIKE '%привет%') OR (s1 ILIKE 'world%') SETTINGS optimize_or_like_chain = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 542', () => {
    const query = `EXPLAIN SYNTAX SELECT materialize('Привет, World') AS s1, materialize('Привет, World') AS s2 WHERE (s1 LIKE 'hell%') OR (s2 ILIKE '%привет%') OR (s1 ILIKE 'world%') SETTINGS optimize_or_like_chain = 1, allow_hyperscan = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 543', () => {
    const query = `EXPLAIN SYNTAX SELECT materialize('Привет, World') AS s1, materialize('Привет, World') AS s2 WHERE (s1 LIKE 'hell%') OR (s2 ILIKE '%привет%') OR (s1 ILIKE 'world%') SETTINGS optimize_or_like_chain = 1, max_hyperscan_regexp_length = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 544', () => {
    const query = `EXPLAIN SYNTAX SELECT materialize('Привет, World') AS s1, materialize('Привет, World') AS s2 WHERE (s1 LIKE 'hell%') OR (s2 ILIKE '%привет%') OR (s1 ILIKE 'world%') SETTINGS optimize_or_like_chain = 1, max_hyperscan_regexp_total_length = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 545', () => {
    const query = `EXPLAIN SYNTAX SELECT materialize('Привет, World') AS s1, materialize('Привет, World') AS s2 WHERE (s1 LIKE 'hell%') OR (s2 ILIKE '%привет%') OR (s1 ILIKE 'world%') OR s1 == 'Привет' SETTINGS optimize_or_like_chain = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 546', () => {
    const query = `EXPLAIN SYNTAX SELECT test, materialize('Привет, World') AS s WHERE ((s LIKE 'hell%') AS test) OR (s ILIKE '%привет%') OR (s ILIKE 'world%') SETTINGS optimize_or_like_chain = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 547', () => {
    const query = `explain syntax select * from (select range(0, 10) range_, point_ from system.one array join range_ as point_);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 548', () => {
    const query = `EXPLAIN PIPELINE SELECT sleep(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 549', () => {
    const query = `EXPLAIN SYNTAX INSERT INTO test FROM INFILE 'data.file' SELECT x from input('x UInt32') FORMAT TSV;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 550', () => {
    const query = `EXPLAIN SYNTAX INSERT INTO test FROM INFILE 'data.file' WATCH view; -- { clientError SYNTAX_ERROR } EXPLAIN SYNTAX INSERT INTO test FROM INFILE 'data.file' VALUES (1) -- { clientError SYNTAX_ERROR }
EXPLAIN SYNTAX INSERT INTO test FROM INFILE 'data.file' WITH number AS x SELECT number FROM input('number UInt32');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 551', () => {
    const query = `EXPLAIN PIPELINE SELECT toStartOfMonth(date) as d, i FROM t_read_in_order ORDER BY d, i LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 552', () => {
    const query = `EXPLAIN PIPELINE SELECT toStartOfMonth(date) as d, i FROM t_read_in_order ORDER BY d DESC, -i LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 553', () => {
    const query = `EXPLAIN PIPELINE SELECT toStartOfMonth(date) as d, i FROM t_read_in_order ORDER BY d, -i LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 554', () => {
    const query = `EXPLAIN PIPELINE SELECT date, i FROM t_read_in_order WHERE date = '2020-10-11' ORDER BY i LIMIT 5 settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 555', () => {
    const query = `EXPLAIN PIPELINE SELECT date, i FROM t_read_in_order WHERE date = '2020-10-11' ORDER BY i LIMIT 5 settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 556', () => {
    const query = `EXPLAIN PIPELINE SELECT * FROM t_read_in_order WHERE date = '2020-10-11' ORDER BY i, v LIMIT 5 settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 557', () => {
    const query = `EXPLAIN PIPELINE SELECT * FROM t_read_in_order WHERE date = '2020-10-11' ORDER BY i, v LIMIT 5 settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 558', () => {
    const query = `EXPLAIN SYNTAX SELECT date, i FROM t_read_in_order WHERE date = '2020-10-12' ORDER BY i DESC LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 559', () => {
    const query = `EXPLAIN PIPELINE SELECT date, i FROM t_read_in_order WHERE date = '2020-10-12' ORDER BY i DESC LIMIT 5 settings enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 560', () => {
    const query = `EXPLAIN PIPELINE SELECT date, i FROM t_read_in_order WHERE date = '2020-10-12' ORDER BY i DESC LIMIT 5 settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 561', () => {
    const query = `EXPLAIN PIPELINE SELECT toStartOfDay(dt) as date, d FROM t_read_in_order ORDER BY date, round(d) LIMIT 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 562', () => {
    const query = `explain syntax select x, if((select hasColumnInTable(currentDatabase(), 'test', 'y')), y, x || '_')  from test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 563', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT t1.1 FROM t_tuple_element;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 564', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT tupleElement(t1, 2) FROM t_tuple_element;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 565', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT tupleElement(t1, 'a') FROM t_tuple_element;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 566', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT t2.1 FROM t_tuple_element;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 567', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT tupleElement(t2, 1) FROM t_tuple_element;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 568', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 WITH (1, 2) AS t SELECT t.1, t.2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 569', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 WITH (1, 2)::Tuple(a UInt32, b UInt32) AS t SELECT t.1, tupleElement(t, 'b');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 570', () => {
    const query = `explain syntax select t1.* from t1_all t1 join t2_all t2 on t1.a = t2.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 571', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 0, dump_ast = 1 SELECT mapContains(m, 'a') FROM t_map_contains;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 572', () => {
    const query = `explain syntax select null is null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 573', () => {
    const query = `explain syntax select null is not null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 574', () => {
    const query = `explain syntax select isNull(null);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 575', () => {
    const query = `explain syntax select isNotNull(null);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 576', () => {
    const query = `explain syntax select isNotNull(1)+isNotNull(2) from remote('127.2', system.one);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 577', () => {
    const query = `EXPLAIN SYNTAX SELECT -((3, 7, 3), 100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 578', () => {
    const query = `explain syntax select x3, x2, x1 from test order by 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 579', () => {
    const query = `explain syntax select x3 + 1, x2, x1 from test order by 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 580', () => {
    const query = `explain syntax select x3, x2, x1 from test order by -1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 581', () => {
    const query = `explain syntax select x3 + 1, x2, x1 from test order by -1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 582', () => {
    const query = `explain syntax select x3, x3 - x2, x2, x1 from test order by 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 583', () => {
    const query = `explain syntax select x3, x3 - x2, x2, x1 from test order by -2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 584', () => {
    const query = `explain syntax select x3, if(x3 > 10, x3, plus(x1, x2)), x1 + x2 from test order by 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 585', () => {
    const query = `explain syntax select x3, if(x3 > 10, x3, plus(x1, x2)), x1 + x2 from test order by -2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 586', () => {
    const query = `explain syntax select max(x1), x2 from test group by 2 order by 1, 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 587', () => {
    const query = `explain syntax select max(x1), x2 from test group by -1 order by -2, -1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 588', () => {
    const query = `explain syntax select 1 + greatest(x1, 1), x2 from test group by 1, 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 589', () => {
    const query = `explain syntax select 1 + greatest(x1, 1), x2 from test group by -2, -1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 590', () => {
    const query = `explain syntax select x1 + x3, x3 from test group by -2, -1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 591', () => {
    const query = `explain syntax select plus(1, 1) as a group by a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 592', () => {
    const query = `explain syntax select 1 intersect select 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 593', () => {
    const query = `explain syntax select 1 except select 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 594', () => {
    const query = `explain syntax select 1 union all select 2  except (select 2 except select 1 union all select 1) except select 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 595', () => {
    const query = `explain select distinct k1 from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)); -- not optimized explain select distinct k1, k2 from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)); -- optimized
explain select distinct on (k1) k2 from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)); -- not optimized
explain select distinct on (k1, k2) v from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)); -- optimized
explain select distinct k1 from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)) order by v; -- not optimized
explain select distinct k1, k2 from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)) order by v; -- optimized
explain select distinct on (k1) k2 from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)) order by v; -- not optimized
explain select distinct on (k1, k2) v from remote('127.{1,2}', view(select 1 k1, 2 k2, 3 v from numbers(2)), cityHash64(k1, k2)) order by v; -- optimized
set enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 596', () => {
    const query = `explain description=0 select * from remote('127.{1,2}', view(select * from numbers(1e6))) order by number limit 10 settings distributed_push_down_limit=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 597', () => {
    const query = `explain description=0 select * from remote('127.{1,2}', view(select * from numbers(1e6))) order by number limit 10 settings distributed_push_down_limit=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 598', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 != (NOT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 599', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 != NOT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 600', () => {
    const query = `EXPLAIN SYNTAX SELECT NOT NOT (NOT (NOT (NULL)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 601', () => {
    const query = `EXPLAIN SYNTAX SELECT NOT (NOT (NOT NOT NULL));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 602', () => {
    const query = `EXPLAIN PIPELINE SELECT fact_1_id, fact_2_id, fact_3_id, SUM(sales_value) AS sales_value from grouping_sets
GROUP BY GROUPING SETS ((fact_1_id, fact_2_id), (fact_1_id, fact_3_id))
ORDER BY fact_1_id, fact_2_id, fact_3_id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 603', () => {
    const query = `EXPLAIN PIPELINE SELECT SUM(number) as sum_value, count() AS count_value from numbers_mt(1000000)
GROUP BY GROUPING SETS ((number % 10), (number % 100))
ORDER BY sum_value, count_value SETTINGS max_threads=3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 604', () => {
    const query = `EXPLAIN SYNTAX SELECT -1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 605', () => {
    const query = `EXPLAIN SYNTAX SELECT -(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 606', () => {
    const query = `EXPLAIN SYNTAX SELECT -(-(1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 607', () => {
    const query = `EXPLAIN SYNTAX SELECT -(-(-(1)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 608', () => {
    const query = `EXPLAIN SYNTAX SELECT -(-(-1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 609', () => {
    const query = `EXPLAIN SYNTAX SELECT -(-toUInt64(-(1)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 610', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 1, dump_ast = 1 SELECT id IS NULL, n IS NULL, n IS NOT NULL FROM t_func_to_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 611', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 1, dump_ast = 1 SELECT length(arr), empty(arr), notEmpty(arr), empty(n) FROM t_func_to_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 612', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 1, dump_ast = 1 SELECT mapKeys(m), mapValues(m) FROM t_func_to_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 613', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 1, dump_ast = 1 SELECT count(n) FROM t_func_to_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 614', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 1, dump_ast = 1 SELECT count(id) FROM t_func_to_subcolumns;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 615', () => {
    const query = `EXPLAIN QUERY TREE dump_tree = 1, dump_ast = 1 SELECT id, left.n IS NULL, right.n IS NULL FROM t_func_to_subcolumns AS left FULL JOIN (SELECT 1 AS id, 'qqq' AS n UNION ALL SELECT 3 AS id, 'www') AS right USING(id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 616', () => {
    const query = `explain pipeline select * from test final SETTINGS enable_vertical_final = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 617', () => {
    const query = `EXPLAIN SYNTAX SELECT [3,4,5][1]::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 618', () => {
    const query = `EXPLAIN SYNTAX SELECT [3,4,5]::Array(Int64)[2]::Int8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 619', () => {
    const query = `EXPLAIN SYNTAX SELECT [1,2,3]::Array(UInt64)[[number, number]::Array(UInt8)[number]::UInt64]::UInt8 from numbers(3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 620', () => {
    const query = `EXPLAIN SYNTAX WITH [3,4,5] AS x SELECT x[1]::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 621', () => {
    const query = `EXPLAIN SYNTAX SELECT tuple(3,4,5).1::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 622', () => {
    const query = `EXPLAIN SYNTAX SELECT tuple(3,4,5)::Tuple(UInt64, UInt64, UInt64).1::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 623', () => {
    const query = `EXPLAIN SYNTAX WITH tuple(3,4,5) AS x SELECT x.1::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 624', () => {
    const query = `EXPLAIN SYNTAX SELECT -1::Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 625', () => {
    const query = `EXPLAIN SYNTAX SELECT -0.1::Decimal(38, 38);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 626', () => {
    const query = `EXPLAIN SYNTAX SELECT -0.111::Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 627', () => {
    const query = `EXPLAIN SYNTAX SELECT [-1, 2, -3]::Array(Int32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 628', () => {
    const query = `EXPLAIN SYNTAX SELECT [-1.1, 2, -3]::Array(Float64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 629', () => {
    const query = `EXPLAIN SYNTAX SELECT (0.1, 0.2)::Tuple(Decimal(75, 70), Decimal(75, 70));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 630', () => {
    const query = `EXPLAIN SYNTAX SELECT 0.1 :: Decimal(4, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 631', () => {
    const query = `EXPLAIN SYNTAX SELECT [1, 2, 3] :: Array(Int32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 632', () => {
    const query = `EXPLAIN SYNTAX SELECT [1::UInt32, 2::UInt32]::Array(UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 633', () => {
    const query = `EXPLAIN SYNTAX SELECT [[1, 2]::Array(UInt32), [3]]::Array(Array(UInt64));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 634', () => {
    const query = `EXPLAIN SYNTAX SELECT [[1::UInt16, 2::UInt16]::Array(UInt32), [3]]::Array(Array(UInt64));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 635', () => {
    const query = `EXPLAIN SYNTAX SELECT 0.1::Decimal(38, 38) AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 636', () => {
    const query = `EXPLAIN SYNTAX SELECT [1, 2, 3]::Array(UInt32) AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 637', () => {
    const query = `EXPLAIN SYNTAX SELECT 'abc'::FixedString(3) AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 638', () => {
    const query = `EXPLAIN SYNTAX SELECT 123::String AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 639', () => {
    const query = `EXPLAIN SYNTAX SELECT 1::Int8 AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 640', () => {
    const query = `EXPLAIN SYNTAX SELECT [1, 1 + 1, 1 + 2]::Array(UInt32) AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 641', () => {
    const query = `EXPLAIN SYNTAX SELECT '2010-10-10'::Date AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 642', () => {
    const query = `EXPLAIN SYNTAX SELECT '2010-10-10'::DateTime('UTC') AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 643', () => {
    const query = `EXPLAIN SYNTAX SELECT ['2010-10-10', '2010-10-10']::Array(Date);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 644', () => {
    const query = `EXPLAIN SYNTAX SELECT (1 + 2)::UInt32 AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 645', () => {
    const query = `EXPLAIN SYNTAX SELECT (0.1::Decimal(4, 4) * 5)::Float64 AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 646', () => {
    const query = `EXPLAIN SYNTAX SELECT number::UInt8 AS c, toTypeName(c) FROM numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 647', () => {
    const query = `EXPLAIN SYNTAX SELECT (0 + 1 + 2 + 3 + 4)::Date AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 648', () => {
    const query = `EXPLAIN SYNTAX SELECT (0.1::Decimal(4, 4) + 0.2::Decimal(4, 4) + 0.3::Decimal(4, 4))::Decimal(4, 4) AS c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 649', () => {
    const query = `explain ast select tupleElement(255, 100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 650', () => {
    const query = `explain ast select tupleElement((255, 1), 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 651', () => {
    const query = `explain syntax select d0.id from t1_distr d0 join (
select d1.id
from t1_distr as d1
inner join t2_distr as d2 on d1.id = d2.id
where d1.id  > 0
order by d1.id
) s0 using id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 652', () => {
    const query = `EXPLAIN SYNTAX SELECT count() FROM t_move_to_prewhere WHERE a AND b AND c AND NOT ignore(fat_string);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 653', () => {
    const query = `EXPLAIN SYNTAX select uniqTheta(x) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 654', () => {
    const query = `EXPLAIN SYNTAX select uniqTheta(x + y) from (select number % 2 as x, number % 3 y from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 655', () => {
    const query = `EXPLAIN SYNTAX select uniqTheta(-x) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 656', () => {
    const query = `EXPLAIN SYNTAX select uniqTheta(bitNot(x)) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 657', () => {
    const query = `EXPLAIN SYNTAX select uniqTheta(bitNot(-x)) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 658', () => {
    const query = `EXPLAIN SYNTAX select uniqTheta(-bitNot(-x)) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 659', () => {
    const query = `EXPLAIN indexes=1 SELECT id, delete_time FROM t1 CROSS JOIN (
SELECT delete_time
FROM t2
) AS d WHERE create_time < delete_time AND id = 101 SETTINGS enable_analyzer=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 660', () => {
    const query = `EXPLAIN indexes=1 SELECT id, delete_time FROM t1 CROSS JOIN (
SELECT delete_time
FROM t2
) AS d WHERE create_time < delete_time AND id = 101 SETTINGS enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 661', () => {
    const query = `EXPLAIN SYNTAX SELECT 1
UNION ALL
(
SELECT 1
UNION ALL
(
SELECT 1
UNION ALL
SELECT 1
)
UNION ALL
SELECT 1
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 662', () => {
    const query = `EXPLAIN SYNTAX SELECT 1
UNION ALL
(
SELECT 1
UNION DISTINCT
(
SELECT 1
UNION ALL
SELECT 1
)
UNION ALL
SELECT 1
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 663', () => {
    const query = `EXPLAIN SYNTAX SELECT x
FROM
(
SELECT 1 AS x
UNION ALL
(
SELECT 1
UNION DISTINCT
(
SELECT 1
UNION ALL
SELECT 1
)
UNION ALL
SELECT 1
)
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 664', () => {
    const query = `EXPLAIN SYNTAX SELECT x
FROM
(
SELECT 1 AS x
UNION ALL
(
SELECT 1
UNION ALL
SELECT 1
)
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 665', () => {
    const query = `EXPLAIN SYNTAX SELECT 1
UNION ALL
SELECT 1
UNION DISTINCT
SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 666', () => {
    const query = `EXPLAIN SYNTAX (((((((((((((((SELECT 1)))))))))))))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 667', () => {
    const query = `EXPLAIN SYNTAX (((((((((((((((SELECT 1 UNION DISTINCT SELECT 1))) UNION DISTINCT SELECT 1)))) UNION ALL SELECT 1))))))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 668', () => {
    const query = `explain syntax select count(), count(1), count(-1), sum(1), count(null);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 669', () => {
    const query = `explain syntax select sum(1) from numbers(10) where 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 670', () => {
    const query = `EXPLAIN SYNTAX SELECT CAST(1 AS INT), CEIL(1), CEILING(1), CHAR(49), CHAR_LENGTH('1'), CHARACTER_LENGTH('1'), COALESCE(1), CONCAT('1', '1'), CORR(1, 1), COS(1), COUNT(1), COVAR_POP(1, 1), COVAR_SAMP(1, 1), DATABASE(), SCHEMA(), DATEDIFF('DAY', toDate('2020-10-24'), toDate('2019-10-24')), EXP(1), FLATTEN([[1]]), FLOOR(1), FQDN(), GREATEST(1), IF(1, 1, 1), IFNULL(1, 1), LCASE('A'), LEAST(1), LENGTH('1'), LN(1), LOG(1), LOG10(1), LOG2(1), LOWER('A'), MAX(1), MID('123', 1, 1), MIN(1), MOD(1, 1), NOT(1), NOW(), NOW64(), NULLIF(1, 1), PI(), POSITION('123', '2'), POW(1, 1), POWER(1, 1), RAND(), REPLACE('1', '1', '2'), REVERSE('123'), ROUND(1), SIN(1), SQRT(1), STDDEV_POP(1), STDDEV_SAMP(1), SUBSTR('123', 2), SUBSTRING('123', 2), SUM(1), TAN(1), TANH(1), TRUNC(1), TRUNCATE(1), UCASE('A'), UPPER('A'), USER(), VAR_POP(1), VAR_SAMP(1), WEEK(toDate('2020-10-24')), YEARWEEK(toDate('2020-10-24')) format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 671', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(number / 2) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 672', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(number + 2) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 673', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(number - 2) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 674', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(number * 2) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 675', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(number / 2) FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 676', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT sumIf(123, number % 2 == 0) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 677', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT sum(if(number % 2 == 0, 123, 0)) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 678', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT sum(if(number % 2 == 0, 0, 123)) FROM numbers(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 679', () => {
    const query = `EXPLAIN SYNTAX SELECT i FROM cnf_test WHERE NOT ((i > 1) OR (i > 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 680', () => {
    const query = `EXPLAIN SYNTAX SELECT i FROM cnf_test WHERE NOT ((i > 1) AND (i > 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 681', () => {
    const query = `EXPLAIN SYNTAX SELECT i FROM cnf_test WHERE ((i > 1) AND (i > 2)) OR ((i > 3) AND (i > 4)) OR ((i > 5) AND (i > 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 682', () => {
    const query = `EXPLAIN SYNTAX SELECT i FROM cnf_test WHERE NOT (((i > 1) OR (i > 2)) AND ((i > 3) OR (i > 4)) AND ((i > 5) OR (i > 6)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 683', () => {
    const query = `EXPLAIN SYNTAX SELECT i FROM cnf_test WHERE ((i > 1) AND (i > 2) AND (i > 7)) OR ((i > 3) AND (i > 4) AND (i > 8)) OR ((i > 5) AND (i > 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 684', () => {
    const query = `EXPLAIN SYNTAX SELECT i FROM cnf_test WHERE ((i > 1) OR (i > 2) OR (i > 7)) AND ((i > 3) OR (i > 4) OR (i > 8)) AND NOT ((i > 5) OR (i > 6));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 685', () => {
    const query = `EXPLAIN SYNTAX SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE cityHash64(a) = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 686', () => {
    const query = `EXPLAIN QUERY TREE SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE cityHash64(a) = 1 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 687', () => {
    const query = `EXPLAIN SYNTAX SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test PREWHERE cityHash64(a) = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 688', () => {
    const query = `EXPLAIN QUERY TREE SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test PREWHERE cityHash64(a) = 1 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 689', () => {
    const query = `EXPLAIN SYNTAX SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE cityHash64(a) = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 690', () => {
    const query = `EXPLAIN QUERY TREE SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE cityHash64(a) = 0 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 691', () => {
    const query = `EXPLAIN SYNTAX SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE b = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 692', () => {
    const query = `EXPLAIN QUERY TREE SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE b = 0 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 693', () => {
    const query = `EXPLAIN SYNTAX SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE b = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 694', () => {
    const query = `EXPLAIN QUERY TREE SELECT cityHash64(a) + 10, b + 3 FROM column_swap_test_test WHERE b = 1 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 695', () => {
    const query = `EXPLAIN SYNTAX SELECT cityHash64(a) + 10 FROM column_swap_test_test WHERE cityHash64(a) = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 696', () => {
    const query = `EXPLAIN QUERY TREE SELECT cityHash64(a) + 10 FROM column_swap_test_test WHERE cityHash64(a) = 0 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 697', () => {
    const query = `EXPLAIN SYNTAX SELECT cityHash64(a) + 10, a FROM column_swap_test_test WHERE cityHash64(a) = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 698', () => {
    const query = `EXPLAIN QUERY TREE SELECT cityHash64(a) + 10, a FROM column_swap_test_test WHERE cityHash64(a) = 0 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 699', () => {
    const query = `EXPLAIN SYNTAX SELECT b + 10, a FROM column_swap_test_test WHERE b = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 700', () => {
    const query = `EXPLAIN QUERY TREE SELECT b + 10, a FROM column_swap_test_test WHERE b = 0 SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 701', () => {
    const query = `EXPLAIN SYNTAX SELECT substring(reverse(b), 1, 1), a FROM column_swap_test_test WHERE a = 'c';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 702', () => {
    const query = `EXPLAIN QUERY TREE SELECT substring(reverse(b), 1, 1), a FROM column_swap_test_test WHERE a = 'c' SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 703', () => {
    const query = `EXPLAIN SYNTAX SELECT substring(reverse(b), 1, 1), a FROM column_swap_test_test WHERE substring(reverse(b), 1, 1) = 'c';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 704', () => {
    const query = `EXPLAIN QUERY TREE SELECT substring(reverse(b), 1, 1), a FROM column_swap_test_test WHERE substring(reverse(b), 1, 1) = 'c' SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 705', () => {
    const query = `EXPLAIN SYNTAX SELECT substring(reverse(b), 1, 1) AS t1, a AS t2 FROM column_swap_test_test WHERE substring(reverse(b), 1, 1) = 'c';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 706', () => {
    const query = `EXPLAIN QUERY TREE SELECT substring(reverse(b), 1, 1) AS t1, a AS t2 FROM column_swap_test_test WHERE substring(reverse(b), 1, 1) = 'c' SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 707', () => {
    const query = `EXPLAIN SYNTAX SELECT substring(reverse(b), 1, 1) FROM column_swap_test_test WHERE substring(reverse(b), 1, 1) = 'c';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 708', () => {
    const query = `EXPLAIN QUERY TREE SELECT substring(reverse(b), 1, 1) FROM column_swap_test_test WHERE substring(reverse(b), 1, 1) = 'c' SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 709', () => {
    const query = `EXPLAIN SYNTAX SELECT a FROM t_bad_constraint;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 710', () => {
    const query = `EXPLAIN QUERY TREE SELECT a FROM t_bad_constraint SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 711', () => {
    const query = `EXPLAIN SYNTAX SELECT count() FROM t_constraints_where WHERE b > 15; -- assumption -> 0 EXPLAIN QUERY TREE SELECT count() FROM t_constraints_where WHERE b > 15 SETTINGS enable_analyzer = 1; -- assumption -> 0
EXPLAIN SYNTAX SELECT count() FROM t_constraints_where WHERE b = 20; -- assumption -> 0
EXPLAIN QUERY TREE SELECT count() FROM t_constraints_where WHERE b = 20 SETTINGS enable_analyzer = 1; -- assumption -> 0
EXPLAIN SYNTAX SELECT count() FROM t_constraints_where WHERE b < 2; -- assumption -> 0
EXPLAIN QUERY TREE SELECT count() FROM t_constraints_where WHERE b < 2 SETTINGS enable_analyzer = 1; -- assumption -> 0
EXPLAIN SYNTAX SELECT count() FROM t_constraints_where WHERE b > 20 OR b < 8; -- assumption -> remove (b < 20)
EXPLAIN QUERY TREE SELECT count() FROM t_constraints_where WHERE b > 20 OR b < 8 SETTINGS enable_analyzer = 1; -- assumption -> remove (b < 20)
EXPLAIN SYNTAX SELECT count() FROM t_constraints_where PREWHERE b > 20 OR b < 8; -- assumption -> remove (b < 20)
EXPLAIN QUERY TREE SELECT count() FROM t_constraints_where PREWHERE b > 20 OR b < 8 SETTINGS enable_analyzer = 1; -- assumption -> remove (b < 20)
DROP TABLE t_constraints_where;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 712', () => {
    const query = `EXPLAIN SYNTAX SELECT count() FROM t_constraints_where WHERE b = 1 OR b < 18 OR b > 5; -- assumption -> (b < 20) -> 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 713', () => {
    const query = `EXPLAIN QUERY TREE SELECT count() FROM t_constraints_where WHERE b = 1 OR b < 18 OR b > 5 SETTINGS enable_analyzer = 1; -- assumption -> (b < 20) -> 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 714', () => {
    const query = `EXPLAIN SYNTAX SELECT count() FROM constraint_test_constants WHERE (a > 100 OR b > 100 OR c > 100) AND (a <= 100 OR b > 100 OR c > 100) AND (NOT b > 100 OR c > 100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 715', () => {
    const query = `EXPLAIN QUERY TREE SELECT count() FROM constraint_test_constants WHERE (a > 100 OR b > 100 OR c > 100) AND (a <= 100 OR b > 100 OR c > 100) AND (NOT b > 100 OR c > 100) SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 716', () => {
    const query = `EXPLAIN SYNTAX SELECT count() FROM constraint_test_constants WHERE (a > 100 OR b > 100 OR c > 100) AND (a <= 100 OR b > 100 OR c > 100) AND (NOT b > 100 OR c > 100) AND (c > 100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 717', () => {
    const query = `EXPLAIN QUERY TREE SELECT count() FROM constraint_test_constants WHERE (a > 100 OR b > 100 OR c > 100) AND (a <= 100 OR b > 100 OR c > 100) AND (NOT b > 100 OR c > 100) AND (c > 100) SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 718', () => {
    const query = `EXPLAIN SYNTAX SELECT count() FROM constraint_test_constants WHERE (a > 100 OR b > 100 OR c > 100) AND (a <= 100 OR b > 100 OR c > 100) AND (NOT b > 100 OR c > 100) AND (c <= 100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 719', () => {
    const query = `EXPLAIN QUERY TREE SELECT count() FROM constraint_test_constants WHERE (a > 100 OR b > 100 OR c > 100) AND (a <= 100 OR b > 100 OR c > 100) AND (NOT b > 100 OR c > 100) AND (c <= 100) SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 720', () => {
    const query = `EXPLAIN SYNTAX SELECT (SELECT * FROM system.numbers LIMIT 1 OFFSET 1) AS n, toUInt64(10 / n);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 721', () => {
    const query = `explain ast; -- { clientError SYNTAX_ERROR } explain ast alter table t1 delete where date = today();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 722', () => {
    const query = `explain ast create function double AS  (n) -> 2*n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 723', () => {
    const query = `EXPLAIN SYNTAX SELECT msg, toDateTime(intDiv(ms, 1000)) AS time
FROM
(
SELECT
'hello' AS msg,
toUInt64(t) * 1000 AS ms
FROM generateRandom('t DateTime')
LIMIT 10
)
ORDER BY msg, time;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 724', () => {
    const query = `explain select count(*) over (partition by p),
count(*) over (),
count(*) over (partition by p order by o)
from
(select number, intDiv(number, 3) p, mod(number, 5) o
from numbers(16)) t
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 725', () => {
    const query = `explain select count(*) over (order by o, number),
count(*) over (order by number)
from
(select number, intDiv(number, 3) p, mod(number, 5) o
from numbers(16)) t
;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 726', () => {
    const query = `EXPLAIN SYNTAX SELECT count(*) FROM ( SELECT number FROM ( SELECT number FROM numbers(1000000) ) WHERE rand64() < (0.01 * 18446744073709552000.));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 727', () => {
    const query = `EXPLAIN description = 0 SELECT day AS s FROM test_table ORDER BY s LIMIT 1 SETTINGS optimize_read_in_order = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 728', () => {
    const query = `EXPLAIN description = 0 SELECT day AS s FROM test_table ORDER BY s LIMIT 1 SETTINGS optimize_read_in_order = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 729', () => {
    const query = `EXPLAIN description = 0 SELECT toDate(timestamp) AS s FROM test_table ORDER BY toDate(timestamp) LIMIT 1 SETTINGS optimize_read_in_order = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 730', () => {
    const query = `EXPLAIN description = 0 SELECT day, count() AS s FROM test_table GROUP BY day SETTINGS optimize_aggregation_in_order = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 731', () => {
    const query = `EXPLAIN description = 0 SELECT day, count() AS s FROM test_table GROUP BY day SETTINGS optimize_aggregation_in_order = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 732', () => {
    const query = `EXPLAIN description = 0 SELECT toDate(timestamp), count() AS s FROM test_table GROUP BY toDate(timestamp) SETTINGS optimize_aggregation_in_order = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 733', () => {
    const query = `explain syntax select negate(1), negate(-1), - -1, -(-1), (-1) in (-1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 734', () => {
    const query = `explain syntax select negate(1.), negate(-1.), - -1., -(-1.), (-1.) in (-1.);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 735', () => {
    const query = `explain syntax select negate(-9223372036854775808), -(-9223372036854775808), - -9223372036854775808;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 736', () => {
    const query = `explain syntax select negate(0), negate(-0), - -0, -(-0), (-0) in (-0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 737', () => {
    const query = `explain syntax select negate(0.), negate(-0.), - -0., -(-0.), (-0.) in (-0.);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 738', () => {
    const query = `EXPLAIN SELECT 1 UNION ALL SELECT 1 UNION ALL SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 739', () => {
    const query = `EXPLAIN (SELECT 1 UNION ALL SELECT 1) UNION ALL SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 740', () => {
    const query = `EXPLAIN SELECT 1 UNION (SELECT 1 UNION ALL SELECT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 741', () => {
    const query = `EXPLAIN SELECT 1 UNION SELECT 1 UNION DISTINCT SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 742', () => {
    const query = `EXPLAIN (SELECT 1 UNION DISTINCT SELECT 1) UNION DISTINCT SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 743', () => {
    const query = `EXPLAIN SELECT 1 UNION DISTINCT (SELECT 1 UNION SELECT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 744', () => {
    const query = `EXPLAIN (SELECT 1 UNION ALL (SELECT 1 UNION ALL (SELECT 1 UNION ALL SELECT 1 UNION SELECT 1))) UNION ALL (((SELECT 1) UNION (SELECT 1 UNION ALL (SELECT 1 UNION ALL (SELECT 1 UNION SELECT 1 ) UNION DISTINCT SELECT 1))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 745', () => {
    const query = `EXPLAIN (((((((((((((((SELECT 1 UNION ALL SELECT 1) UNION SELECT 1))))))))))))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 746', () => {
    const query = `EXPLAIN (((((((((((((((((((((((((((((SELECT 1 UNION SELECT 1)))))))))))))))))))))))))))));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 747', () => {
    const query = `EXPLAIN PIPELINE SELECT key FROM data_01551 GROUP BY key, key/2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 748', () => {
    const query = `EXPLAIN SYNTAX SELECT sumIf(1, number > 0) FROM numbers(10) WHERE 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 749', () => {
    const query = `explain syntax with 1 as x select x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 750', () => {
    const query = `explain syntax with 1 as x select * from (select x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 751', () => {
    const query = `explain syntax with 1 as x select *, x from (with 2 as x select x as y);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 752', () => {
    const query = `explain syntax with 1 as x select x union all select x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 753', () => {
    const query = `explain syntax with 1 as x select x union all with 2 as x select x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 754', () => {
    const query = `explain syntax with 5 as q1, x as (select number + 100 as b, number as a from numbers(10) where number > q1) select * from x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 755', () => {
    const query = `explain header = 1 select 1 as x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 756', () => {
    const query = `explain syntax with it as ( select * from numbers(1) ) select it.number, i.number from it as i;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 757', () => {
    const query = `EXPLAIN SYNTAX WITH 1 SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 758', () => {
    const query = `EXPLAIN SYNTAX WITH 1, 2 SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 759', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM system.one LIMIT 1 BY * LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 760', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM system.one LIMIT 1 BY 0+dummy, 0-dummy LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 761', () => {
    const query = `EXPLAIN PIPELINE graph=1 SELECT * FROM remote('127.{1,2}', system.one) FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 762', () => {
    const query = `EXPLAIN SYNTAX SELECT * APPLY x->argMax(x, number) FROM numbers(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 763', () => {
    const query = `EXPLAIN SYNTAX SELECT columns_transformers.* APPLY(avg) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 764', () => {
    const query = `EXPLAIN SYNTAX SELECT a.* APPLY(toDate) APPLY(any) from columns_transformers a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 765', () => {
    const query = `EXPLAIN SYNTAX SELECT COLUMNS('[jk]') APPLY(toString) APPLY(length) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 766', () => {
    const query = `EXPLAIN SYNTAX SELECT * EXCEPT(i) APPLY(sum) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 767', () => {
    const query = `EXPLAIN SYNTAX SELECT columns_transformers.* EXCEPT(j) APPLY(avg) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 768', () => {
    const query = `EXPLAIN SYNTAX SELECT a.* APPLY(toDate) EXCEPT(i, j) APPLY(any) from columns_transformers a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 769', () => {
    const query = `EXPLAIN SYNTAX SELECT * REPLACE(i + 1 AS i) APPLY(sum) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 770', () => {
    const query = `EXPLAIN AST SELECT * REPLACE(i + 1 AS i) APPLY(sum) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 771', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(i + 1 AS m) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 772', () => {
    const query = `EXPLAIN AST SELECT sum(i + 1 AS m) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 773', () => {
    const query = `EXPLAIN SYNTAX SELECT columns_transformers.* REPLACE(j + 2 AS j, i + 1 AS i) APPLY(avg) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 774', () => {
    const query = `EXPLAIN SYNTAX SELECT a.* APPLY(toDate) REPLACE(i + 1 AS i) APPLY(any) from columns_transformers a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 775', () => {
    const query = `EXPLAIN SYNTAX SELECT * REPLACE(i + 1 AS i) REPLACE(i + 1 AS i) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 776', () => {
    const query = `EXPLAIN SYNTAX SELECT COLUMNS(i, j, k) APPLY(sum) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 777', () => {
    const query = `EXPLAIN SYNTAX SELECT i, j, COLUMNS(i, j, k) APPLY(toFloat64), COLUMNS(i, j) EXCEPT (i) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 778', () => {
    const query = `EXPLAIN SYNTAX SELECT COLUMNS(i, j, k) APPLY(quantiles(0.5)) from columns_transformers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 779', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM view(SELECT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 780', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM remote('127.0.0.1', view(SELECT 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 781', () => {
    const query = `EXPLAIN SYNTAX SELECT number, square_number FROM ( WITH number * 2 AS square_number SELECT number, square_number FROM numbers_indexed) AS squares WHERE number = 999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 782', () => {
    const query = `EXPLAIN SYNTAX select uniq(x), uniqExact(x), uniqHLL12(x), uniqCombined(x), uniqCombined64(x) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 783', () => {
    const query = `EXPLAIN SYNTAX select uniq(x + y), uniqExact(x + y), uniqHLL12(x + y), uniqCombined(x + y), uniqCombined64(x + y) from (select number % 2 as x, number % 3 y from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 784', () => {
    const query = `EXPLAIN SYNTAX select uniq(-x), uniqExact(-x), uniqHLL12(-x), uniqCombined(-x), uniqCombined64(-x) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 785', () => {
    const query = `EXPLAIN SYNTAX select uniq(bitNot(x)), uniqExact(bitNot(x)), uniqHLL12(bitNot(x)), uniqCombined(bitNot(x)), uniqCombined64(bitNot(x)) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 786', () => {
    const query = `EXPLAIN SYNTAX select uniq(bitNot(-x)), uniqExact(bitNot(-x)), uniqHLL12(bitNot(-x)), uniqCombined(bitNot(-x)), uniqCombined64(bitNot(-x)) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 787', () => {
    const query = `EXPLAIN SYNTAX select uniq(-bitNot(-x)), uniqExact(-bitNot(-x)), uniqHLL12(-bitNot(-x)), uniqCombined(-bitNot(-x)), uniqCombined64(-bitNot(-x)) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 788', () => {
    const query = `EXPLAIN SYNTAX select count(distinct -bitNot(-x)) from (select number % 2 as x from numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 789', () => {
    const query = `EXPLAIN SYNTAX select uniq(concatAssumeInjective('x', 'y')) from numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 790', () => {
    const query = `EXPLAIN SYNTAX SELECT number = 1 ? 'hello' : (number = 2 ? 'world' : 'xyz') FROM numbers(10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 791', () => {
    const query = `EXPLAIN SYNTAX SELECT dictGet('dictdb_01376.dict_exists', 'value', toUInt64(1)) as val FROM numbers(2) GROUP BY val;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 792', () => {
    const query = `EXPLAIN QUERY TREE SELECT dictGet('dictdb_01376.dict_exists', 'value', number) as val
FROM numbers(2)
GROUP BY val
SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 793', () => {
    const query = `EXPLAIN SYNTAX SELECT k, groupArrayMovingSum(v) FROM (SELECT * FROM moving_sum_num ORDER BY k, dt) GROUP BY k ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 794', () => {
    const query = `EXPLAIN SYNTAX SELECT groupArray(x) from (SELECT number as x FROM numbers(3) ORDER BY x, exp(x));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 795', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT groupArray(x) from (SELECT number as x FROM numbers(3) ORDER BY x, exp(x)) settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 796', () => {
    const query = `EXPLAIN SYNTAX SELECT groupArray(x) from (SELECT number as x FROM numbers(3) ORDER BY x, exp(exp(x)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 797', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT groupArray(x) from (SELECT number as x FROM numbers(3) ORDER BY x, exp(exp(x))) settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 798', () => {
    const query = `EXPLAIN SYNTAX SELECT groupArray(x) from (SELECT number as x FROM numbers(3) ORDER BY exp(x), x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 799', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT groupArray(x) from (SELECT number as x FROM numbers(3) ORDER BY exp(x), x) settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 800', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT number + 2 AS key FROM numbers(4)) s FULL JOIN test t USING(key) ORDER BY s.key, t.key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 801', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT * FROM (SELECT number + 2 AS key FROM numbers(4)) s FULL JOIN test t USING(key) ORDER BY s.key, t.key settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 802', () => {
    const query = `EXPLAIN SYNTAX SELECT key, a FROM test ORDER BY key, a, exp(key + a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 803', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT key, a FROM test ORDER BY key, a, exp(key + a) settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 804', () => {
    const query = `EXPLAIN SYNTAX SELECT key, a FROM test ORDER BY key, exp(key + a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 805', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT key, a FROM test ORDER BY key, exp(key + a) settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 806', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT key FROM test GROUP BY key ORDER BY avg(a), key settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 807', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT * FROM t1 INNER JOIN t2 ON t1.id = t2.id ORDER BY t1.id, t2.id settings enable_analyzer=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 808', () => {
    const query = `EXPLAIN SYNTAX SELECT min(number % 2) AS a, max(number % 3) AS b FROM numbers(10000000) GROUP BY number % 2, number % 3 ORDER BY a, b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 809', () => {
    const query = `EXPLAIN SYNTAX SELECT any(number % 2) AS a, anyLast(number % 3) AS b FROM numbers(10000000) GROUP BY number % 2, number % 3 ORDER BY a, b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 810', () => {
    const query = `EXPLAIN SYNTAX SELECT max((number % 5) * (number % 7)) AS a FROM numbers(10000000) GROUP BY number % 7, number % 5 ORDER BY a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 811', () => {
    const query = `EXPLAIN SYNTAX SELECT foo FROM (SELECT anyLast(number) AS foo FROM numbers(1) GROUP BY number);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 812', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY (number % 2) * (number % 3), number % 3, number % 2 HAVING avg(log(2) * number) > 3465735.3 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 813', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY (number % 2) * (number % 3), number % 3, number % 2 HAVING avg(log(2) * number) > 3465735.3 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 814', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY number % 5, ((number % 5) * (number % 5)) HAVING ((number % 5) * (number % 5)) < 5 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 815', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY number % 5, ((number % 5) * (number % 5)) HAVING ((number % 5) * (number % 5)) < 5 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 816', () => {
    const query = `EXPLAIN SYNTAX SELECT (number % 5) * (number % 5) AS k FROM numbers(10000000) GROUP BY number % 5, ((number % 5) * (number % 5)) HAVING ((number % 5) * (number % 5)) < 5 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 817', () => {
    const query = `EXPLAIN QUERY TREE run_passes=1 SELECT (number % 5) * (number % 5) AS k FROM numbers(10000000) GROUP BY number % 5, ((number % 5) * (number % 5)) HAVING ((number % 5) * (number % 5)) < 5 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 818', () => {
    const query = `EXPLAIN SYNTAX SELECT max(log(2) * number) AS k FROM numbers(10000000) GROUP BY number % 2, number % 3, (number % 2 + number % 3) % 2 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 819', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY number % 5, ((number % 5) * (number % 5)) ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 820', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY (number % 2) * (number % 3), number % 3 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 821', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY (number % 2) * (number % 3), number % 3, number % 2 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 822', () => {
    const query = `EXPLAIN SYNTAX SELECT avg(log(2) * number) AS k FROM numbers(10000000) GROUP BY (number % 2) % 3, number % 2 ORDER BY k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 823', () => {
    const query = `explain syntax select min((n as a) + (1 as b)) c from (select number n from numbers(10)) where a > 0 and b > 0 having c > 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 824', () => {
    const query = `explain syntax select min((n + 1) as a) c from (select number n from numbers(10)) where a > 0 having c > 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 825', () => {
    const query = `explain syntax select min(n + 1) as c from (select number n from numbers(10)) having c > 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 826', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n + 1), sum(1 + n), sum(n - 1), sum(1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 827', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n * 2), sum(2 * n), sum(n / 2), sum(1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 828', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n + 1), min(1 + n), min(n - 1), min(1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 829', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n * 2), min(2 * n), min(n / 2), min(1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 830', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n + 1), max(1 + n), max(n - 1), max(1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 831', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n * 2), max(2 * n), max(n / 2), max(1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 832', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n + -1), sum(-1 + n), sum(n - -1), sum(-1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 833', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n * -2), sum(-2 * n), sum(n / -2), sum(-1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 834', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n + -1), min(-1 + n), min(n - -1), min(-1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 835', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n * -2), min(-2 * n), min(n / -2), min(-1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 836', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n + -1), max(-1 + n), max(n - -1), max(-1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 837', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n * -2), max(-2 * n), max(n / -2), max(-1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 838', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(abs(2) + 1), sum(abs(2) + n), sum(n - abs(2)), sum(1 - abs(2)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 839', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(abs(2) * 2), sum(abs(2) * n), sum(n / abs(2)), sum(1 / abs(2)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 840', () => {
    const query = `EXPLAIN SYNTAX SELECT min(abs(2) + 1), min(abs(2) + n), min(n - abs(2)), min(1 - abs(2)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 841', () => {
    const query = `EXPLAIN SYNTAX SELECT min(abs(2) * 2), min(abs(2) * n), min(n / abs(2)), min(1 / abs(2)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 842', () => {
    const query = `EXPLAIN SYNTAX SELECT max(abs(2) + 1), max(abs(2) + n), max(n - abs(2)), max(1 - abs(2)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 843', () => {
    const query = `EXPLAIN SYNTAX SELECT max(abs(2) * 2), max(abs(2) * n), max(n / abs(2)), max(1 / abs(2)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 844', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(abs(n) + 1), sum(abs(n) + n), sum(n - abs(n)), sum(1 - abs(n)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 845', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(abs(n) * 2), sum(abs(n) * n), sum(n / abs(n)), sum(1 / abs(n)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 846', () => {
    const query = `EXPLAIN SYNTAX SELECT min(abs(n) + 1), min(abs(n) + n), min(n - abs(n)), min(1 - abs(n)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 847', () => {
    const query = `EXPLAIN SYNTAX SELECT min(abs(n) * 2), min(abs(n) * n), min(n / abs(n)), min(1 / abs(n)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 848', () => {
    const query = `EXPLAIN SYNTAX SELECT max(abs(n) + 1), max(abs(n) + n), max(n - abs(n)), max(1 - abs(n)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 849', () => {
    const query = `EXPLAIN SYNTAX SELECT max(abs(n) * 2), max(abs(n) * n), max(n / abs(n)), max(1 / abs(n)) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 850', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n*n + 1), sum(1 + n*n), sum(n*n - 1), sum(1 - n*n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 851', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n*n * 2), sum(2 * n*n), sum(n*n / 2), sum(1 / n*n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 852', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n*n + 1), min(1 + n*n), min(n*n - 1), min(1 - n*n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 853', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n*n * 2), min(2 * n*n), min(n*n / 2), min(1 / n*n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 854', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n*n + 1), max(1 + n*n), max(n*n - 1), max(1 - n*n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 855', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n*n * 2), max(2 * n*n), max(n*n / 2), max(1 / n*n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 856', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(1 + n + 1), sum(1 + 1 + n), sum(1 + n - 1), sum(1 + 1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 857', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(1 + n * 2), sum(1 + 2 * n), sum(1 + n / 2), sum(1 + 1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 858', () => {
    const query = `EXPLAIN SYNTAX SELECT min(1 + n + 1), min(1 + 1 + n), min(1 + n - 1), min(1 + 1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 859', () => {
    const query = `EXPLAIN SYNTAX SELECT min(1 + n * 2), min(1 + 2 * n), min(1 + n / 2), min(1 + 1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 860', () => {
    const query = `EXPLAIN SYNTAX SELECT max(1 + n + 1), max(1 + 1 + n), max(1 + n - 1), max(1 + 1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 861', () => {
    const query = `EXPLAIN SYNTAX SELECT max(1 + n * 2), max(1 + 2 * n), max(1 + n / 2), max(1 + 1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 862', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n + -1 + -1), sum(-1 + n + -1), sum(n - -1 + -1), sum(-1 - n + -1) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 863', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n * -2 * -1), sum(-2 * n * -1), sum(n / -2 / -1), sum(-1 / n / -1) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 864', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n + -1 + -1), min(-1 + n + -1), min(n - -1 + -1), min(-1 - n + -1) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 865', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n * -2 * -1), min(-2 * n * -1), min(n / -2 / -1), min(-1 / n / -1) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 866', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n + -1 + -1), max(-1 + n + -1), max(n - -1 + -1), max(-1 - n + -1) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 867', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n * -2 * -1), max(-2 * n * -1), max(n / -2 / -1), max(-1 / n / -1) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 868', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n + 1) + sum(1 + n) + sum(n - 1) + sum(1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 869', () => {
    const query = `EXPLAIN SYNTAX SELECT sum(n * 2) + sum(2 * n) + sum(n / 2) + sum(1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 870', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n + 1) + min(1 + n) + min(n - 1) + min(1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 871', () => {
    const query = `EXPLAIN SYNTAX SELECT min(n * 2) + min(2 * n) + min(n / 2) + min(1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 872', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n + 1) + max(1 + n) + max(n - 1) + max(1 - n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 873', () => {
    const query = `EXPLAIN SYNTAX SELECT max(n * 2) + max(2 * n) + max(n / 2) + max(1 / n) FROM (SELECT number n FROM numbers(10));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 874', () => {
    const query = `EXPLAIN SYNTAX SELECT countIf(DISTINCT number % 10, number % 5 = 2) FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 875', () => {
    const query = `EXPLAIN SYNTAX SELECT sumIf(DISTINCT number % 10, number % 5 = 2) FROM numbers(10000);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 876', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM n, r WHERE n.k = r.k AND r.name = 'A';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 877', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM n, r WHERE n.k = r.k AND r.name LIKE 'A%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 878', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM n, r WHERE n.k = r.k AND r.name NOT LIKE 'A%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 879', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM test_view WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 880', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM test_view WHERE id = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 881', () => {
    const query = `EXPLAIN SYNTAX SELECT id FROM test_view WHERE id  = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 882', () => {
    const query = `EXPLAIN SYNTAX SELECT s.id FROM test_view AS s WHERE s.id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 883', () => {
    const query = `EXPLAIN SYNTAX SELECT k, v, d, i FROM (SELECT t.1 AS k, t.2 AS v, runningDifference(v) AS d, runningDifference(cityHash64(t.1)) AS i FROM (   SELECT arrayJoin([('a', 1), ('a', 2), ('a', 3), ('b', 11), ('b', 13), ('b', 15)]) AS t)) WHERE i = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 884', () => {
    const query = `EXPLAIN SYNTAX SELECT co,co2,co3,num FROM ( SELECT co,co2,co3,count() AS num FROM (SELECT dummy+1 AS co,dummy+2 AS co2 ,dummy+3 AS co3) GROUP BY cube (co,co2,co3) ) WHERE co!=0 AND co2 !=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 885', () => {
    const query = `EXPLAIN SYNTAX SELECT name FROM ( SELECT name FROM system.settings ) ANY INNER JOIN ( SELECT name FROM system.settings ) USING (name) WHERE name = 'enable_optimize_predicate_expression';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 886', () => {
    const query = `EXPLAIN SYNTAX SELECT ccc FROM ( SELECT 1 AS ccc UNION ALL SELECT * FROM ( SELECT 2 AS ccc ) ANY INNER JOIN ( SELECT 2 AS ccc ) USING (ccc) ) WHERE ccc > 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 887', () => {
    const query = `EXPLAIN SYNTAX SELECT ts, id, id_b, b.ts, b.id, id_c FROM (SELECT ts, id, id_b FROM A) AS a ALL LEFT JOIN B AS b ON b.id = a.id_b WHERE a.ts <= toDateTime('1970-01-01 03:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 888', () => {
    const query = `EXPLAIN SYNTAX SELECT ts AS \`--a.ts\`, id AS \`--a.id\`, id_b AS \`--a.id_b\`, b.ts AS \`--b.ts\`, b.id AS \`--b.id\`, id_c AS \`--b.id_c\` FROM (SELECT ts, id, id_b FROM A) AS a ALL LEFT JOIN B AS b ON \`--b.id\` = \`--a.id_b\` WHERE \`--a.ts\` <= toDateTime('1970-01-01 03:00:00');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 889', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM system.one) WHERE arrayMap(x -> x + 1, [dummy]) = [1];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 890', () => {
    const query = `EXPLAIN SYNTAX SELECT *  FROM (SELECT 1 AS id, 2 AS value) INNER JOIN (SELECT 1 AS id, 3 AS value_1) USING id WHERE arrayMap(x -> x + value + value_1, [1]) = [6];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 891', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM system.one HAVING dummy > 0 AND dummy < 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 892', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 WHERE 1 = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 893', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 WHERE 1 IN (0, 1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 894', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 WHERE 1 IN (0, 2) AND 2 = ((SELECT 2) AS subquery);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 895', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 WHERE 1 IN ((SELECT arrayJoin([1, 2, 3])) AS subquery);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 896', () => {
    const query = `EXPLAIN SYNTAX SELECT 1 WHERE NOT ignore();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 897', () => {
    const query = `EXPLAIN SYNTAX SELECT (1,);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 898', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 899', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a = t2_00826.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 900', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826, t2_00826 where t1_00826.a = t2_00826.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 901', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a = t2_00826.b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 902', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 x cross join t1_00826 y where x.a = y.a and x.b = y.b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 903', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a = t1_00826.b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 904', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a = t2_00826.a and t1_00826.b = t2_00826.b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 905', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a = t2_00826.a and (t1_00826.a = t2_00826.a and (t1_00826.a = t2_00826.a and t1_00826.b = t2_00826.b));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 906', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a = t2_00826.a and t1_00826.b = t2_00826.b and t1_00826.a >= 1 and t2_00826.b > 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 907', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a = t2_00826.a and t1_00826.b = t2_00826.b and (t1_00826.a >= 1 OR t2_00826.b = 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 908', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.a + 1 = t2_00826.a + t2_00826.b AND (t1_00826.a + t1_00826.b + t2_00826.a + t2_00826.b > 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 909', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826 cross join t2_00826 where t1_00826.b = t2_00826.a AND (t2_00826.b IS NULL OR t2_00826.b > t2_00826.a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 910', () => {
    const query = `EXPLAIN SYNTAX SELECT a as b FROM t1_00826 cross join t2_00826 where t1_00826.b = t2_00826.a AND b > 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 911', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826, t2_00826 where t1_00826.b = t2_00826.b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 912', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM t1_00826, t2_00826 where t1_00826.a = t2_00826.a AND (t2_00826.b IS NULL OR t2_00826.b < 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 913', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM
(
SELECT
n,
finalizeAggregation(s)
FROM test_00808_push_down_with_finalizeAggregation
)
WHERE (n >= 2) AND (n <= 5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 914', () => {
    const query = `explain query tree select * from bug where (k =1 or k=2 or k =3) and (s=21 or s=22 or s=23) SETTINGS enable_analyzer = 1;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 915', () => {
    const query = `explain query tree select * from (select * from bug where k=1 or k=2 or k=3) where (s=21 or s=22 or s=23) SETTINGS enable_analyzer = 1;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 916', () => {
    const query = `explain query tree select k, (k=1 or k=2 or k=3), s, (s=21), (s=21 or s=22), (s=21 or s=22 or s=23) from bug SETTINGS enable_analyzer = 1;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 917', () => {
    const query = `explain query tree select s, (s=21 or s=22 or s=23) from bug SETTINGS enable_analyzer = 1;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 918', () => {
    const query = `explain query tree select s, (s=21 or 22=s or 23=s) from bug SETTINGS enable_analyzer = 1;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 919', () => {
    const query = `EXPLAIN QUERY TREE SELECT count() FROM regression_for_in_operator_view WHERE g = '5' OR g = '6' SETTINGS enable_analyzer = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 920', () => {
    const query = `EXPLAIN SYNTAX SELECT count() FROM (SELECT [number] a, [number * 2] b FROM system.numbers LIMIT 1) AS t ARRAY JOIN a, b WHERE NOT ignore(a + b);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 921', () => {
    const query = `EXPLAIN SYNTAX SELECT a, b FROM (SELECT 1 AS a) ANY LEFT JOIN (SELECT 1 AS a, 1 AS b) USING (a) WHERE b = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 922', () => {
    const query = `EXPLAIN SYNTAX SELECT a, b FROM (SELECT 1 AS a, 1 as b) ANY RIGHT JOIN (SELECT 1 AS a) USING (a) WHERE b = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 923', () => {
    const query = `EXPLAIN SYNTAX SELECT a, b FROM (SELECT 1 AS a) ANY FULL JOIN (SELECT 1 AS a, 1 AS b) USING (a) WHERE b = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 924', () => {
    const query = `EXPLAIN SYNTAX SELECT a, b FROM (SELECT 1 AS a, 1 AS b) ANY FULL JOIN (SELECT 1 AS a) USING (a) WHERE b = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 925', () => {
    const query = `EXPLAIN SYNTAX SELECT toString(value) AS value FROM (SELECT 1 AS value) WHERE value = '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 926', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT 1 AS id UNION ALL SELECT 2) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 927', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT arrayJoin([1, 2, 3]) AS id) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 928', () => {
    const query = `EXPLAIN SYNTAX SELECT id FROM (SELECT arrayJoin([1, 2, 3]) AS id) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 929', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT 1 AS id, (SELECT 1) as subquery) WHERE subquery = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 930', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT toUInt64(b) AS a, sum(id) AS b FROM test_00597) WHERE a = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 931', () => {
    const query = `EXPLAIN SYNTAX SELECT date, id, name, value FROM (SELECT date, name, value, min(id) AS id FROM test_00597 GROUP BY date, name, value) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 932', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT toUInt64(b) AS a, sum(id) AS b FROM test_00597 AS table_alias) AS outer_table_alias WHERE outer_table_alias.b = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 933', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM test_00597) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 934', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM (SELECT * FROM test_00597)) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 935', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT b.* FROM (SELECT * FROM test_00597) AS b) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 936', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT date, id, name, value FROM test_00597) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 937', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT date, id, name, value FROM (SELECT date, id, name, value FROM test_00597)) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 938', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM test_00597) AS b WHERE b.id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 939', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM (SELECT * FROM test_00597) AS a) AS b WHERE b.id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 940', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT id, date, min(value) AS value FROM test_00597 GROUP BY id, date) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 941', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM test_00597 UNION ALL SELECT * FROM test_00597) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 942', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM test_00597) ANY LEFT JOIN (SELECT * FROM test_00597) USING id WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 943', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT toInt8(1) AS id) ANY LEFT JOIN test_00597 USING id WHERE value = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 944', () => {
    const query = `EXPLAIN SYNTAX SELECT b.value FROM (SELECT toInt8(1) AS id) ANY LEFT JOIN test_00597 AS b USING id WHERE value = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 945', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM (SELECT * FROM test_00597) ANY LEFT JOIN (SELECT * FROM test_00597) USING id) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 946', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM test_00597) ANY LEFT JOIN (SELECT * FROM test_00597) AS b USING id WHERE b.id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 947', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT toInt8(1) AS id, toDate('2000-01-01') AS date FROM system.numbers LIMIT 1) ANY LEFT JOIN (SELECT * FROM test_00597) AS b USING date, id WHERE b.date = toDate('2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 948', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM (SELECT * FROM test_00597) AS a ANY LEFT JOIN (SELECT * FROM test_00597) AS b  ON  a.id = b.id) WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 949', () => {
    const query = `EXPLAIN SYNTAX SELECT * FROM (SELECT * FROM test_00597) ANY INNER JOIN (SELECT * FROM (SELECT * FROM test_00597)) as r USING id WHERE r.id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 950', () => {
    const query = `EXPLAIN SYNTAX SELECT value + t1.value AS expr FROM (SELECT t0.value, t1.value FROM test_00597 AS t0 FULL JOIN test_00597 AS t1 USING date) WHERE expr < 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 951', () => {
    const query = `EXPLAIN ESTIMATE SELECT count() FROM partition_by_ignore WHERE ts BETWEEN toDateTime('2022-08-07 00:00:00') AND toDateTime('2022-08-10 00:00:00') FORMAT CSV;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors explain: 952', () => {
    const query = `EXPLAIN ESTIMATE SELECT count() FROM partition_by_ignore WHERE ts_2 BETWEEN toDateTime('2022-08-07 00:00:00') AND toDateTime('2022-08-10 00:00:00') FORMAT CSV;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
