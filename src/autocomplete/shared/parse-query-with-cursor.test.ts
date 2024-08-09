import {separateQueryAndCursor} from './parse-query-with-cursor';

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

test('should not work without cursor', () => {
    expect(() => {
        separateQueryAndCursor('SELECT * FROM ');
    }).toThrow(/Cursor not provided/);
});

test('should work with cursor on first line', () => {
    const [query, cursor] = separateQueryAndCursor('SELECT * FROM |;\nSELECT');

    expect(query).toEqual('SELECT * FROM ;\nSELECT');
    expect(cursor).toEqual({
        line: 1,
        column: 15,
    });
});

test('should work with cursor on second line', () => {
    const [query, cursor] = separateQueryAndCursor('SELECT * FROM test;\nSELECT |');

    expect(query).toEqual('SELECT * FROM test;\nSELECT ');
    expect(cursor).toEqual({
        line: 2,
        column: 8,
    });
});

test('should work with cursor on third line', () => {
    const [query, cursor] = separateQueryAndCursor(
        'SELECT * FROM test;\nSELECT * FROM test;\nSEL|',
    );

    expect(query).toEqual('SELECT * FROM test;\nSELECT * FROM test;\nSEL');
    expect(cursor).toEqual({
        line: 3,
        column: 4,
    });
});
