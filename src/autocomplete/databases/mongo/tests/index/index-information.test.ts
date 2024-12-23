import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on indexInformation statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexInformation();

        db.collection('test_collection').indexInformation();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended indexInformation statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexInformation(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').indexInformation(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract indexInformation commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.indexInformation();
        db.collection('test_collection').indexInformation();
        db.test_collection.indexInformation(
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').indexInformation(
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
            },
            {
                collectionName: 'test_collection',
                method: 'indexInformation',
                options: {
                    test_option: 'test_value',
                },
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
