import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on countDocuments statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.countDocuments();

        db.collection('test_collection').countDocuments();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended countDocuments statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.countDocuments(
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').countDocuments(
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract countDocuments commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.countDocuments();
        db.collection('test_collection').countDocuments();
        db.test_collection.countDocuments(
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').countDocuments(
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
