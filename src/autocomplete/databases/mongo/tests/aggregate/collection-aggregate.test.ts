import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on aggregate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.aggregate();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended aggregate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        );

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        );

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        );

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended aggregate statements with explain modifier', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain(true);

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain(true);

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain(true);

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain(true);

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain({
            test_option: 'test_value',
        });

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain({
            test_option: 'test_value',
        });

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain({
            test_option: 'test_value',
        });

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain({
            test_option: 'test_value',
        });

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain('test_value');

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain('test_value');

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain('test_value');

        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain('test_value');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract aggregate commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.aggregate();
        db.collection('test_collection').aggregate();

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        );
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        );

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        );
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        );

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain(true);
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain(true);

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain(true);
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain(true);

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain({
            test_option: 'test_value',
        });
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain({
            test_option: 'test_value',
        });

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain({
            test_option: 'test_value',
        });
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain({
            test_option: 'test_value',
        });

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain('test_value');
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ]
        ).explain('test_value');

        db.test_collection.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain('test_value');
        db.collection('test_collection').aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain('test_value');
    `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            explain: {
                parameters: true,
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            explain: {
                parameters: true,
            },
        },

        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: true,
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: true,
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            explain: {
                parameters: {
                    test_option: 'test_value',
                },
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            explain: {
                parameters: {
                    test_option: 'test_value',
                },
            },
        },

        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: {
                    test_option: 'test_value',
                },
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: {
                    test_option: 'test_value',
                },
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            explain: {
                parameters: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            explain: {
                parameters: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: 'test_value',
            },
        },
    ];

    expect(result).toEqual({
        commands,
    });
});
