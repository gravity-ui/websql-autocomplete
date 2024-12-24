import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on distinct statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.distinct('test_key');

        db.collection('test_collection').distinct('test_key');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended distinct statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.distinct(
        'test_key',
        {
            test_filter_option: 'test_value',
        },
        {
            test_option: 'test_value',
        }
      );

      db.collection('test_collection').distinct(
        'test_key',
        {
            test_filter_option: 'test_value',
        },
        {
            test_option: 'test_value',
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract distinct commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.distinct('test_key');
        db.collection('test_collection').distinct('test_key');
        db.test_collection.distinct(
            'test_key',
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').distinct(
            'test_key',
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'distinct',
            key: 'test_key',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'distinct',
            key: 'test_key',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'distinct',
            key: 'test_key',
            filter: {
                test_filter_option: 'test_value',
            },
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'distinct',
            key: 'test_key',
            filter: {
                test_filter_option: 'test_value',
            },
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
