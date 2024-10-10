import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            STOP DISTRIBUTED SENDS,
            STOP FETCHES,
            STOP MERGES,
            STOP MOVES,
            STOP REPLICATED SENDS,
            STOP REPLICATION QUEUES,
            STOP SENDS,
            STOP TTL MERGES
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after STOP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT STOP |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'REPLICATION',
        },
        {
            value: 'DISTRIBUTED',
        },
        {
            value: 'REPLICATED',
        },
        {
            value: 'FETCHES',
        },
        {
            value: 'SENDS',
        },
        {
            value: 'MOVES',
        },
        {
            value: 'MERGES',
        },
        {
            value: 'TTL',
        },
    ]);
});

test('should suggest keywords after DISTRIBUTED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT STOP DISTRIBUTED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SENDS',
        },
    ]);
});

test('should suggest keywords after REPLICATED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT STOP REPLICATED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SENDS',
        },
    ]);
});

test('should suggest keywords after REPLICATION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT STOP REPLICATION |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'QUEUES',
        },
    ]);
});

test('should suggest keywords after TTL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT STOP TTL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'MERGES',
        },
    ]);
});
