import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
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
            CREATE NAMED COLLECTION
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT CREATE ON test_table TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after CREATE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'NAMED',
        },
        {
            value: 'SQL',
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
            value: 'TABLE',
        },
        {
            value: 'TEMPORARY',
        },
        {
            value: 'ARBITRARY',
        },
        {
            value: 'DATABASE',
        },
        {
            value: 'DICTIONARY',
        },
        {
            value: 'FUNCTION',
        },
        {
            value: 'VIEW',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after ARBITRARY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE ARBITRARY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TEMPORARY',
        },
    ]);
});

test('should suggest keywords after TEMPORARY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE TEMPORARY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TABLE',
        },
    ]);
});

test('should suggest keywords after ARBITRARY TEMPORARY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE ARBITRARY TEMPORARY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TABLE',
        },
    ]);
});

test('should suggest keywords after ARBITRARY TEMPORARY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE ARBITRARY TEMPORARY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TABLE',
        },
    ]);
});

test('should suggest keywords after ROW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE ROW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'POLICY',
        },
    ]);
});

test('should suggest keywords after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE SETTINGS |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'PROFILE',
        },
    ]);
});

test('should suggest keywords after SQL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE SQL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SECURITY',
        },
    ]);
});

test('should suggest keywords after SECURITY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE SQL SECURITY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'NONE',
        },
    ]);
});

test('should suggest keywords after NAMED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CREATE NAMED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'COLLECTION',
        },
    ]);
});
