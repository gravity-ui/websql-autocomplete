import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on updateOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateOne(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          }
        );

        db.collection('test_collection').updateOne(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on document list in updateOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.updateOne(
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

      db.collection('test_collection').updateOne(
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

test('should not report errors on extended updateOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateOne(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          },
          {
            test_option: 'test_value',
          }
        );

        db.collection('test_collection').updateOne(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          },
          {
            test_option: 'test_value',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract updateOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.updateOne(
          {
              test_field: 'test_value',
          },
          [{
              test_field: 'test_value',
              test_object: {
                  test_subfield: 23,
              }
          }]
      );

      db.test_collection2.updateOne(
          {
              test_field: 'test_value',
          },
          [
              {
                  test_field: 'test_value',
                  test_object: {
                      test_subfield: 23,
                  }
              },
              {
                  test_field: 'test_value',
                  test_object: {
                      test_subfield: 23,
                  }
              },
          ],
          {
              test_option: 'test_option_value'
          }
      );

      db.test_collection3.updateOne(
          {
              test_field: 'test_value',
          },
          {
              test_field: 'test_value',
          },
          {
              test_option: 'test_option_value'
          }
      );
  `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection1',
                filter: {
                    test_field: 'test_value',
                },
                method: 'updateOne',
                updateParameters: [
                    {
                        test_field: 'test_value',
                        test_object: {
                            test_subfield: 23,
                        },
                    },
                ],
            },
            {
                collectionName: 'test_collection2',
                filter: {
                    test_field: 'test_value',
                },
                method: 'updateOne',
                options: {
                    test_option: 'test_option_value',
                },
                updateParameters: [
                    {
                        test_field: 'test_value',
                        test_object: {
                            test_subfield: 23,
                        },
                    },
                    {
                        test_field: 'test_value',
                        test_object: {
                            test_subfield: 23,
                        },
                    },
                ],
            },
            {
                collectionName: 'test_collection3',
                filter: {
                    test_field: 'test_value',
                },
                method: 'updateOne',
                options: {
                    test_option: 'test_option_value',
                },
                updateParameters: {
                    test_field: 'test_value',
                },
            },
        ],
    });
});
