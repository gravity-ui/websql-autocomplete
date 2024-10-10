import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            KILL QUERY
          ON test_db.test_table
          TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after KILL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT KILL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'QUERY',
        },
    ]);
});
