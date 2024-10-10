import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            NAMED COLLECTION ADMIN,
            NAMED COLLECTION USAGE,
            NAMED COLLECTION,
            NAMED COLLECTION CONTROL,
            USE NAMED COLLECTION
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after NAMED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT NAMED |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'COLLECTION',
        },
    ]);
});

test('should suggest keywords after COLLECTION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT COLLECTION |');
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
