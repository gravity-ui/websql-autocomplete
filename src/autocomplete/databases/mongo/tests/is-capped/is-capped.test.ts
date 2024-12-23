import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on isCapped statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.isCapped();

        db.collection('test_collection').isCapped();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended isCapped statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.isCapped(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').isCapped(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract isCapped commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.isCapped();
        db.collection('test_collection').isCapped();

        db.test_collection.isCapped(
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').isCapped(
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
            },
            {
                collectionName: 'test_collection',
                method: 'isCapped',
                options: {
                    test_option: 'test_value',
                },
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
