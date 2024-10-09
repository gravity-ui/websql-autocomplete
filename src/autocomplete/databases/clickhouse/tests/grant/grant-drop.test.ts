import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            DROP,
            DROP DATABASE,
            DROP TABLE,
            DROP VIEW,
            DROP DICTIONARY
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT DROP ON test_table TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CONSTRAINT',
        },
        {
            value: 'INDEX',
        },
        {
            value: 'COLUMN',
        },
        {
            value: 'DATABASE',
        },
        {
            value: 'DICTIONARY',
        },
        {
            value: 'TABLE',
        },
        {
            value: 'VIEW',
        },
        {
            value: 'ON',
        },
    ]);
});
