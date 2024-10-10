import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            SHOW,
            SHOW DATABASES,
            SHOW TABLES,
            SHOW COLUMNS,
            SHOW DICTIONARIES,
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
            SHOW NAMED COLLECTIONS SECRETS,
            SHOW NAMED COLLECTIONS
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after SHOW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'NAMED',
        },
        {
            value: 'CREATE',
        },
        {
            value: 'PROFILES',
        },
        {
            value: 'POLICIES',
        },
        {
            value: 'ACCESS',
        },
        {
            value: 'DATABASES',
        },
        {
            value: 'DICTIONARIES',
        },
        {
            value: 'TABLES',
        },
        {
            value: 'COLUMNS',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT SHOW ON test_table TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after NAMED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW NAMED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'COLLECTIONS',
        },
    ]);
});

test('should suggest keywords after COLLECTIONS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW NAMED COLLECTIONS |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SECRETS',
        },
        {
            value: 'ON',
        },
    ]);
});
