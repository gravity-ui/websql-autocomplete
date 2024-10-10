import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          GRANT ON CLUSTER test_cluster
            MODIFY COLUMN,
            MODIFY ORDER BY,
            MODIFY SAMPLE BY,
            MODIFY SETTING,
            MODIFY TTL
          ON *.* TO test_user1, test_user2
          WITH GRANT OPTION
          WITH REPLACE OPTION;
        `,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after MODIFY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MODIFY |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
        {
            value: 'SETTING',
        },
        {
            value: 'TTL',
        },
        {
            value: 'ORDER',
        },
        {
            value: 'SAMPLE',
        },
        {
            value: 'COLUMN',
        },
    ]);
});

test('should suggest keywords after ORDER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MODIFY ORDER |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'BY',
        },
    ]);
});

test('should suggest keywords after SAMPLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT MODIFY SAMPLE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'BY',
        },
    ]);
});
