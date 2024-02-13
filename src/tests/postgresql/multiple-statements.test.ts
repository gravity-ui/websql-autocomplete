import {parsePostgreSqlQueryWithoutCursor} from '../..';

test('should not report errors on multiple statements', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    expect(parseResult.errors).toHaveLength(0);
});
