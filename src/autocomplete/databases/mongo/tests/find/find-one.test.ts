import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOne(
            {test_field: 'test_value'}
        );

        db.collection('test_collection').findOne(
            {test_field: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOne(
          {test_field: 'test_value'},
          {test_option: 'test_value'}
        );

        db.collection('test_collection').findOne(
          {test_field: 'test_value'},
          {test_option: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract findOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection1.findOne();
        db.collection('test_collection1').findOne();

        db.test_collection2.findOne({
            test_field: 'test_value',
        });
        db.collection('test_collection2').findOne({
            test_field: 'test_value',
        });

        db.test_collection3.findOne(
            {
                test_field: 'test_value'
            },
            {
                test_option: 'test_option_value'
            }
        );
        db.collection('test_collection3').findOne(
            {
                test_field: 'test_value'
            },
            {
                test_option: 'test_option_value'
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'collection',
            method: 'findOne',
            collectionName: 'test_collection1',
        },
        {
            type: 'collection',
            method: 'findOne',
            collectionName: 'test_collection1',
        },
        {
            type: 'collection',
            method: 'findOne',
            collectionName: 'test_collection2',
            parameters: {test_field: 'test_value'},
        },
        {
            type: 'collection',
            method: 'findOne',
            collectionName: 'test_collection2',
            parameters: {test_field: 'test_value'},
        },
        {
            type: 'collection',
            method: 'findOne',
            collectionName: 'test_collection3',
            parameters: {test_field: 'test_value'},
            options: {test_option: 'test_option_value'},
        },
        {
            type: 'collection',
            method: 'findOne',
            collectionName: 'test_collection3',
            parameters: {test_field: 'test_value'},
            options: {test_option: 'test_option_value'},
        },
    ];
    expect(result).toEqual({commands});
});
