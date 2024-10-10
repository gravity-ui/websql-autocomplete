import {StatementPosition} from '../../../shared/extract-statement-positions-from-query';
import {extractYqlStatementPositionsFromQuery} from '../index';

test('should extract statements from single query', () => {
    const query = 'SELECT * FROM art WHERE id = 1;';
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 30,
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract statements from single query with block comment inside', () => {
    const query = 'SELECT * FROM /* comment inside */ art WHERE id = 1;';
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual([
        {
            startIndex: 0,
            endIndex: 51,
        },
    ]);
});

test('should extract statements from single query with inlined comment inside', () => {
    const query = `SELECT * FROM
            art -- comment here
        WHERE id = 1;`;
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 66,
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract statement from query without inlined comment at the end', () => {
    const query = `SELECT * FROM art WHERE id = 1; -- comment here`;
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 30,
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract unfinished statement', () => {
    const result = extractYqlStatementPositionsFromQuery('SELECT * FROM art WHERE id =');
    const expectedResult: StatementPosition[] = [
        {
            startIndex: 0,
            endIndex: 28,
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract finished and unfinished statements', () => {
    const query = `SELECT * FROM art WHERE id = 1; SELECT * FROM art WHERE id =`;
    const result = extractYqlStatementPositionsFromQuery(query);
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
});

test('should not extract any statement from comments', () => {
    const query = `
        -- SELECT * FROM art WHERE id = 1;
        /* SELECT * FROM art WHERE id = 1; */
    `;
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual([]);
});

test('should ignore empty statements', () => {
    const query = `;;;;;;`;
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual([]);
});

test('should ignore newlines', () => {
    const query = '\n\n\n\n';
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual([]);
});

test('should extract statements from multiple query', () => {
    const queryText = 'SELECT * FROM art WHERE id = 1;\nSELECT * FROM art2 WHERE id = 2;';

    const result = extractYqlStatementPositionsFromQuery(queryText);
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
});
