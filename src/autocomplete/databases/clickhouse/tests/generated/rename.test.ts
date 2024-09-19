/* no-irregular-whitespace: "off" */
/* eslint no-useless-escape: "off" */
import {parseClickHouseQuery} from '../../index';

test('should pass without errors rename: 1', () => {
    const query = `RENAME DICTIONARY test_dict_2 to test_dict; -- {serverError INFINITE_LOOP} DROP DICTIONARY test_dict_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 2', () => {
    const query = `RENAME TABLE {CLICKHOUSE_DATABASE:Identifier}.r1 TO {CLICKHOUSE_DATABASE:Identifier}.r1_bak;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 3', () => {
    const query = `RENAME {CLICKHOUSE_DATABASE:Identifier}.r1_bak TO {CLICKHOUSE_DATABASE:Identifier}.r1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 4', () => {
    const query = `RENAME {CLICKHOUSE_DATABASE:Identifier}.r1 TO {CLICKHOUSE_DATABASE:Identifier}.r1_bak, {CLICKHOUSE_DATABASE:Identifier}.r2 TO {CLICKHOUSE_DATABASE:Identifier}.r2_bak;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 5', () => {
    const query = `RENAME {CLICKHOUSE_DATABASE:Identifier}.test_dictionary TO {CLICKHOUSE_DATABASE:Identifier}.test_dictionary_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 6', () => {
    const query = `RENAME {CLICKHOUSE_DATABASE:Identifier} TO {CLICKHOUSE_DATABASE_1:Identifier}; -- { serverError UNKNOWN_TABLE } SHOW DATABASES LIKE '{CLICKHOUSE_DATABASE:String}';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 7', () => {
    const query = `rename table t1 to t2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 8', () => {
    const query = `rename table t2 to t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 9', () => {
    const query = `RENAME DATABASE {old_db_name:Identifier} TO {new_db_name:Identifier};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 10', () => {
    const query = `RENAME TABLE {new_db_name:Identifier}.{old_tbl_name:Identifier} TO {new_db_name:Identifier}.{new_tbl_name:Identifier};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 11', () => {
    const query = `RENAME DICTIONARY {new_db_name:Identifier}.{old_dict_name:Identifier} TO {new_db_name:Identifier}.{new_dict_name:Identifier};`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 12', () => {
    const query = `RENAME TABLE eligible_test TO eligible_test2 SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 13', () => {
    const query = `RENAME TABLE 02265_ordinary_db.join_table TO 02265_atomic_db.join_table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 14', () => {
    const query = `rename table db_hang.test to db_hang_temp.test;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 15', () => {
    const query = `rename table db_hang.test_mv to db_hang_temp.test_mv;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 16', () => {
    const query = `rename database db_hang_temp to db_hang;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 17', () => {
    const query = `RENAME TABLE sqllt.table TO sqllt.table_new;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 18', () => {
    const query = `RENAME TABLE sqllt.table_new TO sqllt.table;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 19', () => {
    const query = `rename table test_1603_rename_bug_ordinary.bar to test_1603_rename_bug_ordinary.foo; -- { serverError TABLE_ALREADY_EXISTS } attach table test_1603_rename_bug_ordinary.foo;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 20', () => {
    const query = `rename table test_1603_rename_bug_atomic.bar to test_1603_rename_bug_atomic.foo; -- { serverError TABLE_ALREADY_EXISTS } attach table test_1603_rename_bug_atomic.foo;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 21', () => {
    const query = `RENAME TABLE test1601_detach_permanently_atomic.test_name_rename_attempt TO test1601_detach_permanently_atomic.test_name_reuse; -- { serverError TABLE_ALREADY_EXISTS } EXCHANGE TABLES test1601_detach_permanently_atomic.test_name_rename_attempt AND test1601_detach_permanently_atomic.test_name_reuse; -- { serverError UNKNOWN_TABLE }
SELECT 'can still show the create statement';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 22', () => {
    const query = `RENAME TABLE test1601_detach_permanently_ordinary.test_name_rename_attempt TO test1601_detach_permanently_ordinary.test_name_reuse; -- { serverError TABLE_ALREADY_EXISTS } SELECT 'can still show the create statement';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 23', () => {
    const query = `RENAME TABLE test1601_detach_permanently_lazy.test_name_rename_attempt TO test1601_detach_permanently_lazy.test_name_reuse; -- { serverError TABLE_ALREADY_EXISTS } SELECT 'can still show the create statement';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 24', () => {
    const query = `RENAME DICTIONARY test_01191.table TO test_01191.table1; -- {serverError UNKNOWN_TABLE} EXCHANGE DICTIONARIES test_01191._ AND test_01191.dict; -- {serverError INFINITE_LOOP}
EXCHANGE TABLES test_01191.t AND test_01191.dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 25', () => {
    const query = `RENAME DICTIONARY test_01191.t TO test_01191.dict1; -- {serverError INCORRECT_QUERY} DROP DICTIONARY test_01191.t; -- {serverError INCORRECT_QUERY}
DROP TABLE test_01191.t;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 26', () => {
    const query = `RENAME DICTIONARY test_01191.dict TO dummy_db.dict1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 27', () => {
    const query = `RENAME DICTIONARY dummy_db.dict1 TO test_01191.dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 28', () => {
    const query = `RENAME DICTIONARY test_01191.dict TO test_01191.dict1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 29', () => {
    const query = `RENAME DICTIONARY test_01191.dict1 TO test_01191.dict2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 30', () => {
    const query = `RENAME DICTIONARY test_01155_ordinary.dict TO test_01155_ordinary.dict1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 31', () => {
    const query = `RENAME TABLE test_01155_ordinary.dict1 TO test_01155_ordinary.dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 32', () => {
    const query = `RENAME TABLE test_01155_ordinary.mv1 TO test_01155_atomic.mv1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 33', () => {
    const query = `RENAME TABLE test_01155_ordinary.mv2 TO test_01155_atomic.mv2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 34', () => {
    const query = `RENAME TABLE test_01155_ordinary.dst TO test_01155_atomic.dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 35', () => {
    const query = `RENAME TABLE test_01155_ordinary.src TO test_01155_atomic.src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 36', () => {
    const query = `RENAME DICTIONARY test_01155_ordinary.dict TO test_01155_atomic.dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 37', () => {
    const query = `RENAME TABLE test_01155_atomic.mv1 TO test_01155_ordinary.mv1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 38', () => {
    const query = `RENAME TABLE test_01155_atomic.mv2 TO test_01155_ordinary.mv2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 39', () => {
    const query = `RENAME TABLE test_01155_atomic.dst TO test_01155_ordinary.dst;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 40', () => {
    const query = `RENAME TABLE test_01155_atomic.src TO test_01155_ordinary.src;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 41', () => {
    const query = `RENAME TABLE test_01155_atomic.dist TO test_01155_ordinary.dist;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 42', () => {
    const query = `RENAME DICTIONARY test_01155_atomic.dict TO test_01155_ordinary.dict;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 43', () => {
    const query = `RENAME TABLE rmt TO rmt1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 44', () => {
    const query = `RENAME TABLE rmt TO rmt2;   -- { serverError NOT_IMPLEMENTED } DETACH TABLE rmt;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 45', () => {
    const query = `RENAME TABLE test_01148_atomic.rmt4 to test_01148_atomic.rmt3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 46', () => {
    const query = `RENAME TABLE test_01148_atomic.rmt3 to test_01148_ordinary.rmt3; -- { serverError NOT_IMPLEMENTED } DROP DATABASE test_01148_ordinary;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 47', () => {
    const query = `RENAME TABLE t0 TO t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 48', () => {
    const query = `RENAME TABLE t1 TO t1tmp, t2 TO t2tmp;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 49', () => {
    const query = `RENAME TABLE t1tmp TO t2, t2tmp TO t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 50', () => {
    const query = `RENAME TABLE t0_tmp TO t1; -- { serverError UNKNOWN_TABLE } RENAME TABLE if exists t0_tmp TO t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 51', () => {
    const query = `RENAME TABLE if exists t0 TO t1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 52', () => {
    const query = `RENAME TABLE original_mv TO new_mv;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 53', () => {
    const query = `RENAME TABLE view_table_00942 TO new_view_table_00942;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 54', () => {
    const query = `RENAME TABLE test1_00843 TO test2_00843;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 55', () => {
    const query = `rename table v_test1 to v_test11, v_test2 to v_test22;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 56', () => {
    const query = `RENAME TABLE rename2 TO rename3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 57', () => {
    const query = `RENAME TABLE set TO set2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors rename: 58', () => {
    const query = `RENAME TABLE set2 TO set;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});
