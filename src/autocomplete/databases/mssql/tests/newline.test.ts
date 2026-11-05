import {parseMsSqlQueryWithoutCursor} from '../index.js';

test('should not report errors with newlines \n', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor('SELECT *\n\n\nFROM test_table');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors with newlines \r\n', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor('SELECT *\r\n\r\n\r\nFROM test_table');

    expect(autocompleteResult.errors).toHaveLength(0);
});
