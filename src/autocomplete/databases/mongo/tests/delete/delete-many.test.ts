import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on deleteMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteMany(
          {
            test_field: 'test_value',
          }
        );

        db.collection('test_collection').deleteMany(
          {
            test_field: 'test_value',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended deleteMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.deleteMany(
        {
          test_field: 'test_value',
        },
        {
          test_option: 'test_value',
        }
      );

      db.collection('test_collection').deleteMany(
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

test('should not report errors on deleteMany statement without arguments', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteMany();

        db.collection('test_collection').deleteMany();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract deleteMany commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection.deleteMany(
          {
              test_field: 'test_value',
          }
      );
      db.collection('test_collection').deleteMany(
          {
              test_field: 'test_value',
          }
      );
      
      db.test_collection.deleteMany(
          {
              test_field: 'test_value',
          },
          {
              test_option: 'test_value',
          }
      );
      db.collection('test_collection').deleteMany(
          {
              test_field: 'test_value',
          },
          {
              test_option: 'test_value',
          }
      );

      db.test_collection.deleteMany();
      db.collection('test_collection').deleteMany();
  `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteMany',
                filter: {
                    test_field: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteMany',
                filter: {
                    test_field: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteMany',
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
                method: 'deleteMany',
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
                method: 'deleteMany',
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'deleteMany',
            },
        ],
    });
});
