import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            RELOAD CONFIG,
            RELOAD DICTIONARIES,
            RELOAD DICTIONARY,
            RELOAD EMBEDDED DICTIONARIES
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after RELOAD', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT RELOAD |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
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
    ]);
});

test('should suggest keywords after EMBEDDED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT RELOAD EMBEDDED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'DICTIONARIES',
        },
    ]);
});
