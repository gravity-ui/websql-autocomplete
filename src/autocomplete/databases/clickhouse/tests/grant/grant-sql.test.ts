import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            SQL SECURITY NONE
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after SQL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SQL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
        {
            value: 'SECURITY',
        },
    ]);
});

test('should suggest keywords after SECURITY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SQL SECURITY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'NONE',
        },
    ]);
});
