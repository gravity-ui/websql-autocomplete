import {
    extractMongoCommandsFromQuery,
    parseMongoQueryWithCursor,
    parseMongoQueryWithoutCursor,
} from '../..';

test('should not report errors on multiple statements', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.find();
        db.collection('test_collection').find();
        db.test_collection.insertOne({test_field: 'test_value'});
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on three statements', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.find();
        db.collection('test_collection').find();
        db.test_collection.insertOne({test_field: 'test_value'});
        db.test_collection.insertMany([{test_field: 'test_value'}]);
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly on empty statement', () => {
    const autocompleteResult = parseMongoQueryWithCursor('|');

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'db'}]);
});

test('should suggest collections and keywords after db', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.|');

    expect(autocompleteResult.suggestCollections).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'collection'},
        {value: 'createCollection'},
        {value: 'command'},
        {value: 'aggregate'},
        {value: 'listCollections'},
        {value: 'renameCollection'},
        {value: 'dropCollection'},
        {value: 'dropDatabase'},
        {value: 'createIndex'},
        {value: 'removeUser'},
        {value: 'indexInformation'},
        {value: 'runCursorCommand'},
        {value: 'stats'},
        {value: 'profilingLevel'},
        {value: 'setProfilingLevel'},
        {value: 'admin'},
    ]);
});

test('should suggest properly keywords after collection name', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.test_collection.|');

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'find'},
        {value: 'findOne'},
        {value: 'findOneAndDelete'},
        {value: 'findOneAndReplace'},
        {value: 'findOneAndUpdate'},
        {value: 'insertOne'},
        {value: 'insertMany'},
        {value: 'bulkWrite'},
        {value: 'updateOne'},
        {value: 'updateMany'},
        {value: 'replaceOne'},
        {value: 'deleteOne'},
        {value: 'deleteMany'},
        {value: 'rename'},
        {value: 'drop'},
        {value: 'isCapped'},
        {value: 'createIndex'},
        {value: 'createIndexes'},
        {value: 'dropIndex'},
        {value: 'dropIndexes'},
        {value: 'listIndexes'},
        {value: 'indexes'},
        {value: 'indexExists'},
        {value: 'indexInformation'},
        {value: 'estimatedDocumentCount'},
        {value: 'countDocuments'},
        {value: 'distinct'},
        {value: 'aggregate'},
    ]);
});

test('should throw error on invalid syntax', () => {
    const result = extractMongoCommandsFromQuery('db_ERROR.test_collection1.find({})');

    expect(result).toEqual({
        parseSyntaxErrors: [
            {
                endColumn: 8,
                endLine: 1,
                message: "mismatched input 'db_ERROR' expecting {<EOF>, 'db'}",
                startColumn: 0,
                startLine: 1,
            },
        ],
    });
});
