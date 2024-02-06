import {groupParseSqlWithoutCursor} from '../lib';

test('should not report errors on multiple statements', () => {
    const parseResults = groupParseSqlWithoutCursor(`
        SELECT * FROM test_table;
        SELECT * FROM test_table;
        SELECT * FROM test_table;
    `);

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
