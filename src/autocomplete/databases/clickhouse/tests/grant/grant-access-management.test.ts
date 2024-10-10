import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

// TODO: restructurize
test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            ACCESS MANAGEMENT,
            CREATE USER,
            ALTER USER,
            DROP USER,
            CREATE ROLE,
            ALTER ROLE,
            DROP ROLE,
            ROLE ADMIN,
            CREATE ROW POLICY,
            ALTER ROW POLICY,
            DROP ROW POLICY,
            CREATE POLICY,
            ALTER POLICY,
            DROP POLICY,
            CREATE QUOTA,
            ALTER QUOTA,
            DROP QUOTA,
            CREATE SETTINGS PROFILE,
            ALTER SETTINGS PROFILE,
            DROP SETTINGS PROFILE,
            CREATE PROFILE,
            ALTER PROFILE,
            DROP PROFILE,
            SHOW ACCESS,
            SHOW_USERS,
            SHOW_ROLES,
            SHOW_ROW_POLICIES,
            SHOW_QUOTAS,
            SHOW_SETTINGS_PROFILES,
            SHOW CREATE USER,
            SHOW CREATE ROLE,
            SHOW POLICIES,
            SHOW CREATE ROW POLICY,
            SHOW CREATE POLICY,
            SHOW CREATE QUOTA,
            SHOW PROFILES,
            SHOW CREATE SETTINGS PROFILE,
            SHOW CREATE PROFILE,
            ALLOW SQL SECURITY NONE,
            CREATE SQL SECURITY NONE,
            SQL SECURITY NONE,
            SECURITY NONE
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT
            ACCESS MANAGEMENT,
            CREATE USER,
            ALTER USER,
            DROP USER,
            CREATE ROLE,
            ALTER ROLE,
            DROP ROLE,
            ROLE ADMIN,
            CREATE ROW POLICY,
            ALTER ROW POLICY,
            DROP ROW POLICY,
            CREATE POLICY,
            ALTER POLICY,
            DROP POLICY,
            CREATE QUOTA,
            ALTER QUOTA,
            DROP QUOTA,
            CREATE SETTINGS PROFILE,
            ALTER SETTINGS PROFILE,
            DROP SETTINGS PROFILE,
            CREATE PROFILE,
            ALTER PROFILE,
            DROP PROFILE,
            SHOW ACCESS,
            SHOW_USERS,
            SHOW_ROLES,
            SHOW_ROW_POLICIES,
            SHOW_QUOTAS,
            SHOW_SETTINGS_PROFILES,
            SHOW CREATE USER,
            SHOW CREATE ROLE,
            SHOW POLICIES,
            SHOW CREATE ROW POLICY,
            SHOW CREATE POLICY,
            SHOW CREATE QUOTA,
            SHOW PROFILES,
            SHOW CREATE SETTINGS PROFILE,
            SHOW CREATE PROFILE,
            ALLOW SQL SECURITY NONE,
            CREATE SQL SECURITY NONE,
            SQL SECURITY NONE,
            SECURITY NONE
          ON test_table TO test_user1;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after ACCESS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ACCESS |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'MANAGEMENT',
        },
    ]);
});

test('should suggest keywords after CREATE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ROLE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'ADMIN',
        },
    ]);
});
