import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on indexExists statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexExists('test_index');

        db.collection('test_collection').indexExists('test_index');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended indexExists statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexExists(
            ['test_index1', 'test_index2', 'test_index3'],
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').indexExists(
            ['test_index1', 'test_index2', 'test_index3'],
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract indexExists commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.indexExists('test_index');
        db.collection('test_collection').indexExists('test_index');
        db.test_collection.indexExists(
            ['test_index1', 'test_index2', 'test_index3'],
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').indexExists(
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
                type: 'collection',
                method: 'indexExists',
                indexes: 'test_index',
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'indexExists',
                indexes: 'test_index',
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'indexExists',
                indexes: ['test_index1', 'test_index2', 'test_index3'],
                options: {
                    test_option: 'test_value',
                },
            },
            {
                collectionName: 'test_collection',
                type: 'collection',
                method: 'indexExists',
                indexes: ['test_index1', 'test_index2', 'test_index3'],
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});
