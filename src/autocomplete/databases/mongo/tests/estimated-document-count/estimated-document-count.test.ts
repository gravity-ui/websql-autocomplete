import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on estimatedDocumentCount statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.estimatedDocumentCount();

        db.collection('test_collection').estimatedDocumentCount();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended estimatedDocumentCount statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.estimatedDocumentCount(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').estimatedDocumentCount(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract estimatedDocumentCount commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.estimatedDocumentCount();
        db.collection('test_collection').estimatedDocumentCount();
        db.test_collection.estimatedDocumentCount(
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').estimatedDocumentCount(
            {
                test_option: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'estimatedDocumentCount',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'estimatedDocumentCount',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'estimatedDocumentCount',
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'estimatedDocumentCount',
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
