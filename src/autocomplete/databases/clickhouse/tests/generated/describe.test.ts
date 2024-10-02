/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[DESCRIBE] should pass without errors: 1', () => {
    const query = `DESCRIBE \`test_dictionary0\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 2', () => {
    const query = `DESCRIBE \`test_dictionary3\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 3', () => {
    const query = `DESCRIBE (SELECT 1, 1 UNION ALL SELECT 1, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 4', () => {
    const query = `DESCRIBE test_table_replicated_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 5', () => {
    const query = `DESCRIBE mergeTreeIndex(currentDatabase(), t_merge_tree_index, with_marks = true);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 6', () => {
    const query = `DESCRIBE TABLE pipe;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 7', () => {
    const query = `DESCRIBE FILESYSTEM CACHE '\$CLICHOUSE_TEST_UNIQUE_NAME';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 8', () => {
    const query = `DESCRIBE FILESYSTEM CACHE '\$CLICHOUSE_TEST_UNIQUE_NAME_2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 9', () => {
    const query = `DESCRIBE TABLE t_describe_options;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 10', () => {
    const query = `DESCRIBE remote(test_shard_localhost, currentDatabase(), t_describe_options);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 11', () => {
    const query = `DESCRIBE null();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 12', () => {
    const query = `DESCRIBE TABLE eligible_test SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 13', () => {
    const query = `DESCRIBE TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 14', () => {
    const query = `DESCRIBE (SELECT 1, 'Value');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 15', () => {
    const query = `DESCRIBE (SELECT 1 + 1, concat('Value_1', 'Value_2'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 16', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 17', () => {
    const query = `DESCRIBE (SELECT test_table.id, test_table.id, id FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 18', () => {
    const query = `DESCRIBE (SELECT * FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 19', () => {
    const query = `DESCRIBE (SELECT * APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 20', () => {
    const query = `DESCRIBE (SELECT * APPLY x -> toString(x) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 21', () => {
    const query = `DESCRIBE (SELECT tuple_value.* FROM test_table_compound);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 22', () => {
    const query = `DESCRIBE (SELECT tuple_value.* APPLY x -> x FROM test_table_compound);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 23', () => {
    const query = `DESCRIBE (SELECT tuple_value.* APPLY toString FROM test_table_compound);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 24', () => {
    const query = `DESCRIBE (SELECT tuple_value.* APPLY x -> toString(x) FROM test_table_compound);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 25', () => {
    const query = `DESCRIBE (SELECT 1 AS a, a AS b, b, b AS c, c, 'Value' AS d, d AS e, e AS f);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 26', () => {
    const query = `DESCRIBE (SELECT plus(1 AS a, a AS b), plus(b, b), plus(b, b) AS c, concat('Value' AS d, d) AS e, e);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 27', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, a.id, a.value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 28', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, a.*);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 29', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, a.* EXCEPT id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 30', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, a.* EXCEPT value);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 31', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, a.* EXCEPT value APPLY toString);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 32', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, a.* EXCEPT value APPLY x -> toString(x));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 33', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, untuple(a));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 34', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS a, untuple(a) AS b);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 35', () => {
    const query = `DESCRIBE (SELECT test_table.id AS a, a, test_table.id AS b, b AS c, c FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 36', () => {
    const query = `DESCRIBE (SELECT plus(test_table.id AS a, test_table.id), plus(id, id AS b), plus(b, b), plus(test_table.id, test_table.id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 37', () => {
    const query = `DESCRIBE (SELECT test_table.* REPLACE id + (id AS id_alias) AS id, id_alias FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 38', () => {
    const query = `DESCRIBE (SELECT test_table.* FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 39', () => {
    const query = `DESCRIBE (SELECT 1 AS id, 2 AS value, * FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 40', () => {
    const query = `DESCRIBE (SELECT 1 AS id, 2 AS value, * FROM test_table AS t1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 41', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> x + 1, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 42', () => {
    const query = `DESCRIBE (SELECT 1 AS a, arrayMap(x -> x + a, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 43', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> x + test_table.id + test_table.id + id, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 44', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> x + (test_table.id AS first) + (test_table.id AS second) + id, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 45', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> test_table.* EXCEPT value, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 46', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> test_table.* EXCEPT value APPLY x -> x, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 47', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> test_table.* EXCEPT value APPLY toString, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 48', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> test_table.* EXCEPT value APPLY x -> toString(x), [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 49', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS compound_value, arrayMap(x -> compound_value.*, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 50', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS compound_value, arrayMap(x -> compound_value.* APPLY x -> x, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 51', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS compound_value, arrayMap(x -> compound_value.* APPLY toString, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 52', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS compound_value, arrayMap(x -> compound_value.* APPLY x -> toString(x), [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 53', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS compound_value, arrayMap(x -> compound_value.* EXCEPT value, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 54', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS compound_value, arrayMap(x -> compound_value.* EXCEPT value APPLY x -> x, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 55', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS compound_value, arrayMap(x -> compound_value.* EXCEPT value APPLY toString, [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 56', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1, 'Value'), 'Tuple (id UInt64, value String)') AS compound_value, arrayMap(x -> compound_value.* EXCEPT value APPLY x -> toString(x), [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 57', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS a, arrayMap(x -> untuple(a), [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 58', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS a, arrayMap(x -> untuple(a) AS untupled_value, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 59', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS a, untuple(a) AS untupled_value, arrayMap(x -> untupled_value, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 60', () => {
    const query = `DESCRIBE (SELECT cast(tuple(1), 'Tuple (id UInt64)') AS a, untuple(a) AS untupled_value, arrayMap(x -> untupled_value AS untupled_value_in_lambda, [1,2,3]) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 61', () => {
    const query = `DESCRIBE (WITH x -> x + 1 AS test_lambda SELECT test_lambda(1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 62', () => {
    const query = `DESCRIBE (WITH x -> * AS test_lambda SELECT test_lambda(1) AS lambda_value, lambda_value FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 63', () => {
    const query = `DESCRIBE (SELECT (SELECT 1), (SELECT 2), (SELECT 3) AS a, (SELECT 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 64', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> (SELECT 1), [1,2,3]), arrayMap(x -> (SELECT 2) AS a, [1, 2, 3]),  arrayMap(x -> (SELECT 1), [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 65', () => {
    const query = `DESCRIBE (SELECT (SELECT 1 AS a, 2 AS b) AS c, c.a, c.b);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 66', () => {
    const query = `DESCRIBE (SELECT (SELECT 1 AS a, 2 AS b) AS c, c.*);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 67', () => {
    const query = `DESCRIBE (SELECT (SELECT 1 UNION DISTINCT SELECT 1), (SELECT 2 UNION DISTINCT SELECT 2), (SELECT 3 UNION DISTINCT SELECT 3) AS a, (SELECT 4 UNION DISTINCT SELECT 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 68', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> (SELECT 1 UNION DISTINCT SELECT 1), [1,2,3]), arrayMap(x -> (SELECT 2 UNION DISTINCT SELECT 2) AS a, [1, 2, 3]), arrayMap(x -> (SELECT 3 UNION DISTINCT SELECT 3), [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 69', () => {
    const query = `DESCRIBE (SELECT (SELECT 1 AS a, 2 AS b UNION DISTINCT SELECT 1, 2) AS c, c.a, c.b);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 70', () => {
    const query = `DESCRIBE (SELECT (SELECT 1 AS a, 2 AS b UNION DISTINCT SELECT 1, 2) AS c, c.*);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 71', () => {
    const query = `DESCRIBE (SELECT (SELECT 1), (SELECT 2 UNION DISTINCT SELECT 2), (SELECT 3) AS a, (SELECT 4 UNION DISTINCT SELECT 4));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 72', () => {
    const query = `DESCRIBE (SELECT arrayMap(x -> (SELECT 1 UNION DISTINCT SELECT 1), [1,2,3]), arrayMap(x -> (SELECT 2) AS a, [1, 2, 3]), arrayMap(x -> (SELECT 3 UNION DISTINCT SELECT 3), [1,2,3]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 73', () => {
    const query = `DESCRIBE (SELECT count() OVER ());`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 74', () => {
    const query = `DESCRIBE (SELECT count() OVER () AS window_function);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 75', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 76', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 77', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 78', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id ASC, value DESC ROWS CURRENT ROW) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 79', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id ASC, value DESC ROWS BETWEEN CURRENT ROW AND CURRENT ROW) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 80', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id ASC, value DESC RANGE CURRENT ROW) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 81', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id ASC, value DESC RANGE BETWEEN CURRENT ROW AND CURRENT ROW) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 82', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY (id AS id_alias), (value AS value_alias) ORDER BY id ASC, value DESC ROWS CURRENT ROW) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 83', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY (id AS id_alias) ASC, (value AS value_alias) DESC ROWS CURRENT ROW) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 84', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id ASC, value DESC ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 85', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id ASC, value DESC ROWS BETWEEN 1 + 1 PRECEDING AND 2 + 2 FOLLOWING) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 86', () => {
    const query = `DESCRIBE (SELECT count() OVER (PARTITION BY id, value ORDER BY id ASC, value DESC ROWS BETWEEN ((1 + 1) AS frame_offset_begin) PRECEDING AND ((2 + 2) AS frame_offset_end) FOLLOWING) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 87', () => {
    const query = `DESCRIBE (SELECT count() OVER (ORDER BY toNullable(id) NULLS FIRST) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 88', () => {
    const query = `DESCRIBE (SELECT count() OVER (ORDER BY toNullable(id) NULLS LAST) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 89', () => {
    const query = `DESCRIBE (SELECT count() OVER (ORDER BY id WITH FILL FROM 1 TO 5 STEP 1) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 90', () => {
    const query = `DESCRIBE (SELECT count() OVER (ORDER BY id WITH FILL FROM 1 + 1 TO 6 STEP 1 + 1) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 91', () => {
    const query = `DESCRIBE (SELECT count() OVER (ORDER BY id WITH FILL FROM ((1 + 1) AS from) TO (6 AS to) STEP ((1 + 1) AS step)) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 92', () => {
    const query = `DESCRIBE (SELECT count() OVER window_name FROM test_table WINDOW window_name AS (PARTITION BY id));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 93', () => {
    const query = `DESCRIBE (SELECT count() OVER window_name FROM test_table WINDOW window_name AS (PARTITION BY id ORDER BY value));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 94', () => {
    const query = `DESCRIBE (SELECT count() OVER (window_name ORDER BY id) FROM test_table WINDOW window_name AS (PARTITION BY id));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 95', () => {
    const query = `DESCRIBE (SELECT id IN (SELECT 1) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 96', () => {
    const query = `DESCRIBE (SELECT id IN (SELECT id FROM test_table_in) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 97', () => {
    const query = `DESCRIBE (SELECT id IN test_table_in FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 98', () => {
    const query = `DESCRIBE (WITH test_table_in_cte AS (SELECT id FROM test_table) SELECT id IN (SELECT id FROM test_table_in_cte) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 99', () => {
    const query = `DESCRIBE (WITH test_table_in_cte AS (SELECT id FROM test_table) SELECT id IN test_table_in_cte FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 100', () => {
    const query = `DESCRIBE (WITH test_table_in_cte_1 AS (SELECT 1 AS c1), test_table_in_cte_2 AS (SELECT 1 AS c1) SELECT * FROM test_table_in_cte_1 INNER JOIN test_table_in_cte_2 as test_table_in_cte_2 ON test_table_in_cte_1.c1 = test_table_in_cte_2.c1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 101', () => {
    const query = `DESCRIBE (WITH test_table_in_cte_1 AS (SELECT 1 AS c1), test_table_in_cte_2 AS (SELECT 1 AS c1 UNION ALL SELECT 1 AS c1) SELECT * FROM test_table_in_cte_1 INNER JOIN test_table_in_cte_2 as test_table_in_cte_2 ON test_table_in_cte_1.c1 = test_table_in_cte_2.c1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 102', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1, test_table_join_2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 103', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1 AS t1, test_table_join_2 AS t2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 104', () => {
    const query = `DESCRIBE (SELECT * APPLY toString FROM test_table_join_1 AS t1, test_table_join_2 AS t2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 105', () => {
    const query = `DESCRIBE (SELECT * APPLY x -> toString(x) FROM test_table_join_1 AS t1, test_table_join_2 AS t2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 106', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.*, test_table_join_2.* FROM test_table_join_1 INNER JOIN test_table_join_2 ON test_table_join_1.id = test_table_join_2.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 107', () => {
    const query = `DESCRIBE (SELECT t1.*, t2.* FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 108', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.* APPLY toString, test_table_join_2.* APPLY toString FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 109', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.* APPLY x -> toString(x), test_table_join_2.* APPLY x -> toString(x) FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 110', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.id, test_table_join_1.value, test_table_join_1.value_join_1, test_table_join_2.id, test_table_join_2.value, test_table_join_2.value_join_2 FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 111', () => {
    const query = `DESCRIBE (SELECT t1.id, t1.value, t1.value_join_1, t2.id, t2.value, t2.value_join_2 FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 112', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1, test_table_join_2, test_table_join_3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 113', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1 AS t1, test_table_join_2 AS t2, test_table_join_3 AS t3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 114', () => {
    const query = `DESCRIBE (SELECT * APPLY toString FROM test_table_join_1 AS t1, test_table_join_2 AS t2, test_table_join_3 AS t3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 115', () => {
    const query = `DESCRIBE (SELECT * APPLY x -> toString(x) FROM test_table_join_1 AS t1, test_table_join_2 AS t2, test_table_join_3 AS t3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 116', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.*, test_table_join_2.*, test_table_join_3.* FROM test_table_join_1 INNER JOIN test_table_join_2 ON test_table_join_1.id = test_table_join_2.id
INNER JOIN test_table_join_3 ON test_table_join_2.id = test_table_join_3.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 117', () => {
    const query = `DESCRIBE (SELECT t1.*, t2.*, t3.* FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id INNER JOIN test_table_join_3 AS t3 ON t2.id = t3.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 118', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.* APPLY toString, test_table_join_2.* APPLY toString, test_table_join_3.* APPLY toString FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id INNER JOIN test_table_join_3 AS t3 ON t2.id = t3.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 119', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.* APPLY x -> toString(x), test_table_join_2.* APPLY x -> toString(x), test_table_join_3.* APPLY x -> toString(x) FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id INNER JOIN test_table_join_3 AS t3 ON t2.id = t3.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 120', () => {
    const query = `DESCRIBE (SELECT test_table_join_1.id, test_table_join_1.value, test_table_join_1.value_join_1, test_table_join_2.id, test_table_join_2.value, test_table_join_2.value_join_2, test_table_join_3.id, test_table_join_3.value, test_table_join_3.value_join_3
FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id INNER JOIN test_table_join_3 AS t3 ON t2.id = t3.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 121', () => {
    const query = `DESCRIBE (SELECT t1.id, t1.value, t1.value_join_1, t2.id, t2.value, t2.value_join_2, t3.id, t3.value, t3.value_join_3 FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 ON t1.id = t2.id INNER JOIN test_table_join_3 AS t3 ON t2.id = t3.id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 122', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 123', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id, value));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 124', () => {
    const query = `DESCRIBE (SELECT id, t1.id, t1.value, t2.id, t2.value FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 125', () => {
    const query = `DESCRIBE (SELECT id, value, t1.id, t1.value, t2.id, t2.value FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id, value));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 126', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id) INNER JOIN test_table_join_3 AS t3 USING (id));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 127', () => {
    const query = `DESCRIBE (SELECT * FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id, value) INNER JOIN test_table_join_3 AS t3 USING (id, value));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 128', () => {
    const query = `DESCRIBE (SELECT id, t1.id, t1.value, t2.id, t2.value, t3.id, t3.value FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id) INNER JOIN test_table_join_3 AS t3 USING (id));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 129', () => {
    const query = `DESCRIBE (SELECT id, value, t1.id, t1.value, t2.id, t2.value, t3.id, t3.value FROM test_table_join_1 AS t1 INNER JOIN test_table_join_2 AS t2 USING (id, value) INNER JOIN test_table_join_3 AS t3 USING (id, value));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 130', () => {
    const query = `DESCRIBE (SELECT [], array(), [1], array(1), [1, 2], array(1, 2), tuple(1), (1, 2), [[], []], [([], [])], ([], []), ([([], []), ([], [])]));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 131', () => {
    const query = `DESCRIBE TABLE trailing_comma_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 132', () => {
    const query = `DESCRIBE TABLE trailing_comma_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 133', () => {
    const query = `DESCRIBE TABLE trailing_comma_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 134', () => {
    const query = `DESCRIBE (SELECT id, value FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 135', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0, value.value_1_level_0 FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 136', () => {
    const query = `DESCRIBE (SELECT value AS alias_value, alias_value.value_0_level_0, alias_value.value_1_level_0 FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 137', () => {
    const query = `DESCRIBE (SELECT value AS alias_value, alias_value.* FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 138', () => {
    const query = `DESCRIBE (SELECT value AS alias_value, alias_value.* APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 139', () => {
    const query = `DESCRIBE (SELECT value.* FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 140', () => {
    const query = `DESCRIBE (SELECT value.* APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 141', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0.value_0_level_1, value.value_0_level_0.value_1_level_1 FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 142', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0 AS alias_value, alias_value.value_0_level_1, alias_value.value_1_level_1 FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 143', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0 AS alias_value, alias_value.* FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 144', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0 AS alias_value, alias_value.* APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 145', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0.* FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 146', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0.* APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 147', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0 AS value_alias, value_alias.value_0_level_1, value_alias.value_1_level_1 FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 148', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0 AS value_alias, value_alias.* FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 149', () => {
    const query = `DESCRIBE (SELECT value.value_0_level_0 AS value_alias, value_alias.* APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 150', () => {
    const query = `DESCRIBE (SELECT 1 + 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 151', () => {
    const query = `DESCRIBE (SELECT dummy + dummy);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 152', () => {
    const query = `DESCRIBE (SELECT id + length(value) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 153', () => {
    const query = `DESCRIBE (SELECT concat(concat(toString(id), '_'), (value)) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 154', () => {
    const query = `DESCRIBE (SELECT *);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 155', () => {
    const query = `DESCRIBE (SELECT COLUMNS(dummy));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 156', () => {
    const query = `DESCRIBE (SELECT COLUMNS('d'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 157', () => {
    const query = `DESCRIBE (SELECT COLUMNS(id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 158', () => {
    const query = `DESCRIBE (SELECT COLUMNS(id), COLUMNS(value) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 159', () => {
    const query = `DESCRIBE (SELECT COLUMNS('i'), COLUMNS('v') FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 160', () => {
    const query = `DESCRIBE (SELECT test_table.COLUMNS(id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 161', () => {
    const query = `DESCRIBE (SELECT test_table.COLUMNS(id), test_table.COLUMNS(value) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 162', () => {
    const query = `DESCRIBE (SELECT test_table.COLUMNS('i'), test_table.COLUMNS('v') FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 163', () => {
    const query = `DESCRIBE (SELECT 02339_db.test_table.* FROM 02339_db.test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 164', () => {
    const query = `DESCRIBE (SELECT 02339_db.test_table.COLUMNS(id) FROM 02339_db.test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 165', () => {
    const query = `DESCRIBE (SELECT 02339_db.test_table.COLUMNS(id), 02339_db.test_table.COLUMNS(value) FROM 02339_db.test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 166', () => {
    const query = `DESCRIBE (SELECT 02339_db.test_table.COLUMNS('i'), 02339_db.test_table.COLUMNS('v') FROM 02339_db.test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 167', () => {
    const query = `DESCRIBE (SELECT * APPLY (x -> toString(x)) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 168', () => {
    const query = `DESCRIBE (SELECT * APPLY (x -> toString(x)) APPLY (x -> length(x)) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 169', () => {
    const query = `DESCRIBE (SELECT * APPLY (x -> toString(x)) APPLY length FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 170', () => {
    const query = `DESCRIBE (SELECT * EXCEPT (id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 171', () => {
    const query = `DESCRIBE (SELECT COLUMNS(id, value) EXCEPT (id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 172', () => {
    const query = `DESCRIBE (SELECT * EXCEPT (id) APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 173', () => {
    const query = `DESCRIBE (SELECT COLUMNS(id, value) EXCEPT (id) APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 174', () => {
    const query = `DESCRIBE (SELECT * REPLACE (5 AS id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 175', () => {
    const query = `DESCRIBE (SELECT COLUMNS(id, value) REPLACE (5 AS id) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 176', () => {
    const query = `DESCRIBE (SELECT * REPLACE (5 AS id, 6 as value) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 177', () => {
    const query = `DESCRIBE (SELECT COLUMNS(id, value) REPLACE (5 AS id, 6 as value) FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 178', () => {
    const query = `DESCRIBE (SELECT * EXCEPT id REPLACE (5 AS id, 6 as value) APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 179', () => {
    const query = `DESCRIBE (SELECT COLUMNS(id, value) EXCEPT id REPLACE (5 AS id, 6 as value) APPLY toString FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 180', () => {
    const query = `DESCRIBE (SELECT 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 181', () => {
    const query = `DESCRIBE (SELECT 'test');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 182', () => {
    const query = `DESCRIBE (SELECT 1, 'test');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 183', () => {
    const query = `DESCRIBE (SELECT 1, 'test', [1, 2, 3]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 184', () => {
    const query = `DESCRIBE (SELECT 1, 'test', [1, 2, 3], ['1', '2', '3']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 185', () => {
    const query = `DESCRIBE (SELECT NULL);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 186', () => {
    const query = `DESCRIBE (SELECT (1, 1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 187', () => {
    const query = `DESCRIBE (SELECT [(1, 1)]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 188', () => {
    const query = `DESCRIBE (SELECT NULL, 1, 'test', [1, 2, 3], [(1, 1), (1, 1)]);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 189', () => {
    const query = `DESCRIBE (SELECT dummy);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 190', () => {
    const query = `DESCRIBE (SELECT one.dummy);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 191', () => {
    const query = `DESCRIBE (SELECT system.one.dummy);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 192', () => {
    const query = `DESCRIBE (SELECT value FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 193', () => {
    const query = `DESCRIBE (SELECT test_table.id FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 194', () => {
    const query = `DESCRIBE (SELECT test_table.value FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 195', () => {
    const query = `DESCRIBE (SELECT test_table.id, test_table.value FROM test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 196', () => {
    const query = `DESCRIBE (SELECT test.id, test.value FROM test_table AS test);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 197', () => {
    const query = `DESCRIBE (SELECT test_table.id, test_table.value FROM 02337_db.test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 198', () => {
    const query = `DESCRIBE (SELECT 02337_db.test_table.id, 02337_db.test_table.value FROM 02337_db.test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 199', () => {
    const query = `DESCRIBE (SELECT test_table.id, test_table.value FROM 02337_db.test_table AS test_table);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 200', () => {
    const query = `DESCRIBE TABLE null_before;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 201', () => {
    const query = `DESCRIBE TABLE ignore_auto_increment;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 202', () => {
    const query = `DESCRIBE TABLE 02266_auto_add_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 203', () => {
    const query = `DESCRIBE t_ephemeral_02205_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 204', () => {
    const query = `DESCRIBE (SELECT 02096_test_function(1) AS a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 205', () => {
    const query = `DESCRIBE TABLE t_desc_subcolumns FORMAT PrettyCompactNoEscapes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 206', () => {
    const query = `DESCRIBE TABLE t_desc_subcolumns FORMAT PrettyCompactNoEscapes SETTINGS describe_include_subcolumns = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 207', () => {
    const query = `DESCRIBE ( SELECT '1947 #3 QUERY - TRUE', id,
src.value - deltas_sum as delta
FROM src
LEFT JOIN
(
SELECT id, sum(delta) as deltas_sum FROM dst
WHERE id IN (SELECT id FROM src WHERE not sleepEachRow(0.001))
GROUP BY id
) _a
USING (id)
) FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 208', () => {
    const query = `DESCRIBE ( SELECT '1947 #3 QUERY - FALSE', id,
src.value - deltas_sum as delta
FROM src
LEFT JOIN
(
SELECT id, sum(delta) as deltas_sum FROM dst
WHERE id IN (SELECT id FROM src WHERE not sleepEachRow(0.001))
GROUP BY id
) _a
USING (id)
) FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 209', () => {
    const query = `DESCRIBE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 210', () => {
    const query = `DESCRIBE (SELECT * FROM test);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 211', () => {
    const query = `DESCRIBE (SELECT * FROM test ARRAY JOIN products);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 212', () => {
    const query = `DESCRIBE TABLE sqllt.table FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 213', () => {
    const query = `DESCRIBE TABLE data_01646;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 214', () => {
    const query = `DESCRIBE TABLE test_01532_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 215', () => {
    const query = `DESCRIBE TABLE test_01532_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 216', () => {
    const query = `DESCRIBE TABLE test_01532_3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 217', () => {
    const query = `DESCRIBE TABLE test_01532_4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 218', () => {
    const query = `DESCRIBE TABLE compress_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 219', () => {
    const query = `describe table merge_tree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 220', () => {
    const query = `describe table merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 221', () => {
    const query = `describe table merge_distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 222', () => {
    const query = `DESCRIBE TABLE test_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 223', () => {
    const query = `DESCRIBE TABLE test_alter_r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 224', () => {
    const query = `DESCRIBE TABLE test_alter_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 225', () => {
    const query = `DESCRIBE TABLE check_query_comment_column;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[DESCRIBE] should pass without errors: 226', () => {
    const query = `DESCRIBE TABLE null_00557;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
