import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on bulkWrite statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'}
          ]
        );


        db.collection('test_collection').bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'}
          ]
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended bulkWrite statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'},
          ]
        );

        db.collection('test_collection').bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'},
          ]
        );
        
        db.test_collection.bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'},
          ],
          {test_option: 'test_value'}
        );

        db.collection('test_collection').bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'},
          ],
          {test_option: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract bulkWrite commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
      db.test_collection1.bulkWrite([
          {
              insertOne: {
                  document: {
                      test_field: 'test_value',
                  },
              },
              updateMany: {
                  filter: {
                      test_field1: 'test_value1',
                  },
                  update: {
                      test_field2: 'test_value2',
                  },
              },
              updateOne: {
                  filter: {
                      test_field1: 'test_value1',
                  },
                  update: {
                      test_field2: 'test_value2',
                  },
              },
              deleteMany: {
                  filter: {
                      test_field: 'test_value',
                  },
              },
              deleteOne: {
                  filter: {
                      test_field: 'test_value',
                  },
              },
              replaceOne: {
                  filter: {
                      test_field1: 'test_value1',
                  },
                  replacement: {
                      test_field2: 'test_value2',
                  },
              },
          },
      ]);
      db.collection('test_collection1').bulkWrite([
          {
              insertOne: {
                  document: {
                      test_field: 'test_value',
                  },
              },
              updateMany: {
                  filter: {
                      test_field1: 'test_value1',
                  },
                  update: {
                      test_field2: 'test_value2',
                  },
              },
              updateOne: {
                  filter: {
                      test_field1: 'test_value1',
                  },
                  update: {
                      test_field2: 'test_value2',
                  },
              },
              deleteMany: {
                  filter: {
                      test_field: 'test_value',
                  },
              },
              deleteOne: {
                  filter: {
                      test_field: 'test_value',
                  },
              },
              replaceOne: {
                  filter: {
                      test_field1: 'test_value1',
                  },
                  replacement: {
                      test_field2: 'test_value2',
                  },
              },
          },
      ]);

      db.test_collection2.bulkWrite(
          [
              {
                  insertOne: {
                      document: {
                          test_field: 'test_value',
                      },
                  },
                  updateMany: {
                      filter: {
                          test_field1: 'test_value1',
                      },
                      update: {
                          test_field2: 'test_value2',
                      },
                  },
                  updateOne: {
                      filter: {
                          test_field1: 'test_value1',
                      },
                      update: {
                          test_field2: 'test_value2',
                      },
                  },
                  deleteMany: {
                      filter: {
                          test_field: 'test_value',
                      },
                  },
                  deleteOne: {
                      filter: {
                          test_field: 'test_value',
                      },
                  },
                  replaceOne: {
                      filter: {
                          test_field1: 'test_value1',
                      },
                      replacement: {
                          test_field2: 'test_value2',
                      },
                  },
              },
          ],
          {
              test_option: 'test_value',
          }
      );
      db.collection('test_collection2').bulkWrite(
          [
              {
                  insertOne: {
                      document: {
                          test_field: 'test_value',
                      },
                  },
                  updateMany: {
                      filter: {
                          test_field1: 'test_value1',
                      },
                      update: {
                          test_field2: 'test_value2',
                      },
                  },
                  updateOne: {
                      filter: {
                          test_field1: 'test_value1',
                      },
                      update: {
                          test_field2: 'test_value2',
                      },
                  },
                  deleteMany: {
                      filter: {
                          test_field: 'test_value',
                      },
                  },
                  deleteOne: {
                      filter: {
                          test_field: 'test_value',
                      },
                  },
                  replaceOne: {
                      filter: {
                          test_field1: 'test_value1',
                      },
                      replacement: {
                          test_field2: 'test_value2',
                      },
                  },
              },
          ],
          {
              test_option: 'test_value',
          }
      );
  `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection1',
            type: 'collection',
            method: 'bulkWrite',
            operations: [
                {
                    deleteMany: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    deleteOne: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    insertOne: {
                        document: {
                            test_field: 'test_value',
                        },
                    },
                    replaceOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        replacement: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateMany: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                },
            ],
        },
        {
            collectionName: 'test_collection1',
            type: 'collection',
            method: 'bulkWrite',
            operations: [
                {
                    deleteMany: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    deleteOne: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    insertOne: {
                        document: {
                            test_field: 'test_value',
                        },
                    },
                    replaceOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        replacement: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateMany: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                },
            ],
        },
        {
            collectionName: 'test_collection2',
            type: 'collection',
            method: 'bulkWrite',
            operations: [
                {
                    deleteMany: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    deleteOne: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    insertOne: {
                        document: {
                            test_field: 'test_value',
                        },
                    },
                    replaceOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        replacement: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateMany: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection2',
            type: 'collection',
            method: 'bulkWrite',
            operations: [
                {
                    deleteMany: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    deleteOne: {
                        filter: {
                            test_field: 'test_value',
                        },
                    },
                    insertOne: {
                        document: {
                            test_field: 'test_value',
                        },
                    },
                    replaceOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        replacement: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateMany: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                    updateOne: {
                        filter: {
                            test_field1: 'test_value1',
                        },
                        update: {
                            test_field2: 'test_value2',
                        },
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
