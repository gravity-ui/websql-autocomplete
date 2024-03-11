import {parseYQQueryWithoutCursor} from '../../../../autocomplete';

test('should not report errors with newlines \n', () => {
    const autocompleteResult = parseYQQueryWithoutCursor('SELECT *\n\n\nFROM test_table');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors with newlines \r\n', () => {
    const autocompleteResult = parseYQQueryWithoutCursor('SELECT *\r\n\r\n\r\nFROM test_table');

    expect(autocompleteResult.errors).toHaveLength(0);
});
