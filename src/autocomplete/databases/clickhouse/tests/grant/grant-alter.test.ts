import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            ALTER(test_column1, test_column2),
            ALTER TABLE,
            ALTER UPDATE(test_column1, test_column2),
            ALTER DELETE(test_column1, test_column2),
            UPDATE(test_column1, test_column2),
            DELETE(test_column1, test_column2),
            ALTER COLUMN(test_column1, test_column2),
            ALTER ADD COLUMN(test_column1, test_column2),
            ALTER DROP COLUMN(test_column1, test_column2),
            ALTER MODIFY COLUMN(test_column1, test_column2),
            ALTER COMMENT COLUMN(test_column1, test_column2),
            ALTER CLEAR COLUMN(test_column1, test_column2),
            ALTER RENAME COLUMN(test_column1, test_column2),
            ADD COLUMN(test_column1, test_column2),
            DROP COLUMN(test_column1, test_column2),
            MODIFY COLUMN(test_column1, test_column2),
            COMMENT COLUMN(test_column1, test_column2),
            CLEAR COLUMN(test_column1, test_column2),
            RENAME COLUMN(test_column1, test_column2),
            ALTER INDEX,
            ALTER ORDER BY,
            ALTER SAMPLE BY,
            ALTER MODIFY ORDER BY,
            ALTER MODIFY SAMPLE BY,
            ALTER ADD INDEX,
            ALTER DROP INDEX,
            ALTER MATERIALIZE INDEX,
            ALTER CLEAR INDEX,
            INDEX,
            MODIFY ORDER BY,
            MODIFY SAMPLE BY,
            ADD INDEX,
            DROP INDEX,
            MATERIALIZE INDEX,
            CLEAR INDEX,
            ALTER CONSTRAINT,
            ALTER ADD CONSTRAINT,
            ALTER DROP CONSTRAINT,
            CONSTRAINT,
            ADD CONSTRAINT,
            DROP CONSTRAINT,
            ALTER TTL,
            ALTER MATERIALIZE TTL,
            ALTER MODIFY TTL,
            MODIFY TTL,
            MATERIALIZE TTL,
            ALTER SETTINGS,
            ALTER SETTING,
            ALTER MODIFY SETTING,
            MODIFY SETTING,
            ALTER MOVE PARTITION,
            ALTER MOVE PART,
            MOVE PARTITION,
            MOVE PART,
            ALTER FETCH PARTITION,
            ALTER FETCH PART,
            FETCH PARTITION,
            FETCH PART,
            ALTER FREEZE PARTITION,
            FREEZE PARTITION,
            ALTER VIEW,
            ALTER VIEW REFRESH,
            ALTER VIEW MODIFY QUERY,
            ALTER LIVE VIEW REFRESH,
            REFRESH VIEW,
            ALTER TABLE MODIFY QUERY
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
            UPDATE,
            DELETE,
            ALTER COLUMN,
            ALTER ADD COLUMN,
            ALTER DROP COLUMN,
            ALTER MODIFY COLUMN,
            ALTER COMMENT COLUMN,
            ALTER CLEAR COLUMN,
            ALTER RENAME COLUMN,
            ADD COLUMN,
            DROP COLUMN,
            MODIFY COLUMN,
            COMMENT COLUMN,
            CLEAR COLUMN,
            RENAME COLUMN,
            ALTER INDEX,
            ALTER ORDER BY,
            ALTER SAMPLE BY,
            ALTER MODIFY ORDER BY,
            ALTER MODIFY SAMPLE BY,
            ALTER ADD INDEX,
            ALTER DROP INDEX,
            ALTER MATERIALIZE INDEX,
            ALTER CLEAR INDEX,
            INDEX,
            MODIFY ORDER BY,
            MODIFY SAMPLE BY,
            ADD INDEX,
            DROP INDEX,
            MATERIALIZE INDEX,
            CLEAR INDEX,
            ALTER CONSTRAINT,
            ALTER ADD CONSTRAINT,
            ALTER DROP CONSTRAINT,
            CONSTRAINT,
            ADD CONSTRAINT,
            DROP CONSTRAINT,
            ALTER TTL,
            ALTER MATERIALIZE TTL,
            ALTER MODIFY TTL,
            MODIFY TTL,
            MATERIALIZE TTL,
            ALTER SETTINGS,
            ALTER SETTING,
            ALTER MODIFY SETTING,
            MODIFY SETTING,
            ALTER MOVE PARTITION,
            ALTER MOVE PART,
            MOVE PARTITION,
            MOVE PART,
            ALTER FETCH PARTITION,
            ALTER FETCH PART,
            FETCH PARTITION,
            FETCH PART,
            ALTER FREEZE PARTITION,
            FREEZE PARTITION,
            ALTER VIEW,
            ALTER VIEW REFRESH,
            ALTER VIEW MODIFY QUERY,
            ALTER LIVE VIEW REFRESH,
            REFRESH VIEW,
            ALTER TABLE MODIFY QUERY
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
            value: 'SETTINGS',
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

test('should suggest keywords after MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MODIFY |');
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

test('should suggest keywords after MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MODIFY |');
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

test('should suggest keywords after MATERIALIZE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MATERIALIZE |');
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

test('should suggest keywords after COMMENT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT COMMENT |');
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

test('should suggest keywords after CLEAR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT CLEAR |');
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

test('should suggest keywords after RENAME', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT RENAME |');
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

test('should suggest keywords after MOVE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MOVE |');
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

test('should suggest keywords after FETCH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT FETCH |');
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

test('should suggest keywords after FREEZE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT FREEZE |');
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

test('should suggest keywords after REFRESH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT REFRESH |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'VIEW',
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
            value: 'QUERY',
        },
    ]);
});

test('should suggest keywords after ALTER TABLE MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALTER TABLE MODIFY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'QUERY',
        },
    ]);
});
