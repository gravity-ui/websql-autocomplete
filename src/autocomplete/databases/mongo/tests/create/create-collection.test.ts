import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on createCollection statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.createCollection('test_collection_new_name');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended createCollection statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.createCollection('test_collection', {
            test_option: 'test_value'
        });
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract createCollection commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.createCollection('test_collection_new_name');
        db.createCollection('test_collection_new_name', {
            test_option: 'test_value'
        });
    `);

    expect(result).toEqual({
        commands: [
            {
                collectionName: 'test_collection_new_name',
                type: 'database',
                method: 'createCollection',
            },
            {
                collectionName: 'test_collection_new_name',
                type: 'database',
                method: 'createCollection',
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});
