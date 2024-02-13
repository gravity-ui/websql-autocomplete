import {parseMySqlQueryWithoutCursor} from '../..';

test('should not report errors on multiple statements', () => {
    const parseResult = parseMySqlQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(parseResult.errors).toHaveLength(0);
});
