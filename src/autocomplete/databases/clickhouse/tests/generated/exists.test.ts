/* no-irregular-whitespace: "off" */
/* eslint no-useless-escape: "off" */
import {parseClickHouseQuery} from '../../index';

test('should pass without errors exists: 1', () => {
    const query = `EXISTS TABLE eligible_test SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 2', () => {
    const query = `EXISTS TABLE aine;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 3', () => {
    const query = `EXISTS db_01048.t_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 4', () => {
    const query = `EXISTS TABLE db_01048.t_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 5', () => {
    const query = `EXISTS DICTIONARY db_01048.t_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 6', () => {
    const query = `EXISTS DATABASE db_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 7', () => {
    const query = `EXISTS t_01048; -- Does not work for temporary tables. Maybe have to fix. EXISTS TABLE t_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 8', () => {
    const query = `EXISTS DICTIONARY t_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 9', () => {
    const query = `EXISTS TABLE db_01048.t_01048; -- Dictionaries are tables as well. But not all tables are dictionaries. EXISTS DICTIONARY db_01048.t_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 10', () => {
    const query = `EXISTS VIEW db_01048.v_01048;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 11', () => {
    const query = `EXISTS VIEW db_01048.t_01048_2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 12', () => {
    const query = `EXISTS VIEW db_01048.v_not_exist;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 13', () => {
    const query = `EXISTS VIEW db_not_exists.v_not_exist;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 14', () => {
    const query = `EXISTS DICTIONARY db_01018.dict1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 15', () => {
    const query = `EXISTS DICTIONARY memory_db.dict2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 16', () => {
    const query = `EXISTS TEMPORARY TABLE temp_tab;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 17', () => {
    const query = `EXISTS TABLE \`.inner.tmp_mv\`;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 18', () => {
    const query = `EXISTS TABLE \`.inner.tmp_mv2\`;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 19', () => {
    const query = `EXISTS TABLE \`.inner.tmp_mv3\`;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors exists: 20', () => {
    const query = `EXISTS TABLE \`.inner.tmp_mv4\`;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});
