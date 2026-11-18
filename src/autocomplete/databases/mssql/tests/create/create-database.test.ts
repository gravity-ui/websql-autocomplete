import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';

test('should not suggest existing databases after CREATE DATABASE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE DATABASE |');

    expect(autocompleteResult.suggestDatabases).toEqual(false);
});

test('should suggest properly after database name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE DATABASE test_database |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([
            {value: 'ON'},
            {value: 'LOG'},
            {value: 'COLLATE'},
            {value: 'WITH'},
            {value: 'CONTAINMENT'},
        ]),
    );
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'CREATE DATABASE test_database COLLATE SQL_Latin1_General_CP1_CI_AS;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
