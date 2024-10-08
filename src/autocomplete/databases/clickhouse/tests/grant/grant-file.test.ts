import {parseClickHouseQueryWithCursor} from '../../index';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        `
					GRANT ON CLUSTER cluster_name
						FILE
					ON *.* TO test_user1, user2
						WITH GRANT OPTION
						WITH REPLACE OPTION;|
				`,
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors without optional parameters', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT FILE ON table TO test_user1;|',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after FILE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT FILE |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'ON',
        },
    ]);
});

test('should suggest keywords after table identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT FILE ON table |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'TO',
        },
    ]);
});

test('should suggest current user', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT FILE ON table TO |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'CURRENT_USER',
        },
    ]);
});

test('should suggest keywords after user identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT FILE ON table TO user |');
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'WITH',
        },
    ]);
});

test('should suggest keywords after WITH', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT FILE ON table TO user WITH |');
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
        'GRANT FILE ON table TO user WITH GRANT |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'OPTION',
        },
    ]);
});

test('should suggest keywords after WITH REPLACE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'GRANT FILE ON table TO user WITH REPLACE |',
    );
    expect(autocompleteResult.suggestKeywords).toEqual([
        {
            value: 'OPTION',
        },
    ]);
});
