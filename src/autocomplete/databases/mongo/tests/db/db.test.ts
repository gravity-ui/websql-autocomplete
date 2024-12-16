import {parseMongoQueryWithCursor, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on multiple statements', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.find();
        db.test_collection.insertOne({test_field: 'test_value'});
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on three statements', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.find();
        db.test_collection.insertOne({test_field: 'test_value'});
        db.test_collection.insertMany([{test_field: 'test_value'}]);
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly on empty statement', () => {
    const autocompleteResult = parseMongoQueryWithCursor('|');

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'db'}]);
});

test('should suggest collections after db', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.|');

    expect(autocompleteResult.suggestCollections).toEqual(true);
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
    ]);
});
