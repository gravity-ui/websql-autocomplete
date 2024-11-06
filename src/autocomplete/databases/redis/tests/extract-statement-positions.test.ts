import {
    ExtractStatementPositionsResult,
    StatementExtractionStrategy,
} from '../../../shared/extract-statement-positions-from-query';
import {extractRedisStatementPositionsFromQuery} from '../index';

test('should extract statements from single query', () => {
    const query = 'GET test';
    const result = extractRedisStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 8,
            },
        ],
        strategy: StatementExtractionStrategy.Tokens,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('GET test');
});

test('should extract unfinished statement', () => {
    const query = 'GET ';
    const result = extractRedisStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 3,
            },
        ],
        strategy: StatementExtractionStrategy.Tokens,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('GET');
});

test('should extract finished and unfinished statements', () => {
    const query = 'GET test1\nGET ';
    const result = extractRedisStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 9,
            },
            {
                startIndex: 10,
                endIndex: 13,
            },
        ],
        strategy: StatementExtractionStrategy.Tokens,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('GET test1');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('GET');
});

test('should ignore empty statements', () => {
    const query = `\n\n\n\n\n`;
    const result = extractRedisStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

test('should ignore spaces', () => {
    const query = '         ';
    const result = extractRedisStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

test('should extract statements from multiple query', () => {
    const query = 'GET 1\nGET 2';
    const result = extractRedisStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 5,
            },
            {
                startIndex: 6,
                endIndex: 11,
            },
        ],
        strategy: StatementExtractionStrategy.Tokens,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('GET 1');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('GET 2');
});

test('should extract three statements from query', () => {
    const query = 'GET 1\nSET test 1\nGET 2';

    const result = extractRedisStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 0,
                endIndex: 5,
            },
            {
                startIndex: 6,
                endIndex: 16,
            },
            {
                startIndex: 17,
                endIndex: 22,
            },
        ],
        strategy: StatementExtractionStrategy.Tokens,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('GET 1');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('SET test 1');
    expect(
        query.slice(
            result.statementPositions[2]?.startIndex,
            result.statementPositions[2]?.endIndex,
        ),
    ).toBe('GET 2');
});
