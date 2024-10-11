import {TableOrViewSuggestion} from '../../../../shared';
import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors on table wildcard identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT ON CLUSTER test_cluster CREATE ON *.* TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on database wildcard identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT ON CLUSTER test_cluster CREATE ON *.test_table TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on wildcard identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT ON CLUSTER test_cluster CREATE ON * TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT ON CLUSTER test_cluster CREATE ON *, SELECT ON *, ALTER ON * TO test_user1, test_user2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT test_role1, test_role2 TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
            GRANT ON CLUSTER test_cluster
                test_role
            TO test_user1, test_user2, CURRENT_USER
            WITH ADMIN OPTION
            WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('GRANT test_role TO test_user1;');
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
            GRANT ON CLUSTER test_cluster
                CREATE ON *.*
            TO test_user1, test_user2, CURRENT_USER
            WITH GRANT OPTION
            WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT CREATE ON *.* TO test_user;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest tables or views', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER test_cluster CREATE ON | TO test_user;',
    );
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest databases', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER test_cluster CREATE ON | TO test_user;',
    );
    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should suggest current user', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT ON test_table TO |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CURRENT_USER',
        },
    ]);
});

test('should suggest privileges after GRANT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'CURRENT'},
        {value: 'ON'},
        {value: 'SELECT'},
        {value: 'INSERT'},
        {value: 'CREATE'},
        {value: 'DROP'},
        {value: 'TRUNCATE'},
        {value: 'KILL'},
        {value: 'OPTIMIZE'},
        {value: 'SHOW'},
        {value: 'INTROSPECTION'},
        {value: 'ADDRESSTOLINE'},
        {value: 'ADDRESSTOLINEWITHINLINES'},
        {value: 'ADDRESSTOSYMBOL'},
        {value: 'DEMANGLE'},
        {value: 'SOURCES'},
        {value: 'FILE'},
        {value: 'URL'},
        {value: 'REMOTE'},
        {value: 'MYSQL'},
        {value: 'ODBC'},
        {value: 'JDBC'},
        {value: 'HDFS'},
        {value: 'S3'},
        {value: 'AZURE'},
        {value: 'HIVE'},
        {value: 'MONGO'},
        {value: 'POSTGRES'},
        {value: 'REDIS'},
        {value: 'SQLITE'},
        {value: 'DICTGET'},
        {value: 'DICTGETHIERARCHY'},
        {value: 'DICTHAS'},
        {value: 'DICTISIN'},
        {value: 'ALTER'},
        {value: 'DELETE'},
        {value: 'UPDATE'},
        {value: 'ADD'},
        {value: 'CLEAR'},
        {value: 'COMMENT'},
        {value: 'MODIFY'},
        {value: 'RENAME'},
        {value: 'MATERIALIZE'},
        {value: 'INDEX'},
        {value: 'CONSTRAINT'},
        {value: 'MOVE'},
        {value: 'FETCH'},
        {value: 'FREEZE'},
        {value: 'REFRESH'},
        {value: 'ALL'},
        {value: 'NONE'},
        {value: 'DISPLAYSECRETSINSHOWANDSELECT'},
        {value: 'ACCESS'},
        {value: 'ROLE'},
        {value: 'SHOW_USERS'},
        {value: 'SHOW_ROLES'},
        {value: 'SHOW_ROW_POLICIES'},
        {value: 'SHOW_QUOTAS'},
        {value: 'SHOW_SETTINGS_PROFILES'},
        {value: 'ALLOW'},
        {value: 'SQL'},
        {value: 'SECURITY'},
        {value: 'SYSTEM'},
        {value: 'SHUTDOWN'},
        {value: 'RELOAD'},
        {value: 'START'},
        {value: 'STOP'},
        {value: 'SYNC'},
        {value: 'RESTART'},
        {value: 'FLUSH'},
        {value: 'NAMED'},
        {value: 'USE'},
        {value: 'TABLE'},
        {value: 'ADMIN'},
        {value: 'USAGE'},
    ]);
});

