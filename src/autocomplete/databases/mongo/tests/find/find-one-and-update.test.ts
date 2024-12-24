import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOneAndUpdate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'}
        );

        db.collection('test_collection').findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOneAndUpdate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'},
          {test_options: 'test_value'}
        );

        db.collection('test_collection').findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'},
          {test_options: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract findOneAndUpdate commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.findOneAndUpdate(
          {
              test_field: 'test_value',
          },
          {
              test_field: 'new_test_value',
          }
      );
      db.collection('test_collection1').findOneAndUpdate(
          {
              test_field: 'test_value',
          },
          {
              test_field: 'new_test_value',
          }
      );

      db.test_collection2.findOneAndUpdate(
          {
              test_field: 'test_value',
          },
          {
              test_field: 'new_test_value',
          },
          {
              test_option: 'test_option_value'
          }
      );
      db.collection('test_collection2').findOneAndUpdate(
          {
              test_field: 'test_value',
          },
          {
              test_field: 'new_test_value',
          },
          {
              test_option: 'test_option_value'
          }
      );
  `);

    const commands: Command[] = [
        {
            type: 'collection',
            method: 'findOneAndUpdate',
            collectionName: 'test_collection1',
            parameters: {test_field: 'test_value'},
            newValues: {test_field: 'new_test_value'},
        },
        {
            type: 'collection',
            method: 'findOneAndUpdate',
            collectionName: 'test_collection1',
            parameters: {test_field: 'test_value'},
            newValues: {test_field: 'new_test_value'},
        },
        {
            type: 'collection',
            method: 'findOneAndUpdate',
            collectionName: 'test_collection2',
            parameters: {test_field: 'test_value'},
            newValues: {test_field: 'new_test_value'},
            options: {test_option: 'test_option_value'},
        },
        {
            type: 'collection',
            method: 'findOneAndUpdate',
            collectionName: 'test_collection2',
            parameters: {test_field: 'test_value'},
            newValues: {test_field: 'new_test_value'},
            options: {test_option: 'test_option_value'},
        },
    ];
    expect(result).toEqual({commands});
});
