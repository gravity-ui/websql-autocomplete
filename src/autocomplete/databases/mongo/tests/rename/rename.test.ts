import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on rename statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.rename('test_collection_new_name');

        db.collection('test_collection').rename('test_collection_new_name');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended rename statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.rename(
            'test_collection_new_name',
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').rename(
            'test_collection_new_name',
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract rename commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.rename('test_collection_new_name');
        db.collection('test_collection').rename('test_collection_new_name');

        db.test_collection.rename(
            'test_collection_new_name',
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').rename(
            'test_collection_new_name',
            {
                test_option: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'rename',
            newName: 'test_collection_new_name',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'rename',
            newName: 'test_collection_new_name',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'rename',
            newName: 'test_collection_new_name',
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'rename',
            newName: 'test_collection_new_name',
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
