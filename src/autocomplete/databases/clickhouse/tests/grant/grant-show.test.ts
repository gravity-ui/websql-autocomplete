import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            SHOW,
            SHOW DATABASES,
            SHOW TABLES,
            SHOW COLUMNS,
            SHOW DICTIONARIES
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT SHOW ON test_table TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after SHOW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
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
