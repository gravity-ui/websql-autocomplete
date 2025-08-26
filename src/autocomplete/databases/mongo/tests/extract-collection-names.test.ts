import {extractMongoCollectionNamesFromQuery} from '..';

test('should extract collection names from query', () => {
    const result = extractMongoCollectionNamesFromQuery(`
        db.test_collection1.find();
        db.collection('test_collection2').find();
        db.renameCollection('test_collection3', 'test_collection3_new');
        db.indexInformation('test_collection4');
        db.dropCollection('test_collection5');
    `);

    expect(result).toEqual([
        'test_collection1',
        "'test_collection2'",
        "'test_collection3'",
        "'test_collection4'",
        "'test_collection5'",
    ]);
});
