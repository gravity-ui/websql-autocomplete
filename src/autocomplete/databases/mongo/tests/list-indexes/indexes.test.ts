import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on indexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexes();

        db.collection('test_collection').indexes();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended indexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexes(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').indexes(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
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
