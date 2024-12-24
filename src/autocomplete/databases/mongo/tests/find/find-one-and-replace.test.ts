import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOneAndReplace statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndReplace(
          {test_field: 'test_value'},
          {new_test_field: 'new_test_value'}
        );

        db.collection('test_collection').findOneAndReplace(
          {test_field: 'test_value'},
          {new_test_field: 'new_test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOneAndReplace statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndReplace(
          {test_field: 'test_value'},
          {new_test_field: 'new_test_value'},
          {test_options: 'test_value'}
        );

        db.collection('test_collection').findOneAndReplace(
          {test_field: 'test_value'},
          {new_test_field: 'new_test_value'},
          {test_options: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract findOneAndReplace commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.findOneAndReplace(
          {
              test_field: 'test_value',
          },
          {
              new_test_field: 'new_test_value',
          }
      );
      db.collection('test_collection1').findOneAndReplace(
          {
              test_field: 'test_value',
          },
          {
              new_test_field: 'new_test_value',
          }
      );

      db.test_collection2.findOneAndReplace(
          {
              test_field: 'test_value',
          },
          {
              new_test_field: 'new_test_value',
          },
          {
              test_option: 'test_option_value'
          }
      );
      db.collection('test_collection2').findOneAndReplace(
          {
              test_field: 'test_value',
          },
          {
              new_test_field: 'new_test_value',
          },
          {
              test_option: 'test_option_value'
          }
      );
  `);

    expect(result).toEqual({
        commands: [
            {
                type: 'collection',
                method: 'findOneAndReplace',
                collectionName: 'test_collection1',
                parameters: {test_field: 'test_value'},
                replacement: {new_test_field: 'new_test_value'},
            },
            {
                type: 'collection',
                method: 'findOneAndReplace',
                collectionName: 'test_collection1',
                parameters: {test_field: 'test_value'},
                replacement: {new_test_field: 'new_test_value'},
            },
            {
                type: 'collection',
                method: 'findOneAndReplace',
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value'},
                replacement: {new_test_field: 'new_test_value'},
                options: {test_option: 'test_option_value'},
            },
            {
                type: 'collection',
                method: 'findOneAndReplace',
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value'},
                replacement: {new_test_field: 'new_test_value'},
                options: {test_option: 'test_option_value'},
            },
        ],
    });
});
