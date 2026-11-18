import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';

test('should suggest databases after USE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('USE |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor('USE [test_database];');

    expect(autocompleteResult.errors).toHaveLength(0);
});
