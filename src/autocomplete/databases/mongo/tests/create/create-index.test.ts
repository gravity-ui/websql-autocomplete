import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on createIndex statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex('test_index');

        db.collection('test_collection').createIndex('test_index');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on createIndex statement with array in argument', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex([['test_index_1', -1], ['test_index_2', 1]]);

        db.collection('test_collection').createIndex([['test_index_1', -1], ['test_index_2', 1]]);
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on createIndex statement with object argument', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex({
            test_index_1: -1,
            test_index_2: 1,
        });

        db.collection('test_collection').createIndex({
            test_index_1: -1,
            test_index_2: 1,
        });
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended createIndex statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex(
            {
                test_index_1: -1,
                test_index_2: 1,
            },
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').createIndex(
            {
                test_index_1: -1,
                test_index_2: 1,
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract createIndex commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.createIndex('test_index');
        db.collection('test_collection').createIndex('test_index');
        db.test_collection.createIndex([['test_index_1', -1], ['test_index_2', 1]]);
        db.collection('test_collection').createIndex([['test_index_1', -1], ['test_index_2', 1]]);
        db.test_collection.createIndex({
            test_index_1: -1,
            test_index_2: 1,
        });
        db.collection('test_collection').createIndex({
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
        db.collection('test_collection').createIndex(
            {
                test_index_1: -1,
                test_index_2: 1,
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: 'test_index',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: 'test_index',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: [
                ['test_index_1', -1],
                ['test_index_2', 1],
            ],
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: [
                ['test_index_1', -1],
                ['test_index_2', 1],
            ],
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: {
                test_index_1: -1,
                test_index_2: 1,
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: {
                test_index_1: -1,
                test_index_2: 1,
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: {
                test_index_1: -1,
                test_index_2: 1,
            },
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'createIndex',
            indexSpec: {
                test_index_1: -1,
                test_index_2: 1,
            },
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
