import {StatementExtractionStrategy} from '../../../shared/extract-statement-positions-from-query.js';
import {extractMsSqlStatementPositionsFromQuery} from '../index.js';

function extractStatements(query: string): {
    statements: string[];
    strategy: StatementExtractionStrategy;
} {
    const result = extractMsSqlStatementPositionsFromQuery(query);

    return {
        statements: result.statementPositions.map(({startIndex, endIndex}) =>
            query.slice(startIndex, endIndex),
        ),
        strategy: result.strategy,
    };
}

test('should extract statements from single query', () => {
    const query = 'SELECT * FROM art WHERE id = 1;';
    const result = extractMsSqlStatementPositionsFromQuery(query);

    expect(result).toEqual({
        statementPositions: [{startIndex: 0, endIndex: 31}],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract statements from single query with block comment inside', () => {
    expect(extractStatements('SELECT * FROM /* comment inside */ art WHERE id = 1;')).toEqual({
        statements: ['SELECT * FROM /* comment inside */ art WHERE id = 1;'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract statements from single query with inlined comment inside', () => {
    const query = `SELECT * FROM
            art -- comment here
        WHERE id = 1;`;

    expect(extractStatements(query)).toEqual({
        statements: [query],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract statement from query without inlined comment at the end', () => {
    expect(extractStatements('SELECT * FROM art WHERE id = 1; -- comment here')).toEqual({
        statements: ['SELECT * FROM art WHERE id = 1;'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract unfinished statement', () => {
    expect(extractStatements('SELECT * FROM art WHERE id =')).toEqual({
        statements: ['SELECT * FROM art WHERE id ='],
        strategy: StatementExtractionStrategy.Tokens,
    });
});

test('should extract finished and unfinished statements', () => {
    expect(
        extractStatements('SELECT * FROM art WHERE id = 1; SELECT * FROM art WHERE id ='),
    ).toEqual({
        statements: ['SELECT * FROM art WHERE id = 1;', 'SELECT * FROM art WHERE id ='],
        strategy: StatementExtractionStrategy.Tokens,
    });
});

test('should not extract any statement from comments', () => {
    const query = `
        -- SELECT * FROM art WHERE id = 1;
        /* SELECT * FROM art WHERE id = 1; */
    `;

    expect(extractStatements(query)).toEqual({
        statements: [],
        strategy: StatementExtractionStrategy.Tokens,
    });
});

test('should ignore empty statements', () => {
    expect(extractStatements(';;;;;;')).toEqual({
        statements: [],
        strategy: StatementExtractionStrategy.Tokens,
    });
});

test('should ignore newlines', () => {
    expect(extractStatements('\n\n\n\n')).toEqual({
        statements: [],
        strategy: StatementExtractionStrategy.Tokens,
    });
});

test('should extract statements from multiple query', () => {
    expect(
        extractStatements('SELECT * FROM art WHERE id = 1;\nSELECT * FROM art2 WHERE id = 2;'),
    ).toEqual({
        statements: ['SELECT * FROM art WHERE id = 1;', 'SELECT * FROM art2 WHERE id = 2;'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract statements without semicolons', () => {
    expect(extractStatements('SELECT * FROM art\nSELECT * FROM art2')).toEqual({
        statements: ['SELECT * FROM art', 'SELECT * FROM art2'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract statements from multiple batches', () => {
    expect(extractStatements('USE test_database;\nGO\nSELECT * FROM art;')).toEqual({
        statements: ['USE test_database;', 'SELECT * FROM art;'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract procedure with nested statements as one statement', () => {
    const procedure = `CREATE PROCEDURE test_procedure AS
        BEGIN
            SELECT 1;
            SELECT 2;
        END;`;

    expect(extractStatements(`${procedure}\nGO\nSELECT 3;`)).toEqual({
        statements: [procedure, 'SELECT 3;'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should extract view as one statement', () => {
    expect(extractStatements('CREATE VIEW test_view AS SELECT 1;\nGO\nSELECT 2;')).toEqual({
        statements: ['CREATE VIEW test_view AS SELECT 1;', 'SELECT 2;'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

// T-SQL allows to call a procedure without EXECUTE keyword at the beginning of a batch,
// so "sel asd" is a procedure call and "aaasdjalkdj" is an invalid label
test('should parse last invalid statement', () => {
    expect(extractStatements('SELECT * FROM art WHERE id = 1;\nsel asd aaasdjalkdj')).toEqual({
        statements: ['SELECT * FROM art WHERE id = 1;', 'sel asd', 'aaasdjalkdj'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});

test('should parse statements with emojis', () => {
    expect(extractStatements('--📊📊\nSELECT --🔥🔥\n1;\n--📊📊📊\nSELECT --🔥\n2;')).toEqual({
        statements: ['SELECT --🔥🔥\n1;', 'SELECT --🔥\n2;'],
        strategy: StatementExtractionStrategy.Autocomplete,
    });
});
