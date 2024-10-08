import {parseClickHouseQueryWithCursor} from '../../index';

// TODO: support grant statement

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER cluster_name CREATE, SELECT(column1, column2) ON db.table TO test_user1, user2 WITH GRANT OPTION WITH REPLACE OPTION;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER cluster_name CREATE, SELECT(column1, column2) ON *.* TO test_user1;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER cluster_name CREATE, SELECT(column1, column2) ON *.table TO test_user1;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT ON CLUSTER cluster_name CREATE, SELECT(column1, column2) ON * TO test_user1;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest current user', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT ON table TO |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CURRENT_USER',
        },
    ]);
});

test('should suggest privileges after GRANT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT |');
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
            value: 'ON',
        },
    ]);
});
test('should suggest another privileges after comma', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SELECT, |');
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
    ]);
});

test('should suggest cluster', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ON |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CLUSTER',
        },
    ]);
});
