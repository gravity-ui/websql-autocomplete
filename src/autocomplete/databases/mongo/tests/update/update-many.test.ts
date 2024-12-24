import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on updateMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateMany(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          }
        );

        db.collection('test_collection').updateMany(
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

test('should not report errors on document list in updateMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.updateMany(
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

      db.collection('test_collection').updateMany(
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

test('should not report errors on extended updateMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateMany(
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

        db.collection('test_collection').updateMany(
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

test('should extract updateMany commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.updateMany(
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
      db.collection('test_collection1').updateMany(
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

      db.test_collection2.updateMany(
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
      db.collection('test_collection2').updateMany(
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

      db.test_collection3.updateMany(
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
      db.collection('test_collection3').updateMany(
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

    const commands: Command[] = [
        {
            collectionName: 'test_collection1',
            type: 'collection',
            method: 'updateMany',
            filter: {
                test_field: 'test_value',
            },
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
            collectionName: 'test_collection1',
            type: 'collection',
            method: 'updateMany',
            filter: {
                test_field: 'test_value',
            },
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
            type: 'collection',
            method: 'updateMany',
            filter: {
                test_field: 'test_value',
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
            options: {
                test_option: 'test_option_value',
            },
        },
        {
            collectionName: 'test_collection2',
            type: 'collection',
            method: 'updateMany',
            filter: {
                test_field: 'test_value',
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
            options: {
                test_option: 'test_option_value',
            },
        },
        {
            collectionName: 'test_collection3',
            type: 'collection',
            method: 'updateMany',
            filter: {
                test_field: 'test_value',
            },
            updateParameters: {
                test_field: 'test_value',
            },
            options: {
                test_option: 'test_option_value',
            },
        },
        {
            collectionName: 'test_collection3',
            type: 'collection',
            method: 'updateMany',
            filter: {
                test_field: 'test_value',
            },
            updateParameters: {
                test_field: 'test_value',
            },
            options: {
                test_option: 'test_option_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
