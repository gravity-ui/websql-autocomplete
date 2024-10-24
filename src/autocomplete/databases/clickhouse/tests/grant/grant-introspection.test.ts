import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            INTROSPECTION,
            INTROSPECTION FUNCTIONS
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after INTROSPECTION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT INTROSPECTION |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
        {
            value: 'FUNCTIONS',
        },
        {
            value: 'ON',
        },
    ]);
});
