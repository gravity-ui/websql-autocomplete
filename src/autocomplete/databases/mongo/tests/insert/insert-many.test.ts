import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on insertMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.insertMany(
          [{
            test_field: 'test_value'
          }]
        );

        db.collection('test_collection').insertMany(
          [{
            test_field: 'test_value'
          }]
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended insertMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.insertMany(
        [
          {
            test_field: 'test_value1'
          },
          {
            test_field2: 'test_value2'
          },
          {
            test_field3: 'test_value3'
          },
          [1, 2, 3],
          [{test_field4: 'test_value4'}]
        ],
        {
          test_option: 'test_value'
        }
      );

      db.collection('test_collection').insertMany(
        [
          {
            test_field: 'test_value1'
          },
          {
            test_field2: 'test_value2'
          },
          {
            test_field3: 'test_value3'
          },
          [1, 2, 3],
          [{test_field4: 'test_value4'}]
        ],
        {
          test_option: 'test_value'
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract insertMany commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.insertMany([{
          test_field: 'test_value',
          test_object: {
              test_subfield: 23,
          }
      }]);

      db.test_collection2.insertMany(
          [
              {
                  test_field1: 'test_value1'
              },
              {
                  test_field2: 'test_value2'
              },
              {
                  test_field3: 'test_value3'
              },
              {
                  test_field4: 'test_value4'
              },
          ],
          {
              test_option: 'test_option_value'
          }
      );

      db.test_collection3.insertMany(
          [
              [{
                  test_field: 'test_value'
              }]
          ],
          {
              test_option: 'test_option_value'
          }
      );

      db.test_collection4.insertMany([[1, 2], [3, 4]]);
  `);

    expect(result).toEqual({
        commands: [
            {
                method: 'insertMany',
                collectionName: 'test_collection1',
                documents: [{test_field: 'test_value', test_object: {test_subfield: 23}}],
            },
            {
                method: 'insertMany',
                collectionName: 'test_collection2',
                documents: [
                    {test_field1: 'test_value1'},
                    {test_field2: 'test_value2'},
                    {test_field3: 'test_value3'},
                    {test_field4: 'test_value4'},
                ],
                options: {test_option: 'test_option_value'},
            },
            {
                method: 'insertMany',
                collectionName: 'test_collection3',
                documents: [[{test_field: 'test_value'}]],
                options: {test_option: 'test_option_value'},
            },
            {
                method: 'insertMany',
                collectionName: 'test_collection4',
                documents: [
                    [1, 2],
                    [3, 4],
                ],
            },
        ],
    });
});
