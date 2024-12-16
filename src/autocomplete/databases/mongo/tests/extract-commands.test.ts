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
                options: undefined,
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
