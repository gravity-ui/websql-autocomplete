import {parsePostgreSqlQueryWithoutCursor} from '../..';

test('should not report errors with newlines \n', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor('SELECT *\n\n\nFROM test_table');

    expect(parseResult.errors).toHaveLength(0);
});

test('should not report errors with newlines \r\n', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor('SELECT *\r\n\r\n\r\nFROM test_table');

    expect(parseResult.errors).toHaveLength(0);
});
