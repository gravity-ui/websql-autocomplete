import {extractMongoCollectionsFromQuery} from '..';

test('should extract collections from query', () => {
    const result = extractMongoCollectionsFromQuery(`
        db.test_collection1.find();
        db.collection('test_collection2').find();
        db.renameCollection('test_collection3', 'test_collection3_new');
        db.indexInformation('test_collection4');
        db.dropCollection('test_collection5');
        db.dropCollection('test_collection5');
    `);

    expect(result).toEqual([
        {collectionName: 'test_collection1'},
        {collectionName: 'test_collection2'},
        {collectionName: 'test_collection3'},
        {collectionName: 'test_collection4'},
        {collectionName: 'test_collection5'},
    ]);
});
