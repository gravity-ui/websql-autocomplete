import {parseClickHouseQueryWithCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        `
					GRANT ON CLUSTER cluster_name
						SHOW,
						SHOW DATABASES,
						SHOW TABLES,
						SHOW COLUMNS,
						SHOW DICTIONARIES
					ON *.* TO test_user1, user2
						WITH GRANT OPTION
						WITH REPLACE OPTION;|
				`,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT SHOW ON table TO test_user1;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after SHOW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'DATABASES',
        },
        {
            value: 'DICTIONARIES',
        },
        {
            value: 'TABLES',
        },
        {
            value: 'COLUMNS',
        },
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after table identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW ON table |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
    ]);
});

test('should suggest current user', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW ON table TO |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CURRENT_USER',
        },
    ]);
});

test('should suggest keywords after user identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW ON table TO user |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'WITH',
        },
    ]);
});

test('should suggest keywords after WITH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT SHOW ON table TO user WITH |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'REPLACE',
        },
        {
            value: 'GRANT',
        },
    ]);
});

test('should suggest keywords after WITH GRANT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT SHOW ON table TO user WITH GRANT |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'OPTION',
        },
    ]);
});

test('should suggest keywords after WITH REPLACE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT SHOW ON table TO user WITH REPLACE |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'OPTION',
        },
    ]);
});
