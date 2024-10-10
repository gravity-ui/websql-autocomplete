import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            ALLOW SQL SECURITY NONE
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
            ALLOW SQL SECURITY NONE
          ON test_table TO test_user1;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after ALLOW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALLOW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SQL',
        },
    ]);
});

test('should suggest keywords after SQL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALLOW SQL |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'SECURITY',
        },
    ]);
});

test('should suggest keywords after SECURITY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT ALLOW SQL SECURITY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'NONE',
        },
    ]);
});