test('should suggest privileges after comma', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT, |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'SELECT'},
        {value: 'INSERT'},
        {value: 'CREATE'},
        {value: 'DROP'},
        {value: 'TRUNCATE'},
        {value: 'KILL'},
        {value: 'OPTIMIZE'},
        {value: 'SHOW'},
        {value: 'INTROSPECTION'},
        {value: 'ADDRESSTOLINE'},
        {value: 'ADDRESSTOLINEWITHINLINES'},
        {value: 'ADDRESSTOSYMBOL'},
        {value: 'DEMANGLE'},
        {value: 'SOURCES'},
        {value: 'FILE'},
        {value: 'URL'},
        {value: 'REMOTE'},
        {value: 'MYSQL'},
        {value: 'ODBC'},
        {value: 'JDBC'},
        {value: 'HDFS'},
        {value: 'S3'},
        {value: 'AZURE'},
        {value: 'HIVE'},
        {value: 'MONGO'},
        {value: 'POSTGRES'},
        {value: 'REDIS'},
        {value: 'SQLITE'},
        {value: 'DICTGET'},
        {value: 'DICTGETHIERARCHY'},
        {value: 'DICTHAS'},
        {value: 'DICTISIN'},
        {value: 'ALTER'},
        {value: 'DELETE'},
        {value: 'UPDATE'},
        {value: 'ADD'},
        {value: 'CLEAR'},
        {value: 'COMMENT'},
        {value: 'MODIFY'},
        {value: 'RENAME'},
        {value: 'MATERIALIZE'},
        {value: 'INDEX'},
        {value: 'CONSTRAINT'},
        {value: 'MOVE'},
        {value: 'FETCH'},
        {value: 'FREEZE'},
        {value: 'REFRESH'},
        {value: 'ALL'},
        {value: 'NONE'},
        {value: 'DISPLAYSECRETSINSHOWANDSELECT'},
        {value: 'ACCESS'},
        {value: 'ROLE'},
        {value: 'SHOW_USERS'},
        {value: 'SHOW_ROLES'},
        {value: 'SHOW_ROW_POLICIES'},
        {value: 'SHOW_QUOTAS'},
        {value: 'SHOW_SETTINGS_PROFILES'},
        {value: 'ALLOW'},
        {value: 'SQL'},
        {value: 'SECURITY'},
        {value: 'SYSTEM'},
        {value: 'SHUTDOWN'},
        {value: 'RELOAD'},
        {value: 'START'},
        {value: 'STOP'},
        {value: 'SYNC'},
        {value: 'RESTART'},
        {value: 'FLUSH'},
        {value: 'NAMED'},
        {value: 'USE'},
        {value: 'TABLE'},
        {value: 'ADMIN'},
        {value: 'USAGE'},
    ]);
});

test('should suggest cluster', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ON |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
        {
            value: 'CLUSTER',
        },
    ]);
});

test('should suggest keywords after privilege identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest tables or views', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT ON |');
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables or views', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER test_cluster SELECT ON |',
    );
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest databases', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT ON |');
    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should suggest databases', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER test_cluster SELECT ON |',
    );
    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should suggest keywords after table identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT ON test_table |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
    ]);
});

test('should suggest current user', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT ON test_table TO |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CURRENT_USER',
        },
    ]);
});

test('should suggest keywords after user identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT SELECT ON test_table TO test_user |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'WITH',
        },
    ]);
});

test('should suggest keywords after WITH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT SELECT ON test_table TO test_user WITH |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'REPLACE',
        },
        {
            value: 'GRANT',
        },
    ]);
});

test('should suggest keywords after WITH GRANT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT SELECT ON test_table TO test_user WITH GRANT |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'OPTION',
        },
    ]);
});

test('should suggest keywords after WITH REPLACE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT SELECT ON test_table TO test_user WITH REPLACE |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'OPTION',
        },
    ]);
});
