import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on createIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
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
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended createIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
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

    expect(autocompleteResult.errors).toHaveLength(0);
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
        db.collection('test_collection').createIndexes([
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
        db.collection('test_collection').createIndexes(
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
