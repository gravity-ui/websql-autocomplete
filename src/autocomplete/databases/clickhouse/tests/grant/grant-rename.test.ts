import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            RENAME COLUMN
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'GRANT RENAME COLUMN ON test_table TO test_user1;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after RENAME', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT RENAME |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'COLUMN',
        },
    ]);
});
