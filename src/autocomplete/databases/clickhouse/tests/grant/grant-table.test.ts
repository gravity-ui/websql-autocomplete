import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            TABLE ENGINE
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT TABLE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
        {
            value: 'ENGINE',
        },
    ]);
});
