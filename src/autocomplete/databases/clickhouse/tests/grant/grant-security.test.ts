import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            SECURITY NONE
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
            SECURITY NONE
          ON test_table TO test_user1;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after SECURITY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SECURITY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'NONE',
        },
    ]);
});
