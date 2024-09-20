/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors revoke: 1', () => {
    const query = `REVOKE SELECT ON sqllt.table FROM sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 2', () => {
    const query = `REVOKE DROP ON sqllt.view FROM sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 3', () => {
    const query = `REVOKE SELECT ON db.* FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 4', () => {
    const query = `REVOKE SELECT ON *.* FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 5', () => {
    const query = `REVOKE SELECT ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 6', () => {
    const query = `REVOKE SELECT(col1) ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 7', () => {
    const query = `REVOKE SELECT(col1, col2) ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 8', () => {
    const query = `REVOKE GRANT OPTION FOR SELECT(col1) ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 9', () => {
    const query = `REVOKE SELECT ON db1.* FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 10', () => {
    const query = `REVOKE SELECT ON db2.table FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 11', () => {
    const query = `REVOKE SELECT ON db3.table FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 12', () => {
    const query = `REVOKE SELECT(col2) ON db4.table FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 13', () => {
    const query = `REVOKE INSERT ON *.* FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 14', () => {
    const query = `REVOKE SELECT(c1, c2, c3, c4, c5) ON db1.table1 FROM test_role_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors revoke: 15', () => {
    const query = `REVOKE SELECT(c1) ON db1.table2 FROM test_role_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
