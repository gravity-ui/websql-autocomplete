import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            MOVE PARTITION,
            MOVE PART
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after MOVE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MOVE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'PARTITION',
        },
        {
            value: 'PART',
        },
    ]);
});
