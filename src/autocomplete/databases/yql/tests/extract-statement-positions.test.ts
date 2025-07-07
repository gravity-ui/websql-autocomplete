import {
    ExtractStatementPositionsResult,
    StatementExtractionStrategy,
} from '../../../shared/extract-statement-positions-from-query';
import {extractYqlStatementPositionsFromQuery} from '../index';

test('should extract statements from single query', () => {
    const query = 'SELECT * FROM art WHERE id = 1;';
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 31,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id = 1;');
});

test('should extract statements from single query with block comment inside', () => {
    const query = 'SELECT * FROM /* comment inside */ art WHERE id = 1;';
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual({
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 52,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    });

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM /* comment inside */ art WHERE id = 1;');
});

test('should extract statements from single query with inlined comment inside', () => {
    const query = `SELECT * FROM
            art -- comment here
        WHERE id = 1;`;
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 67,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe(
        `SELECT * FROM
            art -- comment here
        WHERE id = 1;`,
    );
});

test('should extract statement from query without inlined comment at the end', () => {
    const query = 'SELECT * FROM art WHERE id = 1; -- comment here';
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 31,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id = 1;');
});

test('should extract unfinished statement', () => {
    const query = 'SELECT * FROM art WHERE id =';
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 28,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id =');
});

test('should extract finished and unfinished statements', () => {
    const query = `SELECT * FROM art WHERE id = 1; SELECT * FROM art WHERE id =`;
    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 31,
            },
            {
                startIndex: 32,
                endIndex: 60,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id = 1;');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id =');
});

test('should not extract any statement from comments', () => {
    const query = `
        -- SELECT * FROM art WHERE id = 1;
        /* SELECT * FROM art WHERE id = 1; */
    `;
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

// TODO YQL statements behave weirdly with semicolons, but we don't need to support this for now
test.skip('should ignore empty statements', () => {
    const query = `;;;;;;`;
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

test('should ignore newlines', () => {
    const query = '\n\n\n\n';
    const result = extractYqlStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

test('should extract statements from multiple query', () => {
    const query = 'SELECT * FROM art WHERE id = 1;\nSELECT * FROM art2 WHERE id = 2;';

    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 31,
            },
            {
                startIndex: 32,
                endIndex: 64,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id = 1;');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('SELECT * FROM art2 WHERE id = 2;');
});

test('should extract three statements from query', () => {
    const query =
        'SELECT * FROM art WHERE id = 1;\nSELECT * FROM art2 WHERE id = 2;/* comment inside */SELECT 1;';

    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 31,
            },
            {
                startIndex: 32,
                endIndex: 64,
            },
            {
                startIndex: 84,
                endIndex: 93,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id = 1;');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('SELECT * FROM art2 WHERE id = 2;');
    expect(
        query.slice(
            result.statementPositions[2]?.startIndex,
            result.statementPositions[2]?.endIndex,
        ),
    ).toBe('SELECT 1;');
});

test('should parse last invalid statement', () => {
    const query = 'SELECT * FROM art WHERE id = 1;\nsel asd aaasdjalkdj';

    const result = extractYqlStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 31,
            },
            {
                startIndex: 32,
                endIndex: 51,
            },
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('SELECT * FROM art WHERE id = 1;');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('sel asd aaasdjalkdj');
});
