/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[REVOKE] should pass without errors: 1', () => {
    const query = `REVOKE SELECT ON sqllt.table FROM sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 2', () => {
    const query = `REVOKE DROP ON sqllt.view FROM sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 3', () => {
    const query = `REVOKE SELECT ON db.* FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 4', () => {
    const query = `REVOKE SELECT ON *.* FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 5', () => {
    const query = `REVOKE SELECT ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 6', () => {
    const query = `REVOKE SELECT(col1) ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 7', () => {
    const query = `REVOKE SELECT(col1, col2) ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 8', () => {
    const query = `REVOKE GRANT OPTION FOR SELECT(col1) ON db.table FROM test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 9', () => {
    const query = `REVOKE SELECT ON db1.* FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 10', () => {
    const query = `REVOKE SELECT ON db2.table FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 11', () => {
    const query = `REVOKE SELECT ON db3.table FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 12', () => {
    const query = `REVOKE SELECT(col2) ON db4.table FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 13', () => {
    const query = `REVOKE INSERT ON *.* FROM test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 14', () => {
    const query = `REVOKE SELECT(c1, c2, c3, c4, c5) ON db1.table1 FROM test_role_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[REVOKE] should pass without errors: 15', () => {
    const query = `REVOKE SELECT(c1) ON db1.table2 FROM test_role_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
