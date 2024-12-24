import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on dropCollection statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.dropCollection('test_collection_name');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended dropCollection statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.dropCollection(
            'test_collection_name',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract dropCollection commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.dropCollection('test_collection_name');
        db.dropCollection(
            'test_collection_name',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'dropCollection',
            collectionName: 'test_collection_name',
        },
        {
            type: 'database',
            method: 'dropCollection',
            collectionName: 'test_collection_name',
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
