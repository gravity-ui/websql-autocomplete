import {extractMongoCommandsFromQuery} from '..';

test('should extract find commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection1.find({
            test_field: 'test_value',
            test_object: {test_subfield: 1}
        })
            .skip(1)
            .limit(2)
            .skip(3)
            .limit(4)
            .filter({test_filter_field: 'test_filter_value'})
            .min({test_min_field: 'test_min_value'})
            .max({test_max_field: 'test_max_value'})
            .hint('test_index_name')
            .hint({test_index_name: 1})
            .returnKey(true)
            .showRecordId(true)
            .returnKey(false)
            .showRecordId(false)
            .sort('test_field', 'desc');

        db.test_collection2.find({
            test_field: 'test_value',
            test_object: {
                test_subfield: 23,
            }
        })
            .explain();
        
        db.test_collection4.find({}).explain({});
        
        db.test_collection5.find().explain('test_string');
        
        db.test_collection6.find().explain(true);
        
        db.test_collection7.find().explain({
            test_explain_field: 1
        });

        db.test_collection8.find(
            {
                test_find_field: 'test_find_value'
            },
            {
                test_find_option_field: 'test_find_option_value'
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                method: 'find',
                modifiers: [
                    {method: 'skip', parameters: 1},
                    {method: 'limit', parameters: 2},
                    {method: 'skip', parameters: 3},
                    {method: 'limit', parameters: 4},
                    {method: 'filter', parameters: {test_filter_field: 'test_filter_value'}},
                    {method: 'min', parameters: {test_min_field: 'test_min_value'}},
                    {method: 'max', parameters: {test_max_field: 'test_max_value'}},
                    {method: 'hint', parameters: 'test_index_name'},
                    {method: 'hint', parameters: {test_index_name: 1}},
                    {method: 'returnKey', parameters: true},
                    {method: 'showRecordId', parameters: true},
                    {method: 'returnKey', parameters: false},
                    {method: 'showRecordId', parameters: false},
                    {method: 'sort', options: 'desc', parameters: 'test_field'},
                ],
                collectionName: 'test_collection1',
                parameters: {test_field: 'test_value', test_object: {test_subfield: 1}},
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value', test_object: {test_subfield: 23}},
                explain: {},
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection4',
                parameters: {},
                explain: {
                    parameters: {},
                },
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection5',
                explain: {
                    parameters: 'test_string',
                },
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection6',
                explain: {
                    parameters: true,
                },
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection7',
                explain: {
                    parameters: {
                        test_explain_field: 1,
                    },
                },
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection8',
                parameters: {test_find_field: 'test_find_value'},
                options: {test_find_option_field: 'test_find_option_value'},
            },
        ],
    });
});

