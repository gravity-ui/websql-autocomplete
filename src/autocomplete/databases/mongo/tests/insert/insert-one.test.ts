import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on insertOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.insertOne(
          {
            test_field: 'test_value'
          }
        );

        db.collection('test_collection').insertOne(
          {
            test_field: 'test_value'
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended insertOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.insertOne(
        {
          test_field: 'test_value'
        },
        {
          test_option: 'test_value'
        }
      );

      db.collection('test_collection').insertOne(
        {
          test_field: 'test_value'
        },
        {
          test_option: 'test_value'
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on array document in insertOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
    db.test_collection.insertOne(
      [
        {
          test_field: 'test_value1'
        },
        1,
        'test_value2',
        [1, 2, {test_field2: 'test_value3'}]
      ]
    );

    db.collection('test_collection').insertOne(
      [
        {
          test_field: 'test_value1'
        },
        1,
        'test_value2',
        [1, 2, {test_field2: 'test_value3'}]
      ]
    );
`);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract insertOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.insertOne({
          test_field: 'test_value',
          test_object: {
              test_subfield: 23,
          }
      });

      db.test_collection2.insertOne(
          {
              test_field: 'test_value'
          },
          {
              test_option: 'test_option_value'
          }
      );

      db.test_collection3.insertOne(
          [{
              test_field: 'test_value'
          }],
          {
              test_option: 'test_option_value'
          }
      );
  `);

    expect(result).toEqual({
        commands: [
            {
                method: 'insertOne',
                collectionName: 'test_collection1',
                document: {test_field: 'test_value', test_object: {test_subfield: 23}},
            },
            {
                method: 'insertOne',
                collectionName: 'test_collection2',
                document: {test_field: 'test_value'},
                options: {test_option: 'test_option_value'},
            },
            {
                method: 'insertOne',
                collectionName: 'test_collection3',
                document: [{test_field: 'test_value'}],
                options: {test_option: 'test_option_value'},
            },
        ],
    });
});
