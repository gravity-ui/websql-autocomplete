import {
    Command,
    extractMongoCommandsFromQuery,
    parseMongoQueryWithCursor,
    parseMongoQueryWithoutCursor,
} from '../..';

test('should not report errors on indexInformation statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexInformation();

        db.collection('test_collection').indexInformation();

        db.indexInformation('test_collection');
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

        db.indexInformation('test_collection', {
            test_option: 'test_value',
        });
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest quoted collections on first argument of indexInformation method in database context', () => {
    const autocompleteResult = parseMongoQueryWithCursor(`
        db.indexInformation(|
    `);

    expect(autocompleteResult.suggestQuotedCollections).toEqual(true);
});

test('should extract indexInformation commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.indexInformation();
        db.collection('test_collection').indexInformation();
        db.indexInformation('test_collection');
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
        db.indexInformation('test_collection', {
            test_option: 'test_value',
        });
    `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'indexInformation',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'indexInformation',
        },
        {
            collectionName: 'test_collection',
            type: 'database',
            method: 'indexInformation',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'indexInformation',
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'indexInformation',
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'database',
            method: 'indexInformation',
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
