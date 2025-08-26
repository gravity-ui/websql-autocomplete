import {parseTrinoQueryWithoutCursor} from '../index';

test('should not report errors with newlines \n', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT *\n\n\nFROM test_catalog.test_schema.test_table',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors with newlines \r\n', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT *\r\n\r\n\r\nFROM test_catalog.test_schema.test_table',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
