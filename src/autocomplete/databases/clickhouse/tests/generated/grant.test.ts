/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[GRANT] should pass without errors: 1', () => {
    const query = `GRANT SELECT ON db1.* TO test_user_01999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 2', () => {
    const query = `GRANT SHOW ON db2.tb2 TO test_user_01999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 3', () => {
    const query = `GRANT SELECT(col1) ON db3.table TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 4', () => {
    const query = `GRANT SELECT(col3) ON db3.table3, SELECT(col1, col2) ON db4.table4 TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 5', () => {
    const query = `GRANT SELECT(cola) ON db5.table, INSERT(colb) ON db6.tb61, SHOW ON db7.* TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 6', () => {
    const query = `GRANT SELECT ON all.* TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 7', () => {
    const query = `GRANT USAGE ON *.* TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 8', () => {
    const query = `GRANT test_role_01999 to test_user_01999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 9', () => {
    const query = `GRANT SELECT ON db1.tb1 TO test_user_01999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 10', () => {
    const query = `GRANT NONE ON *.* TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 11', () => {
    const query = `GRANT SHOW ON db8.* TO test_user_01999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 12', () => {
    const query = `GRANT NONE TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 13', () => {
    const query = `GRANT NONE ON *.*, SELECT on db9.tb3 TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 14', () => {
    const query = `GRANT NONE, test_role_01999_1 TO test_user_01999 WITH REPLACE OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 15', () => {
    const query = `GRANT sqllt_role TO sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 16', () => {
    const query = `GRANT SELECT ON sqllt.table TO sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 17', () => {
    const query = `GRANT DROP ON sqllt.view TO sqllt_user;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 18', () => {
    const query = `GRANT r1_01292, r2_01292 TO u1_01292, u2_01292, u3_01292, u4_01292, u5_01292, u6_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 19', () => {
    const query = `GRANT r1_01292 TO u1_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 20', () => {
    const query = `GRANT r2_01292 TO u1_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 21', () => {
    const query = `GRANT r1_01292, r2_01292 TO u2_01292, u3_01292, u4_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 22', () => {
    const query = `GRANT SELECT ON *.* TO test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 23', () => {
    const query = `GRANT SELECT ON db.* TO test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 24', () => {
    const query = `GRANT SELECT ON db.table TO test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 25', () => {
    const query = `GRANT SELECT ON *.* TO test_user_01074 WITH GRANT OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 26', () => {
    const query = `GRANT SELECT ON db.* TO test_user_01074 WITH GRANT OPTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 27', () => {
    const query = `GRANT SELECT ON db1.* TO test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 28', () => {
    const query = `GRANT SELECT ON db2.table TO test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 29', () => {
    const query = `GRANT SELECT(col1) ON db3.table TO test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 30', () => {
    const query = `GRANT SELECT(col1, col2) ON db4.table TO test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 31', () => {
    const query = `GRANT INSERT ON *.* TO test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 32', () => {
    const query = `GRANT DELETE ON *.* TO test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[GRANT] should pass without errors: 33', () => {
    const query = `GRANT SELECT ON db1.* TO test_role_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
