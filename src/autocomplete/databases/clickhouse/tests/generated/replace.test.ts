/* no-irregular-whitespace: "off" */
/* eslint no-useless-escape: "off" */
import {parseClickHouseQuery} from '../../index';

test('should pass without errors replace: 1', () => {
    const query = `REPLACE DICTIONARY 01913_db.test_dictionary (
id UInt64,
value_1 String
)
PRIMARY KEY id
LAYOUT(HASHED())
SOURCE(CLICKHOUSE(DB '01913_db' TABLE 'test_source_table_2'))
LIFETIME(0);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 2', () => {
    const query = `replace table t1 (n UInt64, s String) engine=MergeTree order by n; -- { serverError UNKNOWN_TABLE } show tables;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 3', () => {
    const query = `replace table t1 (n UInt64) engine=MergeTree order by n;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 4', () => {
    const query = `replace table buf (n int) engine=Distributed(test_shard_localhost, currentDatabase(), dist);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 5', () => {
    const query = `replace table dist (n int) engine=Buffer(currentDatabase(), t, 1, 10, 100, 10, 100, 1000, 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 6', () => {
    const query = `replace table buf (n int) engine=Buffer(currentDatabase(), dist, 1, 10, 100, 10, 100, 1000, 1000);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 7', () => {
    const query = `replace table dist (n int) engine=Distributed(test_shard_localhost, currentDatabase(), t);`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 8', () => {
    const query = `replace table buf (n int) engine=Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 9', () => {
    const query = `replace table dist (n int) engine=Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 10', () => {
    const query = `replace table join engine=Join(ANY, INNER, n) as select * from t where throwIf(n); -- { serverError FUNCTION_THROW_IF_VALUE_IS_NON_ZERO } select * from numbers(10) as t any join join on t.number=join.n order by n;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors replace: 11', () => {
    const query = `replace table join engine=Join(ANY, INNER, n) as select * from t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});
