import {
    PostgreSqlStatement,
    extractPostgreSqlStatementsFromQuery,
} from '../postgresql-extract-statements';
import {separateQueryAndCursor} from '../../../shared';

test('should extract statements from single query', () => {
    const query = 'SELECT * FROM art WHERE id = 1;';
    const result = extractPostgreSqlStatementsFromQuery(query);
    const expectedResult: PostgreSqlStatement[] = [
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 31,
            endLine: 1,
            statement: 'SELECT * FROM art WHERE id = 1',
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract statements from single query with block comment inside', () => {
    const query = 'SELECT * FROM /* comment inside */ art WHERE id = 1;';
    const result = extractPostgreSqlStatementsFromQuery(query);

    expect(result).toEqual([
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 52,
            endLine: 1,
            statement: 'SELECT * FROM /* comment inside */ art WHERE id = 1',
        },
    ]);
});

test('should extract statements from single query with inlined comment inside', () => {
    const query = `SELECT * FROM
            art -- comment here
        WHERE id = 1;`;
    const result = extractPostgreSqlStatementsFromQuery(query);
    const expectedResult: PostgreSqlStatement[] = [
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 21,
            endLine: 3,
            statement: `SELECT * FROM
            art -- comment here
        WHERE id = 1`,
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract statement from query without inlined comment at the end', () => {
    const query = `SELECT * FROM art WHERE id = 1; -- comment here`;
    const result = extractPostgreSqlStatementsFromQuery(query);
    const expectedResult: PostgreSqlStatement[] = [
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 31,
            endLine: 1,
            statement: 'SELECT * FROM art WHERE id = 1',
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract unfinished statement with cursor', () => {
    const [query, cursor] = separateQueryAndCursor(`SELECT * FROM art WHERE id =|`);
    const result = extractPostgreSqlStatementsFromQuery(query, cursor);
    const expectedResult: PostgreSqlStatement[] = [
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 29,
            endLine: 1,
            statement: query,
            hasCursor: true,
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract finished and unfinished statements', () => {
    const query = `SELECT * FROM art WHERE id = 1; SELECT * FROM art WHERE id =`;
    const result = extractPostgreSqlStatementsFromQuery(query);
    const expectedResult: PostgreSqlStatement[] = [
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 31,
            endLine: 1,
            statement: 'SELECT * FROM art WHERE id = 1',
        },
        {
            startColumn: 33,
            startLine: 1,
            endColumn: 61,
            endLine: 1,
            statement: 'SELECT * FROM art WHERE id =',
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should not extract any statement from comments', () => {
    const query = `
        -- SELECT * FROM art WHERE id = 1;
        /* SELECT * FROM art WHERE id = 1; */
    `;
    const result = extractPostgreSqlStatementsFromQuery(query);

    expect(result).toEqual([]);
});

test('should ignore empty statements', () => {
    const query = `;;;;;;`;
    const result = extractPostgreSqlStatementsFromQuery(query);

    expect(result).toEqual([]);
});

test('should ignore newlines', () => {
    const query = '\n\n\n\n';
    const result = extractPostgreSqlStatementsFromQuery(query);

    expect(result).toEqual([]);
});

test('should extract statements from multiple query', () => {
    const queryText = 'SELECT * FROM art WHERE id = 1;\nSELECT * FROM art2 WHERE id = 2;';

    const result = extractPostgreSqlStatementsFromQuery(queryText);
    const expectedResult: PostgreSqlStatement[] = [
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 31,
            endLine: 1,
            statement: 'SELECT * FROM art WHERE id = 1',
        },
        {
            startColumn: 1,
            startLine: 2,
            endColumn: 32,
            endLine: 2,
            statement: 'SELECT * FROM art2 WHERE id = 2',
        },
    ];

    expect(result).toEqual(expectedResult);
});

test('should extract statements from multiple query and define current statement', () => {
    const query1 = `SELECT * FROM art WHERE id = 1;`;
    const query2 = `SELECT| * FROM art2 WHERE id = 2;`;

    const [queryText, cursor] = separateQueryAndCursor([query1, query2].join('\n'));

    const result = extractPostgreSqlStatementsFromQuery(queryText, cursor);
    const expectedResult: PostgreSqlStatement[] = [
        {
            startColumn: 1,
            startLine: 1,
            endColumn: 31,
            endLine: 1,
            statement: 'SELECT * FROM art WHERE id = 1',
            hasCursor: false,
        },
        {
            startColumn: 1,
            startLine: 2,
            endColumn: 32,
            endLine: 2,
            statement: 'SELECT * FROM art2 WHERE id = 2',
            hasCursor: true,
        },
    ];

    expect(result).toEqual(expectedResult);
});
