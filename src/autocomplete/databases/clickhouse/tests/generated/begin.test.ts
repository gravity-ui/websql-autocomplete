/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors begin: 1', () => {
    const query = `BEGIN TRANSACTION;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors begin: 2', () => {
    const query = `begin transaction; -- { serverError INVALID_TRANSACTION } rollback;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
