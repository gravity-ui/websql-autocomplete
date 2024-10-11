import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            START DISTRIBUTED SENDS,
            START FETCHES,
            START MERGES,
            START MOVES,
            START REPLICATED SENDS,
            START REPLICATION QUEUES,
            START SENDS,
            START TTL MERGES
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after START', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT START |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
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
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT START DISTRIBUTED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SENDS',
        },
    ]);
});

test('should suggest keywords after REPLICATED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT START REPLICATED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SENDS',
        },
    ]);
});

test('should suggest keywords after REPLICATION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT START REPLICATION |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'QUEUES',
        },
    ]);
});

test('should suggest keywords after TTL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT START TTL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'MERGES',
        },
    ]);
});
