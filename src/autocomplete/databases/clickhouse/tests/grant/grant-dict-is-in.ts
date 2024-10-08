import {parseClickHouseQueryWithCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        `
					GRANT ON CLUSTER cluster_name
						DICTGETHIERARCHY
					ON *.* TO test_user1, user2
						WITH GRANT OPTION
						WITH REPLACE OPTION;|
				`,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT DICTGETHIERARCHY ON table TO test_user1;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
