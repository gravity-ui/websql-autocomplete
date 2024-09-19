/* eslint no-useless-escape: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors exchange: 1', () => {
    const query = `EXCHANGE DICTIONARIES test_dict AND test_dict_2; -- {serverError INFINITE_LOOP} DROP DICTIONARY test_dict_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 2', () => {
    const query = `EXCHANGE DICTIONARIES test_dict AND test_dict_2; -- {serverError INFINITE_LOOP} DROP DICTIONARY test_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 3', () => {
    const query = `EXCHANGE TABLES {new_db_name:Identifier}.{old_tbl_name:Identifier} AND {new_db_name:Identifier}.{new_tbl_name:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 4', () => {
    const query = `EXCHANGE DICTIONARIES {new_db_name:Identifier}.{old_dict_name:Identifier} AND {new_db_name:Identifier}.{new_dict_name:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 5', () => {
    const query = `EXCHANGE DICTIONARIES 01914_db.dictionary_1 AND 01914_db.dictionary_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 6', () => {
    const query = `EXCHANGE TABLES test_01191.dict AND test_01191.t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 7', () => {
    const query = `EXCHANGE TABLES t1 AND t3; -- { serverError UNKNOWN_TABLE } EXCHANGE TABLES t4 AND t2; -- { serverError UNKNOWN_TABLE }
RENAME TABLE t0 TO t1; -- { serverError TABLE_ALREADY_EXISTS }
DROP TABLE t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 8', () => {
    const query = `EXCHANGE TABLES t1 AND t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 9', () => {
    const query = `EXCHANGE TABLES test_01109_other_atomic.t3 AND test_01109_ordinary.t4; -- { serverError NOT_IMPLEMENTED } EXCHANGE TABLES test_01109_ordinary.t4 AND test_01109_other_atomic.t3; -- { serverError NOT_IMPLEMENTED }
EXCHANGE TABLES test_01109_ordinary.t4 AND test_01109_ordinary.t4; -- { serverError NOT_IMPLEMENTED }
EXCHANGE TABLES t1 AND test_01109_other_atomic.t3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exchange: 10', () => {
    const query = `EXCHANGE TABLES t2 AND t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
