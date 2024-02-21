import {separateQueryAndCursor} from './test-lib';

test('should work at the query end', () => {
    const [query, cursor] = separateQueryAndCursor('SELECT |');

    expect(query).toEqual('SELECT ');
    expect(cursor).toEqual({
        line: 1,
        column: 8,
    });
});

test('should work at the query middle', () => {
    const [query, cursor] = separateQueryAndCursor('SELECT * | test_table;');

    expect(query).toEqual('SELECT *  test_table;');
    expect(cursor).toEqual({
        line: 1,
        column: 10,
    });
});

test('should work at the query beginning', () => {
    const [query, cursor] = separateQueryAndCursor('| SELECT');

    expect(query).toEqual(' SELECT');
    expect(cursor).toEqual({
        line: 1,
        column: 1,
    });
});

test('should separate query with cursor in the empty query', () => {
    const [query, cursor] = separateQueryAndCursor('|');

    expect(query).toEqual('');
    expect(cursor).toEqual({
        line: 1,
        column: 1,
    });
});

test('should not work with multiple cursors', () => {
    expect(() => {
        separateQueryAndCursor('SELECT | FROM |');
    }).toThrow(/Multiple cursors not allowed/);
});

test('should not work with newlines', () => {
    expect(() => {
        separateQueryAndCursor('SELECT *\n FROM |');
    }).toThrow(/Newline characters not allowed/);
});

test('should not work without cursor', () => {
    expect(() => {
        separateQueryAndCursor('SELECT * FROM ');
    }).toThrow(/Cursor not provided/);
});
