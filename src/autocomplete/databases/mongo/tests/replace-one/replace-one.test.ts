import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on replaceOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.replaceOne(
          {
            test_field1: 'test_value1',
          },
          {
            test_field2: 'test_value2',
          }
        );

        db.collection('test_collection').replaceOne(
          {
            test_field1: 'test_value1',
          },
          {
            test_field2: 'test_value2',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on document list in replaceOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.replaceOne(
        {
          test_field1: 'test_value1',
        },
        [
          {
            test_field2: 'test_value2',
          },
          {
            test_field3: 'test_value3',
          },
        ]
      );

      db.collection('test_collection').replaceOne(
        {
          test_field1: 'test_value1',
        },
        [
          {
            test_field2: 'test_value2',
          },
          {
            test_field3: 'test_value3',
          },
        ]
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended replaceOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.replaceOne(
          {
            test_field1: 'test_value1',
          },
          {
            test_field2: 'test_value2',
          },
          {
            test_option: 'test_value',
          }
        );

        db.collection('test_collection').replaceOne(
          {
            test_field1: 'test_value1',
          },
          {
            test_field2: 'test_value2',
          },
          {
            test_option: 'test_value',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract replaceOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection.replaceOne(
          {
              test_field1: 'test_value1',
          },
          {
              test_field2: 'test_value2',
          }
      );
      db.collection('test_collection').replaceOne(
          {
              test_field1: 'test_value1',
          },
          {
              test_field2: 'test_value2',
          }
      );

      db.test_collection.replaceOne(
          {
              test_field1: 'test_value1',
          },
          [
              {
                  test_field2: 'test_value2',
              },
              {
                  test_field3: 'test_value3',
              },
          ]
      );
      db.collection('test_collection').replaceOne(
          {
              test_field1: 'test_value1',
          },
          [
              {
                  test_field2: 'test_value2',
              },
              {
                  test_field3: 'test_value3',
              },
          ]
      );

      db.test_collection.replaceOne(
          {
              test_field1: 'test_value1',
          },
          {
              test_field2: 'test_value2',
          },
          {
              test_option: 'test_value',
          }
      );
      db.collection('test_collection').replaceOne(
          {
              test_field1: 'test_value1',
          },
          {
              test_field2: 'test_value2',
          },
          {
              test_option: 'test_value',
          }
      );
  `);

    const commands: Command[] = [
        {
            type: 'collection',
            method: 'replaceOne',
            collectionName: 'test_collection',
            filter: {
                test_field1: 'test_value1',
            },
            replacement: {
                test_field2: 'test_value2',
            },
        },
        {
            type: 'collection',
            method: 'replaceOne',
            collectionName: 'test_collection',
            filter: {
                test_field1: 'test_value1',
            },
            replacement: {
                test_field2: 'test_value2',
            },
        },
        {
            type: 'collection',
            method: 'replaceOne',
            collectionName: 'test_collection',
            filter: {
                test_field1: 'test_value1',
            },
            replacement: [
                {
                    test_field2: 'test_value2',
                },
                {
                    test_field3: 'test_value3',
                },
            ],
        },
        {
            type: 'collection',
            method: 'replaceOne',
            collectionName: 'test_collection',
            filter: {
                test_field1: 'test_value1',
            },
            replacement: [
                {
                    test_field2: 'test_value2',
                },
                {
                    test_field3: 'test_value3',
                },
            ],
        },
        {
            type: 'collection',
            method: 'replaceOne',
            collectionName: 'test_collection',
            filter: {
                test_field1: 'test_value1',
            },
            replacement: {
                test_field2: 'test_value2',
            },
            options: {
                test_option: 'test_value',
            },
        },
        {
            type: 'collection',
            method: 'replaceOne',
            collectionName: 'test_collection',
            filter: {
                test_field1: 'test_value1',
            },
            replacement: {
                test_field2: 'test_value2',
            },
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
