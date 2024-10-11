import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
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
            DROP NAMED COLLECTION
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
        {
            value: 'NAMED',
        },
        {
            value: 'DNS',
        },
        {
            value: 'MARKS',
        },
        {
            value: 'UNCOMPRESSED',
        },
        {
            value: 'MARK',
        },
        {
            value: 'CACHE',
        },
        {
            value: 'PROFILE',
        },
        {
            value: 'SETTINGS',
        },
        {
            value: 'QUOTA',
        },
        {
            value: 'POLICY',
        },
        {
            value: 'ROW',
        },
        {
            value: 'ROLE',
        },
        {
            value: 'USER',
        },
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

test('should suggest keywords after ROW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP ROW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'POLICY',
        },
    ]);
});

test('should suggest keywords after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP SETTINGS |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'PROFILE',
        },
    ]);
});

test('should suggest keywords after DNS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP DNS |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CACHE',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after MARK', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP MARK |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CACHE',
        },
    ]);
});

test('should suggest keywords after UNCOMPRESSED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP UNCOMPRESSED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CACHE',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after NAMED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT DROP NAMED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'COLLECTION',
        },
    ]);
});
