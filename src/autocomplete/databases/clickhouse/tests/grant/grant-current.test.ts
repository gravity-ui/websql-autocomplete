import {TableOrViewSuggestion} from '../../../../shared';
import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT CURRENT GRANTS
          (
              SELECT(test_column, test_column2),
              INSERT(test_column, test_column2)

              ON *.*
          )
          TO test_user1, test_user2, CURRENT_USER
          WITH GRANT OPTION
          WITH REPLACE OPTION;
      `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT CURRENT GRANTS
              ON *.*
          TO test_user1, test_user2, CURRENT_USER
          WITH GRANT OPTION
          WITH REPLACE OPTION;
      `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after CURRENT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CURRENT |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'GRANTS',
        },
        {
            value: 'TO',
        },
    ]);
});

test('should suggest privileges', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CURRENT GRANTS(|');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SELECT',
        },
        {
            value: 'INSERT',
        },
        {
            value: 'CREATE',
        },
        {
            value: 'DROP',
        },
        {
            value: 'TRUNCATE',
        },
        {
            value: 'KILL',
        },
        {
            value: 'OPTIMIZE',
        },
        {
            value: 'SHOW',
        },
        {
            value: 'INTROSPECTION',
        },
        {
            value: 'ADDRESSTOLINE',
        },
        {
            value: 'ADDRESSTOLINEWITHINLINES',
        },
        {
            value: 'ADDRESSTOSYMBOL',
        },
        {
            value: 'DEMANGLE',
        },
        {
            value: 'SOURCES',
        },
        {
            value: 'FILE',
        },
        {
            value: 'URL',
        },
        {
            value: 'REMOTE',
        },
        {
            value: 'MYSQL',
        },
        {
            value: 'ODBC',
        },
        {
            value: 'JDBC',
        },
        {
            value: 'HDFS',
        },
        {
            value: 'S3',
        },
        {
            value: 'AZURE',
        },
        {
            value: 'HIVE',
        },
        {
            value: 'MONGO',
        },
        {
            value: 'POSTGRES',
        },
        {
            value: 'REDIS',
        },
        {
            value: 'SQLITE',
        },
        {
            value: 'DICTGET',
        },
        {
            value: 'DICTGETHIERARCHY',
        },
        {
            value: 'DICTHAS',
        },
        {
            value: 'DICTISIN',
        },
        {
            value: 'ALTER',
        },
        {
            value: 'DELETE',
        },
        {
            value: 'UPDATE',
        },
        {
            value: 'ADD',
        },
        {
            value: 'CLEAR',
        },
        {
            value: 'COMMENT',
        },
        {
            value: 'MODIFY',
        },
        {
            value: 'RENAME',
        },
        {
            value: 'MATERIALIZE',
        },
        {
            value: 'INDEX',
        },
        {
            value: 'CONSTRAINT',
        },
        {
            value: 'MOVE',
        },
        {
            value: 'FETCH',
        },
        {
            value: 'FREEZE',
        },
        {
            value: 'REFRESH',
        },
        {
            value: 'ALL',
        },
        {
            value: 'NONE',
        },
        {
            value: 'DISPLAYSECRETSINSHOWANDSELECT',
        },
        {
            value: 'ACCESS',
        },
        {
            value: 'ROLE',
        },
        {
            value: 'SHOW_USERS',
        },
        {
            value: 'SHOW_ROLES',
        },
        {
            value: 'SHOW_ROW_POLICIES',
        },
        {
            value: 'SHOW_QUOTAS',
        },
        {
            value: 'SHOW_SETTINGS_PROFILES',
        },
        {
            value: 'ALLOW',
        },
        {
            value: 'SQL',
        },
        {
            value: 'SECURITY',
        },
        {
            value: 'SYSTEM',
        },
        {
            value: 'SHUTDOWN',
        },
        {
            value: 'RELOAD',
        },
        {
            value: 'START',
        },
        {
            value: 'STOP',
        },
        {
            value: 'SYNC',
        },
        {
            value: 'RESTART',
        },
        {
            value: 'FLUSH',
        },
        {
            value: 'NAMED',
        },
        {
            value: 'USE',
        },
        {
            value: 'TABLE',
        },
        {
            value: 'ADMIN',
        },
    ]);
});

test('should suggest tables or views', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CURRENT GRANTS ON |');
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest databases', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CURRENT GRANTS ON |');
    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should suggest tables or views', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      GRANT CURRENT GRANTS
          (
              SELECT(test_column, test_column2),
              INSERT(test_column, test_column2)

              ON |`);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest databases', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(`
      GRANT CURRENT GRANTS
          (
              SELECT(test_column, test_column2),
              INSERT(test_column, test_column2)

              ON |`);
    expect(autocompleteResult.suggestDatabases).toEqual(true);
});
