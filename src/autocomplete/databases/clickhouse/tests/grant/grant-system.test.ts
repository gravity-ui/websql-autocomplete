import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            SYSTEM,
            SYSTEM DISTRIBUTED SENDS,
            SYSTEM DROP CACHE,
            SYSTEM DROP DNS CACHE,
            SYSTEM DROP DNS,
            SYSTEM DROP MARK CACHE,
            SYSTEM DROP MARK,
            SYSTEM DROP UNCOMPRESSED CACHE,
            SYSTEM DROP UNCOMPRESSED,
            SYSTEM FETCHES,
            SYSTEM FLUSH DISTRIBUTED,
            SYSTEM FLUSH LOGS,
            SYSTEM FLUSH,
            SYSTEM KILL,
            SYSTEM MERGES,
            SYSTEM MOVES,
            SYSTEM RELOAD CONFIG,
            SYSTEM RELOAD DICTIONARIES,
            SYSTEM RELOAD DICTIONARY,
            SYSTEM RELOAD EMBEDDED DICTIONARIES,
            SYSTEM RELOAD,
            SYSTEM REPLICATED SENDS,
            SYSTEM REPLICATION QUEUES,
            SYSTEM RESTART REPLICA,
            SYSTEM SENDS,
            SYSTEM SHUTDOWN,
            SYSTEM START DISTRIBUTED SENDS,
            SYSTEM START FETCHES,
            SYSTEM START MERGES,
            SYSTEM START MOVES,
            SYSTEM START REPLICATED SENDS,
            SYSTEM START REPLICATION QUEUES,
            SYSTEM START SENDS,
            SYSTEM START TTL MERGES,
            SYSTEM STOP DISTRIBUTED SENDS,
            SYSTEM STOP FETCHES,
            SYSTEM STOP MERGES,
            SYSTEM STOP MOVES,
            SYSTEM STOP REPLICATED SENDS,
            SYSTEM STOP REPLICATION QUEUES,
            SYSTEM STOP SENDS,
            SYSTEM STOP TTL MERGES,
            SYSTEM SYNC REPLICA,
            SYSTEM TTL MERGES
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after SYSTEM', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FLUSH',
        },
        {
            value: 'SYNC',
        },
        {
            value: 'RESTART',
        },
        {
            value: 'REPLICATION',
        },
        {
            value: 'START',
        },
        {
            value: 'STOP',
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
        {
            value: 'RELOAD',
        },
        {
            value: 'DROP',
        },
        {
            value: 'KILL',
        },
        {
            value: 'SHUTDOWN',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after DISTRIBUTED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM DISTRIBUTED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SENDS',
        },
    ]);
});

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM DROP |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'DNS',
        },
        {
            value: 'MARK',
        },
        {
            value: 'UNCOMPRESSED',
        },
        {
            value: 'CACHE',
        },
    ]);
});

test('should suggest keywords after FLUSH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM FLUSH |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'DISTRIBUTED',
        },
        {
            value: 'LOGS',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after RELOAD', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM RELOAD |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'DICTIONARIES',
        },
        {
            value: 'EMBEDDED',
        },
        {
            value: 'DICTIONARY',
        },
        {
            value: 'CONFIG',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after EMBEDDED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM RELOAD EMBEDDED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'DICTIONARIES',
        },
    ]);
});

test('should suggest keywords after REPLICATED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM REPLICATED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SENDS',
        },
    ]);
});

test('should suggest keywords after REPLICATION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM REPLICATION |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'QUEUES',
        },
    ]);
});

test('should suggest keywords after RESTART', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM RESTART |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'REPLICA',
        },
    ]);
});

test('should suggest keywords after START', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM START |');
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

test('should suggest keywords after STOP', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM STOP |');
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

test('should suggest keywords after SYNC', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM SYNC |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'REPLICA',
        },
    ]);
});

test('should suggest keywords after TTL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SYSTEM TTL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'MERGES',
        },
    ]);
});
