import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should not report errors with newlines \n', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('SELECT *\n\n\nFROM test_table');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors with newlines \r\n', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'SELECT *\r\n\r\n\r\nFROM test_table',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
