import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on deleteOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteOne(
          {
            test_field: 'test_value',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended deleteOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.deleteOne(
        {
          test_field: 'test_value',
        },
        {
          test_option: 'test_value',
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on deleteOne statement without arguments', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteOne();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract deleteOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection.deleteOne(
          {
              test_field: 'test_value',
          }
      );
      db.collection('test_collection').deleteOne(
          {
              test_field: 'test_value',
          }
      );
      
      db.test_collection.deleteOne(
          {
              test_field: 'test_value',
          },
          {
              test_option: 'test_value',
          }
      );
      db.collection('test_collection').deleteOne(
          {
              test_field: 'test_value',
          },
          {
              test_option: 'test_value',
          }
      );

      db.test_collection.deleteOne();
      db.collection('test_collection').deleteOne();
  `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteOne',
                filter: {
                    test_field: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteOne',
                filter: {
                    test_field: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteOne',
                filter: {
                    test_field: 'test_value',
                },
                options: {
                    test_option: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteOne',
                filter: {
                    test_field: 'test_value',
                },
                options: {
                    test_option: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteOne',
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteOne',
            },
        ],
    });
});
