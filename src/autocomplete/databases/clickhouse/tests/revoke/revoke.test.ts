import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      REVOKE ON CLUSTER test_cluster
        ADD CONSTRAINT,
        ADD INDEX,
        ADDRESSTOLINE,
        ADDRESSTOLINEWITHINLINES,
        ADDRESSTOSYMBOL,
        ADMIN OPTION,
        ALL,
        ALLOW SQL SECURITY NONE,
        ALTER,
        ALTER TABLE,
        ALTER UPDATE,
        ALTER DELETE,
        ALTER TABLE MODIFY QUERY,
        ALTER VIEW MODIFY SQL SECURITY,
        ALTER TABLE MODIFY SQL SECURITY,
        ALTER USER,
        ALTER ROLE,
        ALTER ROW POLICY,
        ALTER POLICY,
        ALTER QUOTA,
        ALTER SETTINGS PROFILE,
        ALTER PROFILE,
        ALTER COLUMN,
        ALTER ADD COLUMN,
        ALTER DROP COLUMN,
        ALTER MODIFY COLUMN,
        ALTER COMMENT COLUMN,
        ALTER CLEAR COLUMN,
        ALTER RENAME COLUMN,
        ALTER INDEX,
        ALTER ORDER BY,
        ALTER SAMPLE BY,
        ALTER MODIFY ORDER BY,
        ALTER MODIFY SAMPLE BY,
        ALTER ADD INDEX,
        ALTER DROP INDEX,
        ALTER MATERIALIZE INDEX,
        ALTER CLEAR INDEX,
        ALTER CONSTRAINT,
        ALTER ADD CONSTRAINT,
        ALTER DROP CONSTRAINT,
        ALTER TTL,
        ALTER MATERIALIZE TTL,
        ALTER MODIFY TTL,
        ALTER SETTINGS,
        ALTER SETTING,
        ALTER MODIFY SETTING,
        ALTER MOVE PARTITION,
        ALTER MOVE PART,
        ALTER FETCH PARTITION,
        ALTER FETCH PART,
        ALTER FREEZE PARTITION,
        ALTER VIEW,
        ALTER VIEW REFRESH,
        ALTER VIEW MODIFY QUERY,
        ALTER LIVE VIEW REFRESH,
        AZURE,
        CLEAR COLUMN,
        CLEAR INDEX,
        COMMENT COLUMN,
        CONSTRAINT,
        CREATE,
        CREATE DATABASE,
        CREATE TABLE,
        CREATE ARBITRARY TEMPORARY TABLE,
        CREATE TEMPORARY TABLE,
        CREATE VIEW,
        CREATE DICTIONARY,
        CREATE FUNCTION,
        CREATE USER,
        CREATE ROLE,
        CREATE ROW POLICY,
        CREATE POLICY,
        CREATE QUOTA,
        CREATE SETTINGS PROFILE,
        CREATE PROFILE,
        CREATE SQL SECURITY NONE,
        CREATE NAMED COLLECTION,
        DELETE,
        DEMANGLE,
        DICTGET,
        DICTHAS,
        DICTGETHIERARCHY,
        DICTISIN,
        DISPLAYSECRETSINSHOWANDSELECT,
        DROP,
        DROP DATABASE,
        DROP TABLE,
        DROP VIEW,
        DROP DICTIONARY,
        DROP USER,
        DROP ROLE,
        DROP ROW POLICY,
        DROP POLICY,
        DROP QUOTA,
        DROP SETTINGS PROFILE,
        DROP PROFILE,
        DROP COLUMN,
        DROP CONSTRAINT,
        DROP INDEX,
        DROP CACHE,
        DROP DNS CACHE,
        DROP DNS,
        DROP MARK CACHE,
        DROP MARKS,
        DROP UNCOMPRESSED CACHE,
        DROP UNCOMPRESSED,
        DROP NAMED COLLECTION,
        FETCH PART,
        FETCH PARTITION,
        FILE,
        FLUSH DISTRIBUTED,
        FLUSH LOGS,
        FREEZE PARTITION,
        HDFS,
        HIVE,
        INDEX,
        INSERT(test_column1, test_column2),
        INTROSPECTION,
        INTROSPECTION FUNCTIONS,
        JDBC,
        KILL QUERY,
        MATERIALIZE INDEX,
        MATERIALIZE TTL,
        MODIFY COLUMN,
        MODIFY ORDER BY,
        MODIFY SAMPLE BY,
        MODIFY SETTING,
        MODIFY TTL,
        MONGO,
        MOVE PARTITION,
        MOVE PART,
        MYSQL,
        NAMED COLLECTION ADMIN,
        NAMED COLLECTION USAGE,
        NAMED COLLECTION,
        NAMED COLLECTION CONTROL,
        USE NAMED COLLECTION,
        NONE,
        ODBC,
        OPTIMIZE,
        POSTGRES,
        REDIS,
        REFRESH VIEW,
        RELOAD CONFIG,
        RELOAD DICTIONARIES,
        RELOAD DICTIONARY,
        RELOAD EMBEDDED DICTIONARIES,
        REMOTE,
        RENAME COLUMN,
        RESTART REPLICA,
        ROLE ADMIN,
        S3,
        SECURITY NONE,
        SELECT(test_column1, test_column2),
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
        SHOW NAMED COLLECTIONS,
        SHUTDOWN,
        SOURCES,
        SQL SECURITY NONE,
        SQLITE,
        START DISTRIBUTED SENDS,
        START FETCHES,
        START MERGES,
        START MOVES,
        START REPLICATED SENDS,
        START REPLICATION QUEUES,
        START SENDS,
        START TTL MERGES,
        STOP DISTRIBUTED SENDS,
        STOP FETCHES,
        STOP MERGES,
        STOP MOVES,
        STOP REPLICATED SENDS,
        STOP REPLICATION QUEUES,
        STOP SENDS,
        STOP TTL MERGES,
        SYNC REPLICA,
        SYSTEM,
        SYSTEM DISTRIBUTED SENDS,
        SYSTEM DROP CACHE,
        SYSTEM DROP DNS CACHE,
        SYSTEM DROP DNS,
        SYSTEM DROP MARK CACHE,
        SYSTEM DROP MARK,
        SYSTEM DROP UNCOMPRESSED CACHE,
        SYSTEM DROP UNCOMPRESSED,
        SYSTEM FETCHES,
        SYSTEM FLUSH DISTRIBUTED,
        SYSTEM FLUSH LOGS,
        SYSTEM FLUSH,
        SYSTEM KILL,
        SYSTEM MERGES,
        SYSTEM MOVES,
        SYSTEM RELOAD CONFIG,
        SYSTEM RELOAD DICTIONARIES,
        SYSTEM RELOAD DICTIONARY,
        SYSTEM RELOAD EMBEDDED DICTIONARIES,
        SYSTEM RELOAD,
        SYSTEM REPLICATED SENDS,
        SYSTEM REPLICATION QUEUES,
        SYSTEM RESTART REPLICA,
        SYSTEM SENDS,
        SYSTEM SHUTDOWN,
        SYSTEM START DISTRIBUTED SENDS,
        SYSTEM START FETCHES,
        SYSTEM START MERGES,
        SYSTEM START MOVES,
        SYSTEM START REPLICATED SENDS,
        SYSTEM START REPLICATION QUEUES,
        SYSTEM START SENDS,
        SYSTEM START TTL MERGES,
        SYSTEM STOP DISTRIBUTED SENDS,
        SYSTEM STOP FETCHES,
        SYSTEM STOP MERGES,
        SYSTEM STOP MOVES,
        SYSTEM STOP REPLICATED SENDS,
        SYSTEM STOP REPLICATION QUEUES,
        SYSTEM STOP SENDS,
        SYSTEM STOP TTL MERGES,
        SYSTEM SYNC REPLICA,
        SYSTEM TTL MERGES,
        TABLE ENGINE,
        TRUNCATE,
        UPDATE,
        URL,
        USAGE
      ON *.*
      FROM test_user1, test_user2, CURRENT_USER;
    `);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      REVOKE SELECT ON * FROM ALL;  
    `);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      REVOKE SELECT ON * FROM ALL EXCEPT CURRENT_USER, test_user1, test_user2;  
    `);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      REVOKE test_role FROM CURRENT_ROLE, test_user1, test_user2;
    `);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      REVOKE test_role FROM ALL;
    `);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      REVOKE test_role FROM ALL EXCEPT CURRENT_USER, test_user1, test_user2;
    `);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      REVOKE test_role1, test_role2 FROM CURRENT_USER, test_user1, test_user2;
    `);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest privileges', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'ADMIN'},
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
        {value: 'USAGE'},
        {value: 'GRANT'},
    ]);
});

test('should suggest keywords after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE ON |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FROM',
        },
        {
            value: 'CLUSTER',
        },
    ]);
});

test('should suggest another privileges after comma', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE SELECT, |');
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

test('should suggest keywords after OPTION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE ADMIN OPTION |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FOR',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after GRANT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE GRANT |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FROM',
        },
        {
            value: 'OPTION',
        },
    ]);
});

test('should suggest keywords after OPTION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE GRANT OPTION |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FOR',
        },
    ]);
});

test('should suggest keywords after identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE SELECT ON *.* |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FROM',
        },
    ]);
});

test('should suggest keywords after FROM', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE SELECT ON *.* FROM |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'ALL',
        },
        {
            value: 'CURRENT_USER',
        },
    ]);
});

test('should suggest keywords after ALL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE SELECT ON *.* FROM ALL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'EXCEPT',
        },
    ]);
});

test('should suggest keywords after ADMIN', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('REVOKE ADMIN |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FROM',
        },
        {
            value: 'OPTION',
        },
    ]);
});

test('should suggest current user after EXCEPT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'REVOKE SELECT ON *.* FROM ALL EXCEPT |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CURRENT_USER',
        },
    ]);
});
