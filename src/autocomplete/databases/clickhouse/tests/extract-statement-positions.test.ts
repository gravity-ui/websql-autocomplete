import {StatementPosition} from '../../../shared/extract-statement-positions-from-query';
import {extractClickHouseStatementPositionsFromQuery} from '../index';

test('should extract statements from single query', () => {
    const query = 'SELECT * FROM art WHERE id = 1;';
    const result = extractClickHouseStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 30,
        },
    ];

    expect(result).toEqual(expectedResult);

    expect(query.slice(result[0]?.startIndex, result[0]?.endIndex)).toBe(
        'SELECT * FROM art WHERE id = 1',
    );
});

test('should extract statements from single query with block comment inside', () => {
    const query = 'SELECT * FROM /* comment inside */ art WHERE id = 1;';
    const result = extractClickHouseStatementPositionsFromQuery(query);

    expect(result).toEqual([
        {
            startIndex: 0,
            endIndex: 51,
        },
    ]);

    expect(query.slice(result[0]?.startIndex, result[0]?.endIndex)).toBe(
        'SELECT * FROM /* comment inside */ art WHERE id = 1',
    );
});

test('should extract statements from single query with inlined comment inside', () => {
    const query = `SELECT * FROM
            art -- comment here
        WHERE id = 1;`;
    const result = extractClickHouseStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 66,
        },
    ];

    expect(result).toEqual(expectedResult);

    expect(query.slice(result[0]?.startIndex, result[0]?.endIndex)).toBe(
        `SELECT * FROM
            art -- comment here
        WHERE id = 1`,
    );
});

test('should extract statement from query without inlined comment at the end', () => {
    const query = 'SELECT * FROM art WHERE id = 1; -- comment here';
    const result = extractClickHouseStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 30,
        },
    ];

    expect(result).toEqual(expectedResult);

    expect(query.slice(result[0]?.startIndex, result[0]?.endIndex)).toBe(
        'SELECT * FROM art WHERE id = 1',
    );
});

test('should extract unfinished statement', () => {
    const query = 'SELECT * FROM art WHERE id =';
    const result = extractClickHouseStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 28,
        },
    ];

    expect(result).toEqual(expectedResult);

    expect(query.slice(result[0]?.startIndex, result[0]?.endIndex)).toBe(
        'SELECT * FROM art WHERE id =',
    );
});

test('should extract finished and unfinished statements', () => {
    const query = `SELECT * FROM art WHERE id = 1; SELECT * FROM art WHERE id =`;
    const result = extractClickHouseStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 30,
        },
        {
            startIndex: 32,
            endIndex: 60,
        },
    ];

    expect(result).toEqual(expectedResult);

    expect(query.slice(result[0]?.startIndex, result[0]?.endIndex)).toBe(
        'SELECT * FROM art WHERE id = 1',
    );
    expect(query.slice(result[1]?.startIndex, result[1]?.endIndex)).toBe(
        'SELECT * FROM art WHERE id =',
    );
});

test('should not extract any statement from comments', () => {
    const query = `
        -- SELECT * FROM art WHERE id = 1;
        /* SELECT * FROM art WHERE id = 1; */
    `;
    const result = extractClickHouseStatementPositionsFromQuery(query);

    expect(result).toEqual([]);
});

test('should ignore empty statements', () => {
    const query = `;;;;;;`;
    const result = extractClickHouseStatementPositionsFromQuery(query);

    expect(result).toEqual([]);
});

test('should ignore newlines', () => {
    const query = '\n\n\n\n';
    const result = extractClickHouseStatementPositionsFromQuery(query);

    expect(result).toEqual([]);
});

test('should extract statements from multiple query', () => {
    const query = 'SELECT * FROM art WHERE id = 1;\nSELECT * FROM art2 WHERE id = 2;';

    const result = extractClickHouseStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 30,
        },
        {
            startIndex: 32,
            endIndex: 63,
        },
    ];

    expect(result).toEqual(expectedResult);

    expect(query.slice(result[0]?.startIndex, result[0]?.endIndex)).toBe(
        'SELECT * FROM art WHERE id = 1',
    );
    expect(query.slice(result[1]?.startIndex, result[1]?.endIndex)).toBe(
        'SELECT * FROM art2 WHERE id = 2',
    );
});
