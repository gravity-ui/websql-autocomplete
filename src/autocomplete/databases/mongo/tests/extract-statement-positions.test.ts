import {
    ExtractStatementPositionsResult,
    StatementExtractionStrategy,
} from '../../../shared/extract-statement-positions-from-query';
import {extractMongoStatementPositionsFromQuery} from '../index';

test('should extract statements from single find query', () => {
    const query = 'db.test_collection.find();';
    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [{startIndex: 0, endIndex: 26}],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection.find();');
});

test('should extract statements from single insertOne query', () => {
    const query = 'db.test_collection.insertOne({});';
    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [{startIndex: 0, endIndex: 33}],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection.insertOne({});');
});

test('should extract statements from single query with block comment inside', () => {
    const query = 'db.test_collection. /* comment inside */ find();';
    const result = extractMongoStatementPositionsFromQuery(query);

    expect(result).toEqual({
        statementPositions: [{startIndex: 0, endIndex: 48}],
        strategy: StatementExtractionStrategy.Autocomplete,
    });

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection. /* comment inside */ find();');
});

test('should extract statements from single query with inlined comment inside', () => {
    const query = `db
        .test_collection // comment here
        .find()`;
    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [{startIndex: 0, endIndex: 59}],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe(
        `db
        .test_collection // comment here
        .find()`,
    );
});

test('should extract statement from query without inlined comment at the end', () => {
    const query = 'db.test_collection.find(); // comment here';
    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [{startIndex: 0, endIndex: 26}],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection.find();');
});

test('should extract unfinished statement', () => {
    const query = 'db.test_collection.find(';
    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [{startIndex: 0, endIndex: 24}],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection.find(');
});

test('should extract finished and unfinished statements', () => {
    const query = 'db.test_collection.find(); db.test_collection.insertOne({';
    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {startIndex: 0, endIndex: 26},
            {startIndex: 27, endIndex: 57},
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection.find();');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('db.test_collection.insertOne({');
});

test('should not extract any statement from comments', () => {
    const query = `
        // db.test_collection.find();
        /* db.test_collection.insertOne({}); */
    `;
    const result = extractMongoStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

test('should ignore empty statements', () => {
    const query = `;;;;;;`;
    const result = extractMongoStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

test('should ignore newlines', () => {
    const query = '\n\n\n\n';
    const result = extractMongoStatementPositionsFromQuery(query);

    expect(result).toEqual({statementPositions: [], strategy: StatementExtractionStrategy.Tokens});
});

test('should extract statements from multiple query', () => {
    const query = 'db.test_collection.find();db.test_collection.insertOne({field: 1});';

    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {startIndex: 0, endIndex: 26},
            {startIndex: 26, endIndex: 67},
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection.find();');

    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('db.test_collection.insertOne({field: 1});');
});

test('should extract three statements from query', () => {
    const query =
        'db.first_collection.find();\ndb.first_collection.insertOne({});/* comment inside */db.first_collection.find();';

    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {startIndex: 0, endIndex: 27},
            {startIndex: 28, endIndex: 62},
            {startIndex: 82, endIndex: 109},
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.first_collection.find();');

    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('db.first_collection.insertOne({});');

    expect(
        query.slice(
            result.statementPositions[2]?.startIndex,
            result.statementPositions[2]?.endIndex,
        ),
    ).toBe('db.first_collection.find();');
});

test('should parse last invalid statement', () => {
    const query = 'db.test_collection.find({});\nsel asd aaasdjalkdj';

    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {startIndex: 0, endIndex: 28},
            {startIndex: 29, endIndex: 48},
        ],
        strategy: StatementExtractionStrategy.Autocomplete,
    };

    expect(result).toEqual(expectedResult);

    expect(
        query.slice(
            result.statementPositions[0]?.startIndex,
            result.statementPositions[0]?.endIndex,
        ),
    ).toBe('db.test_collection.find({});');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('sel asd aaasdjalkdj');
});

test('should parse statements with emojis', () => {
    const query = '//📊📊\ndb.first.find(); //🔥🔥🔥\n//🔥\ndb.second.find();';

    const result = extractMongoStatementPositionsFromQuery(query);
    const expectedResult: ExtractStatementPositionsResult = {
        statementPositions: [
            {
                startIndex: 7,
                endIndex: 23,
            },
            {
                startIndex: 38,
                endIndex: 55,
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
    ).toBe('db.first.find();');
    expect(
        query.slice(
            result.statementPositions[1]?.startIndex,
            result.statementPositions[1]?.endIndex,
        ),
    ).toBe('db.second.find();');
});
