import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
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
            ALTER LIVE VIEW REFRESH
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
            ALTER LIVE VIEW REFRESH
          ON test_table
          TO test_user1;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER |');
    expect(autocompleteResult.suggestKeywords).toEqual([
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
            value: 'VIEW',
        },
        {
            value: 'LIVE',
        },
        {
            value: 'FREEZE',
        },
        {
            value: 'MOVE',
        },
        {
            value: 'FETCH',
        },
        {
            value: 'MODIFY',
        },
        {
            value: 'SETTING',
        },
        {
            value: 'TTL',
        },
        {
            value: 'MATERIALIZE',
        },
        {
            value: 'CONSTRAINT',
        },
        {
            value: 'ADD',
        },
        {
            value: 'DROP',
        },
        {
            value: 'ORDER',
        },
        {
            value: 'SAMPLE',
        },
        {
            value: 'INDEX',
        },
        {
            value: 'CLEAR',
        },
        {
            value: 'COLUMN',
        },
        {
            value: 'COMMENT',
        },
        {
            value: 'RENAME',
        },
        {
            value: 'DELETE',
        },
        {
            value: 'UPDATE',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after ALTER MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER MODIFY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SETTING',
        },
        {
            value: 'TTL',
        },
        {
            value: 'ORDER',
        },
        {
            value: 'SAMPLE',
        },
        {
            value: 'COLUMN',
        },
    ]);
});

test('should suggest keywords after ALTER ADD', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER ADD |');
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
    ]);
});

test('should suggest keywords after ALTER DROP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER DROP |');
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
    ]);
});

test('should suggest keywords after ALTER ORDER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER ORDER |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'BY',
        },
    ]);
});

test('should suggest keywords after ALTER SAMPLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER SAMPLE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'BY',
        },
    ]);
});

test('should suggest keywords after ALTER MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER MODIFY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SETTING',
        },
        {
            value: 'TTL',
        },
        {
            value: 'ORDER',
        },
        {
            value: 'SAMPLE',
        },
        {
            value: 'COLUMN',
        },
    ]);
});

test('should suggest keywords after ALTER MODIFY ORDER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER MODIFY ORDER |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'BY',
        },
    ]);
});

test('should suggest keywords after ALTER MODIFY SAMPLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER MODIFY SAMPLE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'BY',
        },
    ]);
});

test('should suggest keywords after ALTER MATERIALIZE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER MATERIALIZE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TTL',
        },
        {
            value: 'INDEX',
        },
    ]);
});

test('should suggest keywords after ALTER COMMENT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER COMMENT |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'COLUMN',
        },
    ]);
});

test('should suggest keywords after ALTER CLEAR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER CLEAR |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'INDEX',
        },
        {
            value: 'COLUMN',
        },
    ]);
});

test('should suggest keywords after ALTER RENAME', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER RENAME |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'COLUMN',
        },
    ]);
});

test('should suggest keywords after ALTER MOVE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER MOVE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'PARTITION',
        },
        {
            value: 'PART',
        },
    ]);
});

test('should suggest keywords after ALTER FETCH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER FETCH |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'PARTITION',
        },
        {
            value: 'PART',
        },
    ]);
});

test('should suggest keywords after ALTER FREEZE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER FREEZE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'PARTITION',
        },
    ]);
});

test('should suggest keywords after ALTER VIEW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER VIEW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'MODIFY',
        },
        {
            value: 'REFRESH',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after ALTER LIVE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER LIVE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'VIEW',
        },
    ]);
});

test('should suggest keywords after ALTER LIVE VIEW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER LIVE VIEW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'REFRESH',
        },
    ]);
});

test('should suggest keywords after ALTER TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER TABLE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'MODIFY',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after ALTER VIEW MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER VIEW MODIFY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SQL',
        },
        {
            value: 'QUERY',
        },
    ]);
});

test('should suggest keywords after ALTER VIEW MODIFY SQL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER VIEW MODIFY SQL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SECURITY',
        },
    ]);
});

test('should suggest keywords after ALTER TABLE MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER TABLE MODIFY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SQL',
        },
        {
            value: 'QUERY',
        },
    ]);
});

test('should suggest keywords after ALTER TABLE MODIFY SQL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER TABLE MODIFY SQL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SECURITY',
        },
    ]);
});

test('should suggest keywords after ALTER ROW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER ROW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'POLICY',
        },
    ]);
});

test('should suggest keywords after ALTER SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER SETTINGS |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'PROFILE',
        },
        {
            value: 'ON',
        },
    ]);
});
