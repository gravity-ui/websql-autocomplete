import {groupParseSqlWithoutCursor} from '../lib';

test('should not report errors with newlines \n', () => {
    const parseResults = groupParseSqlWithoutCursor('SELECT *\n\n\nFROM test_table');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});

test('should not report errors with newlines \r\n', () => {
    const parseResults = groupParseSqlWithoutCursor('SELECT *\r\n\r\n\r\nFROM test_table');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
