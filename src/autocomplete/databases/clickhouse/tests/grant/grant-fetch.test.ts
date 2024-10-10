import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            FETCH PART,
            FETCH PARTITION
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
            FETCH PART,
            FETCH PARTITION
          ON test_table
          TO test_user1;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
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
