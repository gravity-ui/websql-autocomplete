import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on drop statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.drop();

        db.collection('test_collection').drop();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended drop statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.drop(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').drop(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract drop commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.drop();
        db.collection('test_collection').drop();

        db.test_collection.drop(
            {
                test_option: 'test_value',
            }
        );
        db.collection('test_collection').drop(
            {
                test_option: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'drop',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'drop',
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'drop',
            options: {
                test_option: 'test_value',
            },
        },
        {
            collectionName: 'test_collection',
            type: 'collection',
            method: 'drop',
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
