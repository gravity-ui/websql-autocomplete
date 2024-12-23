import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on dropIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.dropIndexes();

        db.collection('test_collection').dropIndexes();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended dropIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.dropIndexes(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').dropIndexes(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
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
