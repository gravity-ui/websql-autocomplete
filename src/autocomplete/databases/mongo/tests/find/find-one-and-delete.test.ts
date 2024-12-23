import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOneAndDelete statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndDelete(
          {test_field: 'test_value'}
        );

        db.collection('test_collection').findOneAndDelete(
          {test_field: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOneAndDelete statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndDelete(
          {test_field: 'test_value'},
          {test_options: 'test_value'}
        );

        db.collection('test_collection').findOneAndDelete(
          {test_field: 'test_value'},
          {test_options: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract findOneAndDelete commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.findOneAndDelete({
          test_field: 'test_value',
      });

      db.test_collection2.findOneAndDelete(
          {
              test_field: 'test_value'
          },
          {
              test_option: 'test_option_value'
          }
      );
  `);

    expect(result).toEqual({
        commands: [
            {
                method: 'findOneAndDelete',
                collectionName: 'test_collection1',
                parameters: {test_field: 'test_value'},
            },
            {
                method: 'findOneAndDelete',
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value'},
                options: {test_option: 'test_option_value'},
            },
        ],
    });
});
