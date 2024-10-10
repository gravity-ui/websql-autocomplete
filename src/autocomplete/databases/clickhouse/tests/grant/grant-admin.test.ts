import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            ADMIN OPTION
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after ADMIN', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ADMIN |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'OPTION',
        },
    ]);
});
