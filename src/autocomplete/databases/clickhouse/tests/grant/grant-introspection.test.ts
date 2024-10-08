import {parseClickHouseQueryWithCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        `
					GRANT ON CLUSTER test_cluster
						INTROSPECTION,
						INTROSPECTION FUNCTIONS
					ON *.* TO test_user1, test_user2
					WITH GRANT OPTION
					WITH REPLACE OPTION;|
				`,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT INTROSPECTION ON test_table TO test_user1;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after INTROSPECTION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT INTROSPECTION |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'FUNCTIONS',
        },
        {
            value: 'ON',
        },
    ]);
});