test('should extract findOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection1.findOne();

        db.test_collection2.findOne({
            test_field: 'test_value',
        });

        db.test_collection3.findOne(
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
                method: 'findOne',
                collectionName: 'test_collection1',
            },
            {
                method: 'findOne',
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value'},
            },
            {
                method: 'findOne',
                collectionName: 'test_collection3',
                parameters: {test_field: 'test_value'},
                options: {test_option: 'test_option_value'},
            },
        ],
    });
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
    `);

    expect(result).toEqual({
        commands: [
            {
                method: 'findOneAndReplace',
                collectionName: 'test_collection1',
                parameters: {test_field: 'test_value'},
                replacement: {new_test_field: 'new_test_value'},
            },
            {
                method: 'findOneAndReplace',
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value'},
                replacement: {new_test_field: 'new_test_value'},
                options: {test_option: 'test_option_value'},
            },
        ],
    });
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
    `);

    expect(result).toEqual({
        commands: [
            {
                method: 'findOneAndUpdate',
                collectionName: 'test_collection1',
                parameters: {test_field: 'test_value'},
                newValues: {test_field: 'new_test_value'},
            },
            {
                method: 'findOneAndUpdate',
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value'},
                newValues: {test_field: 'new_test_value'},
                options: {test_option: 'test_option_value'},
            },
        ],
    });
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
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection1',
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
        ],
    });
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
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection1',
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
        ],
    });
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
    `);

    expect(result).toEqual({
        commands: [
            {
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
        ],
    });
});

test('should extract deleteOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.deleteOne(
            {
                test_field: 'test_value',
            }
        );
        
        db.test_collection.deleteOne(
            {
                test_field: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );

        db.test_collection.deleteOne();
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'deleteOne',
                filter: {
                    test_field: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                method: 'deleteOne',
                filter: {
                    test_field: 'test_value',
                },
                options: {
                    test_option: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                method: 'deleteOne',
            },
        ],
    });
});

test('should extract deleteMany commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.deleteMany(
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

        db.test_collection.deleteMany();
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'deleteMany',
                filter: {
                    test_field: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
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
                method: 'deleteMany',
            },
        ],
    });
});

test('should extract rename commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.rename('test_collection_new_name');

        db.test_collection.rename(
            'test_collection_new_name',
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'rename',
                newName: 'test_collection_new_name',
            },
            {
                collectionName: 'test_collection',
                method: 'rename',
                newName: 'test_collection_new_name',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract drop commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.drop();

        db.test_collection.drop(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'drop',
            },
            {
                collectionName: 'test_collection',
                method: 'drop',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract isCapped commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.isCapped();

        db.test_collection.isCapped(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'isCapped',
            },
            {
                collectionName: 'test_collection',
                method: 'isCapped',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract createIndex commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.createIndex('test_index');
        db.test_collection.createIndex([['test_index_1', -1], ['test_index_2', 1]]);
        db.test_collection.createIndex({
            test_index_1: -1,
            test_index_2: 1,
        });
        db.test_collection.createIndex(
            {
                test_index_1: -1,
                test_index_2: 1,
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'createIndex',
                indexSpec: 'test_index',
            },
            {
                collectionName: 'test_collection',
                method: 'createIndex',
                indexSpec: [
                    ['test_index_1', -1],
                    ['test_index_2', 1],
                ],
            },
            {
                collectionName: 'test_collection',
                method: 'createIndex',
                indexSpec: {
                    test_index_1: -1,
                    test_index_2: 1,
                },
            },
            {
                collectionName: 'test_collection',
                method: 'createIndex',
                indexSpec: {
                    test_index_1: -1,
                    test_index_2: 1,
                },
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract createIndexes commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.createIndexes([
            {
                key: {
                    test_index1: 1,
                },
            },
            {
                key: {
                    test_index2: 1,
                },
            },
        ]);
        db.test_collection.createIndexes(
            [
                {
                    key: {
                        test_index1: '2d',
                    },
                },
                {
                    key: {
                        test_index2: 1,
                    },
                },
            ],
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'createIndexes',
                indexSpecs: [
                    {
                        key: {
                            test_index1: 1,
                        },
                    },
                    {
                        key: {
                            test_index2: 1,
                        },
                    },
                ],
            },
            {
                collectionName: 'test_collection',
                method: 'createIndexes',
                indexSpecs: [
                    {
                        key: {
                            test_index1: '2d',
                        },
                    },
                    {
                        key: {
                            test_index2: 1,
                        },
                    },
                ],
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract dropIndex commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.dropIndex('test_index');
        db.test_collection.dropIndex(
            'test_index',
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'dropIndex',
                index: 'test_index',
            },
            {
                collectionName: 'test_collection',
                method: 'dropIndex',
                index: 'test_index',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract dropIndexes commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.dropIndexes();
        db.test_collection.dropIndexes(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'dropIndexes',
            },
            {
                collectionName: 'test_collection',
                method: 'dropIndexes',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract listIndexes commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.listIndexes();
        db.test_collection.listIndexes(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'listIndexes',
            },
            {
                collectionName: 'test_collection',
                method: 'listIndexes',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract indexes commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.indexes();
        db.test_collection.indexes(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'indexes',
            },
            {
                collectionName: 'test_collection',
                method: 'indexes',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract indexExists commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.indexExists('test_index');
        db.test_collection.indexExists(
            ['test_index1', 'test_index2', 'test_index3'],
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'indexExists',
                indexes: 'test_index',
            },
            {
                collectionName: 'test_collection',
                method: 'indexExists',
                indexes: ['test_index1', 'test_index2', 'test_index3'],
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract indexInformation commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.indexInformation();
        db.test_collection.indexInformation(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'indexInformation',
            },
            {
                collectionName: 'test_collection',
                method: 'indexInformation',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract estimatedDocumentCount commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.estimatedDocumentCount();
        db.test_collection.estimatedDocumentCount(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'estimatedDocumentCount',
            },
            {
                collectionName: 'test_collection',
                method: 'estimatedDocumentCount',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract countDocuments commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.countDocuments();
        db.test_collection.countDocuments(
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'countDocuments',
            },
            {
                collectionName: 'test_collection',
                method: 'countDocuments',
                filter: {
                    test_filter_option: 'test_value',
                },
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should extract distinct commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.distinct('test_key');
        db.test_collection.distinct(
            'test_key',
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection',
                method: 'distinct',
                key: 'test_key',
            },
            {
                collectionName: 'test_collection',
                method: 'distinct',
                key: 'test_key',
                filter: {
                    test_filter_option: 'test_value',
                },
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});

test('should throw error on invalid syntax', () => {
    const result = extractMongoCommandsFromQuery('db_ERROR.test_collection1.find({})');

    expect(result).toEqual({
        parseSyntaxErrors: [
            {
                endColumn: 8,
                endLine: 1,
                message: "mismatched input 'db_ERROR' expecting {<EOF>, 'db'}",
                startColumn: 0,
                startLine: 1,
            },
        ],
    });
});
