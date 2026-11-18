import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';

test('should suggest databases after ALTER DATABASE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER DATABASE |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([{value: 'CURRENT'}]),
    );
    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'ALTER DATABASE test_database MODIFY NAME = test_database_2;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
